export const getCardDataLogements = async () => {
	if (process.env.NODE_ENV === "development") {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					resolve(
						require(process.env.REACT_APP_API_URL)[
							"CardDataLogements"
						]
					)
				} catch (error) {
					reject(error)
				}
			}, 1000)
		})
	} else {
		try {
			const response = await fetch(
				process.env.REACT_APP_API_URL_LOGEMENTS_CARD
			)
			return await response.json()
		} catch (error) {
			console.error(error)
		}
	}
}

export const getLogement = async id => {
	if (process.env.NODE_ENV === "development") {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					const logements = require(process.env.REACT_APP_API_URL)[
						"logements"
					]

					const currentLogement = logements.find(
						logement => logement.id === id
					)

					if (currentLogement) {
						resolve(currentLogement)
					} else {
						reject(new Error("This ID does not exist"))
					}
				} catch (error) {
					reject(error)
				}
			}, 1000)
		})
	} else {
		try {
			const response = await fetch(
				process.env.REACT_APP_API_URL_LOGEMENTS_PAGE
			)
			return await response.json()
		} catch (error) {
			console.error(error)
		}
	}
}
