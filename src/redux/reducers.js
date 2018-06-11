import { combineReducers } from 'redux';
import reducer from '../logic/todos';
import reducer2 from '../logic/visibleFilter';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
    visibleFilter: reducer2
  });
}
