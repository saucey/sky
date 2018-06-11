import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  items: [],
  onToggle: f => f,
  onRemove: f => f,
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should expect onChange to have been called', () => {
    const onChange = jest.fn();
    const items = [{ id: 1, content: 'Test 1', complete: false }, { id: 2, content: 'Test 2', complete: false }];
    const renderedItem = shallow(
        <ItemsList {...defaultProps} onToggle={onChange} items={items} />
    );
    renderedItem.find('.todo-item1').simulate('change');
    console.log(renderedItem.find('li').length)
    expect(onChange).toHaveBeenCalled();
  });

});
