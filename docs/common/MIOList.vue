<template>
  <ul>
    <li v-for="item in items">
      <div class="point">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4.95843 0.279933C5.5378 -0.353974 6.58452 0.173492 6.41974 1.01632L6.05454 2.88412C5.99767 3.17501 6.09646 3.47451 6.31525 3.67447L7.72007 4.95843C8.35397 5.5378 7.82651 6.58452 6.98368 6.41974L5.11588 6.05454C4.82499 5.99767 4.52549 6.09646 4.32553 6.31525L3.04157 7.72007C2.4622 8.35397 1.41548 7.82651 1.58026 6.98368L1.94545 5.11588C2.00233 4.82499 1.90354 4.52549 1.68475 4.32553L0.279933 3.04157C-0.353974 2.4622 0.173492 1.41548 1.01632 1.58026L2.88412 1.94545C3.17501 2.00233 3.47451 1.90354 3.67447 1.68475L4.95843 0.279933Z" fill="currentColor"/>
        </svg>
      </div>
      <span v-text="item"/>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
ul {
  color: var(--md-sys-color-on-surface);
  list-style: none;
  padding-left: 0;
}

ul li {
  position: relative;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

ul li:nth-child(2) {
 --rotation: 2;
}
ul li:nth-child(3n) {
 --rotation: 5;
}
ul li:nth-child(3n+1) {
 --rotation: 7;
}
ul li:nth-child(3n+2) {
  --rotation: 4;
}
ul li:nth-child(4n+1) {
  --rotation: 6;
}
ul li:nth-child(4n+3) {
  --rotation: 3;
}

.point {
  width: 8px;
  height: 8px;
  fill: var(--md-sys-color-on-surface);
  transform: rotate(calc(var(--rotation, 2) * 32deg));
  line-height: 0;
  text-align: center;
}

</style>
