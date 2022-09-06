require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stove cost misery minor idea kangaroo army gentle'; 
let testAccounts = [
"0x6d56fb78511a08bfcd06175a1ca984b712ae89ef73255eacaff84b749670dc83",
"0x9ad024952bb1fb3ee835242f02efcede1b0248d6e6cf0fe8a642f323a3a4fc4b",
"0xe8a856486188c77b9c305d0e3374fc2666bbf9a9cd071d6537854674e5dba707",
"0x1c66ad47fa36260f7af5cbd2ea9dec57208726643264d2b7bfb0fc77499f409c",
"0xd11661a1280c87d1ac7363be4e1af12a0e72bd237c2578d588a8c0414553f905",
"0x588dce5ba6c3a1d61b9331d3f581ea8792a3794ac07c0d55759d29c21535631f",
"0x0a683da15bbb42af2efdd29c565478584e382338452d344e119fec4ade4b691a",
"0xcfae72d452d9bce0ec1c0f78aa0517784d751837566a4e385b453f364babb2df",
"0x8fff04145751092ffb2f1fadf745599bc3370050c4fb88abe9e6c90082cccb2a",
"0x2e61a1470ff7f9c32415e0b526f7ed970566a24d48c1a5bcf3debde26f865edc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


