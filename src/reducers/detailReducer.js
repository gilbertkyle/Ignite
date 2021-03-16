const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false
      };
    case "DETAIL_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "EXIT_DETAIL":
      return {
        ...state,
        game: { platforms: [] },
        screen: { results: [] },
        isLoading: false
      };

    default:
      return {
        ...state
      };
  }
};

export default detailReducer;
