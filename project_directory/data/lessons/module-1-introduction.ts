import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "introduction-to-python";

export const MODULE_1_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "introduction-to-programming",
    description: "What a program is, why scientists write them, and why Python is a good first language.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Explain what a computer program is",
      "Describe how programming helps with scientific work",
      "Recognise a simple Python statement",
    ],
    blocks: [
      { type: "heading", text: "What is a program?" },
      {
        type: "paragraph",
        text: "A **program** is a list of instructions that a computer follows exactly, one after another. Each instruction is called a **statement**. The computer does not guess what you meant: it does precisely what the statements say.",
      },
      {
        type: "paragraph",
        text: "Scientists write programs to do things that would be slow or error-prone by hand: repeating a calculation thousands of times, cleaning measurement data, fitting models and drawing plots.",
      },
      { type: "heading", text: "Why Python?" },
      {
        type: "list",
        items: [
          "Its syntax is short and close to plain English, so it is easy to read.",
          "It is widely used in research, from materials modelling to genomics.",
          "Libraries such as NumPy and Matplotlib add fast numerical work and plotting.",
        ],
      },
      { type: "heading", text: "Your first look at Python" },
      {
        type: "paragraph",
        text: "The statement below uses `print()` to display a message. Press **Try it hands-on** to open an editor, run it, then change the text and run it again.",
      },
      { type: "code", code: `print("Hello, science!")`, output: "Hello, science!" },
      {
        type: "contextExample",
        title: "A program that does a calculation",
        variants: {
          "materials-science": {
            intro: "Computers are good at arithmetic. This program converts copper's melting point from degrees Celsius to kelvin.",
            code: `print(1085 + 273.15)`,
            output: "1358.15",
          },
          chemistry: {
            intro: "This program adds up the molar mass of water (H₂O) from two hydrogen atoms and one oxygen atom.",
            code: `print(2 * 1.008 + 15.999)`,
            output: "18.015",
          },
          physics: {
            intro: "This program calculates the distance travelled at 3 m/s for 12 seconds.",
            code: `print(3 * 12)`,
            output: "36",
          },
          biology: {
            intro: "This program works out how many bacteria there are after one cell divides five times.",
            code: `print(2 ** 5)`,
            output: "32",
          },
        },
      },
      {
        type: "callout",
        tone: "tip",
        title: "Programs run top to bottom",
        text: "When a program has several statements, Python runs the first line, then the second, and so on. Later lessons show how to repeat lines or skip them.",
      },
    ],
    exercises: [
      {
        id: "m1l1-q1",
        question: "What is a computer program?",
        options: [
          { id: "a", text: "A list of instructions the computer follows exactly" },
          { id: "b", text: "A description the computer interprets however it thinks best" },
          { id: "c", text: "A file that stores measurement data" },
        ],
        correctOptionId: "a",
        explanation: "A program is a precise sequence of instructions. The computer follows them exactly, which is why small mistakes matter.",
      },
      {
        id: "m1l1-q2",
        question: "What does this program display?",
        code: `print(2 + 3)`,
        options: [
          { id: "a", text: "2 + 3" },
          { id: "b", text: "5" },
          { id: "c", text: "Nothing" },
        ],
        correctOptionId: "b",
        explanation: "Without quotes, Python treats `2 + 3` as a calculation and prints the result, `5`.",
      },
      {
        id: "m1l1-q3",
        question: "In what order does Python run the statements in a simple program?",
        options: [
          { id: "a", text: "In a random order" },
          { id: "b", text: "From the last line to the first" },
          { id: "c", text: "From top to bottom, one at a time" },
        ],
        correctOptionId: "c",
        explanation: "Python runs statements from top to bottom unless the code tells it to repeat or skip lines.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "setting-up-your-python-environment",
    description: "Where Python code runs, using SPASCLE's in-browser editor, and how to install Python later.",
    estimatedMinutes: 8,
    learningObjectives: [
      "Use the in-browser editor to run Python",
      "Know the difference between the editor and the output",
      "Understand the options for installing Python on your own computer",
    ],
    blocks: [
      { type: "heading", text: "Nothing to install" },
      {
        type: "paragraph",
        text: "In SPASCLE, Python runs directly in your browser. Every example with a **Try it hands-on** button opens an editor where you can change the code and press **Run** (or `Ctrl` + `Enter`) to see the result.",
      },
      {
        type: "list",
        items: [
          "The **editor** is where you write code.",
          "The **output** panel shows what your program prints.",
          "Errors appear in the output panel in red, with the line that caused them.",
          "**Reset** puts the original example back if you get lost.",
        ],
      },
      {
        type: "paragraph",
        text: "Try it now: this program prints which version of Python is running.",
      },
      {
        type: "code",
        code: `import sys
print("Python version:", sys.version.split()[0])`,
      },
      {
        type: "explanation",
        text: "`import sys` loads a built-in module with information about the Python system. You will learn about `import` properly later.",
      },
      { type: "heading", text: "Running Python on your own computer" },
      {
        type: "paragraph",
        text: "When you start your own research projects you will want Python installed locally. Common choices are:",
      },
      {
        type: "list",
        items: [
          "**python.org**: the official installer for Windows, macOS and Linux.",
          "**Anaconda or Miniconda**: popular in science because they bundle NumPy, Matplotlib and many other packages.",
          "**Jupyter notebooks**: mix code, results and notes in one document, often used for data analysis.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "You can skip this for now",
        text: "Everything in this course works in the browser. Install Python locally whenever you are ready.",
      },
    ],
    exercises: [
      {
        id: "m1l2-q1",
        question: "Where does your program's printed text appear in the SPASCLE editor?",
        options: [
          { id: "a", text: "In the output panel" },
          { id: "b", text: "In a new browser tab" },
          { id: "c", text: "It replaces the code in the editor" },
        ],
        correctOptionId: "a",
        explanation: "The output panel under the editor shows everything your program prints, as well as any errors.",
      },
      {
        id: "m1l2-q2",
        question: "Which distribution is popular with scientists because it bundles packages like NumPy?",
        options: [
          { id: "a", text: "Node.js" },
          { id: "b", text: "Anaconda" },
          { id: "c", text: "Microsoft Excel" },
        ],
        correctOptionId: "b",
        explanation: "Anaconda (and the smaller Miniconda) include Python plus many scientific packages, which makes setup easier.",
      },
      {
        id: "m1l2-q3",
        question: "What does the Reset button in the editor do?",
        options: [
          { id: "a", text: "Deletes the lesson" },
          { id: "b", text: "Restarts your computer" },
          { id: "c", text: "Restores the original example code" },
        ],
        correctOptionId: "c",
        explanation: "Reset brings back the starting code, so you can experiment freely without worrying about breaking anything.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "your-first-python-program",
    description: "Write a program with several statements, use comments, and read your first error message.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Write a program with several `print()` statements",
      "Add comments to explain code",
      "Read a simple error message and fix the mistake",
    ],
    blocks: [
      { type: "heading", text: "Printing several lines" },
      {
        type: "paragraph",
        text: "Each `print()` call starts a new line of output. Text must be inside quotes; numbers and calculations do not need quotes.",
      },
      {
        type: "code",
        code: `print("Sample report")
print("Temperature in kelvin:")
print(25 + 273.15)`,
        output: `Sample report
Temperature in kelvin:
298.15`,
      },
      {
        type: "paragraph",
        text: "You can print several things on one line by separating them with commas. Python puts a space between them.",
      },
      { type: "code", code: `print("Atoms in the cell:", 4)`, output: "Atoms in the cell: 4" },
      { type: "heading", text: "Comments" },
      {
        type: "paragraph",
        text: "A **comment** starts with `#`. Python ignores everything after the `#` on that line, so comments are notes for people reading your code, including you in six months.",
      },
      {
        type: "contextExample",
        title: "A commented program",
        variants: {
          "materials-science": {
            intro: "This program reports the density of aluminium. The comments explain the units.",
            code: `# Density of aluminium
print("Material: aluminium")
print("Density (g/cm³):", 2.70)  # at room temperature`,
            output: `Material: aluminium
Density (g/cm³): 2.7`,
            explanation: "Python prints `2.70` as `2.7` because trailing zeros do not change the value.",
          },
          chemistry: {
            intro: "This program reports the boiling point of ethanol. The comments explain the units.",
            code: `# Boiling point of ethanol
print("Compound: ethanol")
print("Boiling point (°C):", 78.37)  # at 1 atm`,
            output: `Compound: ethanol
Boiling point (°C): 78.37`,
          },
          physics: {
            intro: "This program reports the speed of light. The comment explains the units.",
            code: `# Speed of light in a vacuum
print("Constant: c")
print("Value (m/s):", 299792458)  # exact by definition`,
            output: `Constant: c
Value (m/s): 299792458`,
          },
          "general-programming": {
            intro: "This program prints a short receipt. The comments explain each part.",
            code: `# A simple receipt
print("Item: notebook")
print("Price:", 3.5)  # in pounds`,
            output: `Item: notebook
Price: 3.5`,
          },
        },
      },
      { type: "heading", text: "Your first error" },
      {
        type: "paragraph",
        text: "Mistakes are normal. When Python cannot run your code it shows an **error message** naming the line and the kind of problem. Run this example to see one, then fix it by adding the missing closing quote.",
      },
      { type: "code", code: `print("Hello, lab)` },
      {
        type: "explanation",
        text: "A `SyntaxError` means the code does not follow Python's grammar. Here the text never ends because the closing `\"` is missing.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Python is case-sensitive",
        text: "`print` works but `Print` does not. Python treats upper- and lower-case letters as different.",
      },
    ],
    exercises: [
      {
        id: "m1l3-q1",
        question: "Which line is a comment?",
        options: [
          { id: "a", text: `print("# total")` },
          { id: "b", text: "# convert to kelvin" },
          { id: "c", text: `"convert to kelvin"` },
        ],
        correctOptionId: "b",
        explanation: "A comment starts with `#` outside of quotes. Inside quotes, `#` is just part of the text.",
      },
      {
        id: "m1l3-q2",
        question: "What does this code print?",
        code: `print("Mass:", 12, "g")`,
        options: [
          { id: "a", text: "Mass:12g" },
          { id: "b", text: `"Mass:", 12, "g"` },
          { id: "c", text: "Mass: 12 g" },
        ],
        correctOptionId: "c",
        explanation: "Values separated by commas are printed with a space between each one.",
      },
      {
        id: "m1l3-q3",
        question: "Why does this code cause an error?",
        code: `Print("Hello")`,
        options: [
          { id: "a", text: "Python is case-sensitive, so `Print` is not the same as `print`" },
          { id: "b", text: "Text must use single quotes" },
          { id: "c", text: "Every program needs a comment" },
        ],
        correctOptionId: "a",
        explanation: "The function is called `print` in lower case. `Print` is an unknown name, so Python raises a `NameError`.",
      },
    ],
  },
];
