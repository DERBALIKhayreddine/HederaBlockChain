const { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar, TransferTransaction } = require("@hashgraph/sdk");
require('dotenv').config();

async function environementSetup() {
    // Grab your Hedera testnet account ID and private key form .env file 
    // you can create an account here  to get your keys "https://portal.hedera.com/dashboard"
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myprivateKey = process.env.MY_PRIVATE_KEY;
    // if there is an error we should throw this error 
    if (!myAccountId || !myprivateKey) {
        throw new Error("Enviroment Variables MY_ACCOUNT_ID and MY_PRIVATE_KEY must be present  ");
    }

    // Create Hedera Testnet clinet 
    const client = Client.forTestnet();
    // Set your Account As the client's Operator 
    client.setOperator(myAccountId, myprivateKey);
    // set the default maxium transaction fe (in Hbar)
    client.setDefaultMaxTransactionFee(new Hbar(100));
    // set the maxium payment for queries (in Hbar)
    client.setMaxQueryPayment(new Hbar(50));

    // Create new Keys 
    const newAccountPrivateKey = PrivateKey.generateED25519();
    const newAccountPublicKey = newAccountPrivateKey.publicKey;

    // Create new Account with 1,000 tinybar starting balance 
    const newAccount = await new AccountCreateTransaction()
        .setKey(newAccountPublicKey)
        .setInitialBalance(Hbar.fromTinybars(1000))
        .execute(client);

    //Get a new Account ID 
    const getRecipt = await newAccount.getReceipt(client);
    const newAccountId = getRecipt.accountId;

    // console log the new account ID 
    console.log("The new Acount ID is :", +newAccountId);
    
}
environementSetup();

