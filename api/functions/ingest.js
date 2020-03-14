const functions = require('firebase-functions');
const admin = require('firebase-admin');

try {
  serviceAccount = require("../keys/wearequarantined-firebase-adminsdk-cez2w-3d829c6054.json");
  console.log('🔎 Found a service account key file.');
} catch (e) {
  console.log('⚠️ Could not find key file - assuming Firebase Functions environment.');
}

if (serviceAccount) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://wearequarantined.firebaseio.com',
  });

  console.log('⚡️ Initialised app using credentials file.');
} else {
  admin.initializeApp();

  console.log('️️️⚡️ Initialised app manually.');
}

exports.ingest = functions.https.onRequest((request, response) => {
 response.send({
   body: request.body,
   query: request.query,
 });
});