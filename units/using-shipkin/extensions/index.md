---
pageTitle: Shipkin Extensions
---

# Extensions

Shipkin currently offers an extension to markdown which can include code
directly from Github.
It can be used by inserting the following snippet anywhere in a markdown
file.

```markdown
{{github-file owner="platform-acceleration-lab" repo="prerequisite-code"
path="build.gradle" lang="groovy" ref="master" hidden="false"}}
```

-   `owner`: Github org where the code lives.
-   `repo` the repository for the file.
-   `path` path to the file.
-   `ref` the branch or tag for the file.
-   `lang` the programming language the code is in for highlighting.
-   `hidden` boolean that specifies if the included file is visible,
    default is _true_.

The included file will look like this:

{{github-file owner="platform-acceleration-lab" repo="prerequisite-code" path="build.gradle" lang="groovy" ref="master" hidden="false"}}