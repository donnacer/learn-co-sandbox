$( document ).ready(function() {
    getJokeListener();
});

function getJokeListener() {
	$("#joke-button").on("click", bringFortheJokes)
}

const bringFortheJokes= () => {
	let headers = new Headers({'Accept': 'application/json'})
	let request = new Request('https://icanhazdadjoke.com/', {headers: headers});
	fetch(request)
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(jokeJson) {
	    switchJoke(jokeJson)
	  });
}

const switchJoke = (jokeJson) => {
	$("#joke p").html(jokeJson.joke)
}


		
