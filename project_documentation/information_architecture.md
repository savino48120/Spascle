# Spascle — Information Architecture & User Flows

**Version 1.0 · MVP · October 2026**

The goal is to define **how Spascle is organized, how users navigate it, and how the application changes state as they learn, submit work, and review content**. This is independent of the database schema and final visual design.

---

## 1. Site Map

### Public Area
- Home
- About Spascle
- Course Catalogue
- Course Overview
- Sign In / Register

### Learning Area
- Dashboard
- My Learning
- Course Overview
- Lesson Viewer
- Exercise Workspace
- Lab Workspace
- Progress and History
- Account Settings

### Content Management
- Content Overview
- Draft Editor
- Review Queue
- Preview and Validation
- Publish / Reject

### Administration
- User and Role Management
- Content Access
- Basic Operational Status

**Navigation rules:**
- **Learn** — discover courses and continue learning.
- **My Learning** — access started courses and track progress.
- **Dashboard** — resume recent activity and find the next recommended step.
- **Account Menu** — profile, settings and sign out.

Reviewer and administrator links appear only for authorized users.

---

## 2. Core Learning Hierarchy

**Course: Python for Computational Materials Science**

↓ **Module**

↓ **Lesson**

↓ Learning activities:
- Explanation and examples
- Exercises
- Guided labs

The course introduces concepts progressively. Scientific packages such as NumPy and Matplotlib appear in relevant lessons rather than as disconnected courses in the initial experience.

Bash can later appear as another course within the same learning hierarchy.

---

## 3. User Flow Diagrams

### Flow A — New Learner

```mermaid
flowchart TD
    A[Visit Prosca] --> B[Explore course catalogue]
    B --> C[Open course overview]
    C --> D{Signed in?}
    D -- No --> E[Register or sign in]
    E --> F[Open learning dashboard]
    D -- Yes --> F
    F --> G[Start Python course]
    G --> H[Open first lesson]
    H --> I[Learn and run examples]
    I --> J[Complete exercise]
    J --> K[View score and feedback]
    K --> L[Continue to next lesson]
```

**Key behavior:** The course catalogue and course overview can be explored publicly. Starting learning requires an authenticated account so progress can be saved.

### Flow B — Lesson, Exercise and AI Feedback

```mermaid
flowchart TD
    A[Open lesson] --> B[Read explanation]
    B --> C[Run example code]
    C --> D{Execution successful?}
    D -- No --> E[Show error and debugging guidance]
    E --> C
    D -- Yes --> F[Open exercise]
    F --> G[Write and submit code]
    G --> H[Run trusted tests]
    H --> I{Tests pass?}
    I -- Yes --> J[Show score and success feedback]
    I -- No --> K[Show failed test results]
    K --> L{Request AI help?}
    L -- Yes --> M[Generate contextual explanation]
    L -- No --> N[Edit submission]
    M --> N
    N --> G
    J --> O[Save attempt and update progress]
```

**Important distinction:** AI feedback is optional support. The assessment result comes from trusted grading rules, and the learner can retry without requesting AI assistance.

### Flow C — Guided Lab

```mermaid
flowchart TD
    A[Open lab] --> B[Read objectives and instructions]
    B --> C[Review supplied data and starter code]
    C --> D[Implement solution]
    D --> E[Run code]
    E --> F{Ready to submit?}
    F -- No --> D
    F -- Yes --> G[Submit lab]
    G --> H[Evaluate assessment criteria]
    H --> I[Show results and unmet criteria]
    I --> J{More work needed?}
    J -- Yes --> K[Review hints and improve solution]
    K --> D
    J -- No --> L[Save lab result and progress]
```

The initial labs use lightweight datasets and calculations. Heavy DFT and HPC workloads are outside the MVP.

### Flow D — Content Creation and Publishing

```mermaid
flowchart TD
    A[Create content draft] --> B[AI assistance or expert authoring]
    B --> C[Validate explanations, code and answers]
    C --> D[Submit for review]
    D --> E{Reviewer decision}
    E -- Reject --> F[Return for revision]
    F --> B
    E -- Approve --> G[Publish content]
    G --> H[Available to learners]
```

AI-generated content must not go directly to published status. Reviewers must be able to inspect learning materials, exercises, expected answers and assessment criteria.

---

## 4. State Transitions

### 4.1 Content Lifecycle

**Draft → In Review → Approved → Published**

If rejected, content returns for revision.

Only published content is available to learners. Changes to published content should create a revision that can be reviewed before replacing the live version.

### 4.2 Exercise Attempt Lifecycle

**Not Started → In Progress → Submitted → Graded**

After grading, the learner can start another attempt. Each attempt retains its own result.

If execution fails due to a platform error, the learner receives a clear error and is not incorrectly penalized for a system failure.

### 4.3 Lesson Progress

A lesson has three learner-facing states:

- **Not Started**
- **In Progress**
- **Completed**

Opening a lesson alone does not necessarily mark it complete. Completion follows the course's defined rule, such as finishing the required activity or explicitly marking a lesson complete where no assessment is required.

### 4.4 Execution Lifecycle

**Queued → Running → Completed / Failed / Timed Out / Cancelled**

The interface displays the current status while a run is processing. Temporary execution environments are cleaned up after completion or termination.

---

## 5. Navigation and Interaction Rules

- Learners should always have a clear way back to the course or current module.
- Lessons should provide previous/next navigation where a meaningful sequence exists.
- Exercise and lab results should offer a clear retry or continue action.
- The dashboard should prioritize **Continue Learning**, rather than a complicated analytics dashboard.
- Errors should be actionable and distinguish learner code errors from platform failures.
- AI help should be available near the relevant error or assessment result, not hidden in a separate tool.
- Reviewers should be able to preview content as a learner would see it before publishing.
- Authentication should preserve the intended destination when a user is asked to sign in.

---

## 6. Recommended MVP Page Inventory

| Page | Access | Priority |
|---|---|---|
| Home | Public | Must |
| Course Catalogue | Public | Must |
| Course Overview | Public | Must |
| Sign In / Register | Public | Must |
| Learning Dashboard | Learner | Must |
| Lesson Viewer | Learner | Must |
| Exercise Workspace and Results | Learner | Must |
| Guided Lab Workspace and Results | Learner | Must |
| Progress and Attempt History | Learner | Must |
| Content Review and Publishing | Reviewer | Must |
| User and Role Administration | Administrator | Must |
| Account Settings | Learner | Should |
| Dedicated Analytics Dashboard | Administrator | Could |
| Standalone AI Tutor | Learner | Won't have in MVP |

---

## 7. Decisions to Carry into Wireframes

The IA is defined at the structural level. The next deliverable should be low-fidelity wireframes for these five screens:

1. **Learning Dashboard** — resume learning, course progress and recent activity.
2. **Lesson Page** — content, examples, navigation and embedded exercises.
3. **Coding Workspace** — editor, run controls, output, test results and AI help.
4. **Guided Lab Page** — objectives, supplied data, code workspace and assessment criteria.
5. **Content Review Page** — preview, validation status, review decisions and publishing.

These screens cover the most important learner and reviewer journeys without requiring every page to be designed independently.
