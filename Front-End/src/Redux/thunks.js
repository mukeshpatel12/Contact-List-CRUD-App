import UserService from "../Services/Service";
import {
  createContactAction,
  deleteContactAction,
  fetchContactAction,
  updateContactAction,
} from "./Actions/allAction";

export const fetchContacts = () => async (dispatch) => {
  try {
    const res = await UserService.getAll();
    dispatch(fetchContactAction(res.data));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createContact = (data) => async (dispatch) => {
  try {
    const res = await UserService.create(data);
    dispatch(createContactAction(res.data));
    dispatch(fetchContacts());
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateContact = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.update(id, data);
    dispatch(updateContactAction(res.data));
    dispatch(fetchContacts());
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await UserService.delete(id);
    dispatch(deleteContactAction(id));
    dispatch(fetchContacts());
  } catch (err) {
    console.log(err);
  }
};
