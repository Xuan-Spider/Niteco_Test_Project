
// call API 
const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
