const image = ''

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

export { createCharacter }
