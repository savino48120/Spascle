# Spascle — Software Requirements Specification (SRS)

Version 1.0 · MVP · October 2026

## 1. Purpose and scope

Spascle (Scientific Programming and Computational Science Learning Environment) is a browser-based learning platform that teaches beginners programming through practical scientific examples.

The initial learning domain is computational materials science. The platform will start with Python, including selected scientific packages such as NumPy and Matplotlib, and introduce Bash later in the same MVP release cycle.

The system will prioritize simplicity, low initial operating costs, safe code execution, and expert-reviewed learning content.

### 1.1 MVP boundaries

| Included                                  | Excluded initially                  |
| ----------------------------------------- | ----------------------------------- |
| Self-paced learning                       | Classroom and teacher management    |
| Python lessons and scientific packages    | Arbitrary package installation      |
| Bash, after Python foundation             | Heavy DFT/HPC simulations           |
| Quizzes, coding exercises and guided labs | Full AI tutor                       |
| Automated grading and AI feedback         | Payments and subscriptions          |
| Progress tracking                         | Native mobile or desktop apps       |
| Internal content review and publishing    | Public course-authoring marketplace |

## 2. System architecture

Use a modular monolith for the main application, with a separate isolated code-execution service. This keeps development simple without compromising the security boundary around user code.

Frontend

Next.js · React · TypeScript · Tailwind CSS · Monaco Editor

Main application

Authentication · Lessons · Progress · Grading coordination · AI integration · Content review

Supabase

Authentication, PostgreSQL database and access policies

Execution sandbox

Isolated Python/Bash runs and trusted test execution

AI model API

Content drafts, hints and assessment explanations

Trusted grading

Test results, scoring rules and assessment records

### 2.1 Technology requirements

- Frontend and application: Next.js, React, TypeScript and Tailwind CSS.
- Code editor: Monaco Editor.
- Authentication and database: Supabase Auth and PostgreSQL.
- Code execution: A separate, disposable, isolated execution environment.
- AI: One model provider accessed through a server-side integration module.
- Deployment: A simple deployment setup appropriate for low initial traffic.

The execution environment must remain separate from the main web application. This is a security requirement, not an optional future optimization.

## 3. User roles

| Role             | Permissions                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| Learner          | Access published courses, run code, submit assessments and view personal progress |
| Content reviewer | Review, edit, approve or reject draft content                                     |
| Administrator    | Manage users, content access, system configuration and operational limits         |

For the MVP, the founder or a small internal team may perform both reviewer and administrator duties. Separate administrative interfaces are not required where a simpler protected interface is sufficient.

## 4. Functional requirements

### 4.1 Accounts and access

- FR-001: The system shall allow learners to register, sign in and sign out.
- FR-002: The system shall protect learner-specific progress and submission records from unauthorized access.
- FR-003: Reviewer and administrator functions shall require authorized roles.
- FR-004: Learners shall be able to access the platform's published learning content without needing a teacher or classroom account.

### 4.2 Courses and lessons

- FR-005: The system shall organize learning content into courses, modules and lessons.
- FR-006: The initial course shall teach Python programming through computational materials science examples.
- FR-007: Lessons shall support formatted explanations, code examples, exercises and links to associated labs.
- FR-008: Python lessons may use approved scientific packages, initially including NumPy and Matplotlib, within the supported runtime.
- FR-009: The system shall display lesson completion and course progress.
- FR-010: Only approved and published content shall be visible to learners.
- FR-011: Bash content shall be introduced after the initial Python learning experience is stable and the Bash execution environment passes security testing.

### 4.3 Code editor and execution

- FR-012: Learners shall be able to write and edit code in the browser.
- FR-013: Learners shall be able to run supported Python code and see standard output, errors and permitted visual outputs.
- FR-014: The Python environment shall provide a fixed, tested set of approved packages and versions.
- FR-015: Each execution shall have limits on runtime, memory, CPU, output size and process creation.
- FR-016: Execution sessions shall be temporary. The platform shall not promise a persistent personal coding workspace.
- FR-017: Where practical, learners shall be able to copy or download their code.
- FR-018: The system shall show a clear message when code fails, exceeds limits or cannot be executed.
- FR-019: The system shall not execute learner code directly inside the Next.js application process.

### 4.4 Exercises and grading

- FR-020: Lessons shall support conceptual quizzes and coding exercises.
- FR-021: Coding exercises shall define instructions, permitted inputs, expected behavior and grading criteria.
- FR-022: The system shall execute submissions against trusted, server-controlled tests.
- FR-023: The grading service shall calculate scores from predefined rules and verified test results.
- FR-024: Learners shall receive their score, test outcomes and appropriate feedback.
- FR-025: Learners may request AI-generated hints or explanations when supported.
- FR-026: AI feedback shall not override deterministic test results or modify scores without an explicitly defined and validated grading rule.
- FR-027: The system shall store submission history and assessment results for learner progress tracking.

### 4.5 Guided labs

- FR-028: A lab shall include a problem statement, learning objectives, instructions, starter code where appropriate and assessment criteria.
- FR-029: Initial labs shall focus on lightweight computational materials science tasks, such as manipulating scientific data, calculating simple material properties from supplied data and plotting results.
- FR-030: Labs shall be assessed using automated checks wherever feasible.
- FR-031: The system shall provide feedback linked to specific unmet criteria.
- FR-032: AI may explain verified results and offer suggestions for improvement.
- FR-033: Heavy density functional theory calculations, HPC workloads and unrestricted computational jobs shall not run on the MVP platform.

### 4.6 AI integration

- FR-034: AI functionality shall be accessed through a server-side module, such as `aiService.ts`.
- FR-035: The module shall initially support:
  - Generating draft lessons, examples, quizzes, exercises and lab instructions.
  - Producing contextual hints and explanations.
  - Explaining verified exercise and lab assessment results.
- FR-036: AI-generated learning content shall remain unpublished until reviewed and approved by an authorized reviewer.
- FR-037: AI responses used by the application shall follow defined output schemas where structured data is required.
- FR-038: AI assessment explanations shall be grounded in the exercise instructions, learner submission and verified assessment results supplied to the model.
- FR-039: The system shall handle model timeouts, failures, malformed responses and usage limits gracefully.
- FR-040: AI model credentials shall remain server-side and shall never be exposed in frontend code.
- FR-041: The system shall limit unnecessary sharing and retention of learner code and personal information.

Important grading rule: AI can explain why a submission failed, but trusted code and tests determine whether it passed. For open-ended lab work, AI-assisted rubric scoring should only be enabled after validation against human-reviewed examples.

### 4.7 Content review and publishing

- FR-042: Authorized reviewers shall be able to create or edit drafts, review content, approve or reject it, and publish approved material.
- FR-043: Content shall follow the workflow `Draft → In Review → Approved → Published`, with rejection returning it for revision.
- FR-044: The system shall record reviewer decisions and timestamps.
- FR-045: Published content shall have a version identifier so assessment attempts can be interpreted against the content version used at submission time.
- FR-046: The MVP shall provide a simple protected review interface; a full content management system is not required.

### 4.8 Progress and history

- FR-047: The system shall store lesson completion and learner assessment results.
- FR-048: Learners shall be able to resume their learning and view their progress after signing in again.
- FR-049: The system shall distinguish between lesson completion, exercise attempts and lab attempts.
- FR-050: Temporary execution files and sessions shall be cleaned up according to configured limits.

## 5. AI and assessment workflow

The simplest reliable approach is to use AI as an assistant, not as the authority for correctness.

### Coding exercise workflow

1. Learner submits code. The application validates the request and sends the code to the isolated execution service.
2. Trusted tests run. The service returns execution status, test results and resource-limit information.
3. The application calculates the score. Trusted grading rules determine the result.
4. AI explains the result when needed. It receives relevant instructions, the submission and verified results, then generates hints or explanations.
5. The result is saved. The learner sees the score and feedback, and progress is updated.

Content generation follows a separate workflow: AI or an expert prepares a draft, automated checks validate code and answer keys, a reviewer approves it, and only then can it be published.

For the MVP, use direct model API calls with structured responses where needed. Do not build a multi-agent system, vector database or standalone AI tutor yet.

## 6. Data requirements

Use PostgreSQL through Supabase. The following tables form the initial data model.

| Table               | Purpose                                           |
| ------------------- | ------------------------------------------------- |
| `profiles`          | Learner profile and role                          |
| `courses`           | Course metadata and publication status            |
| `modules`           | Course sections and ordering                      |
| `lessons`           | Lesson content and version                        |
| `exercises`         | Instructions, test definitions and grading rules  |
| `labs`              | Lab instructions, starter code and rubrics        |
| `lesson_progress`   | Learner completion state                          |
| `exercise_attempts` | Code submissions, test outcomes and scores        |
| `lab_attempts`      | Lab submissions, assessment outcomes and feedback |
| `content_reviews`   | Review decisions, reviewer and timestamps         |

### Data rules

- Use UUID primary keys and foreign-key relationships.
- Store structured lesson content and test definitions in a maintainable format, such as JSON where appropriate.
- Keep trusted test definitions and grading logic inaccessible to learners.
- Apply database access policies so learners can only access their own private records.
- Keep model API keys and other secrets out of the database fields exposed to clients.
- Record enough execution and assessment metadata to troubleshoot failures without retaining unnecessary sensitive data.
- Store content versions or immutable snapshots needed to interpret historical assessment results.

## 7. API requirements

These are proposed application interfaces, not existing endpoints. They can be implemented as Next.js route handlers except for code execution, which must be handled by the isolated service.

| Endpoint                         | Purpose                                            |
| -------------------------------- | -------------------------------------------------- |
| `GET /api/courses`               | List published courses                             |
| `GET /api/courses/:slug`         | Retrieve course structure                          |
| `GET /api/lessons/:id`           | Retrieve a published lesson                        |
| `POST /api/exercises/:id/submit` | Submit an exercise for grading                     |
| `POST /api/labs/:id/submit`      | Submit a lab for assessment                        |
| `GET /api/progress`              | Retrieve the learner's progress                    |
| `POST /api/executions`           | Request an isolated code run                       |
| `GET /api/executions/:id`        | Retrieve execution status and output               |
| `POST /api/feedback`             | Request permitted AI hints or explanations         |
| `/api/admin/*`                   | Protected content-review and publishing operations |

All protected endpoints shall authenticate requests, validate input and enforce authorization. Long-running execution requests may use a job identifier and status polling rather than keeping a web request open.

## 8. Security requirements

Security is especially important because learners can submit executable code.

- SR-001: Run code in a disposable sandbox isolated from the main application and other learners.
- SR-002: Deny network access from learner code by default.
- SR-003: Apply strict CPU, memory, execution-time, file-size, process and output limits.
- SR-004: Prevent access to host files, credentials, environment secrets and other users' data.
- SR-005: Use fixed, pinned Python packages; do not allow arbitrary package installation.
- SR-006: Run trusted grading tests separately from learner-controlled code and protect the expected answers.
- SR-007: Enforce authentication, authorization, database access policies and request validation.
- SR-008: Apply per-user and global limits to execution requests and AI usage.
- SR-009: Keep secrets server-side and protect sensitive information in logs.
- SR-010: Clean up temporary execution environments and files.
- SR-011: Before enabling Bash, test the sandbox against shell-specific risks, including destructive commands, process creation and filesystem access.

A container by itself is not automatically a sufficient security boundary. The execution service must use appropriate hardening and isolation for untrusted code.

## 9. Non-functional requirements

| ID      | Requirement                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------- |
| NFR-001 | The interface shall be responsive and usable on modern desktop and mobile browsers.                                       |
| NFR-002 | Ordinary course pages should load within 3 seconds under normal pilot conditions, excluding network delays.               |
| NFR-003 | The system shall handle low initial traffic without requiring a complex distributed architecture.                         |
| NFR-004 | Failures in the AI provider shall not prevent learners from accessing lessons or receiving deterministic grading results. |
| NFR-005 | Execution and AI failures shall produce understandable error messages.                                                    |
| NFR-006 | The application shall log relevant errors, execution failures, AI usage and resource consumption.                         |
| NFR-007 | The system shall support database migrations, backups and recovery procedures.                                            |
| NFR-008 | The system shall minimize operating costs through usage quotas, execution limits and AI rate limits.                      |
| NFR-009 | The codebase shall separate course management, execution, grading and AI integration into maintainable modules.           |
| NFR-010 | The platform shall use automated tests for critical application logic, access control, grading and execution workflows.   |

These are initial engineering targets. Load and response-time targets should be validated during the pilot rather than treated as proven performance.

## 10. Acceptance criteria

The MVP is ready for a limited pilot when all of the following are satisfied.

- Learners can register, sign in and resume saved progress.
- Reviewers can approve and publish course content.
- The initial computational materials science Python course is available.
- Python examples run in the browser with the approved scientific packages, including NumPy and Matplotlib.
- Coding exercises are graded using trusted tests and predefined rules.
- AI feedback explains verified assessment results without independently changing scores.
- Guided labs support automated assessment and criterion-based feedback.
- Learner progress and assessment history persist across sessions.
- Untrusted code cannot access application secrets or other learners' data.
- Execution quotas, AI usage limits, error logging and cleanup are operational.
- Bash is enabled only after its execution environment passes the required security tests.
- All published lessons have passed the internal review process.

### Suggested pilot metrics

These are initial targets to evaluate and adjust using actual pilot data.

| Metric                                                  | Initial target |
| ------------------------------------------------------- | -------------- |
| Published lessons approved before release               | 100%           |
| Successful execution of valid supported sample programs | ≥95%           |
| Onboarded learners who start the first lesson           | ≥60%           |
| First-lesson starters who complete an exercise          | ≥50%           |
| Learners returning within seven days                    | ≥20%           |

## 11. Implementation priorities

Build the platform in this order to reduce technical risk and avoid unnecessary complexity.

## 1

Prove code execution is safe

Build a small Python sandbox prototype, test package support, enforce resource limits and verify cleanup. Do this before investing heavily in the learning interface.

## 2

Build the application foundation

Set up Next.js, Supabase, authentication, database migrations, roles and access policies.

## 3

Build the learning experience

Implement courses, lessons, the code editor, exercises, deterministic grading and progress tracking.

## 4

Integrate AI and guided labs

Add contextual feedback, assessment explanations, lab workflows and content review.

## 5

Harden and pilot

Test security, backups, cost limits and reliability. Release to a small group, then add Bash once it is ready.

## 12. Future expansion

The architecture should permit future additions without requiring them in the MVP:

- Courses for chemistry, physics and other scientific fields.
- Retrieval-augmented generation (RAG) for more grounded AI assistance.
- More advanced lab rubrics and validated AI-assisted qualitative grading.
- A dedicated AI tutor and more personalized learning.
- Additional scientific packages and execution environments.
- Classroom, instructor and cohort-management features if user demand justifies them.

Final architectural decision: keep one main application, one database, one isolated execution service and one server-side AI integration. This is the simplest practical design for Prosca's first release while preserving the security and extensibility it needs.
