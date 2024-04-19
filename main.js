// add class hidden when hovered

const links = document.querySelectorAll('.links li');

links.forEach(link => {
  link.addEventListener('mouseenter', function() {
    links.forEach(e => {
      let otherLink = e.querySelector('a');
      if (otherLink !== this.querySelector('a')) {
        otherLink.classList.remove('show');
        otherLink.classList.add('hidden');
      }
    });
  });

  // remove class hidden when not hovered

  link.addEventListener('mouseleave', function() {
    links.forEach(e => {
      let otherLink = e.querySelector('a');
      otherLink.classList.remove('hidden');
      otherLink.classList.add('show');
    });
  });
});