import mongoose from 'mongoose'

const uri = 'mongodb://localhost:27017/express'

export const mongoConnect = () => {
	mongoose.connect(uri).catch(e => console.log(e))
	
	mongoose.connection.on('connected', () => {
		console.log('Mongo connected!')
	})
}
