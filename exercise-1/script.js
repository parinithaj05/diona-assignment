const referenceDataset = {
  workerName: "Madeleine Willson",
  claimNumber: "20042047",
  reportCode: "WP",
  workerAppId: "712041",
  submittedDateTime: "March 19, 2024 19:21",

  returnStatus: "returned",
  returnDate: "March 15, 2024",
  workArrangement: "modifiedReduced",
  otherWorkArrangement: "",
  returnProgress: "Terrible. Testing Testing",
  expectedReturnDate: "",
  returnConcerns: "",
  employerContactName: "",
  employerContactDate: "",

  recoveryStatus: "recovered",
  recoveryComments: "",

  painRating: null,
  continuingTreatment: null,
  medicalProviderType: "",
  lastTreatmentDate: "",
  lastProviderName: "",
  nextTreatmentDate: "",
  nextProviderName: "",
  physioFrequency: "",
  takingMedication: null,
  medicationName: "",
  doingHomeExercises: null,
  exercises: [],
  additionalInformation: "No info Testing Testing",

  certificationAccepted: true,
  privacyAccepted: true
};

const sparseDataset = {
  workerName: "Avery Chen",
  claimNumber: "26110432",
  reportCode: "WP",
  workerAppId: "610432",
  submittedDateTime: "August 31, 2026 09:10",

  returnStatus: "notMissed",
  returnDate: "August 25, 2026",
  workArrangement: "fullRegular",
  otherWorkArrangement: "",
  returnProgress: "Working regular duties without lost time.",
  expectedReturnDate: "",
  returnConcerns: "",
  employerContactName: "",
  employerContactDate: "",

  recoveryStatus: "notRecovered",
  recoveryComments: "",

  painRating: 2,
  continuingTreatment: false,
  medicalProviderType: "",
  lastTreatmentDate: "August 26, 2026",
  lastProviderName: "Dr. Singh",
  nextTreatmentDate: "",
  nextProviderName: "",
  physioFrequency: "",
  takingMedication: false,
  medicationName: null,
  doingHomeExercises: false,
  exercises: [],
  additionalInformation: "No additional information.",

  certificationAccepted: true,
  privacyAccepted: true
};

const denseDataset = {
  workerName: "Samira Patel",
  claimNumber: "26127864",
  reportCode: "WP",
  workerAppId: "627864",
  submittedDateTime: "September 1, 2026 16:45",

  returnStatus: "returned",
  returnDate: "August 17, 2026",
  workArrangement: "other",
  otherWorkArrangement: "Graduated administrative duties, six hours per day",
  returnProgress: "My gradual return is progressing steadily with scheduled rest breaks, reduced lifting and support from my supervisor.",
  expectedReturnDate: "October 5, 2026",
  returnConcerns: "I remain concerned about prolonged standing, repeated stair use and lifting supplies above shoulder height during a full shift.",
  employerContactName: "Daniel Brooks",
  employerContactDate: "August 28, 2026",

  recoveryStatus: "notRecovered",
  recoveryComments: "Strength and mobility continue to improve; however, stiffness returns after sustained activity and I still need regular recovery periods.",

  painRating: 8,
  continuingTreatment: true,
  medicalProviderType: "Physiotherapist",
  lastTreatmentDate: "August 27, 2026",
  lastProviderName: "Taylor Morgan",
  nextTreatmentDate: "September 3, 2026",
  nextProviderName: "Taylor Morgan",
  physioFrequency: "Twice weekly",
  takingMedication: true,
  medicationName: "Naproxen 250 mg",
  doingHomeExercises: true,
  exercises: [
    "Hamstring stretches",
    "Supported squats",
    "Heel raises",
    "Resistance-band rows",
    "Twenty-minute walk"
  ],
  additionalInformation: "My employer and treatment provider have discussed a gradual increase in regular duties while retaining the current lifting restriction.",

  certificationAccepted: true,
  privacyAccepted: true
};

const datasets = {
  referenceDataset,
  sparseDataset,
  denseDataset
};

function displayValue(value) {
  return value === null || value === undefined ? "" : String(value);
}

function setTextValues(data) {
  document.querySelectorAll("[data-field]").forEach((element) => {
    const fieldName = element.dataset.field;
    const textValue = displayValue(data[fieldName]);
    const useCompactText = ["returnProgress", "additionalInformation"].includes(fieldName)
      && textValue.length > 80;

    element.textContent = textValue;
    element.classList.toggle("compact-text", useCompactText);

    const responseBox = element.closest(".return-progress, .other-information-box");

    if (responseBox) {
      responseBox.classList.toggle("has-compact-text", useCompactText);
    }
  });
}

function setExclusiveGroup(groupName, selectedValue) {
  const selectedKey = selectedValue === null || selectedValue === undefined
    ? null
    : String(selectedValue);

  document.querySelectorAll(`[data-check-group="${groupName}"]`).forEach((checkbox) => {
    checkbox.checked = selectedKey !== null && checkbox.dataset.checkValue === selectedKey;
  });
}

function setBooleanCheckboxes(data) {
  document.querySelectorAll("[data-boolean-field]").forEach((checkbox) => {
    checkbox.checked = data[checkbox.dataset.booleanField] === true;
  });
}

function renderExercises(exercises) {
  const exerciseList = document.querySelector("[data-exercise-list]");
  exerciseList.replaceChildren();

  if (!Array.isArray(exercises)) {
    return;
  }

  exercises.forEach((exercise) => {
    const exerciseText = displayValue(exercise).trim();

    if (exerciseText === "") {
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = exerciseText;
    exerciseList.append(listItem);
  });
}

function applyConditions(data) {
  const conditionedData = { ...data };

  if (conditionedData.returnStatus !== "returned") {
    conditionedData.returnDate = "";
  }

  if (conditionedData.workArrangement !== "other") {
    conditionedData.otherWorkArrangement = "";
  }

  if (conditionedData.continuingTreatment !== true) {
    conditionedData.medicalProviderType = "";
    conditionedData.nextTreatmentDate = "";
    conditionedData.nextProviderName = "";
    conditionedData.physioFrequency = "";
  }

  if (conditionedData.takingMedication !== true) {
    conditionedData.medicationName = "";
  }

  if (conditionedData.doingHomeExercises !== true) {
    conditionedData.exercises = [];
  }

  return conditionedData;
}

function updateDatasetControls(activeData) {
  const activeDatasetName = Object.entries(datasets)
    .find(([, dataset]) => dataset === activeData)?.[0];

  document.querySelectorAll("[data-dataset]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.dataset === activeDatasetName));
  });
}

function render(data) {
  const conditionedData = applyConditions(data ?? {});

  setTextValues(conditionedData);

  [
    "returnStatus",
    "workArrangement",
    "recoveryStatus",
    "painRating",
    "continuingTreatment",
    "takingMedication",
    "doingHomeExercises"
  ].forEach((groupName) => {
    setExclusiveGroup(groupName, conditionedData[groupName]);
  });

  setBooleanCheckboxes(conditionedData);
  renderExercises(conditionedData.exercises);
  updateDatasetControls(data);
}

document.querySelectorAll("[data-dataset]").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedDataset = datasets[button.dataset.dataset];

    if (selectedDataset) {
      render(selectedDataset);
    }
  });
});

render(referenceDataset);
