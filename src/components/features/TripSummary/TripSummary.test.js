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
    const expectedName = 'name';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImage} name={expectedName} tags={[]}/>);
    
    const renderedName = component.find('.alt').text(); 
    // w tripSummary wystepuje klilka miejsc 
    //gdzie jest przekazany props name stąd szukam po alt, i wciąż jest błąd
    // renderedName="", a nie expectedName
    expect(renderedName).toEqual(expectedName);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
  });
  //test3
  // it('should render without crashing correct link', () => {
  //   const component = shallow(<TripSummary name={'abc'} cost={'900'} days={'3'} tags={[]}/>);
  //   expect(component).toBeTruthy();
  // });
  //test4

});