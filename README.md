# Diona Technical Assignment

This repository contains my submission for the technical assignment completed as part of the internship selection process.

The task was to recreate two provided PDF documents using only:

- HTML
- CSS
- Vanilla JavaScript

The implementation focuses on closely matching the supplied PDF layouts while also making the displayed data dynamic.

## Exercises

### Exercise 1 — Worker Progress Report

A 3-page recreation of the supplied Worker Progress Report PDF.

Features include:

- WCB header and branding
- Claim information
- Return-to-work details
- Recovery details
- Pain rating
- Medical treatment details
- Medication details
- Home exercise details
- Certification and privacy acknowledgement
- Dynamic checkbox states
- Dynamic text content
- Multiple datasets for testing
- Print-friendly 3-page layout

Three datasets are provided:

- Reference Dataset
- Sparse Dataset
- Dense Dataset

These demonstrate how the same report layout behaves with different amounts and types of data.

---

### Exercise 2 — Medical & Travel Expense Request

A recreation of the supplied Medical & Travel Expense Request PDF.

Features include:

- WCB header and branding
- Claim and worker information
- Prescription Drugs table
- Over-the-Counter Drugs table
- Medical Supplies table
- Parking Expenses table
- Mileage Expenses table
- Bus/Taxi Fare table
- Privacy acknowledgement
- Dynamic table generation
- Variable numbers of rows
- Multiple datasets for testing
- Print-friendly layout

Three datasets are provided:

- Reference Dataset
- Sparse Dataset
- Dense Dataset

The dense dataset demonstrates that the tables can dynamically support a larger number of entries without requiring hardcoded rows.

## Dynamic Data

The pages are rendered from JavaScript data objects rather than relying entirely on hardcoded HTML values.

The implementation demonstrates:

- Dynamic text rendering
- Dynamic checkbox selection
- Conditional data display
- Dynamic exercise lists
- Dynamic table row generation
- Empty datasets
- Large datasets
- Switching between different datasets in the browser

Dataset selector buttons are available in the browser for demonstration purposes and are hidden when printing.

## Running the Project

No installation or external dependencies are required.

### Exercise 1

Open:

`exercise-1/index.html`

in a web browser.

### Exercise 2

Open:

`exercise-2/index.html`

in a web browser.

Use the dataset buttons at the top of each exercise to test different data scenarios.

## Print / PDF View

The layouts include print styling.

To preview or save the generated pages as PDF:

1. Open the required exercise in Google Chrome or Microsoft Edge.
2. Select the required dataset.
3. Press `Ctrl + P`.
4. View the print preview or choose **Save as PDF**.

The dataset controls are automatically hidden in print mode.

## Demo Videos

### Exercise 1 — Worker Progress Report

[Watch Exercise 1 Video](https://drive.google.com/file/d/1thchQ6urSWQ40femFm5RFQTrJ71VO8N-/view?usp=sharing)

### Exercise 2 — Medical & Travel Expense Request

[Watch Exercise 2 Video](https://drive.google.com/file/d/1Gh_5bg1953rEgp-bXjgXvQevOtMgxhSo/view?usp=sharing)

The videos demonstrate:

- Understanding of the requirements
- Browser execution
- Dynamic dataset behavior
- Code structure
- HTML, CSS and JavaScript implementation
- Challenges faced and solutions
- AI usage disclosure

## AI Usage

AI-assisted development was used during this assignment.

Relevant prompt history is available within each exercise:

- `exercise-1/AI_PROMPTS.md`
- `exercise-2/AI_PROMPTS.md`

## Project Structure

```text
Diona assignment/
├── exercise-1/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── exercise-2/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── assets/
├── AI_PROMPTS.md
└── README.md