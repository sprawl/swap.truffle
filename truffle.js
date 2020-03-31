const Web3 = require('web3');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    devnet: {
      network_id: "*",
      from: "0x00a329c0648769A73afAc7F9381E08FB43dBEA72",
      provider: new Web3.providers.HttpProvider('http://ethereum-sprawl-testnet:8090')
    },
    testnet: {
      network_id: "*",
      from: "0x00a329c0648769A73afAc7F9381E08FB43dBEA72",
      provider: new Web3.providers.HttpProvider('https://eth.testnet.sprawl.equilibrium.co')
    }
  },
  mocha: {
    enableTimeouts: false
  }
}
