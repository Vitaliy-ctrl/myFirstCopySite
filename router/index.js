import express from 'express'
import { Products } from '../models'

const router = express.Router()

router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express index', description: 'index index' })
})

router.get('/shop', async (req, res, next) => {
	const data = await Products.find({ active: true })
	
	res.render('shop', {
		products: data
	})
})

export default router
