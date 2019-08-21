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


```markdown
||partial-file path="using-shipkin/extensions/partial.md"  context-code="ABC" hidden=false title="wonder-partial||
||partial-file path="using-shipkin/extensions/partial.md"  context-code="ABC" hidden=true title="wonder-partial||
||partial-file path="using-shipkin/extensions/partial.md"  context-code="XYZ" hidden=true title="wonder-partial||
||partial-file path="using-shipkin/extensions/partial.md"  hidden=true title="wonder-partial||
||partial-file path="using-shipkin/extensions/partial.md"  hidden=true title="call-out-partial call-out=true||
||partial-file path="using-shipkin/extensions/partial.md"  title="call-out-partial call-out=true||

```

-   `title`: the title to display on the toggle, needs to be one word.
-   `path`: the path to the file relative to the units root.
-   `context-code`: code that allows for partials to be turned on/off
     based on that code specified in as _contextCode_ in the
     _build.gradle_ of the course. The third inclusion of the partial
     will not be rendered since it is not matching the _contextCode_ set
     in the _build.gradle_ for the Shipkin [course](../structure/index.html#courses).
     The fourth one will render since it does not specify a
     _context-code_.
-   `hidden`: if specified and set to _true_ the block included from the
     partial gets a toggle be be shown/hidden and is hidden by default.
-   `call-out`: if set to _true_ the block included from the partial is
    reduced in font size and gets gray line on the left.

## Inline - without toggle
||partial-file path="using-shipkin/extensions/partial.md" context-code="ABC" hidden=false title="Magic-partial"||


## Inline - with toggle - starts out hidden
||partial-file path="using-shipkin/extensions/partial.md" context-code="ABC" hidden=true title="Magic-partial"||

## Inline - context code not matching
||partial-file path="using-shipkin/extensions/partial.md" context-code="XYZ" hidden=true title="Magic-partial"||


## Inline - with toggle - no context code specified
||partial-file path="using-shipkin/extensions/partial.md" hidden=true title="Magic-partial"||


## Call out - with toggle
||partial-file path="using-shipkin/extensions/partial.md"  hidden=true title="call-out-partial call-out=true||


## Call out - no toggle
||partial-file path="using-shipkin/extensions/partial.md"  title="call-out-partial call-out=true||
