const handleDelete = () => {
    let sectionToDelete = event.target.parentNode.id.split("--")[1];
    API.deleteJournalEntry(sectionToDelete).then(API.getJournalEntries).then(renderToDOM.renderJournalEntries)
};

const handleEdit = () => {
    let sectionToEdit = event.target.parentNode.id.split("--")[1];
    const entryLogRef = document.querySelector(".entryLog")
    entryLogRef.textContent = "";
    let updateButton = document.getElementById("record-journal-entry");
    updateButton.textContent = "Update Journal Entry";
    journalEntryEditForm(sectionToEdit);
    // journalEntryEditForm(sectionToEdit);
    // API.putJournalEntry(sectionToEdit).then(API.getJournalEntries).then(renderToDOM.renderJournalEntries)
};

const createDeleteButton = () => {
    let button = document.createElement("button");
    button.textContent = "Delete Entry";
    button.addEventListener("click", handleDelete);
    return button;
};

const createEditButton = (entry) => {
    let button = document.createElement("button");
    button.textContent = "Edit Entry";
    button.id = entry;
    button.addEventListener("click", handleEdit);
    return button;
};

const buildingJournal = Object.create(null, {
    // Function to build journal entry structure for posting to DOM
    makeJournalEntryComponent: {
        value: function (journalEntry) {
            let entrySection = document.createElement("section");
            entrySection.id = `section--${journalEntry.id}`;
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
            entrySection.appendChild(createEditButton(`edit-button--${journalEntry.id}`));
            let entryBreak = document.createElement("hr");
            entrySection.appendChild(entryBreak);
            return entrySection
        }
    }
});