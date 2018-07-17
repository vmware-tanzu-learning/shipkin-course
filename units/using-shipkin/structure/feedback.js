function sendToTracker() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses 1");

    var lastRow = sheet.getLastRow();

    var feedback = feedbackFromRow(sheet, lastRow);

    createStory(feedback, TRACKER_PROJECT_ID, TRACKER_API_TOKEN);
}

function feedbackFromRow(sheet, row) {
    return {
        "timestamp": sheet.getRange(row, 1).getValue(),
        "url": sheet.getRange(row, 2).getValue(),
        "section": sheet.getRange(row, 3).getValue(),
        "email": sheet.getRange(row, 4).getValue(),
        "comment": sheet.getRange(row, 5).getValue()
    }
}

function storyDescription(feedback) {
    var description = "\n\n\n--------\n\n**Comment**\n" + feedback.comment + "\n\n**link:** " + feedback.url + "\n\n**section:** " + feedback.section;

    if (feedback.email) {
        description += "\n\n**email:** " + feedback.email;
    }

    description += "\n\n" + feedback.timestamp;

    return description;
}

function createStory(feedback, projectId, apiToken) {
    var projectUrl = "https://www.pivotaltracker.com/services/v5/projects/" + projectId + "/stories";

    var headers = {
        "X-TrackerToken": apiToken,
        "Content-Type": "application/json"
    };

    var body = {
        "name": feedback.section,
        "description": storyDescription(feedback),
        "story_type": "feature",
        "labels": ["feedback"]
    };

    UrlFetchApp.fetch(projectUrl, {
        "method": "post",
        "headers": headers,
        "payload": JSON.stringify(body)
    });
}