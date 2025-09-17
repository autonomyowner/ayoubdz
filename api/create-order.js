import { createOrder, sendJson, readJsonBody } from './_lib/paypal.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method Not Allowed' })
  }

  try {
    const body = await readJsonBody(req)
    const amount = typeof body.amount === 'string' ? body.amount : String(body.amount || '10.00')
    const currency = body.currency || 'USD'
    const description = body.description || 'Order'

    const order = await createOrder({ amount, currency, description })
    return sendJson(res, 200, { id: order.id })
  } catch (err) {
    return sendJson(res, 500, { error: err.message || 'Unknown error' })
  }
}


