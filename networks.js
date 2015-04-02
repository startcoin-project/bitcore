var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('ffc4badf'),
  addressVersion: 0x7d, // Starts with s
  privKeyVersion: 0xfd,
  P2SHVersion: 0x05,
  hkeyPublicVersion: 0x0488B21E,
  hkeyPrivateVersion: 0x0488ADE4,
  blockHashFunc: 'x11',
  genesisBlock: {
    hash: hex('4844af8e8f4834402fc61ce4b35f8d225510d5eb187fee1de8f5dcb5b60b0000'),
    merkle_root: hex('879a5f109e85a1dce436c1dc18803ff2a60bf8ec5acc631d4ba41a391f8a82b7'),
    height: 0,
    nonce: 1494132,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405688500,
    bits: 0x1e0fffff
  },
  dnsSeeds: [
    'dnsseed.startcoin.org'
  ],
  defaultClientPort: 9247
};

exports.startcoin = exports.livenet;
exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('ffc4b9de'),
  addressVersion: 0x7f, // Starts with t
  privKeyVersion: 0xf4,
  P2SHVersion: 0xc4,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  blockHashFunc: 'x11',
  genesisBlock: {
    hash: hex('1c5b057254a13f6e5df49cd1e17e0bddc27e5655a4fdf00150c7f4d844030000'),
    merkle_root: hex('879a5f109e85a1dce436c1dc18803ff2a60bf8ec5acc631d4ba41a391f8a82b7'),
    height: 0,
    nonce: 1020189,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1404645149,
    bits: 0x1e0fffff
  },
  dnsSeeds: [],
  defaultClientPort: 19247
};
