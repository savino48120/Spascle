# SPASCLE — Software Requirements Specification (SRS)

**Product:** SPASCLE — Scientific Programming and Computational Science Learning Environment  
**Version:** 2.0  
**Release scope:** MVP / Release 1, with Release 2 requirements identified separately  
**Date:** November 2026  
**Status:** Revised draft  

---

# 1. Purpose

This Software Requirements Specification (SRS) defines the functional and non-functional requirements for SPASCLE.

It translates the product requirements into system-level requirements that can guide design, implementation, and testing. It specifies what the system must do without committing the project to a particular programming language, framework, database, hosting provider, or infrastructure architecture.

The primary focus is the MVP: a browser-based learning platform that introduces Python programming through scientific examples, interactive coding exercises, automated assessment, AI-assisted feedback, and guided computational labs.

Requirements for authentication, learner progress tracking, content administration, and content review are documented separately as Release 2 requirements.

# 2. Scope

## 2.1 MVP scope

The MVP shall provide:

1. A public landing page introducing SPASCLE and its learning objectives.
2. A publicly accessible Python learning area that does not require registration or sign-in.
3. Structured course, module, and lesson navigation.
4. Beginner-friendly explanations and programming examples.
5. Materials science as the default scientific context.
6. A global scientific-context selector and lesson-level context overrides.
7. An in-browser Python code editor and execution environment.
8. Support for the Python standard library and approved scientific packages, including NumPy and Matplotlib.
9. Conceptual quizzes and coding exercises.
10. Automated assessment of supported exercises.
11. Scores, test outcomes, and contextual feedback.
12. AI-assisted hints, explanations, and error interpretation.
13. Guided computational labs based on scientific problems, initially focused on computational materials science.
14. Temporary coding sessions, with practical options to copy or download code.
15. AI-assisted preparation of instructional content, subject to human review and approval before publication.

## 2.2 Release 2 scope

Release 2 shall introduce the following capabilities in sequence.

### Release 2A — Authentication and learner progress

- Learner registration.
- Sign-in and sign-out.
- Display of authenticated status and profile avatar.
- Persistent lesson and course progress.
- Overall course completion percentage.
- Visual indicators for completed course items in the navigation sidebar.
- Ability to resume learning across sessions.

### Release 2B — Administrator functionality

This phase follows the implementation of authentication.

- Administrator accounts.
- Restricted administrator access.
- Role-based permissions.
- Creation of courses, modules, lessons, and learning activities.
- Editing and revision of course content.
- Management of published content.
- Management of reviewer access and permissions.

### Release 2C — Reviewer functionality

This phase follows administrator functionality.

- Reviewer accounts.
- Restricted reviewer access.
- Assignment or allocation of content for review.
- Review and revision of course content within assigned permissions.
- Verification of scientific accuracy, educational quality, code examples, exercises, and answer keys.

Administrators and reviewers may revise course content, subject to their respective permissions.

## 2.3 Later releases

The following are outside the MVP and Release 2 scope:

- Bash learning pathway.
- Additional programming languages.
- Additional scientific learning pathways and subject areas.
- Managed classes and instructor-led cohorts.
- Institutional dashboards.
- Payment and subscription functionality.
- Native mobile applications.
- Full-featured persistent coding workspaces.
- Heavy computational workloads, including production-scale DFT and HPC simulations.

# 3. User Classes and Roles

## 3.1 MVP user classes

### 3.1.1 Visitor / Learner

A visitor or learner accesses the platform without creating an account.

The user shall be able to:

- Browse available Python learning content.
- Navigate courses, modules, and lessons.
- Select a scientific context.
- Read explanations and examples.
- Write and execute Python code.
- Attempt exercises and knowledge checks.
- Complete guided labs.
- Receive automated assessment results and AI-assisted feedback.
- Copy or download code where supported.

### 3.1.2 Content Maintainer

A content maintainer prepares and maintains learning materials through the internal content-production process.

The role may use AI-assisted content generation, editing, and validation tools.

A user-facing administrator or reviewer interface is not required in the MVP.

### 3.1.3 Content Reviewer

Content review is an internal quality-control activity during the MVP.

Reviewers verify the accuracy, clarity, and suitability of learning materials before publication. A dedicated reviewer account and interface are deferred to Release 2.

## 3.2 Release 2 user classes

| Role | Description |
|---|---|
| Learner | An authenticated user whose learning progress can be saved across sessions. |
| Administrator | An authorized user who creates, edits, revises, and manages learning content and reviewer access. |
| Reviewer | An authorized user who reviews and revises assigned content within defined permissions. |

# 4. Functional Requirements

Functional requirements are grouped by system capability. Requirements marked **MVP** are necessary for Release 1. Requirements marked **Release 2** are deferred.

## 4.1 Landing Page and Public Access

### FR-001 — Public landing page [MVP]

The system shall provide a publicly accessible landing page that introduces SPASCLE, explains its purpose, and directs visitors to the learning area.

### FR-002 — Product information [MVP]

The landing page shall communicate:

- The purpose of the platform.
- The intended audience.
- The initial Python learning pathway.
- The use of scientific examples and applications.
- A clear means of entering the learning area.

### FR-003 — Public learning access [MVP]

The system shall allow visitors to access published Python learning content without registration or authentication.

### FR-004 — No authentication dependency [MVP]

The system shall not require a learner account to browse lessons, execute supported coding exercises, or access MVP learning activities.

### FR-005 — Public content visibility [MVP]

The system shall expose published learning content to public visitors while preventing unpublished or draft content from being presented as published learner-facing material.

## 4.2 Course Organization and Navigation

### FR-006 — Course hierarchy [MVP]

The system shall organize learning content according to the following hierarchy:

**Course → Modules/Topics → Lessons → Content Sections and Activities**

### FR-007 — Course navigation sidebar [MVP]

The system shall provide a course navigation sidebar that displays the available modules and their associated lessons.

### FR-008 — Central lesson area [MVP]

The system shall display the selected lesson in a central content area.

The lesson area shall distinguish between:

- Explanations.
- Code examples.
- Exercises.
- Knowledge checks.
- Guided lab activities, where applicable.

### FR-009 — Lesson navigation [MVP]

The system shall allow learners to move between lessons and modules using the course navigation.

### FR-010 — Lesson navigation state [MVP]

The system shall identify the currently selected lesson in the navigation interface.

### FR-011 — Course content ordering [MVP]

The system shall present courses, modules, lessons, and their sections in a defined and consistent order.

## 4.3 Scientific Context Selection

### FR-012 — Default scientific context [MVP]

The system shall use materials science as the default scientific context for supported examples, exercises, and learning activities.

### FR-013 — Global scientific-context selector [MVP]

The system shall provide a global scientific-context selector that allows learners to choose their preferred scientific context across the learning area.

### FR-014 — Supported scientific contexts [MVP]

The system shall support context-specific learning content where such content has been prepared and approved.

Potential contexts include:

- Materials science.
- Chemistry.
- Physics.
- Biology.
- Biochemistry.
- General programming.

The availability of a context shall depend on the actual content prepared for the relevant lesson.

### FR-015 — Lesson-level context selector [MVP]

The system shall allow learners to select an alternative scientific context within an individual lesson where suitable alternative content exists.

### FR-016 — Context precedence [MVP]

When a learner selects a context at the lesson level, that selection shall override the global context preference for the current lesson only.

The lesson-level selection shall not silently modify the global context preference.

### FR-017 — Context visibility [MVP]

The system shall clearly identify the scientific context currently being used for lesson examples and applicable activities.

### FR-018 — Context availability [MVP]

The system shall determine whether suitable content exists for the selected context and lesson.

### FR-019 — Unavailable context content [MVP]

When suitable content is unavailable for a selected context, the system shall communicate this clearly.

The system shall not present an unrelated example as though it were specific to the selected scientific context.

### FR-020 — Context fallback [MVP]

Where appropriate alternative content exists, the system shall offer that content to the learner when the requested context is unavailable.

## 4.4 Lesson Content and Instructional Materials

### FR-021 — Lesson explanations [MVP]

The system shall display instructional explanations appropriate for learners with little or no previous programming experience.

### FR-022 — Code examples [MVP]

The system shall present Python code examples associated with the concepts explained in the lesson.

### FR-023 — Code example explanation [MVP]

The system shall provide explanatory text for instructional code examples so that learners can understand the purpose and behavior of the code.

### FR-024 — Progressive instruction [MVP]

The learning content shall introduce programming concepts progressively, building on concepts introduced in earlier lessons where appropriate.

### FR-025 — Scientific relevance [MVP]

Scientific examples shall illustrate the programming concept being taught and shall not introduce unnecessary scientific complexity that obscures the programming objective.

### FR-026 — Learning objectives [MVP]

Lessons and guided labs shall identify their relevant learning objectives.

### FR-027 — Content distinction [MVP]

The system shall distinguish instructional explanations, examples, exercises, knowledge checks, and lab activities through appropriate content presentation.

## 4.5 In-Browser Python Coding Environment

### FR-028 — Code editor [MVP]

The system shall provide an in-browser code editor that allows learners to write and modify Python code.

### FR-029 — Code execution [MVP]

The system shall allow learners to execute supported Python code within the browser-based learning environment.

### FR-030 — Execution output [MVP]

The system shall display the output produced by successfully executed code.

### FR-031 — Execution errors [MVP]

When code execution fails, the system shall display an understandable error message or error output that helps the learner identify the problem.

### FR-032 — Code editing and rerunning [MVP]

The system shall allow learners to modify code and execute it again without requiring them to restart the entire lesson.

### FR-033 — Python standard library [MVP]

The execution environment shall support the Python standard library.

### FR-034 — Approved scientific packages [MVP]

The execution environment shall support an approved set of scientific Python packages.

The initial package set shall include:

- NumPy.
- Matplotlib.

Additional packages may be included following technical and security review.

### FR-035 — Package availability [MVP]

The system shall make supported packages available to learners without requiring learners to install them manually.

### FR-036 — Temporary coding sessions [MVP]

The system shall provide temporary coding sessions for learners to write and execute code.

The MVP shall not require a persistent, account-linked coding workspace.

### FR-037 — Code reuse [MVP]

The system shall provide a practical way for learners to copy their code.

### FR-038 — Code download [MVP]

Where supported by the implementation, the system shall allow learners to download their code for use outside the platform.

### FR-039 — Execution isolation [MVP]

The system shall execute learner-submitted code within an isolated execution environment.

The execution environment shall prevent learner code from obtaining unauthorized access to the application, host system, other learners' sessions, or restricted resources.

### FR-040 — Execution resource limits [MVP]

The system shall enforce appropriate execution limits to prevent excessively long-running or resource-intensive code from affecting the availability of the learning platform.

### FR-041 — Unsupported operations [MVP]

The system shall restrict unsupported operations, including arbitrary network access, unrestricted filesystem access, and unapproved package installation.

### FR-042 — Lightweight computation [MVP]

The execution environment shall be designed for instructional exercises and lightweight scientific computations rather than production-scale scientific simulations.

## 4.6 Exercises and Knowledge Checks

### FR-043 — Exercise availability [MVP]

The system shall provide exercises associated with relevant lessons.

### FR-044 — Exercise instructions [MVP]

Each exercise shall provide clear instructions describing the task and expected learner action.

### FR-045 — Exercise types [MVP]

The system shall support relevant exercise types, including:

- Conceptual questions.
- Multiple-choice questions.
- Short-answer or knowledge-check questions, where appropriate.
- Python coding exercises.

### FR-046 — Exercise submission [MVP]

The system shall allow learners to submit answers or code for assessment.

### FR-047 — Exercise assessment [MVP]

The system shall assess submitted answers against predefined answer criteria or automated tests, depending on the exercise type.

### FR-048 — Coding exercise tests [MVP]

For coding exercises, the system shall execute the submitted code against predefined test cases or other defined assessment criteria.

### FR-049 — Assessment outcomes [MVP]

The system shall communicate the outcome of an assessment to the learner.

Where applicable, the outcome shall include:

- Whether the answer passed or failed.
- Which tests passed or failed.
- The score or assessment result.
- Relevant feedback.

### FR-050 — Exercise feedback [MVP]

The system shall provide feedback that helps learners understand errors and improve their answers.

### FR-051 — Exercise retry [MVP]

The system shall allow learners to revise and resubmit an answer or code submission where the exercise supports repeated attempts.

### FR-052 — Assessment consistency [MVP]

The system shall apply consistent assessment criteria to equivalent submissions.

### FR-053 — Primary grading criteria [MVP]

Automated tests and explicitly defined assessment criteria shall serve as the primary basis for grading exercises.

AI-generated feedback shall not silently replace or override the defined grading criteria.

## 4.7 AI-Assisted Learning Support

### FR-054 — AI-generated hints [MVP]

The system shall provide AI-assisted hints for supported exercises and learning activities.

### FR-055 — Contextual AI feedback [MVP]

The system shall use relevant learner input, exercise instructions, and assessment results to generate contextual feedback where AI assistance is enabled.

### FR-056 — Error explanation [MVP]

The system shall support AI-generated explanations of programming errors to help learners understand why their code failed.

### FR-057 — Learning guidance [MVP]

The system shall provide AI-assisted explanations or suggestions that help learners understand relevant concepts and improve their attempts.

### FR-058 — Feedback relevance [MVP]

AI-generated feedback shall be relevant to the current lesson, exercise, or lab activity.

### FR-059 — Assessment transparency [MVP]

The system shall distinguish AI-generated guidance from deterministic assessment outcomes.

### FR-060 — AI service failure [MVP]

If the AI service is unavailable or fails to generate a response, the system shall communicate the failure without preventing access to the underlying lesson or exercise.

### FR-061 — AI usage limitations [MVP]

The system shall apply appropriate usage and resource controls to AI-assisted features to maintain platform reliability and manage operating costs.

### FR-062 — No standalone AI tutor requirement [MVP]

The MVP shall provide AI assistance within relevant learning activities. It shall not require a separate, unrestricted, standalone AI tutor interface.

## 4.8 Guided Computational Labs

### FR-063 — Guided lab availability [MVP]

The system shall provide guided computational lab activities as part of the learning experience.

### FR-064 — Lab structure [MVP]

Each guided lab shall provide, where applicable:

- A lab title and description.
- Learning objectives.
- A scientific problem or task.
- Step-by-step instructions.
- Starter code or relevant input data.
- Expected learner actions.
- Assessment criteria.
- Feedback or guidance.

### FR-065 — Lab progression [MVP]

The system shall present lab instructions in a structured sequence that allows learners to follow the activity step by step.

### FR-066 — Lab code execution [MVP]

The system shall allow learners to write and execute Python code as part of supported lab activities.

### FR-067 — Lab assessment [MVP]

The system shall assess learner outputs against the defined criteria for the lab activity.

### FR-068 — Lab feedback [MVP]

The system shall provide relevant feedback based on the learner's submitted work and assessment results.

### FR-069 — Scientific scope [MVP]

Initial guided labs shall focus primarily on computational materials science.

### FR-070 — Computational limitations [MVP]

Guided labs shall use lightweight computations suitable for the MVP execution environment.

They shall not require unrestricted access to HPC resources or production-scale DFT software.

## 4.9 AI-Assisted Content Preparation and Quality Control

### FR-071 — AI-assisted content drafting [MVP]

The content-production workflow shall support the use of AI to prepare draft learning materials, including:

- Lesson explanations.
- Programming examples.
- Exercises.
- Knowledge checks.
- Guided lab instructions.
- Hints and feedback templates.

### FR-072 — Human review requirement [MVP]

AI-generated instructional content shall undergo human review before publication.

### FR-073 — Content approval [MVP]

Only content that has passed the required review and approval process shall be made available as published learning material.

### FR-074 — Scientific accuracy review [MVP]

Content review shall consider the scientific accuracy and appropriateness of scientific examples.

### FR-075 — Programming accuracy review [MVP]

Content review shall verify that instructional code examples and starter code are syntactically and functionally appropriate.

### FR-076 — Exercise validation [MVP]

Exercises and knowledge checks shall be checked for clear instructions, appropriate difficulty, and consistency with their intended learning objectives.

### FR-077 — Assessment validation [MVP]

Answer keys, test cases, and grading criteria shall be checked before associated exercises are published.

### FR-078 — Lab validation [MVP]

Guided labs shall be checked for scientific accuracy, code functionality, feasibility within the execution environment, and clarity of instructions.

### FR-079 — Content revision [MVP]

The content-production process shall allow maintainers to revise instructional materials following review or validation.

A dedicated user-facing content-management interface is not required for the MVP.

## 4.10 Authentication and Learner Progress

The following requirements are deferred to Release 2.

### FR-080 — Learner registration [Release 2A]

The system shall allow visitors to create learner accounts.

### FR-081 — Learner sign-in and sign-out [Release 2A]

The system shall allow registered learners to sign in and sign out securely.

### FR-082 — Authenticated status [Release 2A]

The system shall display the learner's authenticated status when signed in.

### FR-083 — Profile avatar [Release 2A]

The system shall provide a profile avatar or equivalent profile access element for authenticated learners.

### FR-084 — Persistent progress [Release 2A]

The system shall save learner progress against the authenticated learner's account.

### FR-085 — Lesson completion [Release 2A]

The system shall record completed lessons or course items for authenticated learners.

### FR-086 — Course completion percentage [Release 2A]

The system shall calculate and display the overall course completion percentage based on the defined course completion rules.

### FR-087 — Sidebar completion indicators [Release 2A]

The system shall visually identify completed course items in the course navigation sidebar.

### FR-088 — Resume learning [Release 2A]

The system shall allow authenticated learners to resume learning across sessions using their saved progress.

### FR-089 — Public access retained [Release 2A]

The introduction of authentication shall not automatically make public learning content inaccessible to visitors who are not signed in, unless a later product decision explicitly changes this requirement.

## 4.11 Administrator Functionality

The following requirements are deferred to Release 2B.

### FR-090 — Administrator accounts [Release 2B]

The system shall support designated administrator accounts.

### FR-091 — Restricted administrator access [Release 2B]

The system shall restrict administrator functions to authorized users.

### FR-092 — Role-based permissions [Release 2B]

The system shall enforce permissions associated with administrator roles.

### FR-093 — Content creation [Release 2B]

Authorized administrators shall be able to create courses, modules, lessons, and learning activities.

### FR-094 — Content editing and revision [Release 2B]

Authorized administrators shall be able to edit and revise existing learning content.

### FR-095 — Content publication management [Release 2B]

Authorized administrators shall be able to manage the publication status of learning materials.

### FR-096 — Reviewer access management [Release 2B]

Authorized administrators shall be able to create, manage, and assign reviewer access and permissions.

## 4.12 Reviewer Functionality

The following requirements are deferred to Release 2C.

### FR-097 — Reviewer accounts [Release 2C]

The system shall support designated reviewer accounts.

### FR-098 — Restricted reviewer access [Release 2C]

The system shall restrict reviewer functions to authorized users.

### FR-099 — Content review [Release 2C]

Authorized reviewers shall be able to access content assigned for review.

### FR-100 — Content revision [Release 2C]

Authorized reviewers shall be able to revise course content within their assigned permissions.

### FR-101 — Review quality criteria [Release 2C]

The review workflow shall support verification of:

- Scientific accuracy.
- Educational clarity and quality.
- Programming code functionality.
- Exercise instructions.
- Assessment criteria and answer keys.
- Guided lab instructions and expected outputs.

### FR-102 — Permission enforcement [Release 2C]

The system shall ensure that reviewer actions remain within the permissions granted to each reviewer.

# 5. Non-Functional Requirements

## 5.1 Usability

### NFR-001 — Beginner usability

The interface shall be understandable to learners with little or no previous programming experience.

### NFR-002 — Clear instructions

The system shall present instructions, labels, and error messages in language appropriate for beginner learners.

### NFR-003 — Consistent interaction

Navigation, lesson presentation, code execution, context selection, and assessment interactions shall behave consistently across the learning area.

### NFR-004 — Clear feedback

The system shall communicate execution results, assessment outcomes, and AI-assisted feedback in a manner that learners can understand.

## 5.2 User Interface and Responsiveness

### NFR-005 — Responsive interface

The landing page and learning area shall remain usable across common desktop, tablet, and mobile viewport sizes.

### NFR-006 — Readability

Lesson content, code examples, output, and assessment results shall be presented in a readable format.

### NFR-007 — Interface consistency

The course navigation sidebar, central lesson area, coding interface, and activity components shall follow a consistent visual and interaction design.

## 5.3 Performance

### NFR-008 — Page responsiveness

Common navigation actions and lesson loading shall remain responsive under the expected MVP pilot workload.

### NFR-009 — Code execution responsiveness

The execution environment shall return results within a reasonable time for supported instructional exercises.

### NFR-010 — Resource management

Code execution and AI-assisted features shall use resource limits appropriate to the expected low-traffic MVP workload.

### NFR-011 — Failure isolation

A failed code execution or AI request shall not cause the entire learning interface to become unavailable.

## 5.4 Reliability and Availability

### NFR-012 — Platform stability

The system shall remain stable during normal learning activities and expected pilot usage.

### NFR-013 — Error recovery

The system shall handle invalid submissions, execution failures, unavailable content, and service errors without exposing internal system details unnecessarily.

### NFR-014 — Service independence

Failure of an optional AI-assisted feature shall not prevent learners from accessing the associated instructional content.

## 5.5 Security

### NFR-015 — Code execution isolation

The code execution environment shall isolate learner code from the application infrastructure and other users' execution sessions.

### NFR-016 — Resource restrictions

The execution environment shall enforce appropriate limits on CPU time, memory, execution duration, and other relevant resources.

### NFR-017 — Restricted access

Unpublished content and restricted administrative or reviewer functions shall not be accessible to unauthorized users.

### NFR-018 — Input validation

The system shall validate user inputs and submissions before processing them.

### NFR-019 — Protection of application resources

Learner-submitted code shall not be permitted to access secrets, credentials, internal application resources, or unrestricted host filesystem resources.

## 5.6 Privacy

### NFR-020 — Minimal learner data collection

The MVP shall collect only the information necessary to provide the public learning experience and its associated services.

### NFR-021 — No account-based tracking in MVP

The MVP shall not require or imply account-linked learner progress tracking.

### NFR-022 — Responsible AI data handling

Information sent to AI services shall be limited to what is necessary to generate the requested learning assistance.

## 5.7 Accessibility

### NFR-023 — Keyboard accessibility

Core navigation and learning controls shall be usable through keyboard interaction where technically applicable.

### NFR-024 — Semantic structure

The interface shall use meaningful headings, labels, and semantic structures to support accessibility.

### NFR-025 — Visual accessibility

The interface shall maintain readable text, sufficient contrast, and clear visual distinctions between interactive and non-interactive elements.

## 5.8 Content Quality

### NFR-026 — Scientific correctness

Published scientific explanations and examples shall be reviewed for scientific accuracy.

### NFR-027 — Code correctness

Published code examples and lab starter code shall be validated for functionality within the supported execution environment.

### NFR-028 — Assessment correctness

Published exercises shall have defined and validated assessment criteria.

### NFR-029 — Instructional consistency

Lessons shall use consistent terminology, formatting, and instructional conventions.

### NFR-030 — Context integrity

The system shall not misrepresent generic or unrelated examples as context-specific scientific content.

## 5.9 Maintainability and Extensibility

### NFR-031 — Modular content organization

The system shall organize courses, modules, lessons, exercises, and labs in a manner that supports content updates without requiring unnecessary changes to unrelated learning materials.

### NFR-032 — Extensible context support

The content structure shall support additional scientific contexts without requiring the redesign of the entire learning area.

### NFR-033 — Extensible learning pathways

The system shall be designed to accommodate future programming languages and learning pathways, including Bash.

### NFR-034 — Future role support

The system's design shall not prevent the later introduction of learner, administrator, and reviewer roles.

## 5.10 Cost and Operational Constraints

### NFR-035 — Lightweight infrastructure

The MVP shall be designed for a low-traffic pilot and avoid unnecessary infrastructure complexity.

### NFR-036 — Controlled AI usage

AI-assisted functionality shall incorporate appropriate usage controls to manage service costs.

### NFR-037 — Controlled computation

The system shall prioritize lightweight instructional computation and shall not depend on unrestricted compute resources.

# 6. Business Rules and System Constraints

The following rules govern the behavior and scope of SPASCLE.

| ID | Business rule |
|---|---|
| BR-001 | Materials science is the default scientific context. |
| BR-002 | The global scientific-context selector establishes the preferred context across the learning area. |
| BR-003 | A lesson-level context selection overrides the global preference for that lesson only. |
| BR-004 | The system must communicate when suitable context-specific content is unavailable. |
| BR-005 | Unrelated examples must not be presented as though they belong to the selected scientific context. |
| BR-006 | Learning content must be publicly accessible without authentication in the MVP. |
| BR-007 | The MVP does not provide reliable account-linked persistent learner progress. |
| BR-008 | Temporary coding sessions do not constitute persistent learner workspaces. |
| BR-009 | Automated tests and defined criteria are the primary basis for exercise grading. |
| BR-010 | AI-generated feedback supplements assessment and does not silently replace defined grading criteria. |
| BR-011 | AI-generated instructional content must undergo human review before publication. |
| BR-012 | The initial coding environment supports Python and approved packages, including NumPy and Matplotlib. |
| BR-013 | Code execution is limited to lightweight instructional and scientific computations. |
| BR-014 | Authentication and persistent learner progress are introduced in Release 2A. |
| BR-015 | Administrator functionality follows authentication in Release 2B. |
| BR-016 | Reviewer functionality follows administrator functionality in Release 2C. |
| BR-017 | Administrators and reviewers may revise content within their respective permissions. |
| BR-018 | Bash is planned for a later release and is not part of the MVP or the initial Release 2 scope. |

# 7. Data Requirements

This section defines the logical information the system must manage. It does not prescribe a database technology or physical schema.

## 7.1 MVP data requirements

The MVP shall manage information representing the following entities.

| Entity | Purpose |
|---|---|
| Course | Represents a learning pathway, initially Python. |
| Module | Groups related lessons within a course. |
| Lesson | Represents an individual instructional unit. |
| Lesson section | Stores explanations, examples, and other lesson content. |
| Scientific context | Represents a scientific domain used in instructional examples. |
| Context-specific content | Associates relevant content with a particular scientific context. |
| Code example | Stores instructional Python examples. |
| Exercise | Represents a learner activity or programming task. |
| Knowledge check | Represents a conceptual assessment activity. |
| Test case | Defines expected outcomes for supported coding exercises. |
| Assessment result | Represents the result of an exercise or knowledge check during a session. |
| Guided lab | Represents a structured computational learning activity. |
| Lab step | Represents an individual instruction or activity within a lab. |
| Starter code/data | Provides input materials for coding exercises and labs. |
| Feedback content | Represents predefined or AI-generated hints and explanations. |
| Package configuration | Identifies packages approved for the execution environment. |

## 7.2 Release 2 data requirements

Release 2 shall introduce additional information representing:

- Learner accounts.
- Authentication credentials or external identity references.
- Learner profile information.
- Learner progress records.
- Lesson completion records.
- Course completion calculations or stored summaries.
- Administrator accounts and permissions.
- Reviewer accounts and permissions.
- Content review assignments.
- Content revisions and publication status.
- Relevant content-management records.

## 7.3 Data integrity requirements

The system shall ensure that:

1. Lessons are associated with valid modules.
2. Modules are associated with valid courses.
3. Exercises and knowledge checks are associated with relevant lessons.
4. Test cases are associated with the exercises they assess.
5. Context-specific content is associated with a valid scientific context.
6. Guided lab steps belong to valid guided labs.
7. Published learning content has passed the required review process.
8. Assessment results correspond to the relevant exercise or activity.

# 8. External and Internal Interface Requirements

## 8.1 User interface

The MVP shall provide the following major interface areas:

| Interface | Required capabilities |
|---|---|
| Landing page | Product introduction and access to the learning area. |
| Learning area | Course and lesson navigation. |
| Lesson view | Explanations, examples, context selection, and activities. |
| Code editor | Code entry, editing, and execution. |
| Execution output | Display of code output and errors. |
| Exercise interface | Instructions, answer submission, and assessment results. |
| Feedback interface | Hints, explanations, and contextual feedback. |
| Guided lab interface | Objectives, instructions, starter code/data, execution, and assessment. |

## 8.2 Python execution interface

The learning application shall communicate with the code execution component through a controlled interface.

The execution interface shall support:

- Submission of Python source code.
- Identification of the relevant exercise or lab where applicable.
- Execution within the approved environment.
- Return of standard output.
- Return of error information.
- Return of execution status.
- Enforcement of execution limits.

The interface shall not expose unrestricted host resources to submitted code.

## 8.3 Assessment interface

The assessment component shall receive learner submissions and relevant assessment criteria.

It shall return the assessment outcome, including applicable test results, scores, and feedback.

## 8.4 AI interface

The AI-assisted component shall receive only the relevant context required for a learning-support request.

Depending on the feature, this may include:

- Lesson or exercise instructions.
- Learner-submitted code.
- Execution output or error information.
- Automated assessment results.
- Relevant learning objectives.

The AI component shall return a hint, explanation, or feedback response appropriate to the request.

## 8.5 Content-production interface

The internal content-production process shall support preparation, validation, review, revision, and approval of instructional materials.

A dedicated administrator or reviewer interface is not required in the MVP.

# 9. MVP Acceptance Criteria and Tests

The following tests define the minimum expected behavior for MVP acceptance.

| Test ID | Requirement tested | Test procedure | Expected result |
|---|---|---|---|
| AT-001 | FR-001 to FR-002 | Open the landing page. | The page explains SPASCLE and provides access to Python learning. |
| AT-002 | FR-003 to FR-004 | Open the learning area without signing in. | The learner can access published learning content. |
| AT-003 | FR-006 to FR-011 | Navigate between courses, modules, and lessons. | The course hierarchy is displayed and navigation works correctly. |
| AT-004 | FR-012 | Open a lesson without changing the context. | Materials science is selected by default. |
| AT-005 | FR-013 | Change the global context. | The selected context is used where suitable content exists. |
| AT-006 | FR-015 to FR-016 | Select a different context within one lesson. | The lesson-level selection overrides the global preference for that lesson only. |
| AT-007 | FR-017 to FR-020 | Select a context with no suitable content. | The system communicates unavailability and offers an appropriate alternative where possible. |
| AT-008 | FR-021 to FR-027 | Open a representative lesson. | Explanations, examples, and applicable activities are presented clearly. |
| AT-009 | FR-028 to FR-032 | Enter and execute valid Python code. | The code runs and its output is displayed. |
| AT-010 | FR-031 | Execute code containing a syntax or runtime error. | The system displays relevant error information. |
| AT-011 | FR-033 to FR-035 | Import and use NumPy and Matplotlib. | Approved packages are available and function as expected. |
| AT-012 | FR-036 to FR-038 | Write code and leave the temporary session. | Code can be copied or downloaded where supported; the system does not claim account-based persistence. |
| AT-013 | FR-039 to FR-042 | Attempt restricted or excessively resource-intensive execution. | The execution environment enforces its security and resource limits. |
| AT-014 | FR-043 to FR-046 | Open and submit a conceptual or coding exercise. | Instructions are displayed and the learner can submit an answer. |
| AT-015 | FR-047 to FR-053 | Submit correct and incorrect exercise answers. | The system returns consistent assessment results and relevant test outcomes. |
| AT-016 | FR-054 to FR-059 | Request a hint or feedback for a supported exercise. | Relevant AI-assisted guidance is displayed and distinguished from the grading result. |
| AT-017 | FR-060 | Simulate an AI service failure. | The failure is communicated without preventing access to the lesson or exercise. |
| AT-018 | FR-063 to FR-070 | Complete a representative guided lab. | The learner can follow instructions, execute code, and receive an assessment result. |
| AT-019 | FR-071 to FR-079 | Prepare and validate draft learning content. | AI-assisted drafts can be reviewed, corrected, and approved before publication. |
| AT-020 | FR-005 and NFR-017 | Attempt to access unpublished content through a public interface. | Unpublished content is not exposed as learner-facing material. |
| AT-021 | FR-011 to FR-012 and BR-007 | Inspect learner progress behavior. | The MVP does not claim reliable account-linked persistent progress. |
| AT-022 | NFR-001 to NFR-007 | Use the platform on supported desktop, tablet, and mobile viewports. | Core learning functions remain usable and understandable. |
| AT-023 | NFR-012 to NFR-014 | Simulate execution or optional AI service failure. | The failure does not make the entire learning platform unavailable. |

# 10. Release 2 Acceptance Criteria

Release 2 shall be accepted in phases.

## 10.1 Release 2A — Authentication and Progress

| Test ID | Test procedure | Expected result |
|---|---|---|
| R2A-001 | Register a new learner. | A learner account is created successfully. |
| R2A-002 | Sign in and sign out. | Authentication state changes correctly. |
| R2A-003 | Open the learner profile area. | Authenticated status and profile avatar are displayed. |
| R2A-004 | Complete a lesson while signed in. | The completion state is saved to the learner account. |
| R2A-005 | Revisit the course after signing out and signing in again. | Previously saved progress is available. |
| R2A-006 | Complete multiple course items. | The overall course completion percentage is calculated and displayed correctly. |
| R2A-007 | Inspect the course navigation sidebar. | Completed course items are visually marked. |
| R2A-008 | Resume a partially completed course. | The learner can identify and return to relevant learning content. |
| R2A-009 | Open public learning content without signing in. | Public content remains accessible. |

## 10.2 Release 2B — Administrator Functionality

| Test ID | Test procedure | Expected result |
|---|---|---|
| R2B-001 | Sign in as an administrator. | Authorized administrator access is granted. |
| R2B-002 | Attempt administrator access as an unauthorized user. | Access is denied. |
| R2B-003 | Create a course, module, or lesson. | The content is created successfully. |
| R2B-004 | Edit existing learning content. | Authorized changes are saved. |
| R2B-005 | Manage publication status. | Published and unpublished content are handled correctly. |
| R2B-006 | Create or manage reviewer access. | Reviewer permissions are assigned and enforced. |

## 10.3 Release 2C — Reviewer Functionality

| Test ID | Test procedure | Expected result |
|---|---|---|
| R2C-001 | Sign in as an authorized reviewer. | Reviewer access is granted. |
| R2C-002 | Access content assigned for review. | The reviewer can access the relevant content. |
| R2C-003 | Attempt to access unassigned restricted content. | Access is denied where permissions do not allow it. |
| R2C-004 | Review and revise assigned content. | Permitted revisions can be submitted or saved. |
| R2C-005 | Verify scientific and programming content. | The review process supports the required quality checks. |
| R2C-006 | Attempt an action outside reviewer permissions. | The system prevents the unauthorized action. |

# 11. Deferred and Excluded Requirements

The following capabilities shall not be treated as MVP completion requirements.

| Capability | Scope |
|---|---|
| Learner registration and sign-in | Release 2A |
| Authenticated status and profile avatar | Release 2A |
| Persistent learner progress | Release 2A |
| Overall course completion percentage | Release 2A |
| Sidebar completion indicators | Release 2A |
| Administrator accounts and content-management interface | Release 2B |
| Reviewer accounts and review interface | Release 2C |
| Bash learning pathway | Later release |
| Additional programming languages | Later release |
| Managed classes and institutional dashboards | Later release |
| Payments and subscriptions | Later release |
| Native mobile applications | Later release |
| Persistent full-featured coding workspaces | Later release |
| Arbitrary package installation and unrestricted network access | Excluded from the MVP execution environment |
| Production-scale DFT and HPC simulations | Excluded from the MVP execution environment |
| Standalone unrestricted AI tutor | Excluded from the MVP |

# 12. Assumptions and Open Decisions

The following assumptions guide this specification. They should be resolved during technical design and implementation planning.

| ID | Open decision | Consideration |
|---|---|---|
| OD-001 | Code execution architecture | Select an execution architecture that provides isolation, resource limits, and support for approved Python packages. |
| OD-002 | Execution duration and resource limits | Define practical CPU, memory, and time limits for learner code. |
| OD-003 | Supported package versions | Establish and maintain approved versions of NumPy, Matplotlib, and other packages. |
| OD-004 | Exercise assessment model | Define supported question types, test-case structures, scoring rules, and retry behavior. |
| OD-005 | AI service selection | Select an AI service and define usage limits, data handling, and failure behavior. |
| OD-006 | AI feedback boundaries | Define which learning activities support AI feedback and what information may be supplied to the AI service. |
| OD-007 | Temporary session behavior | Define when temporary code sessions expire and whether code can be recovered during the same browser session. |
| OD-008 | Code download format | Determine the supported format for downloading learner code. |
| OD-009 | Context persistence | Decide whether the global context preference persists only during the current visit or across browser visits without an account. |
| OD-010 | Lesson content representation | Select a suitable format for storing and rendering explanations, code blocks, exercises, and lab instructions. |
| OD-011 | Lab assessment | Define assessment criteria and expected outputs for each guided lab. |
| OD-012 | Content approval workflow | Define the internal review and approval process for MVP content before publication. |
| OD-013 | Release 2 progress rules | Define what qualifies as a completed lesson or course item and how course completion is calculated. |
| OD-014 | Administrator and reviewer permissions | Define the detailed permission matrix for Release 2. |
| OD-015 | Content revision history | Decide how content revisions, approvals, and publication changes will be recorded. |

# 13. Requirements Traceability

The following table links the major PRD capabilities to the relevant SRS sections.

| PRD capability | SRS requirements |
|---|---|
| Public landing page and learning access | FR-001 to FR-005 |
| Course structure and navigation | FR-006 to FR-011 |
| Scientific context selection | FR-012 to FR-020 |
| Lesson content and examples | FR-021 to FR-027 |
| Browser-based Python environment | FR-028 to FR-042 |
| Exercises and automated assessment | FR-043 to FR-053 |
| AI-assisted learner support | FR-054 to FR-062 |
| Guided computational labs | FR-063 to FR-070 |
| AI-assisted content preparation and review | FR-071 to FR-079 |
| Authentication and learner progress | FR-080 to FR-089 |
| Administrator functionality | FR-090 to FR-096 |
| Reviewer functionality | FR-097 to FR-102 |
| Quality, performance, security, and accessibility | NFR-001 to NFR-037 |

# 14. Relationship to Other Project Documents

This SRS should be used alongside the following project documents:

1. **Product Requirements Document (PRD):** Defines the product vision, objectives, users, features, release scope, and product-level acceptance criteria.
2. **Information Architecture and User Flows:** Defines the platform's navigation structure, screens, and user journeys.
3. **Data Model and Database Design Specification:** Defines the logical entities, attributes, relationships, and persistence requirements.
4. **API Contracts and Interface Design Specification:** Defines communication between the frontend, backend, execution environment, assessment services, and AI services.
5. **Technical Architecture Specification:** Defines the selected technology stack, deployment model, infrastructure, security boundaries, and component architecture.

The SRS defines the system behavior that the other technical documents must support. Where implementation decisions are still open, the relevant design documents should resolve them without contradicting the requirements in this specification.
