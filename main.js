//Functions----------------------------------------------------------------- */
//*Function to get the value of a cookie - Uses the user's last selected theme
function getCookie(name) {
  var cookieName = name + "=";
  var cookieArray = document.cookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}
//* Function to set a cookie with given name, value, and expiration days - Saves the user's last selected theme
function setCookie(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
//----------------------------------------------------------------------------//

//Dark Mode-------------------------------------------------------------------*/
//* Set dark mode by default
var isDarkMode = getCookie('darkMode') === '1'; // Retrieve the stored cookie value
//* Apply dark mode to the body
document.body.classList.toggle('dark_mode', isDarkMode);

//* Toggle dark mode (for specific elements in parenthesis below)
var elements = document.querySelectorAll('html, body, h1, .innerContainer, .text, .headerContainer, .outerContainer');
elements.forEach(function(element) {
  element.classList.toggle('dark_mode', isDarkMode);
});

//* Checks if user has clicked the button using an event listener
var toggleButton = document.getElementById('dark_mode');
toggleButton.addEventListener('click', function() {
  isDarkMode = !isDarkMode; //change the value of isDarkMode if clicked
  document.body.classList.toggle('dark_mode', isDarkMode); // Apply dark mode to the body

//* Toggle dark mode (for specific elements in parenthesis below)
elements.forEach(function(element) {
  element.classList.toggle('dark_mode', isDarkMode);
});

//* Update the darkMode cookie with the new value
setCookie('darkMode', isDarkMode ? '1' : '0', 365);
});

