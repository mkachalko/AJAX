const select = document.createElement("select");
const option = document.createElement("option");
const div = document.createElement("div");

const getData = () => {
  return fetch("cars.json")
    .then((response) => response.json())
    .catch((error) => console.error(error.message));
};

const innerHtml = (prom) => {
  document.body.append(select);
  option.textContent = "Выберите авто";
  select.append(option);
  div.textContent = "Выберите авто";
  select.after(div);

  prom
    .then((data) => {
      data.cars.forEach((obj) => {
        const newOption = document.createElement("option");
        newOption.textContent = obj.brand;
        select.append(newOption);
      });
    })
    .catch((error) => console.log(error.message));
};

const divChange = (prom) => {
  if (select.value == "Выберите авто") {
    div.textContent = select.value;
  } else {
    prom
      .then((data) => {
        const obj = data.cars[select.selectedIndex - 1];
        div.innerHTML = `Авто ${obj.brand} ${obj.model} <br> Цена: ${obj.price} $`;
      })
      .catch((error) => console.log(error.message));
  }
};

try {
  if (!select) {
    throw new Error("Пропал селект!");
  }
  innerHtml(getData());
  select.addEventListener("change", () => {
    divChange(getData());
  });
} catch (error) {
  console.log(error.message);
}
