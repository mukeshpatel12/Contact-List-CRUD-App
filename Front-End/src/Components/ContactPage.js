import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { fetchContacts, deleteContact } from "../Redux/thunks";
import {
  setAddContact,
  setAddModelStatus,
  setEditModelStatus,
} from "../Redux/Actions/allAction";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import { tableFields } from "./utils";

function Contact() {
  let contact = null;
  //contact models state start
  const addModelStatus = useSelector((state) => state.Todos.setAddModel);
  const editModelStatus = useSelector((state) => state.Todos.setEditModel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactData = (record) => {
    dispatch(deleteContact(record.id));
    dispatch(fetchContacts());
  };

  const editContactModel = (record) => {
    dispatch(setAddContact(record));
    dispatch(setEditModelStatus({ status: true }));
  };

  const addContactModel = () => {
    dispatch(setAddModelStatus({ status: true }));
  };

  const contacts = useSelector((state) => state.Todos.contacts);
  if (contacts) {
    contact = contacts.map((record) => {
      return (
        <tr key={record.id}>
          <td>{record.name}</td>
          <td>{record.lastname}</td>
          <td>{record.telephone}</td>
          <td>{record.email}</td>
          <td>{record.age}</td>
          <td>
            {
              <img
                className="rounded-circle"
                width="70px"
                height="70px"
                src={record.picture}
              />
            }
          </td>
          <td>{record.website}</td>
          <td>{record.tags}</td>
          <td style={{ textAlign: "center" }}>
            <span>
              <Button
                style={{ marginBottom: "10px", width: "68px" }}
                variant="warning"
                onClick={() => editContactModel(record)}
              >
                Edit
              </Button>
              <br />
              <Button
                style={{ width: "68px" }}
                variant="danger"
                onClick={() => deleteContactData(record)}
              >
                Delete
              </Button>
            </span>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ width: "350px" }}
        >
          <p style={{ fontWeight: "bold", fontSize: "30px" }} className="m-0">
            Contact List
          </p>
        </div>
        <p
          style={{
            textAlign: "right",
            paddingRight: "20px",
            marginBottom: "30px",
          }}
        >
          <Button
            aria-controls="offcanvasNavbar"
            variant="success"
            onClick={() => addContactModel()}
          >
            Add New Contact
          </Button>
        </p>
      </div>
      <Table hover style={{ backgroundColor: "cornsilk" }}>
        <thead>
          <tr style={{ backgroundColor: "wheat" }}>
            {tableFields.map((field) => (
              <td>{field}</td>
            ))}
          </tr>
        </thead>
        <tbody>{contact}</tbody>
      </Table>
      {/* For Model Conditional Renderering */}
      <>
        {addModelStatus.status ? <AddContact /> : ""}
        {editModelStatus.status ? <EditContact /> : ""}
      </>
    </div>
  );
}
export default Contact;
