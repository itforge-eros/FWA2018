const functions = require('firebase-functions');

const admin = require('firebase-admin');

const ServiceAccount = require('./service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount),
  databaseURL: 'https://freshy-app2018.firebaseio.com'
});

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

exports.friend = functions.https.onRequest(async (request, response) => {
  // Check request method
  if (request.method !== 'POST') {
    return response.status(400).send({ message: 'I am not happy' });
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
  let requester = request.body.requester;
  let userkey = id.substring(0, 8);
  let userid = id.substring(8);

  // Key validation
  if (userkey !== key) {
    return response.status(400).send({ error: true, message: 'Key not valid' });
  }

  if (requester === userid) {
    return response.status(400).send({ error: true, message: 'แอดตัวเองไม่ได้นะ~' });
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

  if (!profile) return response.status(404).send({ error: true, message: 'Profile not found!' });

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

  if (!profile) return response.status(404).send({ error: true, message: 'Profile not found!' });

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
  return response.status(200).send({ error: false, message: 'success' });
});
