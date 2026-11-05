import type { CodingExercise } from "@/types/lesson";

/** Hands-on coding exercises for Module 4 (Control Flow), with a version for every scientific context. */
export const MODULE_4_CODING_EXERCISES: CodingExercise[] = [
  {
    moduleSlug: "control-flow",
    lessonSlug: "conditional-statements",
    variants: {
      "materials-science": {
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
      chemistry: {
        title: "Classify a chemical bond",
        problem: [
          "The difference in electronegativity between two bonded atoms tells you what kind of bond they form:",
          "A difference below `0.4` means a **nonpolar covalent** bond, below `1.7` a **polar covalent** bond, and `1.7` or more an **ionic** bond.",
        ],
        requirements: [
          "Use `if`, `elif` and `else` to choose the bond type.",
          "For hydrogen chloride (difference `0.96`), print `H-Cl is a polar covalent bond`.",
          "Your program should still work if you change `difference` to `0.2` or `2.23`.",
        ],
        starterCode: `bond = "H-Cl"
difference = 0.96  # electronegativity difference

# Decide the bond type, then print the result
`,
        expectedOutput: "H-Cl is a polar covalent bond",
        hints: [
          "Check the smallest range first: `if difference < 0.4:`.",
          "Store the answer in a variable such as `bond_type` inside each branch, then print once at the end.",
          "`print(f\"{bond} is a {bond_type} bond\")`",
        ],
        solution: `bond = "H-Cl"
difference = 0.96  # electronegativity difference

if difference < 0.4:
    bond_type = "nonpolar covalent"
elif difference < 1.7:
    bond_type = "polar covalent"
else:
    bond_type = "ionic"

print(f"{bond} is a {bond_type} bond")`,
      },
      physics: {
        title: "Classify light by its wavelength",
        problem: [
          "Light is classified by its wavelength (in nanometres, nm). Human eyes can only see a narrow band of it:",
          "Shorter than `400` nm is **ultraviolet**, from `400` to `700` nm is **visible**, and longer than `700` nm is **infrared**.",
        ],
        requirements: [
          "Use `if`, `elif` and `else` to choose the region.",
          "For a green laser (wavelength `532` nm), print `Green laser: visible`.",
          "Your program should still work if you change `wavelength` to `254` or `850`.",
        ],
        starterCode: `source = "Green laser"
wavelength = 532  # nm

# Decide the region, then print the result
`,
        expectedOutput: "Green laser: visible",
        hints: [
          "Check the shortest wavelengths first: `if wavelength < 400:`.",
          "`elif wavelength <= 700:` covers the visible range, including 700 itself.",
          "Store the answer in a variable such as `region`, then `print(f\"{source}: {region}\")`.",
        ],
        solution: `source = "Green laser"
wavelength = 532  # nm

if wavelength < 400:
    region = "ultraviolet"
elif wavelength <= 700:
    region = "visible"
else:
    region = "infrared"

print(f"{source}: {region}")`,
      },
      biology: {
        title: "Classify a body temperature",
        problem: [
          "A patient's core body temperature (in °C) can be classified like this:",
          "Below `35` is **hypothermia**, up to and including `37.5` is **normal**, and above `37.5` is a **fever**.",
        ],
        requirements: [
          "Use `if`, `elif` and `else` to choose the category.",
          "For a temperature of `38.2`, print `Patient A: fever`.",
          "Your program should still work if you change `temperature` to `34.0` or `36.8`.",
        ],
        starterCode: `patient = "Patient A"
temperature = 38.2  # °C

# Decide the category, then print the result
`,
        expectedOutput: "Patient A: fever",
        hints: [
          "Check the lowest range first: `if temperature < 35:`.",
          "`elif temperature <= 37.5:` covers the normal range, including 37.5 itself.",
          "Store the answer in a variable such as `category`, then `print(f\"{patient}: {category}\")`.",
        ],
        solution: `patient = "Patient A"
temperature = 38.2  # °C

if temperature < 35:
    category = "hypothermia"
elif temperature <= 37.5:
    category = "normal"
else:
    category = "fever"

print(f"{patient}: {category}")`,
      },
      biochemistry: {
        title: "The charge on a protein",
        problem: [
          "A protein's isoelectric point (pI) is the pH at which it carries no overall charge. In a buffer below its pI, a protein is **positively charged**; above its pI, it is **negatively charged**.",
          "This happens because the side chains of some amino acids gain or lose protons as the pH changes.",
        ],
        requirements: [
          "Use `if`, `elif` and `else` to work out the charge.",
          "For lysozyme (pI `11.35`) in a buffer at pH `7.4`, print `Lysozyme is positively charged at pH 7.4`.",
          "Your program should still work if you change `buffer_ph` to `11.35` (print `neutral`) or `12.0`.",
        ],
        starterCode: `protein = "Lysozyme"
isoelectric_point = 11.35
buffer_ph = 7.4

# Decide the charge, then print the result
`,
        expectedOutput: "Lysozyme is positively charged at pH 7.4",
        hints: [
          "Compare the buffer pH with the pI: `if buffer_ph < isoelectric_point:`.",
          "Store the answer in a variable such as `charge` (`\"positively charged\"`, `\"negatively charged\"` or `\"neutral\"`).",
          "`print(f\"{protein} is {charge} at pH {buffer_ph}\")`",
        ],
        solution: `protein = "Lysozyme"
isoelectric_point = 11.35
buffer_ph = 7.4

if buffer_ph < isoelectric_point:
    charge = "positively charged"
elif buffer_ph > isoelectric_point:
    charge = "negatively charged"
else:
    charge = "neutral"

print(f"{protein} is {charge} at pH {buffer_ph}")`,
      },
      "general-programming": {
        title: "Rate a password",
        problem: [
          "A sign-up form rates passwords by their length:",
          "Fewer than `8` characters is **weak**, fewer than `12` is **medium**, and `12` or more is **strong**.",
        ],
        requirements: [
          "Use `len()` to count the characters and `if`, `elif` and `else` to choose the rating.",
          "For the password `sunflower7`, print `Password strength: medium`.",
          "Your program should still work if you change `password` to `cat` or `correct-horse-battery`.",
        ],
        starterCode: `password = "sunflower7"

# Decide the rating, then print the result
`,
        expectedOutput: "Password strength: medium",
        hints: [
          "Store the length first: `length = len(password)`.",
          "Check the shortest range first: `if length < 8:`.",
          "Store the answer in a variable such as `strength`, then `print(f\"Password strength: {strength}\")`.",
        ],
        solution: `password = "sunflower7"
length = len(password)

if length < 8:
    strength = "weak"
elif length < 12:
    strength = "medium"
else:
    strength = "strong"

print(f"Password strength: {strength}")`,
      },
    },
  },
  {
    moduleSlug: "control-flow",
    lessonSlug: "for-loops",
    variants: {
      "materials-science": {
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
      chemistry: {
        title: "Convert a series of pressures",
        problem: [
          "A gas was compressed to three pressures in kilopascals: 50.0, 101.325 and 202.65.",
          "Use a `for` loop to convert each one to atmospheres (1 atm = 101.325 kPa).",
        ],
        requirements: [
          "Loop over `pressures_kpa` instead of writing three separate `print()` calls.",
          "Print each line as `50.0 kPa = 0.49 atm`, with 2 decimal places for atmospheres.",
        ],
        starterCode: `pressures_kpa = [50.0, 101.325, 202.65]

# Loop over the pressures and print each conversion
`,
        expectedOutput: `50.0 kPa = 0.49 atm
101.325 kPa = 1.00 atm
202.65 kPa = 2.00 atm`,
        hints: [
          "`for pressure in pressures_kpa:` gives you one value each time round the loop.",
          "Indent the `print()` so it runs inside the loop.",
          "You can calculate inside an f-string: `{pressure / 101.325:.2f}`.",
        ],
        solution: `pressures_kpa = [50.0, 101.325, 202.65]

for pressure in pressures_kpa:
    print(f"{pressure} kPa = {pressure / 101.325:.2f} atm")`,
      },
      physics: {
        title: "Convert a series of speeds",
        problem: [
          "A speed camera recorded three cars at 36, 90 and 120 km/h.",
          "Use a `for` loop to convert each speed to metres per second (divide by 3.6).",
        ],
        requirements: [
          "Loop over `speeds_kmh` instead of writing three separate `print()` calls.",
          "Print each line as `36 km/h = 10.00 m/s`, with 2 decimal places for m/s.",
        ],
        starterCode: `speeds_kmh = [36, 90, 120]

# Loop over the speeds and print each conversion
`,
        expectedOutput: `36 km/h = 10.00 m/s
90 km/h = 25.00 m/s
120 km/h = 33.33 m/s`,
        hints: [
          "`for speed in speeds_kmh:` gives you one value each time round the loop.",
          "Indent the `print()` so it runs inside the loop.",
          "You can calculate inside an f-string: `{speed / 3.6:.2f}`.",
        ],
        solution: `speeds_kmh = [36, 90, 120]

for speed in speeds_kmh:
    print(f"{speed} km/h = {speed / 3.6:.2f} m/s")`,
      },
      biology: {
        title: "Convert a series of DNA lengths",
        problem: [
          "Three DNA fragments from a gel were sized at 1500, 4200 and 48502 base pairs (bp).",
          "Use a `for` loop to convert each length to kilobases (1 kb = 1000 bp).",
        ],
        requirements: [
          "Loop over `lengths_bp` instead of writing three separate `print()` calls.",
          "Print each line as `1500 bp = 1.50 kb`, with 2 decimal places for kilobases.",
        ],
        starterCode: `lengths_bp = [1500, 4200, 48502]

# Loop over the lengths and print each conversion
`,
        expectedOutput: `1500 bp = 1.50 kb
4200 bp = 4.20 kb
48502 bp = 48.50 kb`,
        hints: [
          "`for length in lengths_bp:` gives you one value each time round the loop.",
          "Indent the `print()` so it runs inside the loop.",
          "You can calculate inside an f-string: `{length / 1000:.2f}`.",
        ],
        solution: `lengths_bp = [1500, 4200, 48502]

for length in lengths_bp:
    print(f"{length} bp = {length / 1000:.2f} kb")`,
      },
      biochemistry: {
        title: "Convert a series of absorbances",
        problem: [
          "NADH is a molecule that many enzymes produce or use up. It absorbs ultraviolet light at 340 nm, so its concentration can be measured from its absorbance. The Beer–Lambert law gives the concentration: c = A / ε, with ε = 6220 per M per cm for NADH in a 1 cm cuvette.",
          "Three readings gave absorbances of 0.12, 0.35 and 0.80. Use a `for` loop to convert each absorbance to a concentration in micromolar (µM).",
        ],
        requirements: [
          "Loop over `absorbances` instead of writing three separate `print()` calls.",
          "Multiply by `1_000_000` to turn molar into micromolar.",
          "Print each line as `A = 0.12: 19.29 µM`, with 2 decimal places for the concentration.",
        ],
        starterCode: `absorbances = [0.12, 0.35, 0.80]
epsilon = 6220   # per M per cm, NADH at 340 nm

# Loop over the absorbances and print each concentration
`,
        expectedOutput: `A = 0.12: 19.29 µM
A = 0.35: 56.27 µM
A = 0.8: 128.62 µM`,
        hints: [
          "`for absorbance in absorbances:` gives you one value each time round the loop.",
          "Inside the loop, `concentration = absorbance / epsilon * 1_000_000` gives micromolar.",
          "Print it with an f-string: `f\"A = {absorbance}: {concentration:.2f} µM\"`.",
        ],
        solution: `absorbances = [0.12, 0.35, 0.80]
epsilon = 6220   # per M per cm, NADH at 340 nm

for absorbance in absorbances:
    concentration = absorbance / epsilon * 1_000_000
    print(f"A = {absorbance}: {concentration:.2f} µM")`,
      },
      "general-programming": {
        title: "Convert a series of prices",
        problem: [
          "A shop lists three items at £10, £25 and £100. It also wants to show the prices in euros.",
          "Use a `for` loop to convert each price, using an exchange rate of 1.17 euros per pound.",
        ],
        requirements: [
          "Loop over `prices_gbp` instead of writing three separate `print()` calls.",
          "Print each line as `£10 = €11.70`, with 2 decimal places for euros.",
        ],
        starterCode: `prices_gbp = [10, 25, 100]
exchange_rate = 1.17   # euros per pound

# Loop over the prices and print each conversion
`,
        expectedOutput: `£10 = €11.70
£25 = €29.25
£100 = €117.00`,
        hints: [
          "`for price in prices_gbp:` gives you one value each time round the loop.",
          "Indent the `print()` so it runs inside the loop.",
          "You can calculate inside an f-string: `{price * exchange_rate:.2f}`.",
        ],
        solution: `prices_gbp = [10, 25, 100]
exchange_rate = 1.17   # euros per pound

for price in prices_gbp:
    print(f"£{price} = €{price * exchange_rate:.2f}")`,
      },
    },
  },
  {
    moduleSlug: "control-flow",
    lessonSlug: "while-loops",
    variants: {
      "materials-science": {
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
      chemistry: {
        title: "Serial dilution",
        problem: [
          "A 2.0 mol/L stock solution is diluted ten-fold again and again: each dilution divides the concentration by 10.",
          "Use a `while` loop to keep diluting until the concentration falls below 0.001 mol/L, counting how many dilutions that takes.",
        ],
        requirements: [
          "Repeat while the concentration is `0.001` mol/L or more.",
          "Each time round, print the dilution number and the concentration to 4 decimal places, for example `Dilution 1: 0.2000 mol/L`.",
          "After the loop, print `Below 0.001 mol/L after 4 dilutions`.",
        ],
        starterCode: `concentration = 2.0  # mol/L
dilutions = 0

# Dilute ten-fold until the concentration falls below 0.001 mol/L
`,
        expectedOutput: `Dilution 1: 0.2000 mol/L
Dilution 2: 0.0200 mol/L
Dilution 3: 0.0020 mol/L
Dilution 4: 0.0002 mol/L
Below 0.001 mol/L after 4 dilutions`,
        hints: [
          "The loop condition is `while concentration >= 0.001:`.",
          "Inside the loop, update both variables: `concentration = concentration / 10` and `dilutions = dilutions + 1`.",
          "Print with `:.4f`. The final `print()` is not indented, so it runs once after the loop ends.",
        ],
        solution: `concentration = 2.0  # mol/L
dilutions = 0

while concentration >= 0.001:
    concentration = concentration / 10
    dilutions = dilutions + 1
    print(f"Dilution {dilutions}: {concentration:.4f} mol/L")

print(f"Below 0.001 mol/L after {dilutions} dilutions")`,
      },
      physics: {
        title: "A bouncing ball",
        problem: [
          "A ball is dropped from 2.0 m. Each time it bounces, it rises to 60% of its previous height.",
          "Use a `while` loop to keep bouncing until the ball rises less than 0.5 m, counting the bounces.",
        ],
        requirements: [
          "Repeat while the height is `0.5` m or more.",
          "Each time round, print the bounce number and the new height to 2 decimal places, for example `Bounce 1: 1.20 m`.",
          "After the loop, print `Below 0.5 m after 3 bounces`.",
        ],
        starterCode: `height = 2.0  # metres
bounces = 0

# Bounce until the ball rises less than 0.5 m
`,
        expectedOutput: `Bounce 1: 1.20 m
Bounce 2: 0.72 m
Bounce 3: 0.43 m
Below 0.5 m after 3 bounces`,
        hints: [
          "The loop condition is `while height >= 0.5:`.",
          "Inside the loop, update both variables: `height = height * 0.6` and `bounces = bounces + 1`.",
          "Print with `:.2f`. The final `print()` is not indented, so it runs once after the loop ends.",
        ],
        solution: `height = 2.0  # metres
bounces = 0

while height >= 0.5:
    height = height * 0.6
    bounces = bounces + 1
    print(f"Bounce {bounces}: {height:.2f} m")

print(f"Below 0.5 m after {bounces} bounces")`,
      },
      biology: {
        title: "A growing colony",
        problem: [
          "A bacterial colony starts with 50 cells, and the population doubles every generation.",
          "Use a `while` loop to keep doubling until there are more than 1000 cells, counting the generations.",
        ],
        requirements: [
          "Repeat while there are `1000` cells or fewer.",
          "Each time round, print the generation number and the cell count, for example `Generation 1: 100 cells`.",
          "After the loop, print `Over 1000 cells after 5 generations`.",
        ],
        starterCode: `cells = 50
generations = 0

# Double the population until there are more than 1000 cells
`,
        expectedOutput: `Generation 1: 100 cells
Generation 2: 200 cells
Generation 3: 400 cells
Generation 4: 800 cells
Generation 5: 1600 cells
Over 1000 cells after 5 generations`,
        hints: [
          "The loop condition is `while cells <= 1000:`.",
          "Inside the loop, update both variables: `cells = cells * 2` and `generations = generations + 1`.",
          "The final `print()` is not indented, so it runs once after the loop ends.",
        ],
        solution: `cells = 50
generations = 0

while cells <= 1000:
    cells = cells * 2
    generations = generations + 1
    print(f"Generation {generations}: {cells} cells")

print(f"Over 1000 cells after {generations} generations")`,
      },
      biochemistry: {
        title: "Clearing a drug from the blood",
        problem: [
          "After a dose, a drug's concentration in blood plasma is 80 mg/L. Each hour, the body clears 25% of what remains, so 75% is left.",
          "Use a `while` loop to follow the concentration hour by hour until it falls below 20 mg/L.",
        ],
        requirements: [
          "Repeat while the concentration is `20` mg/L or more.",
          "Each time round, print the hour and the concentration to 1 decimal place, for example `Hour 1: 60.0 mg/L`.",
          "After the loop, print `Below 20 mg/L after 5 hours`.",
        ],
        starterCode: `concentration = 80.0  # mg/L
hours = 0

# Follow the concentration until it falls below 20 mg/L
`,
        expectedOutput: `Hour 1: 60.0 mg/L
Hour 2: 45.0 mg/L
Hour 3: 33.8 mg/L
Hour 4: 25.3 mg/L
Hour 5: 19.0 mg/L
Below 20 mg/L after 5 hours`,
        hints: [
          "The loop condition is `while concentration >= 20:`.",
          "Inside the loop, update both variables: `concentration = concentration * 0.75` and `hours = hours + 1`.",
          "Print with `:.1f`. The final `print()` is not indented, so it runs once after the loop ends.",
        ],
        solution: `concentration = 80.0  # mg/L
hours = 0

while concentration >= 20:
    concentration = concentration * 0.75
    hours = hours + 1
    print(f"Hour {hours}: {concentration:.1f} mg/L")

print(f"Below 20 mg/L after {hours} hours")`,
      },
      "general-programming": {
        title: "Paying off a loan",
        problem: [
          "You borrowed 1000 and repay 250 each month.",
          "Use a `while` loop to make repayments until nothing is owed, counting the months.",
        ],
        requirements: [
          "Repeat while the balance is more than `0`.",
          "Each time round, print the month and the balance left, for example `Month 1: 750 left`.",
          "After the loop, print `Paid off after 4 months`.",
        ],
        starterCode: `balance = 1000
months = 0

# Repay 250 a month until nothing is owed
`,
        expectedOutput: `Month 1: 750 left
Month 2: 500 left
Month 3: 250 left
Month 4: 0 left
Paid off after 4 months`,
        hints: [
          "The loop condition is `while balance > 0:`.",
          "Inside the loop, update both variables: `balance = balance - 250` and `months = months + 1`.",
          "The final `print()` is not indented, so it runs once after the loop ends.",
        ],
        solution: `balance = 1000
months = 0

while balance > 0:
    balance = balance - 250
    months = months + 1
    print(f"Month {months}: {balance} left")

print(f"Paid off after {months} months")`,
      },
    },
  },
];
