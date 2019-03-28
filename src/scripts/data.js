const API = {
    // GET all journal entries from API
    getJournalEntries() {
        return fetch("http://localhost:8088/journalEntries")
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
    }
}


// Invoke the render function
// fetch("http://localhost:8088/journalEntries") // Fetch from the API
//     .then(results => results.json())  // Parse as JSON
//     .then(entries => {
//         renderJournalEntries(entries)
//         // What should happen when we finally have the array?