function generatePreview() {
  var video = document.getElementById('original-video'),
      canvas1 = document.getElementById('preview-medium-canvas'),
      context1 = canvas1.getContext('2d'),
      canvas2 = document.getElementById('preview-small-canvas'),
      context2 = canvas2.getContext('2d');

  canvas1.width = 320;
  canvas1.heigth = 180;
  canvas2.width = 160;
  canvas2.height = 90;

  video.addEventListener('play', function() {
    drawVideo(this, context1, context2);
  }, false);

  video.play();
}

function drawVideo(video, canvas1, canvas2) {
  if (video.paused || video.ended) return false;

  // object.drawImage(source, x, y, width, height);
  canvas1.drawImage(video, 0, 0, 320, 180);
  canvas2.drawImage(video, 0, 0, 160, 90);

  // reload canvas (1000ms / 40frame = 25ms)
  setTimeout(drawVideo, 25, video, canvas1, canvas2);
}

var generate_button = document.getElementById('generate-button');
generate_button.addEventListener('click', function() {
  generatePreview();
});
