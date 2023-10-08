const play = document.getElementById("play")
const next = document.getElementById("next")
const container = document.querySelector(".container")
let answer, score = 0
const question = ["l", "bang", "chikni", "dhindhora", "hosanna", "jag_ghumeya", "jeene_k_hai_4_din", "kaise_hua", "kalakar", "khali_bali", "jeena"]

let questionIndex = 0, songIndex = 0
const nextSong = () => {
    if(questionIndex == 11) {
        const heading = document.createElement("h2")
        heading.innerHTML = "ThankYou for playing! Your score is " + score
        container.replaceChild(heading, container.childNodes[1])
        next.style.display = "none"
        play.style.display = "none"
    }
    else {
        const div = document.createElement("div")
        div.classList.add("emoji-container")
        const img = document.createElement("img")
        img.src = `src/${question[questionIndex]}.jpg`
        img.style.width = "80vw"
        img.style.height = "50vh"
        const input = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("placeholder", "Enter song name here...")
        div.appendChild(img)
        div.appendChild(input)
        container.replaceChild(div, container.childNodes[1])
        next.style.zIndex = -2
        play.removeAttribute("onclick")
        input.addEventListener("input", (e) => {
            answer = e.target.value
            if(answer)
                play.setAttribute("onclick", "playSong()")
        })
    }
}
const playSong = () => {
    if(questionIndex == 0 && (answer.toLowerCase() == "l lag gaye" || answer.toLowerCase() == "l"))
        score += 10
    else if(questionIndex == 1 && answer.toLowerCase() == "bang bang")
        score += 10
    else if(questionIndex == 2 && answer.toLowerCase() == "chikni chameli")
        score += 10
    else if(questionIndex == 3 && (answer.toLowerCase() == "dhindhora" || answer.toLowerCase() == "dindhora" || answer.toLowerCase() == "dhindora"))
        score += 10
    else if(questionIndex == 4 && (answer.toLowerCase() == "hosana" || answer.toLowerCase() == "hosanna"))
        score += 10
    else if(questionIndex == 5 && (answer.toLowerCase() == "jag ghoomeya" || answer.toLowerCase() == "jag ghumeya"))
        score += 10
    else if(questionIndex == 6 && (answer.toLowerCase() == "jene ke hai 4 din" || answer.toLowerCase() == "jene ke hai char din" || answer.toLowerCase() == "jene kai char din" || answer.toLowerCase() == "jene kai hai 4 din" || answer.toLowerCase() == "jene ke he char din" || answer.toLowerCase() == "jene ke he 4 din"))
        score += 10
    else if(questionIndex == 7 && answer.toLowerCase() == "kaise hua")
        score += 10
    else if(questionIndex == 8 && answer.toLowerCase() == "desi kalakar")
        score += 10
    else if(questionIndex == 9 && (answer.toLowerCase() == "khali bali" || answer.toLowerCase() == "khalibali"))
        score += 10
    else if(questionIndex == 10 && (answer.toLowerCase() == "jina jina" || answer.toLowerCase() == "jeena jeena" || answer.toLowerCase() == "jena jena"))
        score += 10
    questionIndex++
    const video = document.createElement("video")
    video.src = `src/${question[songIndex++]}.mp4`
    video.setAttribute("controls", "true")
    video.setAttribute("autoplay", "true")
    video.setAttribute("width", "60vw")
    video.setAttribute("height", "30vh")
    container.replaceChild(video, container.childNodes[1])
    next.style.zIndex = 12
}