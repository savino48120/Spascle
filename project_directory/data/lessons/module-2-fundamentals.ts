import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "python-fundamentals";

export const MODULE_2_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "variables-and-data-types",
    description: "Store values in named variables and meet Python's basic data types.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Create variables and update their values",
      "Recognise `int`, `float`, `str` and `bool` values",
      "Use `type()` to check a value's data type",
    ],
    blocks: [
      { type: "heading", text: "Variables" },
      {
        type: "paragraph",
        text: "A **variable** is a name that refers to a value. You create one with `=`, which means *store the value on the right under the name on the left*. It is not the same as mathematical equality.",
      },
      {
        type: "code",
        code: `temperature = 300
print(temperature)
temperature = 350  # variables can be updated
print(temperature)`,
        output: `300
350`,
      },
      {
        type: "list",
        items: [
          "Names can contain letters, digits and underscores, but cannot start with a digit.",
          "Use descriptive names in lower case with underscores, such as `melting_point`.",
          "Names are case-sensitive: `Mass` and `mass` are different variables.",
        ],
      },
      {
        type: "contextExample",
        title: "Variables in a calculation",
        variants: {
          "materials-science": {
            intro: "The lattice constant of copper describes the size of its cubic unit cell. Cubing it gives the cell volume.",
            code: `# Lattice constant of copper (FCC), in ångströms
lattice_constant = 3.615
volume = lattice_constant ** 3
print(f"Unit cell volume: {volume:.2f} Å³")`,
            output: "Unit cell volume: 47.24 Å³",
            explanation: "`**` raises a number to a power. The `f\"...\"` string formats the result to two decimal places; you will learn about f-strings in the Strings lesson.",
          },
          chemistry: {
            intro: "Dividing a sample's mass by the molar mass gives the number of moles.",
            code: `# Molar mass of water, in g/mol
molar_mass = 18.015
mass = 36.03  # grams
moles = mass / molar_mass
print(f"Moles of water: {moles:.2f} mol")`,
            output: "Moles of water: 2.00 mol",
          },
          physics: {
            intro: "Kinetic energy is half of mass times velocity squared.",
            code: `# Kinetic energy of a moving object
mass = 2.0      # kg
velocity = 3.5  # m/s
energy = 0.5 * mass * velocity ** 2
print(f"Kinetic energy: {energy:.2f} J")`,
            output: "Kinetic energy: 12.25 J",
          },
          biology: {
            intro: "GC content is the percentage of bases in a DNA sequence that are G or C.",
            code: `# GC content of a DNA sequence
sequence = "ATGCGCATTA"
gc_count = sequence.count("G") + sequence.count("C")
gc_content = gc_count / len(sequence) * 100
print(f"GC content: {gc_content:.0f}%")`,
            output: "GC content: 40%",
          },
          "general-programming": {
            intro: "Multiplying price by quantity gives the total cost.",
            code: `# Total cost of items in a basket
price = 2.50
quantity = 4
total = price * quantity
print(f"Total: \${total:.2f}")`,
            output: "Total: $10.00",
          },
        },
      },
      { type: "heading", text: "Data types" },
      {
        type: "paragraph",
        text: "Every value has a **data type** that decides what you can do with it. The four basic types are:",
      },
      {
        type: "list",
        items: [
          "`int`: whole numbers such as `4` or `-12`",
          "`float`: numbers with a decimal point such as `3.615` or `1e-9`",
          "`str`: text in quotes such as `\"copper\"`",
          "`bool`: `True` or `False`",
        ],
      },
      {
        type: "code",
        code: `atoms_per_cell = 4
density = 8.96
element = "Cu"
is_metal = True
print(type(atoms_per_cell))
print(type(density))
print(type(element))
print(type(is_metal))`,
        output: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>`,
      },
      {
        type: "callout",
        tone: "tip",
        title: "Scientific notation",
        text: "Write very large or small numbers with `e`: `6.022e23` means 6.022 × 10²³ and `1.6e-19` means 1.6 × 10⁻¹⁹. Both are floats.",
      },
    ],
    exercises: [
      {
        id: "m2l1-q1",
        question: "What is printed?",
        code: `count = 5
count = count + 2
print(count)`,
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "7" },
          { id: "c", text: "count + 2" },
        ],
        correctOptionId: "b",
        explanation: "The right-hand side is calculated first (`5 + 2`), then the result `7` is stored back in `count`.",
      },
      {
        id: "m2l1-q2",
        question: "What is the data type of `2.70`?",
        options: [
          { id: "a", text: "int" },
          { id: "b", text: "str" },
          { id: "c", text: "float" },
        ],
        correctOptionId: "c",
        explanation: "Any number written with a decimal point is a `float`.",
      },
      {
        id: "m2l1-q3",
        question: "Which is a valid variable name?",
        options: [
          { id: "a", text: "2nd_sample" },
          { id: "b", text: "band_gap" },
          { id: "c", text: "band gap" },
        ],
        correctOptionId: "b",
        explanation: "Names cannot start with a digit or contain spaces. `band_gap` follows the rules and the usual style.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "operators-and-expressions",
    description: "Do arithmetic with Python's operators, control the order of operations, and compare values.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Use arithmetic operators including `**`, `//` and `%`",
      "Apply the order of operations with parentheses",
      "Compare values with comparison operators",
    ],
    blocks: [
      { type: "heading", text: "Arithmetic operators" },
      {
        type: "list",
        items: [
          "`+` add, `-` subtract, `*` multiply, `/` divide",
          "`**` power, for example `2 ** 3` is `8`",
          "`//` floor division: divides and rounds down to a whole number",
          "`%` remainder (modulo): what is left over after floor division",
        ],
      },
      {
        type: "code",
        code: `print(7 / 2)
print(7 // 2)
print(7 % 2)
print(2 ** 10)`,
        output: `3.5
3
1
1024`,
      },
      {
        type: "explanation",
        text: "`/` always gives a float, even when the division is exact: `6 / 2` is `3.0`.",
      },
      { type: "heading", text: "Order of operations" },
      {
        type: "paragraph",
        text: "Python follows the usual mathematical order: powers first, then multiplication and division, then addition and subtraction. Use parentheses to make your intention clear.",
      },
      {
        type: "code",
        code: `print(2 + 3 * 4)
print((2 + 3) * 4)`,
        output: `14
20`,
      },
      {
        type: "contextExample",
        title: "Expressions in a formula",
        variants: {
          "materials-science": {
            intro: "The density of a cubic crystal is the mass of the atoms in its unit cell divided by the cell volume.",
            code: `# Density of copper from its crystal structure
atoms_per_cell = 4
atomic_mass = 63.546      # g/mol
avogadro = 6.022e23       # atoms/mol
lattice_constant = 3.615e-8  # cm

density = (atoms_per_cell * atomic_mass) / (avogadro * lattice_constant ** 3)
print(f"Density: {density:.2f} g/cm³")`,
            output: "Density: 8.93 g/cm³",
            explanation: "The parentheses make sure the whole numerator is divided by the whole denominator. The result is close to copper's measured density of 8.96 g/cm³.",
          },
          chemistry: {
            intro: "The ideal gas law, PV = nRT, gives the pressure of a gas.",
            code: `# Pressure of 1 mol of gas at 298 K in 0.0245 m³
n = 1.0         # mol
R = 8.314       # J/(mol·K)
T = 298.0       # K
V = 0.0245      # m³

pressure = n * R * T / V
print(f"Pressure: {pressure:.0f} Pa")`,
            output: "Pressure: 101125 Pa",
          },
          physics: {
            intro: "An object dropped from rest falls a distance of ½gt² in time t.",
            code: `# Distance fallen after 2.5 seconds
g = 9.81   # m/s²
t = 2.5    # s
distance = 0.5 * g * t ** 2
print(f"Distance: {distance:.2f} m")`,
            output: "Distance: 30.66 m",
          },
        },
      },
      { type: "heading", text: "Comparisons" },
      {
        type: "paragraph",
        text: "Comparison operators give a `bool` result: `==` equal, `!=` not equal, `<`, `>`, `<=` and `>=`.",
      },
      {
        type: "code",
        code: `melting_point = 1085
print(melting_point > 1000)
print(melting_point == 1000)`,
        output: `True
False`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "`=` versus `==`",
        text: "A single `=` stores a value. A double `==` asks whether two values are equal.",
      },
    ],
    exercises: [
      {
        id: "m2l2-q1",
        question: "What does `17 % 5` evaluate to?",
        options: [
          { id: "a", text: "3" },
          { id: "b", text: "2" },
          { id: "c", text: "3.4" },
        ],
        correctOptionId: "b",
        explanation: "`5` goes into `17` three times (15), leaving a remainder of `2`.",
      },
      {
        id: "m2l2-q2",
        question: "What is printed?",
        code: `print(10 - 2 * 3)`,
        options: [
          { id: "a", text: "24" },
          { id: "b", text: "4" },
          { id: "c", text: "6" },
        ],
        correctOptionId: "b",
        explanation: "Multiplication happens before subtraction: `2 * 3` is `6`, and `10 - 6` is `4`.",
      },
      {
        id: "m2l2-q3",
        question: "What type of value does `8 / 4` produce?",
        options: [
          { id: "a", text: "float (2.0)" },
          { id: "b", text: "int (2)" },
          { id: "c", text: "str (\"2\")" },
        ],
        correctOptionId: "a",
        explanation: "The `/` operator always returns a float. Use `//` if you need a whole-number result.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "strings",
    description: "Work with text: join strings, use string methods, and format numbers with f-strings.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Create and join strings",
      "Use common string methods such as `upper()` and `count()`",
      "Format numbers inside text with f-strings",
    ],
    blocks: [
      { type: "heading", text: "Creating and joining strings" },
      {
        type: "paragraph",
        text: "A **string** is text inside quotes. Single `'...'` and double `\"...\"` quotes both work. Join strings with `+`, and use `len()` to count characters.",
      },
      {
        type: "code",
        code: `element = "copper"
symbol = "Cu"
label = element + " (" + symbol + ")"
print(label)
print(len(element))`,
        output: `copper (Cu)
6`,
      },
      { type: "heading", text: "Indexing" },
      {
        type: "paragraph",
        text: "Each character has a position called an **index**, starting at `0`. Negative indexes count from the end. A **slice** such as `[0:3]` takes characters from index 0 up to, but not including, index 3.",
      },
      {
        type: "code",
        code: `formula = "Fe2O3"
print(formula[0])
print(formula[-1])
print(formula[0:2])`,
        output: `F
3
Fe`,
      },
      { type: "heading", text: "String methods" },
      {
        type: "paragraph",
        text: "Methods are functions attached to a value, called with a dot. Strings have many, for example `upper()`, `lower()`, `replace()` and `count()`.",
      },
      {
        type: "contextExample",
        title: "Working with text data",
        variants: {
          "materials-science": {
            intro: "Material names often arrive in inconsistent formats. String methods tidy them up.",
            code: `sample = "  titanium dioxide  "
clean = sample.strip()
print(clean)
print(clean.title())
print(clean.replace("dioxide", "(IV) oxide"))`,
            output: `titanium dioxide
Titanium Dioxide
titanium (IV) oxide`,
            explanation: "`strip()` removes spaces at the start and end, and `title()` capitalises each word.",
          },
          chemistry: {
            intro: "Counting characters in a formula is a first step towards counting atoms.",
            code: `formula = "C6H12O6"
print(formula.count("C"))
print(formula.lower())
print(formula.startswith("C"))`,
            output: `1
c6h12o6
True`,
            explanation: "`count(\"C\")` returns `1` because the letter C appears once, even though glucose has six carbon atoms. Counting atoms needs the numbers too, which you will learn to handle with loops.",
          },
          biology: {
            intro: "DNA sequences are stored as strings, so string methods are a natural fit.",
            code: `dna = "ATGCTTAGC"
print(dna.count("A"))
rna = dna.replace("T", "U")
print(rna)
print(len(rna))`,
            output: `2
AUGCUUAGC
9`,
            explanation: "Replacing thymine (T) with uracil (U) gives the matching RNA sequence.",
          },
        },
      },
      { type: "heading", text: "f-strings" },
      {
        type: "paragraph",
        text: "An **f-string** starts with `f` before the quote and lets you put variables inside `{}`. Add `:.2f` to show a number with two decimal places.",
      },
      {
        type: "code",
        code: `element = "silicon"
band_gap = 1.1242
print(f"The band gap of {element} is {band_gap:.2f} eV")`,
        output: "The band gap of silicon is 1.12 eV",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Strings are not numbers",
        text: "`\"2\" + \"3\"` gives `\"23\"`, not `5`. Convert text to a number with `int()` or `float()` before doing arithmetic.",
      },
    ],
    exercises: [
      {
        id: "m2l3-q1",
        question: "What is printed?",
        code: `symbol = "NaCl"
print(symbol[1])`,
        options: [
          { id: "a", text: "N" },
          { id: "b", text: "a" },
          { id: "c", text: "C" },
        ],
        correctOptionId: "b",
        explanation: "Indexes start at 0, so index 1 is the second character, `a`.",
      },
      {
        id: "m2l3-q2",
        question: "What does `\"5\" + \"5\"` produce?",
        options: [
          { id: "a", text: "10" },
          { id: "b", text: "\"55\"" },
          { id: "c", text: "An error" },
        ],
        correctOptionId: "b",
        explanation: "`+` joins two strings together. The quotes make them text, not numbers.",
      },
      {
        id: "m2l3-q3",
        question: "Which line prints `Yield: 87.5%`?",
        options: [
          { id: "a", text: `print("Yield: {yield_pct}%")` },
          { id: "b", text: `print(f"Yield: {yield_pct}%")` },
          { id: "c", text: `print(f"Yield: yield_pct%")` },
        ],
        correctOptionId: "b",
        explanation: "Only an f-string replaces `{yield_pct}` with the variable's value. Without the `f`, the braces are printed as they are.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "input-and-output",
    description: "Read values typed by the user with `input()`, convert them to numbers, and format the output.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Ask the user for a value with `input()`",
      "Convert text input to `int` or `float`",
      "Control printed output with `sep` and `end`",
    ],
    blocks: [
      { type: "heading", text: "Reading input" },
      {
        type: "paragraph",
        text: "`input()` pauses the program, shows a prompt, and returns whatever the user types **as a string**. In the SPASCLE editor, type your values in the **Program input** box before pressing Run, one value per line.",
      },
      {
        type: "code",
        code: `name = input("Which element? ")
print("You chose", name)`,
        stdin: "Nickel",
      },
      { type: "heading", text: "Converting input to numbers" },
      {
        type: "paragraph",
        text: "Because `input()` always returns text, convert it with `float()` or `int()` before calculating.",
      },
      {
        type: "contextExample",
        title: "A calculator that asks for values",
        variants: {
          "materials-science": {
            intro: "This program asks for a sample's mass and volume and reports its density. Change the values in the input box and run it again.",
            code: `mass = float(input("Mass in g: "))
volume = float(input("Volume in cm³: "))
density = mass / volume
print(f"Density: {density:.2f} g/cm³")`,
            stdin: "26.9\n10",
          },
          chemistry: {
            intro: "This program asks for a concentration and volume and reports the amount of solute.",
            code: `concentration = float(input("Concentration in mol/L: "))
volume = float(input("Volume in L: "))
moles = concentration * volume
print(f"Amount: {moles:.3f} mol")`,
            stdin: "0.5\n0.25",
          },
          physics: {
            intro: "This program asks for a distance and time and reports the average speed.",
            code: `distance = float(input("Distance in m: "))
time = float(input("Time in s: "))
speed = distance / time
print(f"Average speed: {speed:.2f} m/s")`,
            stdin: "100\n9.58",
          },
        },
      },
      {
        type: "callout",
        tone: "warning",
        title: "Forgetting to convert",
        text: "If you write `mass = input(...)` and then divide it, Python raises a `TypeError` because you cannot divide a string. Try removing `float()` in the example above to see the error.",
      },
      { type: "heading", text: "Controlling output" },
      {
        type: "paragraph",
        text: "`print()` has two useful options. `sep` sets what goes between values (a space by default) and `end` sets what goes at the end (a new line by default).",
      },
      {
        type: "code",
        code: `print("Fe", "Ni", "Cr", sep=", ")
print("Loading", end="...")
print("done")`,
        output: `Fe, Ni, Cr
Loading...done`,
      },
    ],
    exercises: [
      {
        id: "m2l4-q1",
        question: "What data type does `input()` return?",
        options: [
          { id: "a", text: "int" },
          { id: "b", text: "It depends on what the user types" },
          { id: "c", text: "str" },
        ],
        correctOptionId: "c",
        explanation: "`input()` always returns a string, even if the user types digits.",
      },
      {
        id: "m2l4-q2",
        question: "The user types `4` for this program. What is printed?",
        code: `count = input("Count: ")
print(count * 2)`,
        options: [
          { id: "a", text: "8" },
          { id: "b", text: "44" },
          { id: "c", text: "An error" },
        ],
        correctOptionId: "b",
        explanation: "`count` is the string `\"4\"`. Multiplying a string by 2 repeats it, giving `44`. Use `int(input(...))` to get `8`.",
      },
      {
        id: "m2l4-q3",
        question: "What does this print?",
        code: `print("H", "O", sep="-")`,
        options: [
          { id: "a", text: "H-O" },
          { id: "b", text: "H O" },
          { id: "c", text: "HO-" },
        ],
        correctOptionId: "a",
        explanation: "`sep=\"-\"` replaces the default space between values with a hyphen.",
      },
    ],
  },
];
