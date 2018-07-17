---
pageTitle: Creating a lab

discussionPoints:
  - Why use Shipkin.
  - Take a look at [Shipkin](http://shipk.in)
  - Core features of Shipkin.
wrapUp:
  - What we have learned about Shipkin.
  - Keep it simple.
instructorNotes: |
  ## Why use Shipkin

  Shipkin makes building courses easy and fun. It has some great features:

  - Multiple courses per repo.
  - Units can be shared across courses.
  - Customizable themes.
  - Extensions.

favoriteAnimal: turtle
---

# Creating a Lab

## Markdown

The body of the lab content is written in markdown.
Shipkin uses the [Commonmark](http://commonmark.org/) flavor of
Markdown, with a few [extensions](../extensions) (the [Commonmark Java](https://github.com/atlassian/commonmark-java) implementation, to be precise).

## Top matter

The top matter is an optional block at the beginning of a markdown file.

```yaml

---
pageTitle: Creating a lab

discussionPoints:
  - Why use Shipkin.
  - Take a look at [Shipkin](http://shipk.in)
  - Core features of Shipkin.
wrapUp:
  - What we have learned about Shipkin.
  - Keep it simple.
instructorNotes: |
  ## Why use Shipkin

  Shipkin makes building courses easy and fun. It has some great features:

  - Multiple courses per repo.
  - Units can be shared across courses.
  - Customizable themes.
  - Extensions.

favoriteAnimal: turtle
---

```

## Instructor mode
Click on the course version at the bottom of the page
to enable instructor mode. Then press ? to see the options.

The `pageTitle` will be rendered as the subtitle of the page on the
current page header banner and appended to the html-title of the page.

The `discussionPoints` can be referenced like this
`::discussionPoints::` anywhere in the markdown.

::discussionPoints::

Discussion Points are viewable as a slide while in instructor mode.


The `wrapUp` can be referenced like this `::wrapUp::` anywhere in the
markdown.

::wrapUp::

Wrap up is viewable as a slide while in instructor mode.
If no wrap up is available, the wrap up slide will show the discussion
points.

The `instructorNotes` can consist of arbitrary markdown to be used by
instructors during delivery.

Other variables in the top matter can be referenced within the markdown.
For example, the `favoriteAnimal` can be referenced like this
`Animal: ::favoriteAnimal::` anywhere in the markdown and will be
rendered as: ::favoriteAnimal::.
