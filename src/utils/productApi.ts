const productApi = (() => {
  const BASE_URL: string = 'http://localhost:5155/api';

  const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/product`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status) {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data;
  };

  return {
    getProducts,
  };
})();

export default productApi;
