
function fetchGyms() {
    fetch('http://localhost:3000/gyms')
    .then(resp => resp.json())
    .then(json => renderGyms(json));
  }

  function renderGyms(json) {
    let mainDiv = document.createElement('div')
      json.forEach(gym => {
          let secondaryDiv = document.createElement('div')
          let h2 = document.createElement('h2')
          h2.innerText = `${gym.name}`
          secondaryDiv.appendChild(h2)
          mainDiv.appendChild(secondaryDiv)
      });
      document.body.appendChild(mainDiv)
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
  
