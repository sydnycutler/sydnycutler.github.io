try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }  
  function toggleMenu() {
    document
    .getElementsByClassName("navigation") [0]
    .classList.toggle("responsive");
  }
function toggleMenu() {
  var d = new Date();
    if (d.getDay() !== 5) {
          document.getElementsByClassName("banner");
        }        
    } 