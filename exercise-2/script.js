"use strict";

const referenceDataset = {
  workerName: "Madeleine Willson",
  claimNumber: "20042047",
  workerAppId: "712041",
  submittedDateTime: "March 28, 2024 20:43",
  privacyAccepted: true,
  prescriptionDrugs: [
    {
      drugName: "Naproxen",
      prescriptionDate: "February 28, 2024",
      purchaseDate: "February 29, 2024",
      providerName: "Dr. Best",
      paidAmount: "$20.00"
    }
  ],
  otcDrugs: [
    {
      drugName: "Advil",
      purchaseDate: "March 28, 2024",
      paidAmount: "$8.00",
      sellerName: "Shoppers Drug Mart",
      reason: "Pain"
    }
  ],
  medicalSupplies: [
    {
      itemPurchased: "Tensor",
      purchaseDate: "February 28, 2024",
      prescribed: "Yes",
      providerName: "Dr. Best",
      paidAmount: "$10.00",
      sellerName: "Shoppers DrugMart"
    }
  ],
  parkingExpenses: [
    {
      facilityAddress: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
      date: "March 28, 2024",
      paidAmount: "$10.00",
      meterUsed: "yes",
      meterNumber: "12245"
    }
  ],
  mileageExpenses: [
    {
      appointmentDate: "March 28, 2024",
      facilityAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
      workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
      roundTripKm: "20 km"
    }
  ],
  transportExpenses: [
    {
      appointmentDate: "March 28, 2024",
      startingAddress: "",
      facilityAddress: "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
      transportType: "Bus",
      farePaid: "$3.00"
    },
    {
      appointmentDate: "March 27, 2024",
      startingAddress: "25 Furby St, Winnipeg MB R3C 2A2, Canada",
      facilityAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
      transportType: "Taxi",
      farePaid: "$15.00"
    }
  ]
};

const sparseDataset = {
  workerName: "Evan Clarke",
  claimNumber: "24001736",
  workerAppId: "805219",
  submittedDateTime: "April 12, 2024 09:15",
  privacyAccepted: false,
  prescriptionDrugs: [],
  otcDrugs: [
    {
      drugName: "Acetaminophen",
      purchaseDate: "April 10, 2024",
      paidAmount: "$6.49",
      sellerName: "Community Pharmacy",
      reason: "Pain relief"
    }
  ],
  medicalSupplies: [],
  parkingExpenses: [
    {
      facilityAddress: "75 Poseidon Bay, Winnipeg MB R3M 3E4",
      date: "April 11, 2024",
      paidAmount: "$4.00",
      meterUsed: "No",
      meterNumber: ""
    }
  ],
  mileageExpenses: [],
  transportExpenses: [
    {
      appointmentDate: "April 11, 2024",
      startingAddress: "Home",
      facilityAddress: "75 Poseidon Bay, Winnipeg MB R3M 3E4",
      transportType: "Bus",
      farePaid: "$3.15"
    }
  ]
};

const denseDataset = {
  workerName: "Priya Deshmukh",
  claimNumber: "25009381",
  workerAppId: "938427",
  submittedDateTime: "June 18, 2025 16:32",
  privacyAccepted: true,
  prescriptionDrugs: [
    { drugName: "Naproxen 500 mg", prescriptionDate: "May 2, 2025", purchaseDate: "May 2, 2025", providerName: "Dr. Elena Morris", paidAmount: "$24.60" },
    { drugName: "Cyclobenzaprine 10 mg", prescriptionDate: "May 2, 2025", purchaseDate: "May 2, 2025", providerName: "Dr. Elena Morris", paidAmount: "$18.45" },
    { drugName: "Diclofenac gel", prescriptionDate: "May 9, 2025", purchaseDate: "May 10, 2025", providerName: "Dr. Caleb Wong", paidAmount: "$32.10" },
    { drugName: "Gabapentin 100 mg", prescriptionDate: "May 16, 2025", purchaseDate: "May 16, 2025", providerName: "Dr. Elena Morris", paidAmount: "$27.88" },
    { drugName: "Celecoxib 100 mg", prescriptionDate: "May 23, 2025", purchaseDate: "May 23, 2025", providerName: "Dr. Caleb Wong", paidAmount: "$41.25" },
    { drugName: "Lidocaine patches", prescriptionDate: "May 30, 2025", purchaseDate: "May 31, 2025", providerName: "Dr. Amara Singh", paidAmount: "$36.70" },
    { drugName: "Amitriptyline 10 mg", prescriptionDate: "June 4, 2025", purchaseDate: "June 4, 2025", providerName: "Dr. Amara Singh", paidAmount: "$16.90" },
    { drugName: "Pantoprazole 40 mg", prescriptionDate: "June 10, 2025", purchaseDate: "June 10, 2025", providerName: "Dr. Elena Morris", paidAmount: "$21.35" },
    { drugName: "Naproxen refill", prescriptionDate: "June 16, 2025", purchaseDate: "June 16, 2025", providerName: "Dr. Elena Morris", paidAmount: "$24.60" }
  ],
  otcDrugs: [
    { drugName: "Acetaminophen", purchaseDate: "May 4, 2025", paidAmount: "$9.79", sellerName: "River Avenue Pharmacy", reason: "Breakthrough pain between prescribed doses" },
    { drugName: "Cold compress packs", purchaseDate: "May 8, 2025", paidAmount: "$12.49", sellerName: "Health Plus Pharmacy", reason: "Reduce swelling after physiotherapy" },
    { drugName: "Antacid tablets", purchaseDate: "May 24, 2025", paidAmount: "$8.25", sellerName: "Broadway Pharmacy", reason: "Stomach discomfort while taking medication" },
    { drugName: "Topical heat rub", purchaseDate: "June 7, 2025", paidAmount: "$11.30", sellerName: "Osborne Village Drugstore", reason: "Temporary muscle stiffness relief" }
  ],
  medicalSupplies: [
    { itemPurchased: "Adjustable lumbar support brace", purchaseDate: "May 3, 2025", prescribed: "Yes", providerName: "Dr. Elena Morris", paidAmount: "$89.95", sellerName: "Prairie Medical Supply Centre" },
    { itemPurchased: "Reusable gel ice pack", purchaseDate: "May 5, 2025", prescribed: "No", providerName: "", paidAmount: "$18.50", sellerName: "Health Plus Pharmacy" },
    { itemPurchased: "Resistance exercise bands", purchaseDate: "May 14, 2025", prescribed: "Yes", providerName: "Jordan Lee, Physiotherapist", paidAmount: "$27.99", sellerName: "Mobility and Rehabilitation Store" },
    { itemPurchased: "Ergonomic seat cushion", purchaseDate: "June 1, 2025", prescribed: "Yes", providerName: "Jordan Lee, Physiotherapist", paidAmount: "$64.75", sellerName: "Prairie Medical Supply Centre" }
  ],
  parkingExpenses: [
    { facilityAddress: "Health Sciences Centre, 820 Sherbrook Street, Winnipeg MB R3A 1R9", date: "May 6, 2025", paidAmount: "$12.00", meterUsed: "Yes", meterNumber: "HSC-1842" },
    { facilityAddress: "Pan Am Rehabilitation Services, 75 Poseidon Bay, Winnipeg MB R3M 3E4", date: "May 13, 2025", paidAmount: "$7.50", meterUsed: "No", meterNumber: "" },
    { facilityAddress: "Manitoba Clinic, 790 Sherbrook Street, Winnipeg MB R3A 1M3", date: "May 20, 2025", paidAmount: "$10.00", meterUsed: "Yes", meterNumber: "MC-4471" },
    { facilityAddress: "St. Boniface Hospital, 409 Taché Avenue, Winnipeg MB R2H 2A6", date: "June 3, 2025", paidAmount: "$11.25", meterUsed: "No", meterNumber: "" },
    { facilityAddress: "Sport Manitoba Clinic, 145 Pacific Avenue, Winnipeg MB R3B 2Z6", date: "June 12, 2025", paidAmount: "$8.00", meterUsed: "Yes", meterNumber: "SM-9035" }
  ],
  mileageExpenses: [
    { appointmentDate: "May 6, 2025", facilityAddress: "Health Sciences Centre, 820 Sherbrook Street, Winnipeg MB R3A 1R9", workplaceAddress: "North River Distribution, 1777 Inkster Boulevard, Winnipeg MB R2X 1R3", roundTripKm: "24 km" },
    { appointmentDate: "May 13, 2025", facilityAddress: "Pan Am Rehabilitation Services, 75 Poseidon Bay, Winnipeg MB R3M 3E4", workplaceAddress: "North River Distribution, 1777 Inkster Boulevard, Winnipeg MB R2X 1R3", roundTripKm: "31 km" },
    { appointmentDate: "May 20, 2025", facilityAddress: "Manitoba Clinic, 790 Sherbrook Street, Winnipeg MB R3A 1M3", workplaceAddress: "North River Distribution, 1777 Inkster Boulevard, Winnipeg MB R2X 1R3", roundTripKm: "25 km" },
    { appointmentDate: "June 3, 2025", facilityAddress: "St. Boniface Hospital, 409 Taché Avenue, Winnipeg MB R2H 2A6", workplaceAddress: "North River Distribution, 1777 Inkster Boulevard, Winnipeg MB R2X 1R3", roundTripKm: "29 km" },
    { appointmentDate: "June 12, 2025", facilityAddress: "Sport Manitoba Clinic, 145 Pacific Avenue, Winnipeg MB R3B 2Z6", workplaceAddress: "North River Distribution, 1777 Inkster Boulevard, Winnipeg MB R2X 1R3", roundTripKm: "27 km" }
  ],
  transportExpenses: [
    { appointmentDate: "May 9, 2025", startingAddress: "1420 Pembina Highway, Winnipeg MB R3T 2C3", facilityAddress: "Manitoba Clinic, 790 Sherbrook Street, Winnipeg MB R3A 1M3", transportType: "Taxi", farePaid: "$24.80" },
    { appointmentDate: "May 16, 2025", startingAddress: "North River Distribution, 1777 Inkster Boulevard, Winnipeg MB R2X 1R3", facilityAddress: "Health Sciences Centre, 820 Sherbrook Street, Winnipeg MB R3A 1R9", transportType: "Bus", farePaid: "$6.30" },
    { appointmentDate: "May 30, 2025", startingAddress: "1420 Pembina Highway, Winnipeg MB R3T 2C3", facilityAddress: "Pan Am Rehabilitation Services, 75 Poseidon Bay, Winnipeg MB R3M 3E4", transportType: "Taxi", farePaid: "$18.65" },
    { appointmentDate: "June 10, 2025", startingAddress: "North River Distribution, 1777 Inkster Boulevard, Winnipeg MB R2X 1R3", facilityAddress: "St. Boniface Hospital, 409 Taché Avenue, Winnipeg MB R2H 2A6", transportType: "Bus", farePaid: "$6.30" }
  ]
};

const tableDefinitions = [
  ["prescription-drugs-body", "prescriptionDrugs", ["drugName", "prescriptionDate", "purchaseDate", "providerName", "paidAmount"]],
  ["otc-drugs-body", "otcDrugs", ["drugName", "purchaseDate", "paidAmount", "sellerName", "reason"]],
  ["medical-supplies-body", "medicalSupplies", ["itemPurchased", "purchaseDate", "prescribed", "providerName", "paidAmount", "sellerName"]],
  ["parking-expenses-body", "parkingExpenses", ["facilityAddress", "date", "paidAmount", "meterUsed", "meterNumber"]],
  ["mileage-expenses-body", "mileageExpenses", ["appointmentDate", "facilityAddress", "workplaceAddress", "roundTripKm"]],
  ["transport-expenses-body", "transportExpenses", ["appointmentDate", "startingAddress", "facilityAddress", "transportType", "farePaid"]]
];

function safeText(value) {
  return value === null || value === undefined ? "" : String(value);
}

function renderTable(bodyId, rows, columns) {
  const tableBody = document.getElementById(bodyId);
  const fragment = document.createDocumentFragment();

  tableBody.replaceChildren();

  (Array.isArray(rows) ? rows : []).forEach((row) => {
    const tableRow = document.createElement("tr");
    tableRow.className = "entered-row";

    columns.forEach((column) => {
      const cell = document.createElement("td");
      cell.textContent = safeText(row?.[column]);
      tableRow.appendChild(cell);
    });

    fragment.appendChild(tableRow);
  });

  tableBody.appendChild(fragment);
}

function needsExpandedPageOne(data) {
  const rowCounts = [
    data.prescriptionDrugs,
    data.otcDrugs,
    data.medicalSupplies,
    data.parkingExpenses,
    data.mileageExpenses
  ].map((rows) => Array.isArray(rows) ? rows.length : 0);

  return rowCounts.some((count) => count > 1) || rowCounts.reduce((total, count) => total + count, 0) > 5;
}

function cloneForPrint(element) {
  const clone = element.cloneNode(true);
  clone.removeAttribute("id");
  clone.querySelectorAll("[id]").forEach((child) => child.removeAttribute("id"));
  return clone;
}

function createPrintFooter(data) {
  const footer = document.createElement("footer");
  footer.className = "page-footer";

  const footerLine = document.createElement("div");
  footerLine.className = "footer-line";

  const workerApp = document.createElement("span");
  workerApp.textContent = `Worker App ID: ${safeText(data?.workerAppId)}`;

  const submitted = document.createElement("span");
  submitted.textContent = `Submitted: ${safeText(data?.submittedDateTime)}`;

  const pageNumber = document.createElement("div");
  pageNumber.className = "page-number";

  footerLine.append(workerApp, submitted);
  footer.append(footerLine, pageNumber);
  return footer;
}

function createPrintPage(printReport, data, flowLayout = true) {
  const page = document.createElement("article");
  page.className = flowLayout ? "print-page print-flow-page" : "print-page";
  const content = document.createElement("div");
  content.className = "print-page-content";

  page.append(content, createPrintFooter(data));
  printReport.appendChild(page);
  return { page, content };
}

function contentFits(content) {
  return content.scrollHeight <= content.clientHeight + 1;
}

function createSectionShell(sourceSection) {
  const section = cloneForPrint(sourceSection);
  const tableBody = section.querySelector("tbody");
  if (tableBody) {
    tableBody.replaceChildren();
  }
  return section;
}

function paginateTableSection(printState, sourceSection, data) {
  const sourceRows = Array.from(sourceSection.querySelectorAll("tbody tr"));
  let section = createSectionShell(sourceSection);
  let tableBody = section.querySelector("tbody");

  printState.content.appendChild(section);

  if (!contentFits(printState.content) && printState.content.children.length > 1) {
    section.remove();
    Object.assign(printState, createPrintPage(printState.printReport, data));
    section = createSectionShell(sourceSection);
    tableBody = section.querySelector("tbody");
    printState.content.appendChild(section);
  }

  sourceRows.forEach((sourceRow) => {
    const previousRowCount = tableBody.rows.length;
    const row = cloneForPrint(sourceRow);
    tableBody.appendChild(row);

    if (!contentFits(printState.content)) {
      row.remove();
      if (previousRowCount === 0) {
        section.remove();
      }
      Object.assign(printState, createPrintPage(printState.printReport, data));
      section = createSectionShell(sourceSection);
      tableBody = section.querySelector("tbody");
      printState.content.appendChild(section);
      tableBody.appendChild(row);
    }
  });
}

function appendBlockWithPageBreak(printState, sourceElement, data) {
  const block = cloneForPrint(sourceElement);
  printState.content.appendChild(block);

  if (!contentFits(printState.content) && printState.content.children.length > 1) {
    block.remove();
    Object.assign(printState, createPrintPage(printState.printReport, data));
    printState.content.appendChild(block);
  }
}

function createStaticPrintPages(printReport, data) {
  document.querySelectorAll(".report-page").forEach((sourcePage) => {
    const page = cloneForPrint(sourcePage);
    page.classList.remove("report-page", "expanded");
    page.classList.add("print-page");
    page.querySelector(".page-footer")?.remove();
    page.appendChild(createPrintFooter(data));
    printReport.appendChild(page);
  });
}

function createFlowingPrintPages(printReport, data) {
  const printState = {
    printReport,
    ...createPrintPage(printReport, data)
  };

  appendBlockWithPageBreak(printState, document.querySelector(".page-one .report-header"), data);
  appendBlockWithPageBreak(printState, document.querySelector(".page-one .introduction"), data);

  [
    ".prescription-section",
    ".otc-section",
    ".supplies-section",
    ".parking-section",
    ".mileage-section"
  ].forEach((selector) => {
    paginateTableSection(printState, document.querySelector(`.page-one ${selector}`), data);
  });

  Object.assign(printState, createPrintPage(printReport, data));
  paginateTableSection(printState, document.querySelector(".page-two .bus-taxi-section"), data);
  appendBlockWithPageBreak(printState, document.querySelector(".page-two .privacy-section"), data);
}

function renderPrintReport(data) {
  const printReport = document.getElementById("print-report");
  printReport.replaceChildren();
  printReport.classList.add("is-measuring");

  const useFlowingPages = needsExpandedPageOne(data) ||
    (Array.isArray(data?.transportExpenses) && data.transportExpenses.length > 2);

  if (useFlowingPages) {
    createFlowingPrintPages(printReport, data);
  } else {
    createStaticPrintPages(printReport, data);
  }

  const pages = Array.from(printReport.querySelectorAll(".print-page"));
  pages.forEach((page, index) => {
    page.querySelector(".page-number").textContent = `Page ${index + 1} of ${pages.length}`;
    page.setAttribute("aria-label", `Printed page ${index + 1} of ${pages.length}`);
  });

  printReport.classList.remove("is-measuring");
}

function render(data) {
  document.querySelectorAll("[data-field]").forEach((element) => {
    element.textContent = safeText(data?.[element.dataset.field]);
  });

  tableDefinitions.forEach(([bodyId, dataKey, columns]) => {
    renderTable(bodyId, data?.[dataKey], columns);
  });

  const privacyCheckbox = document.getElementById("privacy-checkbox");
  const privacyAccepted = Boolean(data?.privacyAccepted);
  privacyCheckbox.classList.toggle("is-checked", privacyAccepted);
  privacyCheckbox.setAttribute(
    "aria-label",
    privacyAccepted ? "Privacy acknowledgement selected" : "Privacy acknowledgement not selected"
  );

  document.querySelector(".page-one").classList.toggle("expanded", needsExpandedPageOne(data));
  document.querySelector(".page-two").classList.toggle(
    "expanded",
    Array.isArray(data?.transportExpenses) && data.transportExpenses.length > 2
  );

  document.querySelectorAll("[data-screen-page]").forEach((pageNumber) => {
    pageNumber.textContent = `Page ${pageNumber.dataset.screenPage} of 2`;
  });

  renderPrintReport(data);
}

const datasetButtons = document.querySelectorAll("[data-dataset]");

datasetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedData = button.dataset.dataset === "sparse"
      ? sparseDataset
      : button.dataset.dataset === "dense"
        ? denseDataset
        : referenceDataset;

    render(selectedData);

    datasetButtons.forEach((datasetButton) => {
      datasetButton.setAttribute("aria-pressed", String(datasetButton === button));
    });
  });
});

const requestedDatasetName = new URLSearchParams(window.location.search).get("dataset");
const initialDatasetName = requestedDatasetName === "sparse" || requestedDatasetName === "dense"
  ? requestedDatasetName
  : "reference";
const initialDataset = initialDatasetName === "sparse"
  ? sparseDataset
  : initialDatasetName === "dense"
    ? denseDataset
    : referenceDataset;

render(initialDataset);

datasetButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.dataset === initialDatasetName));
});
