import {
  ADD_MODEL_STATUS,
  DELETE_CONTACT,
  EDIT_MODEL_STATUS,
  RESET_CONTACT,
  SET_ADD_CONTACT,
  SET_CONTACTS,
} from "../Actions";

const initialState = {
  contacts: [],
  setContact: { name: "" },
  setAddModel: { status: false },
  setEditModel: { status: false },
};

const Todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: [...action.payload],
      };

    case SET_ADD_CONTACT:
      return {
        ...state,
        setContact: { ...state.setContact, ...action.payload },
      };

    case RESET_CONTACT:
      return {
        ...state,
        setContact: {},
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(
            (setContact) => setContact.id !== action.payload
          ),
        ],
      };

    case ADD_MODEL_STATUS:
      return {
        ...state,
        setAddModel: { ...state.setAddModel, ...action.payload },
      };

    case EDIT_MODEL_STATUS:
      return {
        ...state,
        setEditModel: { ...state.setEditModel, ...action.payload },
      };
    default:
      return state;
  }
};
export default Todos;
