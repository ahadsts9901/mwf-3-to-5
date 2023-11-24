
// firebase API keys from firebase

const firebaseConfig = {
    apiKey: "AIzaSyARjFLQ3Ws78CrqZfGnukLnPkJf6Fql6YI",
    authDomain: "mwf-3-to-5.firebaseapp.com",
    projectId: "mwf-3-to-5",
    storageBucket: "mwf-3-to-5.appspot.com",
    messagingSenderId: "230896245848",
    appId: "1:230896245848:web:0b20d7ec9853cbf4f2be2d",
    measurementId: "G-ZHP6K6N2Z9"
};

// initialize firebase

firebase.initializeApp(firebaseConfig);

// signup function

function signup(event) {

    event.preventDefault()

    let email = document.querySelector("#emailSignup").value
    let password = document.querySelector("#passwordSignup").value

    // from firebase

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            console.log("signup success full");
            window.location.href = "../index.html"

        })
        .catch((error) => {

            console.log("error : ", error);

        });

    event.target.reset()


}