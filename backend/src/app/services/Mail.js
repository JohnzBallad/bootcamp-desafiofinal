const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailConfig)
const viewPath = path.resolve(__dirname, '..', 'views', 'meetups')

transport.use(
  'compile',
  hbs({
    viewEngine: exphbs.create({
      partialsDir: viewPath
    }),
    viewPath,
    extName: '.hbs'
  })
)

module.exports = transport
