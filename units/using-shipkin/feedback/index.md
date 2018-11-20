---
pageTitle: Feedback via Google forms and Pivotal Tracker
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

1.  Add the below feedback script to the results sheet of your Google
    Form (_Tools > Script editor..._).

    {{codebase-file codebase="shipkin-course" path="units/using-shipkin/feedback/feedback.js" lang="javascript" ref="master" hidden="true"}}

    Fill in `TRACKER_PROJECT_ID` and `TRACKER_API_TOKEN` with values for
    your Tracker project and user.
    Both of these values must be strings.

1.  Add a trigger to your script so that it executes the `sendToTracker`
    function on form submission.

Test your feedback submission locally before deploying your course.
