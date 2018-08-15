<!DOCTYPE html>
<lang ="en" dir ="ltr">
ead>
<meta charset ="utf-8">
<script scr ="htps://ajax.googleais.com/ajax/libs/jquery/3.3.1.  >
<script type ="text/javascript" src="./githubApi.js">

</script>
<title></title>
<head>
<body>
<div class=" ">
<button thpe ='button" name ="button" id ="get-reos">get donna's repos!</button>
<ul  id -"repo-results">
</ul>
</div>
</body>
<ul>



$(document).ready(function() {
//listen for the user to click the button
//when user clicks the button, send an AJAX request to get function//when e get the response back from the web request, we will listen
$("#get-repos").an("click", buttonClickCallback)
})

function buttonClickCallback() {
// when the user clicks the button, send an AJAX request to get-reposet 
$.ajax({
url. https://api.github.com/users/sonnacerio/repos",
data:"json",
success: successFunction,
error failureFunction
})
fetch("https://api.github.com/users/donnacerrio/repos")
.then (successFunction)
.then (anotherSuccessFunction)
.catch (failureFunction);
  
}


function successFunction(response) {
return response.json();

response.forEach(function(repo) {
$("ul#repo-results").append("<li>" + repo.name + "</li>")
})
}

function failureFunction(response) {
alert("Sorry, something went wrong")
  
}
















