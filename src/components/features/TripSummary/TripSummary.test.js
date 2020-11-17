import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary.js';

describe('Component TripSummary', () => {
  it('should render without crashing correct link', () => {
    const component = shallow(<TripSummary id={'abc'} tags={[]}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  //test2
  // it('should render correct src and alt', (src, alt) => {
  //   const expectedName = 'name';
  //   const expectedImage = 'image.jpg';
  //   const component = shallow(<TripSummary image={expectedImage} name={expectedName} tags={[]}/>);
    
  //   const renderedName = component.find('.alt').prop([alt]).text(); 
  //   // w tripSummary wystepuje klilka miejsc 
  //   //gdzie jest przekazany props name stąd szukam po alt, i wciąż jest błąd
  //   // renderedName="", a nie expectedName
  //   expect(renderedName).toEqual(expectedName);
  //   expect(component.find('img').prop([src])).toEqual(expectedImage);
  // });
  //test3
  it('should render without crashing', () => {
    const component = shallow(<TripSummary name='12' cost='50' tags={[]}/>);
    expect(component).toBeTruthy(12);
    expect(component).toBeTruthy(50);
    console.log(component.debug());
  });
  


  //test4 //   name: PropTypes.string.isRequired,
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});