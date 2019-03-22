const buildingJournal = Object.create(null, {
    // Function to build journal entry structure for posting to DOM
    makeJournalEntryComponent: {
        value: function (journalEntry) {
            return `<h2>${journalEntry.concepts}</h2><p>${journalEntry.entry}</p><p>${journalEntry.date}</p><hr>`
        }
    }
})