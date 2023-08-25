$(document).ready(function () {
  let isDragging = false;
  let offsetX, offsetY;

  $(".window").mousedown(function (e) {
    if ($(e.target).hasClass("window-title")) {
      isDragging = true;
      offsetX = e.clientX - $(this).position().left - 420; // Adjust the value as needed
      offsetY = e.clientY - $(this).position().top - $(this).scrollTop() - 340; // Adjust the value as needed
    }
  });

  $(document).mousemove(function (e) {
    if (isDragging) {
      $(".window.active").css({
        left: e.clientX - offsetX,
        top: e.clientY - offsetY,
      });
    }
  });

  $(document).mouseup(function () {
    isDragging = false;
  });


  $("#aboutBtn").click(function () {
    $("#aboutMeWindow").toggleClass("active");
  });

  $("#contactBtn").click(function () {
    $("#contactMeWindow").toggleClass("active");
  });

  $("#neofetchBtn").click(function () {
    $("#neofetchWindow").toggleClass("active");
  });

  $(".close-btn").click(function () {
    $(this).closest(".window").removeClass("active");
  });

  // Manually adjust left offset
  $("#applyOffset").click(function () {
    const offsetValue = parseFloat($("#leftOffset").val()) || 20;

    $(".window.active").css({
      left: `calc(50% + ${offsetValue}px)`,
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const audioPlayer = document.getElementById("audioPlayer");

  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.textContent = "Easteregg Off";
    } else {
      audioPlayer.pause();
      playButton.textContent = "Easteregg On";
    }
  });
});
