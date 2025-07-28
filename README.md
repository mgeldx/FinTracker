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

