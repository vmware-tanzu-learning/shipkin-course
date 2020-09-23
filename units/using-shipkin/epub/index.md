---
pageTitle: EPUB Creation and Publication
---

# EPUB creation

Shipkin can create a version of the content packaged in
[EPUB 3](https://www.w3.org/publishing/epub3/) format
by using the Gradle `epub` task.

You can configure various aspects of the EPUB creation process
by adding parameters to an `epub` configuration section within
the `shipkin` closure in your `build.gradle` file.
All of the parameters are optional, as is the `epub` closure itself.

{{codebase-file codebase="shipkin-course" path="courses/shipkin/build.gradle" lang="groovy" ref="master" hidden="true"}}

The valid parameters are:

1.  `coverForegroundColor` sets the foreground of the generated cover image.
1.  `coverBackgroundColor` sets the background of the generated cover image.
1.  `title` sets the title to be used on the cover, if different from the
    `courseTitle` used within the content.
1.  `buildDirectory` sets the directory where the EPUB file will be
    generated, which defaults to the `epub` sub-directory of the
    normal build directory.

# EPUB issues and good practices

## XHTML requirements

Strictly, EPUB content should be in [XHTML](https://www.w3.org/TR/xhtml1/)
format.
XHTML differs from HTML in that tags follow XML style and there is an
absolute requirement that all opening tags must be closed.
So, for example, the `<img>` tag must be closed either with an explicit
`</img>` tag or be self-closing, as in `<img src="pic.jpg" />`.

Closing of tags is not an issue when just creating markdown, as this
will be converted correctly.
It is, however, an issue if you create your own [theme](../theme/index.html)
template or embed HTML directly.

Having said that, in practice it appears that many EPUB readers offer
some latitude in their interpretation of XHTML, so some things that are
not *strictly* allowed, such as nesting `<ul>` within `<p>` elements, appear
to be permitted.

## Simplifying content

The default Shipkin output contains a page footer and (for some pages)
a navigation "sidebar".
It also contains "instructor mode" content, which is hidden in normal
use.

EPUB documents already have built-in navigation capabilities.
The footer styling does not render well in EPUB readers, and it can mask
important content, especially on smaller screens.
The hidden content is inaccessible and useless within an EPUB reader.
For these reasons, these non-essential elements should not be included in
the EPUB output.

When you generate content in the context of a Gradle `epub` task
the unnecessary elements will automatically be omitted.
However, it is possible that the generation process could pick up some
"unsimplified" content from the result of a previous build, so the
best way to generate an EPUB file is to run the following
command:

```bash
./gradlew clean epub
```

## Relative and implicit links

You can make reference to other content within an EPUB using
`<a>` links, in the normal HTML way, including making reference to
anchors within pages (e.g. `<a href="index.html#sheep-dogs">`).
However, there are a couple of restrictions that you need to
be aware of.

The first restriction is that all links to other EPUB content must
be relative.
Any link starting with a "/" *will not* resolve to a file at the
root of the EPUB content.
So, for example, a link to `/index.html` will not reference the
top-level index file.
Instead, you must use relative links, such as `../index.html`.

The second restriction is that a reference to a directory will not
automatically resolve to an index file within that directory.
In other words a reference to something like `../appendix` will
not be interpreted as `../appendix/index.html` as it might be
by a web server.

The Shipkin `checkLinks` task will highlight these problems in
any of your normal markdown content.
Please take particular care not to introduce these issues if you
add embedded HTML in your markdown documents or a custom theme.

## Embedded presentations

The use of PDF-format presentations within an EPUB is not supported.
Embedding a presentation from Google Slides, not in PDF format,
does work (although, obviously, the content cannot then be read
offline).
In practice this means that when the EPUB task is run you must not
use the `-PpdfPresentations` option.

A solution to fully embed presentation content within the EPUB will be
delivered in due course.

# Publishing generated EPUB files

You can use Gradle task `publishEpub` can be used to publish the
generated EPUB file to an appropriate GitHub release.
When using this task you will need to provide a
[GitHub access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
that has sufficient permission to be able to create releases in the
course repository.
You must supply the token with the `-PgithubAccessToken` option, for example:

```
./gradlew clean epub publishEpub -PgithubAccessToken=1a2b3c4d5e6f7890
```

The EPUB file will be made available at a URL of the following
form:

```bash
https://github.com/project/course-repo/releases/download/basename-release-x.y.z/basename-YYYYMMDD.epub
```

where _basename_ is the value of the `baseName` build property and
_YYYYMMDD_ is the creation date.

So if a course with a basename of `shipkin-intro` was held in the
`https://github.com/platform-acceleration-lab/shipkin-course.git`
repository, then for release 8.7.0 of this course made on 23rd September 2020
the URL would be:

```bash
https://github.com/platform-acceleration-lab/shipkin-course/releases/download/shipkin-intro-release-8.7.0/shipkin-intro-20200923.zip
```
