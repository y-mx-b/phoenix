////// Floating Window Management //////
//// Full ////
Key.on(keys.full.key, keys.full.mod,
  () => floatFull(Focused.screen(), Focused.window())
)

//// Halves ////
// Left
Key.on(keys.halves.left.key, keys.halves.left.mod,
  () => floatLeftHalf(Focused.screen(), Focused.window())
)
// Right
Key.on(keys.halves.right.key, keys.halves.right.mod,
  () => floatRightHalf(Focused.screen(), Focused.window())
)
// Top
Key.on(keys.halves.top.key, keys.halves.top.mod,
  () => floatTopHalf(Focused.screen(), Focused.window())
)
// Bottom
Key.on(keys.halves.bottom.key, keys.halves.bottom.mod,
  () => floatBottomHalf(Focused.screen(), Focused.window())
)

//// Quarters ////
// Top Left
Key.on(keys.quarters.topLeft.key, keys.quarters.topLeft.mod,
  () => floatTopLeftQuarter(Focused.screen(), Focused.window())
)
// Top Right
Key.on(keys.quarters.topRight.key, keys.quarters.topLeft.mod,
  () => floatTopRightQuarter(Focused.screen(), Focused.window())
)
// Bottom Left
Key.on(keys.quarters.bottomLeft.key, keys.quarters.bottomLeft.mod,
  () => floatBottomLeftQuarter(Focused.screen(), Focused.window())
)
// Bottom Right
Key.on(keys.quarters.bottomRight.key, keys.quarters.bottomRight.mod,
  () => floatBottomRightQuarter(Focused.screen(), Focused.window())
)

//// Thirds ////
// Left 1/3
Key.on(keys.thirds.leftOneThird.key, keys.thirds.leftOneThird.mod,
  () => floatLeftOneThird(Focused.screen(), Focused.window())
)
// Left 2/3
Key.on(keys.thirds.leftTwoThirds.key, keys.thirds.leftTwoThirds.mod,
  () => floatLeftTwoThirds(Focused.screen(), Focused.window())
)
// Middle 1/3
Key.on(keys.thirds.middleOneThird.key, keys.thirds.middleOneThird.mod,
  () => floatMiddleOneThird(Focused.screen(), Focused.window())
)
// Right 1/3
Key.on(keys.thirds.rightOneThird.key, keys.thirds.rightOneThird.mod,
  () => floatRightOneThird(Focused.screen(), Focused.window())
)
// Right 2/3
Key.on(keys.thirds.rightTwoThirds.key, keys.thirds.rightTwoThirds.mod,
  () => floatRightTwoThirds(Focused.screen(), Focused.window())
)
