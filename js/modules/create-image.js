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

export { createImage }
