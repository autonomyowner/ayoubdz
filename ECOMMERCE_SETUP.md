# E-commerce Template Landing Page Setup Guide

## 🛒 What Happens When You Press "Buy"

When a customer presses the "شراء الآن" (Buy Now) button, the following happens:

### 1. **Form Validation**
- Checks if all required fields are filled (Name, Phone, Wilaya, Address)
- Shows Arabic error message if fields are missing

### 2. **Data Collection**
- Collects customer information
- Records selected package and pricing
- Creates detailed order summary

### 3. **Order Submission**
- Sends data to your Google Apps Script
- Shows loading spinner during submission
- Displays success/error messages in Arabic

### 4. **Data Storage**
- Order is saved to Google Sheets
- You receive email notification
- Form resets for next customer

## 🔧 Setup Instructions

### Step 1: Deploy Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Copy the code from `GOOGLE_APPS_SCRIPT_CODE.js`
4. Click "Deploy" > "New deployment"
5. Choose "Web app" as type
6. Set access to "Anyone"
7. Copy the web app URL

### Step 2: Update Configuration
1. Open `src/config/api.ts`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual URL
3. Save the file

### Step 3: Test the Integration
1. Build the project: `npm run build`
2. Deploy to your hosting platform
3. Test the order form

## 📊 Order Data Structure

Each order submission includes:
- **Timestamp**: When the order was placed
- **Customer Info**: Name, phone, email
- **Package Details**: Selected template package and pricing
- **Order Summary**: Complete order details

## 📧 Email Notifications

You'll receive email notifications for each order with:
- Customer contact information (name, phone, email)
- Selected package and pricing
- Order timestamp

## 🎯 Features

✅ **Form Validation**: Ensures all required fields are filled  
✅ **Loading States**: Shows progress during submission  
✅ **Error Handling**: Graceful error messages in Arabic  
✅ **Data Persistence**: Orders saved to Google Sheets  
✅ **Email Alerts**: Instant notifications for new orders  
✅ **Mobile Optimized**: Works perfectly on all devices  

## 🔗 Access the Landing Page

- **URL**: `/ecommerce-template`
- **From Homepage**: Click on "E-commerce Template" card in Popular section
- **Direct Link**: `yoursite.com/ecommerce-template`

## 💰 Pricing Packages

1. **Single Template**: 15,000 DA
2. **Two Templates**: 24,000 DA (20% discount)
3. **Three Templates**: 36,000 DA (20% discount)

The system automatically calculates pricing and applies discounts based on the selected package.
