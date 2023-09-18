export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://api.genoss.movie-explorer.nomoreparties.co";

export const BEATFILM_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const SMALL_WIDTH = 451;

export const TABLET_WIDTH = 1066;

export const LAPTOP_WIDTH = 1387;

export const ULTRA_WIDTH = 1708;

export const ULTRA_WIDTH_GRID = 15;

export const TABLET_WIDTH_GRID = 12;

export const SMALL_WIDTH_GRID = 8;

export const MINIMUM_WIDTH_GRID = 5;

export const ADD_ULTRA_WIDTH_CARDS = 5;

export const ADD_LAPTOP_WIDTH_CARDS = 4;

export const ADD_TABLET_WIDTH_CARDS = 3;

export const ADD_SMALL_WIDTH_CARDS = 2;

export const formatMovieDuration = (duration) => {
  return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
};
