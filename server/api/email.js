export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event)
		console.log(body)
		const to = process.env.EMAIL_TO || 'noreply@cnnct.uk'
		console.log(to)
		const address = body.address || 'ben@cnnct.uk'
		console.log(address)
		const subject = body.subject || 'New message'
		console.log(subject)
		const message = body.body || 'No message body'
		console.log(message)
		const name = body.name || 'Connect Dorset'
		console.log(name)
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.PLUNK_API_KEY}` },
			body: `{"to":"${address}","subject":"${subject}","body":"${message}","name":"${name}","from":"${to}","reply":"${address}","headers":{}}`
		}

		console.log(options)

		const response = await fetch('https://api.useplunk.com/v1/send', options)
		console.log(response)

		return {
			success: true,
			status: 200,
			message: 'Email sent'
		}
	} catch (error) {
		return {
			success: false,
			status: 500,
			message: 'Failed to send email'
		}
	}
})
