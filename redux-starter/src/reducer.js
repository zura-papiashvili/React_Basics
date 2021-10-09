let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.playload.description,
          result: false,
        },
      ];

    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}

export default reducer;
