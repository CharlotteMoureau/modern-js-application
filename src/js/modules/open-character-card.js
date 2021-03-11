// open character card
function openCharacterCard() {
    const longDescriptionButton = document.getElementsByClassName('long-description-button');
    const cardName = document.getElementsByClassName('name-for-modal');
    const shortDescription = document.getElementsByClassName('short-for-modal');
    const longDescription = document.getElementsByClassName('long-for-modal');
    const cardImage = document.getElementsByClassName('image-for-modal');

    for (let i = 0; i < longDescriptionButton.length; i++) {
        longDescriptionButton[i].addEventListener('click', function () {

            let modalName = document.getElementById('name-modal');
            let modalShortDescription = document.getElementById('short-modal-description');
            let modalLongDescription = document.getElementById('long-modal-description');
            let modalImage = document.getElementById('modal-image');

            modalName.textContent = cardName[i].textContent;
            modalShortDescription.textContent = shortDescription[i].textContent;
            modalLongDescription.textContent = longDescription[i].textContent;
            modalImage.src = cardImage[i].src;
        });
    }
}

export { openCharacterCard };