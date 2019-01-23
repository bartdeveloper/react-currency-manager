import React from 'react';
import { shallow } from 'enzyme';
import CurrencyTable from '../containers/CurrencyTable';
import CurrencyTableItem from '../containers/CurrencyTableItem';

it('renders CurrencyTable without crashing', () => {
    
    shallow(<CurrencyTable key='1'
                            table='Table a'
                            no='No 1'
                            date='2019-01-23'
                            rates={[ {key: 'Jan', code: 'Maria', currency: 'usd', rate: 3.54} ]} 
                />);

});

it('has CurrencyTableItem', () => {
    
    const currencyTable = shallow(<CurrencyTable key='1'
                                            table='Table a'
                                            no='No 1'
                                            date='2019-01-23'
                                            rates={[ {key: 'Jan', code: 'Maria', currency: 'usd', rate: 3.54} ]} 
                                />);

    expect(currencyTable.containsMatchingElement(<CurrencyTableItem />)).toEqual(true)

});