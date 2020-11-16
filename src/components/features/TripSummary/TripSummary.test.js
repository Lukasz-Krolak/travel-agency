import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary.js';

describe('Component TripSummary', () => {
  it('should render without crashing correct link', () => {
    const component = shallow(<TripSummary id={'abc'} tags={[]}/>);
    expect(component).toBeTruthy();
  });
  //test2
  it('should render correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary src={expectedSrc} alt={expectedAlt} tags={[]}/>);
    
    const renderedAlt = component.find('.name').text(); //występuje wiecej niż raz "Method ÔÇťtextÔÇŁ is meant to be run on 1 node. 0 found instead"
    expect(renderedAlt).toEqual(expectedAlt);
    expect(component.find('.image').prop('src')).toEqual(expectedSrc);
  });
  //test3
  it('should render without crashing correct link', () => {
    const component = shallow(<TripSummary name={'abc'} cost={'900'} days={'3'} tags={[]}/>);
    expect(component).toBeTruthy();
  });
  //test4
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary id image name cost days />)).toThrow();
  });

});