# PayPal Integration Documentation

## Overview
This project includes a complete PayPal checkout integration for accepting payments directly on the website. Customers can pay for web development services using PayPal, credit cards, or debit cards.

## Features
- **PayPal Checkout Buttons**: Integrated into pricing cards
- **Fixed USD Pricing**: 
  - Starter Plan: $1.00
  - Professional Plan: $3.00
  - Enterprise Plan: $7.00
- **Serverless API**: Vercel functions handle PayPal API calls
- **Secure Environment**: Credentials stored as environment variables

## Architecture

### Frontend Components
- `src/components/PayPalCheckout.tsx` - Reusable PayPal button component
- `src/components/Pricing.tsx` - Pricing page with integrated PayPal buttons

### Backend API Routes
- `api/_lib/paypal.js` - PayPal SDK utilities and helper functions
- `api/create-order.js` - Creates PayPal orders
- `api/capture-order.js` - Captures completed payments

### Configuration
- `vercel.json` - Updated to handle `/api/*` routes
- Environment variables for PayPal credentials

## Setup Instructions

### 1. PayPal Developer Account
1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Create a new app or use existing app
3. Get your **Client ID** and **Client Secret**
4. For testing: Use Sandbox credentials
5. For production: Use Live credentials

### 2. Environment Variables

#### Local Development
Create `.env.local`:
```
VITE_PAYPAL_CLIENT_ID=your_client_id_here
```

Create `.env`:
```
PAYPAL_CLIENT_ID=your_client_id_here
PAYPAL_CLIENT_SECRET=your_client_secret_here
PAYPAL_ENV=sandbox
```

#### Vercel Deployment
Add these environment variables in Vercel project settings:
- `PAYPAL_CLIENT_ID` - Your PayPal Client ID
- `PAYPAL_CLIENT_SECRET` - Your PayPal Client Secret  
- `VITE_PAYPAL_CLIENT_ID` - Same as PAYPAL_CLIENT_ID
- `PAYPAL_ENV` - Set to `sandbox` for testing, `live` for production

### 3. Testing

#### Sandbox Testing
1. Use sandbox credentials
2. Create test buyer accounts in PayPal Developer Dashboard
3. Test payment flow on your deployed site
4. Check Vercel function logs for any errors

#### Production Setup
1. Switch `PAYPAL_ENV` to `live`
2. Use live credentials
3. Redeploy your application
4. Test with small amounts first

## Payment Flow

1. **Customer clicks PayPal button** on pricing page
2. **Frontend calls** `/api/create-order` with amount and description
3. **PayPal creates order** and returns order ID
4. **Customer completes payment** in PayPal popup
5. **Frontend calls** `/api/capture-order` with order ID
6. **Payment is captured** and funds transferred to your account

## Troubleshooting

### Common Issues

#### "Set VITE_PAYPAL_CLIENT_ID to enable PayPal checkout"
- **Cause**: Missing or incorrect `VITE_PAYPAL_CLIENT_ID` environment variable
- **Solution**: Verify environment variable is set in Vercel and redeploy

#### "Failed to create order" or "Payment capture failed"
- **Cause**: Incorrect PayPal credentials or API errors
- **Solution**: 
  1. Check Vercel function logs
  2. Verify `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET` are correct
  3. Ensure `PAYPAL_ENV` matches your credentials (sandbox/live)

#### PayPal buttons not showing
- **Cause**: JavaScript SDK loading issues
- **Solution**: 
  1. Check browser console for errors
  2. Verify `VITE_PAYPAL_CLIENT_ID` is set
  3. Check network connectivity

### Debugging Steps

1. **Check Environment Variables**:
   ```bash
   # In Vercel dashboard, verify all required variables are set
   ```

2. **Check Function Logs**:
   - Go to Vercel dashboard → Functions tab
   - Look for errors in `/api/create-order` and `/api/capture-order`

3. **Test API Endpoints**:
   ```bash
   # Test create order
   curl -X POST https://your-domain.vercel.app/api/create-order \
     -H "Content-Type: application/json" \
     -d '{"amount":"1.00","currency":"USD","description":"Test"}'
   ```

## Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use different credentials for sandbox and production
- Rotate credentials regularly

### PayPal Security
- Use HTTPS in production
- Validate all payment data server-side
- Implement proper error handling
- Monitor for suspicious activity

## PayPal Account Management

### Payment Holds
PayPal may hold payments for:
- New seller accounts
- High-risk transactions
- Unusual activity patterns
- Account verification requirements

**To reduce holds**:
- Complete account verification
- Add business documentation
- Build transaction history
- Maintain consistent business practices

### Account Verification
1. Go to PayPal account settings
2. Complete business verification
3. Add bank account for withdrawals
4. Provide required documentation

## Monitoring and Analytics

### Vercel Analytics
- Monitor function performance
- Track error rates
- Check response times

### PayPal Dashboard
- Monitor transaction history
- Check for disputes or chargebacks
- Review account health

## Support Resources

### PayPal Documentation
- [PayPal Checkout Integration](https://developer.paypal.com/studio/checkout/standard/getstarted)
- [PayPal REST API Reference](https://developer.paypal.com/api/rest/)
- [PayPal Sandbox Testing](https://developer.paypal.com/developer/accounts/)

### Vercel Documentation
- [Vercel Functions](https://vercel.com/docs/functions)
- [Environment Variables](https://vercel.com/docs/environment-variables)

## Maintenance

### Regular Tasks
- Monitor payment success rates
- Check for failed transactions
- Update PayPal SDK if needed
- Review and rotate credentials

### Updates
- Keep PayPal SDK updated
- Monitor for security patches
- Test integration after updates

## Contact Information

For technical support:
- PayPal Developer Support: [PayPal Developer Portal](https://developer.paypal.com/support/)
- Vercel Support: [Vercel Support](https://vercel.com/support)

---

**Last Updated**: December 2024
**Version**: 1.0
