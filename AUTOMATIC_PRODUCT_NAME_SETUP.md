# Automatic Product Name Detection Setup

This guide explains how the automatic product name detection works for perfume orders in the Parfumerie Allouani website.

## How It Works

When a customer visits a specific perfume page (e.g., `/template/tom-ford-tobacco-vanilla`), the system automatically:

1. **Detects the current perfume** based on the URL parameter
2. **Extracts product information** from the perfume data
3. **Includes detailed product info** in the order submission
4. **Sends comprehensive email** with all product details

## Features Implemented

### 1. Automatic Product Detection
- Product name (English and Arabic)
- Brand name
- Category (Luxury, Niche, Designer)
- Size
- Fragrance notes
- Price and discounts

### 2. Enhanced Order Summary
The order summary now shows:
- اسم العطر (Perfume Name)
- العلامة التجارية (Brand)
- الباقة المختارة (Selected Package)
- السعر (Price)
- الخصم (Discount if applicable)

### 3. Detailed Email Notifications
Emails now include:
- Complete product information
- Customer details
- Order timestamp
- Follow-up instructions

## Setup Instructions

### Step 1: Update Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new script or open existing one
3. Copy the code from `GOOGLE_APPS_SCRIPT_PERFUME_ORDERS.js`
4. Save and deploy as web app
5. Set access to "Anyone"
6. Copy the web app URL

### Step 2: Update API Configuration

1. Open `src/config/api.ts`
2. Replace the `GOOGLE_APPS_SCRIPT_URL` with your new URL
3. Save the file

### Step 3: Test the System

1. Visit any perfume page (e.g., `/template/tom-ford-tobacco-vanilla`)
2. Fill out the order form
3. Submit the order
4. Check your email for the detailed notification
5. Check your Google Spreadsheet for the order data

## Example Order Data

When a customer orders "Tom Ford Tobacco Vanilla", the system automatically includes:

```
طلب عطر: Tom Ford Tobacco Vanilla - عطر واحد
```

And detailed description:
```
تفاصيل الطلب - طلب عطر:
اسم العطر: Tom Ford Tobacco Vanilla (توم فورد توباكو فانيليا)
العلامة التجارية: Tom Ford
الفئة: Luxury
الباقة المختارة: عطر واحد
السعر: 12,000 DA
الحجم: 50ml
الملاحظات العطرية: Tobacco Leaf, Vanilla, Tonka Bean, Sandalwood
معلومات العميل:
- الاسم: أحمد بن علي
- البريد الإلكتروني: ahmed@example.com
- الهاتف: 0555123456
- وقت الطلب: 2024-01-15 14:30:25
```

## Supported Perfumes

The system automatically works with all perfumes defined in `src/data/templates.ts`:

- Armani You Intensely
- Tom Ford Tobacco Vanilla
- Xerjoff Naxos
- Initio Oud for Greatness
- Maison Margiela By the Fireplace
- Dior Bois Imperial
- Tom Ford Oud Wood
- MFK Santal Royal
- Nishane Hacivat
- Marc-Antoine Barrois Ganymede
- MFK Devotion

## Troubleshooting

### If orders aren't being saved:
1. Check the Google Apps Script URL in `src/config/api.ts`
2. Verify the Google Apps Script is deployed correctly
3. Check browser console for errors
4. Test the Google Apps Script directly

### If emails aren't being sent:
1. Check the email address in the Google Apps Script
2. Verify Gmail permissions in Google Apps Script
3. Check the Google Apps Script logs

### If product names aren't showing:
1. Verify the perfume ID in the URL matches the data in `templates.ts`
2. Check that the `getTemplateById` function is working
3. Verify the route is set up correctly in `App.tsx`

## Benefits

1. **Automatic Detection**: No manual product selection needed
2. **Detailed Information**: Complete product details in every order
3. **Professional Emails**: Rich email notifications with all details
4. **Easy Management**: All orders saved to Google Spreadsheet
5. **Multi-language Support**: Arabic and English product names
6. **Brand Information**: Automatic brand and category detection

This system ensures that every order includes complete product information automatically, making it easier to process orders and provide better customer service.
