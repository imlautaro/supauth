const tester =
	/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

export const validate = (email: string) => {
	if (!email || email.length > 254) {
		return false
	}

	let valid = tester.test(email)
	if (!valid) {
		return false
	}

	let parts = email.split('@')
	if (parts[0].length > 64) {
		return false
	}

	let domainParts = parts[1].split('.')
	if (domainParts.some(part => part.length > 63)) {
		return false
	}

	return true
}
