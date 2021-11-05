//// GRID ////
const placeInGrid = (screen, window, grid, point) => {
  const size = getSize(screen, window, grid)
  const x = (size.width * point.x) + padding.left + (padding.gap * point.x)
  const y = (size.height * point.y) + statusbar.height + padding.top + (padding.gap * point.y)

  if (window) {
    window.setFrame({
      x: x,
      y: y,
      width: size.width,
      height: size.height
    })
  }
}
const getSize = (screen, window, grid) => {
  const rows = grid.rows
  const cols = grid.cols

  return {
    width: (screen.width - (padding.left + padding.right) - (padding.gap * (cols - 1))) / cols,
    height: (screen.height - (padding.top + padding.bottom + statusbar.height) - (padding.gap * (rows - 1))) / rows
  }
}
