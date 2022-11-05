import { db } from ".";
import { collection, getDocs } from "firebase/firestore";

const alumniRef = collection(db, "alumni");
getDocs(alumniRef).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
