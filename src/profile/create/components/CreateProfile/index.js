// Core
import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// redux actions
import { setForm } from '../../../redux';

import './CreateProfile.css';

const enhance = compose(
  connect(
    (state) => state,
    { setForm }
  )
);

const CreateProfile = (props) => {
  const {
    setForm,
    profile: {
      form: { nickname, prefix, firstname, lastname, student_id, branch, address, introduction, year }
    }
  } = props;

  return (
    <div className="createprofile-container">
      <div className="createprofile-header">
        <h3>Create Profile</h3>
      </div>
      <Form>
        <FormGroup className="CreateProfileForm">
          <Label>ชื่อเล่น</Label>
          <Input onChange={(e) => setForm('nickname', e.target.value)} value={nickname} />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>คำนำหน้า</Label>
          <Input type="select" onChange={(e) => setForm('prefix', e.target.value)} value={prefix}>
            <option value="นาย">นาย</option>
            <option value="นางสาว">นางสาว</option>
            <option value="นาง">นาง</option>
          </Input>
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>ชื่อจริง</Label>
          <Input onChange={(e) => setForm('firstname', e.target.value)} value={firstname} />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>นามสกุล</Label>
          <Input onChange={(e) => setForm('lastname', e.target.value)} value={lastname} />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>เลขประจำตัวนักศึกษา</Label>
          <Input onChange={(e) => setForm('student_id', e.target.value)} value={student_id} />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>สาขา</Label>
          <Input type="select" onChange={(e) => setForm('branch', e.target.value)} value={branch}>
            <option value="IT">IT</option>
            <option value="DSBA">DSBA</option>
            <option value="BIT">BIT</option>
          </Input>
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>สาขา</Label>
          <Input type="select" onChange={(e) => setForm('year', e.target.value)} value={year}>
            <option value="1">ปี 1</option>
            <option value="2">ปี 2</option>
            <option value="3">ปี 3</option>
            <option value="4">ปี 4</option>
          </Input>
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>ที่อยู่ (เช่น บ้าน, เกกี, วีคอนโด)</Label>
          <Input onChange={(e) => setForm('address', e.target.value)} value={address} />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label for="address">แนะนำตัวสั้นๆกันหน่อย!</Label>
          <Input
            type="textarea"
            name="address"
            onChange={(e) => setForm('introduction', e.target.value)}
            value={introduction}
          />
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

CreateProfile.propTypes = {
  setForm: PropTypes.func,
  profile: PropTypes.shape({
    form: PropTypes.shape({
      nickname: PropTypes.string,
      prefix: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      student_id: PropTypes.string,
      branch: PropTypes.string,
      address: PropTypes.string,
      introduction: PropTypes.string,
      year: PropTypes.string
    })
  })
};

export default enhance(CreateProfile);
