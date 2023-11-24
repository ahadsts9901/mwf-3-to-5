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
var db = firebase.firestore();


function createPost(event) {

    event.preventDefault()
    let title = document.querySelector("#title").value
    let text = document.querySelector("#text").value

    // Add a new document with a generated id.
    db.collection("posts").add({
        title: title,
        text: text
    })
        .then((docRef) => {
            console.log("document added");
            window.location.reload()
        })
        .catch((error) => {
            console.error(error);
        });


}

function readData() {

    var container = document.querySelector(".result")
    container.innerHTML = ""

    db.collection("posts")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                let data = doc.data()

                let post = document.createElement("div")
                post.className += "post"

                let title = document.createElement("h2")
                title.innerText = data.title
                post.appendChild(title)

                let text = document.createElement("p")
                text.innerText = data.text
                post.appendChild(text)

                let buttonCont = document.createElement("div")

                let del = document.createElement("button")
                del.innerText = "delete"
                del.addEventListener("click", function () {

                    db.collection("posts").doc(doc.id).delete().then(() => {

                        console.log("Document successfully deleted!");

                        window.location.reload()

                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });

                })
                buttonCont.appendChild(del)

                let edit = document.createElement("button")
                edit.innerText = "edit"
                edit.addEventListener("click", function (event) {

                    let newTitle = prompt("edit title", data.title)
                    let newText = prompt("edit text", data.text)

                    // from firebase

                    return db.collection("posts").doc(doc.id).update({
                        title: newTitle,
                        text: newText
                    })
                        .then(() => {
                            console.log("Document successfully updated!");
                            window.location.reload()
                        })
                        .catch((error) => {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });

                })

                // ==================================================

                buttonCont.appendChild(edit)

                post.appendChild(buttonCont)
                container.appendChild(post)

            });
        })
        .catch((error) => {
            console.error(error);
        });

}

window.addEventListener("load", function () {
    readData()
})