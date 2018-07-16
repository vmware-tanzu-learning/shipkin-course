---
pageTitle: Course structure
---

# Purpose

We use the below course structure to ensure consistency between courses
and to maximize course maintainability. 

# Hierarchy

We arrange the course into a hierarchy of *units* and *subjects*, each
labeled with a title.
Units and subjects should divide content by topic.
Titles should be used to describe the content of a given unit or
subject.
Do not use units and subjects to divide the course content by unit of
time (days or weeks, for example).

Each subject contains a series of *lessons*, which contain a
*description* and one or more *materials*.
Descriptions should be a **short** phrase describing the lesson.

Each material has a title, which can be *lab*, *slides*, or an arbitrary
value.
The *lab* and *slides* types should be favored over arbitrary types.
Each lesson should have at most one material of each type.

Materials with type *slides* should use Google Presentations rather than
referencing local files.
See the starter course for more details.

# Repository structure

Below is the directory structure for this course:

```no-highlight
├── build.gradle
├── course.example.properties
├── courses
│   └── shipkin
│       ├── build.gradle
│       └── site
│           ├── favicon.ico
│           ├── index.md
│           ├── industrials.jpg
│           ├── rocket.png
│           └── sheep.png
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── pal.example.properties
├── README.md
├── settings.gradle
├── shipkin-starter-v2.iml
└── units
    ├── guides
    │   ├── best-practices
    │   │   └── index.md
    │   ├── CHANGELOG.md
    │   ├── checklist
    │   │   └── index.md
    │   ├── structure
    │   │   └── index.md
    │   ├── style
    │   │   ├── bad-json.png
    │   │   └── index.md
    │   └── unit.json
    └── using-shipkin
        ├── CHANGELOG.md
        ├── course-creation.md
        ├── courseImage.png
        ├── extensions.md
        ├── feedback.md
        ├── githubFile.png
        ├── lab-creation.md
        ├── local-development.md
        ├── pipeline.md
        ├── plugin-configuration.md
        ├── shipkin-units.md
        ├── theme-settings.md
        └── unit.json

```

## Top-level

The top-level directory of the course repository should contain:

-   A `courses` directory, which contains one or more courses, in this
    case it is `shipkin`.
    -   The `site` directory within the `shipkin` directory holds the
        content for the `shipkin` course. 
    -   A `build.gradle` file.
        This contains all configuration for the course.
-   A `units` directory, which contains all the units, which can be
    shared between courses.        
-   A `gradle` directory along with two wrapper scripts: `gradlew` and
    `gradlew.bat`.
-   A `pal.example.properties` file.
    This file contains examples of the credentials needed to deploy the
    course.
    This file is meant to be copied to a `pal.properties` file which is
    **not** checked in.
    The credentials file does not vary per course.
-   A `course.example.properties` file.
    This file contains examples of the credentials needed to secure the
    course.
    This file is meant to be copied to a `course.properties` file which
    is **not** checked in.
    The credentials vary from course to course.

## Configuration

The `build.gradle` file contains, in particular, the version of the
course.
The version should follow [semantic versioning](https://semver.org/) for
the course material.
Do not tie the course version to the version of any software included in
the course, as the material and the software tend to change
independently.

## Site

The course consists of two units, _guides_ and _using-shipkin_.

Each of the directories within _guides_, _best-practices_, _structure_,
_checklist_ and _style_ corresponds to a lesson.

Notice how each directory is named according to its corresponding
course, unit, subject, or lesson.
We do not add numbering to the directories since this makes them harder
to reorder.
The order of the units is defined in each course's `build.gradle` file,
while the order of the subjects and lessons is defined in each unit's
`unit.json` file.

### Lessons

The material for each lesson is nested under the lesson's folder.
We name the markdown file `index.md`.
All other resources in the folder are given names that describe their
content.
Do not add numbering to these resources since it makes it harder to
reorder them within a document.
