<!-- Mnemonic (12/24 words)
        ↓
Master Seed (BIP-39 seed)
        ↓
Master Private Key + Chain Code (BIP-32 root)
        ↓
Many child private keys
        ↓
Many public keys
        ↓
Many wallet addresses -->

<!--
m (root from mnemonic)
│
├─ 44' (BIP44 purpose)
│   └─ 501' (Solana coin type)
│       ├─ Account 0 (0')
│       │   ├─ Address 0 (0')  → m/44'/501'/0'/0'
│       │   ├─ Address 1 (1')  → m/44'/501'/0'/1'
│       │   ├─ Address 2 (2')  → m/44'/501'/0'/2'
│       │   └─ ...
│       │
│       ├─ Account 1 (1')
│       │   ├─ Address 0 (0')  → m/44'/501'/1'/0'
│       │   ├─ Address 1 (1')  → m/44'/501'/1'/1'
│       │   └─ ...
│       │
│       ├─ Account 2 (2')
│       │   └─ Address 0 (0')  → m/44'/501'/2'/0'
│       │
│       └─ ... -->

<!-- 
Derivation structure:

Solana: m/44'/501'/${index}'/0'
EVM (ETH, POL, BASE): m/44'/60'/0'/0/${index}
Bitcoin SegWit: m/84'/0'/0'/0/${index}
Bitcoin Taproot: m/86'/0'/0'/0/${index} -->