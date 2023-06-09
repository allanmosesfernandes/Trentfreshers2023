document.addEventListener('DOMContentLoaded', function() {

  var preloader = document.querySelector('.elementor-13944');
  var preloaderProgressBar = document.querySelector('.elementor-progress-bar');
//   var loadingText = preloader.querySelector('.elementor-heading-title');
  var loadingPercentage = 0;
  var loadingSpeed = 50; // Change this value to manipulate the speed; lower is faster

//   function updateLoadingText() {
//     loadingText.innerHTML = 'Freshers Experience Loading ' + loadingPercentage + '%';
//   }

  function increasePercentage() {
    if (loadingPercentage < 100) {
      loadingPercentage += 1;
      preloaderProgressBar.style.width = loadingPercentage + '%';
      setTimeout(increasePercentage, loadingSpeed);
    } else {
      preloader.style.display = 'none';
    }
  }
  increasePercentage();
});

