import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
function generateotp(){
    return Math.floor(10000000 +Math.random()*90000000).toString()
}

async function sendEmail(req, res) {
    const {name, email} =req.body
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "shauryamishra208@gmail.com",
                pass: process.env.EMAIL_PASSWORD,
            }
        })
        const mail = {
            from:"shauryamishra208@gmail.com",
            to:email,
            subject:"Testing",
            html:`
    <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Email</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

    <table align="center" width="100%" cellpadding="0" cellspacing="0"
      style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">

      <!-- Header -->
      <tr>
        <td style="background:#4CAF50; padding:20px; text-align:center; color:#ffffff;">
          <h2 style="margin:0;">Checking Email</h2>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:20px; color:#333333;">
          <p>Hello ${name},</p>
          <h3>Your phone is hacked .</h3>

          <p style="margin-top:20px;">I know your otp:</p>

          <div style="text-align:center; margin:30px 0;">
            <h2 style="background:#4CAF50; color:#ffffff; padding:12px 20px; text-decoration:none; border-radius:5px; display:inline-block;">
              ${generateotp()}
            </h2>
          </div>

          <p>If you didn’t request this, you can safely ignore this email.</p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f4f4f4; text-align:center; padding:15px; font-size:12px; color:#777;">
          © 2026 Hacked ByShaurya Mishra | All rights reserved
        </td>
      </tr>

    </table>

  </body>
  </html>
    `
,
            }
            await transporter.sendMail(mail)
            res.status(200).send("Email sent")
        }catch (error) {
            console.log(error)
            res.status(500).send("Server error")
        }
    }
export default sendEmail