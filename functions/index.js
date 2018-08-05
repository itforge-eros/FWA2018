const functions = require('firebase-functions');

const admin = require('firebase-admin');

const ServiceAccount = require('./service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount),
  databaseURL: 'https://freshy-app2018.firebaseio.com'
});

const firestore = admin.firestore();
firestore.settings({
  timestampsInSnapshots: true
});

exports.friend = functions.https.onRequest(async (request, response) => {
  // Check request method
  if (request.method !== 'POST') {
    return response.status(200).send({
      message: 'I am not happy'
    });
  }

  // Get current key
  let key = await firestore
    .collection('config')
    .doc('random')
    .get()
    .then((doc) => doc.data().value)
    .catch((err) => {
      console.error(err);
    });

  // Get some id
  let id = request.body.id;
  if (id.length > 36) {
    id = id.substring(36);
  }
  let requester = request.body.requester;
  let userkey = id.substring(0, 8);
  let userid = id.substring(8);

  // Key validation
  if (userkey !== key) {
    return response.status(200).send({
      error: true,
      message: 'Key not valid'
    });
  }

  if (requester === userid) {
    return response.status(200).send({
      error: true,
      message: 'แอดตัวเองไม่ได้นะ~'
    });
  }

  // Check requester
  let profile = await firestore
    .collection('profile')
    .doc(requester)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.error(err);
    });

  if (!profile) return response.status(404).send({
    error: true,
    message: 'Profile not found!'
  });

  // Check destination
  profile = await firestore
    .collection('profile')
    .doc(userid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.error(err);
    });

  if (!profile) return response.status(404).send({
    error: true,
    message: 'Profile not found!'
  });

  // New date now
  let add = Date.now();

  // Add to requester profile
  firestore
    .collection('profile')
    .doc(requester)
    .collection('friends')
    .doc(userid)
    .set({
      add
    });

  // Add to requester destination profile
  firestore
    .collection('profile')
    .doc(userid)
    .collection('friends')
    .doc(requester)
    .set({
      add
    });
  return response.status(200).send({
    error: false,
    message: 'success'
  });
});

exports.random = functions.https.onRequest(async (request, response) => {
  let key = functions.config().random.key;

  if (request.query.key !== key) {
    return response.status(401).send({
      message: 'Failed'
    });
  }

  let value = Math.random()
    .toString(36)
    .substr(2, 8);

  await firestore
    .collection('config')
    .doc('random')
    .set({
      value
    });
  return response.status(200).send({
    message: 'Success'
  });
});

exports.quest = functions.https.onRequest(async (request, response) => {
  // Check request method
  if (request.method !== 'POST') {
    return response.status(200).send({
      message: 'I am not happy'
    });
  }

  let id = request.body.id;
  if (id.length > 36) {
    id = id.substring(36);
  }
  let userkey = id.substring(0, 8);
  let questid = id.substring(8);
  let requester = request.body.requester

  // Get current key
  let key = await firestore
    .collection('config')
    .doc('random')
    .get()
    .then((doc) => doc.data().value)
    .catch((err) => {
      console.error(err);
    });

  if (userkey !== key) {
    return response.status(200).send({
      error: true,
      message: 'Key not valid'
    });
  }

  // Check valid quest
  let quest = await firestore
    .collection('quest')
    .doc(questid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        return {}
      }
    })
    .catch((err) => {
      console.error(err);
    });

  if (!quest) return response.status(200).send({
    error: true,
    message: 'Profile not found!'
  });


  if (!quest.open) return response.status(200).send({
    error: true,
    message: 'Quest not open!'
  });

  // New date now
  let add = Date.now();

  // Add quest
  await firestore
    .collection('profile')
    .doc(requester)
    .collection('quest')
    .doc(questid)
    .set({
      add
    });

  return response.status(200).send({
    error: false,
    message: 'Check-in completed!'
  });


});