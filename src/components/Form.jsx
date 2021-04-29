import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree: false,
    skills: [],
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
  };

  handleSkillsChange = (event) => {
    if (event.target.checked){
      this.setState({
        skills:[...this.state.skills,event.target.value]
      });
    }else{
      const skills = this.state.skills.filter(skill =>skill !== event.target.value)
      this.setState({skills})
    }
  }
  render() {
    const { name, country, bio, birthDay, agree, skills } = this.state;
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
          <input
            type="radio"
            className="ms-2"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />
          Male
          <input
            className="ml-2"
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />
          Female
          <input
            type="radio"
            className="ml-2"
            name="gender"
            value="Other"
            onChange={this.handleChange}
          />
          Other
        </div>

        <div>
          Skills: <br />
          <input
            type="checkbox"
            name="skills"
            value="Java"
            checked={skills.includes("Java")}
            onChange={this.handleSkillsChange}
          />
          Java
          <input
            type="checkbox"
            name="skills"
            value="JavaScript"
            className="ml-3"
            checked={skills.includes("JavaScript")}
            onChange={this.handleSkillsChange}
          />
          JavaScript
          <input
            type="checkbox"
            name="skills"
            value="Python"
            className="ml-3"
            checked={skills.includes("Python")}
            onChange={this.handleSkillsChange}
          />
          Python
          <input
            type="checkbox"
            name="skills"
            value="GoLang"
            className="ml-3"
            checked={skills.includes("GoLang")}
            onChange={this.handleSkillsChange}
          />
          GoLang
        </div>

        <div>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.handleCheckBox}
          />
          I agree to all the terms and conditions
        </div>
        <br />

        <button
          className="btn btn-primary"
          onClick={() => console.log(this.state)}
        >
          Save Data
        </button>
      </div>
    );
  }
}

export default Form;
