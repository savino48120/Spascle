import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "control-flow";

export const MODULE_3_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "conditional-statements",
    description: "Make decisions in code with `if`, `elif` and `else`, and combine conditions with `and`, `or` and `not`.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Write `if`, `elif` and `else` blocks",
      "Use indentation to group statements",
      "Combine conditions with `and`, `or` and `not`",
    ],
    blocks: [
      { type: "heading", text: "The if statement" },
      {
        type: "paragraph",
        text: "An `if` statement runs a block of code only when a condition is `True`. The block is the **indented** lines after the colon. Python uses indentation (four spaces is standard) instead of brackets to group code.",
      },
      {
        type: "code",
        code: `temperature = 120
if temperature > 100:
    print("Water is boiling")
print("Check complete")`,
        output: `Water is boiling
Check complete`,
      },
      {
        type: "explanation",
        text: "The last line is not indented, so it always runs. Change `temperature` to `80` and run it again.",
      },
      { type: "heading", text: "elif and else" },
      {
        type: "paragraph",
        text: "Add `elif` (else if) to test more conditions and `else` to handle every other case. Python checks them from top to bottom and runs only the first block whose condition is true.",
      },
      {
        type: "contextExample",
        title: "Classifying a measurement",
        variants: {
          "materials-science": {
            intro: "Materials are often classified by their electronic band gap.",
            code: `band_gap = 1.1  # eV (silicon)

if band_gap == 0:
    category = "metal"
elif band_gap < 3:
    category = "semiconductor"
else:
    category = "insulator"

print(f"A band gap of {band_gap} eV means a {category}")`,
            output: "A band gap of 1.1 eV means a semiconductor",
          },
          chemistry: {
            intro: "A solution is acidic, neutral or basic depending on its pH.",
            code: `ph = 8.3

if ph < 7:
    category = "acidic"
elif ph == 7:
    category = "neutral"
else:
    category = "basic"

print(f"A pH of {ph} is {category}")`,
            output: "A pH of 8.3 is basic",
          },
          physics: {
            intro: "Water's phase at normal pressure depends on its temperature.",
            code: `temperature = -5  # °C

if temperature <= 0:
    phase = "solid"
elif temperature < 100:
    phase = "liquid"
else:
    phase = "gas"

print(f"At {temperature} °C, water is a {phase}")`,
            output: "At -5 °C, water is a solid",
          },
          biology: {
            intro: "Body temperature readings can flag a fever.",
            code: `body_temp = 38.4  # °C

if body_temp < 35:
    status = "hypothermia"
elif body_temp < 38:
    status = "normal"
else:
    status = "fever"

print(f"{body_temp} °C: {status}")`,
            output: "38.4 °C: fever",
          },
        },
      },
      { type: "heading", text: "Combining conditions" },
      {
        type: "paragraph",
        text: "`and` is true only when both sides are true, `or` is true when at least one side is true, and `not` flips a condition.",
      },
      {
        type: "code",
        code: `density = 2.7
is_magnetic = False

if density < 5 and not is_magnetic:
    print("Light, non-magnetic material")`,
        output: "Light, non-magnetic material",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Indentation errors",
        text: "Forgetting to indent after a colon, or mixing different amounts of indentation, causes an `IndentationError`. The editor indents automatically when you press Enter after a colon.",
      },
    ],
    exercises: [
      {
        id: "m3l1-q1",
        question: "What is printed?",
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
        explanation: "`5 > 10` is false, so Python checks `5 > 3`, which is true. It runs that block and skips the rest.",
      },
      {
        id: "m3l1-q2",
        question: "How does Python know which lines belong to an `if` block?",
        options: [
          { id: "a", text: "They are inside curly brackets" },
          { id: "b", text: "They end with a semicolon" },
          { id: "c", text: "They are indented under the `if` line" },
        ],
        correctOptionId: "c",
        explanation: "Python uses indentation to group statements. Every indented line after the colon belongs to the block.",
      },
      {
        id: "m3l1-q3",
        question: "What does `True and False` evaluate to?",
        options: [
          { id: "a", text: "False" },
          { id: "b", text: "True" },
          { id: "c", text: "An error" },
        ],
        correctOptionId: "a",
        explanation: "`and` needs both sides to be true. One side is false, so the result is `False`.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "for-loops",
    description: "Repeat code for every item in a sequence, and generate number sequences with `range()`.",
    estimatedMinutes: 20,
    learningObjectives: [
      "Loop over the items in a list or string",
      "Use `range()` to repeat code a set number of times",
      "Accumulate a running total inside a loop",
    ],
    blocks: [
      { type: "heading", text: "Looping over items" },
      {
        type: "paragraph",
        text: "A `for` loop runs its indented block once for each item in a sequence. Each time round, the loop variable holds the next item.",
      },
      {
        type: "code",
        code: `elements = ["Fe", "Ni", "Cr"]
for element in elements:
    print("Element:", element)`,
        output: `Element: Fe
Element: Ni
Element: Cr`,
      },
      { type: "heading", text: "range()" },
      {
        type: "paragraph",
        text: "`range(n)` produces the numbers `0` to `n - 1`. `range(start, stop, step)` gives more control; the stop value is never included.",
      },
      {
        type: "code",
        code: `for i in range(3):
    print(i)

for temperature in range(300, 600, 100):
    print(temperature, "K")`,
        output: `0
1
2
300 K
400 K
500 K`,
      },
      {
        type: "contextExample",
        title: "Repeating a calculation",
        variants: {
          "materials-science": {
            intro: "A metal bar expands as it heats. This loop calculates its length at several temperatures using ΔL = αL₀ΔT.",
            code: `alpha = 17e-6        # 1/K, thermal expansion of copper
initial_length = 1.0  # m at 20 °C

for temperature in range(20, 220, 50):
    change = alpha * initial_length * (temperature - 20)
    length = initial_length + change
    print(f"{temperature:>3} °C: {length:.5f} m")`,
            output: ` 20 °C: 1.00000 m
 70 °C: 1.00085 m
120 °C: 1.00170 m
170 °C: 1.00255 m`,
            explanation: "`:>3` right-aligns the temperature in three characters so the column lines up.",
          },
          chemistry: {
            intro: "Radioactive decay halves the amount of an isotope every half-life.",
            code: `amount = 100.0  # mg of iodine-131
half_life = 8   # days

for half_lives in range(5):
    days = half_lives * half_life
    print(f"Day {days:>2}: {amount:.2f} mg")
    amount = amount / 2`,
            output: `Day  0: 100.00 mg
Day  8: 50.00 mg
Day 16: 25.00 mg
Day 24: 12.50 mg
Day 32: 6.25 mg`,
          },
          physics: {
            intro: "This loop tracks the height of a ball dropped from 20 m every half second.",
            code: `g = 9.81
start_height = 20.0

for step in range(5):
    t = step * 0.5
    height = start_height - 0.5 * g * t ** 2
    print(f"t = {t:.1f} s, height = {height:.2f} m")`,
            output: `t = 0.0 s, height = 20.00 m
t = 0.5 s, height = 18.77 m
t = 1.0 s, height = 15.09 m
t = 1.5 s, height = 8.96 m
t = 2.0 s, height = 0.38 m`,
          },
          biology: {
            intro: "This loop counts each base in a DNA sequence.",
            code: `sequence = "GATTACA"
gc_count = 0

for base in sequence:
    if base == "G" or base == "C":
        gc_count = gc_count + 1

print(f"{gc_count} of {len(sequence)} bases are G or C")`,
            output: "2 of 7 bases are G or C",
          },
        },
      },
      { type: "heading", text: "Running totals" },
      {
        type: "paragraph",
        text: "A common pattern is to start a variable at zero before the loop and add to it on each pass. `total += x` is shorthand for `total = total + x`.",
      },
      {
        type: "code",
        code: `masses = [12.0, 1.0, 1.0, 1.0, 1.0]  # CH4
total = 0
for mass in masses:
    total += mass
print("Molar mass:", total)`,
        output: "Molar mass: 16.0",
      },
    ],
    exercises: [
      {
        id: "m3l2-q1",
        question: "Which numbers does `range(2, 6)` produce?",
        options: [
          { id: "a", text: "2, 3, 4, 5, 6" },
          { id: "b", text: "2, 3, 4, 5" },
          { id: "c", text: "3, 4, 5, 6" },
        ],
        correctOptionId: "b",
        explanation: "`range` starts at the first number and stops before the second, so 6 is not included.",
      },
      {
        id: "m3l2-q2",
        question: "How many times does this loop print?",
        code: `for i in range(4):
    print("measuring")`,
        options: [
          { id: "a", text: "3" },
          { id: "b", text: "5" },
          { id: "c", text: "4" },
        ],
        correctOptionId: "c",
        explanation: "`range(4)` gives 0, 1, 2 and 3: four numbers, so four prints.",
      },
      {
        id: "m3l2-q3",
        question: "What is printed?",
        code: `total = 0
for n in [2, 4, 6]:
    total += n
print(total)`,
        options: [
          { id: "a", text: "12" },
          { id: "b", text: "6" },
          { id: "c", text: "246" },
        ],
        correctOptionId: "a",
        explanation: "The loop adds each number to `total`: 0 + 2 + 4 + 6 = 12.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "while-loops",
    description: "Repeat code while a condition stays true, and stop loops early with `break`.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Write a `while` loop with a condition that eventually becomes false",
      "Choose between `for` and `while` loops",
      "Use `break` to leave a loop early",
    ],
    blocks: [
      { type: "heading", text: "The while loop" },
      {
        type: "paragraph",
        text: "A `while` loop repeats its block for as long as its condition is `True`. Use it when you do not know in advance how many repetitions you need.",
      },
      {
        type: "code",
        code: `count = 3
while count > 0:
    print(count)
    count -= 1
print("Lift off!")`,
        output: `3
2
1
Lift off!`,
      },
      {
        type: "contextExample",
        title: "Looping until a target is reached",
        variants: {
          "materials-science": {
            intro: "A hot sample cools by 10% of its temperature above room temperature every minute. How long until it is below 30 °C?",
            code: `temperature = 200.0  # °C
room = 20.0
minutes = 0

while temperature >= 30:
    temperature = temperature - 0.1 * (temperature - room)
    minutes += 1

print(f"Below 30 °C after {minutes} minutes ({temperature:.1f} °C)")`,
            output: "Below 30 °C after 28 minutes (29.4 °C)",
          },
          chemistry: {
            intro: "How many half-lives until less than 1% of a radioactive sample remains?",
            code: `remaining = 100.0  # percent
half_lives = 0

while remaining >= 1:
    remaining = remaining / 2
    half_lives += 1

print(f"{half_lives} half-lives leave {remaining:.2f}%")`,
            output: "7 half-lives leave 0.78%",
          },
          biology: {
            intro: "A bacterial population doubles every 20 minutes. How long until it passes one million cells?",
            code: `population = 1000
minutes = 0

while population < 1_000_000:
    population *= 2
    minutes += 20

print(f"{population} cells after {minutes} minutes")`,
            output: "1024000 cells after 200 minutes",
            explanation: "Underscores in `1_000_000` make large numbers easier to read. Python ignores them.",
          },
        },
      },
      { type: "heading", text: "break" },
      {
        type: "paragraph",
        text: "`break` exits the loop immediately, even if the condition is still true. It is useful for stopping as soon as you find what you need.",
      },
      {
        type: "code",
        code: `readings = [21.5, 22.0, 85.3, 22.1]
for reading in readings:
    if reading > 50:
        print("Faulty sensor reading:", reading)
        break
    print("OK:", reading)`,
        output: `OK: 21.5
OK: 22.0
Faulty sensor reading: 85.3`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "Infinite loops",
        text: "If the condition never becomes false, the loop runs forever. Remove `count -= 1` from the first example and run it: SPASCLE stops programs that run for more than 10 seconds.",
      },
    ],
    exercises: [
      {
        id: "m3l3-q1",
        question: "What is printed?",
        code: `n = 1
while n < 20:
    n = n * 3
print(n)`,
        options: [
          { id: "a", text: "9" },
          { id: "b", text: "27" },
          { id: "c", text: "20" },
        ],
        correctOptionId: "b",
        explanation: "`n` goes 1 → 3 → 9 → 27. At 27 the condition `n < 20` is false, so the loop stops and prints 27.",
      },
      {
        id: "m3l3-q2",
        question: "When is a `while` loop a better choice than a `for` loop?",
        options: [
          { id: "a", text: "When you need to loop over every item in a list" },
          { id: "b", text: "When you know exactly how many times to repeat" },
          { id: "c", text: "When you repeat until a condition changes, without knowing how many times" },
        ],
        correctOptionId: "c",
        explanation: "`for` loops suit known sequences. `while` loops suit repeating until something happens, such as reaching a target value.",
      },
      {
        id: "m3l3-q3",
        question: "Why does this loop never stop?",
        code: `x = 0
while x < 5:
    print(x)`,
        options: [
          { id: "a", text: "`x` never changes, so `x < 5` is always true" },
          { id: "b", text: "`print` cannot be used in a loop" },
          { id: "c", text: "`while` loops always run forever" },
        ],
        correctOptionId: "a",
        explanation: "The loop never updates `x`. Adding `x += 1` inside the loop would make it stop after printing 0 to 4.",
      },
    ],
  },
];
