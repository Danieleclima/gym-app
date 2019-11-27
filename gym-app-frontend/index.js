
function fetchGyms() {
    fetch('http://localhost:3000/gyms')
    .then(resp => resp.json())
    .then(json => renderGyms(json));
  }

  function renderGyms(json) {
    let row = document.getElementsByClassName("row height")[0]
    document.getElementsByClassName('col-md-4 col-lg-6 my-3 mx-auto')
      json.forEach(gym => {
        let col = document.createElement('div')
        col.className = 'col-md-4 col-lg-6 my-3'
          let card = document.createElement('div')
          card.className = "card"
          let img = document.createElement('img')
          img.className = "card-img-top"
          img.src = `${gym.image}`
          let cardBody = document.createElement('div')
          cardBody.className = "card-body"
          let cardTitle = document.createElement('h5')
          cardTitle.className = "card-title text-capitalize"
          cardTitle.innerText = gym.name
          let website = document.createElement('a')
          website.className = "btn btn-outline-dark text-uppercase"
          website.innerText = "Website"
          website.href = gym.url
          cardBody.appendChild(cardTitle)
          cardBody.appendChild(website)
          card.appendChild(img)
          card.appendChild(cardBody)
          col.appendChild(card)
          row.appendChild(col)
      });
  }

  function fetchMenu(){
    fetch('http://localhost:3000/locations')
    .then(resp => resp.json())
    .then(json => renderMenu(json));
  }
  
  function renderMenu(json) {
    let menu = document.createElement('select')
    menu.className = "mt-4"
    let dropdown = document.getElementById('dropdown')
      json.forEach(location => {
          let option = document.createElement('option')
          option.value = location.city
          option.innerHTML = location.city
          menu.appendChild(option)
      });
      dropdown.appendChild(menu)
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    fetchGyms();
    fetchMenu();
    filteredList();
  })

  function filterGyms() {
    fetch('http://localhost:3000/gyms')
    .then(resp => resp.json())
    .then(json => filteredList(json));
  }
  
function filteredList(json){
  let select = document.querySelector('select')
  let row = document.getElementsByClassName("row height")[0]
  row.innerHTML = ""
  select.addEventListener('click', (event) =>{
    json.forEach(gym => {
      if(select.value == gym.city_name){
        renderGyms(gym)
      }
    })  
  })
}

// function listeners(){
//   let select = document.querySelector('select')
//   for (let item of options) {
//     item.addEventListener('click', (event) =>{
//       filterGyms();
//     })
// }
// }