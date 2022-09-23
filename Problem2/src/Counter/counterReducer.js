// SET OF INSTRUCTIONS YOU'LL PASS IN HERE
// if (action.type === "INCREMENT_COUNT") {
//   return state + 1;
// }
// if (action.type === "DECREMENT_COUNT") {
//   return state - 1;
// }
// if (action.type === "RESET_COUNT") {
//   return 0;
// }
// return state;

// data/information associated with the action

// INCREMENT_COUNT_BY_VALUE

// { type : 'INCREMENT_COUNT_BY_VALUE', payload : 10 }

// R - REDUCER
// A -
// D

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return state + 1;
    case "DECREMENT_COUNT":
      return state - 1;
    case "RESET_COUNT":
      return 0;
    case "INCREMENT_COUNT_BY_VALUE":
      return state + action.payload;
    case "DECREMENT_COUNT_BY_VALUE":
      return state - action.payload;
    default:
      return state;
  }
}

export default reducer;
