
function fetchGyms() {
    fetch('http://localhost:3000/gyms')
    .then(resp => resp.json())
    .then(json => renderGyms(json));
  }

  function renderGyms(json) {
    document.getElementsByClassName('col-md-4 col-lg-6 my-3 mx-auto')
    if(json.length){
      json.forEach(gym => {
        createGyms(gym)
      })} else {
        gym = json
        createGyms(gym)
      }
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
      menu.addEventListener('click', (event) =>{
        filterGyms();
      })
  }

  function filterGyms() {
    fetch('http://localhost:3000/gyms')
    .then(resp => resp.json())
    .then(json => filteredList(json));
  }
  
function filteredList(json){
  let row = document.getElementsByClassName("row height")[0]
  row.innerHTML = ""
  let select = document.querySelector('select')
    json.forEach(gym => {
      if(select.value == gym.city_name){
        renderGyms(gym)
      }
    })  
}

function createGyms(json){
  let gym = new Gym(json)
  gym.addGym()
  // let row = document.getElementsByClassName("row height")[0]
  // let col = document.createElement('div')
  // col.className = 'col-md-4 col-lg-6 my-3'
  //   let card = document.createElement('div')
  //   card.className = "card"
  //   let img = document.createElement('img')
  //   img.className = "card-img-top"
  //   img.src = `${gym.image}`
  //   let cardBody = document.createElement('div')
  //   cardBody.className = "card-body"
  //   let cardTitle = document.createElement('h5')
  //   cardTitle.className = "card-title text-capitalize"
  //   cardTitle.innerText = gym.name
  //   let website = document.createElement('a')
  //   website.className = "btn btn-outline-dark text-uppercase"
  //   website.innerText = "Website"
  //   website.href = gym.url
  //   cardBody.appendChild(cardTitle)
  //   cardBody.appendChild(website)
  //   card.appendChild(img)
  //   card.appendChild(cardBody)
  //   col.appendChild(card)
  //   row.appendChild(col)
}

document.addEventListener('DOMContentLoaded', (event) => {
  fetchMenu();
  fetchGyms();
})

class Gym {
  constructor({id:id , name: name, rating: rating, openinghours: openinghours, created_at: created_at, image: image, location_id: location_id, updated_at: updated_at, url: url, city_name: city_name}){
    this.name = name;
    this.image = image;
    this.url = url;
    this.city_name = city_name;
  }

  addGym(){
    let row = document.getElementsByClassName("row height")[0]
    let col = document.createElement('div')
    col.className = 'col-md-4 col-lg-6 my-3'
      let card = document.createElement('div')
      card.className = "card"
      let img = document.createElement('img')
      img.className = "card-img-top"
      img.src = `${this.image}`
      let cardBody = document.createElement('div')
      cardBody.className = "card-body"
      let cardTitle = document.createElement('h5')
      cardTitle.className = "card-title text-capitalize"
      cardTitle.innerText = this.name
      let website = document.createElement('a')
      website.className = "btn btn-outline-dark text-uppercase"
      website.innerText = "Website"
      website.href = this.url
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(website)
      card.appendChild(img)
      card.appendChild(cardBody)
      col.appendChild(card)
      row.appendChild(col)
  }
}


