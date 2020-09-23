---
pageTitle: Shipkin Extensions
---

Shipkin currently offers two extensions to markdown.

# Codebase-file

The _codebase-file_ extension can insert code directly from codebases
included in your `unit.json` file.
Those codebases need to live on Github and have to be public there.
Use the extension by inserting the following snippet anywhere in a
markdown file.

```markdown
{{codebase-file codebase="prerequisite-code" path="build.gradle" lang="groovy" ref="master" hidden="false"}}
```

-   `codebase`: The codebase where the file is located, as listed in the
    `unit.json` file.
-   `path`: the path to the file relative to the codebase root.
-   `ref`: the branch or tag for the file.
-   `lang`: the programming language the code is in for highlighting.
-   `hidden`: boolean that specifies if the included file is visible,
    default is _true_.

The included file will look as follows.

{{codebase-file codebase="prerequisite-code" path="build.gradle" lang="groovy" ref="master" hidden="false"}}

# Partial-file
The _partial-file_ extension can insert partials directly from a file in
the _units_ directory.
Markdown content from partials is acceptable.
Use the extension by inserting the following snippet anywhere in a
markdown file.
-   The simplest way to use the extension is to specify _path_ and
    _title_ which will render the partial inline with the surrounding
    content.
-   If the option _inline=false_ is specified the partial is rendered
    with a toggle and not shown on initial rendering.
-   The _context-code_ option can be used with both flavors to include
    partials only for that _context-code_.


```markdown
||partial-file path="using-shipkin/extensions/partial.md"  context-code="ABC" title="inline-partial"||
||partial-file path="using-shipkin/extensions/partial.md"  title="toggled-partial" inline=false||
```

-   `title`: the title to display on the toggle, needs to be one word.
-   `path`: the path to the file relative to the units root.
-   `context-code`: code that allows for partials to be turned on/off
     based on that code specified as _contextCode_ in the _build.gradle_
     of the [course](../structure/index.html#courses).
-   `inline`: if specified and set to _false_ the block included from
    the partial gets a toggle be be shown/hidden and is hidden on first
    rendering.


## Inline
||partial-file path="using-shipkin/extensions/partial.md" context-code="ABC"  title="inline-partial"||


## With toggle
||partial-file path="using-shipkin/extensions/partial.md"  title="toggled-partial inline=false||

# Assignment submission

You can enable inline assignment submission, by adding a button with id
_assignment-submit-button_ and the assignment code as _data_ element to
the lab, which you wish to enable it for.
Email, cohort and course will be gathered from the context.

```html
<button type="button" id="assignment-submit-button" data-assignment="inline-assignment">Done!</button>

```

# Codebase download links

When a course is published in EPUB format, codebase zip files can
not reliably be provided via a download from within the EPUB itself.
In other words, a link to `../codebases/some-codebase.zip` will not
work using all EPUB readers.
The means that the codebase downloads must hosted externally, and
we use GitHub releases in order to do this.

The codebase zip file will be made available at a URL of the following
form:

```bash
https://github.com/project/code-repo/releases/download/basename-release-x.y.z/codebase-name.zip
```

where _basename_ is the value of the `baseName` build property.

So if a course with a basename of `shipkin-course` had
a codebase named `shipkin-examples` hosted in the
`https://github.com/platform-acceleration-lab/shipkin-course-code.git`
repository, then for release 8.7.0 of this course the URL would be:

```bash
https://github.com/platform-acceleration-lab/shipkin-course-code/releases/download/shipkin-course-release-8.7.0/shipkin-examples.zip
```

For every codebase there will be an automatically defined
"[link reference](https://spec.commonmark.org/0.29/#link-reference-definitions)"
of the form `[codebase:codebase-name]`.
So to refer to the codebase download described above you would do
something like this:

```bash
You can [download the codebase][codebase:shipkin-examples] right now!
```

You can verify whether a codebase release is available at the right
location by running the Gradle `checkPublishedCodebaseLinks`.
You would not normally run this during course development as
publication of such artefacts should be taken care of by a CI
pipeline.

The Gradle task `publishCodebaseReleases` can be used to upload the
codebase files to an appropriate GitHub release.
When using this task you will need to provide a
[GitHub access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
that has sufficient permission to be able to create releases in the codebase
repository.
You must supply the token with the `-PgithubAccessToken` option, for example:

```
./gradlew publishCodebaseReleases -PgithubAccessToken=1a2b3c4d5e6f7890
```
