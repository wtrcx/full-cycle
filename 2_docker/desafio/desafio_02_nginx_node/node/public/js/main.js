(async () => {

  const { data } = await axios.get("/api/peoples")

  const table = document.getElementById("table")

  Array.prototype.forEach.call(data, (people) => {

    const row = document.createElement("tr")
    const id = document.createElement("td")
    const name = document.createElement("td")
    const birthDate = document.createElement("td")

    id.innerHTML = "000".concat(people.id).slice(-3)
    name.innerHTML = String(people.name).toUpperCase()
    birthDate.innerHTML = new Date(people.birthDate).toLocaleDateString()

    row.appendChild(id)
    row.appendChild(name)
    row.appendChild(birthDate)

    table.appendChild(row)

  })

})()