import crypto from "crypto";

export const verifyPayment = (orderId, paymentId, signature, secret) => {
  // Create expected signature
  const body = orderId + "|" + paymentId;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body.toString())
    .digest("hex");

  // Verify signature
  return expectedSignature === signature;
};
