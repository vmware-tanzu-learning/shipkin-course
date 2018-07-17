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
├── gradlew
├── gradlew.bat
├── pal.example.properties
├── README.md
├── settings.gradle
├── shipkin-starter-v2.iml
└── units
    ├── guides
    └── using-shipkin
```

## Top-level

The top-level directory of the course repository should contain:

-   A `courses` directory, which contains one or more courses, in this
    case it is `shipkin`.
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

### Configuration

The top level `build.gradle` file contains, in particular, the version of the
courses in the `topLevelCourseVersion` variable.
The version should follow [semantic versioning](https://semver.org/) for
the course material.

{{github-file owner="platform-acceleration-lab" repo="shipkin-starter-v2" path="build.gradle" lang="groovy" ref="master" hidden="true"}}

Do not tie the course version to the version of any software included in
the course, as the material and the software tend to change
independently.

## Courses

Courses are stored under their name in the `courses` directory. In our
case as `shipkin`. There can be multiple courses per repo.

The `site` directory within the `courses/shipkin` directory holds the
content for the `shipkin` course.
 
The `build.gradle` file contains all configuration for the course. The
units, which contain much of the content of the course, live in the
`units` directory at the top-level and are included via the
__units__ block in the `build.gradle`. 

This allows us to share units between courses.

{{github-file owner="platform-acceleration-lab" repo="shipkin-starter-v2" path="courses/shipkin/build.gradle" lang="groovy" ref="master" hidden="true"}}

## Units

The order of the units is defined in each course's `build.gradle` file.

Directories within a unit, i.e. _best-practices_,
_lab-acceptance_, _slides_ and _style_ correspond to a lesson.

We do not add numbering to the directories since this makes them harder
to reorder.
The order of the subjects and lessons is defined in each unit's
`unit.json` file.

More details on units can be found [here](../shipkin-units).

### Lessons

The material for each lesson is nested under the lesson's folder.
We name the markdown file `index.md`.
All other resources in the folder are given names that describe their
content.
Do not add numbering to these resources since it makes it harder to
reorder them within a document.
