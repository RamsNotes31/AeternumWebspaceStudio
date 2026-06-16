const SHEET_NAME = "Inquiries";

function doPost(event) {
  const sheet = getInquirySheet();
  const payload = JSON.parse(event.postData.contents || "{}");

  sheet.appendRow([
    payload.submittedAt || new Date().toISOString(),
    payload.name || "-",
    payload.business || "-",
    payload.project || "-",
    payload.budget || "-",
    payload.deadline || "-",
    payload.message || "-",
    payload.source || "aeternum-website",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

function getInquirySheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted At", "Name", "Business", "Project", "Budget", "Deadline", "Message", "Source"]);
  }

  return sheet;
}
