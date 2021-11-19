import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../Redux/thunks";
import { resetContact, setEditModelStatus } from "../Redux/Actions/allAction";

export default function EditContact() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Todos.setEditModel);
  const handleClose = () => dispatch(setEditModelStatus({ status: false }));
  const selectContact = useSelector((state) => state.Todos.setContact);

  const [fileData, setFileData] = useState({
    imagePreviewUrl: selectContact.picture,
  });
  const onchangeHandler = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setFileData({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  const submitContactHandle = (e) => {
    e.preventDefault();
    dispatch(
      updateContact(selectContact.id, {
        name: e.target.name.value,
        lastname: e.target.lastname.value,
        telephone: e.target.telephone.value,
        email: e.target.email.value,
        age: e.target.age.value,
        picture: fileData.imagePreviewUrl,
        website: e.target.website.value,
        tags: e.target.tags.value,
      })
    );
    dispatch(resetContact());
    handleClose();
  };

  return (
    <div>
      {/* Form Model Code  */}
      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "wheat" }} closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "cornsilk" }}>
          <Form onSubmit={submitContactHandle}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Update Profile Picture</Form.Label>
              <Form.Control
                hidden="true"
                type="file"
                name="picture"
                onChange={(event) => onchangeHandler(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <img
                  alt="Contact Profile"
                  width="200px"
                  height="200px"
                  style={{
                    borderRadius: "100%",
                    border: "solid 2px",
                    textAlign: "center",
                    verticalAlign: "center",
                    marginLeft: "120px",
                  }}
                  src={fileData.imagePreviewUrl}
                />
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={selectContact.name}
                placeholder="Enter name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Enter lastname"
                defaultValue={selectContact.lastname}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="number"
                name="telephone"
                placeholder="Enter telephone"
                maxLength="10"
                defaultValue={selectContact.telephone}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={selectContact.email}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                name="age"
                placeholder="Enter age"
                defaultValue={selectContact.age}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                placeholder="Enter website"
                defaultValue={selectContact.website}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                name="tags"
                placeholder="Enter tags"
                defaultValue={selectContact.tags}
                required
              />
            </Form.Group>
            <center>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </center>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
