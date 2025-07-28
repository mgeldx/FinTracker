import { groth16 } from 'snarkjs';

// You need to load the wasm and zkey files, for example with fetch or import

export async function generateProof(preimage: number, pubHash: number) {
  // input to your circuit
  const input = {
    preimage,
    pubHash,
  };

  // load wasm and zkey files (hosted somewhere or bundled)
  const wasmUrl = "/circuits/build/hashCheck_js/hashCheck.wasm";
  const zkeyUrl = "/circuits/hashCheck_final.zkey";

  // Fetch wasm and zkey files, convert to buffers or blobs
  const wasmResponse = await fetch(wasmUrl);
  const wasmArrayBuffer = await wasmResponse.arrayBuffer();

  const zkeyResponse = await fetch(zkeyUrl);
  const zkeyArrayBuffer = await zkeyResponse.arrayBuffer();

  const { proof, publicSignals } = await groth16.fullProve(
    input,
    new Uint8Array(wasmArrayBuffer),
    new Uint8Array(zkeyArrayBuffer)
  );

  return { proof, publicSignals };
}
