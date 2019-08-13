---
pageTitle: Shipkin Extensions
---

# Extensions
Shipkin currently offers two extensions to markdown.

## Github

One can insert code directly from the codebases included in your
`unit.json` file.
Use the extension by inserting the following snippet anywhere in a
markdown file.

```markdown
{{codebase-file codebase="prerequisite-code" path="build.gradle" lang="groovy" ref="master" hidden="false"}}
```

-   `codebase`: The codebase when the file is located, as listed in the
    `unit.json` file.
-   `path`: the path to the file relative to the codebase root.
-   `ref`: the branch or tag for the file.
-   `lang`: the programming language the code is in for highlighting.
-   `hidden`: boolean that specifies if the included file is visible,
    default is _true_.

The included file will look as follows.

{{codebase-file codebase="prerequisite-code" path="build.gradle" lang="groovy" ref="master" hidden="false"}}

## Partials

The other one can insert partials directly from a file in the course.
Use the extension by inserting the following snippet anywhere in a
markdown file.


```markdown
||partial-file path="using-shipkin/extensions/partial.md"  context-code="ABC" hidden=false title="Wonder partial||
||partial-file path="using-shipkin/extensions/partial.md"  context-code="ABC" hidden=true title="Wonder partial||
```

-   `title`: the title to display on the toggle.
-   `path`: the path to the file relative to the units root.
-   `context-code`: code that allows for partials to be turned on/off
     based on that code
-   `hidden`: if specified and set to _true_ the block included from the
     partial gets a toggle be be shown/hidden.

||partial-file path="using-shipkin/extensions/partial.md" context-code="ABC" hidden=false title="Magic-partial"||


**With toggle**
||partial-file path="using-shipkin/extensions/partial.md" context-code="ABC" hidden=true title="Magic-partial"||
