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
1.  `toleratedErrorCodes` is a list of EPUB validation error codes that
    will be ignored, described further below.
1. `presentationFormat`, described in [Embedded presentations](#embedded-presentations)
    below.

# EPUB issues and good practices

## XHTML requirements

Strictly, EPUB content should be in [XHTML](https://www.w3.org/TR/xhtml1/)
format.
XHTML differs from HTML in that tags follow XML style and there is an
absolute requirement that all opening tags must be closed.
So, for example, the `<img>` tag must be closed either with an explicit
`</img>` tag or be self-closing, as in `<img src="pic.jpg" />`.
The HTML generated from the document creation process will be parsed
and reformatted as XHTML automatically, so this should not be an issue.

However, EPUB is also very strict in the attributes that are permitted
on certain elements.
This will not be an issue for automatically generated content but may
be if you embed HTML directly.
For example, the following embedded HTML:

```HTML
<iframe src="https://docs.google.com/presentation/d/someid/embed"
  frameborder="0" width="100%" height="569"
  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
```

will fail to validate correctly because `frameborder`, `width`,
`mozallowfullscreen` and `webkitallowfullscreen` are not valid XHTML attributes.
In addition, the `allowfullscreen` attribute must have the value `allowfullscreen`.

An acceptable equivalent would be:

```html
<iframe src="https://docs.google.com/presentation/d/someid/embed"
  style="width: 100%; height: 60vh;" allowfullscreen="allowfullscreen"></iframe>
```

## Simplified content

The default Shipkin output contains a page footer and (for some pages)
a navigation "sidebar".
It also contains "instructor mode" content, which is hidden in normal
use.

EPUB documents already have built-in navigation capabilities.
The footer styling does not render well in EPUB readers, and it can mask
important content, especially on smaller screens.
The hidden content is inaccessible and useless within an EPUB reader.
For these reasons, these non-essential elements will not be included in
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
This applies also to the `location` property in the
[unit selection file](../shipkin-units/index.html) (`unit.json`).

The Shipkin `checkLinks` task will highlight these problems in
any of your normal markdown content, as will the
[EPUB validation](#epub-validation) process.
Please take particular care not to introduce these issues if you
add embedded HTML in your markdown documents or a custom theme.

## Embedded presentations

The use of PDF-format presentations within an EPUB is not supported.
Embedding an online presentation from Google Slides, not in PDF format,
does work (although, obviously, the content cannot then be read
offline).
Shipkin does, however, have the capability to convert Google Slides
presentations into SVG format and embed this into the output HTML.
This is the default behaviour when generating an EPUB.

The output format can be selected by using the `presentationFormat`
option either  in the build file or using `-PpresentationFormat=...`
on the command line.
The valid values for `presentationFormat` are:

* `default`: equivalent to `svg` in EPUB mode or `online` otherwise 
* `online`: embeds the online presentation in an `<iframe>`
* `pdf`: downloads and embeds a PDF-format version of the slides
* `svg`: converts the slides to SVG format and embeds those

Note that the SVG process is slow (typically taking 2-3 seconds per
slide) so it may be more convenient to use the `online` format during
course development and first checks of EPUB output.

You should also note that the choice of presentation format only
applies to slides embedded as a result of using the
`google-presentation` item type in a `unit.json` file.
Presentations that have been directly embedded will not be
converted.

## EPUB validation

Shipkin embeds the W3C's [epubcheck](https://github.com/w3c/epubcheck)
tool to perform validation against the EPUB3 standard.
The `epub` task will both generate an EPUB file and also run the
validation process on it.
If the validation finds any _fatal_ or _error_ serverity issues,
the build process will fail.
A list of the errors found will be printed, for example:

```
There are EPUB validation failures
=== RSC-007 ===
ERROR(RSC-007): ./courses/style-guide/build/epub/styleguide-20201118.epub/OEBPS/Text/guides/lab-acceptance/index.html(115,130):
Referenced resource "OEBPS/Text/using-shipkin/structure/index.html" could not be found in the EPUB.
The following error codes were tolerated: [RSC-006]
``` 

The errors are reported against the path of the file within the EPUB
archive.
When debugging such issues you can either unpack the `.epub` file
(it is a zip-format archive) or you will find the files that appear under
the `OEBPS/Text` path in the archive under equivalent
paths beneath the course `build/site` directory.

Every error type has a unique code, such as `RSC-007` in the above example.
If you are certain that the error will not, in practice, cause any issues with
the EPUB readers that you will be targetting, you can mark those codes as
"tolerated".
These errors will then not cause build failures.

By default, there is only one code that is tolerated.
This is code `RSC-006` which corresponds to the message:
"Remote resource reference not allowed; resource must be placed in the OCF".
This is usually caused by embedded remote fonts and presentation links.
These do not appear to cause issues for the majority of EPUB readers.

The list of codes that will be tolerated can be configured through the
`toleratedErrorCodes`
property in the Shipkin `epub` closure in a build file.
This value is a list of codes from `epubcheck` that should not cause an
error exit, for example, `['RSC-006', 'RSC-010', 'OPF-012']`.
Note that if this property is set then the `RSC-006` code must be explicitly
included if it is needed.

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

## Listing release URLs

Although the release URL is of a known form, you can obtain the URL of
the published assets for the current release (if any) by using the `listEpubAssetUrls`
task.
This, again, needs the `-PgithubAccessToken` option to be supplied.

Under normal circumstances there should only be a single asset for
a release of a course.
It is, however, possible for multiple URLs to be listed if a release is
re-published on different days.

## Managing pre-releases

When releases are published to GitHub they have the "pre-release" flag
set on them to indicate that they have not yet undergone a final review.
Once an EPUB has been reviewed, the `makeEpubReleaseFinal` task will
clear the pre-release flag from the GitHub release.
In order to remove redundant content, the `purgeEpubPreReleases`
task can be used to delete any pre-releases created before the current
release, regardless of whether it has yet been marked as "final" or not).
