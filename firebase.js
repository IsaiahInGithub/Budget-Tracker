import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAYiqfOD7QUAODkdCs4vNdW3igXDkmt2J0",
    authDomain: "budget-88689.firebaseapp.com",
    projectId: "budget-88689",
    storageBucket: "budget-88689.appspot.com",
    messagingSenderId: "140860831514",
    appId: "1:140860831514:web:428b9b9bc160f95bd79ea3",
    measurementId: "G-ZYQW1B54N7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.querySelector('.read').onclick = function () {   
setDoc(doc(db, `New Table Row`, 
`HTML`), {
tables: document.querySelector('table').innerHTML,
// income: document.querySelector('.valueOne').innerHTML,
// expense: document.querySelector('.valueTwo').innerHTML,
// profitable: document.querySelector('.profitable').innerHTML,      
});
};

onSnapshot(doc(db, 'New Table Row', 'HTML'), (doc) => {
document.querySelector('table').innerHTML = doc.data().tables;
// document.querySelector('.valueOne').innerHTML = doc.data().income;
// document.querySelector('.valueTwo').innerHTML = doc.data().expense;
// document.querySelector('.profitable').innerHTML = doc.data().profitable;
});
