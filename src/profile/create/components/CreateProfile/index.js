import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CreateProfile.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

const EditProfile = (props) => {
  return (
    <div className="createprofile-container">
      <div className="createprofile-header">
        <h3>Create Profile</h3>
      </div>
      <Form>
        <FormGroup className="CreateProfileForm">
          <Label>ชื่อเล่น</Label>
          <Input />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>คำนำหน้า</Label>
          <Input type="select" name="branch">
            <option>นาย</option>
            <option>นางสาว</option>
            <option>นาง</option>
          </Input>
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>ชื่อจริง</Label>
          <Input />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>นามสกุล</Label>
          <Input />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>สาขา</Label>
          <Input type="select" name="branch">
            <option>IT</option>
            <option>DSBA</option>
            <option>BIT</option>
          </Input>
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>ที่อยู่ (เช่น บ้าน, เกกี, วีคอนโด)</Label>
          <Input />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label for="exampleText">แนะนำตัวสั้นๆกันหน่อย!</Label>
          <Input type="textarea" name="text" />
        </FormGroup>
        <div className="Submitpf-btn">
          <Button color="success">
            <FontAwesomeIcon icon="save" /> บันทึก
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default enhance(EditProfile);
