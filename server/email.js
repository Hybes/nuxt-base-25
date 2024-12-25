export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const to = process.env.EMAIL_TO || 'noreply@cnnct.uk'
	const address = body.address || 'ben@cnnct.uk'
	const subject = body.subject || 'New message'
	const message = body.body || 'No message body'
	const name = body.name || 'Connect Dorset'
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.PLUNK_API_KEY}` },
		body: `{"to":"${address}","subject":"${subject}","body":"${message}","name":"${name}","from":"${to}","reply":"${address}","headers":{}}`
	}

	fetch('https://api.useplunk.com/v1/send', options)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err))
})
