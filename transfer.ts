import {
  Transaction,
  SystemProgram,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";
import wallet from "./dev-wallet.json";
import * as dotenv from "dotenv";

dotenv.config();

const from = Keypair.fromSecretKey(new Uint8Array(wallet));

const to = process.env.WALLET_PUBKEY as string;

if (!to) {
  console.error("Environment variable WALLET_PUBKEY is not set.");
  process.exit(1);
}

let toPubkey: PublicKey;

try {
  toPubkey = new PublicKey(to);
} catch (e) {
  console.error("Invalid WALLET_PUBKEY:", e);
  process.exit(1);
}

const connection = new Connection(clusterApiUrl("devnet"));

(async () => {
  try {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: toPubkey,
        lamports: LAMPORTS_PER_SOL / 100,
      })
    );

    const { blockhash } = await connection.getLatestBlockhash("confirmed");
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = from.publicKey;

    const signature = await sendAndConfirmTransaction(connection, transaction, [
      from,
    ]);

    console.log(`Success! Check out your TX here: 
          https://explorer.solana.com/tx/${signature}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
