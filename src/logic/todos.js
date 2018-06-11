export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const removeItem = id => {
  return { type: 'REMOVE_ITEM', id };
};

export const toggleItem = id => {
  return { type: 'TOGGLE_ITEM', id };
};

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', complete: false },
    { id: 2, content: 'Buy cat food', complete: false  },
    { id: 3, content: 'Water the plants', complete: true  },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:

      const nextId =
          state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;

      const newItem = {
        id: nextId,
        content: action.content,
        complete: false
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };

    case 'REMOVE_ITEM':

      const id = action.id;
      const FilterItem = state.items.filter(todo => todo.id !== id);
      return {items: FilterItem};

    case 'TOGGLE_ITEM':

      const newst =  state.items.map(todo =>
          (todo.id === action.id)
              ? {...todo, complete: !todo.complete}
              : todo
      )

      return { items:newst }


    default:
      return state;
  }
};

export default reducer;
