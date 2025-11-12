import BASE_URL from "./BaseUrl.js"

const getData = async () => {

    let response = await fetch(`${BASE_URL}species`)
    let JSONdata = await response.json()

    return(JSONdata)

}

export default getData