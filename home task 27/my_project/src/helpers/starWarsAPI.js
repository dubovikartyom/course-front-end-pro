import axios from "axios";

function getList() {
  axios.get("https://swapi.dev/api/starships/").then((res) => {
    const productList = res.data;
    console.log(productList);
    return productList;
  });
}

export default getList;
