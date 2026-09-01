# AI Prompt History — Exercise 1

## Exercise
Worker Progress Report

AI-assisted development was used to help analyze the reference document, structure the implementation, generate and refine code, and test dynamic behavior.

---

## Prompt 1 — Reference PDF Analysis

Analyze the supplied Worker Progress Report PDF carefully.

Identify:
- page structure
- headings
- form sections
- dynamic data fields
- checkbox groups
- footer information
- page numbering
- typography and layout characteristics
- possible implementation challenges using only HTML, CSS, and vanilla JavaScript

Do not generate code yet.

---

## Prompt 2 — Basic Project Structure

Work only on Exercise 1: Worker Progress Report.

Inside the exercise-1 folder, create:
- index.html
- style.css
- script.js

Create a basic HTML5 structure with three separate page containers representing the three pages of the reference PDF.

Keep CSS minimal and leave JavaScript empty except for a short placeholder comment.

Do not implement the actual form yet.

---

## Prompt 3 — Build Page 1

Recreate Page 1 of the supplied Worker Progress Report PDF using HTML and CSS.

Include:
- WCB Manitoba logo
- contact information
- Worker Progress Report heading
- claim number
- WP code
- worker name and introduction
- Return to Work section
- return status options
- return date
- work arrangement options
- return-to-work progress
- expected return date
- concerns
- employer contact
- Recovery section
- recovery status
- recovery comments
- Worker App ID
- submission timestamp
- Page 1 of 3 footer

Match the layout, spacing, borders, typography and alignment closely to the supplied PDF.

Do not add dynamic JavaScript yet.

---

## Prompt 4 — Page 1 Visual Refinement

Compare the current Page 1 implementation carefully with the supplied PDF.

Improve:
- WCB logo accuracy
- font styles
- font weights
- checkbox appearance
- border thickness
- spacing
- alignment
- section positioning

Use the actual WCB logo where possible.

Make the custom checkboxes visually resemble the PDF instead of relying on the browser default checkbox style.

---

## Prompt 5 — Build Page 2

Recreate Page 2 of the Worker Progress Report.

Include:
- pain/discomfort scale from 1 to 10
- medical treatment status
- provider type
- last treatment details
- next treatment details
- chiropractor/physiotherapist frequency
- medication section
- home exercises section
- exercises area
- Other Information section
- Worker App ID
- submission timestamp
- Page 2 of 3 footer

Match the supplied reference PDF closely.

Do not add dynamic JavaScript yet.

---

## Prompt 6 — Page 1 and Page 2 Corrections

Correct the remaining visual differences on Page 1 and Page 2.

Requirements:
- place all "Select one:" labels inside their bordered form boxes
- correct font styling and weights
- ensure "Other Information" matches the reference
- preserve the existing layout

Use Century Gothic for the following headings:
- Worker Progress Report
- Return to Work
- Recovery
- Other Information

Keep regular form content in the appropriate serif-style font.

---

## Prompt 7 — Build Page 3

Recreate Page 3 of the supplied Worker Progress Report PDF.

Include:
- certification checkbox
- certification/declaration text
- privacy acknowledgement checkbox
- Privacy Notice text/link
- large intentional blank area
- footer containing Worker App ID, submission timestamp, and Page 3 of 3

Keep the layout visually close to the source PDF.

Also apply the remaining typography corrections to Pages 1 and 2.

---

## Prompt 8 — Make the Report Dynamic

Convert the completed three-page Worker Progress Report into a data-driven implementation using vanilla JavaScript.

Move changeable information into JavaScript data objects.

Create rendering logic for:
- worker name
- claim number
- Worker App ID
- submission date
- return-to-work information
- checkbox states
- work arrangement
- recovery status
- medical treatment
- pain rating
- medication
- home exercises
- additional information
- certification
- privacy acknowledgement

Ensure mutually exclusive checkbox groups display only the correct selected state.

Do not display "undefined" or "null" for missing values.

Add dataset selector buttons for demonstrating different data.

Hide the dataset buttons when printing.

---

## Prompt 9 — Improve Dynamic Testing

Improve Exercise 1 so that dynamic behavior is demonstrated using three datasets:

1. Reference Dataset
   - values based on the supplied PDF

2. Sparse Dataset
   - minimal optional information
   - empty values
   - zero exercises
   - short responses

3. Dense Dataset
   - all relevant optional fields filled
   - long free-text responses
   - treatment and medication details
   - four or five exercises
   - longer additional information

Use one main function:

`render(data)`

The function should update the complete document.

Use helper functions where needed.

Represent exercises as an array and generate the displayed exercise list dynamically.

Make sure switching datasets:
- does not duplicate content
- maintains correct checkbox states
- safely handles empty values
- preserves the three-page layout

---

## Notes

The final implementation uses only:
- HTML
- CSS
- vanilla JavaScript

No frontend framework was used.

Dynamic test datasets were included to demonstrate that the same report template can correctly handle different amounts and combinations of data.