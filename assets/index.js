const characterId = new Array();
const cardName = document.getElementsByClassName('name-for-modal');
const shortDescription = document.getElementsByClassName('short-for-modal');
const longDescription = document.getElementsByClassName('long-for-modal');
const cardImage = document.getElementsByClassName('image-for-modal');

import { createCharacter, createImage, deleteCharacter, displayCharactersCards, editCharacter, openCharacterCard } from "./modules/main-module.js";

let callAllFunctions = displayCharactersCards();

callAllFunctions.then(() => {
  openCharacterCard();
  createImage();
  createCharacter();
  editCharacter();
  deleteCharacter();
})

