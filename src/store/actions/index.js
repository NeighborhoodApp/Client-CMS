
const filterFilm = (film) => {
  return {
    type: 'SET_MOVIE_FILTER', payload: film
  }
}

export {
  filterFilm
}