// change navbar background color on scroll using class "top-navbar"

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('scrolled').style.backgroundColor = '#fff';
    document.getElementById('scrolled').style.boxShadow =
      '0 0 10px rgba(0,0,0,0.1)';
    // handle font awesome icon color
    document.getElementsByClassName('fa-regular').style.color = '#000';
  } else {
    document.getElementById('scrolled').style.backgroundColor = 'transparent';
    document.getElementById('scrolled').style.boxShadow = 'none';
    // handle font awesome icon color
    document.getElementsByClassName('fa-regular').style.color = 'green';
  }
}
