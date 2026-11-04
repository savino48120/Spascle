
# SPASCLE — UI Design Specification & Design System

**Version:** 1.0  
**Scope:** MVP / Release 1  
**Date:** November 2026  
**Status:** Draft

---

## 1. Purpose

This document defines the visual design system and user interface (UI) requirements for the SPASCLE MVP.

It establishes the visual identity, colour system, typography, spacing, layouts, reusable interface components, and screen-specific design requirements.

The purpose is to ensure that the platform has a consistent, recognizable, accessible, and visually coherent interface across all its pages and interactive learning components.

This document builds on the PRD, SRS, Information Architecture, and UX Design Specification.

It provides guidelines for translating the defined user experience into actual interface designs and frontend components.

## 2. Design Objectives

The SPASCLE interface should:

1. Establish a recognizable and consistent visual identity.
2. Provide a clean and uncluttered learning environment.
3. Make complex learning activities approachable for beginners.
4. Maintain visual consistency across the landing page and learning environment.
5. Support both light and dark themes.
6. Provide clear visual distinctions between navigation, content, interactive elements, and feedback.
7. Make code, scientific examples, exercises, and learning activities easy to read.
8. Adapt appropriately to desktop, tablet, and mobile devices.
9. Meet accessibility requirements, including appropriate colour contrast and visible interaction states.

## 3. Visual Design Direction

### 3.1 Overall Design Style

SPASCLE should adopt a modern, clean, educational, and technology-oriented visual style.

The interface should balance the simplicity of an educational platform with the technical character of a scientific computing environment.

**Design characteristics:**

- Clean and structured layouts.
- Clear visual hierarchy.
- Generous but controlled spacing.
- Minimal decorative elements.
- Consistent rounded corners.
- Subtle borders and shadows.
- Readable typography.
- Distinct visual treatment for interactive components.
- Restrained use of accent colours.

The platform should feel professional without appearing overly corporate or intimidating to beginners.

### 3.2 Design Inspiration

The Python learning environment should take structural inspiration from W3Schools.

This includes:

- Course navigation on the left.
- Main lesson content in the centre.
- Clear previous and next lesson navigation.
- Integrated code examples and interactive exercises.
- A structured and easily navigable course hierarchy.

This is a reference for information organization and usability, not a requirement to reproduce another platform's visual identity.

SPASCLE should maintain its own visual language and component styling.

## 4. Brand Identity and Colour System

### 4.1 Brand Colours

SPASCLE's primary and secondary brand colours are:

| Colour | Hex code | Role |
|---|---|---|
| Primary plum | `#580A50` | Main brand colour and primary interactive elements |
| Secondary gold | `#DB9000` | Supporting brand colour and visual accents |

The primary plum should be the dominant interactive brand colour.

The secondary gold should complement the plum and provide contrast in selected interface elements.

### 4.2 Primary Colour Usage

**Primary: `#580A50`**

Use for:

- Primary buttons.
- Active navigation indicators.
- Links.
- Selected tabs and controls.
- Important interactive elements.
- Focus indicators where appropriate.
- Selected interface states.

The primary colour should be used consistently so users can easily recognize interactive elements.

### 4.3 Secondary Colour Usage

**Secondary: `#DB9000`**

Use for:

- Supporting highlights.
- Secondary visual accents.
- Selected informational elements.
- Important labels or indicators.
- Occasional emphasis within learning content.

Avoid using gold for every secondary button or large background area. Its purpose is to complement the primary colour, not compete with it.

### 4.4 Neutral Colour Palette

Neutral colours form the foundation of both themes.

The following are proposed starting values. They should be validated against the actual interface designs and accessibility requirements.

| Token | Light mode | Dark mode |
|---|---|---|
| Page background | `#F8FAFC` | `#111827` |
| Primary surface | `#FFFFFF` | `#1F2937` |
| Secondary surface | `#F1F5F9` | `#273449` |
| Elevated surface | `#FFFFFF` | `#334155` |
| Primary text | `#172033` | `#F8FAFC` |
| Secondary text | `#475569` | `#CBD5E1` |
| Muted text | `#64748B` | `#94A3B8` |
| Border | `#E2E8F0` | `#374151` |
| Divider | `#E5E7EB` | `#374151` |
| Disabled surface | `#F1F5F9` | `#273449` |

These colours should be implemented as reusable design tokens rather than independently assigned throughout the interface.

### 4.5 Semantic Colour Palette

Semantic colours communicate system states and user feedback.

| Role | Suggested colour | Usage |
|---|---|---|
| Success | `#16A34A` | Correct answers and successful execution |
| Error | `#DC2626` | Failed execution and invalid input |
| Warning | `#D97706` | Cautions and important warnings |
| Information | `#0284C7` | Informational messages and tips |

Semantic colours should have suitable light and dark variants.

Their backgrounds, text, and icons should remain distinguishable in both themes.

### 4.6 Colour Accessibility

Brand colours must not be used in combinations that compromise readability.

Important considerations:

- White text should not automatically be used on the secondary gold colour.
- Use dark text on gold backgrounds where necessary.
- Check primary plum against white and dark backgrounds. `#580A50` is too dark for dark-mode surfaces (1.33:1 on `#111827`), so dark mode uses the adjusted shade `#A3399A` for fills and `#E8A6DF` for text.
- Provide accessible adjusted shades when the original brand colour does not meet the required contrast.
- Use colour alongside text, icons, or other indicators to communicate status.
- Validate all text and component combinations against WCAG 2.2 AA contrast requirements.

The original brand colours should remain the identity colours even when accessible variations are needed for particular interface states.

## 5. Light and Dark Theme Design

Both light and dark modes are required in the MVP.

### 5.1 Light Mode

<badge color="info">Default visual reference</badge>

Light mode should provide a bright, clean, and comfortable learning environment.

**Design characteristics:**

- Light neutral page backgrounds.
- White content surfaces.
- Dark text for readability.
- Muted grey supporting text.
- Subtle borders.
- Minimal shadows.
- Plum interactive elements.
- Gold supporting accents.

The learning content should remain the primary visual focus.

### 5.2 Dark Mode

Dark mode should provide a comfortable experience in low-light environments.

**Design characteristics:**

- Dark neutral page background.
- Slightly lighter surfaces for cards and panels.
- Light primary text.
- Muted secondary text.
- Subtle borders.
- Carefully adjusted shadows and elevation.
- Accessible plum and gold accents.
- Readable syntax highlighting in code editors.
- Minimalistic design

Avoid using pure black for every background surface. Different neutral shades should help distinguish the page background, cards, navigation, and elevated panels.

### 5.3 Theme Application

The theme must apply consistently to:

- Landing page.
- Header and navigation.
- Course navigation sidebar.
- Lesson content.
- Cards and panels.
- Code editor and output.
- Exercises and quizzes.
- Assessment feedback.
- AI assistance panels.
- Guided labs.
- Modals and dropdowns.
- Tooltips and notifications.

No major component should remain unintentionally in the opposite theme.

### 5.4 Theme Switching Control

The theme switcher should be accessible from the main interface.

It should support:

- Light mode.
- Dark mode.
- System preference, if implemented.

The control should clearly communicate the active theme.

The selected preference should be retained locally where practical, since the MVP does not require user accounts.

A manually selected theme should take precedence over the operating-system preference.

## 6. Typography System

### 6.1 Typography Principles

Typography should be clean, modern, and highly readable.

The same typography system should be used across the platform, with a separate monospaced font for code.

### 6.2 Font Recommendations

Suggested font families:

| Usage | Suggested font |
|---|---|
| Main interface | Inter |
| Alternative interface font | Geist |
| Code editor | JetBrains Mono |
| Alternative code font | Fira Code |

The final font choice should be consistent throughout the application.

These are recommendations rather than mandatory technology choices.

### 6.3 Typography Scale

The following is a proposed desktop typography scale.

| Token | Size | Weight | Usage |
|---|---:|---|---|
| Display | 48px | Bold | Landing page hero heading |
| H1 | 36px | Semibold/Bold | Main page headings |
| H2 | 28px | Semibold | Major sections |
| H3 | 22px | Semibold | Subsections |
| H4 | 18px | Semibold | Smaller section headings |
| Body Large | 18px | Regular | Important introductory content |
| Body | 16px | Regular | Main explanatory content |
| Body Small | 14px | Regular | Supporting information |
| Label | 13px | Medium | Form labels and metadata |
| Caption | 12px | Regular | Minor supporting text |
| Code | 14px | Regular | Code editor and code examples |

Typography should scale appropriately on smaller screens.

### 6.4 Typography Usage

- Use clear heading levels.
- Avoid excessively long line lengths.
- Maintain readable line spacing.
- Use bold text selectively.
- Use monospaced fonts for code.
- Avoid using colour alone to distinguish headings or important content.

## 7. Spacing and Layout System

### 7.1 Spacing Scale

Use a consistent spacing scale based on multiples of four.

| Token | Value | Typical usage |
|---|---:|---|
| XS | 4px | Small internal gaps |
| SM | 8px | Compact spacing |
| MD | 12px | Component spacing |
| LG | 16px | Standard spacing |
| XL | 24px | Section spacing |
| 2XL | 32px | Larger section spacing |
| 3XL | 48px | Major layout spacing |
| 4XL | 64px | Large page sections |
| 5XL | 80px | Hero and major section spacing |

The scale should be applied consistently across components.

### 7.2 Border Radius

Suggested border-radius tokens:

| Token | Value | Usage |
|---|---:|---|
| Small | 4px | Small controls and labels |
| Medium | 8px | Inputs and buttons |
| Large | 12px | Cards and panels |
| XL | 16px | Large cards and feature sections |
| Full | 9999px | Pills and circular controls |

Rounded corners should be consistent rather than applied randomly.

### 7.3 Borders and Shadows

- Use subtle borders to separate adjacent surfaces.
- Avoid excessive shadows.
- Use shadows mainly to communicate elevation.
- Maintain consistent border thickness.
- Ensure borders remain visible in both themes.

## 8. Global Layout and Navigation

### 8.1 Main Header

The main header should establish the SPASCLE identity and provide access to essential navigation controls.

**Recommended elements:**

- SPASCLE logo or wordmark.
- Link to the learning area.
- Global scientific-context selector where relevant.
- Theme switcher.
- Additional essential navigation links, if required.

The header should be visually simple and should not compete with the learning content.

### 8.2 Landing Page Header

The landing page header should contain:

- Brand identity.
- Learning navigation link.
- Theme switcher. - uses an icon
- Primary Start Learning action.

### 8.3 Learning Environment Header

The learning environment header should contain:

- SPASCLE brand identity.
- Current course identification.
- Global scientific-context selector.
- Theme switcher.

The header should remain compact to maximize the available learning area.

### 8.4 Course Navigation Sidebar

The course sidebar should appear on the left side of the learning environment on desktop.

**Visual requirements:**

- Distinct gray background surface.
- Clear module headings.
- Expandable and collapsible modules.
- Indented lesson items.
- Visible active lesson state.
- Consistent spacing between modules and lessons.
- Scrollable content when the course hierarchy exceeds the available height.

The active lesson should use a visible highlight, such as a subtle plum background and a primary-colour indicator.

In the MVP, the sidebar should not display persistent completion indicators.

### 8.5 Main Content Area

The main content area should occupy the remaining available width.

It should:

- Provide comfortable reading width.
- Maintain clear heading hierarchy.
- Separate lesson sections visually.
- Display code examples and activities within the learning flow.
- Avoid excessive horizontal scrolling.
- Provide sufficient spacing between content components.

### 8.6 Suggested Desktop Layout

```text
+----------------------------------------------------------------+
| SPASCLE     Python Course       Context Selector    Theme      |
+-----------------------+----------------------------------------+
|                       |                                        |
| COURSE SIDEBAR        | MAIN CONTENT AREA                      |
|                       |                                        |
| Module 1              | Lesson title                           |
|  Lesson 1             |                                        |
|  Lesson 2             | Learning objectives                    |
|                       |                                        |
| Module 2              | Explanation                            |
|  Lesson 1             |                                        |
|  Lesson 2             | Example                                |
|                       |                                        |
| Module 3              | Code editor                            |
|  Lesson 1             |                                        |
|  Lesson 2             | Output                                 |
|                       |                                        |
|                       | Previous lesson       Next lesson      |
+-----------------------+----------------------------------------+
```

This is a structural layout reference, not a final pixel-level wireframe.

## 9. Reusable UI Components

### 9.1 Buttons

Buttons should have consistent visual styling and clearly communicate their purpose.

**Button types:**

| Type | Purpose |
|---|---|
| Primary | Main action on a screen or component |
| Secondary | Supporting action |
| Outline | Alternative action with reduced visual emphasis |
| Ghost | Low-emphasis action |
| Destructive | Actions that remove or discard something |
| Icon button | Compact action represented by an icon |

**Primary button:**

- Uses the primary brand colour.
- Has sufficient text contrast.
- Uses consistent padding and border radius.
- Has visible hover, focus, active, and disabled states.

**Secondary button:**

- Uses a less prominent visual treatment.
- Should not compete with the primary action.
- May use an outline, neutral surface, or suitable secondary treatment.

Gold should not automatically be used for every secondary button. The secondary brand colour is an accent and may be used selectively.

### 9.2 Button States

Every interactive button should define:

- Default.
- Hover.
- Focus.
- Active/pressed.
- Disabled.
- Loading, where applicable.

### 9.3 Input Fields

Input fields should include:

- Clear labels.
- Appropriate placeholders where useful.
- Visible borders.
- Focus state.
- Disabled state.
- Error state.
- Helper text where necessary.

Placeholder text should not replace a proper field label.

### 9.4 Dropdowns and Selectors

Dropdowns should:

- Clearly indicate their purpose.
- Display the current selection.
- Provide a clear list of available options.
- Support keyboard interaction.
- Have visible focus and selected states.

The scientific-context selector should follow these conventions.

### 9.5 Cards

Cards may be used to organize:

- Course information.
- Learning features.
- Guided labs.
- Related learning resources.
- Informational sections.

Cards should have:

- Consistent padding.
- Clear headings.
- Subtle borders or shadows.
- Appropriate background surfaces.
- Consistent corner radius.

Avoid unnecessary cards inside cards.

### 9.6 Tabs

Tabs may be used when different related views need to be presented within the same area.

Examples include:

- Code and output views on constrained screens.
- Different representations of related content.

Tabs should clearly distinguish the active tab and support keyboard navigation.

### 9.7 Modals and Dialogs

Modals should be used sparingly.

They may be appropriate for:

- Important confirmations.
- Focused configuration actions.
- Necessary notices.

Do not use modals for ordinary lesson explanations or routine feedback that can be displayed inline.

### 9.8 Tooltips

Tooltips should provide brief explanations for unfamiliar controls.

They should not contain essential instructions that users cannot access elsewhere.

## 10. Landing Page UI Specification

The landing page should provide a strong introduction to SPASCLE and guide visitors towards the learning environment.

### 10.1 Recommended Structure

1. Header and navigation.
2. Hero section.
3. Platform introduction.
4. Learning features.
5. Python course introduction.
6. Call-to-action section.
7. Footer.

### 10.2 Hero Section

The hero should communicate:

- What SPASCLE is.
- Who it is designed for.
- What learners can achieve.
- How to get started.

**Visual elements:**

- Main heading.
- Supporting description.
- Primary Start Learning button.
- Optional secondary action.
- Supporting visual or product preview, if appropriate.

The primary action should be visually prominent.

### 10.3 Learning Features Section

Learning features may be displayed using a consistent card or grid layout.

Possible feature areas:

- Interactive Python lessons.
- In-browser coding.
- Scientific programming exercises.
- Guided computational labs.
- AI-supported learning assistance.

Each feature should have a concise title and description.

### 10.4 Course Introduction

The initial Python pathway should be presented clearly.

The section should explain that the course introduces Python through computational materials science examples.

The call to action should take visitors directly into the learning area.

### 10.5 Footer

The footer should contain essential platform information and relevant public links.

Avoid introducing unnecessary navigation categories in the MVP.

## 11. Learning Environment UI Specification

### 11.1 Main Layout

The learning environment should use a two-column desktop layout:

- Left: Course navigation.
- Right: Main learning content.

The global header should sit above both sections.

### 11.2 Sidebar Design

The sidebar should:

- Have a consistent width on desktop.
- Support scrolling.
- Distinguish module headings from lesson links.
- Clearly highlight the active lesson.
- Use expandable module controls.
- Avoid excessive visual decoration.

### 11.3 Lesson Content Design

The lesson content should:

- Have a readable maximum width.
- Use consistent heading sizes.
- Separate major sections with spacing.
- Present examples in visually distinct blocks.
- Use appropriate styling for notes, warnings, and tips.
- Keep interactive activities close to the explanations they support.

### 11.4 Previous and Next Navigation

Previous and next controls should be placed at the end of the lesson.

The controls should clearly communicate the destination lesson where practical.

The next lesson action may receive stronger visual emphasis than the previous lesson action.

## 12. Code Editor UI Specification

### 12.1 Editor Appearance

The code editor should look familiar to learners who may have encountered programming environments before, without introducing unnecessary complexity.

**Required elements:**

- Editor header or title.
- Code editing surface.
- Run button.
- Reset control where appropriate.
- Output panel.
- Error presentation area.

### 12.2 Code Editor Theme

The code editor must support both light and dark themes.

The editor's theme default should be the dark theme.

Syntax highlighting should remain readable in both themes.

### 12.3 Output Panel

The output panel should be visually separated from the editor.

It should distinguish:

- Standard program output.
- Error messages.
- Execution status.
- Timeout or service-unavailable messages.

### 12.4 Code Editor Layout

**Desktop:**

The editor and output may appear side by side or vertically, depending on the available space and activity design.

**Mobile:**

The editor and output should be stacked vertically.

The Run button should remain easy to locate and operate.

### 12.5 Code Editor States

| State | Visual treatment |
|---|---|
| Ready | Normal editor appearance |
| Running | Visible loading indicator and running status |
| Successful execution | Output displayed with success status |
| Execution error | Error message displayed in a distinguishable panel |
| Timeout | Warning or error message with explanation |
| Service unavailable | Clear notification and retry option where appropriate |

## 13. Exercise and Assessment UI Specification

### 13.1 Exercise Layout

An exercise should visually separate:

1. Exercise title.
2. Instructions.
3. Supporting information.
4. Response area.
5. Submission or checking control.
6. Feedback area.

### 13.2 Quiz Components

Quiz components should support:

- Question text.
- Multiple-choice options where appropriate.
- Clear selected-answer state.
- Submission action.
- Correct/incorrect feedback.
- Explanation of the result.

### 13.3 Coding Exercise Components

Coding exercises should integrate the code editor and assessment controls.

The learner should be able to distinguish between running code and submitting a solution for assessment.

### 13.4 Assessment Feedback

Feedback should use consistent semantic styling.

**Success feedback:**

- Success icon or indicator.
- Clear success message.
- Score or result where applicable.

**Incorrect answer feedback:**

- Clear indication that the answer needs attention.
- Explanation of the problem.
- Suggested next step.

Feedback should be constructive rather than punitive.

## 14. AI Assistance UI Specification

### 14.1 AI Assistance Panel

The AI assistance panel should be visually distinct but consistent with the rest of the platform.

It should include:

- A clear AI assistance heading or label.
- Generated hint or explanation.
- Loading state.
- Error state.
- Retry action where appropriate.

### 14.2 Visual Treatment

The panel may use a subtle tinted surface or border and a consistent small icon to distinguish AI-generated guidance from lesson content.

The primary and secondary brand colours may be used selectively.

Avoid using an overly decorative chatbot interface that distracts from the learning activity.

### 14.3 Placement

AI assistance should appear near the relevant lesson, code editor, exercise, or lab.

It should not unnecessarily cover the main learning content.

## 15. Guided Lab UI Specification

### 15.1 Lab Overview

The lab overview should contain:

- Lab title.
- Short description.
- Scientific context.
- Learning objectives.
- Prerequisites.
- Start or continue action.

### 15.2 Lab Workspace

The workspace should provide a clear distinction between:

- Instructions.
- Scientific background.
- Code editor.
- Supporting data.
- Output.
- Assessment results.

### 15.3 Lab Progression

The lab interface should make the current step clear.

Where a lab has multiple steps, use a simple step indicator or numbered sections.

The learner should be able to understand which task they are currently completing.

## 16. Icons and Illustrations

### 16.1 Icon Style

Use a consistent icon family throughout the platform.

Icons should:

- Have a consistent visual weight.
- Use consistent sizing.
- Be recognizable.
- Support rather than replace text labels.
- Follow the active theme.

Avoid mixing unrelated icon styles.

### 16.2 Illustrations

Illustrations may be used to support:

- Landing page communication.
- Scientific concepts.
- Course introductions.
- Empty states.

Illustrations should be purposeful and should not distract from instructional content.

### 16.3 Scientific Visuals

Scientific illustrations, diagrams, plots, and material representations should be visually clear and appropriately labelled.

The interface should distinguish scientific figures from decorative graphics.

## 17. Responsive UI Specification

### 17.1 Desktop

Desktop should provide the full learning environment.

Suggested layout:

- Header across the top.
- Persistent left sidebar.
- Main lesson content.
- Integrated coding and output panels.

### 17.2 Tablet

On tablet screens:

- The sidebar should be collapsible.
- Main content should use available width efficiently.
- Coding panels may stack.
- Header controls should remain accessible.

### 17.3 Mobile

On mobile screens:

- The sidebar should open through a menu or drawer.
- The main content should use a single-column layout.
- Cards should stack vertically.
- Buttons should be touch-friendly.
- Code editor and output should stack.
- Dropdowns and menus should fit the viewport.
- Wide tables and code blocks should have suitable overflow handling.

### 17.4 Responsive Breakpoints

The following breakpoints are initial design references and may be adjusted during implementation.

| Device category | Suggested viewport width |
|---|---:|
| Mobile | Below 640px |
| Large mobile / small tablet | 640px–767px |
| Tablet | 768px–1023px |
| Desktop | 1024px–1279px |
| Large desktop | 1280px and above |

The design should respond to available space rather than depend exclusively on device labels.

## 18. Accessibility Requirements

The UI design should target WCAG 2.2 Level AA.

Requirements include:

- Sufficient text and interface contrast.
- Visible keyboard focus indicators.
- Proper labels for interactive controls.
- Readable typography.
- Appropriate heading hierarchy.
- Accessible menus and dropdowns.
- Keyboard-operable navigation.
- Status indicators that do not rely on colour alone.
- Suitable touch target sizes.
- Support for reduced-motion preferences.

Accessibility must be considered in both light and dark themes.

## 19. Design Tokens and Component Consistency

The design system should define reusable tokens for:

- Brand colours.
- Neutral colours.
- Semantic colours.
- Typography.
- Spacing.
- Border radius.
- Borders.
- Shadows.
- Component dimensions.
- Interaction states.
- Theme-specific values.

The frontend should consume these tokens consistently.

Avoid assigning unrelated custom values to individual components when an existing design token can be reused.

## 20. UI Design Acceptance Criteria

The UI design should be considered sufficiently defined for implementation when:

- The visual identity of SPASCLE is established.
- The primary and secondary brand colours are incorporated consistently.
- Light and dark theme palettes are defined.
- Typography and spacing systems are established.
- Global navigation and page layouts are defined.
- Landing page sections have visual specifications.
- The learning environment layout is defined.
- Sidebar and lesson components are specified.
- Code editor and output panel designs are specified.
- Exercise and assessment components are specified.
- AI assistance and guided lab components are specified.
- Component interaction states are defined.
- Responsive layouts are documented.
- Accessibility requirements are addressed.
- Reusable design tokens are established.

## 21. Relationship to Other Project Documents

This document should be read alongside:

- **Product Requirements Document (PRD):** Defines the product vision, objectives, features, and scope.
- **Software Requirements Specification (SRS):** Defines functional and non-functional system requirements.
- **Information Architecture (IA):** Defines content organization, navigation, and user flows.
- **UX Design Specification:** Defines the intended user experience and interaction behaviour.
- **Data Model and Database Design:** Defines the structure and storage of platform information.
- **API Contracts and Interface Design:** Defines system communication and integration requirements.
- **UI Mockups and Prototypes:** Translate this design specification into concrete visual screens and interactions.

The UI Design Specification establishes the visual design rules and component requirements. The mockups and prototypes demonstrate how those rules are applied to actual screens.

