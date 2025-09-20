// Google Sheets Form Submission API
// This API automatically sends form data to your Google Spreadsheet

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { firstName, lastName, email, phone, projectType, budget, description } = req.body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !projectType || !budget) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Google Sheets API endpoint (you'll get this from Google Apps Script)
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      return res.status(500).json({ error: 'Google Script URL not configured' })
    }

    // Prepare data for Google Sheets
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      projectType,
      budget,
      description: description || '',
      timestamp: new Date().toISOString(),
      source: 'website_contact_form'
    }

    // Send to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets')
    }

    // Also send email notification (optional)
    await sendEmailNotification(formData)

    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully!' 
    })

  } catch (error) {
    console.error('Form submission error:', error)
    return res.status(500).json({ 
      error: 'Failed to submit form',
      details: error.message 
    })
  }
}

// Optional: Send email notification
async function sendEmailNotification(formData) {
  try {
    const emailBody = `
New Contact Form Submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Description: ${formData.description}
Timestamp: ${formData.timestamp}
Source: ${formData.source}
    `

    // You can integrate with email service here (SendGrid, Nodemailer, etc.)
    console.log('Email notification:', emailBody)
  } catch (error) {
    console.error('Email notification failed:', error)
  }
}
