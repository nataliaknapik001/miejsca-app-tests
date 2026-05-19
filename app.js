function search() {
  const city = document.getElementById("city").value;
  const category = document.getElementById("category").value;

  // wynik
  document.getElementById("results").innerHTML =
    `<div class="marker">🍽 ${category} w ${city}</div>`;

  // historia
  const history = document.getElementById("history");

  const item = document.createElement("div");
  item.setAttribute("data-testid", "history-item");
  item.innerText = `${city} - ${category}`;

  history.prepend(item);
}