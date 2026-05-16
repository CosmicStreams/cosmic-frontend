import { 
  SorobanRpc, 
  TransactionBuilder, 
  Networks, 
  Address,
  scValToNative,
  nativeToScVal
} from 'stellar-sdk';
import { isConnected, getPublicKey, signTransaction } from '@stellar/freighter-api';

const CONTRACT_ID = 'CC...'; // Replace with deployed contract ID
const RPC_URL = 'https://soroban-testnet.stellar.org';
const server = new SorobanRpc.Server(RPC_URL);

export const connectWallet = async () => {
  if (await isConnected()) {
    return await getPublicKey();
  }
  throw new Error('Freighter not connected');
};

export const createStreamOnChain = async (sender, recipient, token, amount, duration) => {
  const account = await server.getAccount(sender);
  const tx = new TransactionBuilder(account, { fee: '100', networkPassphrase: Networks.TESTNET })
    .addOperation(SorobanRpc.Operation.invokeContractFunction({
      contract: CONTRACT_ID,
      function: 'create_stream',
      args: [
        Address.fromString(sender).toScVal(),
        Address.fromString(recipient).toScVal(),
        Address.fromString(token).toScVal(),
        nativeToScVal(amount, { type: 'i128' }),
        nativeToScVal(duration, { type: 'u64' }),
      ],
    }))
    .setTimeout(30)
    .build();

  const signedTx = await signTransaction(tx.toXDR());
  const result = await server.sendTransaction(signedTx);
  return result;
};

export const getStreamDetails = async (streamId) => {
  const result = await server.simulateTransaction(
    new TransactionBuilder(new Address('G...').toAccount(), { fee: '100', networkPassphrase: Networks.TESTNET })
      .addOperation(SorobanRpc.Operation.invokeContractFunction({
        contract: CONTRACT_ID,
        function: 'get_stream',
        args: [nativeToScVal(streamId, { type: 'u32' })],
      }))
      .build()
  );
  return scValToNative(result.result.retval);
};
