import { memoize } from 'proxy-memoize'

export default memoize(state => state?.auth?.user ?? {})
