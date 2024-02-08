export const fetchData = async () => {
	return await require(process.env.REACT_APP_API_URL)
}
