// Personal config
Phoenix.set({
  daemon: true,
  openAtLogin: true
})


require('~/.config/phoenix/Variables/Modifiers.js')
require('~/.config/phoenix/config.js')
require('~/.config/phoenix/Variables/Constants.js')

// Modal Tiling Window Management
// Available Modes:
// Binary Partition, Floating (extra key bindings)

// Floating Window Management
require('~/.config/phoenix/Float/Declarations.js')
require('~/.config/phoenix/Float/Functions.js')

// Reload Phoenix and config files
const reloadPhoenix = new Key('z', treeNavMod, () => {
  Phoenix.reload()
})
