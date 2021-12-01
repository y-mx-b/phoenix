////// Floating Window Management //////
//// Full ////
Key.on(keys.full.key, keys.full.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 1, cols: 1 },
                    { x: 0, y: 0, width: 1, height: 1})
)

//// Halves ////
// Left
Key.on(keys.halves.left.key, keys.halves.left.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 1, cols: 2 },
                    { x: 0, y: 0, width: 1, height: 1 })
)
// Right
Key.on(keys.halves.right.key, keys.halves.right.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 1, cols: 2 },
                    { x: 1, y: 0, width: 1, height: 1 })
)
// Top
Key.on(keys.halves.top.key, keys.halves.top.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 2, cols: 1 },
                    { x: 0, y: 0, width: 1, height: 1 })
)
// Bottom
Key.on(keys.halves.bottom.key, keys.halves.bottom.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 2, cols: 1 },
                    { x: 0, y: 1, width: 1, height: 1 })
)

//// Quarters ////
// Top Left
Key.on(keys.quarters.topLeft.key, keys.quarters.topLeft.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 2, cols: 2 },
                    { x: 0, y: 0, width: 1, height: 1 })
)
// Top Right
Key.on(keys.quarters.topRight.key, keys.quarters.topLeft.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 2, cols: 2 },
                    { x: 1, y: 0, width: 1, height: 1 })
)
// Bottom Left
Key.on(keys.quarters.bottomLeft.key, keys.quarters.bottomLeft.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 2, cols: 2 },
                    { x: 0, y: 1, width: 1, height: 1 })
)
// Bottom Right
Key.on(keys.quarters.bottomRight.key, keys.quarters.bottomRight.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 2, cols: 2 },
                    { x: 1, y: 1, width: 1, height: 1 })
)

//// Thirds ////
// Left 1/3
Key.on(keys.thirds.leftOneThird.key, keys.thirds.leftOneThird.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 1, cols: 3 },
                    { x: 0, y: 0, width: 1, height: 1 })
)
// Left 2/3
Key.on(keys.thirds.leftTwoThirds.key, keys.thirds.leftTwoThirds.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 1, cols: 3 },
                    { x: 0, y: 0, width: 2, height: 1 })
)
// Middle 1/3
Key.on(keys.thirds.middleOneThird.key, keys.thirds.middleOneThird.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 1, cols: 3 },
                    { x: 1, y: 0, width: 1, height: 1 })
)
// Right 1/3
Key.on(keys.thirds.rightOneThird.key, keys.thirds.rightOneThird.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 1, cols: 3 },
                    { x: 2, y: 0, width: 1, height: 1 })
)
// Right 2/3
Key.on(keys.thirds.rightTwoThirds.key, keys.thirds.rightTwoThirds.mod,
  () => placeInGrid(Focused.screen(), Focused.window(),
                    { rows: 1, cols: 3 },
                    { x: 1, y: 0, width: 2, height: 1 })
)


//// EXTRA
Key.on(keys.extra.center.key, keys.extra.center.mod,
  () => center(Focused.screen(), Focused.window())
  )