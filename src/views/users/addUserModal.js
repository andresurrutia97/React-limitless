import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

export default class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.imprimir = this.imprimir.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var userName = this.refs.fullName.value;
    var name = this.refs.userName.value;
    var email = this.refs.email.value;
    var department = this.refs.department.value;
    var roleRights = this.refs.roleRights.value;
    var isSuperAdmin = this.refs.checkAdmin.checked;

    this.props.handlenewuser(
      userName,
      name,
      email,
      department,
      roleRights,
      isSuperAdmin
    );

    this.props.onHide();
  }

  imprimir() {
    console.log(this.refs.fullName.value);
    console.log(this.refs.userName.value);
    console.log(this.refs.password.value);
    console.log(this.refs.email.value);
    console.log(this.refs.department.value);
    console.log(this.refs.roleRights.value);
    console.log(this.refs.checkAdmin.checked);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Manage user
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group as={Row} controlId="formName">
              <Form.Label column sm="3">
                Full Name
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  ref="fullName"
                  type="text"
                  placeholder="Enter full name"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formUser">
              <Form.Label column sm="3">
                User Name
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  ref="userName"
                  type="text"
                  placeholder="Enter user name"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPassword">
              <Form.Label column sm="3">
                Password
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  ref="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formEmail">
              <Form.Label column sm="3">
                Email
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  ref="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formDepartment">
              <Form.Label column sm="3">
                Department
              </Form.Label>
              <Col sm="9">
                <Form.Control ref="department" as="select" required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formRoleRights">
              <Form.Label column sm="3">
                Role Rights
              </Form.Label>
              <Col sm="9">
                <Form.Control ref="roleRights" as="select" required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIsSuperAdmin">
              <Form.Label column sm="3">
                IsSuperAdmin
              </Form.Label>
              <Col sm="9">
                <Form.Check ref="checkAdmin" type="checkbox" />
              </Col>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                className="mr-2"
                variant="danger"
                type="submit"
                onClick={this.props.onHide}
              >
                Close
              </Button>
              <Button type="submit">
                <i className="icon-check mr-2" />
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
