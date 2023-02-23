window.addEventListener("load", () => {
  fetch("https://teretanice-default-rtdb.firebaseio.com/staff.json")
    .then((response) => response.json())
    .then((data) => {
      makeCards(data);
    })
    .catch((error) => console.error(error));
});

function makeCards(data) {
  let cardRow = document.querySelector("#card-row");
  data.map((cards) => {
    let cardTextDiv = document.createElement("cardTextDiv");
    cardTextDiv.classList.add(
      "card-text",
      "row",
      "mt-4",
      "justify-content-center"
    );

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    let h5 = document.createElement("h5");
    h5.classList.add("card-title", "text-center");
    h5.textContent = `${cards.name}`;

    let img = document.createElement("img");
    img.classList.add("card-img-top", "card-image");
    img.src = `${cards.image}`;

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mx-auto", "my-3");
    cardDiv.style.width = "18rem";

    let colDiv = document.createElement("div");
    colDiv.classList.add("col");

    cards.available_appointments.map((appointments) => {
      var textContentDiv = document.createElement("div");
      textContentDiv.classList.add("col-4", "text-center");
      textContentDiv.textContent = `${appointments}`;
      cardTextDiv.appendChild(textContentDiv);
    });
    cardBodyDiv.append(h5, cardTextDiv);
    cardDiv.append(img, cardBodyDiv);
    colDiv.appendChild(cardDiv);
    cardRow.appendChild(colDiv);
  });
}
