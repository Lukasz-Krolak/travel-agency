import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary.js';

describe('Component TripSummary', () => {
  it('should render without crashing correct link', () => {
    const component = shallow(<TripSummary id={'abc'} tags={[]}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  // //test2
  it('should render correct src and alt', () => {    
    const expectedName = 'nnn';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImage} name={expectedName} tags={[]}/>);
    
    const renderedName = component.find('img').prop('name').text(); 
    expect(renderedName).toEqual(expectedName);
    expect(component.find('img').prop('image')).toEqual(expectedImage);
  });
  //test3
  it('should render without crashing', () => {
    const component = shallow(<TripSummary name={'nameABC'}  cost={'50'} days={3} tags={[]}/>);
    //expect(component).toBeTruthy('aB');
    expect(component).toBeTruthy();

    console.log(component.debug());
  });
  


  //test4 //  
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});