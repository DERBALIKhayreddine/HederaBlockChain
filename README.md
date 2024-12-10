# Hedera Testnet Setup Repository

This is a test repository demonstrating how to create and manage accounts on the **Hedera Testnet**.

## Description
The code in this repository helps you set up a Hedera Testnet environment, generate new accounts, and interact with Hedera's decentralized network. It includes:
- Setting up the Testnet client using your credentials.
- Generating a new account with a starting balance.
- Configuring transaction fees and query payment limits.

## Important Notes
1. **Account Credentials**:
   - Your **Account ID** and **Private Key** are required to interact with the Hedera Testnet.
   - These credentials may change periodically (e.g., every 24 hours).

2. **How to Get Your Own Account**:
   If you don't have an Account ID and Private Key, follow these steps:
   - Visit the [Hedera Portal](https://portal.hedera.com/).
   - Create an account to receive your unique credentials.

3. **Environment Variables**:
   - To securely use your credentials in the code, store your **Account ID** and **Private Key** in a `.env` file. Example:
     ```env
     MY_ACCOUNT_ID=your-account-id-here
     MY_PRIVATE_KEY=your-private-key-here
     ```

## Code Overview

The script demonstrates the following:
- **Environment Setup**:
  - Reads credentials from a `.env` file and initializes a Hedera Testnet client.
  - Configures transaction fees and query payment limits.
  
- **Account Creation**:
  - Generates a new private-public key pair.
  - Creates a new Hedera account with a starting balance (in tinybars).
  - Logs the new account ID to the console for verification.

- **Error Handling**:
  - Ensures the required environment variables are present.
  - Catches and logs any errors during account creation or transaction execution.

