import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './editpfstyle.css';

class EditProfile extends Component {
  render() {
    return (
      <div className="editprofile-container">
        <div className="editprofile-header">
          <h3>Edit Profile</h3>
        </div>
        <Form>
          <FormGroup className="ChangeNickname">
            <Label>ชื่อเล่น</Label>
            <Input />
          </FormGroup>
          <FormGroup className="SelectBranch">
            <Label>สาขา</Label>
            <Input type="select" name="branch">
              <option>IT</option>
              <option>DSBA</option>
              <option>BIT</option>
            </Input>
          </FormGroup>
          <FormGroup className="LilbitText">
            <Label for="exampleText">แนะนำตัวสั้นๆกันหน่อย!</Label>
            <Input type="textarea" name="text" />
          </FormGroup>
          <div className="Submitpf-btn">
            <Button>ยืนยัน</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default EditProfile;
