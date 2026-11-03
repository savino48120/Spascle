# SPASCLE — Information Architecture & User Flows

Version: 2.0\
Scope: MVP / Release 1\
Date: November 2026\
Status: Revised draft

This document defines the information architecture (IA) for the SPASCLE MVP. It translates the revised PRD and SRS into a practical structure for organizing the platform's pages, navigation, content, and interactive learning experiences.

The IA focuses exclusively on the MVP. Authentication, learner profiles, persistent progress, administrator interfaces, reviewer interfaces, and Bash are excluded from the MVP architecture.

# 1. Purpose

The purpose of this document is to define:

- The overall structure of the SPASCLE platform.
- The relationship between its major pages and features.
- The navigation hierarchy for the Python learning area.
- The organization of lessons, exercises, and guided labs.
- The placement of scientific-context controls.
- The interaction between the lesson interface, code editor, execution environment, assessment system, and AI assistance.
- The principal user journeys through the MVP.

The architecture should support a straightforward learning experience for beginners while allowing the platform to accommodate additional courses, scientific contexts, and programming languages in future releases.

# 2. IA Design Principles

The information architecture shall follow these principles.

| Principle                   | Application                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| Public-first access         | Visitors should be able to start learning without registration or sign-in.                            |
| Learning-focused navigation | The course structure should make it easy to move between modules and lessons.                         |
| Progressive learning        | Content should move from introductory concepts towards more advanced applications.                    |
| Scientific relevance        | Materials science should be the default context for examples and exercises.                           |
| Context flexibility         | Learners should be able to select another scientific context globally or within an individual lesson. |
| Integrated practice         | Coding, execution, exercises, and feedback should be accessible within the learning experience.       |
| Clear separation of content | Explanations, examples, exercises, and guided labs should be distinguishable.                         |
| Extensibility               | The architecture should accommodate additional contexts, courses, and programming languages later.    |
| Minimal complexity          | The MVP should avoid unnecessary dashboards, account systems, and administrative interfaces.          |

# 3. Overall Information Architecture

The MVP consists of two primary areas:

1. Public landing page: Introduces SPASCLE and directs visitors to the learning environment.
2. Python learning area: Contains the course structure, lessons, coding environment, exercises, assessments, and guided labs.

The coding environment and assessment features are integrated into the learning experience rather than treated as independent products.

## 3.1 High-level site map

\#chatgpt-mermaid-\_r_1al\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1al\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1al\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1al\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1al\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1al\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1al\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1al\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1al\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1al\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1al\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1al\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1al\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1al\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1al\_ p{margin:0;}#chatgpt-mermaid-\_r_1al\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1al\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1al\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1al\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1al\_ .label text,#chatgpt-mermaid-\_r_1al\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1al\_ .node rect,#chatgpt-mermaid-\_r_1al\_ .node circle,#chatgpt-mermaid-\_r_1al\_ .node ellipse,#chatgpt-mermaid-\_r_1al\_ .node polygon,#chatgpt-mermaid-\_r_1al\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1al\_ .rough-node .label text,#chatgpt-mermaid-\_r_1al\_ .node .label text,#chatgpt-mermaid-\_r_1al\_ .image-shape .label,#chatgpt-mermaid-\_r_1al\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1al\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1al\_ .rough-node .label,#chatgpt-mermaid-\_r_1al\_ .node .label,#chatgpt-mermaid-\_r_1al\_ .image-shape .label,#chatgpt-mermaid-\_r_1al\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1al\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1al\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1al\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1al\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1al\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1al\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1al\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1al\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1al\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1al\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1al\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1al\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1al\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1al\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1al\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1al\_ .icon-shape,#chatgpt-mermaid-\_r_1al\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1al\_ .icon-shape p,#chatgpt-mermaid-\_r_1al\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1al\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1al\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1al\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1al\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1al\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1al\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1al\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1al\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1al\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1al\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1al\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1al\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1al\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1al\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1al\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1al\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1al\_ .node rect,#chatgpt-mermaid-\_r_1al\_ .node circle,#chatgpt-mermaid-\_r_1al\_ .node ellipse,#chatgpt-mermaid-\_r_1al\_ .node polygon,#chatgpt-mermaid-\_r_1al\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1al\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1al\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1al\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1al\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1al\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}SPASCLELanding PagePython Learning AreaIntroduction to SPASCLEWhat Learners Can DoLearning Pathway OverviewStart Learning PythonCourse NavigationGlobal Scientific ContextSelectorPython CourseModules / TopicsLessonsLesson ContentExplanationsCode ExamplesExercisesKnowledge ChecksGuided LabsCode EditorPython ExecutionOutput and ErrorsAutomated AssessmentScores and Test ResultsAI-Assisted FeedbackLesson Context SelectorContext-Specific Content

## 3.2 Primary navigation structure

The MVP should have a simple navigation structure.

| Navigation area             | Purpose                                                            |
| --------------------------- | ------------------------------------------------------------------ |
| SPASCLE logo                | Returns the visitor to the landing page.                           |
| Home                        | Opens the public landing page.                                     |
| Learn Python                | Opens the Python learning area.                                    |
| Scientific context selector | Changes the preferred scientific context across the learning area. |
| Course sidebar              | Provides navigation between modules and lessons.                   |

The learning area should prioritize course navigation rather than general website navigation.

No account menu, profile avatar, sign-in button, or learner dashboard is required in the MVP.

# 4. Page and Screen Architecture

## 4.1 Landing Page

Purpose: Introduce the platform and encourage visitors to begin learning.

### Main sections

| Section                  | Content                                                               | Primary action            |
| ------------------------ | --------------------------------------------------------------------- | ------------------------- |
| Hero section             | Platform introduction, value proposition, and Python learning pathway | Start learning            |
| About SPASCLE            | Explanation of the platform and its purpose                           | Learn more                |
| Learning approach        | Lessons, scientific examples, coding exercises, and guided labs       | Explore learning approach |
| Scientific applications  | Introduction to scientific programming and its applications           | Explore Python pathway    |
| Learning pathway preview | Overview of the initial Python course                                 | Start Python              |
| Footer                   | Relevant platform information and links                               | Navigation                |

### Landing page hierarchy

\#chatgpt-mermaid-\_r_1as\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1as\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1as\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1as\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1as\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1as\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1as\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1as\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1as\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1as\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1as\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1as\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1as\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1as\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1as\_ p{margin:0;}#chatgpt-mermaid-\_r_1as\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1as\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1as\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1as\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1as\_ .label text,#chatgpt-mermaid-\_r_1as\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1as\_ .node rect,#chatgpt-mermaid-\_r_1as\_ .node circle,#chatgpt-mermaid-\_r_1as\_ .node ellipse,#chatgpt-mermaid-\_r_1as\_ .node polygon,#chatgpt-mermaid-\_r_1as\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1as\_ .rough-node .label text,#chatgpt-mermaid-\_r_1as\_ .node .label text,#chatgpt-mermaid-\_r_1as\_ .image-shape .label,#chatgpt-mermaid-\_r_1as\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1as\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1as\_ .rough-node .label,#chatgpt-mermaid-\_r_1as\_ .node .label,#chatgpt-mermaid-\_r_1as\_ .image-shape .label,#chatgpt-mermaid-\_r_1as\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1as\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1as\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1as\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1as\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1as\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1as\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1as\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1as\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1as\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1as\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1as\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1as\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1as\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1as\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1as\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1as\_ .icon-shape,#chatgpt-mermaid-\_r_1as\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1as\_ .icon-shape p,#chatgpt-mermaid-\_r_1as\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1as\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1as\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1as\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1as\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1as\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1as\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1as\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1as\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1as\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1as\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1as\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1as\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1as\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1as\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1as\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1as\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1as\_ .node rect,#chatgpt-mermaid-\_r_1as\_ .node circle,#chatgpt-mermaid-\_r_1as\_ .node ellipse,#chatgpt-mermaid-\_r_1as\_ .node polygon,#chatgpt-mermaid-\_r_1as\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1as\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1as\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1as\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1as\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1as\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Landing PageHeroAbout SPASCLEHow Learning WorksScientific ApplicationsPython Pathway PreviewFooterPlatform IntroductionStart Learning CTAStructured LessonsInteractive CodingExercises and AssessmentsGuided Computational LabsCourse DescriptionCourse TopicsStart Python Course

### Landing page behavior

- The primary call-to-action shall take visitors directly to the Python learning area.
- Visitors shall not be required to register or sign in.
- The landing page shall communicate that the platform is initially focused on Python for scientific programming.
- The landing page shall not imply that other programming pathways are already available.

## 4.2 Python Learning Area

Purpose: Provide the main learning interface through which visitors access lessons, write code, complete exercises, and participate in guided labs.

### Main layout

The learning area should follow a documentation-style interface inspired by platforms such as W3Schools.

[Did you know that W3Schools also teaches core programming concepts?  Learn how programming works.   We will take you from variables and if statements to loops, functions, binary numbers, and… | W3Schools.com | 54 comments](https://images.openai.com/static-rsc-4/EFgaHyO5xIZ3grYxbxrEbrn7oCQkIVS6T_M1ZzmNnf7PtoJXru1pegVcgeBbYibxj43YVe0R7M3XiNvs9mh7M9empKW4pdMJkY6TBsD-jBYHZ2Q5DZSkOuH_zIDCP9VkrBvUlB_8VzvJoy8Q9cMPu44t_ZAd2aX1ao_e3numwkk?purpose=inline)

[Coding Labs for Schools, AI Coding Lab, NEP 2020 Policy](https://images.openai.com/static-rsc-4/0cbgsQMeyNETNm9bbzAzszxhnWyI3Yb9dAHvRBAR6YJhfkezxzkxMu7bAGm5rYkMvZZbrJ4PThRFh0GNdKNM6YBea0qQUHgLpTR7P0GncOsNXRm9CrMMkCHI90yHuamSGOWu4DaAAUnN1-y8ViSDCnFVgiNZrlN2xaxf2rmvrXc?purpose=inline)

[DataCamp - Learn data science online | Datatori](https://images.openai.com/static-rsc-4/ma07YDTaE5fvQpwN3yLtU5wq3kkKt8ycdOlZF3E6BvEbqMjTZ22D5fSJ12xjhYvCtrX9jcpShDwA5lFtqH2-KXbm1m-NBWZFubzEaU03yyvOKzn3HdBwcdWBC8-_lufM--aJ0thylJfy_CFtfYtlIXToPVh02IsXsyGLQSxOBeY?purpose=inline)

11

The layout consists of three primary regions:

| Region            | Responsibility                                                           |
| ----------------- | ------------------------------------------------------------------------ |
| Left sidebar      | Displays course, modules, and lesson navigation.                         |
| Main content area | Displays the selected lesson, explanations, examples, and activities.    |
| Context controls  | Provides global scientific-context selection and lesson-level overrides. |

The code editor and execution output may appear within lesson activities or in a dedicated expandable workspace, depending on the lesson design.

### Suggested layout

```
+--------------------------------------------------------------+
| SPASCLE             Python Learning       Scientific Context |
+--------------------+-----------------------------------------+
|                    |                                         |
| COURSE SIDEBAR     |         LESSON CONTENT                  |
|                    |                                         |
| Python             |  Lesson title                           |
|                    |  Learning objectives                    |
| Module 1           |                                         |
|  - Lesson 1        |  Explanation                             |
|  - Lesson 2        |                                         |
|  - Lesson 3        |  Code example                            |
|                    |                                         |
| Module 2           |  Interactive exercise                   |
|  - Lesson 4        |                                         |
|  - Lesson 5        |  Code editor                             |
|                    |  Run code                                |
|                    |  Output / errors                        |
|                    |                                         |
|                    |  Assessment and feedback                |
|                    |                                         |
|                    |  Previous lesson       Next lesson      |
+--------------------+-----------------------------------------+
```

This is a logical layout rather than a final visual design. Responsive behavior may rearrange the regions on smaller screens.

## 4.3 Course Sidebar

Purpose: Help learners understand the course structure and move between lessons.

### Hierarchy

```
Python for Scientific Computing
│
├── Module 1: Introduction to Python
│   ├── Lesson 1: Introduction to Programming
│   ├── Lesson 2: Setting Up Your Python Environment
│   └── Lesson 3: Your First Python Program
│
├── Module 2: Python Fundamentals
│   ├── Lesson 1: Variables and Data Types
│   ├── Lesson 2: Operators and Expressions
│   ├── Lesson 3: Strings
│   └── Lesson 4: Input and Output
│
├── Module 3: Control Flow
│   ├── Lesson 1: Conditional Statements
│   ├── Lesson 2: For Loops
│   └── Lesson 3: While Loops
│
├── Module 4: Data Structures
│   ├── Lesson 1: Lists
│   ├── Lesson 2: Tuples
│   ├── Lesson 3: Dictionaries
│   └── Lesson 4: Sets
│
├── Module 5: Functions
│   ├── Lesson 1: Introduction to Functions
│   ├── Lesson 2: Function Arguments
│   └── Lesson 3: Return Values
│
├── Module 6: Scientific Python
│   ├── Lesson 1: Introduction to NumPy
│   ├── Lesson 2: NumPy Arrays
│   ├── Lesson 3: Array Operations
│   └── Lesson 4: Introduction to Matplotlib
│
└── Module 7: Computational Materials Science
    ├── Lesson 1: Representing Materials Data
    ├── Lesson 2: Working with Scientific Data
    └── Lesson 3: Visualizing Materials Properties
```

Illustrative course structure. The final module and lesson list should be confirmed during curriculum development.

### Sidebar behavior

- Modules shall be expandable and collapsible.
- Selecting a lesson shall load the corresponding lesson content.
- The currently selected lesson shall be visually highlighted.
- The sidebar shall remain accessible while navigating between lessons on larger screens.
- On smaller screens, the sidebar may be presented as a drawer or collapsible navigation panel.
- Completion indicators are not required in the MVP because persistent learner progress is deferred to Release 2.

## 4.4 Lesson Page

Purpose: Present instructional content and provide opportunities to apply the concepts being taught.

### Lesson structure

A standard lesson should follow this logical structure:

```
Lesson
│
├── Lesson Header
│   ├── Lesson Title
│   ├── Short Description
│   └── Learning Objectives
│
├── Context Controls
│   └── Lesson-Level Scientific Context Selector
│
├── Instructional Content
│   ├── Concept Explanation
│   ├── Supporting Examples
│   └── Code Examples
│
├── Practice
│   ├── Conceptual Questions
│   ├── Coding Exercises
│   └── Knowledge Checks
│
├── Interactive Coding
│   ├── Code Editor
│   ├── Run Button
│   ├── Execution Output
│   └── Error Information
│
├── Assessment
│   ├── Submission
│   ├── Test Results
│   ├── Score
│   └── Feedback
│
├── AI Assistance
│   ├── Hints
│   ├── Error Explanations
│   └── Contextual Guidance
│
└── Lesson Navigation
    ├── Previous Lesson
    └── Next Lesson
```

Not every lesson needs to contain every section. For example, an introductory conceptual lesson may contain a knowledge check but no substantial coding exercise.

### Lesson content components

| Component           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| Lesson header       | Identifies the lesson and its purpose.                       |
| Learning objectives | States what the learner should understand or be able to do.  |
| Explanatory content | Introduces the programming concept.                          |
| Code example        | Demonstrates the concept using Python.                       |
| Scientific example  | Connects the concept to an available scientific application. |
| Exercise            | Allows the learner to apply the concept.                     |
| Knowledge check     | Tests conceptual understanding.                              |
| Code editor         | Allows code entry and execution.                             |
| Assessment result   | Displays the outcome of a submitted exercise.                |
| AI feedback         | Provides contextual hints and explanations.                  |
| Lesson navigation   | Allows movement to other lessons.                            |

# 5. Scientific Context Architecture

Scientific-context selection is a core feature of the learning experience.

The architecture must support both a global preference and a lesson-level override without confusing the learner.

## 5.1 Global context selector

The global selector establishes the preferred scientific context across the learning area.

Initial default: Materials science.

Potential context options include:

- Materials science.
- Chemistry.
- Physics.
- Biology.
- General programming.

Only contexts with suitable prepared content should be presented as available choices for a particular lesson or activity.

## 5.2 Lesson-level context selector

The lesson-level selector allows learners to use an alternative context within an individual lesson.

For example:

- Global context: Materials science.
- Current lesson: Variables and data types.
- Lesson-level selection: Chemistry.
- Result: The current lesson displays the available chemistry example.
- The global preference remains Materials science.

## 5.3 Context selection flow

\#chatgpt-mermaid-\_r_1cl\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1cl\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1cl\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1cl\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1cl\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cl\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1cl\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1cl\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1cl\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1cl\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1cl\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1cl\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cl\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cl\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1cl\_ p{margin:0;}#chatgpt-mermaid-\_r_1cl\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cl\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cl\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cl\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1cl\_ .label text,#chatgpt-mermaid-\_r_1cl\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cl\_ .node rect,#chatgpt-mermaid-\_r_1cl\_ .node circle,#chatgpt-mermaid-\_r_1cl\_ .node ellipse,#chatgpt-mermaid-\_r_1cl\_ .node polygon,#chatgpt-mermaid-\_r_1cl\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1cl\_ .rough-node .label text,#chatgpt-mermaid-\_r_1cl\_ .node .label text,#chatgpt-mermaid-\_r_1cl\_ .image-shape .label,#chatgpt-mermaid-\_r_1cl\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1cl\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1cl\_ .rough-node .label,#chatgpt-mermaid-\_r_1cl\_ .node .label,#chatgpt-mermaid-\_r_1cl\_ .image-shape .label,#chatgpt-mermaid-\_r_1cl\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1cl\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1cl\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cl\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cl\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1cl\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1cl\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1cl\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1cl\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1cl\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1cl\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1cl\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cl\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cl\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1cl\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cl\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1cl\_ .icon-shape,#chatgpt-mermaid-\_r_1cl\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1cl\_ .icon-shape p,#chatgpt-mermaid-\_r_1cl\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1cl\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1cl\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1cl\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1cl\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1cl\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1cl\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1cl\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1cl\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1cl\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cl\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1cl\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cl\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1cl\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1cl\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1cl\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1cl\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1cl\_ .node rect,#chatgpt-mermaid-\_r_1cl\_ .node circle,#chatgpt-mermaid-\_r_1cl\_ .node ellipse,#chatgpt-mermaid-\_r_1cl\_ .node polygon,#chatgpt-mermaid-\_r_1cl\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1cl\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1cl\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1cl\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1cl\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cl\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Open Learning AreaLoad Global ContextDefault: Materials ScienceOpen LessonLesson-level overrideselected?Use Global ContextUse Lesson-level ContextSuitable content available?Display Context-specificContentDisplay Unavailability MessageSuitable Alternative Available?Offer Alternative ContentDisplay General Explanation orAvailable ContentContinue LearningNoYesYesNoYesNo

## 5.4 Context precedence rules

| Situation                                | Expected behavior                                                                              |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
| No context has been selected             | Materials science is used.                                                                     |
| Learner changes global context           | The new preference applies across lessons where suitable content exists.                       |
| Learner changes context within a lesson  | The lesson-level context overrides the global context for that lesson.                         |
| Learner moves to another lesson          | The new lesson uses the global preference unless a separate lesson-level override is selected. |
| Selected context has no suitable content | The system explains the limitation and offers an appropriate alternative where available.      |

# 6. Interactive Coding Architecture

The coding environment is integrated into lessons, exercises, and guided labs.

It should not feel like a separate development tool that learners must navigate away from the lesson to use.

## 6.1 Code editor structure

The coding interface should contain:

| Component        | Function                                             |
| ---------------- | ---------------------------------------------------- |
| Code editor      | Accepts and displays learner-written Python code.    |
| Run button       | Submits code for execution.                          |
| Reset control    | Restores the original starter code where applicable. |
| Output panel     | Displays successful execution output.                |
| Error panel      | Displays execution errors.                           |
| Copy control     | Copies learner code.                                 |
| Download control | Downloads code where supported.                      |
| AI assistance    | Provides hints or explanations where available.      |

## 6.2 Execution interaction flow

\#chatgpt-mermaid-\_r_1cs\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1cs\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1cs\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1cs\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1cs\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cs\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1cs\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1cs\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1cs\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1cs\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1cs\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1cs\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cs\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cs\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1cs\_ p{margin:0;}#chatgpt-mermaid-\_r_1cs\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cs\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cs\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cs\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1cs\_ .label text,#chatgpt-mermaid-\_r_1cs\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cs\_ .node rect,#chatgpt-mermaid-\_r_1cs\_ .node circle,#chatgpt-mermaid-\_r_1cs\_ .node ellipse,#chatgpt-mermaid-\_r_1cs\_ .node polygon,#chatgpt-mermaid-\_r_1cs\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1cs\_ .rough-node .label text,#chatgpt-mermaid-\_r_1cs\_ .node .label text,#chatgpt-mermaid-\_r_1cs\_ .image-shape .label,#chatgpt-mermaid-\_r_1cs\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1cs\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1cs\_ .rough-node .label,#chatgpt-mermaid-\_r_1cs\_ .node .label,#chatgpt-mermaid-\_r_1cs\_ .image-shape .label,#chatgpt-mermaid-\_r_1cs\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1cs\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1cs\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cs\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cs\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1cs\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1cs\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1cs\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1cs\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1cs\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1cs\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1cs\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cs\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cs\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1cs\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1cs\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1cs\_ .icon-shape,#chatgpt-mermaid-\_r_1cs\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1cs\_ .icon-shape p,#chatgpt-mermaid-\_r_1cs\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1cs\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1cs\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1cs\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1cs\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1cs\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1cs\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1cs\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1cs\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1cs\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cs\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1cs\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1cs\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1cs\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1cs\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1cs\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1cs\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1cs\_ .node rect,#chatgpt-mermaid-\_r_1cs\_ .node circle,#chatgpt-mermaid-\_r_1cs\_ .node ellipse,#chatgpt-mermaid-\_r_1cs\_ .node polygon,#chatgpt-mermaid-\_r_1cs\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1cs\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1cs\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1cs\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1cs\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1cs\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Learner Opens Coding ActivityDisplay Instructions andStarter CodeLearner Edits CodeSelect RunSubmit Code to ExecutionEnvironmentExecution Accepted?Display Execution Error orLimit MessageExecute in IsolatedEnvironmentExecution Successful?Display OutputDisplay Error InformationExercise RequiresAssessment?Offer Relevant ErrorExplanationSubmit to AssessmentContinue LearningRun Defined TestsDisplay Test Results and ScoreOffer AI Feedback WhereAvailableContinue to Next Activity orLessonNoYesYesNoYesNo

## 6.3 Execution and assessment separation

The architecture should distinguish between code execution and exercise assessment.

Code execution answers:

- Does the code run?
- What output does it produce?
- Did it produce an error?

Exercise assessment answers:

- Does the submission satisfy the exercise requirements?
- Which tests passed or failed?
- What score or result should be returned?

A program can execute successfully and still fail an exercise because its output or behavior does not meet the expected criteria.

## 6.4 Supported execution environment

The initial execution environment shall support:

- Python standard library.
- NumPy.
- Matplotlib.
- Other packages explicitly approved for the MVP.

The interface should not expose arbitrary package installation, unrestricted network access, or unrestricted filesystem access.

# 7. Exercise and Assessment Architecture

Exercises should be presented within the lesson where the relevant concept is taught.

## 7.1 Exercise hierarchy

```
Lesson
│
├── Exercise
│   ├── Exercise Title
│   ├── Instructions
│   ├── Learning Objective
│   ├── Exercise Type
│   ├── Starter Code (where applicable)
│   ├── Submission Interface
│   ├── Assessment Criteria
│   └── Feedback
│
└── Assessment Result
    ├── Pass / Fail or Result Status
    ├── Score (where applicable)
    ├── Test Outcomes
    └── Feedback
```

## 7.2 Exercise types

| Exercise type               | Learner interaction                       | Assessment approach            |
| --------------------------- | ----------------------------------------- | ------------------------------ |
| Multiple choice             | Selects an answer                         | Predefined correct answer      |
| Conceptual question         | Responds to a question                    | Defined answer criteria        |
| Knowledge check             | Answers a short question                  | Defined answer criteria        |
| Coding exercise             | Writes and submits Python code            | Automated test cases           |
| Scientific programming task | Uses Python to solve a scientific problem | Defined computational criteria |

## 7.3 Assessment flow

\#chatgpt-mermaid-\_r_1d8\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1d8\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1d8\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1d8\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1d8\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1d8\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1d8\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1d8\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1d8\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1d8\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1d8\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1d8\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1d8\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1d8\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1d8\_ p{margin:0;}#chatgpt-mermaid-\_r_1d8\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1d8\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1d8\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1d8\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1d8\_ .label text,#chatgpt-mermaid-\_r_1d8\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1d8\_ .node rect,#chatgpt-mermaid-\_r_1d8\_ .node circle,#chatgpt-mermaid-\_r_1d8\_ .node ellipse,#chatgpt-mermaid-\_r_1d8\_ .node polygon,#chatgpt-mermaid-\_r_1d8\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1d8\_ .rough-node .label text,#chatgpt-mermaid-\_r_1d8\_ .node .label text,#chatgpt-mermaid-\_r_1d8\_ .image-shape .label,#chatgpt-mermaid-\_r_1d8\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1d8\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1d8\_ .rough-node .label,#chatgpt-mermaid-\_r_1d8\_ .node .label,#chatgpt-mermaid-\_r_1d8\_ .image-shape .label,#chatgpt-mermaid-\_r_1d8\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1d8\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1d8\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1d8\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1d8\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1d8\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1d8\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1d8\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1d8\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1d8\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1d8\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1d8\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1d8\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1d8\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1d8\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1d8\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1d8\_ .icon-shape,#chatgpt-mermaid-\_r_1d8\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1d8\_ .icon-shape p,#chatgpt-mermaid-\_r_1d8\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1d8\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1d8\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1d8\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1d8\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1d8\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1d8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1d8\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1d8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1d8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d8\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1d8\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1d8\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1d8\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1d8\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1d8\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1d8\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1d8\_ .node rect,#chatgpt-mermaid-\_r_1d8\_ .node circle,#chatgpt-mermaid-\_r_1d8\_ .node ellipse,#chatgpt-mermaid-\_r_1d8\_ .node polygon,#chatgpt-mermaid-\_r_1d8\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1d8\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1d8\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1d8\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1d8\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1d8\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Open ExerciseRead InstructionsProvide Answer or Write CodeSubmit ResponseExercise TypeEvaluate Against AnswerCriteriaExecute Submitted CodeRun Automated TestsDetermine Assessment ResultDisplay ResultDisplay Score and TestOutcomesProvide FeedbackLearner Wants Further Help?Request AI Hint or ExplanationContinue or RetryDisplay Contextual AIFeedbackRevise and Resubmit orContinueConceptualCodingYesNo

# 8. AI-Assisted Learning Architecture

AI assistance should be integrated into relevant learning activities.

It should not replace the instructional structure or become a mandatory step in every lesson.

## 8.1 AI assistance entry points

| Entry point         | Purpose                                                          |
| ------------------- | ---------------------------------------------------------------- |
| Exercise hint       | Provides a clue when a learner is struggling.                    |
| Error explanation   | Explains a programming error in beginner-friendly language.      |
| Assessment feedback | Helps explain why a submission did not satisfy the requirements. |
| Concept explanation | Clarifies a concept related to the current lesson.               |
| Lab guidance        | Provides assistance with a specific step in a guided lab.        |

## 8.2 AI interaction flow

\#chatgpt-mermaid-\_r_1df\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1df\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1df\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1df\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1df\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1df\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1df\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1df\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1df\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1df\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1df\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1df\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1df\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1df\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1df\_ p{margin:0;}#chatgpt-mermaid-\_r_1df\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1df\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1df\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1df\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1df\_ .label text,#chatgpt-mermaid-\_r_1df\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1df\_ .node rect,#chatgpt-mermaid-\_r_1df\_ .node circle,#chatgpt-mermaid-\_r_1df\_ .node ellipse,#chatgpt-mermaid-\_r_1df\_ .node polygon,#chatgpt-mermaid-\_r_1df\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1df\_ .rough-node .label text,#chatgpt-mermaid-\_r_1df\_ .node .label text,#chatgpt-mermaid-\_r_1df\_ .image-shape .label,#chatgpt-mermaid-\_r_1df\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1df\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1df\_ .rough-node .label,#chatgpt-mermaid-\_r_1df\_ .node .label,#chatgpt-mermaid-\_r_1df\_ .image-shape .label,#chatgpt-mermaid-\_r_1df\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1df\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1df\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1df\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1df\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1df\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1df\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1df\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1df\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1df\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1df\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1df\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1df\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1df\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1df\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1df\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1df\_ .icon-shape,#chatgpt-mermaid-\_r_1df\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1df\_ .icon-shape p,#chatgpt-mermaid-\_r_1df\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1df\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1df\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1df\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1df\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1df\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1df\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1df\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1df\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1df\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1df\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1df\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1df\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1df\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1df\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1df\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1df\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1df\_ .node rect,#chatgpt-mermaid-\_r_1df\_ .node circle,#chatgpt-mermaid-\_r_1df\_ .node ellipse,#chatgpt-mermaid-\_r_1df\_ .node polygon,#chatgpt-mermaid-\_r_1df\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1df\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1df\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1df\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1df\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1df\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Learner Requests AIAssistanceIdentify Current Lesson orActivityCollect Relevant ContextLesson InstructionsLearner Code or AnswerExecution Output or ErrorAssessment ResultsPrepare AI RequestAI ServiceResponse Available?Display Hint or ExplanationDisplay Service UnavailableMessageLearner Applies GuidanceRevise Answer or CodeRetry ActivityYesNo

## 8.3 AI interaction rules

- AI assistance shall be contextual to the current lesson or activity.
- The system should avoid sending unnecessary information to the AI service.
- AI feedback should be distinguishable from automated assessment results.
- AI assistance should be optional.
- Failure of AI services should not prevent learners from continuing with available lesson content.

# 9. Guided Computational Lab Architecture

Guided labs provide a more complete practical learning experience than individual coding exercises.

They should guide learners through a scientific problem using Python.

## 9.1 Guided lab structure

```
Guided Lab
│
├── Lab Overview
│   ├── Title
│   ├── Description
│   └── Learning Objectives
│
├── Scientific Problem
│   ├── Background
│   └── Problem Statement
│
├── Lab Instructions
│   ├── Step 1
│   ├── Step 2
│   ├── Step 3
│   └── Additional Steps
│
├── Computational Workspace
│   ├── Starter Code
│   ├── Input Data
│   ├── Code Editor
│   ├── Execution
│   └── Output
│
├── Assessment
│   ├── Defined Criteria
│   ├── Test Results
│   └── Feedback
│
└── Completion
    └── Summary and Next Activity
```

## 9.2 Guided lab flow

\#chatgpt-mermaid-\_r_1dr\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1dr\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1dr\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1dr\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1dr\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1dr\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1dr\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1dr\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1dr\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1dr\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1dr\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1dr\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1dr\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1dr\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1dr\_ p{margin:0;}#chatgpt-mermaid-\_r_1dr\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1dr\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1dr\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1dr\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1dr\_ .label text,#chatgpt-mermaid-\_r_1dr\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1dr\_ .node rect,#chatgpt-mermaid-\_r_1dr\_ .node circle,#chatgpt-mermaid-\_r_1dr\_ .node ellipse,#chatgpt-mermaid-\_r_1dr\_ .node polygon,#chatgpt-mermaid-\_r_1dr\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1dr\_ .rough-node .label text,#chatgpt-mermaid-\_r_1dr\_ .node .label text,#chatgpt-mermaid-\_r_1dr\_ .image-shape .label,#chatgpt-mermaid-\_r_1dr\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1dr\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1dr\_ .rough-node .label,#chatgpt-mermaid-\_r_1dr\_ .node .label,#chatgpt-mermaid-\_r_1dr\_ .image-shape .label,#chatgpt-mermaid-\_r_1dr\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1dr\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1dr\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1dr\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1dr\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1dr\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1dr\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1dr\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1dr\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1dr\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1dr\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1dr\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1dr\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1dr\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1dr\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1dr\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1dr\_ .icon-shape,#chatgpt-mermaid-\_r_1dr\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1dr\_ .icon-shape p,#chatgpt-mermaid-\_r_1dr\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1dr\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1dr\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1dr\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1dr\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1dr\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1dr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1dr\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1dr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1dr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1dr\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1dr\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1dr\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1dr\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1dr\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1dr\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1dr\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1dr\_ .node rect,#chatgpt-mermaid-\_r_1dr\_ .node circle,#chatgpt-mermaid-\_r_1dr\_ .node ellipse,#chatgpt-mermaid-\_r_1dr\_ .node polygon,#chatgpt-mermaid-\_r_1dr\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1dr\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1dr\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1dr\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1dr\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1dr\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Open Guided LabDisplay Lab OverviewPresent Scientific ProblemExplain Learning ObjectivesLoad First Lab StepDisplay Instructions andStarter CodeLearner Writes or ModifiesCodeExecute CodeDisplay OutputStep Criteria Satisfied?Display Feedback andAvailable HintsMore Lab Steps?Load Next Lab StepRun Final AssessmentDisplay Lab Results andFeedbackDisplay Lab SummaryNoYesYesNo

## 9.3 Lab navigation

A guided lab should provide:

- Clear identification of the current step.
- Instructions that remain accessible while coding.
- Access to starter code and input data.
- A way to execute and inspect code output.
- Relevant feedback when a step is unsuccessful.
- A clear transition between steps.

The MVP does not require permanent storage of completed lab progress against a learner account.

# 10. Content Architecture

The content architecture defines how instructional materials are organized and related.

## 10.1 Content hierarchy

\#chatgpt-mermaid-\_r_1e2\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1e2\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1e2\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1e2\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1e2\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e2\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1e2\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1e2\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1e2\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1e2\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1e2\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1e2\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e2\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e2\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1e2\_ p{margin:0;}#chatgpt-mermaid-\_r_1e2\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e2\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e2\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e2\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1e2\_ .label text,#chatgpt-mermaid-\_r_1e2\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e2\_ .node rect,#chatgpt-mermaid-\_r_1e2\_ .node circle,#chatgpt-mermaid-\_r_1e2\_ .node ellipse,#chatgpt-mermaid-\_r_1e2\_ .node polygon,#chatgpt-mermaid-\_r_1e2\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1e2\_ .rough-node .label text,#chatgpt-mermaid-\_r_1e2\_ .node .label text,#chatgpt-mermaid-\_r_1e2\_ .image-shape .label,#chatgpt-mermaid-\_r_1e2\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1e2\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1e2\_ .rough-node .label,#chatgpt-mermaid-\_r_1e2\_ .node .label,#chatgpt-mermaid-\_r_1e2\_ .image-shape .label,#chatgpt-mermaid-\_r_1e2\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1e2\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1e2\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e2\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e2\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1e2\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1e2\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1e2\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1e2\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1e2\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1e2\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1e2\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e2\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e2\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1e2\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e2\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1e2\_ .icon-shape,#chatgpt-mermaid-\_r_1e2\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1e2\_ .icon-shape p,#chatgpt-mermaid-\_r_1e2\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1e2\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1e2\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1e2\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1e2\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1e2\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1e2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1e2\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1e2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1e2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e2\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1e2\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e2\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1e2\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1e2\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1e2\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1e2\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1e2\_ .node rect,#chatgpt-mermaid-\_r_1e2\_ .node circle,#chatgpt-mermaid-\_r_1e2\_ .node ellipse,#chatgpt-mermaid-\_r_1e2\_ .node polygon,#chatgpt-mermaid-\_r_1e2\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1e2\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1e2\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1e2\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1e2\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e2\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Learning PathwayCourseModuleLessonLesson SectionsExplanationCode ExampleExerciseKnowledge CheckGuided LabCode SnippetInstructions and Starter CodeAssessment CriteriaFeedbackLab StepsInput DataLab AssessmentScientific Context VariantsMaterials ScienceChemistryPhysicsBiologyGeneral Programming

## 10.2 Content organization rules

1. Every lesson shall belong to a module.
2. Every module shall belong to a course.
3. Lessons shall contain one or more instructional sections.
4. Exercises shall be associated with relevant lessons.
5. Coding exercises shall have appropriate assessment criteria.
6. Guided labs shall contain structured steps and relevant computational materials.
7. Context-specific content shall be associated with the appropriate scientific context.
8. A lesson does not need to support every available scientific context.
9. Published materials shall pass human review and approval.
10. Content shall be organized so additional modules and learning pathways can be introduced without redesigning the existing hierarchy.

# 11. MVP User Flows

This section defines the major user journeys through the platform.

## 11.1 Visitor starts learning

\#chatgpt-mermaid-\_r_1e9\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1e9\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1e9\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1e9\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1e9\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e9\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1e9\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1e9\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1e9\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1e9\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1e9\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1e9\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e9\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e9\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1e9\_ p{margin:0;}#chatgpt-mermaid-\_r_1e9\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e9\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e9\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e9\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1e9\_ .label text,#chatgpt-mermaid-\_r_1e9\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e9\_ .node rect,#chatgpt-mermaid-\_r_1e9\_ .node circle,#chatgpt-mermaid-\_r_1e9\_ .node ellipse,#chatgpt-mermaid-\_r_1e9\_ .node polygon,#chatgpt-mermaid-\_r_1e9\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1e9\_ .rough-node .label text,#chatgpt-mermaid-\_r_1e9\_ .node .label text,#chatgpt-mermaid-\_r_1e9\_ .image-shape .label,#chatgpt-mermaid-\_r_1e9\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1e9\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1e9\_ .rough-node .label,#chatgpt-mermaid-\_r_1e9\_ .node .label,#chatgpt-mermaid-\_r_1e9\_ .image-shape .label,#chatgpt-mermaid-\_r_1e9\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1e9\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1e9\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e9\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e9\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1e9\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1e9\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1e9\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1e9\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1e9\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1e9\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1e9\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e9\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e9\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1e9\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1e9\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1e9\_ .icon-shape,#chatgpt-mermaid-\_r_1e9\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1e9\_ .icon-shape p,#chatgpt-mermaid-\_r_1e9\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1e9\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1e9\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1e9\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1e9\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1e9\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1e9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1e9\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1e9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1e9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e9\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1e9\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1e9\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1e9\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1e9\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1e9\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1e9\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1e9\_ .node rect,#chatgpt-mermaid-\_r_1e9\_ .node circle,#chatgpt-mermaid-\_r_1e9\_ .node ellipse,#chatgpt-mermaid-\_r_1e9\_ .node polygon,#chatgpt-mermaid-\_r_1e9\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1e9\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1e9\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1e9\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1e9\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1e9\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Visitor Opens SPASCLELanding PageExplore Platform InformationSelect Start LearningPython Learning AreaView Course SidebarSelect ModuleSelect LessonStart LearningRead ExplanationsView ExamplesAttempt Activities

## 11.2 Learner completes a coding exercise

\#chatgpt-mermaid-\_r_1eg\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1eg\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1eg\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1eg\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1eg\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eg\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1eg\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1eg\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1eg\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1eg\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1eg\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1eg\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eg\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eg\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1eg\_ p{margin:0;}#chatgpt-mermaid-\_r_1eg\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eg\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eg\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eg\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1eg\_ .label text,#chatgpt-mermaid-\_r_1eg\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eg\_ .node rect,#chatgpt-mermaid-\_r_1eg\_ .node circle,#chatgpt-mermaid-\_r_1eg\_ .node ellipse,#chatgpt-mermaid-\_r_1eg\_ .node polygon,#chatgpt-mermaid-\_r_1eg\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1eg\_ .rough-node .label text,#chatgpt-mermaid-\_r_1eg\_ .node .label text,#chatgpt-mermaid-\_r_1eg\_ .image-shape .label,#chatgpt-mermaid-\_r_1eg\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1eg\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1eg\_ .rough-node .label,#chatgpt-mermaid-\_r_1eg\_ .node .label,#chatgpt-mermaid-\_r_1eg\_ .image-shape .label,#chatgpt-mermaid-\_r_1eg\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1eg\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1eg\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eg\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eg\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1eg\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1eg\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1eg\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1eg\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1eg\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1eg\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1eg\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eg\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eg\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1eg\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eg\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1eg\_ .icon-shape,#chatgpt-mermaid-\_r_1eg\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1eg\_ .icon-shape p,#chatgpt-mermaid-\_r_1eg\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1eg\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1eg\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1eg\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1eg\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1eg\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1eg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1eg\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1eg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1eg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eg\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1eg\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eg\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1eg\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1eg\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1eg\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1eg\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1eg\_ .node rect,#chatgpt-mermaid-\_r_1eg\_ .node circle,#chatgpt-mermaid-\_r_1eg\_ .node ellipse,#chatgpt-mermaid-\_r_1eg\_ .node polygon,#chatgpt-mermaid-\_r_1eg\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1eg\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1eg\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1eg\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1eg\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eg\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Open LessonRead Concept ExplanationOpen Coding ExerciseRead Exercise InstructionsWrite Python CodeRun CodeInspect OutputSubmit for AssessmentAutomated TestsPassed?Display Successful ResultDisplay Failed Tests andFeedbackRequest Hint or ExplanationRevise CodeContinue LearningYesNo

## 11.3 Learner switches scientific context

\#chatgpt-mermaid-\_r_1en\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1en\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1en\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1en\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1en\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1en\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1en\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1en\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1en\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1en\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1en\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1en\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1en\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1en\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1en\_ p{margin:0;}#chatgpt-mermaid-\_r_1en\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1en\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1en\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1en\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1en\_ .label text,#chatgpt-mermaid-\_r_1en\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1en\_ .node rect,#chatgpt-mermaid-\_r_1en\_ .node circle,#chatgpt-mermaid-\_r_1en\_ .node ellipse,#chatgpt-mermaid-\_r_1en\_ .node polygon,#chatgpt-mermaid-\_r_1en\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1en\_ .rough-node .label text,#chatgpt-mermaid-\_r_1en\_ .node .label text,#chatgpt-mermaid-\_r_1en\_ .image-shape .label,#chatgpt-mermaid-\_r_1en\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1en\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1en\_ .rough-node .label,#chatgpt-mermaid-\_r_1en\_ .node .label,#chatgpt-mermaid-\_r_1en\_ .image-shape .label,#chatgpt-mermaid-\_r_1en\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1en\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1en\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1en\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1en\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1en\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1en\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1en\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1en\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1en\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1en\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1en\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1en\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1en\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1en\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1en\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1en\_ .icon-shape,#chatgpt-mermaid-\_r_1en\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1en\_ .icon-shape p,#chatgpt-mermaid-\_r_1en\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1en\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1en\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1en\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1en\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1en\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1en\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1en\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1en\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1en\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1en\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1en\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1en\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1en\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1en\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1en\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1en\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1en\_ .node rect,#chatgpt-mermaid-\_r_1en\_ .node circle,#chatgpt-mermaid-\_r_1en\_ .node ellipse,#chatgpt-mermaid-\_r_1en\_ .node polygon,#chatgpt-mermaid-\_r_1en\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1en\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1en\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1en\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1en\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1en\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Open Learning AreaGlobal Context: MaterialsScienceOpen LessonSelect Lesson ContextChoose Alternative ContextSuitable Content Available?Display Alternative ExampleCommunicate UnavailabilityAlternative Available?Offer AlternativeDisplay General ExplanationContinue LessonYesNoYesNo

## 11.4 Learner completes a guided lab

\#chatgpt-mermaid-\_r_1eu\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1eu\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1eu\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1eu\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1eu\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eu\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1eu\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1eu\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1eu\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1eu\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1eu\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1eu\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eu\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eu\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1eu\_ p{margin:0;}#chatgpt-mermaid-\_r_1eu\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eu\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eu\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eu\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1eu\_ .label text,#chatgpt-mermaid-\_r_1eu\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eu\_ .node rect,#chatgpt-mermaid-\_r_1eu\_ .node circle,#chatgpt-mermaid-\_r_1eu\_ .node ellipse,#chatgpt-mermaid-\_r_1eu\_ .node polygon,#chatgpt-mermaid-\_r_1eu\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1eu\_ .rough-node .label text,#chatgpt-mermaid-\_r_1eu\_ .node .label text,#chatgpt-mermaid-\_r_1eu\_ .image-shape .label,#chatgpt-mermaid-\_r_1eu\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1eu\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1eu\_ .rough-node .label,#chatgpt-mermaid-\_r_1eu\_ .node .label,#chatgpt-mermaid-\_r_1eu\_ .image-shape .label,#chatgpt-mermaid-\_r_1eu\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1eu\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1eu\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eu\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eu\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1eu\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1eu\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1eu\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1eu\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1eu\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1eu\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1eu\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eu\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eu\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1eu\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1eu\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1eu\_ .icon-shape,#chatgpt-mermaid-\_r_1eu\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1eu\_ .icon-shape p,#chatgpt-mermaid-\_r_1eu\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1eu\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1eu\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1eu\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1eu\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1eu\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1eu\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1eu\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1eu\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1eu\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eu\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1eu\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1eu\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1eu\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1eu\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1eu\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1eu\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1eu\_ .node rect,#chatgpt-mermaid-\_r_1eu\_ .node circle,#chatgpt-mermaid-\_r_1eu\_ .node ellipse,#chatgpt-mermaid-\_r_1eu\_ .node polygon,#chatgpt-mermaid-\_r_1eu\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1eu\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1eu\_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1eu\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1eu\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1eu\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Open Guided LabRead Lab OverviewReview Scientific ProblemBegin Lab StepsRead Step InstructionsWrite or Modify CodeExecute CodeInspect ResultsStep Completed?Review FeedbackMore Steps?Submit Final LabReceive AssessmentView Lab SummaryNoYesYesNo

# 12. Navigation and Interaction Rules

The following rules define how the main parts of the interface should behave.

| Area              | Rule                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------ |
| Landing page      | The primary learning action opens the Python learning area.                          |
| Course sidebar    | Selecting a lesson loads its content in the main area.                               |
| Module navigation | Modules can be expanded and collapsed.                                               |
| Active lesson     | The current lesson is visually identified.                                           |
| Global context    | The selected context applies across lessons where suitable content exists.           |
| Lesson context    | Overrides the global context for the current lesson only.                            |
| Code editor       | Learners can edit and execute code without leaving the lesson.                       |
| Execution output  | Results and errors appear in a clearly identifiable output area.                     |
| Assessment        | Learners receive assessment results after submitting supported activities.           |
| AI assistance     | Hints and explanations are accessible from relevant activities.                      |
| Guided labs       | Lab instructions and computational workspace are accessible throughout the activity. |
| Lesson navigation | Previous and next lesson controls support sequential learning.                       |
| Progress          | No persistent account-based completion indicators are displayed in the MVP.          |

# 13. Responsive Information Architecture

The information architecture should adapt to smaller screens without removing essential learning capabilities.

| Interface area          | Desktop                     | Tablet                    | Mobile                    |
| ----------------------- | --------------------------- | ------------------------- | ------------------------- |
| Course sidebar          | Persistent left sidebar     | Collapsible sidebar       | Drawer or expandable menu |
| Lesson content          | Central reading area        | Main content area         | Full-width content        |
| Global context selector | Header control              | Header or compact control | Compact selector          |
| Code editor             | Integrated lesson workspace | Responsive workspace      | Full-width editor         |
| Output panel            | Beside or below editor      | Below editor              | Below editor              |
| AI feedback             | Inline or side panel        | Inline panel              | Expandable panel          |
| Lesson navigation       | Previous/next controls      | Previous/next controls    | Stacked controls          |

### Mobile-specific considerations

- Course navigation should be accessible without occupying the entire screen permanently.
- Code editor controls should remain usable on smaller displays.
- Output and error panels should be easy to expand and inspect.
- Lesson explanations should remain readable while the learner interacts with coding activities.
- Context selection should remain visible and accessible.

# 14. MVP Screen Inventory

The following inventory identifies the main screens and interface states required for implementation.

| ID      | Screen / View                      | Description                                             | Priority  |
| ------- | ---------------------------------- | ------------------------------------------------------- | --------- |
| SCR-001 | Landing page                       | Public platform introduction                            | Must have |
| SCR-002 | Python learning home               | Entry point to the Python pathway                       | Must have |
| SCR-003 | Course navigation                  | Module and lesson sidebar                               | Must have |
| SCR-004 | Lesson view                        | Main instructional content                              | Must have |
| SCR-005 | Global context selector            | Scientific context preference                           | Must have |
| SCR-006 | Lesson context selector            | Lesson-level context override                           | Must have |
| SCR-007 | Context unavailable state          | Explains unavailable context content                    | Must have |
| SCR-008 | Code editor                        | Python code entry and editing                           | Must have |
| SCR-009 | Execution output                   | Displays output and errors                              | Must have |
| SCR-010 | Exercise view                      | Displays exercise instructions and submission interface | Must have |
| SCR-011 | Assessment result                  | Displays score, test outcomes, and feedback             | Must have |
| SCR-012 | AI assistance panel                | Displays hints and explanations                         | Must have |
| SCR-013 | Guided lab overview                | Introduces a computational lab                          | Must have |
| SCR-014 | Guided lab workspace               | Instructions, code editor, and output                   | Must have |
| SCR-015 | Guided lab result                  | Displays final assessment and summary                   | Must have |
| SCR-016 | Code execution error state         | Displays execution failures and limits                  | Must have |
| SCR-017 | AI service unavailable state       | Communicates AI service failure                         | Must have |
| SCR-018 | Empty or unavailable content state | Handles unavailable lessons or activities               | Must have |

# 15. MVP Exclusions

The following screens and workflows are intentionally excluded from the MVP information architecture.

| Excluded area                  | Reason                                                              |
| ------------------------------ | ------------------------------------------------------------------- |
| Registration page              | Authentication is deferred to Release 2.                            |
| Sign-in page                   | Authentication is deferred to Release 2.                            |
| Learner profile                | User profiles are deferred to Release 2.                            |
| Learner dashboard              | Persistent account-based progress is deferred.                      |
| Course completion dashboard    | Course completion percentage is a Release 2 feature.                |
| Completed lesson indicators    | Account-linked completion indicators are deferred.                  |
| Administrator dashboard        | Administrator functionality is deferred to Release 2.               |
| Content management interface   | Managed through the internal content-production process in the MVP. |
| Reviewer dashboard             | Reviewer accounts and interfaces are deferred to Release 2.         |
| Bash learning area             | Planned for a later release.                                        |
| Classroom dashboard            | Managed classes are outside the current scope.                      |
| Subscription and payment pages | Payment functionality is outside the current scope.                 |

# 16. Future Extensibility Considerations

Although the IA is limited to the MVP, it should not prevent the introduction of later capabilities.

The following structural considerations should be maintained:

1. Additional learning pathways: The top-level course structure should support multiple courses rather than being hard-coded exclusively for Python.
2. Additional scientific contexts: Context variants should be associated with lessons or content sections, allowing different lessons to support different contexts.
3. Additional programming languages: The learning area should be extensible to other language-specific learning pathways.
4. Authentication: Account-related navigation can be introduced without restructuring the public learning hierarchy.
5. Persistent progress: Lesson and course completion indicators can be added to the sidebar in Release 2.
6. Content administration: A future administration interface should manage the same course and content hierarchy used by the learner-facing application.
7. Content review: Reviewer workflows should operate on the same underlying content entities and permissions model as administrator workflows.

These considerations should guide the technical design without introducing deferred features into the MVP interface.

# 17. MVP IA Completion Criteria

The information architecture shall be considered sufficiently defined for MVP design and implementation when:

- The landing page and Python learning area are clearly separated.
- The course, module, and lesson hierarchy is defined.
- The sidebar and central lesson layout are specified.
- The standard lesson structure is defined.
- Global and lesson-level context selection behavior is documented.
- Code editor and execution interfaces are identified.
- Exercise and assessment interfaces are identified.
- AI assistance entry points are defined.
- Guided lab structure and navigation are defined.
- Main learner journeys are documented using flow diagrams.
- Desktop, tablet, and mobile navigation behavior is considered.
- MVP exclusions are clearly identified.
- Future extensibility is considered without expanding MVP scope.

# 18. Relationship to Other Project Documents

| Document                              | Responsibility                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| PRD                                   | Defines product vision, objectives, users, features, and release scope.        |
| SRS                                   | Defines functional and non-functional system requirements.                     |
| Information Architecture & User Flows | Defines pages, navigation, content hierarchy, and user journeys.               |
| Data Model & Database Design          | Defines data entities, attributes, and relationships.                          |
| API Contracts & Interface Design      | Defines communication between application components and services.             |
| Technical Architecture                | Defines technology choices, system components, infrastructure, and deployment. |
| UI/UX Design Specification            | Defines detailed visual design, component behavior, and screen layouts.        |

```

**One important implementation distinction:** The IA treats the code editor, execution output, assessment, and AI feedback as integrated parts of lessons and labs. They are separate functional components, but learners should experience them as one continuous learning workflow. This avoids making the MVP feel like a collection of disconnected tools.
```
