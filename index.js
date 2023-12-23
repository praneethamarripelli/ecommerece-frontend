let women = document.getElementById("womens")
let h = document.getElementById('h')
let men = document.getElementById("mens")
let kid = document.getElementById("kids")

function menss() {
    women.style.display = "none"
    kid.style.display = "none"

    men.style.display = "flex"
    men.style.justifyContent = "center"

}

function womenss() {
    men.style.display = "none"
    kid.style.display = "none"
    women.style.display = "flex"


}

function kidss() {
    women.style.display = "none"
    men.style.display = "none"
    kid.style.display = "flex"
    kid.style.justifyContent = "center"

}