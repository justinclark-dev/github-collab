import BASE_URL from "./BaseUrl.js";

const getData = async () => {

  let response = await fetch(`${BASE_URL}films`);
  let JSONdata = await response.json();

  return(JSONdata);

};

export default getData;