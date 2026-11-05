import type { CodingExercise } from "@/types/lesson";

/** Hands-on coding exercises for Module 3 (Data Structures), with a version for every scientific context. */
export const MODULE_3_CODING_EXERCISES: CodingExercise[] = [
  {
    moduleSlug: "data-structures",
    lessonSlug: "lists",
    variants: {
      "materials-science": {
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
      chemistry: {
        title: "Summarise pH readings",
        problem: [
          "You measured the pH of a buffer four times: 7.21, 7.25, 7.19 and 7.23. A fifth reading just came in: 7.22.",
          "Add it to the list, then summarise all the readings. Python's built-in `len()`, `max()`, `min()` and `sum()` work on lists.",
        ],
        requirements: [
          "Add `7.22` to the end of the list with `append()`.",
          "Print the number of readings, the highest and lowest values, and the average to 2 decimal places.",
        ],
        starterCode: `ph_readings = [7.21, 7.25, 7.19, 7.23]

# Add the new reading, then print the summary
`,
        expectedOutput: `Readings: 5
Highest: 7.25
Lowest: 7.19
Average: 7.22`,
        hints: [
          "`ph_readings.append(7.22)` adds the new value to the end.",
          "`max(ph_readings)` and `min(ph_readings)` give the highest and lowest values.",
          "The average is `sum(ph_readings) / len(ph_readings)`. Format it with `:.2f`.",
        ],
        solution: `ph_readings = [7.21, 7.25, 7.19, 7.23]
ph_readings.append(7.22)

print(f"Readings: {len(ph_readings)}")
print(f"Highest: {max(ph_readings)}")
print(f"Lowest: {min(ph_readings)}")
print(f"Average: {sum(ph_readings) / len(ph_readings):.2f}")`,
      },
      physics: {
        title: "Summarise pendulum timings",
        problem: [
          "You timed one swing of a pendulum four times: 2.01, 1.98, 2.03 and 2.00 seconds. A fifth timing just came in: 1.99 s.",
          "Add it to the list, then summarise all the timings. Python's built-in `len()`, `max()`, `min()` and `sum()` work on lists.",
        ],
        requirements: [
          "Add `1.99` to the end of the list with `append()`.",
          "Print the number of timings, the longest and shortest values, and the average to 3 decimal places.",
        ],
        starterCode: `periods = [2.01, 1.98, 2.03, 2.00]   # seconds

# Add the new timing, then print the summary
`,
        expectedOutput: `Timings: 5
Longest: 2.03
Shortest: 1.98
Average: 2.002`,
        hints: [
          "`periods.append(1.99)` adds the new value to the end.",
          "`max(periods)` and `min(periods)` give the longest and shortest values.",
          "The average is `sum(periods) / len(periods)`. Format it with `:.3f`.",
        ],
        solution: `periods = [2.01, 1.98, 2.03, 2.00]   # seconds
periods.append(1.99)

print(f"Timings: {len(periods)}")
print(f"Longest: {max(periods)}")
print(f"Shortest: {min(periods)}")
print(f"Average: {sum(periods) / len(periods):.3f}")`,
      },
      biology: {
        title: "Summarise seedling heights",
        problem: [
          "You measured four bean seedlings after two weeks: 12.4, 15.1, 13.8 and 14.2 cm. A fifth seedling has just been measured at 13.5 cm.",
          "Add it to the list, then summarise all the heights. Python's built-in `len()`, `max()`, `min()` and `sum()` work on lists.",
        ],
        requirements: [
          "Add `13.5` to the end of the list with `append()`.",
          "Print the number of seedlings, the tallest and shortest heights, and the average to 1 decimal place.",
        ],
        starterCode: `heights = [12.4, 15.1, 13.8, 14.2]   # cm

# Add the new height, then print the summary
`,
        expectedOutput: `Seedlings: 5
Tallest: 15.1
Shortest: 12.4
Average: 13.8`,
        hints: [
          "`heights.append(13.5)` adds the new value to the end.",
          "`max(heights)` and `min(heights)` give the tallest and shortest values.",
          "The average is `sum(heights) / len(heights)`. Format it with `:.1f`.",
        ],
        solution: `heights = [12.4, 15.1, 13.8, 14.2]   # cm
heights.append(13.5)

print(f"Seedlings: {len(heights)}")
print(f"Tallest: {max(heights)}")
print(f"Shortest: {min(heights)}")
print(f"Average: {sum(heights) / len(heights):.1f}")`,
      },
      biochemistry: {
        title: "Summarise enzyme assay replicates",
        problem: [
          "An enzyme assay was run four times, giving activities of 42.1, 44.3, 43.0 and 41.8 µmol/min. A fifth replicate just finished: 43.6 µmol/min.",
          "Add it to the list, then summarise all the replicates. Python's built-in `len()`, `max()`, `min()` and `sum()` work on lists.",
        ],
        requirements: [
          "Add `43.6` to the end of the list with `append()`.",
          "Print the number of replicates, the highest and lowest values, and the average to 1 decimal place.",
        ],
        starterCode: `activities = [42.1, 44.3, 43.0, 41.8]   # µmol/min

# Add the new replicate, then print the summary
`,
        expectedOutput: `Replicates: 5
Highest: 44.3
Lowest: 41.8
Average: 43.0`,
        hints: [
          "`activities.append(43.6)` adds the new value to the end.",
          "`max(activities)` and `min(activities)` give the highest and lowest values.",
          "The average is `sum(activities) / len(activities)`. Format it with `:.1f`.",
        ],
        solution: `activities = [42.1, 44.3, 43.0, 41.8]   # µmol/min
activities.append(43.6)

print(f"Replicates: {len(activities)}")
print(f"Highest: {max(activities)}")
print(f"Lowest: {min(activities)}")
print(f"Average: {sum(activities) / len(activities):.1f}")`,
      },
      "general-programming": {
        title: "Summarise test scores",
        problem: [
          "Four students scored 78, 85, 92 and 67 in a test. A fifth student's score just came in: 88.",
          "Add it to the list, then summarise all the scores. Python's built-in `len()`, `max()`, `min()` and `sum()` work on lists.",
        ],
        requirements: [
          "Add `88` to the end of the list with `append()`.",
          "Print the number of scores, the highest and lowest values, and the average to 1 decimal place.",
        ],
        starterCode: `scores = [78, 85, 92, 67]

# Add the new score, then print the summary
`,
        expectedOutput: `Scores: 5
Highest: 92
Lowest: 67
Average: 82.0`,
        hints: [
          "`scores.append(88)` adds the new value to the end.",
          "`max(scores)` and `min(scores)` give the highest and lowest values.",
          "The average is `sum(scores) / len(scores)`. Format it with `:.1f`.",
        ],
        solution: `scores = [78, 85, 92, 67]
scores.append(88)

print(f"Scores: {len(scores)}")
print(f"Highest: {max(scores)}")
print(f"Lowest: {min(scores)}")
print(f"Average: {sum(scores) / len(scores):.1f}")`,
      },
    },
  },
  {
    moduleSlug: "data-structures",
    lessonSlug: "tuples",
    variants: {
      "materials-science": {
        title: "Molar mass of alumina",
        problem: [
          "Each element in a compound can be stored as a tuple of `(symbol, atomic mass, count)`. Alumina (Al₂O₃), a common ceramic, is two aluminium atoms and three oxygen atoms.",
          "Unpack both tuples into variables, print each element, then calculate the molar mass.",
        ],
        requirements: [
          "Unpack each tuple into three variables.",
          "Print each element as `Al: 2 × 26.982`.",
          "Print `Molar mass of Al2O3: 101.961 g/mol` (3 decimal places).",
        ],
        starterCode: `aluminium = ("Al", 26.982, 2)
oxygen = ("O", 15.999, 3)

# Unpack the tuples, print each element, then the molar mass
`,
        expectedOutput: `Al: 2 × 26.982
O: 3 × 15.999
Molar mass of Al2O3: 101.961 g/mol`,
        hints: [
          "Unpacking puts each item of a tuple into its own variable: `symbol_al, mass_al, count_al = aluminium`.",
          "Print with an f-string: `print(f\"{symbol_al}: {count_al} × {mass_al}\")`.",
          "Molar mass = (mass × count) for aluminium + (mass × count) for oxygen. Format it with `:.3f`.",
        ],
        solution: `aluminium = ("Al", 26.982, 2)
oxygen = ("O", 15.999, 3)

symbol_al, mass_al, count_al = aluminium
symbol_o, mass_o, count_o = oxygen

print(f"{symbol_al}: {count_al} × {mass_al}")
print(f"{symbol_o}: {count_o} × {mass_o}")
molar_mass = mass_al * count_al + mass_o * count_o
print(f"Molar mass of Al2O3: {molar_mass:.3f} g/mol")`,
      },
      chemistry: {
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
      physics: {
        title: "Speed from a velocity vector",
        problem: [
          "A drone's velocity is stored as a tuple of its `(x, y, z)` components in m/s. Its speed is the length of that vector: √(vx² + vy² + vz²).",
          "Unpack the tuple into variables, print each component, then calculate the speed.",
        ],
        requirements: [
          "Unpack the tuple into three variables.",
          "Print each component on its own line, for example `vx = 3.0 m/s`.",
          "Print `Speed: 13.00 m/s` (2 decimal places). Raising a number to the power `0.5` gives its square root.",
        ],
        starterCode: `velocity = (3.0, 4.0, 12.0)   # m/s

# Unpack the tuple, print each component, then the speed
`,
        expectedOutput: `vx = 3.0 m/s
vy = 4.0 m/s
vz = 12.0 m/s
Speed: 13.00 m/s`,
        hints: [
          "Unpacking puts each item of a tuple into its own variable: `vx, vy, vz = velocity`.",
          "Print with an f-string: `print(f\"vx = {vx} m/s\")`.",
          "The speed is `(vx ** 2 + vy ** 2 + vz ** 2) ** 0.5`. Format it with `:.2f`.",
        ],
        solution: `velocity = (3.0, 4.0, 12.0)   # m/s

vx, vy, vz = velocity

print(f"vx = {vx} m/s")
print(f"vy = {vy} m/s")
print(f"vz = {vz} m/s")
speed = (vx ** 2 + vy ** 2 + vz ** 2) ** 0.5
print(f"Speed: {speed:.2f} m/s")`,
      },
      biology: {
        title: "Two quadrat records",
        problem: [
          "Each quadrat in a meadow survey is stored as a tuple of `(species, count, area in m²)`. Two quadrats were surveyed: one for daisies and one for clover.",
          "Unpack both tuples into variables, print the population density of each species, then the total number of plants.",
        ],
        requirements: [
          "Unpack each tuple into three variables.",
          "Print each species as `Bellis perennis: 12.0 per m²` (count divided by area, 1 decimal place).",
          "Print `Total plants: 78`.",
        ],
        starterCode: `daisies = ("Bellis perennis", 48, 4.0)
clover = ("Trifolium repens", 30, 3.0)

# Unpack the tuples, print each density, then the total count
`,
        expectedOutput: `Bellis perennis: 12.0 per m²
Trifolium repens: 10.0 per m²
Total plants: 78`,
        hints: [
          "Unpacking puts each item of a tuple into its own variable: `species_d, count_d, area_d = daisies`.",
          "Calculate inside an f-string: `print(f\"{species_d}: {count_d / area_d:.1f} per m²\")`.",
          "The total is `count_d + count_c`.",
        ],
        solution: `daisies = ("Bellis perennis", 48, 4.0)
clover = ("Trifolium repens", 30, 3.0)

species_d, count_d, area_d = daisies
species_c, count_c, area_c = clover

print(f"{species_d}: {count_d / area_d:.1f} per m²")
print(f"{species_c}: {count_c / area_c:.1f} per m²")
print(f"Total plants: {count_d + count_c}")`,
      },
      biochemistry: {
        title: "Molar mass of a dipeptide",
        problem: [
          "Each amino acid can be stored as a tuple of `(three-letter code, molar mass in g/mol)`. When glycine and alanine join to form the dipeptide Gly-Ala, a peptide bond forms and one molecule of water (18.015 g/mol) is released.",
          "Unpack both tuples into variables, print each amino acid, then calculate the molar mass of the dipeptide.",
        ],
        requirements: [
          "Unpack each tuple into two variables.",
          "Print each amino acid as `Gly: 75.07 g/mol`.",
          "Print `Gly-Ala: 146.14 g/mol` (2 decimal places): the two masses added together, minus water.",
        ],
        starterCode: `glycine = ("Gly", 75.07)
alanine = ("Ala", 89.09)
water = 18.015   # g/mol

# Unpack the tuples, print each amino acid, then the dipeptide's molar mass
`,
        expectedOutput: `Gly: 75.07 g/mol
Ala: 89.09 g/mol
Gly-Ala: 146.14 g/mol`,
        hints: [
          "Unpacking puts each item of a tuple into its own variable: `code_g, mass_g = glycine`.",
          "Print with an f-string: `print(f\"{code_g}: {mass_g} g/mol\")`.",
          "The dipeptide's molar mass is `mass_g + mass_a - water`. Build the name with `f\"{code_g}-{code_a}\"` and format the mass with `:.2f`.",
        ],
        solution: `glycine = ("Gly", 75.07)
alanine = ("Ala", 89.09)
water = 18.015   # g/mol

code_g, mass_g = glycine
code_a, mass_a = alanine

print(f"{code_g}: {mass_g} g/mol")
print(f"{code_a}: {mass_a} g/mol")
dipeptide_mass = mass_g + mass_a - water
print(f"{code_g}-{code_a}: {dipeptide_mass:.2f} g/mol")`,
      },
      "general-programming": {
        title: "Total of an order",
        problem: [
          "Each line of a shopping order can be stored as a tuple of `(product, price, quantity)`. This order has notebooks and pens.",
          "Unpack both tuples into variables, print each line, then calculate the order total.",
        ],
        requirements: [
          "Unpack each tuple into three variables.",
          "Print each line as `Notebook: 4 × 3.5`.",
          "Print `Total: 20.00` (2 decimal places).",
        ],
        starterCode: `notebooks = ("Notebook", 3.50, 4)
pens = ("Pen", 1.20, 5)

# Unpack the tuples, print each line, then the total
`,
        expectedOutput: `Notebook: 4 × 3.5
Pen: 5 × 1.2
Total: 20.00`,
        hints: [
          "Unpacking puts each item of a tuple into its own variable: `name_n, price_n, quantity_n = notebooks`.",
          "Print with an f-string: `print(f\"{name_n}: {quantity_n} × {price_n}\")`.",
          "Total = (price × quantity) for notebooks + (price × quantity) for pens. Format it with `:.2f`.",
        ],
        solution: `notebooks = ("Notebook", 3.50, 4)
pens = ("Pen", 1.20, 5)

name_n, price_n, quantity_n = notebooks
name_p, price_p, quantity_p = pens

print(f"{name_n}: {quantity_n} × {price_n}")
print(f"{name_p}: {quantity_p} × {price_p}")
total = price_n * quantity_n + price_p * quantity_p
print(f"Total: {total:.2f}")`,
      },
    },
  },
  {
    moduleSlug: "data-structures",
    lessonSlug: "dictionaries",
    variants: {
      "materials-science": {
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
      chemistry: {
        title: "Look up boiling points",
        problem: [
          "The dictionary below maps solvents to their boiling points in °C. Add methanol, which boils at 64.7 °C.",
          "Then look values up by name, count the entries, and safely check for a solvent that isn't recorded.",
        ],
        requirements: [
          "Add the key `\"Methanol\"` with the value `64.7`.",
          "Print `Methanol: 64.7 °C` by looking the value up in the dictionary.",
          "Print `Solvents recorded: 4` using `len()`.",
          "Print `Hexane: not recorded` using `get()` with a default value.",
        ],
        starterCode: `boiling_points = {"Water": 100.0, "Ethanol": 78.4, "Acetone": 56.1}

# Add methanol, then print the three lines
`,
        expectedOutput: `Methanol: 64.7 °C
Solvents recorded: 4
Hexane: not recorded`,
        hints: [
          "Add a new entry with square brackets: `boiling_points[\"Methanol\"] = 64.7`.",
          "Look a value up the same way: `boiling_points[\"Methanol\"]`. Inside an f-string, use single quotes for the key.",
          "`boiling_points.get(\"Hexane\", \"not recorded\")` returns the default instead of raising a `KeyError`.",
        ],
        solution: `boiling_points = {"Water": 100.0, "Ethanol": 78.4, "Acetone": 56.1}
boiling_points["Methanol"] = 64.7

print(f"Methanol: {boiling_points['Methanol']} °C")
print(f"Solvents recorded: {len(boiling_points)}")
print("Hexane:", boiling_points.get("Hexane", "not recorded"))`,
      },
      physics: {
        title: "Look up surface gravity",
        problem: [
          "The dictionary below maps bodies in the Solar System to their surface gravity in m/s². Add Jupiter, where it is 24.79 m/s².",
          "Then look values up by name, count the entries, and safely check for a body that isn't recorded.",
        ],
        requirements: [
          "Add the key `\"Jupiter\"` with the value `24.79`.",
          "Print `Jupiter: 24.79 m/s²` by looking the value up in the dictionary.",
          "Print `Bodies recorded: 4` using `len()`.",
          "Print `Pluto: not recorded` using `get()` with a default value.",
        ],
        starterCode: `surface_gravity = {"Earth": 9.81, "Mars": 3.71, "Moon": 1.62}

# Add Jupiter, then print the three lines
`,
        expectedOutput: `Jupiter: 24.79 m/s²
Bodies recorded: 4
Pluto: not recorded`,
        hints: [
          "Add a new entry with square brackets: `surface_gravity[\"Jupiter\"] = 24.79`.",
          "Look a value up the same way: `surface_gravity[\"Jupiter\"]`. Inside an f-string, use single quotes for the key.",
          "`surface_gravity.get(\"Pluto\", \"not recorded\")` returns the default instead of raising a `KeyError`.",
        ],
        solution: `surface_gravity = {"Earth": 9.81, "Mars": 3.71, "Moon": 1.62}
surface_gravity["Jupiter"] = 24.79

print(f"Jupiter: {surface_gravity['Jupiter']} m/s²")
print(f"Bodies recorded: {len(surface_gravity)}")
print("Pluto:", surface_gravity.get("Pluto", "not recorded"))`,
      },
      biology: {
        title: "Look up chromosome numbers",
        problem: [
          "The dictionary below maps species to the number of chromosomes in their body cells. Add the chimpanzee, which has 48.",
          "Then look values up by name, count the entries, and safely check for a species that isn't recorded.",
        ],
        requirements: [
          "Add the key `\"Chimpanzee\"` with the value `48`.",
          "Print `Chimpanzee: 48 chromosomes` by looking the value up in the dictionary.",
          "Print `Species recorded: 4` using `len()`.",
          "Print `Cat: not recorded` using `get()` with a default value.",
        ],
        starterCode: `chromosome_counts = {"Human": 46, "Dog": 78, "Fruit fly": 8}

# Add the chimpanzee, then print the three lines
`,
        expectedOutput: `Chimpanzee: 48 chromosomes
Species recorded: 4
Cat: not recorded`,
        hints: [
          "Add a new entry with square brackets: `chromosome_counts[\"Chimpanzee\"] = 48`.",
          "Look a value up the same way: `chromosome_counts[\"Chimpanzee\"]`. Inside an f-string, use single quotes for the key.",
          "`chromosome_counts.get(\"Cat\", \"not recorded\")` returns the default instead of raising a `KeyError`.",
        ],
        solution: `chromosome_counts = {"Human": 46, "Dog": 78, "Fruit fly": 8}
chromosome_counts["Chimpanzee"] = 48

print(f"Chimpanzee: {chromosome_counts['Chimpanzee']} chromosomes")
print(f"Species recorded: {len(chromosome_counts)}")
print("Cat:", chromosome_counts.get("Cat", "not recorded"))`,
      },
      biochemistry: {
        title: "Look up codons",
        problem: [
          "The dictionary below is part of the genetic code: it maps mRNA codons to the amino acids they encode. Add the stop codon `UAA`, which ends translation.",
          "Then look values up by codon, count the entries, and safely check for a codon that isn't recorded.",
        ],
        requirements: [
          "Add the key `\"UAA\"` with the value `\"Stop\"`.",
          "Print `UAA: Stop` by looking the value up in the dictionary.",
          "Print `Codons recorded: 4` using `len()`.",
          "Print `CCC: not recorded` using `get()` with a default value.",
        ],
        starterCode: `codon_table = {"AUG": "Met", "UUU": "Phe", "GGC": "Gly"}

# Add the stop codon, then print the three lines
`,
        expectedOutput: `UAA: Stop
Codons recorded: 4
CCC: not recorded`,
        hints: [
          "Add a new entry with square brackets: `codon_table[\"UAA\"] = \"Stop\"`.",
          "Look a value up the same way: `codon_table[\"UAA\"]`. Inside an f-string, use single quotes for the key.",
          "`codon_table.get(\"CCC\", \"not recorded\")` returns the default instead of raising a `KeyError`.",
        ],
        solution: `codon_table = {"AUG": "Met", "UUU": "Phe", "GGC": "Gly"}
codon_table["UAA"] = "Stop"

print(f"UAA: {codon_table['UAA']}")
print(f"Codons recorded: {len(codon_table)}")
print("CCC:", codon_table.get("CCC", "not recorded"))`,
      },
      "general-programming": {
        title: "Look up stock levels",
        problem: [
          "The dictionary below maps products in a shop to how many are in stock. A delivery of 15 dates has just arrived.",
          "Add them, then look values up by name, count the entries, and safely check for a product that isn't stocked.",
        ],
        requirements: [
          "Add the key `\"dates\"` with the value `15`.",
          "Print `dates: 15 in stock` by looking the value up in the dictionary.",
          "Print `Products recorded: 4` using `len()`.",
          "Print `figs: not stocked` using `get()` with a default value.",
        ],
        starterCode: `stock = {"apples": 40, "bananas": 25, "cherries": 60}

# Add the dates, then print the three lines
`,
        expectedOutput: `dates: 15 in stock
Products recorded: 4
figs: not stocked`,
        hints: [
          "Add a new entry with square brackets: `stock[\"dates\"] = 15`.",
          "Look a value up the same way: `stock[\"dates\"]`. Inside an f-string, use single quotes for the key.",
          "`stock.get(\"figs\", \"not stocked\")` returns the default instead of raising a `KeyError`.",
        ],
        solution: `stock = {"apples": 40, "bananas": 25, "cherries": 60}
stock["dates"] = 15

print(f"dates: {stock['dates']} in stock")
print(f"Products recorded: {len(stock)}")
print("figs:", stock.get("figs", "not stocked"))`,
      },
    },
  },
  {
    moduleSlug: "data-structures",
    lessonSlug: "sets",
    variants: {
      "materials-science": {
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
      chemistry: {
        title: "Compare two molecules",
        problem: [
          "Aspirin and paracetamol are both painkillers built on a benzene ring, but they have different functional groups. Use set operations to compare them.",
          "Sets have no order, so wrap results in `sorted()` to print them alphabetically.",
        ],
        requirements: [
          "Print the groups found in both molecules.",
          "Print the groups found only in aspirin.",
          "Print how many different groups appear across both molecules.",
        ],
        starterCode: `aspirin = {"benzene ring", "carboxylic acid", "ester"}
paracetamol = {"benzene ring", "amide", "phenol"}

# Compare the two molecules
`,
        expectedOutput: `In both: ['benzene ring']
Only in aspirin: ['carboxylic acid', 'ester']
Different groups in total: 5`,
        hints: [
          "`&` gives the intersection (in both), `-` the difference and `|` the union.",
          "`sorted(aspirin & paracetamol)` returns an alphabetical list.",
          "Count the union with `len(aspirin | paracetamol)`. Use `print(\"In both:\", ...)` with a comma for each line.",
        ],
        solution: `aspirin = {"benzene ring", "carboxylic acid", "ester"}
paracetamol = {"benzene ring", "amide", "phenol"}

print("In both:", sorted(aspirin & paracetamol))
print("Only in aspirin:", sorted(aspirin - paracetamol))
print("Different groups in total:", len(aspirin | paracetamol))`,
      },
      physics: {
        title: "Compare two free-body diagrams",
        problem: [
          "A box is pulled up a rough ramp by a rope, and a skydiver is falling through the air. The sets below list the forces acting on each. Use set operations to compare them.",
          "Sets have no order, so wrap results in `sorted()` to print them alphabetically.",
        ],
        requirements: [
          "Print the forces acting on both objects.",
          "Print the forces acting only on the box.",
          "Print how many different forces appear across both diagrams.",
        ],
        starterCode: `box_on_ramp = {"gravity", "normal force", "friction", "tension"}
skydiver = {"gravity", "air resistance"}

# Compare the two diagrams
`,
        expectedOutput: `On both: ['gravity']
Only on the box: ['friction', 'normal force', 'tension']
Different forces in total: 5`,
        hints: [
          "`&` gives the intersection (in both), `-` the difference and `|` the union.",
          "`sorted(box_on_ramp & skydiver)` returns an alphabetical list.",
          "Count the union with `len(box_on_ramp | skydiver)`. Use `print(\"On both:\", ...)` with a comma for each line.",
        ],
        solution: `box_on_ramp = {"gravity", "normal force", "friction", "tension"}
skydiver = {"gravity", "air resistance"}

print("On both:", sorted(box_on_ramp & skydiver))
print("Only on the box:", sorted(box_on_ramp - skydiver))
print("Different forces in total:", len(box_on_ramp | skydiver))`,
      },
      biology: {
        title: "Compare two survey sites",
        problem: [
          "A bird survey recorded the species seen at a woodland site and a garden site. Use set operations to compare them.",
          "Sets have no order, so wrap results in `sorted()` to print them alphabetically.",
        ],
        requirements: [
          "Print the species seen at both sites.",
          "Print the species seen only in the woodland.",
          "Print how many different species appear across both sites.",
        ],
        starterCode: `woodland = {"robin", "wren", "blackbird", "jay"}
garden = {"robin", "blackbird", "sparrow"}

# Compare the two sites
`,
        expectedOutput: `In both: ['blackbird', 'robin']
Only in the woodland: ['jay', 'wren']
Different species in total: 5`,
        hints: [
          "`&` gives the intersection (in both), `-` the difference and `|` the union.",
          "`sorted(woodland & garden)` returns an alphabetical list.",
          "Count the union with `len(woodland | garden)`. Use `print(\"In both:\", ...)` with a comma for each line.",
        ],
        solution: `woodland = {"robin", "wren", "blackbird", "jay"}
garden = {"robin", "blackbird", "sparrow"}

print("In both:", sorted(woodland & garden))
print("Only in the woodland:", sorted(woodland - garden))
print("Different species in total:", len(woodland | garden))`,
      },
      biochemistry: {
        title: "Compare two peptides",
        problem: [
          "Two peptides were analysed to find which amino acids they contain. Use set operations to compare them.",
          "Sets have no order, so wrap results in `sorted()` to print them alphabetically.",
        ],
        requirements: [
          "Print the amino acids found in both peptides.",
          "Print the amino acids found only in peptide A.",
          "Print how many different amino acids appear across both peptides.",
        ],
        starterCode: `peptide_a = {"Gly", "Ala", "Ser", "Cys"}
peptide_b = {"Gly", "Ala", "Lys"}

# Compare the two peptides
`,
        expectedOutput: `In both: ['Ala', 'Gly']
Only in peptide A: ['Cys', 'Ser']
Different amino acids in total: 5`,
        hints: [
          "`&` gives the intersection (in both), `-` the difference and `|` the union.",
          "`sorted(peptide_a & peptide_b)` returns an alphabetical list.",
          "Count the union with `len(peptide_a | peptide_b)`. Use `print(\"In both:\", ...)` with a comma for each line.",
        ],
        solution: `peptide_a = {"Gly", "Ala", "Ser", "Cys"}
peptide_b = {"Gly", "Ala", "Lys"}

print("In both:", sorted(peptide_a & peptide_b))
print("Only in peptide A:", sorted(peptide_a - peptide_b))
print("Different amino acids in total:", len(peptide_a | peptide_b))`,
      },
      "general-programming": {
        title: "Compare two club lists",
        problem: [
          "A school has a chess club and a coding club. Use set operations to compare who is in each.",
          "Sets have no order, so wrap results in `sorted()` to print them alphabetically.",
        ],
        requirements: [
          "Print the students in both clubs.",
          "Print the students only in the chess club.",
          "Print how many different students are in at least one club.",
        ],
        starterCode: `chess_club = {"Ana", "Ben", "Chloe", "Dev"}
coding_club = {"Ben", "Chloe", "Eli"}

# Compare the two clubs
`,
        expectedOutput: `In both: ['Ben', 'Chloe']
Only in chess club: ['Ana', 'Dev']
Different students in total: 5`,
        hints: [
          "`&` gives the intersection (in both), `-` the difference and `|` the union.",
          "`sorted(chess_club & coding_club)` returns an alphabetical list.",
          "Count the union with `len(chess_club | coding_club)`. Use `print(\"In both:\", ...)` with a comma for each line.",
        ],
        solution: `chess_club = {"Ana", "Ben", "Chloe", "Dev"}
coding_club = {"Ben", "Chloe", "Eli"}

print("In both:", sorted(chess_club & coding_club))
print("Only in chess club:", sorted(chess_club - coding_club))
print("Different students in total:", len(chess_club | coding_club))`,
      },
    },
  },
];
