function toggleReadMore() {
  const moreText = document.getElementById('more-text');
  const readMoreButton = document.getElementById('read-more-button');

  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'inline';
    readMoreButton.innerHTML = 'Read Less';
  } else {
    moreText.style.display = 'none';
    readMoreButton.innerHTML = 'Read More';
  }
}
