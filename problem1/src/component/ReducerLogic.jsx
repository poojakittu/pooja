

export const reset={type:"Reset"}

export const inc = (value) => {
  return {
    type: "INCREMENT_BY_1000",
    payload: value
  };
};

export const dec = (value) => ({
  type: "DECREMENT_BY_1000",
  payload: value
});


export const increment = (value) => {
  return {
    type: "INCREMENT_BY_2000",
    payload1: value
  };
};

export const decrement = (value) => ({
  type: "DECREMENT_BY_2000",
  payload1: value
});
