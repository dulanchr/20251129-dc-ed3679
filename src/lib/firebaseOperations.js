import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "@/config/firebase";

/**
 * Sign in user with email and password
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<UserCredential>}
 */
export async function signInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: getAuthErrorMessage(error.code) };
  }
}

/**
 * Sign out current user
 * @returns {Promise<void>}
 */
export async function signOutUser() {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * Send password reset email
 * @param {string} email 
 * @returns {Promise<void>}
 */
export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: getAuthErrorMessage(error.code) };
  }
}

/**
 * Fetch classes by category (e.g., 'ICT', 'Math')
 * @param {string} category 
 * @returns {Promise<Array>}
 */
export async function fetchClassesByCategory(category) {
  try {
    const classesRef = collection(db, "classes");
    const q = query(
      classesRef,
      where("category", "==", category),
      orderBy("title")
    );
    const snapshot = await getDocs(q);
    
    const classes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { data: classes, error: null };
  } catch (error) {
    console.error("Error fetching classes:", error);
    return { data: [], error: error.message };
  }
}

/**
 * Fetch all seminars ordered by date
 * @returns {Promise<Array>}
 */
export async function fetchSeminars() {
  try {
    const seminarsRef = collection(db, "seminars");
    const q = query(seminarsRef, orderBy("date", "asc"));
    const snapshot = await getDocs(q);
    
    const seminars = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { data: seminars, error: null };
  } catch (error) {
    console.error("Error fetching seminars:", error);
    return { data: [], error: error.message };
  }
}

/**
 * Convert Firebase auth error codes to user-friendly messages
 * @param {string} code 
 * @returns {string}
 */
function getAuthErrorMessage(code) {
  const errorMessages = {
    "auth/invalid-email": "Invalid email address.",
    "auth/user-disabled": "This account has been disabled.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/invalid-credential": "Invalid email or password.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/network-request-failed": "Network error. Please check your connection.",
  };
  
  return errorMessages[code] || "An unexpected error occurred.";
}
