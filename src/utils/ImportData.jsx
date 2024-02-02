export const fetchData = async () => {
	return (await import(process.env.REACT_APP_API_URL)).default
}
