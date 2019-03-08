const journalEntries = [{
        date: "02/25/2019",
        concepts: "objects",
        entry: "blah blah blah",
        mood: "Happy"
    },
    {
        date: "02/26/2019",
        concepts: "functions",
        entry: "blah blah blah",
        mood: "Sad"
    },
    {
        date: "02/27/2019",
        concepts: "javascript",
        entry: "blah blah blah",
        mood: "Ok"
    }
]

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<h2>${journalEntry.concepts}</h2><p>${journalEntry.entry}</p><p>${journalEntry.date}</p>
    `
}
/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    const entryLogRef = document.querySelector(".entryLog")
    entryLogRef.innerHTML = ""
    for (i = 0; i < entries.length; i++) {
        entryLogRef.innerHTML += makeJournalEntryComponent(entries[i])
    }
}

// // Invoke the render function
renderJournalEntries(journalEntries)