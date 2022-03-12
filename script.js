let container = document.querySelector("#content");
fetch("https://wizard-world-api.herokuapp.com/Spells")
  .then((res) => {
    return res.json();
  })
  .then((spells) => {
    spells.forEach((spell) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      container.appendChild(card);
      let title = document.createElement("h3");
      title.textContent = spell.name;
      card.appendChild(title);
      let details = document.createElement("p");
      let incantation = document.createElement("b");
      incantation.textContent = "Incantation:";
      details.appendChild(incantation);
      details.append(spell.incantation);
      details.appendChild(document.createElement("br"));
      let effect = document.createElement("b");
      effect.textContent = "Effect:";
      details.appendChild(effect);
      details.append(spell.effect);
      details.appendChild(document.createElement("br"));
      let type = document.createElement("b");
      type.textContent = "type:";
      details.appendChild(type);
      details.append(spell.type);
      details.appendChild(document.createElement("br"));
      let light = document.createElement("b");
      light.textContent = "light:";
      details.appendChild(light);
      details.append(spell.light);

      card.appendChild(details);
    });
  })
  .catch((error) => console.log(error));
