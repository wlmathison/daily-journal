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


fetch("http://localhost:8088/journalEntries") // Fetch from the API
    .then(results => results.json())  // Parse as JSON
    .then(entries => {
        renderJournalEntries(entries)
        // What should happen when we finally have the array?
    })