import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

import router from './router'

const app = express()

app.disable('x-powered-by')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

app.listen({ port: 3000 }, () => {
  console.log(`⚡ Express ready at PORT 3000`)
})
