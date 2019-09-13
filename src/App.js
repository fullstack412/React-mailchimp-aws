import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./App.scss"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>User</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form action="https://vi0q1k3t0h.execute-api.us-east-1.amazonaws.com/default/mailchimp-signup" 
                  method="post">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input type="select" name="gender" id="gender">
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input type="text" name="phone" id="phone" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="website">Web Site</Label>
                <Input type="text" name="website" id="website" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
