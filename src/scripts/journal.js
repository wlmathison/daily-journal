/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

const getEntriesThenRender = () => API.getJournalEntries().then(renderToDOM.renderJournalEntries);

const saveJournalEntry = () => {
    let newJournalEntry = createNewJournalEntry();
    let updateButton = document.getElementById("record-journal-entry");
    updateButton.textContent = "Record Journal Entry";
    if (newJournalEntry.id) {
        API.putJournalEntry(newJournalEntry, newJournalEntry.id).then(getEntriesThenRender).then(document.getElementById("entry-form").reset()).then(document.getElementById("journalID").value = "");
    } else if (!newJournalEntry.id) {
        if (newJournalEntry !== false) {
            API.postJournalEntries(newJournalEntry).then(getEntriesThenRender).then(document.getElementById("entry-form").reset());
        }
    }
};

getEntriesThenRender();

// factory function to create new journal entry object
const createNewJournalEntry = () => {
    let badWord = /shit|damn|fuck|ass|hell/i;
    let entryDate = document.querySelector("#journalDate").value;
    let entryConcept = document.querySelector("#conceptsCovered");
    let entryEntry = document.querySelector("#journalEntry");
    let entryMood = document.querySelector("#currentMood").value;
    let entryID = document.querySelector("#journalID").value;

    if (!entryConcept.checkValidity()) {
        return false;
    } else if (badWord.test(entryConcept.value)) {
        alert("Your input contains a curse word. Please change your concept name.")
        event.preventDefault();
        return false;
    } else if (!entryEntry.checkValidity()) {
        return false;
    } else if (badWord.test(entryEntry.value)) {
        alert("Your input contains a curse word. Please change your entry.")
        event.preventDefault();
        return false;
    } else if (entryDate === "") {
        return false;
    } else if (entryID === 0) {
        return {
            "date": entryDate,
            "concepts": entryConcept.value,
            "entry": entryEntry.value,
            "mood": entryMood
        }
    } else {
        return {
            "date": entryDate,
            "concepts": entryConcept.value,
            "entry": entryEntry.value,
            "mood": entryMood,
            "id": entryID
        }
    }
};

// Function to place entry to be edited into form
const journalEntryEditForm = (entryToEdit) => {
    let entryDate = document.querySelector("#journalDate");
    let entryConcept = document.querySelector("#conceptsCovered");
    let entryEntry = document.querySelector("#journalEntry");
    let entryMood = document.querySelector("#currentMood");
    let entryID = document.querySelector("#journalID");

    API.getJournalEntry(entryToEdit).then(result => {
        entryDate.value = result.date;
        entryConcept.value = result.concepts;
        entryEntry.value = result.entry;
        entryMood.value = result.mood;
        entryID.value = result.id;
    })
};

// creating journal entry save button
const recordJournalEntryButton = document.getElementById("record-journal-entry");
recordJournalEntryButton.addEventListener("click", saveJournalEntry);

// Adding event listener to each radio button, filtering results to match button value, and rendering matching entries to the DOM
const radioButtons = document.getElementsByName("moods");
radioButtons.forEach(radioButton => {
    radioButton.addEventListener("click", event => {
        let targetMood = event.target.value;
        API.getJournalEntries().then(allEntries => {
            if (targetMood === "Show All") {
                renderToDOM.renderJournalEntries(allEntries)
            } else {
                let matchingEntries = allEntries.filter(entry => entry.mood === targetMood)
                renderToDOM.renderJournalEntries(matchingEntries);
            }

        })
    })
});

// Function to search through all entries for input text
const handleSearch = () => {
    if (event.keyCode === 13) {
        event.preventDefault();
        let inputText = event.target.value.toString().toLowerCase();
        API.getJournalEntries().then(allEntries => {
            let matchingEntries = [];
            allEntries.forEach(entry => {
                for (const value of Object.values(entry)) {
                    if (value.toString().toLowerCase().includes(inputText)) {
                        matchingEntries.push(entry);
                        break;
                    }
                }
            })
            renderToDOM.renderJournalEntries(matchingEntries);
            searchFormInput.value = "";
        })
    }
};

// Creating event listener for search journal entries form
const searchFormInput = document.getElementById("search-input");
searchFormInput.addEventListener("keypress", handleSearch);