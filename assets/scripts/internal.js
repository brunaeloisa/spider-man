function selectNavigatorButton(selectedButton) {
  const activeButtonElement = document.querySelector('.navigator__button--active');
  activeButtonElement.classList.remove('navigator__button--active');
  selectedButton.classList.add('navigator__button--active');
}

function addEventListenersToNavigator() {
  const navigatorButtons = document.getElementsByClassName('navigator__button');
  for (let button of navigatorButtons) {
    button.addEventListener('click', () => selectNavigatorButton(button));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox="gallery"]');
  addEventListenersToNavigator();
});
