import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree:false,
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleCheckBox = (event) => {
    this.setState({
      agree: event.target.checked,
    });
  }
  render() {
    const { name, country, bio, birthDay,agree } = this.state;
    return (
      <div className="mt-5">
        <input
          className="form-control my-2 "
          onChange={this.handleChange}
          type="text"
          name="name"
          value={name}
          placeholder="Md Nahid"
        />
        <select
          className="form-control my-2"
          name="country"
          value={country}
          onChange={this.handleChange}
        >
          <option>Select country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Srilanka">Srilanka</option>
          <option value="Pakistan">Pakistan</option>
        </select>

        <textarea
          className="form-control my-2"
          onChange={this.handleChange}
          name="bio"
          value={bio}
          placeholder="Tell Me About Yourself"
        ></textarea>

        <input
          className="form-control my-2"
          onChange={this.handleChange}
          value={birthDay}
          type="date"
          name="birthDay"
        />
        <div>
            <input type="radio" className="ms-2" name='gender' value='Male'  onChange={this.handleChange} />Male
            <input className="ml-2" type="radio" name='gender' value='Female'  onChange={this.handleChange} />Female
            <input type="radio" className="ml-2" name='gender' value='Other'  onChange={this.handleChange}  />Other
        </div>
        <div className="">
          <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckBox} />
          I agree to all the terms and conditions
        </div>
        <br/>

        <button className="btn btn-primary" onClick={ ()=>console.log(this.state)}>
          Save Data
        </button>
      </div>
    );
  }
}

export default Form;
