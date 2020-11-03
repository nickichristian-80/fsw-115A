const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const jData = xhr.responseText;
        const data = JSON.parse(jData);
        displayData(data.objects);
    }
};

function displayData(arr) {
    for(i = 0; i < arr[0].pokemon.length; i++){
        const h1 = document.createElement('h1');
        h1.textContent = arr[0].pokemon[i].name;
        document.body.appendChild(h1);
    }
} 