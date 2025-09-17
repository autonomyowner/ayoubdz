import { captureOrder, sendJson, readJsonBody } from './_lib/paypal.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method Not Allowed' })
  }

  try {
    const body = await readJsonBody(req)
    const orderID = body.orderID || body.orderId
    if (!orderID) {
      return sendJson(res, 400, { error: 'Missing orderID' })
    }
    const capture = await captureOrder(orderID)
    return sendJson(res, 200, { capture })
  } catch (err) {
    return sendJson(res, 500, { error: err.message || 'Unknown error' })
  }
}


