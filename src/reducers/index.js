export default function ingredientReducer(state = [], action) {
switch (action.type) {
  case 'ADD_INGREDIENT':
    return [...state, action.payload];
  case 'REMOVE_INGREDIENT':
    return state = state.slice(0, action.payload).concat(state.slice((action.payload)+1, state.length));
  default:
    return state;
}
}
