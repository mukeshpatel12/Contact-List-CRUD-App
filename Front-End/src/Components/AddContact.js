import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../Redux/thunks";
import { resetContact, setAddModelStatus } from "../Redux/Actions/allAction";
import upload from "../assests/images/uploadImage.png";
import { formFields } from "./utils";

export default function AddContact() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.Todos.setAddModel);
  const handleClose = () => dispatch(setAddModelStatus({ status: false }));
  const [fileData, setFileData] = useState({ imagePreviewUrl: upload });
  console.log(fileData);
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

  const submitUserHandle = (e) => {
    e.preventDefault();
    dispatch(
      createContact({
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
        <Modal.Header
          style={{ backgroundColor: "wheat" }}
          closeButton
          aria-label="Close"
        >
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "cornsilk" }}>
          <Form onSubmit={submitUserHandle}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Upload Profile Picture</Form.Label>
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
                    borderRadius: "30%",
                    border: "solid 2px",
                    textAlign: "center",
                    verticalAlign: "center",
                    marginLeft: "120px",
                  }}
                  src={fileData.imagePreviewUrl}
                />
              </Form.Label>
            </Form.Group>

            {formFields.map((field) => (
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </Form.Group>
            ))}
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
