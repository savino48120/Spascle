import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "python-fundamentals";

export const MODULE_2_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "variables-and-data-types",
    description: "Store values in named variables, follow Python's naming rules, and meet the basic data types: integers, floats, strings and Booleans.",
    estimatedMinutes: 25,
    learningObjectives: [
      "Create variables and change their values",
      "Choose clear, valid variable names",
      "Recognise Python's basic data types and check them with `type()`",
      "Convert values between types with `int()`, `float()` and `str()`",
    ],
    blocks: [
      { type: "heading", text: "What is a variable?" },
      {
        type: "paragraph",
        text: "So far you have written numbers directly into `print()`. Real programs need to remember values and use them several times. A **variable** is a name that refers to a value stored in the computer's memory. You create one with an **assignment statement**: the name, an equals sign, and the value.",
      },
      {
        type: "code",
        code: `temperature = 298
print(temperature)`,
        output: "298",
      },
      {
        type: "paragraph",
        text: "Read `temperature = 298` as *\"temperature is assigned the value 298\"*, not as an equation. Python first works out the value on the **right** of `=`, then attaches the name on the **left** to it. After that, wherever you use the name, Python uses the value.",
      },
      {
        type: "paragraph",
        text: "A variable can be given a new value at any time. The old value is replaced. This is why they are called variables: their value can vary while the program runs.",
      },
      {
        type: "code",
        code: `temperature = 298
print(temperature)
temperature = 350   # replaces the old value
print(temperature)`,
        output: `298
350`,
      },
      {
        type: "paragraph",
        text: "Because the right-hand side is worked out first, a variable can even appear on both sides. `count = count + 1` means *\"take the current value of count, add 1, and store the result back in count\"*.",
      },
      {
        type: "code",
        code: `count = 10
count = count + 1
print(count)`,
        output: "11",
      },
      { type: "heading", text: "Using variables in calculations" },
      {
        type: "paragraph",
        text: "Variables make calculations readable. Instead of a line full of unexplained numbers, each value has a name that says what it is. If a value changes, you only update it in one place.",
      },
      {
        type: "paragraph",
        text: "The examples below use `round(value, 2)`, a built-in function that rounds a number to 2 decimal places. You will learn more ways to format numbers in the Strings lesson.",
      },
      {
        type: "contextExample",
        title: "Variables in a calculation",
        variants: {
          "materials-science": {
            intro: "Copper has a face-centred cubic crystal structure with a lattice constant of 3.615 Å. The volume of its cubic unit cell is the lattice constant cubed.",
            code: `lattice_constant = 3.615   # ångströms
volume = lattice_constant ** 3
print("Unit cell volume:", round(volume, 2), "Å³")`,
            output: "Unit cell volume: 47.24 Å³",
            explanation: "`**` means *to the power of*, so `lattice_constant ** 3` is the lattice constant cubed.",
          },
          chemistry: {
            intro: "The number of moles in a sample is its mass divided by its molar mass.",
            code: `molar_mass = 18.015   # g/mol, water
mass = 36.03          # g
moles = mass / molar_mass
print("Moles of water:", round(moles, 2), "mol")`,
            output: "Moles of water: 2.0 mol",
          },
          physics: {
            intro: "The kinetic energy of a moving object is ½mv².",
            code: `mass = 2.0       # kg
velocity = 3.5   # m/s
energy = 0.5 * mass * velocity ** 2
print("Kinetic energy:", energy, "J")`,
            output: "Kinetic energy: 12.25 J",
          },
          biology: {
            intro: "A culture doubles every generation. The population after several generations is the starting count multiplied by 2 to the power of the number of generations.",
            code: `initial_cells = 500
generations = 6
final_cells = initial_cells * 2 ** generations
print("Cells after 6 generations:", final_cells)`,
            output: "Cells after 6 generations: 32000",
          },
          biochemistry: {
            intro: "The Michaelis–Menten equation gives the rate of an enzyme reaction from the substrate concentration.",
            code: `v_max = 120.0      # µmol/min
k_m = 2.5          # mM
substrate = 5.0    # mM
rate = v_max * substrate / (k_m + substrate)
print("Reaction rate:", rate, "µmol/min")`,
            output: "Reaction rate: 80.0 µmol/min",
          },
          "general-programming": {
            intro: "The total cost of several identical items is the price multiplied by the quantity.",
            code: `price = 2.50
quantity = 4
total = price * quantity
print("Total:", total)`,
            output: "Total: 10.0",
          },
        },
      },
      { type: "heading", text: "Naming variables" },
      {
        type: "paragraph",
        text: "Python has a few strict rules for variable names, and some widely followed conventions that make code easier to read.",
      },
      {
        type: "table",
        columns: ["Rule", "Valid", "Not valid"],
        rows: [
          ["Use letters, digits and underscores only", "`band_gap`", "`band-gap`, `band gap`"],
          ["Don't start with a digit", "`sample2`", "`2sample`"],
          ["Don't use Python keywords such as `if`, `for`, `class`", "`material_class`", "`class`"],
          ["Names are case-sensitive", "`mass` and `Mass` are two different variables", ""],
        ],
      },
      {
        type: "list",
        items: [
          "Use **descriptive** names: `melting_point` is far clearer than `mp` or `x`.",
          "Write names in lower case with underscores between words. This style is called **snake_case**.",
          "Consider putting units in the name when they matter, for example `mass_g` or `temperature_k`.",
        ],
      },
      { type: "subheading", text: "Assigning several variables at once" },
      {
        type: "paragraph",
        text: "You can assign several variables in one line by separating the names and values with commas. The first name gets the first value, and so on.",
      },
      {
        type: "code",
        code: `a, b, c = 4.05, 4.05, 4.05   # lattice parameters in Å
print(a, b, c)`,
        output: "4.05 4.05 4.05",
      },
      { type: "heading", text: "Data types" },
      {
        type: "paragraph",
        text: "Every value in Python has a **type**, which decides what you can do with it. You can add two numbers, for example, but not a number and a word. These are the four basic types you will use constantly:",
      },
      {
        type: "table",
        columns: ["Type", "Name", "Examples", "Typical use"],
        rows: [
          ["`int`", "integer", "`4`, `-12`, `2024`", "Counts: atoms per cell, number of samples"],
          ["`float`", "floating-point number", "`2.70`, `-0.5`, `6.022e23`", "Measurements: density, temperature, energy"],
          ["`str`", "string", "`\"Cu\"`, `'FCC'`", "Text: names, symbols, labels"],
          ["`bool`", "Boolean", "`True`, `False`", "Yes/no facts: is it a metal?"],
        ],
      },
      {
        type: "paragraph",
        text: "Python works out the type from the value, so you don't have to declare it. The built-in `type()` function tells you the type of any value.",
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
        tone: "info",
        title: "Division always gives a float",
        text: "Dividing with `/` always gives a float, even when the answer is a whole number: `8 / 2` is `4.0`. You will meet whole-number division in the next lesson.",
      },
      { type: "subheading", text: "Scientific notation" },
      {
        type: "paragraph",
        text: "Very large and very small numbers are written with `e`, which means *times ten to the power of*. `6.022e23` is 6.022 × 10²³ and `1.602e-19` is 1.602 × 10⁻¹⁹. Python also uses this notation when it prints very large or very small floats.",
      },
      {
        type: "code",
        code: `avogadro = 6.022e23          # particles per mole
electron_charge = 1.602e-19  # coulombs
print(avogadro)
print(electron_charge)`,
        output: `6.022e+23
1.602e-19`,
      },
      { type: "heading", text: "Converting between types" },
      {
        type: "paragraph",
        text: "Sometimes a value has the wrong type for what you want to do. Text read from a file or typed by a user is always a string, even if it looks like a number. The functions `int()`, `float()` and `str()` create a new value of the type you ask for. This is called **type conversion** or **casting**.",
      },
      {
        type: "code",
        code: `print(float("2.70"))   # text to a float
print(int("12"))       # text to an integer
print(int(3.9))        # float to integer: the decimal part is dropped
print(str(4) + " atoms")`,
        output: `2.7
12
3
4 atoms`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "int() does not round",
        text: "`int(3.9)` gives `3`, not `4`: it simply removes everything after the decimal point. Use `round(3.9)` if you want the nearest whole number.",
      },
    ],
    exercises: [
      {
        id: "m2l1-q1",
        question: "What does this code print?",
        code: `mass = 10
mass = mass + 5
print(mass)`,
        options: [
          { id: "a", text: "10" },
          { id: "b", text: "15" },
          { id: "c", text: "An error, because mass can't equal mass + 5" },
        ],
        correctOptionId: "b",
        explanation: "`=` assigns rather than states equality. Python works out `mass + 5` (15) and stores it back in `mass`.",
      },
      {
        id: "m2l1-q2",
        question: "Which of these is a valid variable name?",
        options: [
          { id: "a", text: "`2nd_sample`" },
          { id: "b", text: "`melting-point`" },
          { id: "c", text: "`melting_point_k`" },
        ],
        correctOptionId: "c",
        explanation: "Names may contain letters, digits and underscores, but can't start with a digit or contain hyphens.",
      },
      {
        id: "m2l1-q3",
        question: "What is the type of `7.0`?",
        options: [
          { id: "a", text: "`int`" },
          { id: "b", text: "`float`" },
          { id: "c", text: "`str`" },
        ],
        correctOptionId: "b",
        explanation: "Any number written with a decimal point is a float, even if the decimal part is zero.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "operators-and-expressions",
    description: "Do arithmetic with Python's operators, control the order of operations, compare values, and use the `math` module for scientific functions.",
    estimatedMinutes: 25,
    learningObjectives: [
      "Use arithmetic operators, including `//`, `%` and `**`",
      "Predict the order in which an expression is calculated",
      "Compare values and combine conditions with `and`, `or` and `not`",
      "Use built-in functions and the `math` module for common calculations",
    ],
    blocks: [
      { type: "heading", text: "Expressions and operators" },
      {
        type: "paragraph",
        text: "An **expression** is any piece of code that Python can work out to a single value, such as `2 + 3` or `mass / volume`. Expressions are built from values, variables and **operators**: symbols that perform an operation, like `+` for addition.",
      },
      { type: "heading", text: "Arithmetic operators" },
      {
        type: "table",
        columns: ["Operator", "Meaning", "Example", "Result"],
        rows: [
          ["`+`", "Addition", "`7 + 2`", "`9`"],
          ["`-`", "Subtraction", "`7 - 2`", "`5`"],
          ["`*`", "Multiplication", "`7 * 2`", "`14`"],
          ["`/`", "Division", "`7 / 2`", "`3.5`"],
          ["`//`", "Floor division (whole-number part)", "`7 // 2`", "`3`"],
          ["`%`", "Remainder (modulo)", "`7 % 2`", "`1`"],
          ["`**`", "Power", "`7 ** 2`", "`49`"],
        ],
      },
      {
        type: "paragraph",
        text: "`//` and `%` are a pair. `//` tells you how many whole times one number fits into another, and `%` tells you what is left over. For example, 130 minutes is 2 whole hours (`130 // 60`) and 10 minutes (`130 % 60`).",
      },
      {
        type: "code",
        code: `total_minutes = 130
hours = total_minutes // 60
minutes = total_minutes % 60
print(hours, "h", minutes, "min")`,
        output: "2 h 10 min",
      },
      { type: "heading", text: "Order of operations" },
      {
        type: "paragraph",
        text: "Python follows the same order of operations as mathematics. Powers are worked out first, then multiplication and division, then addition and subtraction. Operators with the same priority are worked out from left to right. Brackets override all of this: anything inside brackets is calculated first.",
      },
      {
        type: "code",
        code: `print(2 + 3 * 4)     # multiplication first
print((2 + 3) * 4)   # brackets first`,
        output: `14
20`,
      },
      {
        type: "paragraph",
        text: "When you turn a scientific formula into code, add brackets wherever they make the meaning clearer, even if they aren't strictly needed. A common mistake is forgetting brackets around a denominator: `a / b + c` is not the same as `a / (b + c)`.",
      },
      {
        type: "contextExample",
        title: "A formula as an expression",
        variants: {
          "materials-science": {
            intro: "The theoretical density of a crystal is (atoms per cell × molar mass) ÷ (unit cell volume × Avogadro's number). For copper, with the volume in cm³:",
            code: `atoms_per_cell = 4
molar_mass = 63.55               # g/mol
cell_volume = (3.615e-8) ** 3    # cm³ (3.615 Å = 3.615e-8 cm)
avogadro = 6.022e23

density = (atoms_per_cell * molar_mass) / (cell_volume * avogadro)
print("Density:", round(density, 2), "g/cm³")`,
            output: "Density: 8.94 g/cm³",
            explanation: "The brackets make sure the whole top and the whole bottom of the fraction are calculated before dividing. The result is close to copper's measured density of 8.96 g/cm³.",
          },
          chemistry: {
            intro: "The ideal gas law gives the pressure of a gas: P = nRT / V.",
            code: `n = 2.0          # mol
R = 8.314        # J/(mol·K)
T = 300          # K
V = 0.05         # m³

pressure = n * R * T / V
print("Pressure:", round(pressure), "Pa")`,
            output: "Pressure: 99768 Pa",
          },
          physics: {
            intro: "The distance travelled under constant acceleration is s = ut + ½at².",
            code: `u = 5.0    # initial velocity, m/s
a = 2.0    # acceleration, m/s²
t = 3.0    # time, s

distance = u * t + 0.5 * a * t ** 2
print("Distance:", distance, "m")`,
            output: "Distance: 24.0 m",
          },
          biology: {
            intro: "Body mass index is mass divided by height squared.",
            code: `mass = 70.0     # kg
height = 1.75   # m

bmi = mass / height ** 2
print("BMI:", round(bmi, 1))`,
            output: "BMI: 22.9",
          },
          biochemistry: {
            intro: "The Henderson–Hasselbalch equation gives the pH of a buffer. Here the ratio of base to acid is 10, so the pH is one unit above the pKa.",
            code: `import math

pka = 4.76            # acetic acid
base_to_acid = 10.0

ph = pka + math.log10(base_to_acid)
print("pH:", ph)`,
            output: "pH: 5.76",
            explanation: "`math.log10()` comes from the `math` module, which is introduced later in this lesson.",
          },
          "general-programming": {
            intro: "Compound interest gives a savings balance after a number of years: balance = principal × (1 + rate)^years.",
            code: `principal = 1000        # starting balance
rate = 0.05             # 5% interest per year
years = 3

balance = principal * (1 + rate) ** years
print("Balance:", round(balance, 2))`,
            output: "Balance: 1157.63",
            explanation: "`**` is calculated before `*`, so `(1 + rate) ** years` is worked out first and then multiplied by `principal`. The brackets around `1 + rate` make sure the addition happens before the power.",
          },
        },
      },
      { type: "heading", text: "Assignment operators" },
      {
        type: "paragraph",
        text: "Updating a variable based on its own value is so common that Python has shortcuts for it. `total += 5` means exactly the same as `total = total + 5`.",
      },
      {
        type: "table",
        columns: ["Shortcut", "Same as"],
        rows: [
          ["`x += 2`", "`x = x + 2`"],
          ["`x -= 2`", "`x = x - 2`"],
          ["`x *= 2`", "`x = x * 2`"],
          ["`x /= 2`", "`x = x / 2`"],
        ],
      },
      {
        type: "code",
        code: `total_mass = 0.0
total_mass += 12.5   # add the first sample
total_mass += 8.3    # add the second sample
print(total_mass)`,
        output: "20.8",
      },
      { type: "heading", text: "Comparison operators" },
      {
        type: "paragraph",
        text: "A comparison checks how two values relate and gives a Boolean result: `True` or `False`. Comparisons are how programs make decisions, which you will use in the Control Flow module.",
      },
      {
        type: "table",
        columns: ["Operator", "Meaning", "Example", "Result"],
        rows: [
          ["`==`", "Equal to", "`5 == 5`", "`True`"],
          ["`!=`", "Not equal to", "`5 != 3`", "`True`"],
          ["`>`", "Greater than", "`5 > 3`", "`True`"],
          ["`<`", "Less than", "`5 < 3`", "`False`"],
          ["`>=`", "Greater than or equal to", "`5 >= 5`", "`True`"],
          ["`<=`", "Less than or equal to", "`3 <= 2`", "`False`"],
        ],
      },
      {
        type: "code",
        code: `melting_point = 1085   # °C, copper
print(melting_point > 1000)
print(melting_point == 1000)`,
        output: `True
False`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "`=` is not `==`",
        text: "A single `=` assigns a value to a variable. A double `==` asks whether two values are equal. Mixing them up is one of the most common beginner mistakes.",
      },
      { type: "subheading", text: "Combining conditions" },
      {
        type: "paragraph",
        text: "The **logical operators** `and`, `or` and `not` combine Boolean values. `and` is `True` only if both sides are true; `or` is `True` if at least one side is true; `not` flips `True` to `False` and back.",
      },
      {
        type: "code",
        code: `density = 2.70          # g/cm³
melting_point = 660     # °C

is_light = density < 5
is_high_temperature = melting_point > 1000

print(is_light and is_high_temperature)
print(is_light or is_high_temperature)
print(not is_light)`,
        output: `False
True
False`,
      },
      { type: "heading", text: "Built-in functions and the math module" },
      {
        type: "paragraph",
        text: "Python has some numeric functions built in. `abs()` gives the absolute value, `round()` rounds, and `min()` and `max()` return the smallest and largest of several values.",
      },
      {
        type: "code",
        code: `print(abs(-3.2))
print(round(2.71828, 3))
print(min(660, 1085, 1538))
print(max(660, 1085, 1538))`,
        output: `3.2
2.718
660
1538`,
      },
      {
        type: "paragraph",
        text: "For square roots, logarithms, trigonometry and constants such as π, use the `math` module. A **module** is a file of ready-made code. `import math` makes it available, and you then use its contents with a dot: `math.sqrt()`, `math.pi`.",
      },
      {
        type: "code",
        code: `import math

radius = 1.28e-8   # cm, atomic radius of copper
atom_volume = 4 / 3 * math.pi * radius ** 3

print(math.sqrt(16))
print(round(math.pi, 4))
print(atom_volume)`,
        output: `4.0
3.1416
8.78452975554819e-24`,
      },
      {
        type: "table",
        caption: "Useful functions in the math module",
        columns: ["Function", "What it does"],
        rows: [
          ["`math.sqrt(x)`", "Square root"],
          ["`math.exp(x)`", "e to the power of x"],
          ["`math.log(x)`", "Natural logarithm (ln)"],
          ["`math.log10(x)`", "Logarithm to base 10"],
          ["`math.sin(x)`, `math.cos(x)`", "Trigonometry, with x in radians"],
          ["`math.pi`, `math.e`", "The constants π and e"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Floating-point numbers are not exact",
        text: "Computers store floats in binary, so many decimals can only be approximated. `0.1 + 0.2` gives `0.30000000000000004`. The error is tiny and doesn't matter for most scientific work, but it is why you should round numbers when displaying them, and avoid checking floats with `==`.",
      },
    ],
    exercises: [
      {
        id: "m2l2-q1",
        question: "What is the result of `17 % 5`?",
        options: [
          { id: "a", text: "3.4" },
          { id: "b", text: "3" },
          { id: "c", text: "2" },
        ],
        correctOptionId: "c",
        explanation: "`%` gives the remainder. 5 fits into 17 three times (15), leaving 2.",
      },
      {
        id: "m2l2-q2",
        question: "What does this code print?",
        code: `print(10 - 2 * 3)`,
        options: [
          { id: "a", text: "24" },
          { id: "b", text: "4" },
          { id: "c", text: "-4" },
        ],
        correctOptionId: "b",
        explanation: "Multiplication happens before subtraction: 2 × 3 = 6, then 10 − 6 = 4.",
      },
      {
        id: "m2l2-q3",
        question: "What is the value of `(5 > 3) and (2 > 4)`?",
        options: [
          { id: "a", text: "`True`" },
          { id: "b", text: "`False`" },
          { id: "c", text: "An error" },
        ],
        correctOptionId: "b",
        explanation: "`and` needs both sides to be true. `5 > 3` is `True` but `2 > 4` is `False`, so the result is `False`.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "strings",
    description: "Work with text: create and join strings, pick out characters and slices, use string methods, and format numbers neatly with f-strings.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Create strings and join them together",
      "Select characters and parts of a string with indexing and slicing",
      "Use common string methods such as `upper()`, `strip()`, `replace()` and `split()`",
      "Format numbers inside text with f-strings",
    ],
    blocks: [
      { type: "heading", text: "Creating strings" },
      {
        type: "paragraph",
        text: "A **string** is a sequence of characters: letters, digits, spaces and symbols. Strings are written inside single or double quotes. Both work the same way, which is useful when the text itself contains a quote.",
      },
      {
        type: "code",
        code: `element = "copper"
structure = 'face-centred cubic'
note = "Copper's lattice constant is 3.615 Å"
print(element)
print(structure)
print(note)`,
        output: `copper
face-centred cubic
Copper's lattice constant is 3.615 Å`,
      },
      {
        type: "paragraph",
        text: "Text that spans several lines goes inside triple quotes (`\"\"\"` or `'''`). The line breaks are kept.",
      },
      {
        type: "code",
        code: `header = """Sample: Cu-01
Operator: A. Researcher"""
print(header)`,
        output: `Sample: Cu-01
Operator: A. Researcher`,
      },
      { type: "heading", text: "Joining and measuring strings" },
      {
        type: "paragraph",
        text: "The `+` operator joins (or **concatenates**) strings, and `*` repeats a string. `len()` counts how many characters a string contains, including spaces.",
      },
      {
        type: "code",
        code: `element = "copper"
symbol = "Cu"
label = element + " (" + symbol + ")"
print(label)
print("-" * 12)
print(len(element))`,
        output: `copper (Cu)
------------
6`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "Strings and numbers don't mix with +",
        text: "`\"Mass: \" + 12` raises a `TypeError`, because Python won't guess whether you want text or arithmetic. Convert the number first with `str(12)`, use commas in `print()`, or use an f-string (shown later in this lesson).",
      },
      { type: "heading", text: "Indexing: single characters" },
      {
        type: "paragraph",
        text: "Each character in a string has a position number called an **index**. Python counts from **0**, so the first character is at index 0, the second at index 1, and so on. Put the index in square brackets after the string to get that character. Negative indexes count from the end: `-1` is the last character.",
      },
      {
        type: "table",
        caption: "Indexes of the string \"Copper\"",
        columns: ["Character", "C", "o", "p", "p", "e", "r"],
        rows: [
          ["Index", "0", "1", "2", "3", "4", "5"],
          ["Negative index", "-6", "-5", "-4", "-3", "-2", "-1"],
        ],
      },
      {
        type: "code",
        code: `element = "Copper"
print(element[0])
print(element[3])
print(element[-1])`,
        output: `C
p
r`,
      },
      { type: "heading", text: "Slicing: parts of a string" },
      {
        type: "paragraph",
        text: "A **slice** takes a section of a string with `[start:stop]`. It includes the character at `start` but stops **before** `stop`. Leave out `start` to begin at the beginning, or leave out `stop` to go to the end.",
      },
      {
        type: "code",
        code: `sample_id = "CU-2024-017"
print(sample_id[0:2])   # characters 0 and 1
print(sample_id[3:7])   # characters 3 to 6
print(sample_id[-3:])   # the last three characters`,
        output: `CU
2024
017`,
      },
      {
        type: "explanation",
        text: "Slicing is very useful for codes and identifiers with a fixed layout, such as sample IDs, dates or file names.",
      },
      { type: "heading", text: "String methods" },
      {
        type: "paragraph",
        text: "A **method** is a function that belongs to a value. You call it with a dot after the value: `element.upper()`. Strings have many useful methods. Strings can't be changed once created (they are **immutable**), so these methods return a **new** string rather than changing the original.",
      },
      {
        type: "table",
        columns: ["Method", "What it does", "Example", "Result"],
        rows: [
          ["`upper()`", "All upper case", "`\"cu\".upper()`", "`\"CU\"`"],
          ["`lower()`", "All lower case", "`\"FCC\".lower()`", "`\"fcc\"`"],
          ["`title()`", "Capitalise each word", "`\"silicon carbide\".title()`", "`\"Silicon Carbide\"`"],
          ["`strip()`", "Remove spaces at both ends", "`\"  Fe  \".strip()`", "`\"Fe\"`"],
          ["`replace(a, b)`", "Replace every `a` with `b`", "`\"Fe-Ni\".replace(\"-\", \"/\")`", "`\"Fe/Ni\"`"],
          ["`count(x)`", "Count occurrences of `x`", "`\"GATTACA\".count(\"A\")`", "`3`"],
          ["`startswith(x)`", "Does it start with `x`?", "`\"CU-01\".startswith(\"CU\")`", "`True`"],
          ["`split(x)`", "Break into a list of parts at each `x`", "`\"Fe,Cr,Ni\".split(\",\")`", "`['Fe', 'Cr', 'Ni']`"],
        ],
      },
      {
        type: "paragraph",
        text: "`split()` returns a **list**, which you will study in the Data Structures module. For now, think of it as an ordered collection of the pieces.",
      },
      {
        type: "contextExample",
        title: "Working with text data",
        variants: {
          "materials-science": {
            intro: "An alloy is recorded as a hyphen-separated list of elements. String methods tidy it up and break it into parts.",
            code: `alloy = "  fe-cr-ni  "
alloy = alloy.strip().upper()
print(alloy)
print(alloy.split("-"))
print(alloy.count("-") + 1, "elements")`,
            output: `FE-CR-NI
['FE', 'CR', 'NI']
3 elements`,
          },
          chemistry: {
            intro: "Chemical formulas are strings too. Here we check a formula and count one element symbol.",
            code: `formula = "C6H12O6"   # glucose
print(len(formula))
print(formula.count("C"))
print(formula.startswith("C"))`,
            output: `7
1
True`,
            explanation: "`count(\"C\")` returns `1` because the letter C appears once, even though glucose has six carbon atoms. Counting atoms needs the numbers too, which takes more programming tools.",
          },
          physics: {
            intro: "Units are often stored as text. Methods make it easy to normalise them.",
            code: `unit = " Kg·m/S² "
unit = unit.strip().lower()
print(unit)
print(unit.replace("kg·m/s²", "N"))`,
            output: `kg·m/s²
N`,
          },
          biology: {
            intro: "DNA sequences are long strings. Methods count bases and convert DNA to RNA.",
            code: `dna = "ATGCGCATTA"
print(dna.count("G") + dna.count("C"), "G/C bases")
print(dna.replace("T", "U"))   # transcribe to RNA`,
            output: `4 G/C bases
AUGCGCAUUA`,
          },
          biochemistry: {
            intro: "Proteins are written as strings of one-letter amino acid codes.",
            code: `peptide = "MKTAYIAKQR"
print(len(peptide), "residues")
print(peptide.count("K"), "lysines")
print(peptide[0])   # the first residue`,
            output: `10 residues
2 lysines
M`,
          },
          "general-programming": {
            intro: "Cleaning up user-entered names is a common task.",
            code: `name = "  ada LOVELACE "
name = name.strip().title()
print(name)
print(name.split(" "))`,
            output: `Ada Lovelace
['Ada', 'Lovelace']`,
          },
        },
      },
      { type: "subheading", text: "Checking whether text contains something" },
      {
        type: "paragraph",
        text: "The `in` operator checks whether one string appears inside another and gives `True` or `False`.",
      },
      {
        type: "code",
        code: `formula = "Fe2O3"
print("O" in formula)
print("Cu" in formula)`,
        output: `True
False`,
      },
      { type: "heading", text: "f-strings: putting values into text" },
      {
        type: "paragraph",
        text: "Building messages with `+` and `str()` quickly becomes messy. An **f-string** is a string with an `f` before the opening quote. Inside it, anything in curly braces `{}` is replaced by its value. You can put variables or whole expressions inside the braces.",
      },
      {
        type: "code",
        code: `element = "copper"
density = 8.96
print(f"The density of {element} is {density} g/cm³")
print(f"Twice the density is {density * 2} g/cm³")`,
        output: `The density of copper is 8.96 g/cm³
Twice the density is 17.92 g/cm³`,
      },
      {
        type: "paragraph",
        text: "After the value you can add a colon and a **format specifier** that controls how it is displayed. This is the standard way to show a sensible number of decimal places.",
      },
      {
        type: "table",
        columns: ["Specifier", "Meaning", "Example", "Result"],
        rows: [
          ["`:.2f`", "2 decimal places", "`f\"{3.14159:.2f}\"`", "`3.14`"],
          ["`:.0f`", "No decimal places (rounded)", "`f\"{298.6:.0f}\"`", "`299`"],
          ["`:.3e`", "Scientific notation, 3 decimals", "`f\"{6.02214e23:.3e}\"`", "`6.022e+23`"],
          ["`:,`", "Thousands separators", "`f\"{3100000000:,}\"`", "`3,100,000,000`"],
          ["`:.1%`", "Percentage, 1 decimal", "`f\"{0.4:.1%}\"`", "`40.0%`"],
        ],
      },
      {
        type: "code",
        code: `volume = 3.615 ** 3
print(f"Unit cell volume: {volume:.2f} Å³")
print(f"Avogadro's number: {6.02214076e23:.3e}")`,
        output: `Unit cell volume: 47.24 Å³
Avogadro's number: 6.022e+23`,
      },
      { type: "subheading", text: "Special characters" },
      {
        type: "paragraph",
        text: "A backslash `\\` inside a string starts an **escape sequence**: a way to write characters you can't type directly. The most common are `\\n` for a new line and `\\t` for a tab.",
      },
      {
        type: "code",
        code: `print("Element\\tDensity")
print("Cu\\t8.96\\nAl\\t2.70")`,
        output: `Element	Density
Cu	8.96
Al	2.70`,
      },
    ],
    exercises: [
      {
        id: "m2l3-q1",
        question: "What does this code print?",
        code: `symbol = "Fe2O3"
print(symbol[0:2])`,
        options: [
          { id: "a", text: "Fe2" },
          { id: "b", text: "Fe" },
          { id: "c", text: "e2" },
        ],
        correctOptionId: "b",
        explanation: "A slice includes the start index (0) but stops before the end index (2), giving characters 0 and 1.",
      },
      {
        id: "m2l3-q2",
        question: "What is the result of `\"lattice\".upper()`?",
        options: [
          { id: "a", text: "`\"LATTICE\"`" },
          { id: "b", text: "`\"Lattice\"`" },
          { id: "c", text: "It changes the original string in place and returns nothing" },
        ],
        correctOptionId: "a",
        explanation: "`upper()` returns a new string in capitals. Strings are immutable, so the original is unchanged.",
      },
      {
        id: "m2l3-q3",
        question: "What does this code print?",
        code: `band_gap = 1.1234
print(f"Band gap: {band_gap:.2f} eV")`,
        options: [
          { id: "a", text: "Band gap: 1.1234 eV" },
          { id: "b", text: "Band gap: {band_gap:.2f} eV" },
          { id: "c", text: "Band gap: 1.12 eV" },
        ],
        correctOptionId: "c",
        explanation: "In an f-string, `{band_gap:.2f}` is replaced by the value rounded to 2 decimal places.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "input-and-output",
    description: "Read values typed by the user with `input()`, convert them to numbers, and present results as clear, well-aligned output.",
    estimatedMinutes: 20,
    learningObjectives: [
      "Read text from the user with `input()`",
      "Convert input to numbers before calculating with it",
      "Control output with `sep`, `end` and f-string alignment",
      "Write a small interactive calculation program",
    ],
    blocks: [
      { type: "heading", text: "Reading input" },
      {
        type: "paragraph",
        text: "So far every value has been written into the program. Often you want a program to work with values that change each time it runs. `input()` pauses the program, shows a message (the **prompt**), and waits for the user to type something. Whatever they type is returned as a string.",
      },
      {
        type: "paragraph",
        text: "In SPASCLE's editor there is no keyboard prompt while the program runs. Instead, when your code uses `input()`, a **Program input** box appears below the editor. Type one value per line; each `input()` call takes the next line, in order.",
      },
      {
        type: "code",
        code: `sample = input("Sample name: ")
print("Recording data for", sample)`,
        stdin: "Cu-01",
      },
      {
        type: "explanation",
        text: "The prompt `Sample name: ` is printed first, then the program continues with the value from the input box. Try changing the input and running it again.",
      },
      { type: "heading", text: "Converting input to numbers" },
      {
        type: "paragraph",
        text: "`input()` **always** returns a string, even when the user types a number. Text that looks like `2.7` can't be used in arithmetic until you convert it with `float()` (for decimals) or `int()` (for whole numbers). It is common to do both steps on one line.",
      },
      {
        type: "contextExample",
        title: "A calculator that asks for values",
        variants: {
          "materials-science": {
            intro: "This program asks for the mass and volume of a sample and calculates its density.",
            code: `mass = float(input("Mass (g): "))
volume = float(input("Volume (cm³): "))
density = mass / volume
print(f"Density: {density:.2f} g/cm³")`,
            stdin: "26.98\n10.0",
          },
          chemistry: {
            intro: "This program asks for a mass and a molar mass and calculates the number of moles.",
            code: `mass = float(input("Mass (g): "))
molar_mass = float(input("Molar mass (g/mol): "))
moles = mass / molar_mass
print(f"Amount: {moles:.3f} mol")`,
            stdin: "10.0\n58.44",
          },
          physics: {
            intro: "This program asks for a distance and a time and calculates the average speed.",
            code: `distance = float(input("Distance (m): "))
time = float(input("Time (s): "))
speed = distance / time
print(f"Average speed: {speed:.2f} m/s")`,
            stdin: "100\n9.58",
          },
          biology: {
            intro: "This program asks for the number of colonies counted and the dilution factor, and estimates the concentration of bacteria.",
            code: `colonies = int(input("Colonies counted: "))
dilution = float(input("Dilution factor: "))
concentration = colonies * dilution
print(f"Estimated concentration: {concentration:,.0f} cells/mL")`,
            stdin: "152\n10000",
          },
          biochemistry: {
            intro: "This program uses the Beer–Lambert law to work out a concentration from a measured absorbance.",
            code: `absorbance = float(input("Absorbance: "))
epsilon = float(input("Molar absorptivity (L/(mol·cm)): "))
concentration = absorbance / (epsilon * 1.0)   # 1 cm path length
print(f"Concentration: {concentration:.2e} mol/L")`,
            stdin: "0.45\n6220",
          },
          "general-programming": {
            intro: "This program asks for a price and a quantity and calculates the total cost.",
            code: `price = float(input("Price per item: "))
quantity = int(input("Quantity: "))
total = price * quantity
print(f"Total: {total:.2f}")`,
            stdin: "2.50\n4",
            explanation: "The quantity is a whole number, so it is converted with `int()` rather than `float()`.",
          },
        },
      },
      {
        type: "callout",
        tone: "warning",
        title: "Forgetting to convert",
        text: "If you write `mass = input(\"Mass: \")` without `float()`, then `mass / volume` fails with a `TypeError`, because you can't divide text. If the user types something that isn't a number, `float()` raises a `ValueError`. Later you will learn how to check input before using it.",
      },
      { type: "heading", text: "Controlling output" },
      {
        type: "paragraph",
        text: "`print()` has two optional settings. `sep` sets what goes **between** values (a space by default), and `end` sets what goes at the **end** of the line (a new line by default). Changing `end` lets the next `print()` continue on the same line.",
      },
      {
        type: "code",
        code: `print("Fe", "Cr", "Ni", sep=" | ")
print("Loading", end="...")
print("done")`,
        output: `Fe | Cr | Ni
Loading...done`,
      },
      { type: "subheading", text: "Aligning columns" },
      {
        type: "paragraph",
        text: "Results are easier to read in neat columns. In an f-string, a number after the colon sets a minimum **width**. `<` aligns left, `>` aligns right, and you can combine width with decimal places, as in `{density:>8.2f}`.",
      },
      {
        type: "code",
        code: `print(f"{'Metal':<10}{'Density':>10}")
print(f"{'Aluminium':<10}{2.70:>10.2f}")
print(f"{'Copper':<10}{8.96:>10.2f}")
print(f"{'Gold':<10}{19.32:>10.2f}")`,
        output: `Metal        Density
Aluminium       2.70
Copper          8.96
Gold           19.32`,
      },
      { type: "heading", text: "Putting it together" },
      {
        type: "paragraph",
        text: "Most simple programs follow the same three steps: **input** (get the values), **process** (calculate), and **output** (present the result). This program converts a temperature typed by the user into two other scales.",
      },
      {
        type: "code",
        code: `celsius = float(input("Temperature (°C): "))

kelvin = celsius + 273.15
fahrenheit = celsius * 9 / 5 + 32

print(f"{celsius:.1f} °C = {kelvin:.2f} K")
print(f"{celsius:.1f} °C = {fahrenheit:.1f} °F")`,
        stdin: "1085",
      },
    ],
    exercises: [
      {
        id: "m2l4-q1",
        question: "What type of value does `input()` return?",
        options: [
          { id: "a", text: "Always a string" },
          { id: "b", text: "A number if the user types digits, otherwise a string" },
          { id: "c", text: "Always a float" },
        ],
        correctOptionId: "a",
        explanation: "`input()` always returns a string. Convert it with `int()` or `float()` before doing arithmetic.",
      },
      {
        id: "m2l4-q2",
        question: "The user types `4`. What does this code print?",
        code: `count = input("Count: ")
print(count * 2)`,
        options: [
          { id: "a", text: "8" },
          { id: "b", text: "44" },
          { id: "c", text: "An error" },
        ],
        correctOptionId: "b",
        explanation: "`count` is the string `\"4\"`, and multiplying a string by 2 repeats it, giving `44`. Convert with `int()` first to get 8.",
      },
      {
        id: "m2l4-q3",
        question: "What does `print(\"A\", \"B\", sep=\"-\")` display?",
        options: [
          { id: "a", text: "A B" },
          { id: "b", text: "A-B" },
          { id: "c", text: "AB-" },
        ],
        correctOptionId: "b",
        explanation: "`sep` replaces the space that normally goes between values.",
      },
    ],
  },
];
