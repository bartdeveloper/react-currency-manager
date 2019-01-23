import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../containers/Header'
import Footer from '../containers/Footer';

it('renders App without crashing', () => {
  shallow(<App />);
});

it('App includes header', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Header />)).toEqual(true)
});

it('App includes footer', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Footer />)).toEqual(true)
});