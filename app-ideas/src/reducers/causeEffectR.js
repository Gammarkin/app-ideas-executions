const fakeStarterPerson = {
  id: 0,
  name: 'Juan Luna Fernandez',
  street: 'Heart of the moon st.',
  city: 'LoveCity',
  state: 'HeartState',
  country: 'LoveLand',
  telephone: '80085-80085',
  birthday: '04/20/1969',
};

const INITIAL_STATE = {
  persons: [fakeStarterPerson],
  person: {},
};

export const ADD_NEW_PERSON = '@@ADD_NEW_PERSON';
export const MODIFY_PERSON = '@@MODIFY_PERSON';
export const SEND_PERSON_TO_OBJ_PERSON = '@@SEND_PERSON_TO_OBJ_PERSON';

export const causeEffectR = (
  state = INITIAL_STATE,
  {type, newPerson, newPersonsArray, person = {}}
) => {
  switch (type) {
    case ADD_NEW_PERSON:
      return {
        ...state,
        persons: [...state.persons, newPerson],
      };

    case MODIFY_PERSON:
      return {
        ...state,
        persons: newPersonsArray,
      };

    case SEND_PERSON_TO_OBJ_PERSON:
      return {
        ...state,
        person,
      };

    default:
      return state;
  }
};
