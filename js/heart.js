const heartButton = document.getElementById('heartButton');
const heartIcon = document.getElementById('heartIcon');
const likeCount = document.getElementById('likeCount');
let likes = 0;
let isLiked = false;

heartButton.addEventListener('click', function() {
  if (!isLiked) {
    likes++;
    likeCount.textContent = likes;
    heartIcon.classList.add('active');
    isLiked = true;
  } else {
    likes--;
    likeCount.textContent = likes;
    heartIcon.classList.remove('active');
    isLiked = false;
  }
});

