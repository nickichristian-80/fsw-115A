var character = [
{
    name:"Luke Skywalker",
    height: 172,
    mass: 77,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "http://swapi.dev/api/planets/1/"
}
] 


var characterList = document.getElementById("character")


    var newName = document.createElement("li")
    newName.textContent = character[0]
    characterList.append(newName)
