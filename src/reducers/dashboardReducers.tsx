export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    /*  case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id); */
    default:
      return state;
  }
};
