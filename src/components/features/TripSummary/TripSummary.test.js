import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary.js';

describe('Component TripSummary', () => {
  it('should render without crashing correct link', () => {
    const component = shallow(<TripSummary id={'abc'} tags={[]}/>);
    expect(component).toBeTruthy();
  });
  //test2
  it('should render correct src and alt', (src) => {
    const expectedImage = 'image.jpg';
    const expectedName = 'name';
    const component = shallow(<TripSummary src={expectedImage} alt={expectedName} tags={[]}/>);
    
    const renderedName = component.find('img').text(); 
    expect(renderedName).toEqual(expectedName);
    expect(component.find('.image').prop([src])).toEqual(expectedImage);
  });
  //test3
  // it('should render without crashing correct link', () => {
  //   const component = shallow(<TripSummary name={'abc'} cost={'900'} days={'3'} tags={[]}/>);
  //   expect(component).toBeTruthy();
  // });
  //test4

});