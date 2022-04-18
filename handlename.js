const fname = document.querySelector('#fname')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const mostRecentScore = document.querySelector('#mostRecentScore')
const pontos = document.querySelector('points')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

points.innerText = mostRecentScore

fname.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !fname.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: fname.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')

}
