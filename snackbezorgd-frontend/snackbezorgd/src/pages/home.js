import React, { Component } from "react";
import Modal from "../components/modal";
import axios from "axios";
import {
  Button,
  List,
  ListItem,
  Typography,
  Stack,
  Box,
  Tab,
  Tabs,
} from "@mui/material/";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewactive: true,
      productList: [],
      modal: false,
      activeproduct: {
        title: "",
        description: "",
        price: 0,
        active: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/product/")
      .then((res) => this.setState({ productList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (product) => {
    this.toggle();

    if (product.id) {
      axios
        .put(`/api/product/${product.id}/`, product)
        .then((res) => this.refreshList());
      return;
    }
    axios.post("/api/product/", product).then((res) => this.refreshList());
  };

  handleDelete = (product) => {
    axios
      .delete(`/api/product/${product.id}/`)
      .then((res) => this.refreshList());
  };

  createproduct = () => {
    const product = { title: "", description: "", price: 0, active: false };

    this.setState({ activeproduct: product, modal: !this.state.modal });
  };

  editproduct = (product) => {
    this.setState({ activeproduct: product, modal: !this.state.modal });
  };

  displayactive = (status) => {
    if (status) {
      return this.setState({ viewactive: true });
    }

    return this.setState({ viewactive: false });
  };

  renderTabList = () => {
    return (
      <Tabs
        value={this.state.viewactive ? 0 : 1}
        onChange={(event, newValue) => this.displayactive(newValue === 0)}
      >
        <Tab label="Active" />
        <Tab label="Inactive" />
      </Tabs>
    );
  };

  renderproducts = () => {
    const { viewactive } = this.state;
    const newproducts = this.state.productList.filter(
      (product) => product.active === viewactive
    );

    return newproducts.map((product) => (
      <ListItem
        key={product.id}
        className="list-group-product d-flex justify-content-between align-products-center"
      >
        <Typography
          variant="h6"
          className={`todo-title mr-2 mt-4 ${
            this.state.viewactive ? "active-todo" : ""
          }`}
          title={product.description}
        >
          {product.title}
        </Typography>
        <Typography className="todo-description mr-2 descr mt-4">
          {product.description}
        </Typography>
        <Typography className="todo-description mr-2 descr mt-4">
          €{product.price}
        </Typography>
        <div>
          <Button
            variant="contained"
            color="secondary"
            className="mr-2 mt-4"
            onClick={() => this.editproduct(product)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            className="mt-4"
            onClick={() => this.handleDelete(product)}
          >
            Delete
          </Button>
        </div>
      </ListItem>
    ));
  };

  render() {
    return (
      <Stack className="container">
        <Button variant="solid" onClick={this.createproduct}>
          Add Product
        </Button>
        {this.renderTabList()}
        {this.renderproducts()}

        {this.state.modal ? (
          <Modal
            activeproduct={this.state.activeproduct}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </Stack>
    );
  }
}

export default Home;
