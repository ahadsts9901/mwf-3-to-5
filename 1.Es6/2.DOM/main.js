function makeTodo(event) {

    event.preventDefault()

    let container = document.querySelector("#container")

    let input = document.querySelector("#input").value

    let todo = document.createElement("div")
    todo.className = "todo"

    let content = document.createElement("p")
    content.innerText = input
    todo.appendChild(content)

    let del = document.createElement("button")
    del.innerText = "delete"
    todo.appendChild(del)

    del.addEventListener("click", function (event) {
        event.target.parentNode.remove()
    })

    let edit = document.createElement("button")
    edit.innerText = "edit"
    todo.appendChild(edit)

    edit.addEventListener("click", function (event) {

        let toEditElement = event.target.parentNode.firstElementChild

        let editedText = prompt("Edit Text", toEditElement.textContent)

        toEditElement.innerText = editedText

    })

    container.appendChild(todo)

    event.target.reset()

}