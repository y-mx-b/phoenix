//// Full ////
const floatFull = (screen, window) => {
  if (window) {
    window.setFrame({
      x: padding.leftRight,
      y: padding.topBottom + statusbar.height,
      width: Sizes.full.width,
      height: Sizes.full.height
    })
  }
}

//// Halves ////
const floatLeftHalf = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topLeft().x,
      y: Positions.topLeft().y,
      width: Sizes.verticalHalf.width,
      height: Sizes.verticalHalf.height
    })
  }
}
const floatRightHalf = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topRight().x,
      y: Positions.topRight().y,
      width: Sizes.verticalHalf.width,
      height: Sizes.verticalHalf.height
    })
  }
}
const floatTopHalf = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topLeft().x,
      y: Positions.topLeft().y,
      width: Sizes.horizontalHalf.width,
      height: Sizes.horizontalHalf.height
    })
  }
}
const floatBottomHalf = (screen,window) => {
  if (window) {
    window.setFrame({
      x: Positions.bottomLeft().x,
      y: Positions.bottomRight().y,
      width: Sizes.horizontalHalf.width,
      height: Sizes.horizontalHalf.height
    })
  }
}

//// Quarters ////
const floatTopLeftQuarter = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topLeft().x,
      y: Positions.topLeft().y,
      width: Sizes.quarter.width,
      height: Sizes.quarter.height
    })
  }
}
const floatTopRightQuarter = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topRight().x,
      y: Positions.topRight().y,
      width: Sizes.quarter.width,
      height: Sizes.quarter.height
    })
  }
}
const floatBottomLeftQuarter = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.bottomLeft().x,
      y: Positions.bottomLeft().y,
      width: Sizes.quarter.width,
      height: Sizes.quarter.height
    })
  }
}
const floatBottomRightQuarter = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.bottomRight().x,
      y: Positions.bottomRight().y,
      width: Sizes.quarter.width,
      height: Sizes.quarter.height
    })
  }
}

//// Thirds ////
const floatLeftOneThird = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topLeft().x,
      y: Positions.topLeft().y,
      width: Sizes.oneThird.width,
      height: Sizes.oneThird.height
    })
  }
}
const floatLeftTwoThirds = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topLeft().x,
      y: Positions.topLeft().y,
      width: Sizes.twoThirds.width,
      height: Sizes.twoThirds.height
    })
  }
}
const floatMiddleOneThird = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topThirdMiddle().x,
      y: Positions.topThirdMiddle().y,
      width: Sizes.oneThird.width,
      height: Sizes.oneThird.height
    })
  }
}
const floatRightOneThird = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topThirdRight().x,
      y: Positions.topThirdRight().y,
      width: Sizes.oneThird.width,
      height: Sizes.oneThird.height
    })
  }
}
const floatRightTwoThirds = (screen, window) => {
  if (window) {
    window.setFrame({
      x: Positions.topThirdMiddle().x,
      y: Positions.topThirdMiddle().y,
      width: Sizes.twoThirds.width,
      height: Sizes.twoThirds.height
    })
  }
}
