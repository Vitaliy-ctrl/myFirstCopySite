import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	active: { type: Boolean, default: true },
	title: { type: String, default: '' },
	description: { type: String, default: '' },
	image: { type: String, default: '' },
	price: { type: Number, default: 0 }
}, {
	timestamps: true,
	versionKey: false
})

export const Products = mongoose.model('products', schema)
