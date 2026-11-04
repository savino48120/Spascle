
# SPASCLE — UX Design Specification

**Version:** 1.0  
**Scope:** MVP / Release 1  
**Date:** November 2026  
**Status:** Draft

---

## 1. Purpose

This document defines the user experience requirements and interaction principles for the SPASCLE MVP.

It translates the Information Architecture into guidelines for how users interact with the platform. It establishes the expected behaviour of navigation, learning interfaces, coding environments, exercises, AI assistance, guided labs, themes, and responsive layouts.

The objective is to create an accessible, intuitive, and engaging learning experience for beginners who want to learn programming through scientific applications.

This document provides UX guidance for UI design and frontend implementation. It does not prescribe exact pixel dimensions or replace detailed visual mockups and UI component specifications.

## 2. UX Goals

The SPASCLE MVP should achieve the following UX goals:

1. **Ease of use:** Beginners should be able to navigate the platform and start learning without requiring technical knowledge of the platform itself.
2. **Low-friction learning:** Visitors should be able to access lessons and coding activities without registration or sign-in.
3. **Clear learning structure:** Learners should always understand where they are in the course, what they are learning, and what they can do next.
4. **Learning by doing:** Learners should be able to move naturally between explanations, examples, coding activities, and assessments.
5. **Contextual learning:** Scientific examples should make programming concepts relevant to practical scientific applications.
6. **Supportive feedback:** Errors and incorrect answers should be explained constructively rather than presented as unexplained failures.
7. **Accessible interaction:** The platform should be usable across different screen sizes and support both light and dark themes.
8. **Consistency:** Similar components and interactions should behave consistently throughout the learning environment.

## 3. Target Users and UX Considerations

The primary users are beginners learning Python and its applications in science.

The experience should account for users who:

- Have little or no previous programming experience.
- Have a background in science but limited programming knowledge.
- Are learning programming for scientific or computational applications.
- May be unfamiliar with coding environments and technical terminology.
- May access the platform using desktop computers, tablets, or mobile devices.

### 3.1 UX Implications

- Use clear, beginner-friendly language.
- Introduce technical terms with explanations where necessary.
- Avoid presenting too many controls or options at once.
- Provide instructions before asking learners to complete unfamiliar tasks.
- Make the relationship between lesson explanations and coding exercises clear.
- Provide useful feedback when learners make mistakes.
- Avoid assuming that learners understand programming errors or scientific computing terminology.

## 4. Core UX Principles

### 4.1 Learning Before Complexity

The interface should prioritize the learning experience rather than expose learners to unnecessary platform functionality.

Advanced settings and technical controls should not overwhelm beginners.

### 4.2 Consistent Interaction Patterns

Common actions should behave consistently across the platform.

For example:

- Primary actions should have a consistent visual treatment.
- Navigation should behave consistently across lessons.
- Code execution should follow the same interaction pattern wherever it appears.
- Feedback messages should use consistent styles and language.
- Theme switching should work consistently across all pages.

### 4.3 Immediate and Understandable Feedback

Learners should receive clear feedback after important actions, including:

- Running code.
- Submitting an exercise.
- Completing a quiz.
- Receiving assessment results.
- Requesting AI assistance.
- Encountering an execution error.

Feedback should explain what happened and, where appropriate, what the learner can do next.

### 4.4 Progressive Disclosure

Present essential information first and reveal additional details when needed.

For example, a learner should initially see a clear explanation of an exercise. More detailed hints, explanations, or technical information can be displayed when requested.

### 4.5 Consistent Visual Hierarchy

The interface should make it easy to distinguish:

- Page titles and section headings.
- Lesson explanations.
- Important instructions.
- Code examples.
- Interactive activities.
- Assessment feedback.
- Primary and secondary actions.

## 5. Overall Experience and Navigation

### 5.1 Landing Page Experience

The landing page should communicate what SPASCLE does and encourage visitors to begin learning.

The primary user journey should be straightforward:

1. Visitor opens SPASCLE.
2. Visitor understands the platform's purpose.
3. Visitor discovers the available learning pathway.
4. Visitor selects **Start Learning**.
5. Visitor enters the Python learning environment.

The landing page should avoid unnecessary navigation or competing calls to action.

### 5.2 Learning Environment Experience

The Python learning environment should use a familiar structured learning interface inspired by platforms such as W3Schools.

The main layout should contain:

- A course navigation sidebar.
- A central lesson content area.
- A global scientific-context selector.
- Relevant interactive learning components.

The course navigation should remain accessible while learners move between lessons.

### 5.3 Navigation Behaviour

- Selecting a lesson should load the selected lesson in the main content area.
- The active lesson should be visually distinguished in the sidebar.
- Modules should be expandable and collapsible.
- Previous and next lesson controls should support sequential learning.
- Navigation should not unnecessarily interrupt a learner's current activity.
- The learner should be able to return to the course structure easily.

### 5.4 MVP Progress Behaviour

The MVP does not require user accounts or persistent learner progress.

Therefore:

- Do not display account-linked course completion percentages.
- Do not display persistent completed-lesson indicators.
- Do not require learners to sign in to access lessons.
- Do not present a learner dashboard in the MVP.

## 6. Visual Design Foundations

This section establishes the foundational visual direction for SPASCLE.

### 6.1 Brand Colours

The primary and secondary colours are:

| Colour | Hex code | Intended use |
|---|---|---|
| Primary | `#580A50` | Primary buttons, links, active navigation, focus highlights, and important interactive elements |
| Secondary | `#DB9000` | Supporting accents, selected highlights, secondary actions, and emphasis |

The primary colour should establish the platform's visual identity. The secondary colour should complement it rather than compete with it.

### 6.2 Colour Usage Guidelines

**Primary colour — `#580A50`**

Use for:

- Primary action buttons.
- Active navigation states.
- Links and interactive text.
- Selected tabs or controls.
- Important interface highlights.
- Focus indicators where appropriate.

**Secondary colour — `#DB9000`**

Use for:

- Supporting visual accents.
- Secondary highlights.
- Selected informational elements.
- Occasional emphasis within learning components.
- Supporting status indicators where appropriate.

The secondary colour should not be used indiscriminately for ordinary text or large interface backgrounds.

### 6.3 Semantic Colours

In addition to brand colours, the interface should use semantic colours to communicate system and learning states.

| Semantic role | Purpose |
|---|---|
| Success | Correct answers, successful execution, and completed actions |
| Error | Failed execution, invalid input, and unsuccessful assessment |
| Warning | Important caution or potentially disruptive action |
| Information | Explanations, tips, and neutral notifications |

Semantic colours should remain distinguishable in both light and dark modes.

Colour must not be the only way of communicating a status. Use text labels and icons where appropriate.

## 7. Light and Dark Mode

SPASCLE must support both light and dark themes.

The theme should apply consistently across the landing page, learning environment, coding editor, exercises, quizzes, AI assistance panels, and guided labs.

### 7.1 Light Mode

Light mode should provide a clean, bright, and readable learning environment.

Suggested visual direction:

- Light neutral page background.
- White or near-white content surfaces.
- Dark primary text.
- Muted secondary text.
- Subtle borders and dividers.
- Primary plum for interactive elements.
- Secondary gold for supporting highlights.

### 7.2 Dark Mode

Dark mode should provide a comfortable low-light experience without sacrificing readability.

Suggested visual direction:

- Dark neutral page background.
- Slightly lighter surfaces for cards, panels, and content sections.
- Light primary text.
- Muted light secondary text.
- Subtle borders and dividers.
- Accessible plum and gold accents.
- Carefully selected semantic colours.

Avoid using pure black as the background for every component. A layered dark-neutral palette should help distinguish the page, content surfaces, and interactive panels.

### 7.3 Theme Switching

A theme control should be available through the main interface.

The control should:

- Allow switching between light and dark modes.
- Clearly indicate the current theme.
- Provide an accessible label.
- Apply the selected theme across the entire platform.
- Avoid requiring a page reload where technically possible.

The MVP may also support a system-default theme that follows the user's operating-system preference.

If a learner manually selects a theme, that choice should take precedence over the system preference.

Because the MVP has no authentication, theme preference may be retained locally on the learner's device where practical. It should not require an account.

### 7.4 Theme Design Tokens

The following tokens provide a starting point for the visual design system. Exact neutral shades should be finalized during UI design.

| Token | Light mode | Dark mode |
|---|---|---|
| Primary | `#580A50` | `#A3399A` (accessible adjusted shade; `#580A50` is too dark on dark surfaces) |
| Secondary | `#DB9000` | `#DB9000` or an accessible adjusted shade |
| Page background | Light neutral | Dark neutral |
| Primary surface | White | Dark surface |
| Secondary surface | Light grey | Elevated dark surface |
| Primary text | Dark neutral | Light neutral |
| Secondary text | Muted dark grey | Muted light grey |
| Border | Light grey | Dark grey |
| Success | Accessible green | Accessible green |
| Error | Accessible red | Accessible red |
| Warning | Accessible amber | Accessible amber |

All colour combinations must be checked for sufficient contrast. In particular:

- Use dark text on the gold secondary colour when needed.
- Do not assume white text is readable on every gold background.
- Check plum text and button combinations against their backgrounds.
- Ensure code syntax highlighting remains readable in both themes.

## 8. Typography and Content Presentation

### 8.1 Typography Principles

Typography should prioritize readability and clear information hierarchy.

The interface should use:

- A consistent font family across the platform.
- Clear distinctions between headings, body text, labels, and supporting information.
- Readable line spacing.
- Appropriate spacing between paragraphs and sections.
- Monospaced typography for code.

The final font family and type scale should be established during UI design.

### 8.2 Content Hierarchy

Lesson pages should use a consistent hierarchy:

1. Lesson title.
2. Learning objectives.
3. Section headings.
4. Explanatory content.
5. Examples and illustrations.
6. Code examples.
7. Practice activities.
8. Assessment feedback.
9. Related learning content.

### 8.3 Writing Style

The platform should use a friendly, clear, and instructional tone.

Content should:

- Explain unfamiliar concepts in simple language.
- Avoid unnecessary jargon.
- Use practical examples.
- Break complex explanations into manageable sections.
- Provide clear instructions before interactive tasks.
- Avoid unnecessarily long blocks of text.

## 9. Lesson Experience

### 9.1 Lesson Layout

A typical lesson should contain:

- Lesson title.
- Brief introduction.
- Learning objectives.
- Explanatory sections.
- Examples.
- Code examples where relevant.
- Interactive activities where relevant.
- Knowledge checks or exercises.
- AI assistance entry points.
- Previous and next lesson navigation.

The layout should remain consistent across lessons, even when individual lessons contain different types of activities.

### 9.2 Lesson Navigation

Learners should be able to:

- Move to the previous lesson.
- Move to the next lesson.
- Return to the course navigation.
- Select another lesson from the sidebar.

Navigation controls should use clear labels rather than relying exclusively on icons.

### 9.3 Scientific Context Selection

The global scientific-context selector should be accessible throughout the learning environment.

When the learner changes the global context:

- The new context becomes the default for lessons.
- Available context-specific examples should be displayed where they exist.
- The interface should communicate when a lesson does not have an equivalent version.

A lesson-level context override should affect only the current lesson.

The selected context should be clearly visible so learners understand which scientific context they are using.

## 10. Interactive Coding Experience

The code editor is one of the central interactive components of SPASCLE.

It should be approachable for beginners and should not overwhelm them with unnecessary developer tools.

### 10.1 Code Editor Layout

The coding interface should provide:

- Code editing area.
- Run button.
- Reset or restore starter code option where appropriate.
- Program output area.
- Error feedback area.
- Copy or download functionality where practical.

Where screen space allows, the editor and output panel may be displayed side by side.

On smaller screens, they should be arranged vertically.

### 10.2 Code Execution Interaction

The expected interaction is:

1. Learner opens a coding activity.
2. Starter code or an empty editor is displayed.
3. Learner writes or modifies code.
4. Learner selects Run.
5. The platform displays execution feedback.
6. Learner reviews the output or error.
7. Learner modifies the code and runs it again.

### 10.3 Execution States

The editor should support the following states:

| State | Expected behaviour |
|---|---|
| Idle | Editor is ready for input |
| Running | Indicate that code is being executed and prevent confusing duplicate submissions where necessary |
| Success | Display program output clearly |
| Error | Display an understandable error message |
| Timeout | Explain that execution exceeded the permitted time |
| Unavailable | Explain when the execution service cannot be reached |

### 10.4 Error Presentation

Error messages should be understandable to beginners.

Where appropriate, the interface should:

- Identify the error type.
- Display the relevant error message.
- Highlight the relevant code location when possible.
- Explain the likely cause in simple language.
- Provide an option to request an AI explanation.

Avoid presenting raw technical errors without any explanation when additional guidance can reasonably be provided.

### 10.5 Code Retention

Coding sessions are temporary in the MVP.

Learners should be able to copy or download their code where practical.

The interface must not imply that code is automatically saved to a permanent personal workspace.

## 11. Exercise and Assessment Experience

### 11.1 Exercise Presentation

Exercises should clearly communicate:

- What the learner is expected to do.
- Which concepts the exercise tests.
- Any required input or starter code.
- How to submit or check the answer.

Instructions should be displayed before the response area.

### 11.2 Assessment Feedback

After submission, learners should receive:

- Assessment status.
- Score or result where applicable.
- Test outcomes for coding exercises.
- Explanation of incorrect answers.
- Guidance on how to improve.

Feedback should be constructive and specific.

Avoid feedback that only says "Wrong" or "Failed" without explaining what needs attention.

### 11.3 Retry Behaviour

Where appropriate, learners should be able to:

- Modify their answer.
- Retry an exercise.
- Run code again.
- Request a hint.
- Review the relevant lesson content.

The interface should make it clear whether a learner is retrying an activity or submitting a new response.

### 11.4 Distinguishing Execution and Assessment

The interface must clearly distinguish:

- Successful code execution.
- Successful exercise assessment.

A program running without errors does not necessarily mean that the exercise has been completed correctly.

## 12. AI Assistance Experience

AI assistance should feel like a contextual learning aid rather than a separate chatbot that distracts from the lesson.

### 12.1 Entry Points

AI assistance may be accessed from:

- Lesson explanations.
- Code editor and execution feedback.
- Exercises.
- Assessment results.
- Guided labs.

### 12.2 Interaction Behaviour

When a learner requests help:

1. The learner selects a hint or explanation action.
2. The platform provides the relevant lesson or activity context to the AI service.
3. The AI generates a contextual response.
4. The response is displayed near the relevant learning activity.
5. The learner can apply the guidance and continue.

### 12.3 AI Response Presentation

AI responses should:

- Use beginner-friendly language.
- Focus on the learner's current problem.
- Explain concepts rather than simply provide answers.
- Use code examples where helpful.
- Avoid overwhelming learners with unnecessarily long responses.
- Distinguish suggestions from verified assessment results.

### 12.4 AI Loading and Error States

The interface should communicate when:

- A response is being generated.
- The request is taking longer than expected.
- The AI service is unavailable.
- A response could not be generated.

Learners should receive a clear option to retry when appropriate.

AI assistance should not block access to the rest of the lesson.

## 13. Guided Lab Experience

Guided labs should provide a structured experience that helps learners complete scientific computing tasks step by step.

### 13.1 Lab Presentation

Each lab should communicate:

- Lab title.
- Purpose and scientific context.
- Learning objectives.
- Prerequisites.
- Required instructions.
- Starter code and data.
- Expected tasks and outcomes.

### 13.2 Step-by-Step Interaction

The learner should be able to follow the lab in a logical sequence.

The interface should clearly distinguish:

- Background information.
- Instructions.
- Coding tasks.
- Expected outputs.
- Assessment criteria.
- Interpretation of results.

### 13.3 Lab Feedback

Feedback should help learners understand whether they have completed each required task.

Where possible, the interface should connect the assessment outcome to the scientific objective of the lab.

## 14. Responsive UX Requirements

The platform must provide a usable experience across desktop, tablet, and mobile devices.

### 14.1 Desktop

Desktop is the primary target for the initial coding experience.

The layout should support:

- Persistent course navigation sidebar.
- Main lesson content area.
- Accessible global context selector.
- Code editor and output panels.
- Multi-column layouts where appropriate.

### 14.2 Tablet

The interface should adapt to reduced screen width.

Requirements:

- Course navigation may become collapsible.
- Lesson content should remain readable.
- Coding panels should resize or stack vertically.
- Interactive controls should remain accessible.

### 14.3 Mobile

The mobile interface should prioritize reading and navigation.

Requirements:

- Sidebar should be accessible through a menu or drawer.
- Lesson content should use a single-column layout.
- Buttons and interactive controls should be touch-friendly.
- Code editor and output should stack vertically.
- Tables and wide code blocks should support appropriate horizontal scrolling.
- Theme and scientific-context controls should remain accessible.

The mobile experience should not simply shrink the desktop interface.

## 15. Accessibility Requirements

SPASCLE should follow WCAG 2.2 Level AA as the target accessibility standard.

The design should consider:

### 15.1 Colour and Contrast

- Text should meet applicable contrast requirements.
- Interactive components should have distinguishable states.
- Colour should not be the only indicator of correctness, errors, or status.
- Both light and dark themes should be checked for contrast.

### 15.2 Keyboard Accessibility

- Interactive elements should be reachable using a keyboard.
- Focus states should be visible.
- Navigation should not require a mouse.
- Dialogs and menus should support appropriate keyboard interaction.

### 15.3 Screen Reader Support

- Interface controls should have meaningful accessible names.
- Form controls should have associated labels.
- Important status messages should be announced appropriately.
- Page structure should use meaningful headings and landmarks.

### 15.4 Readability

- Text should be readable at different zoom levels.
- Content should have sufficient spacing.
- Instructions should be clear and understandable.
- Avoid relying exclusively on visual presentation to communicate important information.

### 15.5 Motion

- Avoid unnecessary animations.
- Respect reduced-motion preferences where applicable.
- Ensure animations do not interfere with reading or interaction.

## 16. Interface Feedback and System States

The platform should provide clear feedback for important interface states.

### 16.1 Loading States

Loading indicators should be displayed when:

- A lesson is being loaded.
- Code is being executed.
- An assessment is being processed.
- AI assistance is being generated.
- Guided lab content is being loaded.

Loading indicators should communicate what is happening rather than display unexplained activity.

### 16.2 Empty States

When content or results are unavailable, the interface should explain why and provide a useful next step.

Examples:

- No context-specific example is available.
- No output has been generated yet.
- An exercise has not been attempted.
- A lab does not have additional supporting material.

### 16.3 Error States

Errors should be presented in clear language.

The platform should distinguish between:

- User input errors.
- Code execution errors.
- Assessment failures.
- Network or service errors.
- AI service errors.
- Unexpected platform errors.

Where possible, provide a recovery action.

### 16.4 Success States

Successful actions should receive clear feedback.

Examples:

- Code executed successfully.
- Exercise passed.
- Quiz submitted.
- Lab task completed.

Success feedback should not be confused with permanent learner progress tracking, which is outside the MVP scope.

## 17. UI Component Behaviour

The following components should follow consistent interaction patterns.

| Component | UX requirement |
|---|---|
| Primary button | Clearly communicates the main action |
| Secondary button | Provides an alternative action without competing visually with the primary action |
| Navigation sidebar | Supports module expansion, lesson selection, and active lesson indication |
| Dropdown selector | Clearly displays the current selection and available options |
| Theme switcher | Allows light and dark theme selection |
| Code editor | Supports editing, execution, and understandable feedback |
| Output panel | Clearly separates program output from errors |
| Exercise component | Presents instructions, response controls, and submission actions |
| Assessment feedback | Communicates results and explains mistakes |
| AI assistance panel | Displays contextual hints and explanations |
| Lab component | Presents structured instructions and practical tasks |
| Modal/dialog | Used only when an action requires focused attention or confirmation |
| Tooltip | Provides brief explanations for unfamiliar controls where necessary |

## 18. UX Requirements for MVP Exclusions

The following features should not appear as active functionality in the MVP:

- Registration and sign-in interfaces.
- Learner profile and dashboard.
- Authenticated status and profile avatar.
- Persistent course completion indicators.
- Overall course completion percentage.
- Administrator dashboard.
- Reviewer dashboard.
- Classroom or institutional management.
- Payment and subscription interfaces.
- Persistent personal coding workspaces.

The UX should not create expectations around functionality that has not been implemented.

## 19. UX Acceptance Criteria

The MVP UX design should be considered ready for implementation when:

- The landing page provides a clear path into the learning environment.
- Learners can navigate modules and lessons without confusion.
- The course navigation and lesson content hierarchy are clear.
- Light and dark themes are defined and consistently applied.
- The primary and secondary brand colours are incorporated into the design system.
- Theme switching works consistently across the platform.
- The global scientific-context selector and lesson-level override are understandable.
- Coding activities provide clear editing, execution, and output experiences.
- Execution errors are presented in a beginner-friendly way.
- Exercises communicate instructions and assessment outcomes clearly.
- AI assistance is accessible from relevant learning activities.
- Guided labs provide a clear step-by-step learning experience.
- Loading, success, empty, and error states are defined.
- Desktop, tablet, and mobile layouts have been considered.
- Accessibility requirements are incorporated into the design.
- MVP exclusions are reflected in the interface design.

## 20. Relationship to Other Project Documents

This document should be used alongside:

- **Product Requirements Document (PRD):** Defines product goals, users, features, and release scope.
- **Software Requirements Specification (SRS):** Defines system functionality and technical requirements.
- **Information Architecture (IA):** Defines the organization of pages, content, navigation, and user flows.
- **Data Model and Database Design:** Defines how platform data is structured and stored.
- **API Contracts and Interface Design:** Defines interactions between the frontend, backend, code execution environment, and AI services.
- **UI Design Specification:** Defines the detailed visual appearance of interface components, layouts, typography, spacing, and design tokens.
- **UI Mockups and Prototypes:** Demonstrate the actual screens and interactions before implementation.

The UX Design Specification defines how the product should feel and behave from the user's perspective. The UI design translates these requirements into the visual interface.

