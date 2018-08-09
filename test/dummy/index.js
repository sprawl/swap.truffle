const setupSwapApp = require('../setupSwapApp')

const { startDummy, stopDummy } = require('./dummy')

const fs = require('fs')

const launchDummy = () => {
  try {
    fs.mkdir('./.storage', (err) => {})

    const app = setupSwapApp({
      network: 'localnet',
      contracts: { ETH, TOKEN },
    })

    app.services.room.on('ready', () => {
      startDummy(app.services)
    })
  } catch ({ name, message, ...err }) {
    console.log({ name, message, ...err })
  }
}

launchDummy()

module.exports = {
  launchDummy,
  startDummy,
  stopDummy,
}
