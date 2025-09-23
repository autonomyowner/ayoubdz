// Google Apps Script Code for Parfumerie Allouani Orders
// Handles phone-based orders for Algerian market
// Copy this code into Google Apps Script and deploy as web app

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received request:', e ? JSON.stringify(e) : 'Request is undefined');
    
    // Parse the incoming data - handle different request formats
    let data;
    if (e && e.parameter) {
      console.log('Found parameter data (form data)');
      data = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      console.log('Found postData.contents (JSON)');
      data = JSON.parse(e.postData.contents);
    } else {
      console.log('No data found in request, using empty object');
      data = {};
    }
    
    console.log('Parsed data:', JSON.stringify(data));
    
    // Get or create the spreadsheet
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 7).setValues([
        ['Timestamp', 'Name', 'Phone', 'Wilaya', 'Product Name', 'Product Code', 'Address']
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }
    
    // Add the new row
    const newRow = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.phone || '',
      data.wilaya || '',
      data.productName || '',
      data.productCode || '',
      data.address || ''
    ];
    
    sheet.appendRow(newRow);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 7);
    
    // Send email notification
    sendEmailNotification(data);
    
    // Return with CORS headers
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify({ success: true, message: 'Order saved successfully' }));
    return output;
      
  } catch (error) {
    console.error('Error:', error);
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify({ success: false, error: error.toString() }));
    return output;
  }
}


function getOrCreateSpreadsheet() {
  const spreadsheetName = 'Parfumerie Allouani - Orders';
  
  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(spreadsheetName);
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }
  
  // Create new spreadsheet if it doesn't exist
  const newSpreadsheet = SpreadsheetApp.create(spreadsheetName);
  
  // Set permissions (make it accessible to anyone with the link)
  newSpreadsheet.getRange('A1').setValue('Parfumerie Allouani - Orders');
  
  return newSpreadsheet;
}

function sendEmailNotification(data) {
  try {
    const subject = `🛒 Nouvelle Commande - Parfumerie Allouani`;
    const body = `
🛒 NOUVELLE COMMANDE REÇUE

👤 Client:
Nom: ${data.name || 'Non spécifié'}
Téléphone: ${data.phone || 'Non spécifié'}
Wilaya: ${data.wilaya || 'Non spécifié'}
Adresse: ${data.address || 'Non spécifié'}

🛍️ Produit:
Nom du produit: ${data.productName || 'Non spécifié'}
Code produit: ${data.productCode || 'Non spécifié'}

⏰ Commande reçue le: ${data.timestamp || new Date().toLocaleString('fr-FR')}

📞 Action requise:
- Contacter le client par téléphone
- Confirmer la commande
- Organiser la livraison

---
Parfumerie Allouani
Système de commandes automatique
    `;
    
    // Send email to your business email
    MailApp.sendEmail('allouaniparfumerie9@gmail.com', subject, body);
  } catch (error) {
    console.error('Email notification failed:', error);
  }
}

// Test function (optional)
function testFunction() {
  const testData = {
    name: 'Ahmed Benali',
    phone: '0555123456',
    wilaya: 'Alger',
    productName: 'Parfum Armani',
    productCode: 'ARM001',
    address: 'Rue Didouche Mourad, Alger',
    timestamp: new Date().toISOString()
  };
  
  const result = doPost({ postData: { contents: JSON.stringify(testData) } });
  console.log(result.getContent());
}

// Simple test function to check if script is working
function doGet(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ 
    success: true, 
    message: 'Google Apps Script is working!',
    timestamp: new Date().toISOString()
  }));
  return output;
}
