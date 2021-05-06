// axios
import axios from "axios";

export function SetInterCeptors() {
  axios.interceptors.request.use(function (config) {
    config.headers["locale"] = localStorage.getItem("i18nextLng");

    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return error;
    }
  );
}
