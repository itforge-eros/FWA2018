import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './EditProfile.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

const EditProfile = (props) => (
  <div className="editprofile-container">
    <div className="editprofile-header">
      <h3>Edit Profile</h3>
    </div>
    <Form>
      <FormGroup className="EditProfileForm">
        <Label>ชื่อเล่น</Label>
        <Input />
      </FormGroup>
      <FormGroup className="EditProfileForm">
        <Label>คำนำหน้า</Label>
        <Input type="select" name="branch">
          <option>นาย</option>
          <option>นางสาว</option>
          <option>นาง</option>
        </Input>
      </FormGroup>
      <FormGroup className="EditProfileForm">
        <Label>ชื่อจริง</Label>
        <Input />
      </FormGroup>
      <FormGroup className="EditProfileForm">
        <Label>นามสกุล</Label>
        <Input />
      </FormGroup>
      <FormGroup className="EditProfileForm">
        <Label>สาขา</Label>
        <Input type="select" name="branch">
          <option>IT</option>
          <option>DSBA</option>
          <option>BIT</option>
        </Input>
      </FormGroup>
      <FormGroup className="EditProfileForm">
        <Label>ที่อยู่ (เช่น บ้าน, เกกี, วีคอนโด)</Label>
        <Input />
      </FormGroup>
      <FormGroup className="EditProfileForm">
        <Label for="exampleText">แนะนำตัวสั้นๆกันหน่อย!</Label>
        <Input type="textarea" name="text" />
      </FormGroup>
      <div className="Submitpf-btn">
        <Link to="/profile/me">
          <Button color="danger">
            <FontAwesomeIcon icon="times" /> ยกเลิก
          </Button>
        </Link>{' '}
        <Button color="success">
          <FontAwesomeIcon icon="save" /> บันทึก
        </Button>
      </div>
    </Form>
  </div>
);

export default enhance(EditProfile);
