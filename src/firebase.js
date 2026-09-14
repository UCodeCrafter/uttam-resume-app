import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import { getDatabase, ref, onValue } from 'firebase/database';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Check if valid configuration exists
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'your_api_key_here' &&
  firebaseConfig.projectId &&
  firebaseConfig.projectId !== 'your_project_id'
);

let app = null;
let firestoreDb = null;
let realtimeDb = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    firestoreDb = getFirestore(app);
    if (firebaseConfig.databaseURL) {
      realtimeDb = getDatabase(app);
    }
  } catch (error) {
    console.warn('Firebase initialization error:', error);
  }
}

/**
 * Subscribe to resume data updates (Firestore or Realtime Database).
 * Falls back to Firestore collection "resume", doc "uttam", or Realtime DB ref "resumeData".
 */
export const subscribeToResumeData = (onDataReceived, onError) => {
  if (!isFirebaseConfigured || (!firestoreDb && !realtimeDb)) {
    onError && onError(new Error('Firebase is not configured'));
    return () => { };
  }

  // 1. Primary: Read from Firebase Realtime Database root ('/') where JSON is imported
  if (realtimeDb) {
    try {
      const rtdbRef = ref(realtimeDb, '/');
      const unsubscribe = onValue(
        rtdbRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            // Check if root has resume data
            if (data && (data.personal || data.skills || data.projects || data.about)) {
              onDataReceived(data);
              return;
            }
          }
          // Fallback to Firestore if RTDB root is empty
          if (firestoreDb) {
            subscribeFirestore(onDataReceived, onError);
          }
        },
        (err) => {
          console.warn('Realtime DB read error, trying Firestore fallback:', err);
          if (firestoreDb) {
            subscribeFirestore(onDataReceived, onError);
          } else {
            onError && onError(err);
          }
        }
      );
      return unsubscribe;
    } catch (e) {
      console.warn('Realtime DB error:', e);
    }
  }

  // 2. Secondary Fallback: Firestore
  if (firestoreDb) {
    return subscribeFirestore(onDataReceived, onError);
  }

  return () => { };
};

const subscribeFirestore = (onDataReceived, onError) => {
  try {
    const docRef = doc(firestoreDb, 'resume', 'uttam');
    return onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          onDataReceived(docSnap.data());
        } else {
          onError && onError(new Error('No document found in Firestore'));
        }
      },
      (err) => onError && onError(err)
    );
  } catch (e) {
    onError && onError(e);
    return () => { };
  }
};

export { app, firestoreDb, realtimeDb };



