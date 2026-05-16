import izvor from "./pois/Izvor.js"

const locations = [izvor]

const mapContainer = document.getElementById("map-container")

const infoTitle = document.getElementById("info-title")
const infoImage = document.getElementById("info-image")
const infoDescription = document.getElementById("info-description")

/* ---------------------------------- */
/* CLICK COORDS (FOR EDITING) */
/* ---------------------------------- */

document.addEventListener("click", (e) => {

  const mapImage = document.getElementById("map-image")
  const rect = mapImage.getBoundingClientRect()

  const inside =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom

  if (!inside) return

  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100

  console.log(`x: ${x.toFixed(2)} | y: ${y.toFixed(2)}`)
})

/* ---------------------------------- */
/* CREATE MARKERS */
/* ---------------------------------- */

locations.forEach(location => {

  const marker = document.createElement("div")
  marker.classList.add("marker")
  marker.innerHTML = "📍"

  marker.style.left = `${location.x}%`
  marker.style.top = `${location.y}%`

  marker.addEventListener("click", (e) => {

    e.stopPropagation()

    infoTitle.textContent = location.title
    infoImage.src = location.image
    infoDescription.textContent = location.description
  })

  mapContainer.appendChild(marker)
})