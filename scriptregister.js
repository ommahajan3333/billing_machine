// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPBJrGc0fA2uww1Kbe3C08dJvyPUTRPHg",
  authDomain: "billing-machine-4cce0.firebaseapp.com",
  projectId: "billing-machine-4cce0",
  storageBucket: "billing-machine-4cce0.appspot.com",
  messagingSenderId: "574338524352",
  appId: "1:574338524352:web:41551e274bd47381f13925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('submit1').addEventListener('click', function(event){
    event.preventDefault();
    

    const email = document.getElementById('signupEmail').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Account created successfully!");
            window.location.href = "idx.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
