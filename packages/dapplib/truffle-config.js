require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food manage remember sad upper hidden kiwi sudden gas'; 
let testAccounts = [
"0x8b79055d954cb2185574ba182da1277ce76d7d1b842ecbe491a6120e0647990c",
"0x09571a7e1152e2cbd52be75d074a6b1dd1a54939bceb63ef47b41ae5de5ae2f5",
"0x5c5f0f4af9c118c8d0809612da5489364e21a939f7096e5dfe9947a1973d7f12",
"0x9dc2a1c57b8896df83925eef35f1e33812d47bd6f55a52f9ab052f6f3ef1e2c8",
"0x6f5fdc87fdc6cf008f5adb636927887f98bac894cd52e7ea13a7bcf719934449",
"0x8d5ed6a7c55d9b157d525043be785311ac4e43dcd919dd5524043b906b589cf0",
"0x04e514048a72ca5e8e90e5b66911ab82c9c2def36bac6c0753626d31766b9e93",
"0x207ddd42ea8fbf222dcb17961e1e056081ab4cf1d4b4f8119a81d37a03808715",
"0xc9612286fc6dfb9320fb0b322a6bb74d9632fdca6be2fc66a4ffa56dc7e01cb3",
"0x316ce91a250fb0f5224e3ad264e2825468f5cf360e481fe513d8acbbc76afaf4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

