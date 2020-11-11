const button1 = document.createElement("BUTTON");
button1.innerHTML = "CLICK ME";
button1.style.fontSize = "25px";
document.body.appendChild(button1);

button1.addEventListener("click", function() {
    
    axios.get("https://officeapi.dev/api/quotes")
    .then(response => {
    for (let i = 0; i < response.data.results.length; i++) {
    const office = document.createElement("h1")
    office.textContent = response.data.results[i].name
    const randm = document.createElement("img")
    randm.src = response.data.results[i].image
    office.style.color = "lime"
    document.body.appendChild(office)
    document.body.appendChild(randm)
    }
})
.catch(error => console.log(error))
});