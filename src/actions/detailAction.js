import axios from "axios";
import { gameDetailsURL, gameScreenShotURL } from "../api";

export const loadDetail = game_id => async dispatch => {
  const detailData = await axios.get(gameDetailsURL(game_id));
  const screenshots = await axios.get(gameScreenShotURL(game_id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshots.data
    }
  });
};
