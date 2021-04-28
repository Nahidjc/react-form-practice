import React from 'react';

class Form extends React.Component   {
    state={
        name:'',
        country:'',
        bio:'',
        birthDay:'',
    };
    handleChange = event =>{

    };
    render() {
        return (
            <div>
                <input type="text"
                name="name"
                placeholder='Md Nahid'
                onChange={th}/>
            </div>
        );
    }

};

export default Form;