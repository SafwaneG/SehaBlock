export default function getDateTime({ time, date }) {
	const y = date.getFullYear()
	const m = date.getMonth()
	const d = date.getDate()

	const h = time.getHours()
	const mi = time.getMinutes()

	const result = new Date(y, m, d, h, mi)

	return result
}
