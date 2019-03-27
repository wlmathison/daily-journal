/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

const getEntriesThenRender = () => API.getJournalEntries().then(renderToDOM.renderJournalEntries);
const saveJournalEntry = () => {
    let newJournalEntry = createNewJournalEntry();
    if (newJournalEntry !== false) {
        API.postJournalEntries(newJournalEntry).then(getEntriesThenRender);
    }
}
getEntriesThenRender();

// factory function to create new journal entry object
const createNewJournalEntry = () => {
    let badWord = /shit|damn|fuck|ass|hell/i;
    let entryDate = document.querySelector("#journalDate").value;
    let entryConcept = document.querySelector("#conceptsCovered").value;
    let entryEntry = document.querySelector("#journalEntry").value;
    let entryMood = document.querySelector("#currentMood").value;
    if (badWord.test(entryConcept)) {
        alert("Your input contains a curse word. Please change your concept name.")
        return false;
    } else if (badWord.test(entryEntry)) {
        alert("Your input contains a curse word. Please chage your entry.")
        return false;
    } else
        return {
            "date": entryDate,
            "concepts": entryConcept,
            "entry": entryEntry,
            "mood": entryMood
        }
}

// creating journal entry save button
const recordJournalEntryButton = document.getElementById("record-journal-entry");
recordJournalEntryButton.addEventListener("click", saveJournalEntry);