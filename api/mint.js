// api/mint.js
export default async function handler(req, res) {
  res.status(402).json({
    x402Version: 1,
    payer: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA", // same as payTo/treasury

    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "1000000", // 1 USDC (6 decimals)
        resource: "https://bpank.vercel.app/api/mint",
        description: "Mint for 1 USDC on Base.",
        mimeType: "application/json",
        payTo: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA",
        asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC on Base
        maxTimeoutSeconds: 60,

        outputSchema: {
          input: {
            type: "http",
            method: "POST",
            bodyType: "json",
            // 👇 No bodyFields — means user can’t set parameters
            discoverable: true
          },
          output: {}
        },

        extra: {
          name: "BANANA Mint",
          symbol: "BANANA",
          contract: "0x8Eb543a84DC0e4b7885898d844a55276661F5Fa5",
          outPerMint: "5000",
          note: "Fixed 1 mint per request."
        }
      }
    ]
  });
}
