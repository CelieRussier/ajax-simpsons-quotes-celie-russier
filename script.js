// This function loads pokemon data from the Pokemon API
function fetchSimpsonsQuotesJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data[0]; // response.data instead of response.json() with fetch
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons);
  
        // Build a block of HTML
        const simpsonsHtml = `
          <p><strong>${simpsons.quote}</strong></p>
          <img src="${simpsons.image}" />
        `;
        document.querySelector('#simpsons').innerHTML = simpsonsHtml;
      });
  }
  
  fetchSimpsonsQuotesJSON();