const characterId = []
let image = ''

// clone character's cards
async function displayCharactersCards() {
  try {
    const response = await fetch('https://character-database.becode.xyz/characters')
    const character = await response.json()

    const cardTemplate = document.querySelector('#template')
    const target = document.querySelector('#target')

    character.forEach(({ name, shortDescription, image, description, id }) => {
      const cardClone = cardTemplate.cloneNode(true).content

      cardClone.querySelector('#name').innerHTML = name
      cardClone.querySelector('#short-description').innerHTML = shortDescription
      cardClone.querySelector('#image').src = `data:image/*;base64,${image}`
      cardClone.querySelector('#long-description').innerHTML = description

      target.appendChild(cardClone)

      characterId.push(id)
    })
  } catch (error) {
    console.error(error)
  }
}

displayCharactersCards().then(() => {
  changePinColor()
  randomRotation()
  openCharacterCard()
  createImage()
  createCharacter()
  editCharacter()
  deleteCharacter()
}).catch((error) => {
  console.error(error)
})

// open character card
function openCharacterCard() {
  const longDescriptionButton = document.getElementsByClassName('long-description-button')
  const cardName = document.getElementsByClassName('name-for-modal')
  const shortDescription = document.getElementsByClassName('short-for-modal')
  const longDescription = document.getElementsByClassName('long-for-modal')
  const cardImage = document.getElementsByClassName('image-for-modal')

  for (let i = 0; i < longDescriptionButton.length; i++) {
    longDescriptionButton[i].addEventListener('click', function () {
      const modalName = document.getElementById('name-modal')
      const modalShortDescription = document.getElementById('short-modal-description')
      const modalLongDescription = document.getElementById('long-modal-description')
      const modalImage = document.getElementById('modal-image')

      modalName.textContent = cardName[i].textContent
      modalShortDescription.textContent = shortDescription[i].textContent
      modalLongDescription.textContent = longDescription[i].textContent
      modalImage.src = cardImage[i].src
    })
  }
}

// create a character
async function createCharacter() {
  document.getElementById('create').addEventListener('click', async () => {
    try {
      document.getElementById('submit').addEventListener('click', async () => {
        const inputs = Array.from(document.getElementsByClassName('inputs'))
        const values = inputs.map(({ value }) => value.trim())

        if (values.some((value) => value === '')) {
          alert("there's an empty input!")
        } else {
          const [name, shortDescription, description] = values
          const response = await fetch('https://character-database.becode.xyz/characters', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name,
              shortDescription,
              description,
              image
            })
          })

          const createdCharacter = await response.json()
          console.log(createdCharacter)
          location.reload()
        }
      })
    } catch (error) {
      console.error(error)
    }
  })
}

// create image
async function createImage() {
  document.querySelector('#input-image').addEventListener('change', (element) => {
    const file = element.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      image = reader.result.replace('data:', '').replace(/^.+,/, '')
    }
    reader.readAsDataURL(file)
  })
}

// edit character
async function editCharacter() {
  const outerEditButton = document.getElementsByClassName('outer-edit')

  for (let i = 0; i < outerEditButton.length; i++) {
    outerEditButton[i].addEventListener('click', async () => {
      const id = characterId[i]
      try {
        const response = await fetch(`https://character-database.becode.xyz/characters/${id}`)
        const character = await response.json()

        document.getElementById('input-name').value = character.name
        document.getElementById('input-short-description').value = character.shortDescription
        document.getElementById('input-long-description').textContent = character.description
        image = character.image

        document.getElementById('submit').addEventListener('click', async () => {
          const inputs = Array.from(document.getElementsByClassName('inputs'))
          const values = inputs.map(({ value }) => value.trim())
          const [name, shortDescription, description] = values

          if (values.some((value) => value === '')) {
            alert("there's an empty input!")
          } else {
            const edit = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name,
                shortDescription,
                description,
                image
              })
            })
            const editedCharacter = await edit.json()
            console.log(editedCharacter)
            location.reload()
          }
        })
      } catch (error) {
        console.error(error)
      }
    })
  }
}

// delete a character
function deleteCharacter() {
  const deleteButton = document.getElementsByClassName('delete')

  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', async function () {
      if (confirm('Are you sure you want to delete this character?')) {
        const id = characterId[i]

        try {
          const response = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
            method: 'DELETE'
          })

          const deletedCharacter = await response.json()
          console.log(deletedCharacter)

          location.reload()
        } catch (error) {
          console.error(error)
        }
      } else {
        alert('This character has not been deleted')
      }
    })
  };
}

// change pin color randomly
function changePinColor() {
  const pins = Array.from(document.getElementsByClassName('fa-thumbtack'))
  const colors = ['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple', 'gray']
  pins.forEach(pin => pin.style.color = colors[Math.floor(Math.random() * colors.length)])
}

// change style of the cards
function randomRotation() {
  const cards = Array.from(document.getElementsByClassName('card'))
  const rotate = ['rotate(1deg)', 'rotate(-1deg)', 'rotate(0deg)', 'rotate(0deg)', 'rotate(0deg)']
  cards.forEach(card => card.style.transform = rotate[Math.floor(Math.random() * rotate.length)])
}
