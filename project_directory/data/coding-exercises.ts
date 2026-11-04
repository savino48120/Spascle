import type { CodingExercise } from "@/types/lesson";

/**
 * Hands-on coding exercises, one per written lesson. Each only uses ideas
 * taught up to and including its lesson. Static until the content API exists.
 */
export const CODING_EXERCISES: CodingExercise[] = [
  {
    moduleSlug: "introduction-to-python",
    lessonSlug: "introduction-to-programming",
    title: "Use Python as a calculator",
    problem: [
      "The melting point of iron is 1538 °C. Scientists often need temperatures in kelvin, which you get by adding `273.15` to the Celsius value.",
      "You also want the mass of 3 moles of carbon. One mole of carbon has a mass of `12.011` grams.",
    ],
    requirements: [
      "Print the melting point of iron in kelvin.",
      "Print the mass of 3 moles of carbon, in grams.",
      "Let Python do the arithmetic: don't type the answers yourself.",
    ],
    starterCode: `# 1. Melting point of iron in kelvin

# 2. Mass of 3 moles of carbon, in grams
`,
    expectedOutput: `1811.15
36.033`,
    hints: [
      "Put a calculation inside `print()` and Python prints the result, for example `print(2 + 3)`.",
      "Kelvin = Celsius + 273.15, so the first calculation is `1538 + 273.15`.",
      "Use `*` to multiply: `print(3 * 12.011)`.",
    ],
    solution: `# 1. Melting point of iron in kelvin
print(1538 + 273.15)

# 2. Mass of 3 moles of carbon, in grams
print(3 * 12.011)`,
  },
  {
    moduleSlug: "introduction-to-python",
    lessonSlug: "setting-up-your-python-environment",
    title: "Check that Python is ready",
    problem: [
      "Before starting a new project it's good practice to check that Python runs. Write a short program that confirms Python is working and does one quick calculation.",
      "A face-centred cubic (FCC) unit cell contains 4 atoms. Work out how many atoms there are in 5 unit cells.",
    ],
    requirements: [
      "Print the exact message `Python is ready!`",
      "On the next line, print `Atoms in 5 FCC unit cells:` followed by the result of the calculation.",
    ],
    starterCode: `# Confirm that Python is working

# Atoms in 5 FCC unit cells
`,
    expectedOutput: `Python is ready!
Atoms in 5 FCC unit cells: 20`,
    hints: [
      "Text goes inside quotes: `print(\"Python is ready!\")`.",
      "`print()` can show several things separated by commas. It adds a space between them.",
      "`print(\"Atoms in 5 FCC unit cells:\", 5 * 4)`",
    ],
    solution: `# Confirm that Python is working
print("Python is ready!")

# Atoms in 5 FCC unit cells
print("Atoms in 5 FCC unit cells:", 5 * 4)`,
  },
  {
    moduleSlug: "introduction-to-python",
    lessonSlug: "your-first-python-program",
    title: "Print a sample label",
    problem: [
      "Every specimen in a materials lab needs a label. Write a program that prints the label for a copper sample, one detail per line.",
      "Add a comment at the top of your program explaining what it does.",
    ],
    requirements: [
      "Start the program with a comment.",
      "Print `Sample: Cu-01` on the first line.",
      "Print `Material: Copper` on the second line.",
      "Print `Crystal structure: FCC` on the third line.",
    ],
    starterCode: `# Write a comment here, then print the three lines of the label
`,
    expectedOutput: `Sample: Cu-01
Material: Copper
Crystal structure: FCC`,
    hints: [
      "A comment starts with `#`. Python ignores everything after it on that line.",
      "Each `print()` call starts a new line, so you need three of them.",
      "Check the spelling, capital letters and the space after each colon: the output has to match exactly.",
    ],
    solution: `# Sample label for a copper specimen
print("Sample: Cu-01")
print("Material: Copper")
print("Crystal structure: FCC")`,
  },
  {
    moduleSlug: "python-fundamentals",
    lessonSlug: "variables-and-data-types",
    title: "Density of an aluminium block",
    problem: [
      "An aluminium block has a mass of `27.0` grams and a volume of `10.0` cm³. Density is mass divided by volume.",
      "Store the values in variables, calculate the density, and print it. Then print the data type of the result.",
    ],
    requirements: [
      "Create variables named `mass`, `volume` and `density`.",
      "Print `Density: 2.70 g/cm³`, using an f-string with 2 decimal places.",
      "Print the type of `density`.",
    ],
    starterCode: `mass = 27.0     # grams
volume = 10.0   # cm³

# Calculate the density, then print it and its type
`,
    expectedOutput: `Density: 2.70 g/cm³
<class 'float'>`,
    hints: [
      "Divide with `/`: `density = mass / volume`.",
      "In an f-string, `{density:.2f}` shows the value with 2 decimal places.",
      "`type(density)` gives the data type. Wrap it in `print()` to see it.",
    ],
    solution: `mass = 27.0     # grams
volume = 10.0   # cm³

density = mass / volume
print(f"Density: {density:.2f} g/cm³")
print(type(density))`,
  },
  {
    moduleSlug: "python-fundamentals",
    lessonSlug: "operators-and-expressions",
    title: "Convert a lab temperature",
    problem: [
      "The lab is at 25 °C. Convert this temperature to kelvin and to Fahrenheit, then check whether it is above 300 K.",
      "Kelvin = °C + 273.15. Fahrenheit = °C × 9 / 5 + 32.",
    ],
    requirements: [
      "Print `Kelvin: 298.15` (2 decimal places).",
      "Print `Fahrenheit: 77.0` (1 decimal place).",
      "Print the result of comparing the kelvin value with `300` using `>`.",
    ],
    starterCode: `temperature_c = 25

# Convert to kelvin and Fahrenheit, then compare with 300 K
`,
    expectedOutput: `Kelvin: 298.15
Fahrenheit: 77.0
False`,
    hints: [
      "Store each result in its own variable, for example `kelvin = temperature_c + 273.15`.",
      "Multiplication and division happen before addition, so `temperature_c * 9 / 5 + 32` needs no brackets.",
      "A comparison such as `kelvin > 300` gives `True` or `False`. Print it directly.",
    ],
    solution: `temperature_c = 25

kelvin = temperature_c + 273.15
fahrenheit = temperature_c * 9 / 5 + 32

print(f"Kelvin: {kelvin:.2f}")
print(f"Fahrenheit: {fahrenheit:.1f}")
print(kelvin > 300)`,
  },
  {
    moduleSlug: "python-fundamentals",
    lessonSlug: "strings",
    title: "Clean up a material name",
    problem: [
      "Material names copied from instrument files often have extra spaces and inconsistent capitals. The name below came out as `\"  silicon carbide  \"`.",
      "Tidy it up, then print some information about the cleaned name.",
    ],
    requirements: [
      "Remove the spaces at both ends and capitalise each word, giving `Silicon Carbide`.",
      "Print the cleaned name.",
      "Print `First letter: S` using indexing.",
      "Print `Length: 15` using `len()`.",
    ],
    starterCode: `raw_name = "  silicon carbide  "

# Clean the name, then print the three lines
`,
    expectedOutput: `Silicon Carbide
First letter: S
Length: 15`,
    hints: [
      "`.strip()` removes spaces from both ends and `.title()` capitalises each word. You can chain them.",
      "The first character of a string is at index `0`, for example `material_name[0]`.",
      "`material_name = raw_name.strip().title()`, then use f-strings for the last two lines.",
    ],
    solution: `raw_name = "  silicon carbide  "

material_name = raw_name.strip().title()
print(material_name)
print(f"First letter: {material_name[0]}")
print(f"Length: {len(material_name)}")`,
  },
  {
    moduleSlug: "python-fundamentals",
    lessonSlug: "input-and-output",
    title: "Density calculator",
    problem: [
      "Write a program that asks for the mass and volume of a sample, then prints its density.",
      "The program input is already filled in with a gold sample: 19.32 g and 1.0 cm³. You can change it to test other samples.",
    ],
    requirements: [
      "Read the mass, then the volume, with `input()`.",
      "Convert both values to numbers with `float()`.",
      "Print `Density: 19.32 g/cm³` (2 decimal places) for the given input.",
    ],
    starterCode: `# Ask for the mass and volume, then print the density
`,
    stdin: `19.32
1.0`,
    expectedOutput: "Density: 19.32 g/cm³",
    hints: [
      "`input(\"Mass (g): \")` shows a prompt and returns what was typed, as a string.",
      "Strings can't be divided. Wrap the input in `float()` to get a number: `mass = float(input(\"Mass (g): \"))`.",
      "After reading both values, `density = mass / volume`, then print it with an f-string and `:.2f`.",
    ],
    solution: `mass = float(input("Mass (g): "))
volume = float(input("Volume (cm³): "))

density = mass / volume
print(f"Density: {density:.2f} g/cm³")`,
  },
  {
    moduleSlug: "control-flow",
    lessonSlug: "conditional-statements",
    title: "Classify a material by its band gap",
    problem: [
      "A material's band gap (in electronvolts, eV) tells you how it conducts electricity:",
      "A band gap of `0` means a **conductor**, less than `3` means a **semiconductor**, and `3` or more means an **insulator**.",
    ],
    requirements: [
      "Use `if`, `elif` and `else` to choose the category.",
      "For silicon (band gap `1.12`), print `Silicon is a semiconductor`.",
      "Your program should still work if you change `band_gap` to `0` or `5.5`.",
    ],
    starterCode: `material = "Silicon"
band_gap = 1.12  # eV

# Decide the category, then print the result
`,
    expectedOutput: "Silicon is a semiconductor",
    hints: [
      "Check the most specific case first: `if band_gap == 0:`.",
      "Store the answer in a variable such as `category` inside each branch, then print once at the end.",
      "`print(f\"{material} is a {category}\")`",
    ],
    solution: `material = "Silicon"
band_gap = 1.12  # eV

if band_gap == 0:
    category = "conductor"
elif band_gap < 3:
    category = "semiconductor"
else:
    category = "insulator"

print(f"{material} is a {category}")`,
  },
  {
    moduleSlug: "control-flow",
    lessonSlug: "for-loops",
    title: "Convert a series of temperatures",
    problem: [
      "A heat-treatment schedule uses three temperatures in °C: 25, 100 and 660 (the melting point of aluminium).",
      "Use a `for` loop to convert each one to kelvin.",
    ],
    requirements: [
      "Loop over `temperatures_c` instead of writing three separate `print()` calls.",
      "Print each line as `25 °C = 298.15 K`, with 2 decimal places for kelvin.",
    ],
    starterCode: `temperatures_c = [25, 100, 660]

# Loop over the temperatures and print each conversion
`,
    expectedOutput: `25 °C = 298.15 K
100 °C = 373.15 K
660 °C = 933.15 K`,
    hints: [
      "`for temperature in temperatures_c:` gives you one value each time round the loop.",
      "Indent the `print()` so it runs inside the loop.",
      "You can calculate inside an f-string: `{temperature + 273.15:.2f}`.",
    ],
    solution: `temperatures_c = [25, 100, 660]

for temperature in temperatures_c:
    print(f"{temperature} °C = {temperature + 273.15:.2f} K")`,
  },
  {
    moduleSlug: "control-flow",
    lessonSlug: "while-loops",
    title: "Radioactive decay",
    problem: [
      "A radioactive sample starts at 100 g. After each half-life, half of what remains decays.",
      "Use a `while` loop to keep halving the amount until less than 10 g is left, counting how many half-lives that takes.",
    ],
    requirements: [
      "Repeat while the amount is `10` g or more.",
      "Each time round, print the half-life number and the amount left, for example `Half-life 1: 50.0 g`.",
      "After the loop, print `Below 10 g after 4 half-lives`.",
    ],
    starterCode: `amount = 100.0  # grams
half_lives = 0

# Halve the amount until it falls below 10 g
`,
    expectedOutput: `Half-life 1: 50.0 g
Half-life 2: 25.0 g
Half-life 3: 12.5 g
Half-life 4: 6.25 g
Below 10 g after 4 half-lives`,
    hints: [
      "The loop condition is `while amount >= 10:`.",
      "Inside the loop, update both variables: `amount = amount / 2` and `half_lives = half_lives + 1`.",
      "The final `print()` is not indented, so it runs once after the loop ends.",
    ],
    solution: `amount = 100.0  # grams
half_lives = 0

while amount >= 10:
    amount = amount / 2
    half_lives = half_lives + 1
    print(f"Half-life {half_lives}: {amount} g")

print(f"Below 10 g after {half_lives} half-lives")`,
  },
  {
    moduleSlug: "data-structures",
    lessonSlug: "lists",
    title: "Summarise hardness measurements",
    problem: [
      "You measured the Vickers hardness of a steel sample four times: 150, 162, 158 and 149 HV. A fifth measurement just came in: 155 HV.",
      "Add it to the list, then summarise all the measurements. Python's built-in `len()`, `max()`, `min()` and `sum()` work on lists.",
    ],
    requirements: [
      "Add `155` to the end of the list with `append()`.",
      "Print the number of measurements, the highest and lowest values, and the average to 1 decimal place.",
    ],
    starterCode: `hardness = [150, 162, 158, 149]

# Add the new measurement, then print the summary
`,
    expectedOutput: `Measurements: 5
Highest: 162
Lowest: 149
Average: 154.8`,
    hints: [
      "`hardness.append(155)` adds the new value to the end.",
      "`max(hardness)` and `min(hardness)` give the highest and lowest values.",
      "The average is `sum(hardness) / len(hardness)`. Format it with `:.1f`.",
    ],
    solution: `hardness = [150, 162, 158, 149]
hardness.append(155)

print(f"Measurements: {len(hardness)}")
print(f"Highest: {max(hardness)}")
print(f"Lowest: {min(hardness)}")
print(f"Average: {sum(hardness) / len(hardness):.1f}")`,
  },
  {
    moduleSlug: "data-structures",
    lessonSlug: "tuples",
    title: "Molar mass of water",
    problem: [
      "Each element in a compound can be stored as a tuple of `(symbol, atomic mass, count)`. Water is two hydrogen atoms and one oxygen atom.",
      "Unpack both tuples into variables, print each element, then calculate the molar mass.",
    ],
    requirements: [
      "Unpack each tuple into three variables.",
      "Print each element as `H: 2 × 1.008`.",
      "Print `Molar mass of H2O: 18.015 g/mol` (3 decimal places).",
    ],
    starterCode: `hydrogen = ("H", 1.008, 2)
oxygen = ("O", 15.999, 1)

# Unpack the tuples, print each element, then the molar mass
`,
    expectedOutput: `H: 2 × 1.008
O: 1 × 15.999
Molar mass of H2O: 18.015 g/mol`,
    hints: [
      "Unpacking puts each item of a tuple into its own variable: `symbol_h, mass_h, count_h = hydrogen`.",
      "Print with an f-string: `print(f\"{symbol_h}: {count_h} × {mass_h}\")`.",
      "Molar mass = (mass × count) for hydrogen + (mass × count) for oxygen. Format it with `:.3f`.",
    ],
    solution: `hydrogen = ("H", 1.008, 2)
oxygen = ("O", 15.999, 1)

symbol_h, mass_h, count_h = hydrogen
symbol_o, mass_o, count_o = oxygen

print(f"{symbol_h}: {count_h} × {mass_h}")
print(f"{symbol_o}: {count_o} × {mass_o}")
molar_mass = mass_h * count_h + mass_o * count_o
print(f"Molar mass of H2O: {molar_mass:.3f} g/mol")`,
  },
  {
    moduleSlug: "data-structures",
    lessonSlug: "dictionaries",
    title: "Look up melting points",
    problem: [
      "The dictionary below maps metals to their melting points in °C. Add tungsten, which melts at 3422 °C.",
      "Then look values up by name, count the entries, and safely check for a metal that isn't recorded.",
    ],
    requirements: [
      "Add the key `\"Tungsten\"` with the value `3422`.",
      "Print `Tungsten: 3422 °C` by looking the value up in the dictionary.",
      "Print `Metals recorded: 4` using `len()`.",
      "Print `Gold: not recorded` using `get()` with a default value.",
    ],
    starterCode: `melting_points = {"Aluminium": 660, "Copper": 1085, "Iron": 1538}

# Add tungsten, then print the three lines
`,
    expectedOutput: `Tungsten: 3422 °C
Metals recorded: 4
Gold: not recorded`,
    hints: [
      "Add a new entry with square brackets: `melting_points[\"Tungsten\"] = 3422`.",
      "Look a value up the same way: `melting_points[\"Tungsten\"]`. Inside an f-string, use single quotes for the key.",
      "`melting_points.get(\"Gold\", \"not recorded\")` returns the default instead of raising a `KeyError`.",
    ],
    solution: `melting_points = {"Aluminium": 660, "Copper": 1085, "Iron": 1538}
melting_points["Tungsten"] = 3422

print(f"Tungsten: {melting_points['Tungsten']} °C")
print(f"Metals recorded: {len(melting_points)}")
print("Gold:", melting_points.get("Gold", "not recorded"))`,
  },
  {
    moduleSlug: "data-structures",
    lessonSlug: "sets",
    title: "Compare two steels",
    problem: [
      "Two steel samples were analysed for the elements they contain. Use set operations to compare them.",
      "Sets have no order, so wrap results in `sorted()` to print them alphabetically.",
    ],
    requirements: [
      "Print the elements found in both steels.",
      "Print the elements found only in steel A.",
      "Print how many different elements appear across both steels.",
    ],
    starterCode: `steel_a = {"Fe", "C", "Cr", "Ni"}
steel_b = {"Fe", "C", "Mn"}

# Compare the two steels
`,
    expectedOutput: `In both: ['C', 'Fe']
Only in steel A: ['Cr', 'Ni']
Different elements in total: 5`,
    hints: [
      "`&` gives the intersection (in both), `-` the difference and `|` the union.",
      "`sorted(steel_a & steel_b)` returns an alphabetical list.",
      "Count the union with `len(steel_a | steel_b)`. Use `print(\"In both:\", ...)` with a comma for each line.",
    ],
    solution: `steel_a = {"Fe", "C", "Cr", "Ni"}
steel_b = {"Fe", "C", "Mn"}

print("In both:", sorted(steel_a & steel_b))
print("Only in steel A:", sorted(steel_a - steel_b))
print("Different elements in total:", len(steel_a | steel_b))`,
  },
];

const CODING_EXERCISE_BY_KEY = new Map(
  CODING_EXERCISES.map((codingExercise) => [`${codingExercise.moduleSlug}/${codingExercise.lessonSlug}`, codingExercise]),
);

/**
 * Looks up the hands-on exercise that follows a lesson.
 *
 * @returns The exercise, or `null` when the lesson has none yet.
 */
export function getCodingExercise(moduleSlug: string, lessonSlug: string): CodingExercise | null {
  return CODING_EXERCISE_BY_KEY.get(`${moduleSlug}/${lessonSlug}`) ?? null;
}
