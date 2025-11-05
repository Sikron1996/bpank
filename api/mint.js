// api/mint.js (fixed v2 with correct USDC asset)
export default async function handler(req, res) {
  const host = req.headers["x-forwarded-host"]
    ? `https://${req.headers["x-forwarded-host"]}`
    : "http://localhost:3000";

  // if client already paid, return 200
  if (req.method === "POST") {
    return res.status(200).json({
      success: true,
      message: "BANANA mint unlocked ✅"
    });
  }

  // else return 402 strict schema
  return res.status(402).json({
    x402Version: 1,
    payer: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA",
    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "1000000",
        resource: `${host}/api/mint`,
        description: "Mint 5,000 BANANA for 1 USDC on Base.",
        mimeType: "application/json",
        payTo: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA",
        // user's correct USDC on Base
        asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        maxTimeoutSeconds: 60,
        outputSchema: {
          input: {
            type: "http",
            method: "POST",
            bodyType: "json",
            discoverable: true
          },
          output: {
            type: "object",
            properties: {
              success: { type: "boolean" },
              message: { type: "string" }
            },
            required: ["success"]
          }
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
