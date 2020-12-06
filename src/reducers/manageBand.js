import uuid from 'react-uuid'


export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const newBand = {
        id: uuid(),
        name: action.name
      }

      return { 
        bands: [...state.bands, newBand] 
      }

    case 'DELETE_BAND':
    
      const newBands = state.bands.filter(band => band.id !== action.id)

      return {
        bands:[...newBands]
      }

    default:
      return state;
  }
};
