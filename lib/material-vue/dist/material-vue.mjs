import { openBlock as r, createElementBlock as c, normalizeClass as _, createElementVNode as i, renderSlot as d, toRaw as h, toDisplayString as y, createCommentVNode as v, computed as g, normalizeStyle as $ } from "vue";
const u = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, s] of n)
    t[a] = s;
  return t;
}, w = {
  name: "MButton",
  props: {
    enabled: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "filled",
      validator(e) {
        return ["filled", "outlined", "filled-tonal"].includes(e);
      }
    },
    wrap: {
      type: Boolean,
      default: !0
    }
  },
  mounted() {
    let e = this.$refs;
    function n(t) {
      const a = t.currentTarget, s = e.ripple, o = Math.max(a.clientWidth, a.clientHeight), l = o / 2;
      s.style.width = s.style.height = `${o}px`, s.style.left = `${t.clientX - a.offsetLeft - l}px`, s.style.top = "10px", a.removeChild(s), a.appendChild(s);
    }
    e.btn.addEventListener("click", n);
  }
}, b = { class: "container__label-text m-text m-headline-small" }, x = {
  ref: "ripple",
  class: "ripple"
};
function N(e, n, t, a, s, o) {
  return r(), c("div", {
    ref: "btn",
    class: _(["container", [{ "container--enabled": t.enabled }, t.type, { "container--wrap": t.wrap }]])
  }, [
    i("p", b, [
      d(e.$slots, "default", {}, void 0, !0)
    ]),
    i("span", x, null, 512)
  ], 2);
}
const S = /* @__PURE__ */ u(w, [["render", N], ["__scopeId", "data-v-472b5e2b"]]);
const M = {
  props: {
    value: {
      type: String
    },
    content: {
      type: String
    }
  },
  methods: {
    selectItem() {
      h(this.$parent).selectItem({ value: this.value });
    }
  },
  inject: ["selected"],
  computed: {
    isActive() {
      return this.selected === this.value ? "item--active" : "item--inactive";
    }
  },
  mounted() {
    let e = this.$refs;
    function n(t) {
      const a = t.currentTarget, s = e.ripple, o = Math.max(a.clientWidth, a.clientHeight), l = o / 2;
      s.style.width = s.style.height = `${o}px`, s.style.left = `${t.clientX - a.offsetLeft - l}px`, s.style.top = `${t.clientY - a.offsetTop - l}px`, a.removeChild(s), a.appendChild(s);
    }
    e.item.addEventListener("click", n);
  }
}, B = ["innerHTML"], I = {
  ref: "ripple",
  class: "ripple"
};
function L(e, n, t, a, s, o) {
  return r(), c("div", {
    ref: "item",
    class: _(["item", [o.isActive]]),
    onClick: n[0] || (n[0] = (...l) => o.selectItem && o.selectItem(...l))
  }, [
    i("p", {
      class: "item__label m-text m-label-large",
      innerHTML: t.content
    }, null, 8, B),
    i("span", I, null, 512)
  ], 2);
}
const m = /* @__PURE__ */ u(M, [["render", L], ["__scopeId", "data-v-51a69132"]]);
const k = {
  props: {
    title: {
      type: String,
      required: !1,
      default: ""
    },
    divider: {
      type: Boolean,
      required: !1,
      default: !1
    }
  }
}, q = { class: "section" }, C = { key: 0 }, E = { class: "section__header m-text m-title-small" };
function T(e, n, t, a, s, o) {
  return r(), c("div", q, [
    t.title.length > 0 ? (r(), c("div", C, [
      i("p", E, y(t.title), 1)
    ])) : v("", !0),
    d(e.$slots, "default", {}, void 0, !0)
  ]);
}
const f = /* @__PURE__ */ u(k, [["render", T], ["__scopeId", "data-v-b569e39f"]]);
const D = {
  name: "MNavigationDrawer",
  components: { MNavigationDrawerSection: f, MNavigationDrawerItem: m },
  expose: ["openNav", "closeNav", "selectItem"],
  props: {
    sections: {
      type: Array
    },
    content_area: {
      type: String,
      required: !0
      //only for non-modals
    },
    modal: {
      type: Boolean,
      default: !1
    },
    side: {
      type: String,
      default: "left",
      validator(e) {
        return ["right", "left", "full"].includes(e);
      }
    },
    rounded: {
      type: Boolean,
      default: !0
    },
    mask: {
      type: String
    },
    style: {
      type: String
    }
  },
  data() {
    return {
      opened: !1,
      selected: "1"
    };
  },
  provide() {
    return {
      selected: g(() => this.selected)
    };
  },
  methods: {
    selectItem(e) {
      this.selected = e.value, this.$forceUpdate();
    },
    openNav() {
      this.opened = !0, this.$refs.drawer.style.width = "360px", this.modal ? document.getElementsByClassName("m-scrim")[0].style.opacity = "0.4" : (this.side === "left" ? document.querySelector(this.content_area).style.marginLeft = "360px" : document.querySelector(this.content_area).style.marginRight = "360px", document.querySelector(this.content_area).style.setProperty("width", "calc(100% - 360px)"));
    },
    closeNav() {
      this.opened = !1, this.$refs.drawer.style.width = "0", document.querySelector(this.content_area).style.width = "100%", document.querySelector(this.content_area).style.marginLeft = "0", document.querySelector(this.content_area).style.marginRight = "0", this.modal && (document.getElementsByClassName("m-scrim")[0].style.opacity = "0");
    }
  },
  mounted() {
    this.$refs.drawer.addEventListener("mousedown", (n) => {
      n.stopPropagation();
    });
    let e = document.querySelector(this.content_area);
    e.style.transition = "margin-left .5s, width .5s, margin-right .5s", document.addEventListener("mousedown", () => {
      this.opened && this.modal && this.closeNav();
    }), this.modal || this.openNav();
  },
  watch: {
    modal(e, n) {
      e ? this.closeNav() : (document.getElementsByClassName("m-scrim")[0].style.opacity = "0", this.openNav());
    },
    side(e, n) {
      this.opened && (this.closeNav(), this.openNav());
    }
  }
}, R = { class: "inner-container__headline" };
function H(e, n, t, a, s, o) {
  return r(), c("div", {
    ref: "drawer",
    class: _(["container drawer", [{ "container--modal": t.modal, "container--rounded": t.rounded }, "container--" + t.side]])
  }, [
    i("div", {
      class: "inner-container",
      style: $(t.style)
    }, [
      i("div", R, [
        d(e.$slots, "prepend", {}, void 0, !0)
      ]),
      d(e.$slots, "default", {}, void 0, !0)
    ], 4)
  ], 2);
}
const A = /* @__PURE__ */ u(D, [["render", H], ["__scopeId", "data-v-fa448e9f"]]);
const P = {
  name: "MTopBar",
  props: {
    configuration: {
      type: String,
      default: "small-centered",
      validator(e) {
        return ["small-centered", "small", "medium", "large"].includes(e);
      }
    },
    behavior: {
      type: String,
      default: "background",
      validator(e) {
        return ["none", "elevation", "background"].includes(e);
      }
    }
  },
  mounted() {
    let e = this.$refs.top_bar;
    window.onscroll = function() {
      n();
    };
    function n() {
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? e.classList.add("container__scrolled") : e.classList.remove("container__scrolled");
    }
  }
}, z = { class: "container__headline m-text m-title-large" };
function O(e, n, t, a, s, o) {
  return r(), c("div", {
    ref: "top_bar",
    class: _(["container", ["behavior_" + t.behavior]])
  }, [
    i("p", z, [
      d(e.$slots, "default")
    ])
  ], 2);
}
const V = /* @__PURE__ */ u(P, [["render", O], ["__scopeId", "data-v-2e6a4a1a"]]);
const p = { MButton: S, MTopBar: V, MNavigationDrawerSection: f, MNavigationDrawerItem: m, MNavigationDrawer: A }, X = {
  install(e) {
    for (const n in p)
      if (p.hasOwnProperty(n)) {
        const t = p[n];
        e.component(t.name, t);
      }
  }
};
export {
  X as default
};
