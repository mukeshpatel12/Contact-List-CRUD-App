import {
  SET_CONTACTS,
  SET_ADD_CONTACT,
  RESET_CONTACT,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  EDIT_MODEL_STATUS,
  ADD_MODEL_STATUS,
} from "./index";

export const setAddContact = (payload) => ({
  type: SET_ADD_CONTACT,
  payload,
});

export const resetContact = () => ({
  type: RESET_CONTACT,
});

export const fetchContactAction = (data) => ({
  type: SET_CONTACTS,
  payload: data,
});

export const createContactAction = (data) => ({
  type: CREATE_CONTACT,
  payload: data,
});

export const updateContactAction = (data) => ({
  type: UPDATE_CONTACT,
  payload: data,
});

export const deleteContactAction = (id) => ({
  type: DELETE_CONTACT,
  payload: { id },
});

export const setAddModelStatus = (status) => ({
  type: ADD_MODEL_STATUS,
  payload: status,
});

export const setEditModelStatus = (status) => ({
  type: EDIT_MODEL_STATUS,
  payload: status,
});
