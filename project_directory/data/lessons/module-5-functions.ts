import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "functions";

export const MODULE_5_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "introduction-to-functions",
    description: "Package a calculation into a reusable, named function: define it with `def`, call it, return a result, and document it.",
    estimatedMinutes: 25,
    learningObjectives: [
      "Explain why functions make programs shorter, clearer and more reliable",
      "Define a function with `def` and call it",
      "Give a function inputs (parameters) and get a result back with `return`",
      "Document a function with a docstring",
    ],
    blocks: [
      { type: "heading", text: "Why functions?" },
      {
        type: "paragraph",
        text: "You have already used many **functions**: `print()`, `len()`, `round()`, `max()`. Each is a named piece of code that does one job. You call it, give it some information, and it does the work without you needing to know how it is written inside.",
      },
      {
        type: "paragraph",
        text: "You can write your own functions too. Imagine a program that converts temperatures to kelvin in ten different places. Without a function, the formula is copied ten times; if you find a mistake, you must fix it ten times and hope you didn't miss one. With a function, the formula lives in one place, has a clear name, and every part of the program uses the same tested code.",
      },
      {
        type: "list",
        items: [
          "**Reuse**: write a calculation once and use it as often as you like.",
          "**Readability**: `celsius_to_kelvin(25)` says what it does; `25 + 273.15` only says how.",
          "**Reliability**: test a function once and trust it everywhere.",
          "**Organisation**: break a long program into small pieces that are each easy to understand.",
        ],
      },
      { type: "heading", text: "Defining and calling a function" },
      {
        type: "paragraph",
        text: "A function **definition** starts with the keyword `def`, then the function's name, brackets, and a colon. The indented block below is the function's **body**: the code that runs when the function is used. Defining a function doesn't run it; it just teaches Python a new command. You run the body by **calling** the function: its name followed by brackets.",
      },
      {
        type: "code",
        code: `def print_header():
    print("=" * 30)
    print("SPASCLE materials report")
    print("=" * 30)

print_header()
print("Sample: Cu-01")`,
        output: `==============================
SPASCLE materials report
==============================
Sample: Cu-01`,
      },
      {
        type: "callout",
        tone: "info",
        title: "Define before you call",
        text: "Python runs a script from top to bottom, so a function must be defined before the line that calls it. It is usual to put all function definitions near the top of a script.",
      },
      { type: "heading", text: "Parameters: giving a function inputs" },
      {
        type: "paragraph",
        text: "Most functions need information to work with. Names listed inside the brackets of the definition are **parameters**. When you call the function, the values you pass in are called **arguments**, and each parameter takes the value of its argument for that call.",
      },
      {
        type: "code",
        code: `def describe(element, density):
    print(f"{element} has a density of {density} g/cm³")

describe("Copper", 8.96)
describe("Aluminium", 2.70)`,
        output: `Copper has a density of 8.96 g/cm³
Aluminium has a density of 2.7 g/cm³`,
      },
      { type: "heading", text: "return: getting a result back" },
      {
        type: "paragraph",
        text: "The functions above **print** their result, which is fine for displaying something, but the result can't be used in further calculations. Most useful functions instead **return** a value with the `return` statement. The function call then stands for that value, so you can store it in a variable, print it, or use it in an expression.",
      },
      {
        type: "contextExample",
        title: "A conversion function",
        variants: {
          "materials-science": {
            intro: "A function that converts a temperature from °C to K, used to report several transition temperatures.",
            code: `def celsius_to_kelvin(temperature_c):
    return temperature_c + 273.15

melting_k = celsius_to_kelvin(1085)
print(f"Copper melts at {melting_k} K")
print(f"Room temperature is {celsius_to_kelvin(20)} K")
print(f"Difference: {melting_k - celsius_to_kelvin(20)} K")`,
            output: `Copper melts at 1358.15 K
Room temperature is 293.15 K
Difference: 1065.0 K`,
          },
          chemistry: {
            intro: "A function that converts a mass to an amount in moles.",
            code: `def mass_to_moles(mass_g, molar_mass):
    return mass_g / molar_mass

water = mass_to_moles(36.03, 18.015)
salt = mass_to_moles(5.844, 58.44)
print(f"Water: {water:.2f} mol, salt: {salt:.2f} mol")`,
            output: "Water: 2.00 mol, salt: 0.10 mol",
          },
          physics: {
            intro: "A function for kinetic energy, used to compare two objects.",
            code: `def kinetic_energy(mass, velocity):
    return 0.5 * mass * velocity ** 2

car = kinetic_energy(1200, 13.9)
cyclist = kinetic_energy(80, 6.0)
print(f"Car: {car:.0f} J, cyclist: {cyclist:.0f} J")
print(f"The car has {car / cyclist:.0f} times more energy")`,
            output: `Car: 115926 J, cyclist: 1440 J
The car has 81 times more energy`,
          },
          biology: {
            intro: "A function that calculates the GC content of a DNA sequence as a percentage.",
            code: `def gc_content(sequence):
    gc_count = sequence.count("G") + sequence.count("C")
    return gc_count / len(sequence) * 100

print(f"{gc_content('ATGCGCATTA'):.0f}%")
print(f"{gc_content('GGGCCCAT'):.0f}%")`,
            output: `40%
75%`,
          },
          biochemistry: {
            intro: "A function for the Michaelis–Menten reaction rate.",
            code: `def reaction_rate(substrate, v_max, k_m):
    return v_max * substrate / (k_m + substrate)

print(f"{reaction_rate(5.0, 120.0, 2.5):.1f} µmol/min")
print(f"{reaction_rate(50.0, 120.0, 2.5):.1f} µmol/min")`,
            output: `80.0 µmol/min
114.3 µmol/min`,
          },
          "general-programming": {
            intro: "A function that converts a distance from kilometres to miles.",
            code: `def km_to_miles(distance_km):
    return distance_km * 0.621371

marathon = km_to_miles(42.195)
print(f"A marathon is {marathon:.1f} miles")
print(f"A 5 km run is {km_to_miles(5):.1f} miles")
print(f"Difference: {marathon - km_to_miles(5):.1f} miles")`,
            output: `A marathon is 26.2 miles
A 5 km run is 3.1 miles
Difference: 23.1 miles`,
          },
        },
      },
      {
        type: "paragraph",
        text: "`return` also **ends** the function immediately: any lines after it in the body don't run. You will look at `return` in much more detail in the Return Values lesson.",
      },
      { type: "heading", text: "Functions calling functions" },
      {
        type: "paragraph",
        text: "A function can call other functions, including ones you wrote. This lets you build bigger calculations out of small, well-tested pieces.",
      },
      {
        type: "code",
        code: `def celsius_to_kelvin(temperature_c):
    return temperature_c + 273.15

def thermal_energy(temperature_c):
    boltzmann = 1.380649e-23   # J/K
    return boltzmann * celsius_to_kelvin(temperature_c)

print(f"{thermal_energy(25):.3e} J")`,
        output: "4.116e-21 J",
      },
      { type: "heading", text: "Documenting functions" },
      {
        type: "paragraph",
        text: "A **docstring** is a string written as the first line of a function's body, normally in triple quotes. It explains what the function does, what its parameters mean (including units), and what it returns. Python stores it with the function, and `help()` displays it. Good docstrings are especially valuable in scientific code, where units and assumptions matter.",
      },
      {
        type: "code",
        code: `def density(mass_g, volume_cm3):
    """Return the density in g/cm³ of a sample with the given mass (g) and volume (cm³)."""
    return mass_g / volume_cm3

print(density(26.98, 10.0))
print(density.__doc__)`,
        output: `2.698
Return the density in g/cm³ of a sample with the given mass (g) and volume (cm³).`,
      },
      {
        type: "list",
        items: [
          "Name functions with a **verb** or a clear description of the result: `convert_units`, `calculate_density`, `density`.",
          "Use the same `snake_case` style as variable names.",
          "Keep each function focused on **one** job. If you struggle to name it, it may be doing too much.",
        ],
      },
    ],
    exercises: [
      {
        id: "m5l1-q1",
        question: "What does this code print?",
        code: `def greet():
    print("Hello")`,
        options: [
          { id: "a", text: "Hello" },
          { id: "b", text: "Nothing: the function is defined but never called" },
          { id: "c", text: "greet" },
        ],
        correctOptionId: "b",
        explanation: "`def` only defines the function. Its body runs when you call it with `greet()`.",
      },
      {
        id: "m5l1-q2",
        question: "In `def area(width, height):`, what are `width` and `height`?",
        options: [
          { id: "a", text: "Return values" },
          { id: "b", text: "Parameters" },
          { id: "c", text: "Global constants" },
        ],
        correctOptionId: "b",
        explanation: "Names in the definition's brackets are parameters. The values passed in when calling are arguments.",
      },
      {
        id: "m5l1-q3",
        question: "What does this code print?",
        code: `def double(x):
    return x * 2

print(double(4) + 1)`,
        options: [
          { id: "a", text: "9" },
          { id: "b", text: "10" },
          { id: "c", text: "8" },
        ],
        correctOptionId: "a",
        explanation: "`double(4)` returns 8, which is used in the expression `8 + 1`.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "function-arguments",
    description: "Pass information to functions in flexible ways: positional and keyword arguments, default values, and collections as arguments.",
    estimatedMinutes: 25,
    learningObjectives: [
      "Call functions with positional and keyword arguments",
      "Give parameters default values",
      "Pass lists and dictionaries to functions",
      "Understand the errors caused by missing or extra arguments",
    ],
    blocks: [
      { type: "heading", text: "Positional arguments" },
      {
        type: "paragraph",
        text: "By default, arguments are matched to parameters by **position**: the first argument goes to the first parameter, the second to the second, and so on. This is short and convenient, but you must remember the correct order. Swapping two arguments gives a wrong answer without any error.",
      },
      {
        type: "code",
        code: `def density(mass_g, volume_cm3):
    return mass_g / volume_cm3

print(density(27.0, 10.0))   # correct order
print(density(10.0, 27.0))   # swapped: wrong, but no error!`,
        output: `2.7
0.37037037037037035`,
      },
      { type: "heading", text: "Keyword arguments" },
      {
        type: "paragraph",
        text: "You can also name each argument when you call the function, using `parameter_name=value`. These are **keyword arguments**. Order no longer matters, and the call documents itself, which helps when a function has several numeric parameters that are easy to mix up.",
      },
      {
        type: "code",
        code: `def density(mass_g, volume_cm3):
    return mass_g / volume_cm3

print(density(volume_cm3=10.0, mass_g=27.0))`,
        output: "2.7",
      },
      {
        type: "paragraph",
        text: "You can mix both styles, but positional arguments must come **first**. `density(27.0, volume_cm3=10.0)` is fine; `density(mass_g=27.0, 10.0)` is a `SyntaxError`.",
      },
      { type: "heading", text: "Default values" },
      {
        type: "paragraph",
        text: "A parameter can have a **default value**, written `parameter=value` in the definition. If the caller leaves that argument out, the default is used. Defaults are ideal for settings that are usually the same, such as standard conditions or the number of decimal places. Parameters with defaults must come after those without.",
      },
      {
        type: "contextExample",
        title: "Parameters with default values",
        variants: {
          "materials-science": {
            intro: "Thermal expansion: a bar's change in length is ΔL = αL₀ΔT. The default expansion coefficient is copper's.",
            code: `def expansion(length_m, temperature_change, alpha=16.5e-6):
    """Change in length (m). alpha is the expansion coefficient in 1/K (default: copper)."""
    return alpha * length_m * temperature_change

print(f"Copper:    {expansion(2.0, 80) * 1000:.3f} mm")
print(f"Aluminium: {expansion(2.0, 80, alpha=23.1e-6) * 1000:.3f} mm")
print(f"Invar:     {expansion(2.0, 80, alpha=1.2e-6) * 1000:.3f} mm")`,
            output: `Copper:    2.640 mm
Aluminium: 3.696 mm
Invar:     0.192 mm`,
          },
          chemistry: {
            intro: "The ideal gas law with standard temperature and the gas constant as defaults.",
            code: `def gas_pressure(moles, volume_m3, temperature_k=273.15, r=8.314):
    """Pressure in Pa from the ideal gas law."""
    return moles * r * temperature_k / volume_m3

print(f"{gas_pressure(1.0, 0.0224):.0f} Pa at 0 °C")
print(f"{gas_pressure(1.0, 0.0224, temperature_k=373.15):.0f} Pa at 100 °C")`,
            output: `101383 Pa at 0 °C
138499 Pa at 100 °C`,
          },
          physics: {
            intro: "Weight on different planets, with Earth's gravity as the default.",
            code: `def weight(mass_kg, g=9.81):
    """Weight in newtons. g is the gravitational acceleration in m/s²."""
    return mass_kg * g

print(f"Earth: {weight(70):.1f} N")
print(f"Moon:  {weight(70, g=1.62):.1f} N")
print(f"Mars:  {weight(70, g=3.71):.1f} N")`,
            output: `Earth: 686.7 N
Moon:  113.4 N
Mars:  259.7 N`,
          },
          biology: {
            intro: "Population growth with a default doubling time.",
            code: `def population(start, hours, doubling_time_h=0.5):
    """Cell count after a number of hours of exponential growth."""
    return start * 2 ** (hours / doubling_time_h)

print(f"{population(100, 3):,.0f} cells")
print(f"{population(100, 3, doubling_time_h=1.0):,.0f} cells")`,
            output: `6,400 cells
800 cells`,
          },
          biochemistry: {
            intro: "The Beer–Lambert law gives a protein's concentration from its absorbance at 280 nm: c = A / (εl). The defaults are the extinction coefficient of bovine serum albumin (BSA) and a 1 cm cuvette.",
            code: `def protein_concentration(absorbance, extinction_coefficient=43_824, path_cm=1.0):
    """Concentration in µM from the Beer–Lambert law (default ε: bovine serum albumin)."""
    return absorbance / (extinction_coefficient * path_cm) * 1e6

print(f"BSA:      {protein_concentration(0.65):.1f} µM")
print(f"Lysozyme: {protein_concentration(0.65, extinction_coefficient=37_970):.1f} µM")
print(f"BSA, 0.5 cm cuvette: {protein_concentration(0.65, path_cm=0.5):.1f} µM")`,
            output: `BSA:      14.8 µM
Lysozyme: 17.1 µM
BSA, 0.5 cm cuvette: 29.7 µM`,
          },
          "general-programming": {
            intro: "A function that formats an amount of money, with the currency symbol and number of decimal places as defaults.",
            code: `def format_price(amount, currency="£", decimals=2):
    """Return an amount as text with a currency symbol."""
    return f"{currency}{amount:.{decimals}f}"

print(format_price(4.5))
print(format_price(4.5, currency="€"))
print(format_price(1250, currency="¥", decimals=0))`,
            output: `£4.50
€4.50
¥1250`,
            explanation: "`{amount:.{decimals}f}` puts one value inside another's format: the number of decimal places comes from the `decimals` parameter.",
          },
        },
      },
      { type: "heading", text: "Passing collections" },
      {
        type: "paragraph",
        text: "An argument can be any value, including a list or a dictionary. This lets one function process a whole dataset or a whole record.",
      },
      {
        type: "code",
        code: `def summarise(values, unit=""):
    mean = sum(values) / len(values)
    print(f"n = {len(values)}, mean = {mean:.2f} {unit}, range = {min(values)} to {max(values)} {unit}")

summarise([152, 160, 158, 149, 155], unit="HV")
summarise([8.94, 8.97, 8.95])`,
        output: `n = 5, mean = 154.80 HV, range = 149 to 160 HV
n = 3, mean = 8.95 , range = 8.94 to 8.97`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "Functions can change the lists you pass in",
        text: "When you pass a list or dictionary, the function receives the **same** object, not a copy. If the function calls `append()` or changes an item, the caller's list changes too. This can be useful, but if you don't intend it, work on a copy inside the function.",
      },
      { type: "heading", text: "Common argument errors" },
      {
        type: "paragraph",
        text: "Calling a function with too few or too many arguments raises a `TypeError` that names the problem. Run this example to see the message.",
      },
      { type: "code", code: `def density(mass_g, volume_cm3):
    return mass_g / volume_cm3

print(density(27.0))` },
      {
        type: "explanation",
        text: "The message `density() missing 1 required positional argument: 'volume_cm3'` tells you exactly which argument is missing.",
      },
    ],
    exercises: [
      {
        id: "m5l2-q1",
        question: "What does this code print?",
        code: `def power(base, exponent=2):
    return base ** exponent

print(power(3))`,
        options: [
          { id: "a", text: "3" },
          { id: "b", text: "9" },
          { id: "c", text: "An error, because `exponent` is missing" },
        ],
        correctOptionId: "b",
        explanation: "`exponent` has a default of 2, which is used when the argument is left out: 3 ** 2 = 9.",
      },
      {
        id: "m5l2-q2",
        question: "Which call is invalid?",
        options: [
          { id: "a", text: "`density(27.0, 10.0)`" },
          { id: "b", text: "`density(volume_cm3=10.0, mass_g=27.0)`" },
          { id: "c", text: "`density(mass_g=27.0, 10.0)`" },
        ],
        correctOptionId: "c",
        explanation: "Positional arguments must come before keyword arguments, so option C is a `SyntaxError`.",
      },
      {
        id: "m5l2-q3",
        question: "What is the main advantage of keyword arguments?",
        options: [
          { id: "a", text: "They make the function run faster" },
          { id: "b", text: "Calls are clearer and the order of arguments doesn't matter" },
          { id: "c", text: "They let a function return several values" },
        ],
        correctOptionId: "b",
        explanation: "Naming arguments makes calls self-explanatory and avoids mix-ups between similar parameters.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "return-values",
    description: "Use `return` to send results back, return several values at once, understand `None`, and see how variables inside functions are kept separate.",
    estimatedMinutes: 25,
    learningObjectives: [
      "Explain the difference between returning and printing a value",
      "Return several values and unpack them",
      "Use `return` inside conditions to exit early",
      "Describe local and global variables",
    ],
    blocks: [
      { type: "heading", text: "Returning versus printing" },
      {
        type: "paragraph",
        text: "Beginners often mix up `print()` and `return`, because both seem to produce a result. They do very different things. `print()` displays text for a **person** to read and then the value is gone. `return` hands a value back to the **code** that called the function, so the program can keep working with it.",
      },
      {
        type: "code",
        code: `def kelvin_printed(temperature_c):
    print(temperature_c + 273.15)

def kelvin_returned(temperature_c):
    return temperature_c + 273.15

result = kelvin_returned(25)
print(result * 2)

result = kelvin_printed(25)
print(result)`,
        output: `596.3
298.15
None`,
      },
      {
        type: "paragraph",
        text: "The second function prints `298.15`, but its result can't be used: the variable `result` receives `None`. **A function without a `return` statement returns `None`**, Python's value for *nothing*. As a rule, have functions **return** results and let the main part of the program decide what to print.",
      },
      { type: "heading", text: "Using returned values" },
      {
        type: "paragraph",
        text: "A function call that returns a value can go anywhere a value can: in a calculation, in an f-string, in a condition, as an argument to another function, or in a list.",
      },
      {
        type: "code",
        code: `def density(mass_g, volume_cm3):
    return mass_g / volume_cm3

samples = {"A": (27.0, 10.0), "B": (89.6, 10.0), "C": (45.1, 10.0)}

for name, (mass, volume) in samples.items():
    rho = density(mass, volume)
    label = "light" if rho < 5 else "heavy"
    print(f"Sample {name}: {rho:.2f} g/cm³ ({label})")`,
        output: `Sample A: 2.70 g/cm³ (light)
Sample B: 8.96 g/cm³ (heavy)
Sample C: 4.51 g/cm³ (light)`,
      },
      {
        type: "explanation",
        text: "`\"light\" if rho < 5 else \"heavy\"` is a **conditional expression**: a one-line `if`/`else` that produces a value. The loop also unpacks each `(mass, volume)` tuple directly in the `for` line.",
      },
      { type: "heading", text: "Returning several values" },
      {
        type: "paragraph",
        text: "A function can return several values by separating them with commas. Python packs them into a **tuple**, which the caller can unpack into separate variables, exactly as in the Tuples lesson.",
      },
      {
        type: "contextExample",
        title: "A function that returns several results",
        variants: {
          "materials-science": {
            intro: "A function that summarises a set of hardness measurements.",
            code: `def summarise(values):
    mean = sum(values) / len(values)
    return min(values), max(values), mean

low, high, mean = summarise([152, 160, 158, 149, 155])
print(f"Hardness: {low} to {high} HV, mean {mean:.1f} HV")`,
            output: "Hardness: 149 to 160 HV, mean 154.8 HV",
          },
          chemistry: {
            intro: "A function that splits a mass of water into the masses of hydrogen and oxygen it contains.",
            code: `def water_composition(mass_g):
    hydrogen = mass_g * 2.016 / 18.015
    oxygen = mass_g * 15.999 / 18.015
    return hydrogen, oxygen

h, o = water_composition(100)
print(f"100 g of water: {h:.1f} g H, {o:.1f} g O")`,
            output: "100 g of water: 11.2 g H, 88.8 g O",
          },
          physics: {
            intro: "A function that splits a velocity into horizontal and vertical components.",
            code: `import math

def components(speed, angle_degrees):
    angle = math.radians(angle_degrees)
    return speed * math.cos(angle), speed * math.sin(angle)

vx, vy = components(20.0, 30)
print(f"vx = {vx:.2f} m/s, vy = {vy:.2f} m/s")`,
            output: "vx = 17.32 m/s, vy = 10.00 m/s",
          },
          biology: {
            intro: "A function that counts each base in a DNA sequence.",
            code: `def base_counts(sequence):
    return sequence.count("A"), sequence.count("C"), sequence.count("G"), sequence.count("T")

a, c, g, t = base_counts("ATGCGCATTAGC")
print(f"A={a} C={c} G={g} T={t}")`,
            output: "A=3 C=3 G=3 T=3",
          },
          biochemistry: {
            intro: "A function that counts the purines (A and G) and pyrimidines (C and U) in an mRNA sequence.",
            code: `def base_composition(sequence):
    purines = sequence.count("A") + sequence.count("G")
    pyrimidines = sequence.count("C") + sequence.count("U")
    return purines, pyrimidines

purines, pyrimidines = base_composition("AUGGCUACGUAA")
print(f"mRNA: {purines} purines, {pyrimidines} pyrimidines")`,
            output: "mRNA: 7 purines, 5 pyrimidines",
          },
          "general-programming": {
            intro: "A function that works out the tip on a restaurant bill and the total to pay.",
            code: `def add_tip(subtotal, tip_rate):
    tip = subtotal * tip_rate
    return tip, subtotal + tip

tip, total = add_tip(48.00, 0.15)
print(f"Tip: {tip:.2f}, total to pay: {total:.2f}")`,
            output: "Tip: 7.20, total to pay: 55.20",
          },
        },
      },
      { type: "heading", text: "Returning early" },
      {
        type: "paragraph",
        text: "`return` ends the function straight away. Combined with `if`, this lets a function deal with special cases first and then get on with the normal calculation, which often reads more clearly than deep nesting.",
      },
      {
        type: "code",
        code: `def classify(band_gap_ev):
    if band_gap_ev < 0:
        return "invalid"
    if band_gap_ev == 0:
        return "conductor"
    if band_gap_ev < 3:
        return "semiconductor"
    return "insulator"

for gap in [0, 1.12, 5.5, -1]:
    print(gap, classify(gap))`,
        output: `0 conductor
1.12 semiconductor
5.5 insulator
-1 invalid`,
      },
      { type: "heading", text: "Local and global variables" },
      {
        type: "paragraph",
        text: "Variables created inside a function, including its parameters, are **local**: they exist only while the function runs and can't be seen from outside. Each call starts fresh. Variables created in the main part of the program are **global**: functions can read them, but should normally receive what they need through parameters instead.",
      },
      {
        type: "code",
        code: `def kinetic_energy(mass, velocity):
    energy = 0.5 * mass * velocity ** 2   # energy is local
    return energy

result = kinetic_energy(2.0, 3.0)
print(result)
print(energy)   # NameError: energy only existed inside the function`,
      },
      {
        type: "explanation",
        text: "The first `print()` works; the second raises `NameError: name 'energy' is not defined`. The returned value is the only thing that leaves the function, which is exactly why `return` matters.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep functions self-contained",
        text: "A function that gets everything it needs from its parameters and gives back everything through `return` is easy to test, reuse and understand. Avoid functions that quietly depend on, or change, global variables.",
      },
    ],
    exercises: [
      {
        id: "m5l3-q1",
        question: "What does a function return if it has no `return` statement?",
        options: [
          { id: "a", text: "`0`" },
          { id: "b", text: "`None`" },
          { id: "c", text: "The last value it printed" },
        ],
        correctOptionId: "b",
        explanation: "Without `return`, a function returns `None`.",
      },
      {
        id: "m5l3-q2",
        question: "What does this code print?",
        code: `def stats(values):
    return min(values), max(values)

low, high = stats([4, 9, 2])
print(high - low)`,
        options: [
          { id: "a", text: "7" },
          { id: "b", text: "5" },
          { id: "c", text: "(2, 9)" },
        ],
        correctOptionId: "a",
        explanation: "The function returns the tuple `(2, 9)`, which is unpacked into `low` and `high`. 9 − 2 = 7.",
      },
      {
        id: "m5l3-q3",
        question: "Why does `print(area)` fail after this code?",
        code: `def circle(radius):
    area = 3.14159 * radius ** 2
    return area

circle(2)`,
        options: [
          { id: "a", text: "`area` is a local variable that only exists inside the function" },
          { id: "b", text: "`circle(2)` was never called" },
          { id: "c", text: "Functions can't contain calculations" },
        ],
        correctOptionId: "a",
        explanation: "`area` is local to `circle`. To use the result, store the returned value: `area = circle(2)`.",
      },
    ],
  },
];
