const { create } = require("apisauce");

export default apiClient = create({
  baseURL: "http://192.168.1.8:9000/api",
});
