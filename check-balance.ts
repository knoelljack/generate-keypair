import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { keypair } from "./generate-keypair";

const publicKey = new PublicKey(keypair.publicKey.toBase58());
// const tolyPublicKey = new PublicKey(
//   "86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY"
// );

// Check if the public key is valid
if (!publicKey || !PublicKey.isOnCurve(publicKey.toBuffer())) {
  console.error(`Invalid wallet address: ${publicKey.toBase58()}`);
} else {
  const connection = new Connection(
    "https://api.mainnet-beta.solana.com",
    "confirmed"
  );

  const balanceInLamports = await connection.getBalance(publicKey);

  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
}
