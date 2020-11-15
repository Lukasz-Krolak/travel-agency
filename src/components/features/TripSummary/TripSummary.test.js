import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary.js';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedLink = 'abc';
    const component = shallow(<TripSummary id={expectedLink} />);

    const renderedLink = component.find('.id').text();
    console.log('rr',renderedLink);
    expect(renderedLink).toEqual(expectedLink);
  }); 
  
  //   it('should render correct src and alt', () => {
  //     const expectedSrc = 'image.jpg';
  //     const expectedAlt = 'name';
  //     const component = shallow(<TripSummary src={expectedSrc} alt={expectedAlt} />);
    
  //     const renderedAlt = component.find('.name').text();
  //     expect(renderedAlt).toEqual(expectedAlt);



//   }); 
});