import pulp_fiction from '../images/puil-fiction.jpg';
import grand_hotel from '../images/grand-hotel.jpg';
import fight_club from '../images/fight-club.jpg';
import wall_e from '../images/wall-e.jpg';
import eraserhead from '../images/eraserhead.jpg';
import paprika from '../images/paprika.jpg';
import spirited_away from '../images/spirited-away.jpg';
import la_haine from '../images/la-haine.jpg';
export const cards = [
  {
    title: 'Криминальное чтиво',
    length: '1ч42м',
    image: pulp_fiction,
  },
  {
    title: 'Отель "Гранд Будапешт"',
    length: '1ч42м',
    image: grand_hotel,
  },
  {
    title: 'Бойцовский клуб',
    length: '1ч42м',
    image: fight_club,
  },
  {
    title: 'Wall-E',
    length: '1ч42м',
    image: wall_e,
  },
  {
    title: 'Голова ластик',
    length: '1ч42м',
    image: eraserhead,
  },
  {
    title: 'Паприка',
    length: '1ч42м',
    image: paprika,
  },
  {
    title: 'Унесённые призраками',
    length: '1ч42м',
    image: spirited_away,
  },
  {
    title: 'Ненависть',
    length: '1ч42м',
    image: la_haine,
  },
]

export const BEATFILM_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api.genoss.movie-explorer.nomoreparties.co';