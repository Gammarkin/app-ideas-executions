import {
  MODIFY_PERSON,
  ADD_NEW_PERSON,
  SEND_PERSON_TO_OBJ_PERSON,
} from '../reducers/causeEffectR';

export const sendNewPerson = (newPerson) => ({type: ADD_NEW_PERSON, newPerson});

export const ModifyPerson = (newPersonsArray) => ({
  type: MODIFY_PERSON,
  newPersonsArray,
});

export const sendNewPersonToObjPerson = (person) => ({
  type: SEND_PERSON_TO_OBJ_PERSON,
  person,
});
