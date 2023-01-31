import axios from "axios";

const api = axios.create({
    baseURL: "http://makeup-api.herokuapp.com/api/v1",
  });

  const FindItens = async () => {
    try {
      const { data } = await api.get('/products.json');
      return data;
    } catch (error: any) {
      return error
    }
  };

  export const ItensService = {
    FindItens
  };