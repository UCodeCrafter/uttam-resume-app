import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Check if valid configuration exists for Realtime Database
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'your_api_key_here' &&
  firebaseConfig.databaseURL &&
  firebaseConfig.databaseURL !== 'your_database_url_here'
);

let app = null;
let realtimeDb = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    realtimeDb = getDatabase(app);
  } catch (error) {
    console.warn('Firebase Realtime Database initialization error:', error);
  }
}

/**
 * Subscribe to resume data updates from Firebase Realtime Database.
 * Listens to real-time changes at the database root.
 */
export const subscribeToResumeData = (onDataReceived, onError) => {
  if (!isFirebaseConfigured || !realtimeDb) {
    onError && onError(new Error('Firebase Realtime Database is not configured'));
    return () => {};
  }

  try {
    const rtdbRef = ref(realtimeDb, '/');
    const unsubscribe = onValue(
      rtdbRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          onDataReceived(data);
        } else {
          onDataReceived(null);
        }
      },
      (err) => {
        console.warn('Realtime Database read error:', err);
        onError && onError(err);
      }
    );
    return unsubscribe;
  } catch (e) {
    console.warn('Realtime Database subscription error:', e);
    onError && onError(e);
    return () => {};
  }
};

/**
 * Update / Save resume data to Firebase Realtime Database.
 */
export const saveResumeData = async (data) => {
  if (!isFirebaseConfigured || !realtimeDb) {
    throw new Error('Firebase Realtime Database is not configured');
  }
  const rtdbRef = ref(realtimeDb, '/');
  return set(rtdbRef, data);
};

export { app, realtimeDb };
