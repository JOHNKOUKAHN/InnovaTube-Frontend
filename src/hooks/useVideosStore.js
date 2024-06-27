import { useDispatch, useSelector } from "react-redux";
import { onNewSearch } from "../store/videoSlice";
import youtubeApi from "../api/youtubeAPI";



export const useVideosStore = () => {

  const dispatch = useDispatch()

  const { currentSearchQuery, favorites, searchResults } = useSelector(state => state.video);



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
      console.log(error);
    }
  }

  return {
    searchResults,
    startNewSearch
  }

}
