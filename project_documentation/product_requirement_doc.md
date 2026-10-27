# Spascle — Product Requirements Document (PRD)

Version 1.0 · MVP · October 2026

## 1. Context and objectives

### 1.1 Product vision

Spascle is an AI-powered online learning platform that helps beginners learn programming through practical, field-specific scientific applications.

Rather than teaching programming in isolation, Spasscle connects programming concepts to problems learners recognize from their scientific disciplines.

The initial focus is computational materials science, with plans to expand into other scientific fields over time.

### 1.2 Problem

Chemistry, materials science and other science students may need programming skills for research but struggle to find learning resources that connect programming concepts to their academic backgrounds.

General programming platforms often lack relevant scientific examples, while specialized computational science resources can assume prior programming knowledge.

Spascle aims to bridge this gap through structured explanations, practical exercises, interactive coding environments and guided scientific projects.

### 1.3 Value proposition

Spascle will enable learners to:

- Learn programming from the beginning using familiar scientific contexts.
- Practice code directly in the browser without configuring a local development environment.
- Apply programming concepts to computational materials science problems.
- Receive immediate assessment results, hints and contextual explanations.
- Progress through structured, expert-reviewed learning materials at their own pace.

AI will accelerate content development and provide learning support, while human review and reliable assessment methods maintain educational quality.

### 1.4 Product objectives

1. Launch a useful, beginner-friendly Python learning experience for computational materials science.
2. Make scientific programming practice accessible through a browser.
3. Provide reliable automated grading and contextual AI feedback.
4. Establish a repeatable process for creating, reviewing and publishing learning materials.
5. Validate learner engagement and learning outcomes before expanding the platform.

### 1.5 Success metrics

Initial targets for the limited pilot are:

| Metric                                                 | Target |
| ------------------------------------------------------ | ------ |
| Published lessons approved before release              | 100%   |
| Valid supported sample programs executing successfully | ≥95%   |
| Onboarded learners starting their first lesson         | ≥60%   |
| First-lesson starters completing an exercise           | ≥50%   |
| Learners returning within seven days                   | ≥20%   |

These are initial validation targets, not established benchmarks. Results should guide subsequent product decisions.

## 2. User and market profiling

### 2.1 Target audience

The initial audience is university students, recent graduates and self-directed learners interested in computational materials science who have little or no programming experience.

| Persona                           | Needs and goals                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Beginner science student          | Learn Python from scratch through examples relevant to materials science.                              |
| Aspiring computational researcher | Practice scientific data manipulation, calculations and visualization in a practical environment.      |
| Independent learner               | Study at their own pace, track progress and receive useful feedback without an instructor.             |
| Content reviewer                  | Ensure lessons, exercises, code examples and answer keys are scientifically and educationally correct. |
| Platform administrator            | Manage published content, reviewer access and the quality of the learning experience.                  |

### 2.2 User scenarios

Scenario A — Learning Python

A materials science student with no programming experience opens Spascle, starts the Python course, reads a beginner-friendly lesson, runs the example code and completes a short exercise. The student receives a score and feedback explaining any mistakes.

Scenario B — Applying scientific packages

A learner reaches a lesson on scientific computing and uses NumPy to manipulate numerical data or Matplotlib to visualize a scientific dataset. The learner practices in the browser without having to install these packages locally.

Scenario C — Completing a guided lab

A learner works through a computational materials science problem using supplied data and starter code. Spascle evaluates the submission against defined criteria and provides feedback on what worked and what needs improvement.

Scenario D — Preparing learning materials

A content reviewer uses AI-generated drafts as a starting point, verifies the scientific explanations and code, checks exercises and answer keys, and approves suitable content for publication.

Scenario E — Continuing learning

A returning learner signs in and resumes the course, with previously completed lessons and assessment results available.

## 3. Functional requirements and feature scope

The MVP will use the MoSCoW prioritization method: Must have, Should have, Could have and Won't have.

### 3.1 Must have — MVP essentials

A. Structured learning content

- A beginner-oriented Python course focused initially on computational materials science.
- Organized modules and lessons with explanations, examples and exercises.
- Scientific examples that connect programming concepts to materials science applications.
- Selected scientific packages, including NumPy and Matplotlib, taught within the course.

B. Interactive coding

- An in-browser code editor and execution environment.
- Support for Python and approved scientific packages.
- Display of program output and understandable error messages.
- Temporary coding sessions and the ability to copy or download code where practical.

C. Exercises and automated assessment

- Conceptual quizzes and coding exercises.
- Automatic evaluation of coding submissions.
- Scores, test outcomes and contextual feedback.
- AI-generated hints and explanations based on the learner's work and assessment results.

D. Guided scientific labs

- Step-by-step practical problems based on computational materials science.
- Instructions, learning objectives, starter code or supplied datasets where appropriate.
- Defined assessment criteria and useful feedback.
- Lightweight computations suitable for an online learning environment.

E. AI-assisted learning and content development

- AI-generated drafts of lessons, examples, exercises, quizzes and lab instructions.
- AI assistance explaining errors and suggesting improvements.
- Human review and approval before generated content is published.
- Reliable grading based primarily on predefined tests and assessment criteria, rather than unrestricted AI judgment.

F. Accounts and learning progress

- Learner registration and authentication.
- Saved lesson completion and assessment history.
- The ability to resume learning across sessions.

G. Content quality and administration

- A simple internal workflow for reviewing, approving and publishing content.
- Restricted access to reviewer and administrator functions.
- Clear distinction between draft, reviewed and published materials.

### 3.2 Should have — within the initial release cycle

- A beginner Bash course, introduced after the initial Python experience is stable.
- Additional practice exercises for challenging concepts.
- Improved code-output presentation and scientific plotting.
- Basic learner-facing feedback on course progress and areas needing improvement.

Bash remains part of the intended MVP release cycle, but the initial Python experience should be validated first.

### 3.3 Could have — later enhancements

- Additional computational materials science projects.
- More personalized learning recommendations based on learner progress.
- More advanced AI-assisted evaluation of open-ended lab work.
- Additional scientific libraries and programming environments.
- Expanded learner dashboards.

### 3.4 Won't have — initial MVP

- Payments, subscriptions or a paid course marketplace.
- Teacher accounts, classroom management or institutional dashboards.
- A standalone conversational AI tutor.
- Native mobile or desktop applications.
- Persistent, full-featured personal coding workspaces.
- Unrestricted package installation or arbitrary external network access from code.
- Heavy DFT calculations, HPC workloads or production-scale scientific simulations.
- Courses for every scientific discipline at launch.

## 4. Non-functional requirements and product guardrails

These requirements define the expected quality of the user experience without prescribing the underlying engineering implementation.

| Area          | Requirement                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Usability     | Beginners should be able to start learning without prior programming or local environment setup.                                 |
| Performance   | Ordinary course pages should load within approximately 3 seconds under normal pilot conditions.                                  |
| Reliability   | Lessons and deterministic grading should remain usable when the AI service is unavailable.                                       |
| Security      | Learner code must execute in a restricted environment and must not access application secrets or other learners' data.           |
| Privacy       | Collect only necessary personal information and avoid unnecessary retention of submitted code.                                   |
| Quality       | All published lessons must receive human review before release.                                                                  |
| Assessment    | Scores should be consistent, explainable and based on defined criteria.                                                          |
| Cost          | The platform should support low initial traffic with sensible limits on code execution and AI usage.                             |
| Accessibility | Core learning and coding workflows should be usable with common browsers, readable text and keyboard navigation where practical. |
| Scalability   | The product should accommodate growth without requiring a complex architecture at launch.                                        |
| Localization  | English is the initial interface and course language. Internationalization can be introduced later if needed.                    |

## 5. UX and user flow expectations

### 5.1 Core learner journey

Landing page

Register or sign in

Course overview

Read lesson and run examples

Complete exercise or guided lab

View score, feedback and progress

Continue to the next lesson

### 5.2 Lesson experience

A lesson should present content in a clear progression:

1. Explain the concept in beginner-friendly language.
2. Connect it to a computational materials science application.
3. Show a worked example.
4. Let the learner run or modify the code.
5. Provide an exercise to check understanding.
6. Show results and relevant feedback.
7. Offer a clear path to the next activity.

The experience should avoid overwhelming beginners with advanced scientific theory or unnecessary interface complexity.

### 5.3 Lab experience

A guided lab should make it clear what the learner is trying to accomplish, what data or starter code is available, what is expected from the submission and how the result will be assessed.

Feedback should identify unmet criteria and suggest a practical next step, rather than merely reporting that the submission is incorrect.

### 5.4 Content review journey

AI-generated or expert-created draft

Scientific, educational and code validation

Human reviewer approval

Publish to learners

If a draft fails review, it returns for revision. AI-generated content must not bypass this process.

### 5.5 Initial interface expectations

The initial product should contain the following primary views:

- Home: Product introduction and a clear route to begin learning.
- Course overview: Learning objectives, modules and progress.
- Lesson page: Explanations, code examples, exercises and navigation.
- Coding workspace: Code editor, run control, output and feedback.
- Lab page: Problem instructions, working area, submission and assessment results.
- Progress view: Completed lessons and assessment history.
- Internal review view: Draft content, review decisions and publishing controls.

These are functional layout expectations, not final visual designs or wireframes.

## 6. MVP release strategy

The product should be developed and validated incrementally.

| Stage                         | Outcome                                                                   |
| ----------------------------- | ------------------------------------------------------------------------- |
| 1. Foundation                 | Core learning structure, accounts and safe code execution                 |
| 2. Python learning experience | Beginner course, scientific packages, exercises and deterministic grading |
| 3. AI and labs                | Contextual feedback, guided labs and reviewed AI-assisted content         |
| 4. Release readiness          | Reliability, security, cost controls and content validation               |
| 5. Limited pilot              | Small-group learner testing and measurement against success metrics       |
| 6. MVP completion             | Bash support after Python stability and Bash security validation          |

## 7. Assumptions and product decisions

- Prosca will initially be a self-paced learning platform for individual learners.
- The initial launch will focus on computational materials science rather than trying to serve every scientific field.
- Python is the first course language; Bash follows within the MVP release cycle.
- NumPy, Matplotlib and other selected packages will be available as part of the supported Python learning environment.
- AI will assist with content creation and feedback, but published materials require human approval.
- Automated tests and defined criteria will remain the primary basis for objective grading.
- The initial user base and traffic are expected to be modest, so features and operating costs should remain proportionate.
- Expansion into other fields and advanced learning features will be guided by evidence from the pilot.

Product direction: Prosca should first prove that beginners can learn Python, apply it to computational materials science and complete meaningful exercises and labs in a reliable browser-based environment. Broader scientific coverage and more advanced AI features come after that core experience works well.
