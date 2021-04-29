import React from "react";

class ControlForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="MD Nahid"
        />
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={this.handleChange}
          value={email}
          placeholder="nahid@gmail.com"
        />
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={this.handleChange}
          name="password"
          placeholder="******"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default ControlForm;
