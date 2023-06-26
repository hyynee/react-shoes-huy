import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    arrProduct: [
    ],
    deTail: {

    }
}

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    getAllProductAction: (state,action) => {
        state.arrProduct = action.payload
    },
  }
});

export const {getAllProductAction,getIdProductAction} = cartReducer.actions

export default cartReducer.reducer


export const getAllProductActionApi = () => {
    return  async(dispatch) => {
     const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      let action = getAllProductAction(result.data.content);
        dispatch(action);
    }
}

  