import { database } from "./database.js";

export const displayHeading = () => {
    return `
    <div id='headingAndPromptContainer'>
        <h1>Macho Moods</h1>
        <h3>How are you feeling today?</h3>
    </div>
    `
}

export const displayContent = () => {
    let moodHtml = ''
    database.forEach(mood => {
            moodHtml += `
            <div class="mood">
                <div class="moodNameAndImageContainer">
                    <h3>${mood.name}</h3>
                    <img src="${mood.imageUrl}"/>
                </div>
    
                <div class="adviceAndQuotesContainer">
                    <p class='advice'>${mood.text}</p>
                    <ul class='quotes'>
                        <li>${mood.quotes[0]}</li>
                        <li>${mood.quotes[1]}</li>
                    <ul/>
                </div>
            </div>
            `
    })

    return moodHtml
}
export const displayColumn1 = () => {
    let moodHtml = ''
    database.forEach((mood, i) => {
        if (i <= 2) {
            moodHtml += `
            <div class="mood">
                <div class="moodNameAndImageContainer">
                    <h3>${mood.name}</h3>
                    <img src="${mood.imageUrl}"/>
                </div>
    
                <div class="adviceAndQuotesContainer">
                    <p class='advice'>${mood.text}</p>
                    <ul class='quotes'>
                        <li>${mood.quotes[0]}</li>
                        <li>${mood.quotes[1]}</li>
                    <ul/>
                </div>
            </div>
            `
        }
    })

    return moodHtml
}
export const displayColumn2 = () => {
    let moodHtml = ''
    database.forEach((mood, i) => {
        if (i >= 3 && i <= 5) {
            moodHtml += `
            <div class="mood">
                <div class="moodNameAndImageContainer">
                    <h3>${mood.name}</h3>
                    <img src="${mood.imageUrl}"/>
                </div>
    
                <div class="adviceAndQuotesContainer">
                    <p class='advice'>${mood.text}</p>
                    <ul class='quotes'>
                        <li>${mood.quotes[0]}</li>
                        <li>${mood.quotes[1]}</li>
                    <ul/>
                </div>
            </div>
            `
        }
    })

    return moodHtml
}
export const displayColumn3 = () => {
    let moodHtml = ''
    database.forEach((mood, i) => {
        if (i > 5) {
            moodHtml += `
            <div class="mood">
                <div class="moodNameAndImageContainer">
                    <h3>${mood.name}</h3>
                    <img src="${mood.imageUrl}"/>
                </div>
    
                <div class="adviceAndQuotesContainer">
                    <p class='advice'>${mood.text}</p>
                    <ul class='quotes'>
                        <li>${mood.quotes[0]}</li>
                        <li>${mood.quotes[1]}</li>
                    <ul/>
                </div>
            </div>
            `
        }
    })

    return moodHtml
}
