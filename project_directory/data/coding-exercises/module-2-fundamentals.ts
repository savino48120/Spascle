import type { CodingExercise } from "@/types/lesson";

/** Hands-on coding exercises for Module 2 (Python Fundamentals), with a version for every scientific context. */
export const MODULE_2_CODING_EXERCISES: CodingExercise[] = [
  {
    moduleSlug: "python-fundamentals",
    lessonSlug: "variables-and-data-types",
    variants: {
      "materials-science": {
        title: "Density of an aluminium block",
        problem: [
          "An aluminium block has a mass of `27.0` grams and a volume of `10.0` cm³. Density is mass divided by volume.",
          "Store the values in variables, calculate the density, and print it. Then print the data type of the result.",
        ],
        requirements: [
          "Create variables named `mass`, `volume` and `density`.",
          "Print `Density: 2.7 g/cm³`, using `round()` to round the density to 2 decimal places.",
          "Print the type of `density`.",
        ],
        starterCode: `mass = 27.0     # grams
volume = 10.0   # cm³

# Calculate the density, then print it and its type
`,
        expectedOutput: `Density: 2.7 g/cm³
<class 'float'>`,
        hints: [
          "Divide with `/`: `density = mass / volume`.",
          "`print()` can show several values separated by commas: `print(\"Density:\", round(density, 2), \"g/cm³\")`.",
          "`type(density)` gives the data type. Wrap it in `print()` to see it.",
        ],
        solution: `mass = 27.0     # grams
volume = 10.0   # cm³

density = mass / volume
print("Density:", round(density, 2), "g/cm³")
print(type(density))`,
      },
      chemistry: {
        title: "Concentration of a salt solution",
        problem: [
          "A solution contains `0.25` mol of sodium chloride dissolved in `0.5` L of water. Concentration is the amount of substance divided by the volume.",
          "Store the values in variables, calculate the concentration, and print it. Then print the data type of the result.",
        ],
        requirements: [
          "Create variables named `moles`, `volume` and `concentration`.",
          "Print `Concentration: 0.5 mol/L`, using `round()` to round the concentration to 2 decimal places.",
          "Print the type of `concentration`.",
        ],
        starterCode: `moles = 0.25    # mol of NaCl
volume = 0.5    # litres

# Calculate the concentration, then print it and its type
`,
        expectedOutput: `Concentration: 0.5 mol/L
<class 'float'>`,
        hints: [
          "Divide with `/`: `concentration = moles / volume`.",
          "`print()` can show several values separated by commas: `print(\"Concentration:\", round(concentration, 2), \"mol/L\")`.",
          "`type(concentration)` gives the data type. Wrap it in `print()` to see it.",
        ],
        solution: `moles = 0.25    # mol of NaCl
volume = 0.5    # litres

concentration = moles / volume
print("Concentration:", round(concentration, 2), "mol/L")
print(type(concentration))`,
      },
      physics: {
        title: "Speed of a cyclist",
        problem: [
          "A cyclist covers `150.0` metres in `12.0` seconds. Average speed is distance divided by time.",
          "Store the values in variables, calculate the speed, and print it. Then print the data type of the result.",
        ],
        requirements: [
          "Create variables named `distance`, `time` and `speed`.",
          "Print `Speed: 12.5 m/s`, using `round()` to round the speed to 2 decimal places.",
          "Print the type of `speed`.",
        ],
        starterCode: `distance = 150.0   # metres
time = 12.0        # seconds

# Calculate the speed, then print it and its type
`,
        expectedOutput: `Speed: 12.5 m/s
<class 'float'>`,
        hints: [
          "Divide with `/`: `speed = distance / time`.",
          "`print()` can show several values separated by commas: `print(\"Speed:\", round(speed, 2), \"m/s\")`.",
          "`type(speed)` gives the data type. Wrap it in `print()` to see it.",
        ],
        solution: `distance = 150.0   # metres
time = 12.0        # seconds

speed = distance / time
print("Speed:", round(speed, 2), "m/s")
print(type(speed))`,
      },
      biology: {
        title: "Plant density in a quadrat",
        problem: [
          "A survey counted `84` daisies in a `12.0` m² area of a meadow. Population density is the number of individuals divided by the area.",
          "Store the values in variables, calculate the density, and print it. Then print the data type of the result.",
        ],
        requirements: [
          "Create variables named `plant_count`, `area` and `density`.",
          "Print `Density: 7.0 plants/m²`, using `round()` to round the density to 2 decimal places.",
          "Print the type of `density`. Notice that dividing an `int` by a `float` gives a `float`.",
        ],
        starterCode: `plant_count = 84   # daisies counted
area = 12.0        # m²

# Calculate the density, then print it and its type
`,
        expectedOutput: `Density: 7.0 plants/m²
<class 'float'>`,
        hints: [
          "Divide with `/`: `density = plant_count / area`.",
          "`print()` can show several values separated by commas: `print(\"Density:\", round(density, 2), \"plants/m²\")`.",
          "`type(density)` gives the data type. Wrap it in `print()` to see it.",
        ],
        solution: `plant_count = 84   # daisies counted
area = 12.0        # m²

density = plant_count / area
print("Density:", round(density, 2), "plants/m²")
print(type(density))`,
      },
      biochemistry: {
        title: "Concentration of a protein sample",
        problem: [
          "You dissolved `2.5` mg of lysozyme in `2.0` mL of buffer. Concentration is mass divided by volume.",
          "Store the values in variables, calculate the concentration, and print it. Then print the data type of the result.",
        ],
        requirements: [
          "Create variables named `mass`, `volume` and `concentration`.",
          "Print `Concentration: 1.25 mg/mL`, using `round()` to round the concentration to 2 decimal places.",
          "Print the type of `concentration`.",
        ],
        starterCode: `mass = 2.5      # mg of lysozyme
volume = 2.0    # mL of buffer

# Calculate the concentration, then print it and its type
`,
        expectedOutput: `Concentration: 1.25 mg/mL
<class 'float'>`,
        hints: [
          "Divide with `/`: `concentration = mass / volume`.",
          "`print()` can show several values separated by commas: `print(\"Concentration:\", round(concentration, 2), \"mg/mL\")`.",
          "`type(concentration)` gives the data type. Wrap it in `print()` to see it.",
        ],
        solution: `mass = 2.5      # mg of lysozyme
volume = 2.0    # mL of buffer

concentration = mass / volume
print("Concentration:", round(concentration, 2), "mg/mL")
print(type(concentration))`,
      },
      "general-programming": {
        title: "Price per item",
        problem: [
          "A pack of `8` pens costs `12.0`. The price per item is the total cost divided by the number of items.",
          "Store the values in variables, calculate the price per item, and print it. Then print the data type of the result.",
        ],
        requirements: [
          "Create variables named `total_cost`, `item_count` and `price_per_item`.",
          "Print `Price per item: 1.5`, using `round()` to round the price to 2 decimal places.",
          "Print the type of `price_per_item`.",
        ],
        starterCode: `total_cost = 12.0
item_count = 8

# Calculate the price per item, then print it and its type
`,
        expectedOutput: `Price per item: 1.5
<class 'float'>`,
        hints: [
          "Divide with `/`: `price_per_item = total_cost / item_count`.",
          "`print()` can show several values separated by commas: `print(\"Price per item:\", round(price_per_item, 2))`.",
          "`type(price_per_item)` gives the data type. Wrap it in `print()` to see it.",
        ],
        solution: `total_cost = 12.0
item_count = 8

price_per_item = total_cost / item_count
print("Price per item:", round(price_per_item, 2))
print(type(price_per_item))`,
      },
    },
  },
  {
    moduleSlug: "python-fundamentals",
    lessonSlug: "operators-and-expressions",
    variants: {
      "materials-science": {
        title: "Convert a lab temperature",
        problem: [
          "The lab is at 25 °C. Convert this temperature to kelvin and to Fahrenheit, then check whether it is above 300 K.",
          "Kelvin = °C + 273.15. Fahrenheit = °C × 9 / 5 + 32.",
        ],
        requirements: [
          "Print `Kelvin: 298.15`, rounded to 2 decimal places with `round()`.",
          "Print `Fahrenheit: 77.0`, rounded to 1 decimal place.",
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
          "A comparison such as `kelvin > 300` gives `True` or `False`. Print it directly. Use `print(\"Kelvin:\", round(kelvin, 2))` for the first line.",
        ],
        solution: `temperature_c = 25

kelvin = temperature_c + 273.15
fahrenheit = temperature_c * 9 / 5 + 32

print("Kelvin:", round(kelvin, 2))
print("Fahrenheit:", round(fahrenheit, 1))
print(kelvin > 300)`,
      },
      chemistry: {
        title: "Pressure of a gas",
        problem: [
          "A sealed flask holds `0.5` mol of nitrogen at `298` K in a volume of `0.0124` m³. The ideal gas law gives its pressure: P = nRT / V, with R = 8.314 J/(mol·K).",
          "Calculate the pressure in kPa and in atmospheres (1 atm = 101.325 kPa), then check whether it is above atmospheric pressure.",
        ],
        requirements: [
          "Print `Pressure: 99.9 kPa`, rounded to 1 decimal place with `round()`.",
          "Print `Pressure: 0.99 atm`, rounded to 2 decimal places.",
          "Print the result of comparing the pressure in kPa with `101.325` using `>`.",
        ],
        starterCode: `n = 0.5          # mol
temperature = 298    # K
volume = 0.0124  # m³
R = 8.314        # J/(mol·K)

# Calculate the pressure in kPa and atm, then compare with 1 atm
`,
        expectedOutput: `Pressure: 99.9 kPa
Pressure: 0.99 atm
False`,
        hints: [
          "Multiplication and division are worked out from left to right, so `n * R * temperature / volume` needs no brackets. The result is in pascals.",
          "Divide by `1000` for kPa, then divide the kPa value by `101.325` for atmospheres.",
          "A comparison such as `pressure_kpa > 101.325` gives `True` or `False`. Print it directly.",
        ],
        solution: `n = 0.5          # mol
temperature = 298    # K
volume = 0.0124  # m³
R = 8.314        # J/(mol·K)

pressure_kpa = n * R * temperature / volume / 1000
pressure_atm = pressure_kpa / 101.325

print("Pressure:", round(pressure_kpa, 1), "kPa")
print("Pressure:", round(pressure_atm, 2), "atm")
print(pressure_kpa > 101.325)`,
      },
      physics: {
        title: "Kinetic and potential energy",
        problem: [
          "A `2.0` kg ball is moving at `3.0` m/s at a height of `1.5` m above the ground.",
          "Kinetic energy = ½ × m × v². Gravitational potential energy = m × g × h, with g = 9.81 m/s². Calculate both, then check which is larger.",
        ],
        requirements: [
          "Print `Kinetic energy: 9.0 J`, rounded to 2 decimal places with `round()`.",
          "Print `Potential energy: 29.43 J`, rounded to 2 decimal places.",
          "Print the result of comparing the kinetic energy with the potential energy using `>`.",
        ],
        starterCode: `mass = 2.0       # kg
velocity = 3.0   # m/s
height = 1.5     # m
g = 9.81         # m/s²

# Calculate both energies, then compare them
`,
        expectedOutput: `Kinetic energy: 9.0 J
Potential energy: 29.43 J
False`,
        hints: [
          "`**` is worked out before `*`, so `0.5 * mass * velocity ** 2` squares only the velocity.",
          "Potential energy is `mass * g * height`.",
          "A comparison such as `kinetic > potential` gives `True` or `False`. Print it directly.",
        ],
        solution: `mass = 2.0       # kg
velocity = 3.0   # m/s
height = 1.5     # m
g = 9.81         # m/s²

kinetic = 0.5 * mass * velocity ** 2
potential = mass * g * height

print("Kinetic energy:", round(kinetic, 2), "J")
print("Potential energy:", round(potential, 2), "J")
print(kinetic > potential)`,
      },
      biology: {
        title: "Bacterial growth overnight",
        problem: [
          "A culture starts with `500` bacteria that divide every `20` minutes. Over `6` hours, how many complete generations are there, and how many cells result?",
          "Number of generations = total minutes ÷ doubling time (whole generations only). Cells = starting cells × 2^generations.",
        ],
        requirements: [
          "Use `//` to calculate the whole number of generations and print `Generations: 18`.",
          "Use `**` to calculate the final cell count and print `Cells: 131072000`.",
          "Print the result of comparing the cell count with `100_000_000` using `>`.",
        ],
        starterCode: `starting_cells = 500
doubling_time = 20   # minutes
hours = 6

# Work out the generations and the final cell count, then compare with 100 million
`,
        expectedOutput: `Generations: 18
Cells: 131072000
True`,
        hints: [
          "Convert the hours to minutes first: `hours * 60`.",
          "`//` gives the whole-number part of a division: `generations = hours * 60 // doubling_time`.",
          "`**` is worked out before `*`, so `starting_cells * 2 ** generations` needs no brackets.",
        ],
        solution: `starting_cells = 500
doubling_time = 20   # minutes
hours = 6

generations = hours * 60 // doubling_time
cells = starting_cells * 2 ** generations

print("Generations:", generations)
print("Cells:", cells)
print(cells > 100_000_000)`,
      },
      biochemistry: {
        title: "Diluting a stock solution",
        problem: [
          "You need `50` mL of `0.25` M Tris buffer, made from a `2.0` M stock solution. The dilution equation C₁V₁ = C₂V₂ gives the volume of stock to use: V₁ = C₂ × V₂ / C₁.",
          "Calculate the volume of stock and the volume of water to add, then check whether the stock volume is less than 10 mL.",
        ],
        requirements: [
          "Print `Stock: 6.25 mL`, rounded to 2 decimal places with `round()`.",
          "Print `Water: 43.75 mL`, rounded to 2 decimal places.",
          "Print the result of comparing the stock volume with `10` using `<`.",
        ],
        starterCode: `stock_concentration = 2.0    # M
target_concentration = 0.25  # M
final_volume = 50            # mL

# Calculate the stock and water volumes, then compare with 10 mL
`,
        expectedOutput: `Stock: 6.25 mL
Water: 43.75 mL
True`,
        hints: [
          "Multiplication and division are worked out from left to right: `target_concentration * final_volume / stock_concentration`.",
          "The water makes up the rest of the final volume: `final_volume - stock_volume`.",
          "A comparison such as `stock_volume < 10` gives `True` or `False`. Print it directly.",
        ],
        solution: `stock_concentration = 2.0    # M
target_concentration = 0.25  # M
final_volume = 50            # mL

stock_volume = target_concentration * final_volume / stock_concentration
water_volume = final_volume - stock_volume

print("Stock:", round(stock_volume, 2), "mL")
print("Water:", round(water_volume, 2), "mL")
print(stock_volume < 10)`,
      },
      "general-programming": {
        title: "Split a restaurant bill",
        problem: [
          "A meal for `4` people costs `80.0` before a `15`% tip. Work out the total with the tip, and how much each person pays.",
          "Total = bill × (1 + tip ÷ 100). Then check whether each share is more than 25.",
        ],
        requirements: [
          "Print `Total: 92.0`, rounded to 2 decimal places with `round()`.",
          "Print `Each person: 23.0`, rounded to 2 decimal places.",
          "Print the result of comparing each person's share with `25` using `>`.",
        ],
        starterCode: `bill = 80.0
tip_percent = 15
people = 4

# Calculate the total and each person's share, then compare with 25
`,
        expectedOutput: `Total: 92.0
Each person: 23.0
False`,
        hints: [
          "Brackets are worked out first, so `bill * (1 + tip_percent / 100)` adds the tip before multiplying.",
          "Each share is `total / people`.",
          "A comparison such as `share > 25` gives `True` or `False`. Print it directly.",
        ],
        solution: `bill = 80.0
tip_percent = 15
people = 4

total = bill * (1 + tip_percent / 100)
share = total / people

print("Total:", round(total, 2))
print("Each person:", round(share, 2))
print(share > 25)`,
      },
    },
  },
  {
    moduleSlug: "python-fundamentals",
    lessonSlug: "strings",
    variants: {
      "materials-science": {
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
      chemistry: {
        title: "Clean up a compound name",
        problem: [
          "Compound names exported from a lab inventory often have extra spaces and inconsistent capitals. The name below came out as `\"  potassium nitrate  \"`.",
          "Tidy it up, then print some information about the cleaned name.",
        ],
        requirements: [
          "Remove the spaces at both ends and capitalise each word, giving `Potassium Nitrate`.",
          "Print the cleaned name.",
          "Print `First letter: P` using indexing.",
          "Print `Length: 17` using `len()`.",
        ],
        starterCode: `raw_name = "  potassium nitrate  "

# Clean the name, then print the three lines
`,
        expectedOutput: `Potassium Nitrate
First letter: P
Length: 17`,
        hints: [
          "`.strip()` removes spaces from both ends and `.title()` capitalises each word. You can chain them.",
          "The first character of a string is at index `0`, for example `compound_name[0]`.",
          "`compound_name = raw_name.strip().title()`, then use f-strings for the last two lines.",
        ],
        solution: `raw_name = "  potassium nitrate  "

compound_name = raw_name.strip().title()
print(compound_name)
print(f"First letter: {compound_name[0]}")
print(f"Length: {len(compound_name)}")`,
      },
      physics: {
        title: "Clean up a quantity name",
        problem: [
          "Quantity names copied from a lab spreadsheet often have extra spaces and inconsistent capitals. The name below came out as `\"  angular momentum  \"`.",
          "Tidy it up, then print some information about the cleaned name.",
        ],
        requirements: [
          "Remove the spaces at both ends and capitalise each word, giving `Angular Momentum`.",
          "Print the cleaned name.",
          "Print `First letter: A` using indexing.",
          "Print `Length: 16` using `len()`.",
        ],
        starterCode: `raw_name = "  angular momentum  "

# Clean the name, then print the three lines
`,
        expectedOutput: `Angular Momentum
First letter: A
Length: 16`,
        hints: [
          "`.strip()` removes spaces from both ends and `.title()` capitalises each word. You can chain them.",
          "The first character of a string is at index `0`, for example `quantity_name[0]`.",
          "`quantity_name = raw_name.strip().title()`, then use f-strings for the last two lines.",
        ],
        solution: `raw_name = "  angular momentum  "

quantity_name = raw_name.strip().title()
print(quantity_name)
print(f"First letter: {quantity_name[0]}")
print(f"Length: {len(quantity_name)}")`,
      },
      biology: {
        title: "Clean up a gene symbol",
        problem: [
          "Human gene symbols are written in capitals, but symbols typed into a spreadsheet often aren't. The symbol below came out as `\"  brca1  \"`.",
          "Tidy it up, then print some information about the cleaned symbol.",
        ],
        requirements: [
          "Remove the spaces at both ends and convert it to capitals, giving `BRCA1`.",
          "Print the cleaned symbol.",
          "Print `First letter: B` using indexing.",
          "Print `Length: 5` using `len()`.",
        ],
        starterCode: `raw_symbol = "  brca1  "

# Clean the symbol, then print the three lines
`,
        expectedOutput: `BRCA1
First letter: B
Length: 5`,
        hints: [
          "`.strip()` removes spaces from both ends and `.upper()` converts every letter to a capital. You can chain them.",
          "The first character of a string is at index `0`, for example `gene_symbol[0]`.",
          "`gene_symbol = raw_symbol.strip().upper()`, then use f-strings for the last two lines.",
        ],
        solution: `raw_symbol = "  brca1  "

gene_symbol = raw_symbol.strip().upper()
print(gene_symbol)
print(f"First letter: {gene_symbol[0]}")
print(f"Length: {len(gene_symbol)}")`,
      },
      biochemistry: {
        title: "Clean up a peptide sequence",
        problem: [
          "Protein sequences use one capital letter per amino acid, but a sequence pasted from a notebook came out as `\"  mktayiakqr  \"`.",
          "Tidy it up, then print some information about the cleaned sequence.",
        ],
        requirements: [
          "Remove the spaces at both ends and convert it to capitals, giving `MKTAYIAKQR`.",
          "Print the cleaned sequence.",
          "Print `First residue: M` using indexing.",
          "Print `Length: 10` using `len()`.",
        ],
        starterCode: `raw_sequence = "  mktayiakqr  "

# Clean the sequence, then print the three lines
`,
        expectedOutput: `MKTAYIAKQR
First residue: M
Length: 10`,
        hints: [
          "`.strip()` removes spaces from both ends and `.upper()` converts every letter to a capital. You can chain them.",
          "The first character of a string is at index `0`, for example `sequence[0]`.",
          "`sequence = raw_sequence.strip().upper()`, then use f-strings for the last two lines.",
        ],
        solution: `raw_sequence = "  mktayiakqr  "

sequence = raw_sequence.strip().upper()
print(sequence)
print(f"First residue: {sequence[0]}")
print(f"Length: {len(sequence)}")`,
      },
      "general-programming": {
        title: "Clean up a customer name",
        problem: [
          "Names typed into a sign-up form often have extra spaces and inconsistent capitals. The name below came in as `\"  ada lovelace  \"`.",
          "Tidy it up, then print some information about the cleaned name.",
        ],
        requirements: [
          "Remove the spaces at both ends and capitalise each word, giving `Ada Lovelace`.",
          "Print the cleaned name.",
          "Print `First letter: A` using indexing.",
          "Print `Length: 12` using `len()`.",
        ],
        starterCode: `raw_name = "  ada lovelace  "

# Clean the name, then print the three lines
`,
        expectedOutput: `Ada Lovelace
First letter: A
Length: 12`,
        hints: [
          "`.strip()` removes spaces from both ends and `.title()` capitalises each word. You can chain them.",
          "The first character of a string is at index `0`, for example `customer_name[0]`.",
          "`customer_name = raw_name.strip().title()`, then use f-strings for the last two lines.",
        ],
        solution: `raw_name = "  ada lovelace  "

customer_name = raw_name.strip().title()
print(customer_name)
print(f"First letter: {customer_name[0]}")
print(f"Length: {len(customer_name)}")`,
      },
    },
  },
  {
    moduleSlug: "python-fundamentals",
    lessonSlug: "input-and-output",
    variants: {
      "materials-science": {
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
      chemistry: {
        title: "Molarity calculator",
        problem: [
          "Write a program that asks for the amount of a solute in moles and the volume of solution in litres, then prints the concentration.",
          "The program input is already filled in: 0.15 mol in 0.25 L. You can change it to test other solutions.",
        ],
        requirements: [
          "Read the amount, then the volume, with `input()`.",
          "Convert both values to numbers with `float()`.",
          "Print `Concentration: 0.60 mol/L` (2 decimal places) for the given input.",
        ],
        starterCode: `# Ask for the amount and volume, then print the concentration
`,
        stdin: `0.15
0.25`,
        expectedOutput: "Concentration: 0.60 mol/L",
        hints: [
          "`input(\"Amount (mol): \")` shows a prompt and returns what was typed, as a string.",
          "Strings can't be divided. Wrap the input in `float()` to get a number: `moles = float(input(\"Amount (mol): \"))`.",
          "After reading both values, `concentration = moles / volume`, then print it with an f-string and `:.2f`.",
        ],
        solution: `moles = float(input("Amount (mol): "))
volume = float(input("Volume (L): "))

concentration = moles / volume
print(f"Concentration: {concentration:.2f} mol/L")`,
      },
      physics: {
        title: "Speed calculator",
        problem: [
          "Write a program that asks for a distance and a time, then prints the average speed.",
          "The program input is already filled in with a 100 m sprint run in 9.58 s. You can change it to test other runs.",
        ],
        requirements: [
          "Read the distance, then the time, with `input()`.",
          "Convert both values to numbers with `float()`.",
          "Print `Speed: 10.44 m/s` (2 decimal places) for the given input.",
        ],
        starterCode: `# Ask for the distance and time, then print the speed
`,
        stdin: `100
9.58`,
        expectedOutput: "Speed: 10.44 m/s",
        hints: [
          "`input(\"Distance (m): \")` shows a prompt and returns what was typed, as a string.",
          "Strings can't be divided. Wrap the input in `float()` to get a number: `distance = float(input(\"Distance (m): \"))`.",
          "After reading both values, `speed = distance / time`, then print it with an f-string and `:.2f`.",
        ],
        solution: `distance = float(input("Distance (m): "))
time = float(input("Time (s): "))

speed = distance / time
print(f"Speed: {speed:.2f} m/s")`,
      },
      biology: {
        title: "Heart rate calculator",
        problem: [
          "To measure a pulse, you count the beats over a short time. Write a program that asks for the number of beats and the number of seconds, then prints the heart rate in beats per minute.",
          "The program input is already filled in: 18 beats in 15 seconds. You can change it to test other readings.",
        ],
        requirements: [
          "Read the number of beats, then the number of seconds, with `input()`.",
          "Convert both values to numbers with `float()`.",
          "Print `Heart rate: 72 bpm` (no decimal places) for the given input.",
        ],
        starterCode: `# Ask for the beats and seconds, then print the heart rate
`,
        stdin: `18
15`,
        expectedOutput: "Heart rate: 72 bpm",
        hints: [
          "`input(\"Beats counted: \")` shows a prompt and returns what was typed, as a string.",
          "Strings can't be divided. Wrap the input in `float()` to get a number: `beats = float(input(\"Beats counted: \"))`.",
          "Beats per minute is `beats / seconds * 60`. Print it with an f-string and `:.0f`.",
        ],
        solution: `beats = float(input("Beats counted: "))
seconds = float(input("Seconds: "))

heart_rate = beats / seconds * 60
print(f"Heart rate: {heart_rate:.0f} bpm")`,
      },
      biochemistry: {
        title: "Enzyme rate calculator",
        problem: [
          "The rate of an enzyme reaction is how much product it makes per minute. Write a program that asks for the amount of product formed and the time taken, then prints the rate.",
          "The program input is already filled in: 15.0 µmol of product in 6 minutes. You can change it to test other runs.",
        ],
        requirements: [
          "Read the amount of product, then the time, with `input()`.",
          "Convert both values to numbers with `float()`.",
          "Print `Rate: 2.50 µmol/min` (2 decimal places) for the given input.",
        ],
        starterCode: `# Ask for the product formed and the time, then print the rate
`,
        stdin: `15.0
6`,
        expectedOutput: "Rate: 2.50 µmol/min",
        hints: [
          "`input(\"Product formed (µmol): \")` shows a prompt and returns what was typed, as a string.",
          "Strings can't be divided. Wrap the input in `float()` to get a number: `product = float(input(\"Product formed (µmol): \"))`.",
          "After reading both values, `rate = product / minutes`, then print it with an f-string and `:.2f`.",
        ],
        solution: `product = float(input("Product formed (µmol): "))
minutes = float(input("Time (min): "))

rate = product / minutes
print(f"Rate: {rate:.2f} µmol/min")`,
      },
      "general-programming": {
        title: "Unit price calculator",
        problem: [
          "Write a program that asks for the price of a multipack and the number of items in it, then prints the price of one item.",
          "The program input is already filled in: a pack of 3 costing 7.50. You can change it to compare other packs.",
        ],
        requirements: [
          "Read the price, then the number of items, with `input()`.",
          "Convert both values to numbers with `float()`.",
          "Print `Price per item: 2.50` (2 decimal places) for the given input.",
        ],
        starterCode: `# Ask for the price and number of items, then print the price per item
`,
        stdin: `7.50
3`,
        expectedOutput: "Price per item: 2.50",
        hints: [
          "`input(\"Pack price: \")` shows a prompt and returns what was typed, as a string.",
          "Strings can't be divided. Wrap the input in `float()` to get a number: `price = float(input(\"Pack price: \"))`.",
          "After reading both values, `unit_price = price / items`, then print it with an f-string and `:.2f`.",
        ],
        solution: `price = float(input("Pack price: "))
items = float(input("Items in pack: "))

unit_price = price / items
print(f"Price per item: {unit_price:.2f}")`,
      },
    },
  },
];
