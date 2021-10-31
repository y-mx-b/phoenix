const Focused = {
  screen: () => { return Screen.main().flippedFrame() },
  window: () => { return Window.focused() }
}
const Sizes = {
  full: {
    width: Focused.screen().width - (2 * padding.leftRight),
    height: Focused.screen().height - statusbar.height - (2 * padding.topBottom)
  },
  verticalHalf: {
    width: (Focused.screen().width - padding.gap) / 2 - padding.leftRight,
    height: Focused.screen().height - (2 * padding.topBottom) - statusbar.height
  },
  horizontalHalf: {
    width: Focused.screen().width - (2 * padding.leftRight),
    height: (Focused.screen().height - padding.gap) / 2 - padding.leftRight
  },
  quarter: {
    width: (Focused.screen().width - padding.gap) / 2 - padding.leftRight,
    height : (Focused.screen().height - statusbar.height - padding.topBottom - padding.topBottom - padding.gap) / 2
  },
  oneThird: {
    width: (Focused.screen().width - (2 * padding.gap) - (2 * padding.leftRight)) / 3,
    height: Focused.screen().height - (2 * padding.topBottom) - statusbar.height
  },
  twoThirds: {
    width: 2 * (Focused.screen().width - padding.leftRight - (2 * padding.gap)) / 3 + padding.gap,
    height: Focused.screen().height - (2 * padding.topBottom) - statusbar.height
  }
}
const Positions = {
  topLeft: () => {
    return {
      x: padding.leftRight,
      y: padding.topBottom + statusbar.height
    }
  },
  topRight: () => {
    return {
      x: (Focused.screen().width + padding.gap) / 2,
      y: padding.topBottom + statusbar.height
    }
  },
  bottomLeft: () => {
    return {
      x: padding.leftRight,
      y: statusbar.height + (Focused.screen().height - statusbar.height - padding.topBottom - padding.topBottom - padding.gap) / 2 + padding.topBottom + padding.gap,
    }
  },
  bottomRight: () => {
    return {
      x: (Focused.screen().width + padding.gap) / 2,
      y: statusbar.height + (Focused.screen().height - statusbar.height - padding.topBottom - padding.topBottom - padding.gap) / 2 + padding.topBottom + padding.gap,
    }
  },
  topThirdMiddle: () => {
    return {
      x: Sizes.oneThird.width + padding.leftRight + padding.gap,
      y: padding.topBottom + statusbar.height
    }
  },
  topThirdRight: () => {
    return {
      x: 2 * (Sizes.oneThird.width + padding.gap) + padding.leftRight,
      y: padding.topBottom + statusbar.height
    }
  }
}
