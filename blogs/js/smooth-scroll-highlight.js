var running = []
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var element = document.querySelector(this.getAttribute('href'));
    if (running.includes(element))
      return;
    running.push(element);
    var headerOffset = window.innerHeight / 5;
    var elementPosition = window.pageYOffset + element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    // Save current location in history before scrolling
    history.pushState({}, "", new URL(window.location));

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    var originalBackground = window.getComputedStyle(element).backgroundColor;

    element.style.transition = "background-color 1s";
    element.style.backgroundColor = "greenyellow";

    setTimeout(() => {  // wait for changing to highlighted background
      element.style.backgroundColor = originalBackground;
      setTimeout(() => { // wait for changing to original background
        const index = running.indexOf(element);
        if (index > -1) {
          running.splice(index, 1);
        }
      }, 1000);
    }, 1000);
  });

  anchor.addEventListener('mouseover', function (e) {
    e.preventDefault();
    var element = document.querySelector(this.getAttribute('href'));
    element.style.boxShadow = "0px 0px 0px 1px #555";
    element.style.transform = "scale(1.02, 1.02)";
    element.style.transition = "all 0.2s";
  });

  anchor.addEventListener('mouseout', function (e) {
    e.preventDefault();
    var element = document.querySelector(this.getAttribute('href'));
    element.style.boxShadow = "none";
    element.style.transform = "scale(1, 1)";
  });
});
