import validator from 'validator'

export default function isComment(description) {
	if (description === null) return false
	return validator.isLength(description, { min: 30, max: 100 })
}
