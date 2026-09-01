# AI Prompt History — Exercise 2

## Exercise
Medical & Travel Expense Request

AI-assisted development was used to help analyze the reference document, structure the implementation, generate and refine code, and test dynamic table behavior.

---

## Prompt 1 — Reference PDF Analysis

Analyze the supplied Medical & Travel Expense Request PDF carefully.

Identify:
- page structure
- headings
- tables
- dynamic data fields
- footer information
- page numbering
- typography and layout characteristics
- variable-length data areas
- possible implementation challenges using only HTML, CSS, and vanilla JavaScript

Do not generate code yet.

---

## Prompt 2 — Build Both Static Pages

Create Exercise 2 using:
- index.html
- style.css
- script.js

Recreate both pages of the supplied Medical & Travel Expense Request PDF.

Page 1 should include:
- WCB Manitoba logo
- contact information
- document title
- claim number
- worker name
- Prescription Drugs table
- Over-the-Counter Drugs table
- Bandages, Braces or Other Medical Supplies table
- Parking for Medical Appointments table
- Mileage to Medical Appointments section and table
- Worker App ID
- submission timestamp
- Page 1 of 2 footer

Page 2 should include:
- Bus or Taxi Fare for Medical Appointments section
- taxi pre-approval note
- transport table
- privacy acknowledgement
- Worker App ID
- submission timestamp
- Page 2 of 2 footer

Use the sample values from the supplied PDF.

Match the layout, spacing, borders, column widths, typography and alignment closely to the reference.

Use only HTML and CSS for the static layout.

---

## Prompt 3 — Make Exercise 2 Dynamic

Convert the completed Exercise 2 implementation into a data-driven solution using vanilla JavaScript.

Move all changeable content into JavaScript data objects.

Represent each expense category as an array:

- prescriptionDrugs
- otcDrugs
- medicalSupplies
- parkingExpenses
- mileageExpenses
- transportExpenses

Create one main function:

`render(data)`

The function should:
- populate worker name
- populate claim number
- populate Worker App ID
- populate submission date/time
- update privacy acknowledgement
- dynamically generate table rows
- safely handle empty arrays
- avoid displaying undefined or null

Each table body should be cleared before rendering new rows.

Use loops to create `<tr>` and `<td>` elements dynamically.

Do not hardcode data rows in HTML.

---

## Prompt 4 — Add Multiple Test Datasets

Create three datasets:

1. Reference Dataset
   - matches the supplied PDF values

2. Sparse Dataset
   - different worker information
   - some tables with zero entries
   - some tables with only one entry
   - minimal data

3. Dense Dataset
   - different worker information
   - multiple rows in each applicable table
   - at least one table with approximately 8–10 rows
   - longer addresses and realistic values
   - multiple prescription, OTC, supply, parking, mileage and transport entries

Add browser-only buttons:

- Reference Dataset
- Sparse Dataset
- Dense Dataset

Each button should call `render(data)` with the selected dataset.

The controls must be hidden in print mode.

Make sure:
- empty arrays do not generate fake rows
- switching datasets does not duplicate table rows
- long text wraps properly
- tables remain readable

---

## Prompt 5 — Improve Print and Dense Data Handling

Test and improve Exercise 2 for printing, especially with the Dense Dataset.

Requirements:
- preserve readable table layout
- prevent horizontal overflow
- wrap long text inside cells
- avoid splitting rows where possible
- prevent footer overlap
- hide dataset buttons in print mode
- keep the reference dataset close to the original two-page layout
- allow dense content to expand onto additional printed pages if required
- do not shrink text excessively just to force everything into two pages

Use CSS print rules and appropriate page-break behavior.

---

## Prompt 6 — Fix Dynamic Print Page Numbering

Fix print page numbering when dense content produces more than two printed pages.

Problem:
The dense dataset can create three printed pages while the original static footer still shows:
- Page 1 of 2
- Page 2 of 2

Required behavior:
- Reference Dataset should show the correct total page count for its generated output.
- Sparse Dataset should show the correct total page count.
- Dense Dataset should show the correct total page count, such as:
  - Page 1 of 3
  - Page 2 of 3
  - Page 3 of 3

Every printed page should include:
- Worker App ID
- Submitted date/time
- correct current page number and total page count

Do not leave any printed page without a footer.

If necessary, restructure the print layout so JavaScript can generate the required page containers before printing.

---

## Notes

The final implementation uses only:
- HTML
- CSS
- vanilla JavaScript

No frontend framework was used.

The implementation demonstrates:
- dynamic table generation
- empty datasets
- single-row datasets
- large datasets
- long-text handling
- print-aware layout behavior
- dynamic page-count handling