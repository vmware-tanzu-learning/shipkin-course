---
pageTitle: Local Development
---

# Local development

To serve the course on port `8888` run:

```bash
./gradlew run
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

## Automatic reload

When working on the course, you may want your server to auto-generate
as you save your files.
To achieve this you can:
-   run in one terminal: `./gradlew run`
-   run in another terminal: `./gradlew build -t`

That last command will build the website and rebuild when source
files change. 