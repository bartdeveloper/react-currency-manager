import React from 'react';
import { shallow } from 'enzyme';
import Start from '../components/Start';

it('renders App without crashing', () => {
    shallow(<Start />);
  });