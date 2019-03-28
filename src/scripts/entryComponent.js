const handleDelete = () => {
    let sectionToDelete = event.target.parentNode.id;
    API.deleteJournalEntry(sectionToDelete).then(API.getJournalEntries).then(renderToDOM.renderJournalEntries)
};

const createDeleteButton = () => {
    let button = document.createElement("button");
    button.textContent = "Delete Entry";
    button.addEventListener("click", handleDelete);
    return button;
};

const buildingJournal = Object.create(null, {
    // Function to build journal entry structure for posting to DOM
    makeJournalEntryComponent: {
        value: function (journalEntry) {
            let entrySection = document.createElement("section");
            entrySection.id = journalEntry.id;
            let entryH2 = document.createElement("h2");
            entryH2.textContent = journalEntry.concepts;
            entrySection.appendChild(entryH2);
            let entryP1 = document.createElement("p")
            entryP1.textContent = journalEntry.entry;
            entrySection.appendChild(entryP1);
            let entryP2 = document.createElement("p")
            entryP2.textContent = journalEntry.date;
            entrySection.appendChild(entryP2);
            entrySection.appendChild(createDeleteButton());
            let entryBreak = document.createElement("hr");
            entrySection.appendChild(entryBreak);
            return entrySection
        }
    }
})