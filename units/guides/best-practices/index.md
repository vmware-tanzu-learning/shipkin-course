---
pageTitle: Best practices
---

# Purpose

We strive for our course material to communicate our ideas as clearly as
possible.
Use the following principles to reduce ambiguity and increase
consistency. 

# Purpose section

Start every lab with a *Purpose* section which explains what a student 
will accomplish in the lab.
Begin the section with a complete sentence.
For example:

```markdown
# Purpose

In this lab, you will use Spring Cloud Config to set up a config server
for the MovieFun App.
```

# Instructional structure

Write instructions as commands to the reader.  

- _DO_: Add a Gradle plugin.
- _DO NOT_: ~~Now, you want to consider adding a Gradle plugin~~  

In sections with more than one instruction, enumerate instructions in a
numbered list.
Do not use a numbered list in sections with only one instruction.
For emphasis, put the instruction at the beginning of a paragraph.

Include the command to the reader as the first sentence of an
instruction.
Follow the command with details and more nuanced explanations as needed.
For example: 

```markdown
# Config server

Now, configure PCF to provide a config server.

1.  Add the config server to the list of services in `cf.gradle`.
    We supply `config-server.json` as configuration for the service.

1.  Run the `createServices` Gradle command to ensure that you have a
    config server service instance available to your applications.
```


# Write descriptive instructions

Favor descriptive instructions over prescriptive instructions. 
Describe the intended end-state instead of prescribing the exact steps
for a user to complete.
Descriptive instructions require the user to decide what needs to be
done, and increase the chance that the user will be able to apply the
instructions to other situations in the future.

Consider the two following sets of instructions:

## Not-so-good

1.  Create a file named `index.html`:

    ```bash
    cat  > ./index.html <<-EOF
    <html>
    <body>
        <h1>Hello world</h1>
    </body>
    </html>
    EOF
    ```

1.  Signal Cloud Foundry to use the Static Buildpack by creating a
    `Staticfile`.

    ```bash
    touch Staticfile
    ```

1.  Push your app to Cloud Foundry with a random route.

    ```bash
    cf push ${APPLICATION_NAME} --random-route
    ```

## Better

1.  Create file named `index.html` with the following content:

    ```html
    <html>
    <body>
        <h1>Hello world</h1>
    </body>
    </html>
    ```

1.  Signal Cloud Foundry to use the Static Buildpack by creating an
    empty file named `Staticfile`.

1.  Use the CF CLI's `push` command (and the `--help` flag, if needed)
    to push your app to Cloud Foundry with a random route.

## Comparison

A user completing the first example can copy and paste each command to
complete the exercise.
After the exercise is complete the writer can have no confidence that
the user understands the concepts covered even if they achieve the
desired result.

A user completing the second example must think a bit before completing
each step.
They are able to create the `index.html` and `Staticfile` files using
their method of choice.
If they have not previously used the CF CLI, they will become familiar
with the `cf help` command and the documentation for `cf push`. 
After the exercise is complete the writer has more confidence that the
user understands the concepts covered. 

Additionally, the descriptive instructions are easier to maintain, since
small changes to the CF CLI may not require changes to the instructions.

# Tone of voice

-   Avoid using the word *let's*.

    -   DO: Begin by starting the server.
    -   DO NOT: ~~Let's begin by starting the server.~~

-   Avoid contractions.

-   Never type in all capital letters.

-   Never say that actions are _basic_ or _simple_.

-   Resist the urge to preface a sentence or paragraph with _Note_,
    _Hint_, _Caution_, _Tip_, etc.
    Your message will be clearer without such a preface.

-   Where possible, make statements positive (not negative or double
    negative).

    -   _DO_: Name your app using your own initials.
    -   _DO NOT_: ~~Do not name your app identically to what is printed
        above.~~

-   Add a period after each sentence, even if the sentence ends with
    code.
    Begin each sentence with a capital letter.

-   Do not start a sentence with code.

    -   _DO_: Use `cf push` to deploy.
    -   _DO NOT_: ~~`cf push` should be used to deploy.~~

-   Read this [technical writing guide](https://msu.edu/course/be/485/bewritingguideV2.0.pdf).

-   Write out numbers that are less than 10, and use numerals for
    numbers that are greater than or equal to 10.

    -   _DO_: There are 12 boxes with six bottles each.
    -   _DO NOT_: ~~There are 12 boxes with 6 bottles each.~~

-   Do not write both numbers and numerals.

    -   _DO_: So far this semester he has been absent nine times.
    -   _DO NOT_: ~~So far this semester he has been absent nine (9)
        times.~~

-   Use italics to denote menu items and on-screen directions.
    Use right angle brackets to denote menu nesting.
    For example:

    ```markdown
    Open the print dialog with _File > Print_ then click _OK_ to print.
    ```
