import { displayCharactersCards } from "./modules/display-characters-cards.js";
import { openCharacterCard } from "./modules/open-character-card.js";
import { createImage } from "./modules/create-image.js";
import { createCharacter } from "./modules/create-character.js";
import { editCharacter } from "./modules/edit-character.js";
import { deleteCharacter } from "./modules/delete-character.js";

displayCharactersCards().then(() => {
  openCharacterCard();
  createImage();
  createCharacter();
  editCharacter();
  deleteCharacter();
}).catch((error) => {
  console.error(error);
})

