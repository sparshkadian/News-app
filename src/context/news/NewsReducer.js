function NewsReducer(state, action) {
  switch (action.type) {
    case 'SET_TOPIC':
      return {
        ...state,
        topic: action.payload,
      };
    case 'SET_NEWS':
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default NewsReducer;
