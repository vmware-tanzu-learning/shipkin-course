---
pageTitle: Units in Shipkin
---

# Units

We arrange the course into a hierarchy of *units* containing *subjects*,
each labeled with a title.
If there is only one unit, we name its folder `unit`.
Add units as directories within the `site` folder.

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

## Units as submodules

Submodules should only be used for units that are shared with multiple
courses.

The git repositories of these special use cases should have the suffix
`-unit`, but the unit folders should not have this suffix.

## Creating a unit

1.  Copy the [unit.json](site/example-native-developer/unit.json) into each
    unit.
1.  Update your `unit.json` to help generate the index.

## Changelog

Each unit can have a [CHANGELOG.md](site/example-native-developer/CHANGELOG.md)
file that tracks the changes made to the unit.
Each of these files will be processed by Shipkin to produce a changelog
for the course.

The goal of the changelog entries are to give instructors a running list
of changes so that they can easily keep up to date with the evolution of
the units.

See `site/example-native-developer/CHANGELOG.md` for an example entry.
Each entry must be contained to one line.
Update this file each time changes are made to the unit, following the
format

```markdown
- YYYY-MM-DD <ACTION> A change for example-native-developer
```

where `<ACTION>` is one of (`added`, `removed`, `changed`).

Unit changelogs will be combined into a course changelog when the course
is built.
This changelog can be accessed at `${siteRoot}/changelog`