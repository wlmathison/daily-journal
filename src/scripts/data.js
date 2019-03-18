const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/journalEntries")
            .then(response => response.json())
            }
    }


// Invoke the render function
// fetch("http://localhost:8088/journalEntries") // Fetch from the API
//     .then(results => results.json())  // Parse as JSON
//     .then(entries => {
//         renderJournalEntries(entries)
//         // What should happen when we finally have the array?
    // })