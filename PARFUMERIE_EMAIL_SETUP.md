# 🛒 Parfumerie Allouani - Email & Orders Setup

## 📧 What You'll Get

✅ **Email Notifications**: Every order sent to `allouaniparfumerie9@gmail.com`  
✅ **Google Sheets**: All orders saved automatically  
✅ **Phone-Based Orders**: Perfect for Algerian market  
✅ **No PayPal**: Simple phone orders only  

## 🔧 Setup Instructions

### Step 1: Deploy Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Copy the code from `GOOGLE_APPS_SCRIPT_CODE.js`
4. Click "Deploy" > "New deployment"
5. Choose "Web app" as type
6. Set access to "Anyone"
7. Copy the web app URL

### Step 2: Update Your Website
1. Open `src/config/api.ts`
2. Replace the URL with your new Google Apps Script URL
3. Save the file

### Step 3: Test the System
1. Build your project: `npm run build`
2. Deploy to your hosting platform
3. Test an order

## 📊 Order Information Collected

Each order will include:
- **Name**: Customer's full name
- **Phone**: Customer's phone number
- **Wilaya**: Customer's wilaya
- **Product Name**: Name of the perfume/product
- **Product Code**: Your product code
- **Address**: Delivery address
- **Timestamp**: When the order was placed

## 📧 Email Format

You'll receive emails like this:

```
🛒 Nouvelle Commande - Parfumerie Allouani

👤 Client:
Nom: Ahmed Benali
Téléphone: 0555123456
Wilaya: Alger
Adresse: Rue Didouche Mourad, Alger

🛍️ Produit:
Nom du produit: Parfum Armani
Code produit: ARM001

⏰ Commande reçue le: 15/12/2024 à 14:30

📞 Action requise:
- Contacter le client par téléphone
- Confirmer la commande
- Organiser la livraison
```

## 📋 Google Sheets

All orders will be saved in a Google Sheet called "Parfumerie Allouani - Orders" with columns:
- Timestamp
- Name
- Phone
- Wilaya
- Product Name
- Product Code
- Address

## 🎯 Perfect for Algerian Market

This setup is designed for the Algerian market where:
- Phone numbers are the primary contact method
- Wilaya information is important for delivery
- Email is less commonly used
- Direct phone contact is preferred

## 🚀 Next Steps

1. Deploy the Google Apps Script
2. Update your website configuration
3. Test with a sample order
4. Start receiving orders!

---
**Business Email**: allouaniparfumerie9@gmail.com  
**Business Name**: Parfumerie Allouani
