// import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// import nacl from "tweetnacl";
// import { derivePath } from "ed25519-hd-key";
// import { Keypair } from "@solana/web3.js";
// import bs58 from "bs58";

// const generateSeed = () => {

//     //const mnemonic = generateMnemonic(); // Generate a 12-word mnemonic

//     const mnemonic = 'elbow arrest elite civil fade hen notable assume repair edge arm water';

//     const seed = mnemonicToSeedSync(mnemonic); // Generate Master Seed from mnemonic

//     console.log('Generated Mnemonic:', mnemonic);
//     console.log('Seed : ', seed.toString('hex'));


//     for (let i = 0; i < 1; i++) {
//         //const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
//         const path = `m/44'/501'/0'/${i}'`; // 

//         const derivedSeed = derivePath(path, seed.toString("hex")).key;

//         const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

//         const base58Key = bs58.encode(secret);

//         console.log("Private key (base58): ", base58Key);
//         console.log('Public key (base58): ', Keypair.fromSecretKey(secret).publicKey.toBase58());
//     }
// }

// generateSeed();


import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const generateSolanaKeypairs = (mnemonic = null, count = 1) => {

    const myMnemonic = mnemonic || generateMnemonic();  // Generate a mnemonic if not provided
    console.log("Mnemonic:", myMnemonic);

    const seed = mnemonicToSeedSync(myMnemonic);  // Convert mnemonic to seed (64 bytes)

    const keypairs = [];

    for (let i = 0; i < count; i++) {

        const path = `m/44'/501'/0'/${i}'`; // Standard Solana derivation path: m/44'/501'/account'/index'

        const ethPath = `m/44'/60'/0'/0/${i}`

        const derivedSeed = derivePath(path, seed.toString("hex")).key; // Derive 32-byte seed for this account

        const keypair = nacl.sign.keyPair.fromSeed(derivedSeed); // Generate full 64-byte secret key

        const secretKeyBase58 = bs58.encode(keypair.secretKey);  // Base58 encoded secret key (Solana CLI style)

        const publicKeyBase58 = Keypair.fromSecretKey(keypair.secretKey).publicKey.toBase58();  // Public key in Base58 (Solana address)

        keypairs.push({
            index: i,
            path,
            publicKey: publicKeyBase58,
            secretKey: secretKeyBase58
        });
    }

    return { mnemonic: myMnemonic, keypairs };
};

// Example usage:
const myMnemonic = 'sunny arrest tuition slow approve toilet cruel two steak kitchen half session';
const { mnemonic, keypairs } = generateSolanaKeypairs(myMnemonic, 3);
console.log(keypairs);
