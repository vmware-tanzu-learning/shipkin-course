---
pageTitle: Units in Shipkin
---

# Units

We arrange the course into a hierarchy of *units* containing *subjects*,
each labeled with a title.
Add units as directories within the top-level `units` folder.

Each subject contains a series of *lessons*, which contain a
*description* and one or more *materials*.

Each material has a *title*, which can be *lab*, *slides*, or an arbitrary
value.
Each material also has a location, which contains a relative link to a
generated file.

Materials with a *type* property set to *google-presentation* are
treated differently.
In this case, the *location* is set to the unique identifier for the
presentation.
To find this identifier, view the presentation's URL.
For example the identifier for a presentation with the url below is
`1234ABCD`.

```no-highlight
https://docs.google.com/presentation/d/1234ABCD/edit
```

## Codebases

The `unit.json` file also contains a `codebases` key whose value is an
object containing information about the codebases related to the unit.
The keys of the codebases object are codebase names written in
[kebab case](https://en.wikipedia.org/wiki/Kebab_case).
The values of the codebases object are the HTTPS addresses of the
corresponding git repositories, which must be publicly accessible.

Each codebase will be zipped along with its git repository in the
`codebases` directory of the course zip folder.

Codebases can (and should) be published as releases on GitHub so that
they can be referenced using the
[codebase download link extension](../extensions/index.html#codebase-download-links)
by using the `publishCodebaseReleases` task.

## Creating a unit

1.  Copy the __unit.json__ file into each unit.

    {{codebase-file codebase="shipkin-course" path="units/using-shipkin/unit.json" lang="json" ref="master" hidden="true"}}

1.  Update your `unit.json` to help generate the index and to include
    your codebases.

## Changelog

Each unit can have a CHANGELOG.md file that tracks the changes made to
the unit.
Each of these files will be processed by Shipkin to produce a changelog
for the course.

The goal of the changelog entries are to give instructors a running list
of changes so that they can easily keep up to date with the evolution of
the units.

See below for an example entry.
Each entry must be constrained to one line.
Update this file each time changes are made to the unit, following the
following format.

{{codebase-file codebase="shipkin-course" path="units/using-shipkin/CHANGELOG.md" lang="md" ref="master" hidden="false"}}

```markdown
- YYYY-MM-DD <ACTION> A change for extensions
```

where `<ACTION>` is one of the following.
- added
- removed
- changed

Unit changelogs will be combined into a course changelog when the course
is built.
This changelog can be accessed at `${siteRoot}/changelog`.