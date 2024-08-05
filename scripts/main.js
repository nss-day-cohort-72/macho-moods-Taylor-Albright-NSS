import { displayHeading } from "./moods.js";
import { displayContent } from "./moods.js";
// import { displayColumn1 } from "./moods.js";
// import { displayColumn2 } from "./moods.js";
// import { displayColumn3 } from "./moods.js";

let heading = displayHeading()
let content = displayContent()
// let column1 = displayColumn1()
// let column2 = displayColumn2()
// let column3 = displayColumn3()

const container = document.getElementById('container')
const moodContainer = document.getElementById('moodContainer')
// const column1HTML = document.getElementById('column1')
// const column2HTML = document.getElementById('column2')
// const column3HTML = document.getElementById('column3')

container.innerHTML = `${heading}`
moodContainer.innerHTML = `${content}`
// column1.innerHTML = `${column1HTML}`
// column2.innerHTML = `${column2HTML}`
// column3.innerHTML = `${column3HTML}`
