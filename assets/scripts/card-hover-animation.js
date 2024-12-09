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
  document.body.style.setProperty(
    '--spider-man-background-image', 
    `url("../images/pic-sm-bg-${this.id.slice(-2)}.jpg")`
  );
}

function handleMouseLeave() {
  this.classList.remove('card--hovered');
  document.body.id = '';
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards());