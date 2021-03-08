let characterId = new Array();

// clone character's cards
async function displayCharactersCards() {
    try {
        const response = await fetch('https://character-database.becode.xyz/characters');
        const character = await response.json();

        const cardTemplate = document.querySelector('#template');
        const target = document.querySelector('#target');

        character.forEach(({ name, shortDescription, image, description, id }) => {
            const cardClone = cardTemplate.cloneNode(true).content;

            cardClone.querySelector('#name').innerHTML = name;
            cardClone.querySelector('#short-description').innerHTML = shortDescription;
            cardClone.querySelector('#image').src = `data:image/*;base64,${image}`;
            cardClone.querySelector('#long-description').innerHTML = description;

            target.appendChild(cardClone);

            characterId.push(id);
            return characterId;
        });
    } catch (error) {
        console.error(error);
    }
}

let newCharacterId = characterId;

export { displayCharactersCards, newCharacterId };