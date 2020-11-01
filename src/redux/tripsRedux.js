/* SELECTORS */
import formatPriceToNumber from '../utils/formatPrice.js';

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;
  //filter by search phrase
  if(filters.searchPhrase){
    let pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => 
      pattern.test(trip.name));
  }
  // TODO - filter by duration
  if (filters.duration.to) { //duration.to
    output = output.filter(trip => trip.days <= filters.duration.to);
  }
  if (filters.duration.from) { //duration.from
    output = output.filter(trip => trip.days >= filters.duration.from);
  }
  

  // TODO - filter by tags
  if (filters.tags.length > 0){
    output = output.filter(trip => filters.tags.every(tag => trip.tags.includes(tag)));
  }
  // TODO - sort by cost descending (most expensive goes first)

  if (formatPriceToNumber) {
    output = output.sort((a,b) => {
      const priceA = formatPriceToNumber(a.cost);
      const priceB = formatPriceToNumber(b.cost);
  
      return priceB - priceA;
  
    });
  }
  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);
   

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */


// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TYPE_TRIPS = createActionName('TYPE_TRIPS');

// action creators
export const createTypeTrips = payload => ({ payload, type: TYPE_TRIPS });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TYPE_TRIPS:
      return action.payload;
    default:
      return statePart;
  }
}
 
