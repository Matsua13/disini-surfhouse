document.addEventListener('DOMContentLoaded', function() {
    var galleryTrack = document.querySelector('.gallery-track');

    galleryTrack.addEventListener('mouseover', function() {
      galleryTrack.style.animationPlayState = 'paused';
    });

    galleryTrack.addEventListener('mouseout', function() {
      galleryTrack.style.animationPlayState = 'running';
    });

    galleryTrack.addEventListener('mousemove', function(e) {
      var x = e.clientX - galleryTrack.offsetLeft;
      var scrollAmount = (x / galleryTrack.offsetWidth) * (galleryTrack.scrollWidth - galleryTrack.offsetWidth);
      galleryTrack.scrollLeft = scrollAmount;
    });
  });