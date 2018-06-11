import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '../index';

describe('Menu', () => {
  it('Link should render', () => {
    shallow(<Menu />);
  });
});	