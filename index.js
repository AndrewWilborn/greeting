function displayGreeting(e){
    e.preventDefault()
    const firstN = e.target.firstName.value
    const lastN  = e.target.lastName.value
    document.getElementById("display").innerText = "Hello " + firstN + " " + lastN + "!"
}

document.getElementById("nameFormID").addEventListener("submit", displayGreeting)