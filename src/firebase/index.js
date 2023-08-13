import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBhWSiWH9QyQLcXAtcUxF83uZUzqaJlbE',
  authDomain: 'vue-second-test-188a3.firebaseapp.com',
  projectId: 'vue-second-test-188a3',
  storageBucket: 'vue-second-test-188a3.appspot.com',
  messagingSenderId: '685976762715',
  appId: '1:685976762715:web:b292cc6cdce8df4917427e',
  measurementId: 'G-LC9ZCTK3Z7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };
