document.addEventListener('DOMContentLoaded', function() {
  var preloader = document.querySelector('.elementor-element-your-preloader-selector');
  var preloaderProgressBar = preloader.querySelector('.elementor-progress-wrapper');
  var loadingText = preloader.querySelector('.elementor-heading-title');
  var loadingPercentage = 0;
  var loadingSpeed = 50; // Change this value to manipulate the speed; lower is faster

  function updateLoadingText() {
    loadingText.innerHTML = 'Freshers Experience Loading ' + loadingPercentage + '%';
  }

  function increasePercentage() {
    if (loadingPercentage < 100) {
      loadingPercentage += 1;
      updateLoadingText();
      preloaderProgressBar.style.width = loadingPercentage + '%';
      setTimeout(increasePercentage, loadingSpeed);
    } else {
      preloader.style.display = 'none';
    }
  }

  increasePercentage();
});
