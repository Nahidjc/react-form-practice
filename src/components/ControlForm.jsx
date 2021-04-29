import React from "react";

class ControlForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    data.name = event.target.name.value;
    data.email = event.target.email.value;
    data.password = event.target.password.value;
    console.log(data);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="MD Nahid"
        />
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="nahid@gmail.com"
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="******"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default ControlForm;
