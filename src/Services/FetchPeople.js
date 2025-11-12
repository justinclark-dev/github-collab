import BASE_URL from "./BaseUrl.js";

const getPeople = async () => {
  const response = await fetch(`${BASE_URL}people`);
  const JSONdata = await response.json();

  return JSONdata;
};

export default getPeople;