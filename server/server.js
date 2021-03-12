const path = require('path');
const express = require('express') 
const app = express()

const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 8080 

//Middleware
app.use(express.static(path.resolve(__dirname, '../', 'src/public')))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'src/contact.html')) 
})

app.post('/', (req, res) => {
  console.log(req.body)

  //const transporter = nodemailer.createTransport({
    //service: 'gmail',
    //auth: {
      //user: 'tellsenales@gmail.com',
      //pass: 'Ts4524987'
    //}
  //})

  const transporter = nodemailer.createTransport({
    host: 'mail.xn--tellseales-y9a.com',
    port: 465,
    //secure true
    auth: {
      user: 'ventas@xn--tellseales-y9a.com',
      pass: 'Cp02061989162005'
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'ventas@xn--tellseales-y9a.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res.send('error')
    } else {
      console.log('Email sent'+ info.response)
      res.send('success')
    }
  })  
})

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})
