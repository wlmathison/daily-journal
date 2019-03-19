/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/
// const renderJournalEntries = (entries) => {
//     const entryLogRef = document.querySelector(".entryLog")
//     entryLogRef.innerHTML = ""
//     for (i = 0; i < entries.length; i++) {
//         entryLogRef.innerHTML += makeJournalEntryComponent(entries[i])
//     }
// }

const renderToDOM = Object.create(null, {
    renderJournalEntries: {
        value: function (entries) {
            const entryLogRef = document.querySelector(".entryLog")
            entryLogRef.innerHTML = ""
            for (i = 0; i < entries.length; i++) {
                entryLogRef.innerHTML += buildingJournal.makeJournalEntryComponent(entries[i])
            }
        }
    }
})