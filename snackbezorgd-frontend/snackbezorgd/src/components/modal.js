import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeproduct: this.props.activeproduct,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeproduct = { ...this.state.activeproduct, [name]: value };

    this.setState({ activeproduct });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Product</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="product-title">Title</Label>
              <Input
                type="text"
                id="product-title"
                name="title"
                value={this.state.activeproduct.title}
                onChange={this.handleChange}
                placeholder="Enter product Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="product-description">Description</Label>
              <Input
                type="text"
                id="product-description"
                name="description"
                value={this.state.activeproduct.description}
                onChange={this.handleChange}
                placeholder="Enter product description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="product-description">Price</Label>
              <Input
                type="text"
                id="product-price"
                name="price"
                value={this.state.activeproduct.price}
                onChange={this.handleChange}
                placeholder="Enter product price"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="active"
                  checked={this.state.activeproduct.active}
                  onChange={this.handleChange}
                />
                Active?
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeproduct)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}