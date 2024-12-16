function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('card');
  for (let card of cardElements) {
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

function handleMouseEnter() {
  this.classList.add('card--hovered');
  document.body.id = `${this.id}--hovered`;
  // muda imagem de fundo de acordo com o card selecionado
  document.body.style.setProperty(
    '--spider-man-background-image', 
    `url("../images/pic-sm-bg-${this.id.slice(-2)}.jpg")`
  );
}

function handleMouseLeave() {
  this.classList.remove('card--hovered');
  document.body.id = '';
}

function addEventListenersToController() {
  const controllerButtons = document.getElementsByClassName('controller__button');
  for (let button of controllerButtons) {
    button.addEventListener('click', () => selectCarouselItem(button));
  }
}

function selectCarouselItem(selectedItem) {
  const selectedItemId = Number(selectedItem.id);
  const carousel = document.querySelector('.cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  // gira no sentido anti-horário
  const rotateYDeg = -120 * (selectedItemId - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.controller__button--active');
  activeButtonElement.classList.remove('controller__button--active');
  selectedItem.classList.add('controller__button--active');
}

document.addEventListener('DOMContentLoaded', () => {
  addEventListenersToCards();
  addEventListenersToController();
});