---
pageTitle: Create a course
---

# The basics to create a course with [Shipkin](http://shipk.in).

1.  Create the course repo on GitHub with a `-course` suffix,
    add *Pivots* group with write access (and *Education* group, if
    applicable), and *automation-readers* group with read access.
1.  Make a new directory and `git init`.
1.  Create a [Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html)
    by running `gradle wrapper`.
1.  Copy the [build.gradle](build.gradle).
1.  Copy the [.gitignore](.gitignore) file.
1.  Create a `site` sub-directory.
1.  Add the units as folders or as git submodules
    ([see instructions below](#units)).
1.  Contents of an [index.md](site/index.md) file in the site directory
    will be rendered before the content listing on the index page of the
    course.
1.  Configure the `shipkin` closure in `build.gradle` with the course
    version, units ordering, [theme](#theme-parameters), etc.
1.  Copy the [course.example.properties](course.example.properties) file
    to a `course.properties` file and fill in the appropriate values.
1.  Copy the [pal.example.properties](pal.example.properties) file to a
    `pal.properties` file and fill in the appropriate values.