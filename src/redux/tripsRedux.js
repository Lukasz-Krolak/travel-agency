/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;
  console.log('outputMain', output);
  //filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => 
      pattern.test(trip.name));

  
  // TODO - filter by duration
  } else if (filters.duration.to) { //duration.to
    const pattern = new RegExp(filters.duration.to, 'i');
    output = output.filter(trip => 
      pattern.test(trip.days <= filters.duration.to));
    console.log('outputto', output, pattern);
  } else if (filters.duration.from) { //duration.from
    const pattern = new RegExp(filters.duration.from, 'i');
    output = output.filter(trip => 
      pattern.test(trip.days >= filters.duration.from));
    console.log('outputfrom', output, pattern);
  


  // TODO - filter by tags
  } else if (filters.tags){
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags === filters.tags));
  }

  // TODO - sort by cost descending (most expensive goes first)

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
 
