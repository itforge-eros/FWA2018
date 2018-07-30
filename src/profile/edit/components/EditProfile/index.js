import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setForm, setFormDefault, editProfile } from '../../../redux';

import './EditProfile.css';

const enhance = compose(
  connect(
    (state) => state,
    { setForm, setFormDefault, editProfile }
  ),
  lifecycle({
    componentWillMount() {
      this.props.setFormDefault();
    }
  })
);

const EditProfile = (props) => {
  const {
    setForm,
    editProfile,
    profile: {
      form: { nickname, prefix, firstname, lastname, student_id, branch, address, introduction, year }
    }
  } = props;

  const keyEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      e.stopPropagation();
      editProfile();
    }
  };

  return (
    <div className="editprofile-container">
      <div className="editprofile-header">
        <h3>Edit Profile</h3>
      </div>
      <Form onKeyDown={(e) => keyEnterPress(e)}>
        <FormGroup className="EditProfileForm">
          <Label>ชื่อเล่น</Label>
          <Input onChange={(e) => setForm('nickname', e.target.value)} value={nickname} />
        </FormGroup>
        <FormGroup className="EditProfileForm">
          <Label>คำนำหน้า</Label>
          <Input type="select" onChange={(e) => setForm('prefix', e.target.value)} value={prefix}>
            <option value="นาย">นาย</option>
            <option value="นางสาว">นางสาว</option>
            <option value="นาง">นาง</option>
          </Input>
        </FormGroup>
        <FormGroup className="EditProfileForm">
          <Label>ชื่อจริง</Label>
          <Input onChange={(e) => setForm('firstname', e.target.value)} value={firstname} />
        </FormGroup>
        <FormGroup className="EditProfileForm">
          <Label>นามสกุล</Label>
          <Input onChange={(e) => setForm('lastname', e.target.value)} value={lastname} />
        </FormGroup>
        <FormGroup className="EditProfileForm">
          <Label>เลขประจำตัวนักศึกษา</Label>
          <Input onChange={(e) => setForm('student_id', e.target.value)} value={student_id} />
        </FormGroup>
        <FormGroup className="EditProfileForm">
          <Label>สาขา</Label>
          <Input type="select" onChange={(e) => setForm('branch', e.target.value)} value={branch}>
            <option value="IT">IT</option>
            <option value="DSBA">DSBA</option>
            <option value="BIT">BIT</option>
          </Input>
        </FormGroup>
        <FormGroup className="EditProfileForm">
          <Label>ชั้นปี</Label>
          <Input type="select" onChange={(e) => setForm('year', e.target.value)} value={year}>
            <option value="1">ปี 1</option>
            <option value="2">ปี 2</option>
            <option value="3">ปี 3</option>
            <option value="4">ปี 4</option>
          </Input>
        </FormGroup>
        <FormGroup className="EditProfileForm">
          <Label>ที่อยู่ (เช่น บ้าน, เกกี, วีคอนโด)</Label>
          <Input onChange={(e) => setForm('address', e.target.value)} value={address} />
        </FormGroup>
        <FormGroup className="EditProfileForm">
          <Label for="introduction">แนะนำตัวสั้นๆกันหน่อย!</Label>
          <Input name="introduction" onChange={(e) => setForm('introduction', e.target.value)} value={introduction} />
        </FormGroup>
        <div className="Submitpf-btn">
          <Link to="/profile/me">
            <Button color="danger">
              <FontAwesomeIcon icon="times" /> ยกเลิก
            </Button>
          </Link>{' '}
          <Button color="success" onClick={() => editProfile()}>
            <FontAwesomeIcon icon="save" /> บันทึก
          </Button>
        </div>
      </Form>
    </div>
  );
};

EditProfile.propTypes = {
  setForm: PropTypes.func,
  setFormDefault: PropTypes.func,
  editProfile: PropTypes.func,
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

export default enhance(EditProfile);
