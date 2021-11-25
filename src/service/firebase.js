import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlYNhGq_FDc8pvSNKQaq7z4-vbbskVrl8',
  authDomain: 'expense-tracker-9cdba.firebaseapp.com',
  projectId: 'expense-tracker-9cdba',
  storageBucket: 'expense-tracker-9cdba.appspot.com',
  messagingSenderId: '343314748997',
  appId: '1:343314748997:web:51c58ae2580a9815dc752c',
  databaseURL: 'https://expense-tracker-9cdba-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;