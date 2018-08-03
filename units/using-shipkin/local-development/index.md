---
pageTitle: Local Development
---

# Serving the course

To serve the course on port `8888` run the following command from the
project root directory.

```bash
./gradlew run
```
If you have multiple courses, run them individually from the top-level
by specifying which course you want to run.
In the case of this course the explicit from the top-level run command
would be the following.

```bash
./gradlew courses:shipkin:run
```

Shipkin will check all links in the course and will error if any of them
return a 404.
To skip link checking, run

```bash
./gradlew run -x checkLinks
```

## Options

-   To serve the course on a port other than `8888`, set the gradle
    `port` property.
    For example, to serve the course on `8081` run:

    ```bash
    ./gradlew run -Pport=8081
    ```

-   To run in offline mode (without downloading file snippets from
    GitHub) run:

    ```bash
    ./gradlew run -Poffline
    ```

    **Never** publish files generated using offline mode.

-   To build the course with PDF versions of Google Presentations rather
    than embedded slides, run:

    ```bash
    ./gradlew run -PpdfPresentations
    ```

## Live reload

When working on the course, it is sometimes convenient to auto-generate
as you save your files.
To achieve, do the following.

1.  Run the course in one terminal:
    ```bash
    ./gradlew courses:${COURSE_NAME}:run
    ```

1.  Instruct Gradle to re-generate upon changes in another terminal:

    ```bash
    ./gradlew courses:${COURSE_NAME}:generate -t
    ```
