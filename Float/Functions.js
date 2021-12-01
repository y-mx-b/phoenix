//// GRID ////
const placeInGrid = (screen, window, grid, rect) => {
  const size = getSize(screen, window, grid)
  const x = (size.width * rect.x) + padding.left 
            + (padding.gap * rect.x)
  const y = (size.height * rect.y) + statusbar.height
            + padding.top + (padding.gap * rect.y)
  if (window) {
    window.setFrame({
      x: x,
      y: y,
      width: (rect.width - 1) * (size.width + padding.gap)
              + size.width,
      height: (rect.height - 1) * (size.height + padding.gap)
              + size.height
    })
  }
}
// TODO account for multiple displays
const getSize = (screen, window, grid) => {
  const rows = grid.rows
  const cols = grid.cols

  return {
    width: (screen.width - (padding.left + padding.right)
            - (padding.gap * (cols - 1))) / cols,
    height: (screen.height
            - (padding.top + padding.bottom + statusbar.height) 
            - (padding.gap * (rows - 1))
            ) / rows
  }
}

//// EXTRA ////
const center = (screen, window) => {
  const adjustedHeight = screen.height - statusbar.height
                        - padding.top - padding.bottom
  const adjustedWidth = screen.width - padding.left - padding.right
  const heightOffset = (adjustedHeight - window.size().height) / 2
  const widthOffset = (adjustedWidth - window.size().width) / 2

  window.setTopLeft({
    x: padding.left + widthOffset,
    y: statusbar.height + padding.top + heightOffset
  })
}