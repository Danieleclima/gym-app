
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
  }

  function createDropdown(json){

  }

  document.addEventListener('DOMContentLoaded', (event) => {
    fetchGyms();
  })
  
