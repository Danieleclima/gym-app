
function fetchGyms() {
    fetch('http://localhost:3000/gyms')
    .then(resp => resp.json())
    .then(json => renderGyms(json));
  }

  function renderGyms(json) {
    
      json.forEach(gym => {
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
          let cardText = document.createElement('p')
          cardText.className = "card-text"
          cardText.innerText = "Lorem20"
          // cardLink.className = "justify-content-right"
          // cardLink.href = gym.url
          cardBody.appendChild(cardTitle)
          cardBody.appendChild(cardLink)
          card.appendChild(img)
          card.appendChild(cardBody)
          let col = document.getElementsByClassName('col-md-4 col-lg-6 my-3')
          col[0].appendChild(card)
      });
  }

  function fetchMenu(){
    fetch('http://localhost:3000/locations')
    .then(resp => resp.json())
    .then(json => renderMenu(json));
  }
  
  function renderMenu(json) {
    let menu = document.createElement('select')
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
  })
  
