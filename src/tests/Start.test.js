import React from 'react';
import { shallow } from 'enzyme';
import Start from '../components/Start';

it('renders Start without crashing', () => {
    shallow(<Start />);
});