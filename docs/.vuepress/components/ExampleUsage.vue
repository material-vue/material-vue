<template>
  <div class="container">
    <div class="container__top">
      <p class="m-text m-headline-small">{{title}}</p>
      <div class="icons_block">
        <span class="theme-switch material-symbols-outlined" @click="dark_theme = !dark_theme">{{dark_theme ? 'light_mode' : 'dark_mode'}}</span>
        <span class="theme-switch material-symbols-outlined" @click="code_opened = !code_opened; open_code()">code</span>
      </div>
    </div>
    <div class="code_block" ref="code_ref" :class="[code_opened? 'code_block--opened' : 'code_block--closed']">
      <pre><code class="language-html"><p ref="code_place">{{get_code? get_code : code}}</p></code></pre>
    </div>

    <div class="content" :class="[dark_theme ? 'dark' : 'light', type]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
export default {
  props: {
    code: {
      type: String
    },
    title: {
      type: String
    },
    type: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'v-gapped', 'h-gapped'].includes(value)
      },
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      code_opened: false,
      dark_theme: false,
      code_tabbed: ''
    }
  },
  mounted() {
    let code_result = ''
    let tab_prefix = ''
    let tag_closed = []

    for (let i of [...this.$props.code.matchAll(/\n<\/.*>/g)]) {
      let tag = i[0].replace('/', '')+''
      tag_closed.push(tag.replace('\n', '').replace('>', ''));
    }
    tag_closed = tag_closed.reverse();

    for (let stroke of this.$props.code.split('\n')) {
      if (stroke.startsWith('</')) {
        tab_prefix = tab_prefix.substring(1)
        console.log(tab_prefix, '00', stroke)

      }
      code_result += tab_prefix + stroke + '\n'
      console.log(tag_closed[0], stroke, tab_prefix)
      if (stroke.startsWith(tag_closed[0]+' ') || stroke.startsWith(tag_closed[0]+'>')) {
        tab_prefix += '\t'
        tag_closed.shift()
      }

    }
    this.code_tabbed = code_result;


  },
  computed: {
    get_height() {
      return this.$refs.code_ref.scrollHeight+24+'px'
    },
    get_code() {
      return this.code_tabbed;
    }
  },
  methods: {
    open_code() {
      hljs.highlightAll();
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 16px;
  width: 100%;
  height: min-content;


  border-radius: 16px;
  border: solid 1px var(--outline);
  overflow: hidden;

  &__top {
    width: 100%;
    padding: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 1px var(--outline);
    background-color: rgba(0, 0, 0, 0.10);
  }

  .m-text {
    color: var(--on-primary-container-color)
  }
}
.content {
  width: 100%;
  height: v-bind(height);
  position: relative;
  overflow-y: auto;

  padding: 16px;
  background-color: var(--surface-container-lowest);
}
.h-gapped {
  display: flex;
  gap: 8px;
}
.v-gapped {
  display: flex;
  gap: 8px;
  flex-direction: column;
}

.dark {
  //.content {
  //  background-color: rgba(0, 0, 0, 0.45);
  //}

  .container__top {
    background-color: rgba(0, 0, 0, 0.25);
  }
}

.theme-switch {
  cursor: pointer;
}

pre {
  background-color: rgba(19,23,28,0.97);
  margin: 0;
  border-radius: 0;

  white-space: pre;
}
.hljs,
.hljs-subst {
  //color: var(--on-surface);
  color: white;
}
.hljs-name {
  color: #2aaac1;
}
.code_block {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;

  &--closed {
    max-height: 0;
  }
  &--opened {
    max-height: v-bind(get_height);
  }
}

.icons_block {
  display: flex;
  gap: 8px
}
</style>