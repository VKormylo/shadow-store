import * as axios from "axios";

export const shopAPI = {
  getStore() {
    return axios.get("/games").then((response) => {
      return response.data;
    });
  },
  getStatus() {
    return axios.get("/store/status");
  },
  changeStatus(status) {
    return axios.post("/store/status", {status});
  },
};

export const libraryAPI = {
  addToLibrary(gameId) {
    return axios.post("/game/addtolibrary", {gameId});
  },
  removeFromLibrary(gameId) {
    return axios.post("/game/removefromlibrary", {gameId});
  },
  downloadGame(gameId) {
    return axios.post("/game/download", {gameId});
  },
  deleteGame(gameId) {
    return axios.post("/game/delete", {gameId});
  },
  getView() {
    return axios.get("/library/view");
  },
  changeView(text) {
    return axios.put("/library/view", {text});
  },
};

export const wishlistAPI = {
  addToWishlist(gameId) {
    return axios.post("/game/addtowishlist", {gameId});
  },
  removeFromWishlist(gameId) {
    return axios.post("/game/removefromwishlist", {gameId});
  },
};

export const languageAPI = {
  getLanguage() {
    return axios.get("/language");
  },
  changeLanguage(language) {
    return axios.post("/language", {language});
  },
};
