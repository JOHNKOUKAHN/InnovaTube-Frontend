import { useDispatch, useSelector } from "react-redux";
import { onFilterFavorites, onNewSearch, onUpdateFavorites } from "../store/videoSlice";
import youtubeApi from "../api/youtubeAPI";
import backendApi from "../api/backendApi";



export const useVideosStore = () => {

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth);
  const { currentSearchQuery, currentFilterQuery, filteredFavorites, favorites, searchResults } = useSelector(state => state.video);



  const startNewSearch = async (query) => {
    if (query === currentSearchQuery) return;
    try {
      const { data } = await youtubeApi.get('', {
        params: {
          part: 'snippet',
          q: query,
          maxResults: 10,
          type: 'video',
        }
      })
      dispatch(onNewSearch({ searchResults: data.items, currentSearchQuery: query }))
    } catch (error) {
    }
  }
  const startFilterFavorites = (query) => {
    if (query === currentFilterQuery) return;

    const filtered = favorites.filter(video => video.snippet.title.toUpperCase().includes(query.toUpperCase()))
    if (!filtered.length) return;
    dispatch(onFilterFavorites({ filteredFavorites: filtered, currentFilterQuery: query }))
  }

  const startAddVideoToFavorite = async (video) => {
    if (favorites.includes(video)) return;
    try {
      const favoritesUnref = [...favorites]
      favoritesUnref.push(video)
      dispatch(onUpdateFavorites(favoritesUnref))
      const { data } = await backendApi.put(`/user/${user.uid}`, {
        favorites: favoritesUnref
      })
    } catch (error) {
    }
  }


  const startRemoveVideoFromFavorite = async (video) => {
    if (!favorites.includes(video)) return;
    try {
      const favoritesUnref = [...favorites]
      const index = favoritesUnref.indexOf(video);
      if (index > -1) {
        favoritesUnref.splice(index, 1);
      }
      dispatch(onUpdateFavorites(favoritesUnref))
      const { data } = await backendApi.put(`/user/${user.uid}`, {
        favorites: favoritesUnref
      })
      if (currentFilterQuery === '') return
      const filteredFavoritesUnref = [...filteredFavorites]
      const indexFav = filteredFavoritesUnref.indexOf(video);
      if (indexFav > -1) {
        filteredFavoritesUnref.splice(indexFav, 1);
      }
      dispatch(onFilterFavorites(filteredFavoritesUnref))

    } catch (error) {

    }

  }

  return {
    searchResults,
    favorites,
    filteredFavorites,
    currentFilterQuery,
    startNewSearch,
    startAddVideoToFavorite,
    startRemoveVideoFromFavorite,
    startFilterFavorites
  }

}
