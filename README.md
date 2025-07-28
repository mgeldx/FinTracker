# 🔐 FinTracker

**FinTracker** is a privacy-first, mobile-friendly financial tracking app that uses **voice biometrics** and **Zero-Knowledge Proofs (ZKPs)** on the **BlockDAG blockchain** for secure, passwordless login. It empowers users to manage personal finances, track crypto wallets, and maintain privacy through modern decentralized technology.

---

## 🚀 Features

- 🎤 Voice Biometric Authentication (client-side)
- 🔐 Zero-Knowledge Proof login flow
- 🔗 BlockDAG EVM-compatible smart contract integration
- 📊 Personal finance dashboard
- 👛 Crypto wallet view and transaction history
- ⚙️ Settings with biometric reset and preferences
- ❓ FAQ page with onboarding support
- 🔓 Secure logout with session wipe

---

## 📱 UI Overview

| Page        | Description |
|-------------|-------------|
| **Login**   | Voice input triggers local ZKP proof; proof is verified against on-chain hash |
| **Home**    | Dashboard of income, expenses, and financial insights |
| **Profile** | User alias, voice hash metadata, device trust management |
| **Wallet**  | Token balances, transaction list, fiat conversion |
| **Settings**| App mode, security options, passphrase update |
| **FAQ**     | Help section for onboarding, ZKP explanation, and biometrics |
| **Logout**  | Ends secure session and clears local keys |

---

## ⚙️ Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | React Native + TypeScript |
| Voice Input | Web Speech API / ECAPA-TDNN |
| ZKP Engine  | Circom + SnarkJS |
| Blockchain  | BlockDAG (EVM-compatible) |
| Smart Contracts | Solidity |
| Styling     | Tailwind CSS (via `nativewind`) |
| Dev Tools   | Figma (UI), GitHub, VS Code/WebStorm |

---

## 🛡️ Security Architecture

- ✅ No raw biometric or profile data stored
- ✅ Voice model embedded → hashed → stored on-chain
- ✅ All verification done through zero-knowledge proofs
- ✅ On logout, all in-memory secrets are purged
- ✅ Backup passphrase available as 2nd layer authentication

---

## 📦 Project Structure
fintracker/
├── .idea/ # IDE settings (WebStorm)
├── circuits/ # ZKP circuits written in Circom
│ └── hashCheck.circom
├── contracts/ # Solidity smart contracts
│ ├── Lock.sol
│ ├── profile.sol
│ └── VoiceRecordABI.json
├── ignition/ # Hardhat deployment modules
│ └── modules/
│ └── Lock.js
├── node_modules/ # Dependencies
├── public/ # Static assets
│ ├── bg.webp
│ └── vite.svg
├── scripts/ # Deployment or utility scripts
│ └── userDeploymentProfile.ts
├── src/ # Main frontend codebase
│ ├── assets/ # Fonts, icons, etc.
│ └── pages/ # App pages
│ ├── login/ # Login screen (voice input)
│ │ ├── login.css
│ │ └── login.tsx
│ └── voice-input/ # Voice capture and processing
│ ├── voice-input.css
│ └── voice-input.tsx
├── test/ # Smart contract tests
├── .env # Environment variables
├── .gitignore
├── App.tsx # Root React component
├── App.css
├── index.tsx # ReactDOM entry point
├── index.css
├── main.tsx
├── vite-env.d.ts
├── vite.config.ts # Vite configuration
├── hardhat.config.cjs # Hardhat configuration
├── ethereum.d.ts # Type declarations
└── index.html # Entry HTML file


---

## 🚀 Features

- ✅ **Voice Biometric Login** (client-side voice match → hash → ZKP)
- 🔐 **Zero-Knowledge Proof Authentication** (Circom + SnarkJS)
- 🔗 **BlockDAG Blockchain Integration** (EVM-compatible smart contracts)
- 📊 **Modular Page Structure** (e.g., login, voice-input, dashboard, wallet)
- 🧪 **Smart Contract Testing** with Hardhat
- ⚡ **Vite-Powered Frontend** with React + TypeScript

---

## 🛠️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```
---
## Set up .env
Create a .env file in the root directory based on your development secrets:

ini
Copy
Edit
PRIVATE_KEY=your_wallet_private_key
RPC_URL=https://url
CHAIN_ID=0000

## Compile ZKP circuits (optional if not using Circom CLI yet)
bash
Copy
Edit
circom circuits/hashCheck.circom --r1cs --wasm --sym
snarkjs groth16 setup ...

## Compile and deploy contracts
bash
Copy
Edit
npx hardhat compile
npx hardhat run scripts/userDeploymentProfile.ts --network blockdag

## Start the app
bash
Copy
Edit
npm run dev


