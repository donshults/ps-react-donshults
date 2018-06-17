import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextBox with an error.*/
export default class ExampleError extends React.Component{
    render(){
        return (
            <TextInput
                htmlId="Required"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."

                />
        )
    }
}
