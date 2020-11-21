import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption.js';

describe ('Component OrderOption',() => {
  //test 1
  it('should render without crashing', () => {
    const component = shallow(<OrderOption text='Lorem ipsum' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  //test 2
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  //test 3
  it('should render correct name', () => {    
    const expectedName = 'OrderOption name';
    const component = shallow(<OrderOption name={expectedName}/>);
    
    const renderedName = component.find('title').text('name'); 
    expect(renderedName).toEqual(expectedName);
  });
});

//19.3
// const optionTypes = {
//   dropdown: 'OrderOptionDropdown',
//   icons: 'OrderOptionIcons',
//   checkboxes: 'OrderOptionCheckboxes',
//   number: 'OrderOptionNumber',
//   text: 'OrderOptionText',
//   date: 'OrderOptionDate',
// };
// const mockProps = {
//   id: 'abc',
//   name: 'Lorem',
//   values: [
//     {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
//     {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
//   ],
//   required: false,
//   currentValue: 'aaa',
//   price: '50%',
//   limits: {
//     min: 0,
//     max: 6,
//   },
// };
  
// const mockPropsForType = {
//   dropdown: {},
//   icons: {},
//   checkboxes: {currentValue: [mockProps.currentValue]},
//   number: {currentValue: 1},
//   text: {},
//   date: {},
// };
  
// const testValue = mockProps.values[1].id;
// const testValueNumber = 3; 
// for(let type in optionTypes){
//   describe(`Component OrderOption with type=${type}`, () => {
  
//     /* test setup */
//     let component;
//     let subcomponent;
//     let renderedSubcomponent;
//     let mockSetOrderOption; /* 1 */
    
//     beforeEach(() => {
//       mockSetOrderOption = jest.fn(); /* 2 */
//       component = shallow(
//         <OrderOption
//           type={type}
//           setOrderOption={mockSetOrderOption} /* 3 */
//           {...mockProps}
//           {...mockPropsForType[type]}
//         />
//       );
//     /* common tests */
//     it(`renders ${optionTypes[type]}`, () => {
//       expect(subcomponent).toBeTruthy();
//       expect(subcomponent.length).toBe(1);
//       });   
//     });
//     /* type-specific tests */
//     switch (type) {

//       case 'dropdown': {
//         /* tests for dropdown */
//         it('should run setOrderOption function on change', () => {
//             renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
//             expect(mockSetOrderOption).toBeCalledTimes(1);
//             expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
//           });
//         it('contains select and options', () => {
//           const select = renderedSubcomponent.find('select');
//           expect(select.length).toBe(1);
          
//           const emptyOption = select.find('option[value=""]').length;
//           expect(emptyOption).toBe(1);
          
//           const options = select.find('option').not('[value=""]');
//           expect(options.length).toBe(mockProps.values.length);
//           expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
//           expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
//         });
//         break;
//       }
//     }
//     console.log(subcomponent.debug());
//     console.log(component.debug());
//   });
  
// };