---
pageTitle: Shipkin Plugin
---

# Configuring the Shipkin Plugin

The following options are available within the `shipkin` closure in the
`build.gradle`:

-   `courseTitle`, `courseVersion` and `baseName` are required.
-   `units` is an array that specifies the order in which units are
    rendered on the index page.
-   `useSecurity` is a boolean field that toggles the use of basic auth
    when the course is deployed.
    If no value is provided it defaults to true.
-   `feedbackUrl` is a link to your google form for accepting feedback.
    See the [feedback section](/feedback) for more info.
-   `feedbackUrlField` is the `name` attribute of the input containing 
    the *url* field on your feedback form.
    It should look something like `entry.8888888888`.
-   `disclaimer` can be set to `true` in the `shipkin` closure
    (it is `false` by default).
-   `reviewSpace` is the space used to deploy the application for review
    on CF.
-   `productionSpace` is the space used to deploy the application for
    production on CF.