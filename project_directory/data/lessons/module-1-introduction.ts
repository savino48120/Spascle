import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "introduction-to-python";

export const MODULE_1_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "introduction-to-programming",
    description: "What a program is, how Python runs your instructions, and why programming is a core skill in modern science.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Explain what a computer program and a programming language are",
      "Describe how Python runs a program, one statement at a time",
      "Give examples of how programming helps with scientific work",
      "Read and run a simple Python statement",
    ],
    blocks: [
      { type: "heading", text: "What is a program?" },
      {
        type: "paragraph",
        text: "A **program** is a set of instructions that tells a computer what to do. Each instruction is called a **statement**. The computer carries out the statements in order and does exactly what they say: it never guesses what you meant, and it never skips a step because it seems obvious.",
      },
      {
        type: "paragraph",
        text: "A useful comparison is a written laboratory procedure. A good procedure lists every step in order, with precise quantities, so that anyone following it gets the same result. A program is the same idea, except the reader is a computer and the steps are written in a language it understands.",
      },
      {
        type: "paragraph",
        text: "That precision is both the strength and the challenge of programming. Once a program is correct, it will repeat the same work perfectly, millions of times if needed. But a small mistake, such as a missing bracket or a misspelled name, stops the program or gives a wrong answer, because the computer follows your instructions literally.",
      },
      { type: "heading", text: "Programming languages and Python" },
      {
        type: "paragraph",
        text: "Computers ultimately work with very low-level instructions that are hard for people to read. A **programming language** lets us write instructions in a form that is much closer to human language and mathematics. The text you write is called **source code**.",
      },
      {
        type: "paragraph",
        text: "Python is an **interpreted** language. A program called the **Python interpreter** reads your source code from top to bottom and carries out each statement as it reaches it. If it finds a statement it cannot understand, it stops and shows an error message explaining what went wrong and on which line.",
      },
      { type: "heading", text: "Why scientists write programs" },
      {
        type: "paragraph",
        text: "Research increasingly depends on computation. Programming lets you do things that are slow, error-prone or impossible by hand:",
      },
      {
        type: "list",
        items: [
          "**Automate repetitive work**: apply the same calculation to thousands of samples, files or simulation results.",
          "**Handle large datasets**: instruments such as diffractometers, spectrometers and microscopes produce far more data than a spreadsheet can comfortably manage.",
          "**Model and simulate**: predict how a material, molecule or system behaves before running an experiment.",
          "**Visualise results**: turn columns of numbers into clear, publication-quality plots.",
          "**Make work reproducible**: a script records exactly what was done to the data, so you and others can check or repeat it later.",
        ],
      },
      { type: "heading", text: "Why Python?" },
      {
        type: "list",
        items: [
          "**Readable**: Python's syntax is short and uses plain English words, so programs are easier to write and to understand later.",
          "**Widely used in research**: it is a standard tool in materials science, chemistry, physics, biology and data science.",
          "**Rich scientific libraries**: packages such as NumPy (numerical arrays), Matplotlib (plotting), SciPy (scientific algorithms) and pandas (tables) are built on Python. Materials scientists also use packages such as ASE and pymatgen.",
          "**Free and open source**: anyone can install and use it, on any operating system.",
        ],
      },
      { type: "heading", text: "Your first look at Python" },
      {
        type: "paragraph",
        text: "The statement below uses `print()` to display a message. `print` is a **function**: a named piece of code that performs a task. You **call** a function by writing its name followed by brackets, and you put the information it needs inside the brackets.",
      },
      { type: "code", code: `print("Hello, science!")`, output: "Hello, science!" },
      {
        type: "explanation",
        text: "The text inside the quotation marks is called a **string**. The quotes tell Python where the text starts and ends; they are not printed.",
      },
      {
        type: "paragraph",
        text: "Press **Try it hands-on** under the example to open an editor. Change the message, press **Run**, and see your new output. You can't break anything: the **Reset** button restores the original code.",
      },
      { type: "subheading", text: "Text versus calculations" },
      {
        type: "paragraph",
        text: "Quotation marks make a big difference. Inside quotes, Python treats characters as text and prints them exactly. Without quotes, Python treats `2 + 3` as a calculation, works out the result and prints that.",
      },
      {
        type: "code",
        code: `print("2 + 3")
print(2 + 3)`,
        output: `2 + 3
5`,
      },
      {
        type: "contextExample",
        title: "A program that does a calculation",
        variants: {
          "materials-science": {
            intro: "Computers are very good at arithmetic. This program converts the melting point of copper from degrees Celsius to kelvin by adding 273.15.",
            code: `print(1085 + 273.15)`,
            output: "1358.15",
          },
          chemistry: {
            intro: "This program adds up the molar mass of water (H₂O) from two hydrogen atoms (1.008 g/mol each) and one oxygen atom (15.999 g/mol).",
            code: `print(2 * 1.008 + 15.999)`,
            output: "18.015",
          },
          physics: {
            intro: "This program calculates the distance travelled by an object moving at 3 m/s for 12 seconds, using distance = speed × time.",
            code: `print(3 * 12)`,
            output: "36",
          },
          biology: {
            intro: "A bacterium divides into two cells. This program works out how many cells there are after five divisions, which is 2 multiplied by itself five times.",
            code: `print(2 ** 5)`,
            output: "32",
          },
          biochemistry: {
            intro: "Enzyme experiments are often run at body temperature. This program converts 37 °C to kelvin.",
            code: `print(37 + 273.15)`,
            output: "310.15",
          },
          "general-programming": {
            intro: "This program works out the cost of three coffees at 2.50 each plus a sandwich at 4.75.",
            code: `print(3 * 2.50 + 4.75)`,
            output: "12.25",
          },
        },
      },
      {
        type: "callout",
        tone: "tip",
        title: "Programs run from top to bottom",
        text: "When a program has several statements, Python runs the first line, then the second, and so on until it reaches the end. Later in the course you will learn how to make Python repeat lines or skip them depending on a condition.",
      },
      { type: "heading", text: "How you will learn in this course" },
      {
        type: "list",
        isOrdered: true,
        items: [
          "Each **lesson** explains one idea with short examples. Run them, change them and see what happens.",
          "A **knowledge check** at the end of the lesson tests your understanding.",
          "From Module 2 onwards, a **hands-on exercise** follows each lesson. You write a small program yourself, with hints and a model solution if you need them.",
          "A **lab** at the end of each later module applies everything to a realistic scientific problem.",
        ],
      },
      {
        type: "paragraph",
        text: "Examples use materials science by default. If you work in another field, choose it with the **Examples in this lesson** selector, or set a default for the whole course in the header.",
      },
    ],
    exercises: [
      {
        id: "m1l1-q1",
        question: "What is a computer program?",
        options: [
          { id: "a", text: "A set of instructions the computer follows exactly, in order" },
          { id: "b", text: "A description the computer interprets however it thinks best" },
          { id: "c", text: "A file that stores measurement data" },
        ],
        correctOptionId: "a",
        explanation: "A program is a precise sequence of instructions (statements). The computer follows them literally, which is why small mistakes matter.",
      },
      {
        id: "m1l1-q2",
        question: "What does this program display?",
        code: `print("2 + 3")`,
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "2 + 3" },
          { id: "c", text: `"2 + 3"` },
        ],
        correctOptionId: "b",
        explanation: "The quotes make `2 + 3` a string, so Python prints the text exactly as written, without the quotes. Without quotes it would calculate `5`.",
      },
      {
        id: "m1l1-q3",
        question: "What does the Python interpreter do when it reaches a statement it cannot understand?",
        options: [
          { id: "a", text: "It skips that line and carries on" },
          { id: "b", text: "It guesses what you meant" },
          { id: "c", text: "It stops and shows an error message" },
        ],
        correctOptionId: "c",
        explanation: "Python stops at the first statement it cannot run and reports an error, including the line number, so you can find and fix the problem.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "setting-up-your-python-environment",
    description: "How Python runs in your browser here, the difference between scripts and the interactive prompt, and how to install Python on your own computer.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Use the in-browser editor to write and run Python",
      "Understand why you need `print()` to see results in a script",
      "Know the main ways to install and run Python on your own computer",
      "Know what packages are and how they are installed",
    ],
    blocks: [
      { type: "heading", text: "Python in your browser" },
      {
        type: "paragraph",
        text: "In SPASCLE you don't need to install anything. Python runs directly inside your web browser, on your own computer, using a version of Python built for browsers called Pyodide. Your code is not sent to a server.",
      },
      {
        type: "paragraph",
        text: "Every example with a **Try it hands-on** button opens an editor. It has the following parts:",
      },
      {
        type: "list",
        items: [
          "The **editor**, where you type and change code. It highlights Python syntax in colour to make code easier to read.",
          "The **Run** button, which runs the whole program. The shortcut is `Ctrl` + `Enter` (or `Cmd` + `Enter` on a Mac).",
          "The **output** panel, which shows everything your program prints, and any error messages.",
          "Toolbar buttons to switch the editor between dark and light, copy the code, download it as a `.py` file, and **Reset** the original example.",
        ],
      },
      {
        type: "paragraph",
        text: "The first time you press **Run**, Python itself has to load, which takes a few seconds. After that, programs run almost instantly. Try it with this program, which prints the version of Python that is running.",
      },
      {
        type: "code",
        code: `import sys
print("Python version:", sys.version.split()[0])`,
      },
      {
        type: "explanation",
        text: "`import sys` loads `sys`, a module that comes with Python and gives information about the Python system. You will learn how modules and `import` work later in the course.",
      },
      { type: "heading", text: "Scripts and the interactive prompt" },
      {
        type: "paragraph",
        text: "A Python program saved in a file is called a **script**. Script files end in `.py`, for example `density.py`. When you run a script, Python reads the whole file from top to bottom and carries out each statement. The editors in this course work the same way.",
      },
      {
        type: "paragraph",
        text: "In a script, Python only shows something if you ask it to with `print()`. A calculation on its own is worked out, but the result is not displayed. This surprises many beginners, so try it:",
      },
      {
        type: "code",
        code: `1085 + 273.15          # calculated, but not shown
print(1085 + 273.15)   # calculated and shown`,
        output: "1358.15",
      },
      {
        type: "paragraph",
        text: "Once Python is installed on your computer, you can also use the **interactive prompt** (also called the REPL). You type one statement at a time after the `>>>` symbol and see the result immediately, without `print()`. It is handy for quick calculations and for testing small ideas. For anything you want to keep, write a script.",
      },
      { type: "heading", text: "Installing Python on your own computer" },
      {
        type: "paragraph",
        text: "Everything in this course works in the browser, but for your own research you will want Python installed locally. These are the common options:",
      },
      {
        type: "table",
        columns: ["Option", "What it is", "Good for"],
        rows: [
          ["**python.org**", "The official Python installer for Windows, macOS and Linux.", "A clean, minimal installation."],
          ["**Anaconda / Miniconda**", "A Python distribution that includes the `conda` package manager. Anaconda also bundles hundreds of scientific packages.", "Scientific work: NumPy, Matplotlib and others are easy to install."],
          ["**VS Code** or **PyCharm**", "Code editors with features such as autocompletion and debugging.", "Writing and organising larger projects."],
          ["**JupyterLab**", "Notebooks that mix code, results, plots and notes in one document.", "Exploring and analysing data step by step."],
        ],
      },
      {
        type: "paragraph",
        text: "To run a script from a terminal (Command Prompt on Windows), move to the folder that contains it and type `python density.py`. On some systems the command is `python3`.",
      },
      { type: "subheading", text: "Packages" },
      {
        type: "paragraph",
        text: "Python comes with a large **standard library**, but much of its scientific power comes from **packages**: collections of code written by others that you install separately. NumPy and Matplotlib are packages. On your own computer you install them with a package manager, for example `pip install numpy` or `conda install numpy`. In SPASCLE, the packages used in the course are loaded automatically when your code needs them.",
      },
      {
        type: "callout",
        tone: "info",
        title: "You can skip installation for now",
        text: "You can complete the whole course in the browser. Install Python locally whenever you are ready to work on your own data.",
      },
    ],
    exercises: [
      {
        id: "m1l2-q1",
        question: "What does this script print when it runs?",
        code: `2 * 4
print(3 * 4)`,
        options: [
          { id: "a", text: "8 and 12, on separate lines" },
          { id: "b", text: "12" },
          { id: "c", text: "Nothing" },
        ],
        correctOptionId: "b",
        explanation: "In a script, a calculation on its own is not displayed. Only the `print()` statement produces output, so the program prints `12`.",
      },
      {
        id: "m1l2-q2",
        question: "Which option is popular with scientists because it makes packages like NumPy easy to install?",
        options: [
          { id: "a", text: "Anaconda or Miniconda" },
          { id: "b", text: "A web browser's developer tools" },
          { id: "c", text: "Microsoft Excel" },
        ],
        correctOptionId: "a",
        explanation: "Anaconda and Miniconda include Python and the `conda` package manager, which handles scientific packages and their dependencies.",
      },
      {
        id: "m1l2-q3",
        question: "What is a Python package?",
        options: [
          { id: "a", text: "A compressed copy of your script" },
          { id: "b", text: "A collection of code written by others that adds features, such as NumPy" },
          { id: "c", text: "The window where output appears" },
        ],
        correctOptionId: "b",
        explanation: "Packages extend Python with extra functionality. Scientific Python relies heavily on packages such as NumPy and Matplotlib.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "your-first-python-program",
    description: "Write a program with several statements, control what `print()` displays, add comments, and read error messages.",
    estimatedMinutes: 20,
    learningObjectives: [
      "Write a program with several `print()` statements",
      "Print several values on one line",
      "Add comments that explain your code",
      "Read an error message and use it to fix a mistake",
    ],
    blocks: [
      { type: "heading", text: "Printing text and numbers" },
      {
        type: "paragraph",
        text: "`print()` is the simplest way to see what your program is doing. Text must be inside quotes. You can use double quotes (`\"...\"`) or single quotes (`'...'`), as long as the opening and closing quotes match. Numbers and calculations do not need quotes.",
      },
      {
        type: "paragraph",
        text: "Each call to `print()` writes one line of output and then moves to a new line, so a program with three `print()` statements produces three lines.",
      },
      {
        type: "code",
        code: `print("Sample report")
print('Temperature in kelvin:')
print(25 + 273.15)`,
        output: `Sample report
Temperature in kelvin:
298.15`,
      },
      { type: "subheading", text: "Several values on one line" },
      {
        type: "paragraph",
        text: "You can give `print()` several values separated by commas. It prints them on the same line with a single space between each one. This is a convenient way to label a number.",
      },
      { type: "code", code: `print("Atoms in an FCC unit cell:", 4)`, output: "Atoms in an FCC unit cell: 4" },
      {
        type: "paragraph",
        text: "If you want something other than a space between the values, add `sep=` (short for separator) as the last item inside the brackets. An empty `print()` prints a blank line, which is useful for spacing out output.",
      },
      {
        type: "code",
        code: `print("Fe", "Cr", "Ni", sep=", ")
print()
print("Fe", "Cr", "Ni", sep="-")`,
        output: `Fe, Cr, Ni

Fe-Cr-Ni`,
      },
      { type: "heading", text: "Syntax" },
      {
        type: "paragraph",
        text: "Every language has rules about how statements are written. In programming these rules are called **syntax**. Python's syntax is fairly relaxed, but a few rules matter from the start:",
      },
      {
        type: "list",
        items: [
          "Each statement normally goes on its own line.",
          "Brackets and quotes must come in matching pairs.",
          "Names are **case-sensitive**: `print` works, but `Print` and `PRINT` do not.",
          "Spaces at the **start** of a line (indentation) have a meaning in Python, so don't indent lines unless the code requires it. You will see where indentation is needed in the Control Flow module.",
        ],
      },
      { type: "heading", text: "Comments" },
      {
        type: "paragraph",
        text: "A **comment** starts with `#`. Python ignores everything from the `#` to the end of that line. Comments are notes for people reading the code, including you in six months' time when you have forgotten why you wrote it.",
      },
      {
        type: "paragraph",
        text: "A comment can sit on its own line, usually just above the code it describes, or at the end of a line of code. Good comments explain **why** something is done or what units a value is in; they don't need to repeat what the code obviously does.",
      },
      {
        type: "contextExample",
        title: "A commented program",
        variants: {
          "materials-science": {
            intro: "This program reports the density of aluminium. The comments explain where the value comes from and its units.",
            code: `# Density of aluminium at room temperature
print("Material: aluminium")
print("Density (g/cm³):", 2.70)  # handbook value`,
            output: `Material: aluminium
Density (g/cm³): 2.7`,
            explanation: "Python prints `2.70` as `2.7`. Trailing zeros after the decimal point don't change a number's value, so Python doesn't show them.",
          },
          chemistry: {
            intro: "This program reports the boiling point of ethanol. The comments explain the conditions and units.",
            code: `# Boiling point of ethanol
print("Compound: ethanol")
print("Boiling point (°C):", 78.37)  # at 1 atm`,
            output: `Compound: ethanol
Boiling point (°C): 78.37`,
          },
          physics: {
            intro: "This program reports the speed of light. The comment notes that the value is exact.",
            code: `# Speed of light in a vacuum
print("Constant: c")
print("Value (m/s):", 299792458)  # exact by definition`,
            output: `Constant: c
Value (m/s): 299792458`,
          },
          biology: {
            intro: "This program reports the size of a human red blood cell. The comments explain the units and the normal range.",
            code: `# Size of a human red blood cell
print("Cell: red blood cell")
print("Diameter (µm):", 7.5)  # usually 7 to 8 µm`,
            output: `Cell: red blood cell
Diameter (µm): 7.5`,
          },
          biochemistry: {
            intro: "This program reports the normal pH of human blood. The comment gives the accepted range.",
            code: `# Normal pH of arterial blood
print("Fluid: blood")
print("pH:", 7.4)  # normal range 7.35 to 7.45`,
            output: `Fluid: blood
pH: 7.4`,
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
      {
        type: "callout",
        tone: "tip",
        title: "Commenting out code",
        text: "Putting `#` in front of a line of code stops it from running without deleting it. This is a quick way to test what happens when a line is removed.",
      },
      { type: "heading", text: "Reading error messages" },
      {
        type: "paragraph",
        text: "Everyone makes mistakes when programming, including experienced developers. When Python can't run your code it stops and shows an **error message**. Learning to read these messages is one of the most useful skills you can develop. Run this example to see one:",
      },
      { type: "code", code: `print("Hello, lab)` },
      {
        type: "paragraph",
        text: "An error message has three useful parts:",
      },
      {
        type: "list",
        items: [
          "**Where**: the line number where Python noticed the problem.",
          "**What kind**: the error type, such as `SyntaxError`, `NameError` or `TypeError`.",
          "**Why**: a short description, such as *unterminated string literal* (a string that never ends).",
        ],
      },
      {
        type: "explanation",
        text: "Here the closing quote is missing, so Python thinks the text never ends. Add `\"` before the closing bracket and run it again.",
      },
      {
        type: "paragraph",
        text: "A `NameError` means Python doesn't recognise a name. It often comes from a typo or the wrong capitalisation:",
      },
      { type: "code", code: `Print("Hello, lab")` },
      {
        type: "table",
        caption: "Errors you are likely to see first",
        columns: ["Error", "Usual cause"],
        rows: [
          ["`SyntaxError`", "The code breaks Python's grammar: a missing quote, bracket or comma."],
          ["`NameError`", "A misspelled name, wrong capitalisation, or using a name before creating it."],
          ["`IndentationError`", "Unexpected spaces at the start of a line."],
          ["`TypeError`", "An operation on the wrong kind of value, such as adding text to a number."],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "A simple debugging routine",
        text: "Read the last line of the error first: it tells you what went wrong. Then look at the line number, check that line and the one before it, fix one thing at a time, and run the program again.",
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
        explanation: "Values separated by commas are printed on one line with a space between each one.",
      },
      {
        id: "m1l3-q3",
        question: "This code stops with an error. Which kind?",
        code: `Print("Hello")`,
        options: [
          { id: "a", text: "`NameError`, because Python is case-sensitive and `Print` is not a known name" },
          { id: "b", text: "`SyntaxError`, because text must use single quotes" },
          { id: "c", text: "No error: Python ignores capital letters" },
        ],
        correctOptionId: "a",
        explanation: "The function is called `print` in lower case. `Print` is an unknown name, so Python raises a `NameError`.",
      },
    ],
  },
];
