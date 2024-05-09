/**
 * This function parses a user' profile photo url
 * It adds the apiUrl as prefix to the user's profile photo url
 */

import config from 'config'

export default function parseUser({ user }) {
	let parsedUser = {}

	if (user?.profile?.split('/').length === 1) {
		parsedUser = { ...user, profile: `${config.apiUrl}/${user.profile}` }
	} else parsedUser = user

	if (user?.identity) {
		if (user.identity.front?.split('/').length === 1)
			parsedUser = {
				...parsedUser,
				identity: {
					...user.identity,
					front: `${config.global.apiUrl}/${user.identity.front}`,
				},
			}

		if (user.identity.back?.split('/').length === 1)
			parsedUser = {
				...parsedUser,
				identity: {
					...parsedUser.identity,
					back: `${config.global.apiUrl}/${user.identity.back}`,
				},
			}
	}

	return parsedUser
}
