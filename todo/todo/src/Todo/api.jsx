import axios from "axios";

export const getTodos = (params={}) => {
  return axios.get(`http://localhost:3000/todo`,{
    params: {
        _page: params.page,
        _limit: params.limit,
        _sort:params.sort,
        _order:params.order,
      }
  });
};

export const addnewtodos = (data={}) => {
    return axios.post(`http://localhost:3000/todo`,{
      title:data.title
    });
  };
  
  export const deletetodos = (id) => {
    return axios({
        method: "DELETE",
        baseURL: "http://localhost:3000",
        url: `/todo/${id}`
      });
  };
  