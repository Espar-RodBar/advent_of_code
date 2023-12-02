import { solution } from './day1.js'

const form = document.querySelector('.form')
const textArea = document.querySelector('textarea')

let rawData = undefined

form.addEventListener('submit', function (e) {
  e.preventDefault()
  rawData = textArea.value
  textArea.value = ''
  solver(rawData)
})

console.log()

function solver(data) {
  return solution(data)
}
