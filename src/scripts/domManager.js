const radioFilterContainer = document.getElementById("radio-filter-container");

const moodSearchForm = document.createElement("form");
const moodSearchFieldset = document.createElement("fieldset");
let moodSearchLegend = document.createElement("legend");
let legendText = document.createTextNode("Filter Journal Entries by Mood");
moodSearchLegend.appendChild(legendText);
moodSearchFieldset.appendChild(moodSearchLegend);

let radioFrag = document.createDocumentFragment();

let sadRadioButton = document.createElement("input");
sadRadioButton.type = "radio";
sadRadioButton.name = "moods";
sadRadioButton.value = "Sad";
radioFrag.appendChild(sadRadioButton)
let sadRadioLabel = document.createElement("label");
sadRadioLabel.textContent = "Sad";
radioFrag.appendChild(sadRadioLabel);
let happyRadioButton = document.createElement("input");
happyRadioButton.type = "radio";
happyRadioButton.name = "moods";
happyRadioButton.value = "Happy";
radioFrag.appendChild(happyRadioButton);
let happyRadioLabel = document.createElement("label");
happyRadioLabel.textContent = "Happy";
radioFrag.appendChild(happyRadioLabel);
let okRadioButton = document.createElement("input");
okRadioButton.type = "radio";
okRadioButton.name = "moods";
okRadioButton.value = "Ok";
radioFrag.appendChild(okRadioButton);
let okRadioLabel = document.createElement("label");
okRadioLabel.textContent = "Ok";
radioFrag.appendChild(okRadioLabel);

moodSearchFieldset.appendChild(radioFrag);
moodSearchForm.appendChild(moodSearchFieldset);
radioFilterContainer.appendChild(moodSearchForm);