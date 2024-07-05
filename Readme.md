# Bridge to Turbin3 Solana Development

Within this project, we create a secret key and public key, request an airdrop from the Solana devnet, make a transfer to another wallet, and interact with the program that WBA has created on the devnet.

## Transaction Links

[Final Project Verification](https://explorer.solana.com/tx/5SKqw4rHp5wQowt8TALrjpnWiRRpcNXR26P83j4JuuLXV9iGoBwvsrhUsQA5K3aGgCmRXhDJS87o5zwyqYQoD6sW?cluster=devnet)

[Transfer of 0.01 SOL](https://explorer.solana.com/tx/5pqgRtUziHymkPXmcL6xWzcJ4vmYs5WETS5tPQuNwN3chfPHioXm1XV9mo4a4a4Ncyn6txDAdf8k152M2vn5e5aS?cluster=devnet)

## Documentation

## Files Created in this Project

```python
keygen.ts - Generates a new Keypair
airdrop.ts - Claims token airdrops
transfer.ts - Initiates a transfer to another wallet
enroll.ts - Interacts with the Anchor IDL program that WBA has created on the devnet
```

Commands

Generate a New Keypair

```bash
yarn keygen
```

Claim an Airdrop

```bash
yarn airdrop
```

Initiate a Transfer to Another Wallet

```bash
yarn transfer
```

Interact with WBA IDL

```bash
yarn enroll
```

# Notes

Ensure that you save the keypair in the ./dev-wallet.json file for the keygen.ts script.

The transfer.ts script requires the SECOND_WALLET address to be set in the .env file.
