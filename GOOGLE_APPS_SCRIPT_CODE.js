// Google Apps Script Code for Contact Form Integration
// Copy this code into Google Apps Script and deploy as web app

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received request:', JSON.stringify(e));
    
    // Parse the incoming data - handle different request formats
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Handle form data
      data = e.parameter;
    } else {
      console.log('No data found in request');
      throw new Error('No data received');
    }
    
    console.log('Parsed data:', JSON.stringify(data));
    
    // Get or create the spreadsheet
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([
        ['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Project Type', 'Budget', 'Description']
      ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    }
    
    // Add the new row
    const newRow = [
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.projectType || '',
      data.budget || '',
      data.description || ''
    ];
    
    sheet.appendRow(newRow);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 8);
    
    // Send email notification (optional)
    sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSpreadsheet() {
  const spreadsheetName = 'SITEDZ Contact Form Submissions';
  
  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(spreadsheetName);
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }
  
  // Create new spreadsheet if it doesn't exist
  const newSpreadsheet = SpreadsheetApp.create(spreadsheetName);
  
  // Set permissions (make it accessible to anyone with the link)
  newSpreadsheet.getRange('A1').setValue('SITEDZ Contact Form Submissions');
  
  return newSpreadsheet;
}

function sendEmailNotification(data) {
  try {
    const subject = `New Contact Form Submission - ${data.projectType || 'General'}`;
    const body = `
New contact form submission received:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${data.projectType}
Budget: ${data.budget}
Description: ${data.description}
Timestamp: ${data.timestamp}

Please respond within 24 hours.
    `;
    
    // Send email to your business email
    MailApp.sendEmail('autonomy.owner@gmail.com', subject, body);
  } catch (error) {
    console.error('Email notification failed:', error);
  }
}

// Test function (optional)
function testFunction() {
  const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    projectType: 'clinic',
    budget: '200k-400k',
    description: 'Test submission',
    timestamp: new Date().toISOString()
  };
  
  const result = doPost({ postData: { contents: JSON.stringify(testData) } });
  console.log(result.getContent());
}

// Simple test function to check if script is working
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Google Apps Script is working!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
