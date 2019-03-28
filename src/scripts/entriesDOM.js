const renderToDOM = Object.create(null, {
    // Function to render all journal entries to DOM
    renderJournalEntries: {
        value: function (entries) {
            const entryLogRef = document.querySelector(".entryLog")
            entryLogRef.textContent = "";
            entries.forEach(entry => {
                entryLogRef.appendChild(buildingJournal.makeJournalEntryComponent(entry))
            })
        }
    }
});