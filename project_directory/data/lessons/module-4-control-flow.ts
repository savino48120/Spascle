import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "control-flow";

export const MODULE_4_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "conditional-statements",
    description: "Make programs take decisions with `if`, `elif` and `else`, understand indented blocks, and combine conditions.",
    estimatedMinutes: 25,
    learningObjectives: [
      "Write `if`, `elif` and `else` statements",
      "Explain how indentation groups statements into blocks",
      "Combine conditions with `and`, `or` and `not`",
      "Use conditions to classify values and to check input",
    ],
    blocks: [
      { type: "heading", text: "Making decisions" },
      {
        type: "paragraph",
        text: "Until now, every program has run every line from top to bottom. Real programs need to react to data: classify a material as a conductor or an insulator, flag a measurement outside the expected range, or warn when an input makes no sense. **Control flow** statements decide which lines run, and how many times. This module covers the two main kinds: **conditional statements** (this lesson) and **loops** (the next two).",
      },
      { type: "heading", text: "The if statement" },
      {
        type: "paragraph",
        text: "An `if` statement runs a block of code only when a condition is `True`. The condition is any expression that gives a Boolean, usually a comparison such as `temperature > 1000`.",
      },
      {
        type: "code",
        code: `temperature = 1200   # °C
melting_point = 1085  # copper

if temperature > melting_point:
    print("Copper is molten at this temperature.")
    print("Use a ceramic crucible.")

print("Check complete.")`,
        output: `Copper is molten at this temperature.
Use a ceramic crucible.
Check complete.`,
      },
      {
        type: "paragraph",
        text: "Notice the structure. The `if` line ends with a **colon**. The lines that belong to the `if` are **indented** by four spaces; together they form a **block**. When the condition is `False`, Python skips the whole block and continues with the first line that isn't indented. Change `temperature` to `900` and run the example to see the difference.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Indentation matters in Python",
        text: "Many languages use brackets to group statements. Python uses indentation instead, so it is part of the syntax, not just style. Use four spaces per level (the editor does this when you press `Tab`). A missing or inconsistent indent causes an `IndentationError`, or a block that silently does the wrong thing.",
      },
      { type: "heading", text: "else and elif" },
      {
        type: "paragraph",
        text: "`else` gives a block to run when the `if` condition is `False`. `elif` (short for *else if*) adds more conditions to check in order. Python runs the block for the **first** condition that is `True` and skips the rest; if none are true, it runs the `else` block (if there is one).",
      },
      {
        type: "code",
        code: `ph = 8.3

if ph < 7:
    print("acidic")
elif ph == 7:
    print("neutral")
else:
    print("basic")`,
        output: "basic",
      },
      {
        type: "paragraph",
        text: "Because only the first true branch runs, the order of `elif` conditions matters. Put the most specific or most restrictive tests first.",
      },
      {
        type: "contextExample",
        title: "Classifying a value",
        variants: {
          "materials-science": {
            intro: "A material's band gap determines how it conducts electricity: metals have no gap, semiconductors a small one, and insulators a large one.",
            code: `material = "Gallium arsenide"
band_gap = 1.42   # eV

if band_gap == 0:
    category = "conductor"
elif band_gap < 3:
    category = "semiconductor"
else:
    category = "insulator"

print(f"{material} is a {category}.")`,
            output: "Gallium arsenide is a semiconductor.",
          },
          chemistry: {
            intro: "A solution is classified from its pH.",
            code: `ph = 3.2

if ph < 7:
    nature = "acidic"
elif ph > 7:
    nature = "basic"
else:
    nature = "neutral"

print(f"pH {ph}: the solution is {nature}.")`,
            output: "pH 3.2: the solution is acidic.",
          },
          physics: {
            intro: "Water's state at atmospheric pressure depends on its temperature.",
            code: `temperature = -5   # °C

if temperature <= 0:
    state = "solid (ice)"
elif temperature < 100:
    state = "liquid"
else:
    state = "gas (steam)"

print(f"At {temperature} °C water is {state}.")`,
            output: "At -5 °C water is solid (ice).",
          },
          biology: {
            intro: "Body temperature is checked against normal limits.",
            code: `body_temperature = 38.4   # °C

if body_temperature >= 38.0:
    status = "fever"
elif body_temperature < 35.0:
    status = "hypothermia"
else:
    status = "normal"

print(f"{body_temperature} °C: {status}")`,
            output: "38.4 °C: fever",
          },
          biochemistry: {
            intro: "An enzyme only works well close to its optimum pH. Here we flag whether a buffer is suitable.",
            code: `optimum_ph = 7.4
buffer_ph = 6.1

difference = abs(buffer_ph - optimum_ph)
if difference <= 0.5:
    print("Buffer is suitable.")
elif difference <= 1.5:
    print("Enzyme activity will be reduced.")
else:
    print("Enzyme is likely to be inactive.")`,
            output: "Enzyme activity will be reduced.",
          },
          "general-programming": {
            intro: "An exam score is turned into a grade.",
            code: `score = 72

if score >= 70:
    grade = "distinction"
elif score >= 50:
    grade = "pass"
else:
    grade = "fail"

print(f"A score of {score} is a {grade}.")`,
            output: "A score of 72 is a distinction.",
            explanation: "The conditions are checked from the top. A score of 72 also meets `score >= 50`, but Python stops at the first condition that is true.",
          },
        },
      },
      { type: "heading", text: "Combining conditions" },
      {
        type: "paragraph",
        text: "Use `and`, `or` and `not` to build more complex conditions, as you saw in the Operators lesson. Python also lets you chain comparisons the way you would write them in maths: `0 < x < 10` means *x is between 0 and 10*.",
      },
      {
        type: "code",
        code: `density = 4.51          # g/cm³, titanium
melting_point = 1668    # °C

if density < 5 and melting_point > 1500:
    print("Light and heat resistant: a candidate for aerospace parts.")

if not (2.0 <= density <= 20.0):
    print("Check the density: it is outside the usual range for metals.")`,
        output: "Light and heat resistant: a candidate for aerospace parts.",
      },
      { type: "subheading", text: "Conditions with collections" },
      {
        type: "paragraph",
        text: "The `in` operator from the Data Structures module makes natural conditions. An empty list, string, dictionary or set also counts as `False` in a condition, and a non-empty one as `True`, so `if measurements:` means *if there are any measurements*.",
      },
      {
        type: "code",
        code: `alloy = ["Fe", "Cr", "Ni", "Mo"]
measurements = []

if "Mo" in alloy:
    print("Contains molybdenum: improved corrosion resistance.")

if measurements:
    print("Mean:", sum(measurements) / len(measurements))
else:
    print("No measurements recorded yet.")`,
        output: `Contains molybdenum: improved corrosion resistance.
No measurements recorded yet.`,
      },
      { type: "heading", text: "Nested conditions" },
      {
        type: "paragraph",
        text: "An `if` statement can sit inside another one. The inner block is indented one more level. Nesting is useful when the second question only makes sense after the first has been answered, but deep nesting is hard to read, so combine conditions with `and` where you can.",
      },
      {
        type: "code",
        code: `is_metal = True
density = 19.3   # g/cm³

if is_metal:
    if density > 10:
        print("Heavy metal")
    else:
        print("Light or medium metal")
else:
    print("Not a metal")`,
        output: "Heavy metal",
      },
      { type: "heading", text: "Checking input" },
      {
        type: "paragraph",
        text: "Conditions are how a program protects itself from bad data. Before calculating, check that the values make physical sense and report a clear message if they don't.",
      },
      {
        type: "code",
        code: `mass = float(input("Mass (g): "))
volume = float(input("Volume (cm³): "))

if volume <= 0:
    print("Volume must be greater than zero.")
elif mass < 0:
    print("Mass can't be negative.")
else:
    print(f"Density: {mass / volume:.2f} g/cm³")`,
        stdin: "10\n0",
      },
      {
        type: "explanation",
        text: "With a volume of 0 the program prints a message instead of crashing with a `ZeroDivisionError`. Try it with other values in the Program input box.",
      },
    ],
    exercises: [
      {
        id: "m4l1-q1",
        question: "What does this code print?",
        code: `x = 5
if x > 10:
    print("large")
elif x > 3:
    print("medium")
else:
    print("small")`,
        options: [
          { id: "a", text: "large" },
          { id: "b", text: "medium" },
          { id: "c", text: "medium and small" },
        ],
        correctOptionId: "b",
        explanation: "`x > 10` is false, so Python checks `x > 3`, which is true. It runs that block and skips the rest.",
      },
      {
        id: "m4l1-q2",
        question: "How does Python know which lines belong to an `if` block?",
        options: [
          { id: "a", text: "They are inside curly braces" },
          { id: "b", text: "They are indented under the `if` line" },
          { id: "c", text: "They end with a semicolon" },
        ],
        correctOptionId: "b",
        explanation: "Python uses indentation to group statements into blocks. The block ends at the first line that returns to the previous indentation level.",
      },
      {
        id: "m4l1-q3",
        question: "When is `a > 0 or b > 0` true?",
        options: [
          { id: "a", text: "Only when both `a` and `b` are positive" },
          { id: "b", text: "When at least one of `a` and `b` is positive" },
          { id: "c", text: "Only when neither is positive" },
        ],
        correctOptionId: "b",
        explanation: "`or` is true when at least one side is true.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "for-loops",
    description: "Repeat code for every item in a collection with `for`, count with `range()`, build running totals, and loop over dictionaries.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Loop over the items of a list, string or tuple",
      "Use `range()` to repeat code a set number of times",
      "Build totals and new lists inside a loop",
      "Loop over a dictionary with `items()` and number items with `enumerate()`",
    ],
    blocks: [
      { type: "heading", text: "Why loops?" },
      {
        type: "paragraph",
        text: "Suppose you need to convert 200 temperatures to kelvin. Writing 200 `print()` lines is impractical, and the program would break as soon as the data changed. A **loop** runs the same block of code repeatedly. A `for` loop runs its block **once for each item** in a collection.",
      },
      { type: "heading", text: "Looping over items" },
      {
        type: "paragraph",
        text: "The line `for element in elements:` reads naturally: *for each element in the list of elements, do the following*. Each time round the loop, the **loop variable** (`element`) holds the next item. The indented block is the **body** of the loop. When the items run out, Python continues after the loop.",
      },
      {
        type: "code",
        code: `elements = ["Fe", "Ni", "Cr"]
for element in elements:
    print("Element:", element)
print("Done")`,
        output: `Element: Fe
Element: Ni
Element: Cr
Done`,
      },
      {
        type: "paragraph",
        text: "You can choose any name for the loop variable. A good habit is to use the singular of the collection's name: `for sample in samples`, `for temperature in temperatures`. A `for` loop works with any collection, including strings (one character at a time) and tuples.",
      },
      {
        type: "contextExample",
        title: "Applying a calculation to every value",
        variants: {
          "materials-science": {
            intro: "Convert a heat-treatment schedule from °C to K.",
            code: `schedule_c = [20, 450, 850, 1050]

for temperature in schedule_c:
    kelvin = temperature + 273.15
    print(f"{temperature:>5} °C = {kelvin:.2f} K")`,
            output: `   20 °C = 293.15 K
  450 °C = 723.15 K
  850 °C = 1123.15 K
 1050 °C = 1323.15 K`,
          },
          chemistry: {
            intro: "Convert masses of sodium chloride to moles.",
            code: `molar_mass = 58.44   # g/mol, NaCl
masses = [5.0, 11.7, 29.2]

for mass in masses:
    print(f"{mass} g = {mass / molar_mass:.3f} mol")`,
            output: `5.0 g = 0.086 mol
11.7 g = 0.200 mol
29.2 g = 0.500 mol`,
          },
          physics: {
            intro: "Calculate the weight of several masses on Earth (g = 9.81 m/s²).",
            code: `masses = [0.5, 2.0, 10.0]   # kg

for mass in masses:
    print(f"{mass} kg weighs {mass * 9.81:.2f} N")`,
            output: `0.5 kg weighs 4.91 N
2.0 kg weighs 19.62 N
10.0 kg weighs 98.10 N`,
          },
          biology: {
            intro: "Report the length of each DNA fragment.",
            code: `fragments = ["ATGC", "GGCATTA", "TTAG"]

for fragment in fragments:
    print(f"{fragment}: {len(fragment)} bp")`,
            output: `ATGC: 4 bp
GGCATTA: 7 bp
TTAG: 4 bp`,
          },
          biochemistry: {
            intro: "Calculate the Michaelis–Menten rate at several substrate concentrations.",
            code: `v_max, k_m = 120.0, 2.5   # µmol/min, mM

for substrate in [0.5, 2.5, 10.0]:
    rate = v_max * substrate / (k_m + substrate)
    print(f"[S] = {substrate} mM: v = {rate:.1f} µmol/min")`,
            output: `[S] = 0.5 mM: v = 20.0 µmol/min
[S] = 2.5 mM: v = 60.0 µmol/min
[S] = 10.0 mM: v = 96.0 µmol/min`,
          },
          "general-programming": {
            intro: "Add 20% sales tax to every price in a list.",
            code: `prices = [4.99, 12.50, 0.89, 25.00]

for price in prices:
    with_tax = price * 1.2
    print(f"{price:>6.2f} -> {with_tax:>6.2f} with 20% tax")`,
            output: `  4.99 ->   5.99 with 20% tax
 12.50 ->  15.00 with 20% tax
  0.89 ->   1.07 with 20% tax
 25.00 ->  30.00 with 20% tax`,
            explanation: "`>6.2f` right-aligns each number in a space six characters wide with two decimal places, so the columns line up.",
          },
        },
      },
      { type: "heading", text: "Counting with range()" },
      {
        type: "paragraph",
        text: "Sometimes you want to repeat something a number of times rather than loop over existing data. `range()` produces a sequence of whole numbers for a `for` loop to step through. Like slicing, the stop value is **never** included.",
      },
      {
        type: "table",
        columns: ["Call", "Numbers produced"],
        rows: [
          ["`range(5)`", "0, 1, 2, 3, 4"],
          ["`range(1, 6)`", "1, 2, 3, 4, 5"],
          ["`range(0, 1000, 250)`", "0, 250, 500, 750"],
          ["`range(10, 0, -3)`", "10, 7, 4, 1"],
        ],
      },
      {
        type: "code",
        code: `# Temperatures from 300 K to 600 K in steps of 100 K
for temperature in range(300, 601, 100):
    print(temperature, "K")`,
        output: `300 K
400 K
500 K
600 K`,
      },
      { type: "heading", text: "Running totals" },
      {
        type: "paragraph",
        text: "A very common pattern is the **accumulator**: create a variable before the loop, then update it each time round. This is how you add up values, count items that meet a condition, or find a maximum yourself.",
      },
      {
        type: "code",
        code: `masses = [12.5, 8.3, 15.2, 9.0]   # g

total = 0
for mass in masses:
    total += mass

print(f"Total mass: {total} g")
print(f"Mean mass: {total / len(masses):.2f} g")`,
        output: `Total mass: 45.0 g
Mean mass: 11.25 g`,
      },
      { type: "subheading", text: "Loops with conditions" },
      {
        type: "paragraph",
        text: "Combining a loop with `if` lets you act only on certain items. Here the loop counts how many readings fall outside a tolerance and builds a new list of the ones that pass.",
      },
      {
        type: "code",
        code: `readings = [8.94, 8.97, 9.31, 8.95, 8.60, 8.96]   # g/cm³
target, tolerance = 8.96, 0.05

accepted = []
rejected_count = 0
for reading in readings:
    if abs(reading - target) <= tolerance:
        accepted.append(reading)
    else:
        rejected_count += 1

print("Accepted:", accepted)
print("Rejected:", rejected_count)`,
        output: `Accepted: [8.94, 8.97, 8.95, 8.96]
Rejected: 2`,
      },
      { type: "heading", text: "Looping over dictionaries" },
      {
        type: "paragraph",
        text: "A `for` loop over a dictionary gives its **keys**. To get each key together with its value, loop over `items()` and unpack each pair into two variables, just as you unpacked tuples.",
      },
      {
        type: "code",
        code: `densities = {"aluminium": 2.70, "titanium": 4.51, "iron": 7.87, "copper": 8.96}

for metal, density in densities.items():
    print(f"{metal:<10} {density:.2f} g/cm³")`,
        output: `aluminium  2.70 g/cm³
titanium   4.51 g/cm³
iron       7.87 g/cm³
copper     8.96 g/cm³`,
      },
      {
        type: "paragraph",
        text: "The same unpacking works for any list of tuples, which is a common way to store small tables of records.",
      },
      {
        type: "code",
        code: `atomic_masses = {"H": 1.008, "C": 12.011, "O": 15.999}
ethanol = [("C", 2), ("H", 6), ("O", 1)]   # (element, count)

molar_mass = 0
for element, count in ethanol:
    molar_mass += atomic_masses[element] * count

print(f"Molar mass of ethanol: {molar_mass:.2f} g/mol")`,
        output: "Molar mass of ethanol: 46.07 g/mol",
      },
      { type: "heading", text: "Numbering items with enumerate()" },
      {
        type: "paragraph",
        text: "When you need each item's position as well as its value, wrap the collection in `enumerate()`. It produces `(index, item)` pairs. Pass `start=1` to number from 1 for display.",
      },
      {
        type: "code",
        code: `samples = ["Cu-01", "Cu-02", "Cu-03"]
for number, sample in enumerate(samples, start=1):
    print(f"{number}. {sample}")`,
        output: `1. Cu-01
2. Cu-02
3. Cu-03`,
      },
      {
        type: "callout",
        tone: "tip",
        title: "List comprehensions",
        text: "In scientific code you will often see a compact way to build a list from a loop: `kelvin = [t + 273.15 for t in celsius]`. This is a **list comprehension**. It does the same as creating an empty list and appending inside a `for` loop. Use whichever you find clearer.",
      },
    ],
    exercises: [
      {
        id: "m4l2-q1",
        question: "Which numbers does `range(2, 8, 2)` produce?",
        options: [
          { id: "a", text: "2, 4, 6, 8" },
          { id: "b", text: "2, 4, 6" },
          { id: "c", text: "2, 3, 4, 5, 6, 7" },
        ],
        correctOptionId: "b",
        explanation: "`range` starts at 2, steps by 2, and stops before 8.",
      },
      {
        id: "m4l2-q2",
        question: "What does this code print?",
        code: `total = 0
for n in [3, 4, 5]:
    total += n
print(total)`,
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "12" },
          { id: "c", text: "3, 7 and 12 on separate lines" },
        ],
        correctOptionId: "b",
        explanation: "`total` accumulates 3 + 4 + 5. The `print()` is not indented, so it runs once after the loop.",
      },
      {
        id: "m4l2-q3",
        question: "How do you loop over both the keys and the values of a dictionary `d`?",
        options: [
          { id: "a", text: "`for key, value in d:`" },
          { id: "b", text: "`for key, value in d.items():`" },
          { id: "c", text: "`for key, value in d.keys():`" },
        ],
        correctOptionId: "b",
        explanation: "`items()` gives `(key, value)` pairs that unpack into two variables. Looping over `d` directly only gives the keys.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "while-loops",
    description: "Repeat code until a condition changes with `while`, avoid infinite loops, and control loops with `break` and `continue`.",
    estimatedMinutes: 25,
    learningObjectives: [
      "Write a `while` loop that stops when its condition becomes false",
      "Recognise and avoid infinite loops",
      "Use `break` and `continue` to control a loop",
      "Choose between a `for` loop and a `while` loop",
    ],
    blocks: [
      { type: "heading", text: "The while loop" },
      {
        type: "paragraph",
        text: "A `for` loop repeats once per item, so you know in advance how many times it will run. Sometimes you don't: you want to keep going **until something happens**, such as a value converging or a sample cooling below a threshold. A `while` loop repeats its block as long as its condition is `True`.",
      },
      {
        type: "paragraph",
        text: "Python checks the condition **before** each repetition. If it is `True`, the block runs and Python checks again; once it is `False`, the loop ends and the program continues after it. If the condition is `False` from the start, the block never runs at all.",
      },
      {
        type: "code",
        code: `temperature = 900.0   # °C
minutes = 0

while temperature > 100:
    temperature = temperature * 0.8   # loses 20% each minute
    minutes += 1

print(f"Below 100 °C after {minutes} minutes ({temperature:.1f} °C)")`,
        output: "Below 100 °C after 10 minutes (96.6 °C)",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Infinite loops",
        text: "Something inside the loop must eventually make the condition `False`. If you forget to update `temperature` above, the condition stays `True` forever and the program never ends. In SPASCLE's editor, a program that runs for more than 10 seconds is stopped automatically, so you can experiment safely.",
      },
      {
        type: "contextExample",
        title: "Repeating until a target is reached",
        variants: {
          "materials-science": {
            intro: "Grain growth: an average grain size grows by 15% per hour of annealing. How long until it exceeds 50 µm?",
            code: `grain_size = 12.0   # µm
hours = 0

while grain_size <= 50:
    grain_size *= 1.15
    hours += 1

print(f"{hours} hours of annealing gives {grain_size:.1f} µm grains")`,
            output: "11 hours of annealing gives 55.8 µm grains",
          },
          chemistry: {
            intro: "A first-order reaction loses half its reactant every half-life. How many half-lives until less than 1% remains?",
            code: `fraction = 1.0
half_lives = 0

while fraction >= 0.01:
    fraction /= 2
    half_lives += 1

print(f"After {half_lives} half-lives, {fraction:.2%} remains")`,
            output: "After 7 half-lives, 0.78% remains",
          },
          physics: {
            intro: "A ball dropped from 10 m bounces back to 70% of its previous height. How many bounces until it rises less than 1 m?",
            code: `height = 10.0   # m
bounces = 0

while height >= 1.0:
    height *= 0.7
    bounces += 1

print(f"{bounces} bounces; final height {height:.2f} m")`,
            output: "7 bounces; final height 0.82 m",
          },
          biology: {
            intro: "A bacterial population doubles every 20 minutes. How long until it passes one million cells?",
            code: `cells = 100
minutes = 0

while cells < 1_000_000:
    cells *= 2
    minutes += 20

print(f"{cells:,} cells after {minutes} minutes")`,
            output: "1,638,400 cells after 280 minutes",
            explanation: "Underscores in numbers like `1_000_000` are ignored by Python; they just make long numbers easier to read.",
          },
          biochemistry: {
            intro: "An enzyme converts 20% of the remaining substrate each minute. How long until less than 10 µM is left?",
            code: `substrate = 100.0   # µM
minutes = 0

while substrate >= 10:
    substrate *= 0.8   # the enzyme converts 20% each minute
    minutes += 1

print(f"After {minutes} minutes, {substrate:.1f} µM of substrate remains")`,
            output: "After 11 minutes, 8.6 µM of substrate remains",
          },
          "general-programming": {
            intro: "Saving 75 a month on top of 500 already saved, how many months until the total reaches 1000?",
            code: `savings = 500.0
target = 1000.0
months = 0

while savings < target:
    savings += 75
    months += 1

print(f"The target is reached after {months} months: {savings:.2f} saved")`,
            output: "The target is reached after 7 months: 1025.00 saved",
          },
        },
      },
      { type: "heading", text: "break: leaving a loop early" },
      {
        type: "paragraph",
        text: "`break` ends the loop immediately, even if the condition is still `True` (or, in a `for` loop, even if items remain). It is useful when you are searching for something and can stop as soon as you find it.",
      },
      {
        type: "code",
        code: `readings = [8.95, 8.97, 9.85, 8.96, 8.94]

for index, reading in enumerate(readings):
    if reading > 9.5:
        print(f"Faulty reading {reading} at position {index}; stopping.")
        break
    print("OK:", reading)`,
        output: `OK: 8.95
OK: 8.97
Faulty reading 9.85 at position 2; stopping.`,
      },
      {
        type: "paragraph",
        text: "A common pattern is `while True:` with a `break` inside. The loop would run forever on its own, so the `break` is the only way out. This suits iterative calculations that stop once the answer is accurate enough. The example below finds √2 with Newton's method, improving its guess until the change is tiny.",
      },
      {
        type: "code",
        code: `target = 2.0
guess = 1.0
steps = 0

while True:
    better_guess = (guess + target / guess) / 2
    steps += 1
    if abs(better_guess - guess) < 1e-10:
        break
    guess = better_guess

print(f"√{target} ≈ {better_guess:.10f} after {steps} steps")`,
        output: "√2.0 ≈ 1.4142135624 after 5 steps",
      },
      { type: "heading", text: "continue: skipping to the next repetition" },
      {
        type: "paragraph",
        text: "`continue` skips the rest of the current repetition and goes straight to the next one. Use it to ignore items you don't want to process, such as missing values.",
      },
      {
        type: "code",
        code: `readings = [293.1, None, 294.0, None, 292.7]

total = 0
count = 0
for reading in readings:
    if reading is None:
        continue          # skip missing values
    total += reading
    count += 1

print(f"Mean of {count} valid readings: {total / count:.2f} K")`,
        output: "Mean of 3 valid readings: 293.27 K",
      },
      {
        type: "explanation",
        text: "`None` is Python's value for *nothing*. It is often used to mark a missing measurement. Check for it with `is None`.",
      },
      { type: "heading", text: "for or while?" },
      {
        type: "table",
        columns: ["Use", "When"],
        rows: [
          ["`for`", "You are working through a collection, or you know how many repetitions you need. This is the most common case."],
          ["`while`", "You repeat until a condition changes and can't know in advance how many repetitions it will take: convergence, thresholds, waiting for valid input."],
        ],
      },
    ],
    exercises: [
      {
        id: "m4l3-q1",
        question: "How many times does this loop print?",
        code: `n = 3
while n > 0:
    print(n)
    n -= 1`,
        options: [
          { id: "a", text: "2" },
          { id: "b", text: "3" },
          { id: "c", text: "It never stops" },
        ],
        correctOptionId: "b",
        explanation: "It prints 3, 2 and 1. When `n` becomes 0 the condition is false and the loop ends.",
      },
      {
        id: "m4l3-q2",
        question: "Why does this loop never end?",
        code: `count = 0
while count < 5:
    print(count)`,
        options: [
          { id: "a", text: "`count` is never changed inside the loop, so the condition stays true" },
          { id: "b", text: "`while` loops always run forever" },
          { id: "c", text: "`print()` resets `count`" },
        ],
        correctOptionId: "a",
        explanation: "The loop needs something like `count += 1` inside it so the condition eventually becomes false.",
      },
      {
        id: "m4l3-q3",
        question: "What does `continue` do inside a loop?",
        options: [
          { id: "a", text: "Ends the loop completely" },
          { id: "b", text: "Skips the rest of the current repetition and moves on to the next one" },
          { id: "c", text: "Restarts the loop from the first item" },
        ],
        correctOptionId: "b",
        explanation: "`continue` jumps to the next repetition; `break` is the one that ends the loop.",
      },
    ],
  },
];
