import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL, searchGameURL } from "../api";

export const loadGames = () => async dispatch => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results
    }
  });
};

export const fetchSearch = game_name => async dispatch => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      searched: searchGames.data.results
    }
  });
};
