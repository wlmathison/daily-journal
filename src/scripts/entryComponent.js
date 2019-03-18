const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<h2>${journalEntry.concepts}</h2><p>${journalEntry.entry}</p><p>${journalEntry.date}</p>
    `
}