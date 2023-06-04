import { ActionType } from './action-types';
import { Contact, ContactActionTypes } from './types';

export const addContact = (contact: Contact): ContactActionTypes => ({
  type: ActionType.ADD_CONTACT,
  payload: contact,
});

export const updateContact = (contact: Contact): ContactActionTypes => ({
  type: ActionType.UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id: string): ContactActionTypes => ({
  type: ActionType.DELETE_CONTACT,
  payload: id,
});