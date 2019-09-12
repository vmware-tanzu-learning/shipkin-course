---
pageTitle: Pipeline
---

# Pipeline

Shipkin can generate Concourse pipelines for publishing courses from a
project to PWS or to Amazon S3.

Generated pipelines optionally add student login credentials from an
optional `course.properties` file in each course directory.

## Generate for Pivotal Web Services

Generate a PWS pipeline for publishing all courses under a project with:

```bash
./gradlew  generatePWSPipeline
```

Amazon S3 deployment credentials and Cloud Foundry deployment details
must be placed in a required _course-level_ `pal.properties` file.
**Do not** check pal.properties files into source code control.


## Generate for Amazon S3

Create an Amazon S3 pipeline for all courses with:

```bash
./gradlew  generateS3Pipeline
```

Amazon S3 deployment credentials must be placed in a required
_project-level_ `pal.properties` file.
**Do not** check pal.properties files into source code control.


## Provide content Git details

The pipeline's git source url derives from your own local remote named
`origin` unless you specify another using the Gradle property
`remoteName`, for example:

```bash
./gradlew  generatePWSPipeline  -PremoteName=mcgonagall
```

Add the deployment `rsaKey` for your content's repository to the
required _project-level_ `pal.properties` file.
**Do not** check pal.properties into source code control.


## Push to Concourse

Push your generated pipeline with:

```bash
fly -t ${TARGET_NAME} set-pipeline -p ${PIPELINE_NAME} -c build/ci/courses-pws-pipeline.yml
```
or

```bash
fly -t ${TARGET_NAME} set-pipeline -p ${PIPELINE_NAME} -c build/ci/courses-s3-pipeline.yml
```
