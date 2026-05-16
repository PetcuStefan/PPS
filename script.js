const locations = [
  {
    title: "Old Tower",
    x: 42,
    y: 61,
    image: "images/tower.jpg",
    description: "Ancient defensive tower."
  },

  {
    title: "Castle",
    x: 70,
    y: 30,
    image: "images/castle.jpg",
    description: "Main castle area."
  }
]

const mapContainer = document.getElementById("map-container")

const popup = document.getElementById("popup")
const popupTitle = document.getElementById("popup-title")
const popupImage = document.getElementById("popup-image")
const popupDescription = document.getElementById("popup-description")

const closePopup = document.getElementById("close-popup")

locations.forEach(location => {

  const marker = document.createElement("div")

  marker.classList.add("marker")

  marker.innerHTML = "📍"

  marker.style.left = `${location.x}%`
  marker.style.top = `${location.y}%`

  marker.addEventListener("click", () => {

    popupTitle.textContent = location.title

    popupImage.src = location.image

    popupDescription.textContent = location.description

    popup.classList.remove("hidden")
  })

  mapContainer.appendChild(marker)
})

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden")
})