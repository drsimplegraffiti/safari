// change navbar background color on scroll using class "top-navbar"

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('scrolled').style.backgroundColor = '#fff';
    // document.getElementById('scrolled').style.boxShadow = '0 0 1px rgba(0,0,0,0.1)';

  } else {
    document.getElementById('scrolled').style.backgroundColor = 'transparent';
    document.getElementById('scrolled').style.boxShadow = 'none';
  }
}
