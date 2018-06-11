import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, toggleItem } from '../../logic/todos';
import './styles.css';

export const ItemsList = ({ items, onRemove, onToggle }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item =>
            <li key={item.id} className={(item.complete ? 'strike' : '')}>
              <button className={(item.id ? 'todo-item-remove'+item.id : '')} onClick={() => onRemove(item.id)}>Delete</button>
              <input className={(item.id ? 'todo-item'+item.id : '')}
                  type="checkbox"
                  checked={item.complete}
                  onChange={() => onToggle(item.id)}
                  name={(item.id ? 'todo-item'+item.id : '')}
              />
              {item.content}
            </li>
        )}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.complete)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.complete)
    default:
      return todos;
  }
}

const mapStateToProps = state => {
  return {items : getVisibleTodos(state.todos.items, state.visibleFilter)}
};

const mapDispatchToProps = dispatch => ({
  onRemove: item => dispatch(removeItem(item)),
  onToggle: index => dispatch(toggleItem(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
