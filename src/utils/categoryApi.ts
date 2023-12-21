const categoryApi = (() => {
  const BASE_URL: string = 'http://localhost:5155/api';

  const getAllCategory = async () => {
    const response = await fetch(`${BASE_URL}/category`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status) {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data;
  };

  return {
    getAllCategory,
  };
})();

export default categoryApi;
