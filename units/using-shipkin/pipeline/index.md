---
pageTitle: Pipeline
---

# Pipeline

Generate a Concourse pipeline for your application with:

```bash
./gradlew generatePipeline
```

This command assumes a __course.properties__ (optional) and
__pal.properties__ in the top level of the course.

The `generatePipeline` command reads the local `origin` git remote url
in order to set the url on Concourse.
If you would like to use another git remote, run

```bash
./gradlew generatePipeline -PremoteName=${REMOTE_NAME}
```

Create an archive pipeline with:

```bash
./gradlew generateArchivePipeline -Psubdomain=${COURSE_NAME} -Pversion=${COURSE_VERSION}
```

Push your pipeline with:

```bash
fly -t <target-name> set-pipeline -p ${COURSE_NAME} -c build/ci/pipeline.yml
```
