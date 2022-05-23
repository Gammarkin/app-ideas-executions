import {MODIFY_PERSON, ADD_NEW_PERSON} from '../reducers/causeEffectR';

export const sendNewPerson = (newPerson) => ({type: ADD_NEW_PERSON, newPerson});

export const ModifyPerson = (modifiedPersonName, newPerson) => ({
  type: MODIFY_PERSON,
  modifiedPersonName,
  newPerson,
});
