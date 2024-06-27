import { useDispatch, useSelector } from "react-redux";
import { onFilterFavorites, onNewSearch, onUpdateFavorites } from "../store/videoSlice";
import youtubeApi from "../api/youtubeAPI";



export const useVideosStore = () => {

  const dispatch = useDispatch()

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
      console.log(data);
      dispatch(onNewSearch({ searchResults: data.items, currentSearchQuery: query }))
    } catch (error) {
      console.log(error);
    }
  }
  const startFilterFavorites = (query) => {
    if (query === currentFilterQuery) return;

    const filtered = favorites.filter(video => video.snippet.title.toUpperCase().includes(query.toUpperCase()))
    if (!filtered.length) return;
    dispatch(onFilterFavorites({ filteredFavorites: filtered, currentFilterQuery: query }))
  }

  const startAddVideoToFavorite = (video) => {
    if (favorites.includes(video)) return;
    const favoritesUnref = [...favorites]
    favoritesUnref.push(video)
    dispatch(onUpdateFavorites(favoritesUnref))
  }


  const startRemoveVideoFromFavorite = (video) => {
    if (!favorites.includes(video)) return;
    const favoritesUnref = [...favorites]
    const index = favoritesUnref.indexOf(video);
    if (index > -1) {
      favoritesUnref.splice(index, 1);
    }
    dispatch(onUpdateFavorites(favoritesUnref))

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
