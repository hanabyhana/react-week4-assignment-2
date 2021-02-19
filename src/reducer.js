import { ADD_RESTAURANT, UPDATE_RESTAURANTINFO } from './actions';

const initialState = {
  restaurantList: [],
  restaurantInfo: { name: '', category: '', address: '' },
};

export default function reducer(state = initialState, action) {
  if (action.type === UPDATE_RESTAURANTINFO) {
    return { ...state, restaurantInfo: { ...state.restaurantInfo, ...action.payload } };
  }
  if (action.type === ADD_RESTAURANT) {
    return {
      ...state,
      restaurantList: [{
        name: '선정릉역 깐부치킨',
        category: '한식',
        address: '서울 강남구 삼성동 37 깐부치킨 선정릉역점',
      }],
    };
  }
  return state;
}
