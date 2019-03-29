// Function to create a radio button for mood
const createRadioButton = (mood) => {
    let button = document.createElement("input");
    button.type = "radio";
    button.name = "moods";
    button.value = `${mood}`;
    radioFrag.appendChild(button)
    let label = document.createElement("label");
    label.textContent = `${mood}`;
    radioFrag.appendChild(label);
}

const divContainer = document.getElementById("search-form-container");

const moodSearchForm = document.createElement("form");
const moodSearchFieldset = document.createElement("fieldset");
let moodSearchLegend = document.createElement("legend");
let moodLegendText = document.createTextNode("Filter Journal Entries by Mood");
moodSearchLegend.appendChild(moodLegendText);
moodSearchFieldset.appendChild(moodSearchLegend);
const radioFrag = document.createDocumentFragment();
createRadioButton("Sad");
createRadioButton("Happy");
createRadioButton("Ok");
createRadioButton("Show All");
moodSearchFieldset.appendChild(radioFrag);
moodSearchForm.appendChild(moodSearchFieldset);
divContainer.appendChild(moodSearchForm);

const searchInputForm = document.createElement("form");
const searchInputFieldset = document.createElement("fieldset");
let searchInputLegend = document.createElement("legend");
let searchLegendText = document.createTextNode("Search Journal Entries");
searchInputLegend.appendChild(searchLegendText);
searchInputFieldset.appendChild(searchInputLegend);
let searchInput = document.createElement("input");
searchInput.id = "search-input";
searchInput.placeholder = "Enter search term";
searchInputFieldset.appendChild(searchInput);
searchInputForm.appendChild(searchInputFieldset);
divContainer.appendChild(searchInputForm);