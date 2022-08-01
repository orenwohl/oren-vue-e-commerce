import axios from "axios";
export default {
  async getProducts({ commit }) {
    const resp = await axios.get("https://dummyjson.com/products");
    commit("setProducts", resp.data.products);
  },
};
