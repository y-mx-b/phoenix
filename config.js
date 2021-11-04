Phoenix.set({
  daemon: true,
  openAtLogin: true
})

const statusbar = {
  height: 25
}

const padding = {
  topBottom: 8,
  leftRight: 8,
  gap: 6
}

const keys = {
  full: {
    key: 'return',
    mod: floatMod
  },
  halves: {
    left: {
      key: 'h',
      mod: floatMod
    },
    right: {
      key: 'l',
      mod: floatMod
    },
    top: {
      key: 'up',
      mod: floatMod
    },
    bottom: {
      key: 'down',
      mod: floatMod
    }
  },
  quarters: {
    topLeft: {
      key: 'u',
      mod: floatMod
    },
    topRight: {
      key: 'i',
      mod: floatMod
    },
    bottomLeft: {
      key: 'j',
      mod: floatMod
    },
    bottomRight: {
      key: 'k',
      mod: floatMod
    }
  },
  thirds: {
    leftOneThird: {
      key: 'n',
      mod: floatMod
    },
    leftTwoThirds: {
      key: 'y',
      mod: floatMod
    },
    middleOneThird: {
      key: 'o',
      mod: floatMod
    },
    rightOneThird: {
      key: 'p',
      mod: floatMod
    },
    rightTwoThirds: {
      key: 'm',
      mod: floatMod
    }
  }
}
