const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.send('{ "response": "Hello from The / page" }')
})

app.get('/page1', (req, res) => {
	res.send('{ "response": "Hello from The /page1" }')
})

app.get('/page2', (req, res) => {
	res.send('{ "response": "Hello from The /page2" }')
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT} ✅`)
})
