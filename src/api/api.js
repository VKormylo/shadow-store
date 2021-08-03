import * as axios from "axios";

const instance = axios.create({
  withCredentials: false,
  dataType: "jsonp",
  baseURL: "http://localhost:8060",
});

export const shopAPI = {
  getStore() {
    return instance.get("/games").then((response) => {
      return response.data;
    });
  },
  getStatus() {
    return instance.get("/store/status");
  },
  changeStatus(status) {
    return instance.post("/store/status", {status});
  },
};

export const libraryAPI = {
  addToLibrary(gameId) {
    return instance.post("/game/addtolibrary", {gameId});
  },
  removeFromLibrary(gameId) {
    return instance.post("/game/removefromlibrary", {gameId});
  },
  downloadGame(gameId) {
    return instance.post("/game/download", {gameId});
  },
  deleteGame(gameId) {
    return instance.post("/game/delete", {gameId});
  },
  getView() {
    return instance.get("/library/view");
  },
  changeView(text) {
    return instance.put("/library/view", {text});
  },
};

export const wishlistAPI = {
  addToWishlist(gameId) {
    return instance.post("/game/addtowishlist", {gameId});
  },
  removeFromWishlist(gameId) {
    return instance.post("/game/removefromwishlist", {gameId});
  },
};

export const languageAPI = {
  getLanguage() {
    return instance.get("/language");
  },
  changeLanguage(language) {
    return instance.post("/language", {language});
  },
};
