import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseConfig = {
apiKey: "AIzaSyDhFv2NYy9kboVmAUKZ5aizlhEA-HGRGKM",
authDomain: "budget-tracker-66929.firebaseapp.com",
projectId: "budget-tracker-66929",
storageBucket: "budget-tracker-66929.appspot.com",
messagingSenderId: "112765358128",
appId: "1:112765358128:web:6568b13a0b81ec36da9df5",
measurementId: "G-MNS15VVXY7"
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
