import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin(): { auth: ReturnType<typeof getAuth>; db: ReturnType<typeof getFirestore> } {
  try {
    // Check if Firebase Admin has already been initialized
    if (!getApps().length) {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Ensure privateKey is correctly formatted
        }),
      });


    }

    return {
      auth: getAuth(),
      db: getFirestore(),
    };
  } catch (error) {
    console.error("❌ Error initializing Firebase Admin SDK:", error);
    throw new Error("Firebase Admin initialization failed");
  }
}

// Export initialized Firebase Admin services
export const { auth, db } = initFirebaseAdmin();
