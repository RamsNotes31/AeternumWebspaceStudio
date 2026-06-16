const SHEET_NAME = "Inquiries";
const HEADERS = ["Submitted At", "Name", "Business", "Project", "Budget", "Deadline", "Message", "Source", "Status", "Notes"];

function doPost(event) {
  const sheet = getInquirySheet();
  const payload = JSON.parse(event.postData.contents || "{}");

  if (!isValidSecret(payload.secret)) {
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  if (payload.action === "updateStatus") {
    return updateInquiryStatus(sheet, payload);
  }

  sheet.appendRow([
    payload.submittedAt || new Date().toISOString(),
    payload.name || "-",
    payload.business || "-",
    payload.project || "-",
    payload.budget || "-",
    payload.deadline || "-",
    payload.message || "-",
    payload.source || "aeternum-website",
    "New",
    "",
  ]);

  return jsonResponse({ ok: true });
}

function doGet(event) {
  if (!isValidSecret(event.parameter.secret)) {
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  const sheet = getInquirySheet();
  const rows = sheet.getDataRange().getValues().slice(1)
    .map((row, index) => ({ row, rowNumber: index + 2 }))
    .reverse()
    .slice(0, 25);
  const inquiries = rows.map(({ row, rowNumber }) => ({
    rowNumber,
    submittedAt: row[0] || "-",
    name: row[1] || "-",
    business: row[2] || "-",
    project: row[3] || "-",
    budget: row[4] || "-",
    deadline: row[5] || "-",
    message: row[6] || "-",
    source: row[7] || "aeternum-website",
    status: row[8] || "New",
    notes: row[9] || "",
  }));

  return jsonResponse({ ok: true, inquiries });
}

function updateInquiryStatus(sheet, payload) {
  const rowNumber = Number(payload.rowNumber);

  if (!rowNumber || rowNumber < 2 || rowNumber > sheet.getLastRow()) {
    return jsonResponse({ ok: false, error: "Invalid row" });
  }

  sheet.getRange(rowNumber, 9).setValue(payload.status || "New");
  sheet.getRange(rowNumber, 10).setValue(payload.notes || "");

  return jsonResponse({ ok: true });
}

function getInquirySheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function isValidSecret(secret) {
  const expected = PropertiesService.getScriptProperties().getProperty("INQUIRY_WEBHOOK_SECRET");
  return !expected || secret === expected;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
