---
pageTitle: Shipkin Extensions
---

# Extensions

Shipkin currently offers an extension to markdown which can include code
directly from Github.
It can be used by inserting the following snippet anywhere in a markdown
file.

```markdown
{{codebase-file codebase="prerequisite-code" path="build.gradle" lang="groovy" ref="master" hidden="false"}}
```

-   `codebase`: The codebase when the file is located, as listed in the
    __unit.json__ file.
-   `path` path to the file.
-   `ref` the branch or tag for the file.
-   `lang` the programming language the code is in for highlighting.
-   `hidden` boolean that specifies if the included file is visible,
    default is _true_.

The included file will look as follows.

{{codebase-file codebase="prerequisite-code" path="build.gradle" lang="groovy" ref="master" hidden="false"}}