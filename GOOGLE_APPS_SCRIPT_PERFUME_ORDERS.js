// Google Apps Script for Perfume Orders - Parfumerie Allouani
// Handles perfume order submissions with automatic product name detection

function doPost(e) {
  try {
    console.log('Received perfume order request');
    
    // Parse incoming data
    let data;
    if (e && e.parameter) {
      data = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = {};
    }
    
    console.log('Parsed data:', JSON.stringify(data));
    
    // Get or create spreadsheet
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Add headers if first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([
        ['Timestamp', 'Name', 'Phone', 'Email', 'Product Name', 'Package', 'Price (DA)', 'Description']
      ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    }
    
    // Add new order row
    const fullName = (data.firstName || '') + ' ' + (data.lastName || '');
    const newRow = [
      data.timestamp || new Date().toISOString(),
      fullName.trim() || '',
      data.phone || '',
      data.email || '',
      data.projectType || '',
      data.budget || '',
      data.budget || '',
      data.description || ''
    ];
    
    sheet.appendRow(newRow);
    sheet.autoResizeColumns(1, 8);
    
    // Send email notification
    sendPerfumeOrderEmail(data);
    
    // Return success response
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify({ success: true, message: 'Perfume order saved successfully' }));
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
  const spreadsheetName = 'Parfumerie Allouani - Perfume Orders';
  
  const files = DriveApp.getFilesByName(spreadsheetName);
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }
  
  const newSpreadsheet = SpreadsheetApp.create(spreadsheetName);
  newSpreadsheet.getRange('A1').setValue('Parfumerie Allouani - Perfume Orders');
  return newSpreadsheet;
}

function sendPerfumeOrderEmail(data) {
  try {
    const subject = `🛒 طلب عطر جديد - ${data.projectType || 'طلب عطر'}`;
    const fullName = (data.firstName || '') + ' ' + (data.lastName || '');
    
    const body = `
طلب عطر جديد - Parfumerie Allouani

معلومات العميل:
الاسم: ${fullName.trim()}
الهاتف: ${data.phone || '—'}
البريد الإلكتروني: ${data.email || '—'}

تفاصيل الطلب:
${data.description || 'لا توجد تفاصيل إضافية'}

المبلغ: ${data.budget || '—'}
وقت الطلب: ${data.timestamp || new Date().toLocaleString('ar-DZ')}

خطوات المتابعة:
1. الاتصال بالعميل لتأكيد الطلب
2. التحقق من توفر المنتج
3. ترتيب التسليم
4. إرسال تفاصيل الدفع
    `;
    
    MailApp.sendEmail('allouaniparfumerie9@gmail.com', subject, body);
    console.log('Perfume order email sent successfully');
  } catch (error) {
    console.error('Email notification failed:', error);
  }
}

// Test function
function testPerfumeOrder() {
  const testData = {
    firstName: 'أحمد',
    lastName: 'بن علي',
    phone: '0555123456',
    email: 'ahmed@example.com',
    projectType: 'طلب عطر: Tom Ford Tobacco Vanilla - عطر واحد',
    budget: '12000 DA',
    description: 'تفاصيل الطلب - طلب عطر:\nاسم العطر: Tom Ford Tobacco Vanilla (توم فورد توباكو فانيليا)\nالعلامة التجارية: Tom Ford\nالفئة: Luxury\nالباقة المختارة: عطر واحد\nالسعر: 12,000 DA\nالحجم: 50ml\nالملاحظات العطرية: Tobacco Leaf, Vanilla, Tonka Bean, Sandalwood',
    timestamp: new Date().toISOString()
  };
  
  const result = doPost({ postData: { contents: JSON.stringify(testData) } });
  console.log(result.getContent());
}

function doGet(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ 
    success: true, 
    message: 'Perfume Orders Google Apps Script is working!',
    timestamp: new Date().toISOString()
  }));
  return output;
}
