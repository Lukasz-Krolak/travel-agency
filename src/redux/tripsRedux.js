/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration

  // TODO - filter by tags

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  trips.filter(trip => trip.tripId == tripId);
  //const filtered = trips;

  // TODO - filter trips by tripId

  //console.log('filtering trips by tripId:', tripId, filtered);
  //return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) =>
  trips.filter(trip => new RegExp(countryCode).test(trip.code));
  //const filtered = trips;

//   // TODO - filter trips by countryCode
//   export const getCardsFromAllList = ({cards}, searchString ) => 
//   cards.filter(card => 
//     new RegExp(searchString).test(card.title));

//   console.log('filtering trips by countryCode:', countryCode, filtered);
//   return filtered.length ? filtered : [{error: true}];
// };

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
