import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './editpfstyle.css';

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
        <Link to="/profile/me">
          <Button color="danger">ยกเลิก</Button>
        </Link>{' '}
        <Button color="success">บันทึก</Button>
      </div>
    </Form>
  </div>
);

export default enhance(EditProfile);
