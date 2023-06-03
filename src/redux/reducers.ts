import { ActionType } from './action-types';
import { Contact, ContactActionTypes } from './types';

interface State {
  contacts: Contact[];
}

const initialState: State = {
  contacts: [],
};


const reducer = (state = initialState, action: ContactActionTypes): State => {
  switch (action.type) {
    case ActionType.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
     case ActionType.UPDATE_CONTACT :
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, fname: action.payload.fname,  lname: action.payload.lname, status: action.payload.status }
            : contact
        ),
      };

    case ActionType.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
