import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { firestore } from '../../../firebase';

import { setQuestForm, editQuestForm, setLoading } from '../../redux';

import './QuestDetail.css';

const enhance = compose(
  connect(
    (state) => state,
    { setQuestForm, editQuestForm, setLoading }
  ),
  lifecycle({
    componentWillMount() {
      const {
        match: {
          params: { id }
        }
      } = this.props;

      firestore
        .collection('quest')
        .doc(id)
        .get()
        .then((doc) => {
          this.props.setQuestForm({ ...doc.data() });
        });
    }
  })
);

const keyEnterPress = (e) => {
  if (e.keyCode === 13 && e.shiftKey === false) {
    e.preventDefault();
    e.stopPropagation();
  }
};

const updateQuest = (id, value, setLoading) => {
  setLoading(true);
  firestore
    .collection('quest')
    .doc(id)
    .set({
      ...value,
      open: value.open === 'true',
      hidden: value.hidden === 'true'
    })
    .then(() => {
      setLoading(false);
    });
};

const QuestDetail = (props) => {
  const {
    admin: {
      loading,
      quest: { name, hidden, expire, open }
    },
    match: {
      params: { id }
    },
    editQuestForm,
    setLoading
  } = props;

  return loading ? (
    <div className="AppLoader">Loading...</div>
  ) : (
    <div className="UserDetail-container">
      <div className="UserDetail-header">
        <h3>Edit Quest</h3>
      </div>
      <Form onKeyDown={(e) => keyEnterPress(e)}>
        <FormGroup className="UserDetailForm">
          <Label>Quest Name</Label>
          <Input name="name" onChange={(e) => editQuestForm('name', e.target.value)} value={name} />
        </FormGroup>
        <FormGroup className="UserDetailForm">
          <Label>Hidden</Label>
          <Input name="hidden" type="select" onChange={(e) => editQuestForm('hidden', e.target.value)} value={hidden}>
            <option value={true}>เปิด</option>
            <option value={false}>ปิด</option>
          </Input>
        </FormGroup>
        <FormGroup className="UserDetailForm">
          <Label>Open</Label>
          <Input name="open" type="select" onChange={(e) => editQuestForm('open', e.target.value)} value={open}>
            <option value={true}>เปิด</option>
            <option value={false}>ปิด</option>
          </Input>
        </FormGroup>
        <FormGroup className="UserDetailForm">
          <Label>Expire</Label>
          <Input name="expire" onChange={(e) => editQuestForm('expire', e.target.value)} value={expire} />
        </FormGroup>
        <div className="Submit-btn">
          <Link to="/admin/quest/list">
            <Button color="danger">
              <FontAwesomeIcon icon="times" /> ยกเลิก
            </Button>
          </Link>{' '}
          <Button color="success" onClick={() => updateQuest(id, props.admin.quest, setLoading)}>
            <FontAwesomeIcon icon="save" /> บันทึก
          </Button>
        </div>
      </Form>
    </div>
  );
};

QuestDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  admin: PropTypes.shape({
    loading: PropTypes.bool,
    quest: PropTypes.object
  }),
  setQuestForm: PropTypes.func,
  editQuestForm: PropTypes.func,
  setLoading: PropTypes.func
};

export default enhance(QuestDetail);
