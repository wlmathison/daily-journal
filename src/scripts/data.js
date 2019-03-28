const API = {
    // GET all journal entries from API
    getJournalEntries() {
        return fetch("http://localhost:8088/journalEntries")
            .then(response => response.json())
    },
    // GET specific journal entry from API
    getJournalEntry(entryID) {
        return fetch(`http://localhost:8088/journalEntries/${entryID}`)
            .then(response => response.json())
    },
    // POST method to add entry to API
    postJournalEntries(newEntry) {
        return fetch("http://localhost:8088/journalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    },
    // DELETE method to delete entry from API
    deleteJournalEntry(entry) {
        return fetch(`http://localhost:8088/journalEntries/${entry}`, {
            method: "DELETE"
        })
    },
    // PUT method to edit entry in API
    putJournalEntry(newEntry, entryID) {
        return fetch(`http://localhost:8088/journalEntries/${entryID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    }
};