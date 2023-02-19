import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logInWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmailAndPassword = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;

  await setDoc(doc(db, "Profile", email), {
    items: [],
  });
};

export const getToDoList = async (email) => {
  try {
    const docSnap = await getDoc(doc(db, "Profile", email));

    return docSnap.data().items;
  } catch (error) {
    console.error(error);
  }
};

export const setDataInBatches = (dataArray, batchSize) => {
  const batches = []; // Array to hold the batches
  const batchCount = Math.ceil(dataArray.length / batchSize); // Calculate the number of batches

  // Split the data into batches
  for (let i = 0; i < batchCount; i++) {
    const start = i * batchSize;
    const end = start + batchSize;
    batches.push(dataArray.slice(start, end));
  }

  // Write the batches to Firestore using batched writes
  batches.forEach((batch) => {
    const batchWrite = writeBatch(db);
    batch.forEach((data) => {
      const productRef = doc(db, "cosmetics", data.ProductId);
      batchWrite.set(productRef, data);
    });
    batchWrite
      .commit()
      .then(() => {
        console.log("Batch write complete.");
      })
      .catch((error) => {
        console.log("Batch write failed:", error);
      });
  });
};

// export const addToDoItem = async (currentItems, email, newItem) => {
//   await updateDoc(doc(db, "Profile", email), {
//     items: [...currentItems, newItem],
//   });
// };

export const createUserProfile = (
  email,
  name,
  dob,
  joinDate,
  exposedItemsList
) => {
  const userProfileRef = doc(db, "userProfiles", email); // Create reference to user profile document

  const userProfileData = {
    // Create object with user profile data
    Name: name,
    DOB: dob,
    JoinDate: joinDate,
    exposedItemsList: exposedItemsList,
  };

  setDoc(userProfileRef, userProfileData) // Set user profile document in Firestore
    .then(() => {
      console.log("User profile created successfully.");
    })
    .catch((error) => {
      console.log("Error creating user profile:", error);
    });
};

// export const deleteToDoItem = async (currentItems, email, deleteItem) => {
//   var newItems = currentItems;

//   const index = newItems.indexOf(deleteItem);

//   if (index > -1) {
//     newItems.splice(index, 1);
//   }

//   await updateDoc(doc(db, "Profile", email), {
//     items: [...newItems],
//   });
// };
