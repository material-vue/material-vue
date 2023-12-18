import { EASING } from './motion.js'

const scrimFade = {
  enterActiveClass: `ease-[${EASING.STANDARD_DECELERATE}] duration-300`,
  enterFromClass: '!opacity-0',
  enterToClass: '!opacity-40',
  leaveActiveClass: `ease-[${EASING.STANDARD_DECELERATE}] duration-200`,
  leaveFromClass: '!opacity-40',
  leaveToClass: '!opacity-0',
}

export { scrimFade }
