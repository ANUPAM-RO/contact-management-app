import {ActionType} from './action-types'
export interface Contact {
  id: number;
  fname: string;
  lname: string;
  status: string;
}

export interface AddContactAction {
  type: ActionType.ADD_CONTACT;
  payload: Contact;
}

export interface DeleteContactAction {
  type: ActionType.DELETE_CONTACT;
  payload: number;
}
export interface UpdateContactAction {
  type: ActionType.UPDATE_CONTACT,
  payload: Contact;
}

export type ContactActionTypes = AddContactAction | DeleteContactAction | UpdateContactAction;