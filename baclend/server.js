require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'https://sartechs.com'
  ],
  methods: ['POST'],
}));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS, // Gmail App Password kullanın
  },
})

// Input validation
function validateContactForm({ name, email, service, details, consent }) {
  if (!name || name.trim().length < 2) return 'Geçerli bir ad soyad girin.'
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Geçerli bir e-posta girin.'
  if (!service || service.trim().length < 2) return 'Hizmet türü seçin.'
  if (!details || details.trim().length < 10) return 'Proje detayları en az 10 karakter olmalıdır.'
  if (!consent) return 'Gizlilik ve KVKK onayı gereklidir.'
  return null
}

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, service, details, consent } = req.body

  const validationError = validateContactForm({ name, email, service, details, consent })
  if (validationError) {
    return res.status(400).json({ success: false, message: validationError })
  }

  const mailOptions = {
    from: `"Sartechs İletişim Formu" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO || 'sariibasmuhammed@gmail.com',
    replyTo: email,
    subject: `Yeni Teklif Talebi: ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f0f1a; color: #e0e0e0; border-radius: 12px;">
        <h2 style="color: #7c3aed; margin-bottom: 24px;">Yeni Teklif Talebi</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #9ca3af; width: 140px;">Ad Soyad</td>
            <td style="padding: 10px 0; color: #fff; font-weight: bold;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9ca3af;">E-posta</td>
            <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #7c3aed;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9ca3af;">Hizmet Türü</td>
            <td style="padding: 10px 0; color: #fff;">${escapeHtml(service)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9ca3af; vertical-align: top;">Proje Detayları</td>
            <td style="padding: 10px 0; color: #fff; white-space: pre-wrap;">${escapeHtml(details)}</td>
          </tr>
        </table>
        <p style="margin-top: 32px; font-size: 12px; color: #6b7280;">Bu mail Sartechs iletişim formu üzerinden gönderilmiştir.</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ success: true, message: 'Mesajınız iletildi.' })
  } catch (err) {
    console.error('Mail gönderme hatası:', err)
    return res.status(500).json({ success: false, message: 'Mail gönderilemedi. Lütfen tekrar deneyin.' })
  }
})

// XSS koruması için basit HTML escape
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

app.listen(PORT, () => {
  console.log(`Sartechs backend sunucusu çalışıyor: http://localhost:${PORT}`)
})
