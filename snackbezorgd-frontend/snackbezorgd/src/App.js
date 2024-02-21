import React, { Component } from "react";
import Modal from "./components/modal";
import axios from "axios";

class App extends Component {
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
      <div className="nav nav-tabs">
        <span
          onClick={() => this.displayactive(true)}
          className={this.state.viewactive ? "nav-link active" : "nav-link"}
        >
          Active
        </span>
        <span
          onClick={() => this.displayactive(false)}
          className={this.state.viewactive ? "nav-link" : "nav-link active"}
        >
          Inactive
        </span>
      </div>
    );
  };

  renderproducts = () => {
    const { viewactive } = this.state;
    const newproducts = this.state.productList.filter(
      (product) => product.active === viewactive
    );

    return newproducts.map((product) => (
      <li
        key={product.id}
        className="list-group-product d-flex justify-content-between align-products-center"
      >
        <span
          className={`todo-title mr-2 mt-4 ${
            this.state.viewactive ? "active-todo" : ""
          }`}
          title={product.description}
        >
          {product.title}
        </span>
        <span className={"todo-description mr-2 descr mt-4"}>
          {product.description}
        </span>
        <span className={"todo-description mr-2 descr mt-4"}>
          €{product.price}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2 mt-4"
            onClick={() => this.editproduct(product)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mt-4"
            onClick={() => this.handleDelete(product)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Snackbezorgd</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createproduct}
                >
                  Add Product
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderproducts()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeproduct={this.state.activeproduct}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
