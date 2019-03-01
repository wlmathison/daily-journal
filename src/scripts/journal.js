/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

// Oops...getting ahead of myself
// const journalDateInput = document.getElementById("journalDate");
// const conceptsCoveredInput = document.getElementById("conceptsCovered");
// const journalEntryInput = document.getElementById("journalEntry");
// const currentMoodInput = document.getElementById("currentMood");
// const allJournalEntries = [];

// const objectsJournalEntry = {
//     date: journalDateInput,
//     concepts: conceptsCoveredInput,
//     entry:journalEntryInput,
//     mood: currentMoodInput
// }

// console.log(objectsJournalEntry)

const allJournalEntries = [];
console.log(allJournalEntries)

const objectsJournalEntry = {
    date: "02/25/2019",
    concepts: "objects",
    entry: "blah blah blah",
    mood: "Happy"
}
console.log(objectsJournalEntry)

allJournalEntries.push(objectsJournalEntry)
console.log(allJournalEntries)

const functionsJournalEntry = {
    date: "02/26/2019",
    concepts: "functions",
    entry: "blah blah blah",
    mood: "Sad"
}

const javascriptJournalEntry = {
    date: "02/27/2019",
    concepts: "javascripts",
    entry: "blah blah blah",
    mood: "Ok"
}

allJournalEntries.push(functionsJournalEntry)
allJournalEntries.push(javascriptJournalEntry)
console.log(allJournalEntries)