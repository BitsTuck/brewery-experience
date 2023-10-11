var brewName = JSON.parse(localStorage.getItem("Brewery")) || [];

for(var i = 0; i < brewName.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = brewName[i].brewery;
    document.querySelector("ol").append(liEl);
};