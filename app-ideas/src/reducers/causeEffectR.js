const INITIAL_STATE = {
  persons: [],
  person: {},
};

export const ADD_NEW_PERSON = '@@ADD_NEW_PERSON';
export const MODIFY_PERSON = '@@MODIFY_PERSON';

export const causeEffectR = (
  state = INITIAL_STATE,
  {type, newPerson, modifiedPersonName}
) => {
  switch (type) {
    case ADD_NEW_PERSON:
      return {...state, newPerson};
    case MODIFY_PERSON:
      return {...state, [modifiedPersonName]: newPerson};

    default:
      return state;
  }
};
