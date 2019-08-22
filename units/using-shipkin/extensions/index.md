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

