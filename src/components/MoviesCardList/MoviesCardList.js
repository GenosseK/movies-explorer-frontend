import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import {
  ADD_LAPTOP_WIDTH_CARDS,
  ADD_SMALL_WIDTH_CARDS,
  ADD_TABLET_WIDTH_CARDS,
  ADD_ULTRA_WIDTH_CARDS,
  LAPTOP_WIDTH,
  MINIMUM_WIDTH_GRID,
  SMALL_WIDTH,
  SMALL_WIDTH_GRID,
  TABLET_WIDTH,
  TABLET_WIDTH_GRID,
  ULTRA_WIDTH,
  ULTRA_WIDTH_GRID,
} from "../../utils/constants";

function MoviesCardList({
  filteredMovies,
  isInfoTooltip,
  isSavedMovies,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  setSavedMovies,
  setFilteredMovies,
  preloaderLoading,
}) {
  const [displayCount, setDisplayCount] = useState(getInitialDisplayCount());
  const cardsPerPage = getCardsPerPage();

  // Function to calculate the initial number of cards to display
  function getInitialDisplayCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= ULTRA_WIDTH) {
      return ULTRA_WIDTH_GRID;
    } else if (screenWidth >= TABLET_WIDTH) {
      return TABLET_WIDTH_GRID;
    } else if (screenWidth >= SMALL_WIDTH) {
      return SMALL_WIDTH_GRID;
    } else {
      return MINIMUM_WIDTH_GRID;
    }
  }

  // Function to calculate the number of cards to load at each "Ещё" button click
  function getCardsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= ULTRA_WIDTH) {
      return ADD_ULTRA_WIDTH_CARDS;
    } else if (screenWidth >= LAPTOP_WIDTH) {
      return ADD_LAPTOP_WIDTH_CARDS;
    } else if (screenWidth >= TABLET_WIDTH) {
      return ADD_TABLET_WIDTH_CARDS;
    } else {
      return ADD_SMALL_WIDTH_CARDS;
    }
  }

  // Update the displayCount when the window size changes
  useEffect(() => {
    function handleResize() {
      setDisplayCount(getInitialDisplayCount());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + cardsPerPage);
  };
 
  /*
  const [shownMovies, setShownMovies] = useState(0)

  // Function to calculate the initial number of cards to display
  function getInitialDisplayCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= ULTRA_WIDTH) {
      setShownMovies(ULTRA_WIDTH_GRID);
    } else if (screenWidth >= TABLET_WIDTH) {
      setShownMovies(TABLET_WIDTH_GRID);
    } else if (screenWidth >= SMALL_WIDTH) {
      setShownMovies(SMALL_WIDTH_GRID);
    } else {
      setShownMovies(MINIMUM_WIDTH_GRID);
    }
  }

  // Function to calculate the number of cards to load at each "Ещё" button click
  function getCardsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= ULTRA_WIDTH) {
      setShownMovies (shownMovies + ADD_ULTRA_WIDTH_CARDS);
    } else if (screenWidth >= LAPTOP_WIDTH) {
      setShownMovies (shownMovies + ADD_LAPTOP_WIDTH_CARDS);
    } else if (screenWidth >= TABLET_WIDTH) {
      setShownMovies (shownMovies + ADD_TABLET_WIDTH_CARDS);
    } else {
      setShownMovies (shownMovies + ADD_SMALL_WIDTH_CARDS);
    }
  }

  useEffect(() => {
    getInitialDisplayCount()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getInitialDisplayCount)
    }, 500)
  })

  // Update the displayCount when the window size changes
  /*
  useEffect(() => {
    function handleResize() {
      setDisplayCount(getInitialDisplayCount());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + cardsPerPage);
  };*/

  return (
    <section className="cards">
      {filteredMovies.length === 0 && (
        <div className="cards__info-tooltip">
          <p className="cards__info-tooltip_text">{isInfoTooltip}</p>
        </div>
      )}
      {preloaderLoading ? (
        <Preloader />
      ) : (
        <>
          {filteredMovies.length > 0 && (
            <ul className="cards__grid">
              {filteredMovies.slice(0, displayCount).map((movie) => (
                <MovieCard
                  movie={movie}
                  key={movie.id ?? movie.movieId}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  filteredMovies={filteredMovies}
                  setFilteredMovies={setFilteredMovies}
                />
              ))}
            </ul>
          )}

          {filteredMovies.length > displayCount && (
            <div className="cards__button-container">
              <button
                className="cards__loader-button"
                type="button"
                onClick={handleLoadMore}
              >
                Ещё
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
