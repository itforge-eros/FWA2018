// Core
import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// redux actions
import { setForm, createProfile } from '../../../redux';

import './CreateProfile.css';

const enhance = compose(
  connect(
    (state) => state,
    { setForm, createProfile }
  )
);

const CreateProfile = (props) => {
  const {
    setForm,
    createProfile,
    profile: {
      form: { nickname, prefix, firstname, lastname, student_id, branch, address, introduction, year }
    }
  } = props;

  const keyEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      e.stopPropagation();
      createProfile();
    }
  };

  return (
    <div className="createprofile-container">
      <div className="createprofile-header">
        <h3>Create Profile</h3>
      </div>
      <Form onKeyDown={(e) => keyEnterPress(e)}>
        <FormGroup className="CreateProfileForm">
          <Label for="nickname">ชื่อเล่น</Label>
          <Input
            name="nickname"
            onChange={(e) => setForm('nickname', e.target.value)}
            value={nickname}
            placeholder="ลาดกระบัง"
            required
          />
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
          <Input onChange={(e) => setForm('firstname', e.target.value)} value={firstname} placeholder="ไอที" required />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label>นามสกุล</Label>
          <Input
            onChange={(e) => setForm('lastname', e.target.value)}
            value={lastname}
            placeholder="ลาดกระบัง"
            required
          />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label for="student_id">เลขประจำตัวนักศึกษา (เช่น 60070xxx)</Label>
          <Input
            name="student_id"
            onChange={(e) => setForm('student_id', e.target.value)}
            value={student_id}
            placeholder="60070xxx 59070xxx 58070xxx"
            required
          />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label for="branch">สาขา</Label>
          <Input name="branch" type="select" onChange={(e) => setForm('branch', e.target.value)} value={branch}>
            <option value="IT">IT</option>
            <option value="DSBA">DSBA</option>
            <option value="BIT">BIT</option>
          </Input>
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label for="year">ชั้นปี</Label>
          <Input name="year" type="select" onChange={(e) => setForm('year', e.target.value)} value={year}>
            <option value="1">ปี 1</option>
            <option value="2">ปี 2</option>
            <option value="3">ปี 3</option>
            <option value="4">ปี 4</option>
          </Input>
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label for="address">ที่อยู่ (เช่น บ้าน, เกกี, วีคอนโด)</Label>
          <Input
            name="address"
            onChange={(e) => setForm('address', e.target.value)}
            value={address}
            placeholder="บ้าน"
            required
          />
        </FormGroup>
        <FormGroup className="CreateProfileForm">
          <Label for="introduction">แนะนำตัวสั้นๆกันหน่อย!</Label>
          <Input
            name="introduction"
            onChange={(e) => setForm('introduction', e.target.value)}
            value={introduction}
            placeholder="แนะนำตัวกันหน่อย"
            required
          />
        </FormGroup>
        <div className="Submitpf-btn">
          <Button color="success" onClick={() => createProfile()}>
            <FontAwesomeIcon icon="save" /> บันทึก
          </Button>
        </div>
      </Form>
    </div>
  );
};

CreateProfile.propTypes = {
  setForm: PropTypes.func,
  createProfile: PropTypes.func,
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
