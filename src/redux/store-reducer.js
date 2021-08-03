import { libraryAPI, shopAPI, wishlistAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const SET_STORE = "SET_STORE";
const SET_STATUS = "SET_STATUS";
const SET_IS_WISHLIST_EMPTY = "SET_IS_WISHLIST_EMPTY";
const SET_VIEW = "SET_VIEW";
const ADD_TO_LIBRARY = "ADD_TO_LIBRARY";
const REMOVE_FROM_LIBRARY = "REMOVE_FROM_LIBRARY";
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
  games: [],
  isWishlistEmpty: undefined,
  isLoading: false,
  view: undefined,
  status: undefined
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
      return { ...state, games: [...action.games] };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_IS_WISHLIST_EMPTY:
      return { ...state, isWishlistEmpty: action.isWishlistEmpty };
    case SET_VIEW:
      return { ...state, view: action.view };
    case ADD_TO_LIBRARY:
      return {
        ...state,
        games: updateObjectInArray(state.games, action.gameId, "id", {
          added: true,
        }),
      };
    case REMOVE_FROM_LIBRARY:
      return {
        ...state,
        games: updateObjectInArray(state.games, action.gameId, "id", {
          added: false,
        }),
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        isWishlistEmpty: false,
        games: updateObjectInArray(state.games, action.gameId, "id", {
          inWishlist: true,
        }),
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        games: updateObjectInArray(state.games, action.gameId, "id", {
          inWishlist: false,
        }),
      };
    case TOGGLE_IS_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};

// ---------------
// ACTION CREATORS
// ---------------

export const setStore = (games) => ({ type: SET_STORE, games });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setView = (view) => ({ type: SET_VIEW, view });

export const setIsWishlistEmpty = (isWishlistEmpty) => ({
  type: SET_IS_WISHLIST_EMPTY,
  isWishlistEmpty,
});

export const addToLibraryAC = (gameId) => ({
  type: ADD_TO_LIBRARY,
  gameId,
});

export const removeFromLibraryAC = (gameId) => ({
  type: REMOVE_FROM_LIBRARY,
  gameId,
});

export const addToWishlistAC = (gameId) => ({
  type: ADD_TO_WISHLIST,
  gameId,
});

export const removeFromWishlistAC = (gameId) => ({
  type: REMOVE_FROM_WISHLIST,
  gameId,
});

export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

// -----------------
// GET ALL GAMES API
// -----------------

export const getStore = () => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  shopAPI.getStore().then((data) => {
    dispatch(setStore(data.games));
    dispatch(setIsWishlistEmpty(data.isWishlistEmpty));
    dispatch(toggleIsLoading(false));
    console.log(data.games);
  });
};

// ---------------
// STORE API CALLS
// ---------------

export const getStatus = () => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const response = await shopAPI.getStatus();
  dispatch(setStatus(response.data.status))
  dispatch(toggleIsLoading(false));
  console.log(response.data.status);
};

export const changeStatus = (status) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const response = await shopAPI.changeStatus(status);
  dispatch(setStatus(response.data.status))
  dispatch(toggleIsLoading(false));
  console.log(response.data.status);
};

// -----------------
// LIBRARY API CALLS
// -----------------

export const addToLibrary = (gameId) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  dispatch(addToLibraryAC(gameId));
  const response = await libraryAPI.addToLibrary(gameId);
  dispatch(setStore(response.data.games));
  dispatch(toggleIsLoading(false));
  console.log(response.data.games);
};

export const removeFromLibrary = (gameId) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  dispatch(removeFromLibraryAC(gameId));
  const response = await libraryAPI.removeFromLibrary(gameId);
  dispatch(setStore(response.data.games));
  dispatch(toggleIsLoading(false));
  console.log(response.data.games);
};

export const downloadGame = (gameId) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const response = await libraryAPI.downloadGame(gameId);
  dispatch(setStore(response.data.games));
  dispatch(toggleIsLoading(false));
  console.log(response.data.games);
};

export const deleteGame = (gameId) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const response = await libraryAPI.deleteGame(gameId);
  dispatch(setStore(response.data.games));
  dispatch(toggleIsLoading(false));
  console.log(response.data.games);
};

export const getView = () => async (dispatch) => {
  const response = await libraryAPI.getView();
  dispatch(setView(response.data.view));
};

export const changeView = (view) => async (dispatch) => {
  const response = await libraryAPI.changeView(view);
  dispatch(setView(response.data.view));
};

// ------------------
// WISHLIST API CALLS
// ------------------

export const addToWishlist = (gameId) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  dispatch(addToWishlistAC(gameId));
  const response = await wishlistAPI.addToWishlist(gameId);
  dispatch(setStore(response.data.games));
  dispatch(setIsWishlistEmpty(response.data.isWishlistEmpty));
  dispatch(toggleIsLoading(false));
  console.log(response.data.isWishlistEmpty);
};

export const removeFromWishlist = (gameId) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  dispatch(removeFromWishlistAC(gameId));
  const response = await wishlistAPI.removeFromWishlist(gameId);
  dispatch(setStore(response.data.games));
  dispatch(setIsWishlistEmpty(response.data.isWishlistEmpty));
  dispatch(toggleIsLoading(false));
  console.log(response.data.games);
};

export default storeReducer;
