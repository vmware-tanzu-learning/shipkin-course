---
pageTitle: Feedback
---

# Feedback

Shipkin courses can be configured to collect feedback and send it to a
Pivotal Tracker project.

1.  To start, create a Google Form to collect the feedback.
    This form must contain a _Lab URL_ field which will be pre-populated
    by the course's feedback link.
    We suggest using the following fields:
    
    - Lab URL
    - Section
    - Email
    - Comment

1.  Navigate to the live form.
    Provide the URL for the live form to the `feedbackUrl` key in your
    Shipkin configuration.

1.  Find the `name` attribute for the _Lab URL_ field and provide this
    to the `feedbackUrlField` key in your Shipkin configuration.
    It should look something like `entry.8888888888`.

1.  Add the below feedback script to the results sheets of your Google
    Form (_Tools > Script editor..._).
    
    ```javascript
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
    ```
    
    Fill in `TRACKER_PROJECT_ID` and `TRACKER_API_TOKEN` with values for
    your Tracker project and user.
    Both of these values must be strings.

1.  Add a trigger to your script so that it executes the `sendToTracker`
    function on form submission.

Test your feedback submission locally before deploying your course.