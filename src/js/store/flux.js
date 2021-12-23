const BASE_URL = "https://www.swapi.tech/api/";
const getState = ({getStore, getActions, setStore}) => {

	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			toReadList: [],
			selectedRead : "PLACEHOLDER",
			selectedReadObj: [],
		},

		actions: {
			// Use getActions to call a function within a fucntion
			getCharacters: async () => {
				let url = `${BASE_URL}people/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json ();
					setStore({
						characters: responseObject.results
					})
				} catch (error) {
					console.log()
				}
			},

			getPlanets: async () => {
				let url = `${BASE_URL}planets/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json ();
					setStore({
						planets: responseObject.results
					})
				} catch (error) {
					console.log()
				}
			},

			getStarships: async () => {
				let url = `${BASE_URL}starships/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json ();
					setStore({
						starships: responseObject.results
					})
				} catch (error) {
					console.log()
				}
			},
			
			setFavoriteList: (newList) => {
				setStore({
					toReadList: newList
				})
			},

			setSelectedRead: async (newRead) => {
				setStore({
					selectedRead: newRead
				})
			},

			getSelectedRead: async (string) => {
				try {
					let response = await fetch(string);
					let responseObject = await response.json ();
					let responseResults = responseObject.result
					setStore({
						selectedReadObj: responseResults.properties
					})
					console.log(responseResults.properties)
				} catch (error) {
					console.log()
				}
			},

			resetSelected: () => {
				setStore({
					selectedRead: "PLACEHOLDER",
					selectedReadObj: []
				})
			}

		}

	}

}


export default getState;
