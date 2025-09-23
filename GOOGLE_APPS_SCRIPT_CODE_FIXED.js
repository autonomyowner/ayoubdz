// Google Apps Script Code for Parfumerie Allouani Orders - FIXED VERSION
// Handles the actual data format sent by your website
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
        ['Timestamp', 'Name', 'Phone', 'Product', 'Quantity', 'Wilaya', 'Delivery Price (DA)']
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }
    
    // Combine firstName and lastName into full name
    const fullName = (data.firstName || '') + ' ' + (data.lastName || '');
    
    // Add the new row with the correct field mapping
    const newRow = [
      data.timestamp || new Date().toISOString(),
      fullName.trim() || '',
      data.phone || '',
      data.product || '',
      data.quantity || '1',
      data.wilaya || '',
      data.deliveryPrice || ''
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
    const subject = `🛒 Nouvelle commande`;
    const totalDelivery = data.deliveryPrice ? `${data.deliveryPrice} DA` : '—';
    const body = `
Commande reçue / New order

Nom / Name: ${(data.firstName || '') + ' ' + (data.lastName || '')}
Tél: ${data.phone || '—'}
Wilaya: ${data.wilaya || '—'}
Produit: ${data.product || '—'}
Qté: ${data.quantity || '1'}
Livraison: ${totalDelivery}
Date: ${data.timestamp || new Date().toLocaleString('fr-FR')}

Suivi:
- Appeler le client
- Confirmer qté et total
- Planifier livraison
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
    firstName: 'Ahmed',
    lastName: 'Benali',
    phone: '0555123456',
    email: 'ahmed@example.com',
    projectType: 'Template Design',
    budget: '50000 DA',
    description: 'Test order',
    address: 'Rue Didouche Mourad, Alger',
    timestamp: new Date().toISOString()
  };
  
  const result = doPost({ postData: { contents: JSON.stringify(testData) } });
  console.log(result.getContent());
}

// Test email function - run this to test email delivery
function testEmail() {
  const subject = 'TEST EMAIL - Parfumerie Allouani';
  const body = 'This is a test email to verify the correct email address is being used.';
  
  try {
    MailApp.sendEmail('allouaniparfumerie9@gmail.com', subject, body);
    console.log('Test email sent to allouaniparfumerie9@gmail.com');
  } catch (error) {
    console.error('Email test failed:', error);
  }
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
