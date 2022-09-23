function reducer(state1,action){
    switch (action.type){

      case  "INCREMENT_BY_1000":
      return {
          ...state1,
          count:state1.count+action.payload
      };
      case  "DECREMENT_BY_1000":
          return {
            ...state1,
            count:state1.count-action.payload
        };

      case  "INCREMENT_BY_2000":
      return {
          ...state1,
          count:state1.count+action.payload
      };
      case  "DECREMENT_BY_2000":
          return {
            ...state1,
            count:state1.count-action.payload
        };
      case  "Reset":
        return 0;
      default:
          return state1
    }
   
 
}
export default reducer