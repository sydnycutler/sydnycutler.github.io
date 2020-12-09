function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
try {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }
  function showhide() {
    var d = document.getElementById('banner');
    if (d.style.display == 'none') {
      d.style.display = "block";
    } else {
      d.style.display = 'none';
    }
  }