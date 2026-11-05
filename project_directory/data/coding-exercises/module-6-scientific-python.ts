import type { CodingExercise } from "@/types/lesson";

/** Hands-on coding exercises for Module 6 (Scientific Python), with a version for every scientific context. */
export const MODULE_6_CODING_EXERCISES: CodingExercise[] = [
  {
    moduleSlug: "scientific-python",
    lessonSlug: "introduction-to-numpy",
    variants: {
      "materials-science": {
        title: "A heat-treatment schedule in kelvin",
        problem: [
          "A heat-treatment schedule holds a sample at 25, 150, 300, 450 and 600 °C.",
          "Use a NumPy array to convert every temperature to kelvin in one step, without a loop, then work out the mean temperature.",
        ],
        requirements: [
          "Import NumPy as `np`.",
          "Create an array of the five temperatures in °C.",
          "Print the array converted to kelvin.",
          "Print `Mean: 578.15 K` using `np.mean()` (2 decimal places).",
        ],
        starterCode: `# Import NumPy, then convert the schedule to kelvin
`,
        expectedOutput: `[298.15 423.15 573.15 723.15 873.15]
Mean: 578.15 K`,
        hints: [
          "Start with `import numpy as np`, then `celsius = np.array([25, 150, 300, 450, 600])`.",
          "Adding a number to an array adds it to every element: `kelvin = celsius + 273.15`.",
          "`print(f\"Mean: {np.mean(kelvin):.2f} K\")`",
        ],
        solution: `import numpy as np

celsius = np.array([25, 150, 300, 450, 600])
kelvin = celsius + 273.15

print(kelvin)
print(f"Mean: {np.mean(kelvin):.2f} K")`,
      },
      chemistry: {
        title: "Moles of salt in several samples",
        problem: [
          "Four samples of sodium chloride (molar mass 58.44 g/mol) weigh 5.844, 11.688, 29.22 and 58.44 g.",
          "Use a NumPy array to convert every mass to an amount in moles in one step, without a loop, then work out the mean amount.",
        ],
        requirements: [
          "Import NumPy as `np`.",
          "Create an array of the four masses in grams.",
          "Print the array converted to moles.",
          "Print `Mean: 0.45 mol` using `np.mean()` (2 decimal places).",
        ],
        starterCode: `# Import NumPy, then convert the masses to moles
`,
        expectedOutput: `[0.1 0.2 0.5 1. ]
Mean: 0.45 mol`,
        hints: [
          "Start with `import numpy as np`, then `masses = np.array([5.844, 11.688, 29.22, 58.44])`.",
          "Dividing an array by a number divides every element: `moles = masses / 58.44`.",
          "`print(f\"Mean: {np.mean(moles):.2f} mol\")`",
        ],
        solution: `import numpy as np

masses = np.array([5.844, 11.688, 29.22, 58.44])
moles = masses / 58.44

print(moles)
print(f"Mean: {np.mean(moles):.2f} mol")`,
      },
      physics: {
        title: "A set of speeds in m/s",
        problem: [
          "A radar gun recorded five vehicles at 36, 54, 72, 90 and 108 km/h.",
          "Use a NumPy array to convert every speed to m/s in one step, without a loop, then work out the mean speed.",
        ],
        requirements: [
          "Import NumPy as `np`.",
          "Create an array of the five speeds in km/h.",
          "Print the array converted to m/s (divide by 3.6).",
          "Print `Mean: 20.00 m/s` using `np.mean()` (2 decimal places).",
        ],
        starterCode: `# Import NumPy, then convert the speeds to m/s
`,
        expectedOutput: `[10. 15. 20. 25. 30.]
Mean: 20.00 m/s`,
        hints: [
          "Start with `import numpy as np`, then `speeds_kmh = np.array([36, 54, 72, 90, 108])`.",
          "Dividing an array by a number divides every element: `speeds_ms = speeds_kmh / 3.6`.",
          "`print(f\"Mean: {np.mean(speeds_ms):.2f} m/s\")`",
        ],
        solution: `import numpy as np

speeds_kmh = np.array([36, 54, 72, 90, 108])
speeds_ms = speeds_kmh / 3.6

print(speeds_ms)
print(f"Mean: {np.mean(speeds_ms):.2f} m/s")`,
      },
      biology: {
        title: "Plant heights in millimetres",
        problem: [
          "Four seedlings in a growth trial measured 12.5, 14.0, 9.5 and 11.0 cm.",
          "Use a NumPy array to convert every height to millimetres in one step, without a loop, then work out the mean height.",
        ],
        requirements: [
          "Import NumPy as `np`.",
          "Create an array of the four heights in cm.",
          "Print the array converted to mm (multiply by 10).",
          "Print `Mean: 117.50 mm` using `np.mean()` (2 decimal places).",
        ],
        starterCode: `# Import NumPy, then convert the heights to mm
`,
        expectedOutput: `[125. 140.  95. 110.]
Mean: 117.50 mm`,
        hints: [
          "Start with `import numpy as np`, then `heights_cm = np.array([12.5, 14.0, 9.5, 11.0])`.",
          "Multiplying an array by a number multiplies every element: `heights_mm = heights_cm * 10`.",
          "`print(f\"Mean: {np.mean(heights_mm):.2f} mm\")`",
        ],
        solution: `import numpy as np

heights_cm = np.array([12.5, 14.0, 9.5, 11.0])
heights_mm = heights_cm * 10

print(heights_mm)
print(f"Mean: {np.mean(heights_mm):.2f} mm")`,
      },
      biochemistry: {
        title: "Protein masses in kilodaltons",
        problem: [
          "Four proteins have molecular masses of 14300 Da (lysozyme), 66500 Da (serum albumin), 150000 Da (an antibody) and 44300 Da (ovalbumin).",
          "Use a NumPy array to convert every mass to kilodaltons (kDa) in one step, without a loop, then work out the mean mass.",
        ],
        requirements: [
          "Import NumPy as `np`.",
          "Create an array of the four masses in daltons.",
          "Print the array converted to kDa (divide by 1000).",
          "Print `Mean: 68.78 kDa` using `np.mean()` (2 decimal places).",
        ],
        starterCode: `# Import NumPy, then convert the masses to kDa
`,
        expectedOutput: `[ 14.3  66.5 150.   44.3]
Mean: 68.78 kDa`,
        hints: [
          "Start with `import numpy as np`, then `masses_da = np.array([14300, 66500, 150000, 44300])`.",
          "Dividing an array by a number divides every element: `masses_kda = masses_da / 1000`.",
          "`print(f\"Mean: {np.mean(masses_kda):.2f} kDa\")`",
        ],
        solution: `import numpy as np

masses_da = np.array([14300, 66500, 150000, 44300])
masses_kda = masses_da / 1000

print(masses_kda)
print(f"Mean: {np.mean(masses_kda):.2f} kDa")`,
      },
      "general-programming": {
        title: "Sale prices",
        problem: [
          "A shop is taking 10% off four products priced 20.00, 35.00, 50.00 and 12.50.",
          "Use a NumPy array to work out every sale price in one step, without a loop, then the mean sale price.",
        ],
        requirements: [
          "Import NumPy as `np`.",
          "Create an array of the four prices.",
          "Print the array of sale prices (multiply by 0.9).",
          "Print `Mean: 26.44` using `np.mean()` (2 decimal places).",
        ],
        starterCode: `# Import NumPy, then work out the sale prices
`,
        expectedOutput: `[18.   31.5  45.   11.25]
Mean: 26.44`,
        hints: [
          "Start with `import numpy as np`, then `prices = np.array([20.00, 35.00, 50.00, 12.50])`.",
          "Multiplying an array by a number multiplies every element: `sale_prices = prices * 0.9`.",
          "`print(f\"Mean: {np.mean(sale_prices):.2f}\")`",
        ],
        solution: `import numpy as np

prices = np.array([20.00, 35.00, 50.00, 12.50])
sale_prices = prices * 0.9

print(sale_prices)
print(f"Mean: {np.mean(sale_prices):.2f}")`,
      },
    },
  },
  {
    moduleSlug: "scientific-python",
    lessonSlug: "numpy-arrays",
    variants: {
      "materials-science": {
        title: "A table of hardness readings",
        problem: [
          "Three samples were each tested for hardness at four positions along their length. Each row of the table below is one sample and each column is one position.",
          "Store the table as a 2D NumPy array and select parts of it.",
        ],
        requirements: [
          "Create a 2D array from the list of lists in the starter code.",
          "Print its shape.",
          "Print all readings for the second sample (row index 1).",
          "Print the reading at the last position for every sample (the last column).",
        ],
        starterCode: `import numpy as np

readings = [
    [152, 160, 158, 149],
    [201, 198, 205, 199],
    [175, 172, 178, 176],
]

# Make a 2D array, then print its shape, the second row and the last column
`,
        expectedOutput: `(3, 4)
[201 198 205 199]
[149 199 176]`,
        hints: [
          "`hardness = np.array(readings)` creates the 2D array.",
          "`hardness.shape` is an attribute, so it has no brackets after it.",
          "Rows are selected with `hardness[1]` and columns with `hardness[:, -1]`.",
        ],
        solution: `import numpy as np

readings = [
    [152, 160, 158, 149],
    [201, 198, 205, 199],
    [175, 172, 178, 176],
]

hardness = np.array(readings)
print(hardness.shape)
print(hardness[1])
print(hardness[:, -1])`,
      },
      chemistry: {
        title: "A table of absorbance readings",
        problem: [
          "Three solutions were each measured at four wavelengths in a spectrophotometer. Each row of the table below is one solution and each column is one wavelength.",
          "Store the table as a 2D NumPy array and select parts of it.",
        ],
        requirements: [
          "Create a 2D array from the list of lists in the starter code.",
          "Print its shape.",
          "Print all readings for the second solution (row index 1).",
          "Print the reading at the last wavelength for every solution (the last column).",
        ],
        starterCode: `import numpy as np

readings = [
    [0.12, 0.45, 0.31, 0.08],
    [0.24, 0.89, 0.62, 0.15],
    [0.36, 1.31, 0.93, 0.22],
]

# Make a 2D array, then print its shape, the second row and the last column
`,
        expectedOutput: `(3, 4)
[0.24 0.89 0.62 0.15]
[0.08 0.15 0.22]`,
        hints: [
          "`absorbance = np.array(readings)` creates the 2D array.",
          "`absorbance.shape` is an attribute, so it has no brackets after it.",
          "Rows are selected with `absorbance[1]` and columns with `absorbance[:, -1]`.",
        ],
        solution: `import numpy as np

readings = [
    [0.12, 0.45, 0.31, 0.08],
    [0.24, 0.89, 0.62, 0.15],
    [0.36, 1.31, 0.93, 0.22],
]

absorbance = np.array(readings)
print(absorbance.shape)
print(absorbance[1])
print(absorbance[:, -1])`,
      },
      physics: {
        title: "A table of pendulum timings",
        problem: [
          "Three pendulums of different lengths were each timed over four trials. Each row of the table below is one pendulum and each column is one trial, with the period in seconds.",
          "Store the table as a 2D NumPy array and select parts of it.",
        ],
        requirements: [
          "Create a 2D array from the list of lists in the starter code.",
          "Print its shape.",
          "Print all timings for the second pendulum (row index 1).",
          "Print the timing from the last trial for every pendulum (the last column).",
        ],
        starterCode: `import numpy as np

readings = [
    [1.42, 1.40, 1.43, 1.41],
    [2.01, 1.99, 2.02, 2.00],
    [2.45, 2.47, 2.44, 2.46],
]

# Make a 2D array, then print its shape, the second row and the last column
`,
        expectedOutput: `(3, 4)
[2.01 1.99 2.02 2.  ]
[1.41 2.   2.46]`,
        hints: [
          "`periods = np.array(readings)` creates the 2D array.",
          "`periods.shape` is an attribute, so it has no brackets after it.",
          "Rows are selected with `periods[1]` and columns with `periods[:, -1]`.",
        ],
        solution: `import numpy as np

readings = [
    [1.42, 1.40, 1.43, 1.41],
    [2.01, 1.99, 2.02, 2.00],
    [2.45, 2.47, 2.44, 2.46],
]

periods = np.array(readings)
print(periods.shape)
print(periods[1])
print(periods[:, -1])`,
      },
      biology: {
        title: "A table of plant heights",
        problem: [
          "Three bean plants were measured once a week for four weeks. Each row of the table below is one plant and each column is one week, with the height in cm.",
          "Store the table as a 2D NumPy array and select parts of it.",
        ],
        requirements: [
          "Create a 2D array from the list of lists in the starter code.",
          "Print its shape.",
          "Print all heights for the second plant (row index 1).",
          "Print the height in the last week for every plant (the last column).",
        ],
        starterCode: `import numpy as np

readings = [
    [2.1, 3.4, 5.0, 6.8],
    [1.8, 2.9, 4.1, 5.5],
    [2.5, 3.9, 5.6, 7.4],
]

# Make a 2D array, then print its shape, the second row and the last column
`,
        expectedOutput: `(3, 4)
[1.8 2.9 4.1 5.5]
[6.8 5.5 7.4]`,
        hints: [
          "`heights = np.array(readings)` creates the 2D array.",
          "`heights.shape` is an attribute, so it has no brackets after it.",
          "Rows are selected with `heights[1]` and columns with `heights[:, -1]`.",
        ],
        solution: `import numpy as np

readings = [
    [2.1, 3.4, 5.0, 6.8],
    [1.8, 2.9, 4.1, 5.5],
    [2.5, 3.9, 5.6, 7.4],
]

heights = np.array(readings)
print(heights.shape)
print(heights[1])
print(heights[:, -1])`,
      },
      biochemistry: {
        title: "A table of plate-reader data",
        problem: [
          "An enzyme assay was run in three wells of a plastic plate, and a plate reader (a spectrophotometer that measures many samples at once) recorded the absorbance at four time points. Each row of the table below is one well and each column is one time point.",
          "Store the table as a 2D NumPy array and select parts of it.",
        ],
        requirements: [
          "Create a 2D array from the list of lists in the starter code.",
          "Print its shape.",
          "Print all readings for the second well (row index 1).",
          "Print the reading at the last time point for every well (the last column).",
        ],
        starterCode: `import numpy as np

readings = [
    [0.10, 0.24, 0.37, 0.48],
    [0.11, 0.25, 0.38, 0.50],
    [0.10, 0.23, 0.36, 0.47],
]

# Make a 2D array, then print its shape, the second row and the last column
`,
        expectedOutput: `(3, 4)
[0.11 0.25 0.38 0.5 ]
[0.48 0.5  0.47]`,
        hints: [
          "`plate = np.array(readings)` creates the 2D array.",
          "`plate.shape` is an attribute, so it has no brackets after it.",
          "Rows are selected with `plate[1]` and columns with `plate[:, -1]`.",
        ],
        solution: `import numpy as np

readings = [
    [0.10, 0.24, 0.37, 0.48],
    [0.11, 0.25, 0.38, 0.50],
    [0.10, 0.23, 0.36, 0.47],
]

plate = np.array(readings)
print(plate.shape)
print(plate[1])
print(plate[:, -1])`,
      },
      "general-programming": {
        title: "A table of monthly sales",
        problem: [
          "Three shops recorded how many units they sold in each of four months. Each row of the table below is one shop and each column is one month.",
          "Store the table as a 2D NumPy array and select parts of it.",
        ],
        requirements: [
          "Create a 2D array from the list of lists in the starter code.",
          "Print its shape.",
          "Print all sales for the second shop (row index 1).",
          "Print the sales in the last month for every shop (the last column).",
        ],
        starterCode: `import numpy as np

readings = [
    [120, 135, 150, 160],
    [80, 95, 90, 110],
    [200, 210, 190, 230],
]

# Make a 2D array, then print its shape, the second row and the last column
`,
        expectedOutput: `(3, 4)
[ 80  95  90 110]
[160 110 230]`,
        hints: [
          "`sales = np.array(readings)` creates the 2D array.",
          "`sales.shape` is an attribute, so it has no brackets after it.",
          "Rows are selected with `sales[1]` and columns with `sales[:, -1]`.",
        ],
        solution: `import numpy as np

readings = [
    [120, 135, 150, 160],
    [80, 95, 90, 110],
    [200, 210, 190, 230],
]

sales = np.array(readings)
print(sales.shape)
print(sales[1])
print(sales[:, -1])`,
      },
    },
  },
  {
    moduleSlug: "scientific-python",
    lessonSlug: "array-operations",
    variants: {
      "materials-science": {
        title: "Strong and light",
        problem: [
          "You have the density (g/cm³) and yield strength (MPa) of six alloys. Specific strength, strength divided by density, measures how strong a material is for its weight.",
          "Calculate it for every alloy at once, then find the alloys with a specific strength above 100.",
        ],
        requirements: [
          "Calculate the specific strength of all six alloys with one expression.",
          "Use a Boolean mask to print the names of alloys with a specific strength above 100.",
          "Print their specific strengths rounded to 1 decimal place with `np.round()`.",
        ],
        starterCode: `import numpy as np

names = np.array(["Al 6061", "Al 7075", "Ti-6Al-4V", "Steel 1020", "Mg AZ31", "Cu C11000"])
density = np.array([2.70, 2.81, 4.43, 7.87, 1.77, 8.96])     # g/cm³
yield_strength = np.array([276, 503, 880, 350, 200, 70])      # MPa

# Calculate specific strength and select the alloys above 100
`,
        expectedOutput: `['Al 6061' 'Al 7075' 'Ti-6Al-4V' 'Mg AZ31']
[102.2 179.  198.6 113. ]`,
        hints: [
          "Dividing two arrays works element by element: `specific = yield_strength / density`.",
          "A comparison gives a Boolean mask: `is_strong = specific > 100`.",
          "Index both arrays with the same mask: `names[is_strong]` and `np.round(specific[is_strong], 1)`.",
        ],
        solution: `import numpy as np

names = np.array(["Al 6061", "Al 7075", "Ti-6Al-4V", "Steel 1020", "Mg AZ31", "Cu C11000"])
density = np.array([2.70, 2.81, 4.43, 7.87, 1.77, 8.96])     # g/cm³
yield_strength = np.array([276, 503, 880, 350, 200, 70])      # MPa

specific = yield_strength / density
is_strong = specific > 100

print(names[is_strong])
print(np.round(specific[is_strong], 1))`,
      },
      chemistry: {
        title: "Gases denser than air",
        problem: [
          "At standard temperature and pressure, one mole of any ideal gas fills 22.414 L, so a gas's density in g/L is its molar mass divided by 22.414.",
          "Calculate the density of six gases at once, then find the ones denser than air (1.29 g/L). These sink and collect near the floor if they leak.",
        ],
        requirements: [
          "Calculate the density of all six gases with one expression.",
          "Use a Boolean mask to print the names of gases with a density above 1.29 g/L.",
          "Print their densities rounded to 2 decimal places with `np.round()`.",
        ],
        starterCode: `import numpy as np

names = np.array(["H2", "He", "N2", "O2", "CO2", "Ar"])
molar_mass = np.array([2.016, 4.003, 28.014, 31.998, 44.009, 39.948])   # g/mol

# Calculate the densities and select the gases denser than air
`,
        expectedOutput: `['O2' 'CO2' 'Ar']
[1.43 1.96 1.78]`,
        hints: [
          "Dividing an array by a number works element by element: `density = molar_mass / 22.414`.",
          "A comparison gives a Boolean mask: `is_denser = density > 1.29`.",
          "Index both arrays with the same mask: `names[is_denser]` and `np.round(density[is_denser], 2)`.",
        ],
        solution: `import numpy as np

names = np.array(["H2", "He", "N2", "O2", "CO2", "Ar"])
molar_mass = np.array([2.016, 4.003, 28.014, 31.998, 44.009, 39.948])   # g/mol

density = molar_mass / 22.414
is_denser = density > 1.29

print(names[is_denser])
print(np.round(density[is_denser], 2))`,
      },
      physics: {
        title: "High-energy objects",
        problem: [
          "You have the mass (kg) and speed (m/s) of six moving objects. Their kinetic energy is ½ × m × v².",
          "Calculate the kinetic energy of every object at once, then find the ones with more than 1000 J.",
        ],
        requirements: [
          "Calculate the kinetic energy of all six objects with one expression.",
          "Use a Boolean mask to print the names of objects with more than 1000 J.",
          "Print their energies rounded to 1 decimal place with `np.round()`.",
        ],
        starterCode: `import numpy as np

names = np.array(["Football", "Cyclist", "Car", "Bullet", "Runner", "Tennis ball"])
mass = np.array([0.43, 80, 1200, 0.008, 70, 0.057])   # kg
speed = np.array([25, 8, 15, 400, 6, 50])             # m/s

# Calculate the kinetic energies and select those above 1000 J
`,
        expectedOutput: `['Cyclist' 'Car' 'Runner']
[  2560. 135000.   1260.]`,
        hints: [
          "Arithmetic on arrays works element by element: `energy = 0.5 * mass * speed ** 2`.",
          "A comparison gives a Boolean mask: `is_high = energy > 1000`.",
          "Index both arrays with the same mask: `names[is_high]` and `np.round(energy[is_high], 1)`.",
        ],
        solution: `import numpy as np

names = np.array(["Football", "Cyclist", "Car", "Bullet", "Runner", "Tennis ball"])
mass = np.array([0.43, 80, 1200, 0.008, 70, 0.057])   # kg
speed = np.array([25, 8, 15, 400, 6, 50])             # m/s

energy = 0.5 * mass * speed ** 2
is_high = energy > 1000

print(names[is_high])
print(np.round(energy[is_high], 1))`,
      },
      biology: {
        title: "Crowded survey sites",
        problem: [
          "A survey counted a snail species at six sites, each with a different area. Population density is the count divided by the area.",
          "Calculate the density at every site at once, then find the sites with more than 5 snails per m².",
        ],
        requirements: [
          "Calculate the density at all six sites with one expression.",
          "Use a Boolean mask to print the names of sites with more than 5 snails per m².",
          "Print their densities rounded to 1 decimal place with `np.round()`.",
        ],
        starterCode: `import numpy as np

sites = np.array(["Site A", "Site B", "Site C", "Site D", "Site E", "Site F"])
counts = np.array([45, 120, 18, 260, 75, 32])
area = np.array([10, 15, 8, 20, 30, 4])   # m²

# Calculate the densities and select the sites above 5 per m²
`,
        expectedOutput: `['Site B' 'Site D' 'Site F']
[ 8. 13.  8.]`,
        hints: [
          "Dividing two arrays works element by element: `density = counts / area`.",
          "A comparison gives a Boolean mask: `is_crowded = density > 5`.",
          "Index both arrays with the same mask: `sites[is_crowded]` and `np.round(density[is_crowded], 1)`.",
        ],
        solution: `import numpy as np

sites = np.array(["Site A", "Site B", "Site C", "Site D", "Site E", "Site F"])
counts = np.array([45, 120, 18, 260, 75, 32])
area = np.array([10, 15, 8, 20, 30, 4])   # m²

density = counts / area
is_crowded = density > 5

print(sites[is_crowded])
print(np.round(density[is_crowded], 1))`,
      },
      biochemistry: {
        title: "Concentrated enough to use?",
        problem: [
          "Proteins absorb ultraviolet light at 280 nm, so you can find a protein's concentration from its absorbance. Each protein has its own absorbance for a 1 mg/mL solution, so its concentration in mg/mL is the measured absorbance divided by that value.",
          "Calculate the concentration of six protein samples at once, then find the ones above 1.0 mg/mL, which are concentrated enough for your experiment.",
        ],
        requirements: [
          "Calculate the concentration of all six samples with one expression.",
          "Use a Boolean mask to print the names of proteins with a concentration above 1.0 mg/mL.",
          "Print their concentrations rounded to 2 decimal places with `np.round()`.",
        ],
        starterCode: `import numpy as np

proteins = np.array(["Lysozyme", "Serum albumin", "Myoglobin", "Ovalbumin", "Trypsin", "Insulin"])
absorbance = np.array([3.10, 0.55, 2.40, 0.90, 1.20, 0.80])         # measured at 280 nm
absorbance_1mg = np.array([2.64, 0.66, 1.81, 0.70, 1.54, 1.00])     # for a 1 mg/mL solution

# Calculate the concentrations and select those above 1.0 mg/mL
`,
        expectedOutput: `['Lysozyme' 'Myoglobin' 'Ovalbumin']
[1.17 1.33 1.29]`,
        hints: [
          "Dividing two arrays works element by element: `concentration = absorbance / absorbance_1mg`.",
          "A comparison gives a Boolean mask: `is_enough = concentration > 1.0`.",
          "Index both arrays with the same mask: `proteins[is_enough]` and `np.round(concentration[is_enough], 2)`.",
        ],
        solution: `import numpy as np

proteins = np.array(["Lysozyme", "Serum albumin", "Myoglobin", "Ovalbumin", "Trypsin", "Insulin"])
absorbance = np.array([3.10, 0.55, 2.40, 0.90, 1.20, 0.80])         # measured at 280 nm
absorbance_1mg = np.array([2.64, 0.66, 1.81, 0.70, 1.54, 1.00])     # for a 1 mg/mL solution

concentration = absorbance / absorbance_1mg
is_enough = concentration > 1.0

print(proteins[is_enough])
print(np.round(concentration[is_enough], 2))`,
      },
      "general-programming": {
        title: "Expensive by the kilo",
        problem: [
          "You have the price and pack weight (kg) of six grocery products. Dividing the price by the weight gives the price per kg, which makes products easy to compare.",
          "Calculate the price per kg of every product at once, then find the ones costing more than 10 per kg.",
        ],
        requirements: [
          "Calculate the price per kg of all six products with one expression.",
          "Use a Boolean mask to print the names of products costing more than 10 per kg.",
          "Print their prices per kg rounded to 1 decimal place with `np.round()`.",
        ],
        starterCode: `import numpy as np

products = np.array(["Rice", "Coffee", "Pasta", "Cheese", "Oats", "Tea"])
price = np.array([2.40, 6.50, 1.10, 4.20, 1.80, 3.00])
weight = np.array([1.0, 0.25, 0.5, 0.4, 1.0, 0.08])   # kg

# Calculate the price per kg and select the products above 10 per kg
`,
        expectedOutput: `['Coffee' 'Cheese' 'Tea']
[26.  10.5 37.5]`,
        hints: [
          "Dividing two arrays works element by element: `price_per_kg = price / weight`.",
          "A comparison gives a Boolean mask: `is_expensive = price_per_kg > 10`.",
          "Index both arrays with the same mask: `products[is_expensive]` and `np.round(price_per_kg[is_expensive], 1)`.",
        ],
        solution: `import numpy as np

products = np.array(["Rice", "Coffee", "Pasta", "Cheese", "Oats", "Tea"])
price = np.array([2.40, 6.50, 1.10, 4.20, 1.80, 3.00])
weight = np.array([1.0, 0.25, 0.5, 0.4, 1.0, 0.08])   # kg

price_per_kg = price / weight
is_expensive = price_per_kg > 10

print(products[is_expensive])
print(np.round(price_per_kg[is_expensive], 1))`,
      },
    },
  },
  {
    moduleSlug: "scientific-python",
    lessonSlug: "introduction-to-matplotlib",
    variants: {
      "materials-science": {
        title: "Plot copper's resistivity",
        problem: [
          "Over a moderate range, the resistivity of copper rises linearly with temperature: ρ = ρ₀ × (1 + α × (T − 293)), with ρ₀ = 1.72 µΩ·cm and α = 0.0039 per K.",
          "Calculate the resistivity at six evenly spaced temperatures from 293 K to 793 K, print the values, and plot them.",
        ],
        requirements: [
          "Use `np.linspace()` to create 6 temperatures from 293 to 793 K.",
          "Calculate the resistivity at each temperature and print it rounded to 2 decimal places with `np.round()`.",
          "Plot resistivity against temperature with markers, labelled axes (with units) and a title.",
          "The automatic check compares your printed output; check the plot by eye.",
        ],
        starterCode: `import numpy as np
import matplotlib.pyplot as plt

rho_0 = 1.72      # µΩ·cm at 293 K
alpha = 0.0039    # 1/K

# Calculate, print and plot the resistivity
`,
        expectedOutput: "[1.72 2.39 3.06 3.73 4.4  5.07]",
        hints: [
          "`temperature = np.linspace(293, 793, 6)` gives the six temperatures.",
          "The formula works on the whole array: `resistivity = rho_0 * (1 + alpha * (temperature - 293))`.",
          "Plot with `plt.plot(temperature, resistivity, marker=\"o\")`, then add `plt.xlabel()`, `plt.ylabel()`, `plt.title()` and `plt.show()`.",
        ],
        solution: `import numpy as np
import matplotlib.pyplot as plt

rho_0 = 1.72      # µΩ·cm at 293 K
alpha = 0.0039    # 1/K

temperature = np.linspace(293, 793, 6)
resistivity = rho_0 * (1 + alpha * (temperature - 293))
print(np.round(resistivity, 2))

plt.plot(temperature, resistivity, marker="o")
plt.xlabel("Temperature (K)")
plt.ylabel("Resistivity (µΩ·cm)")
plt.title("Resistivity of copper")
plt.grid(True)
plt.show()`,
      },
      chemistry: {
        title: "Plot Charles's law",
        problem: [
          "At constant pressure, the volume of a gas is proportional to its temperature. For 1 mol of an ideal gas at 1 atm, V = 0.08206 × T, with V in litres and T in kelvin.",
          "Calculate the volume at six evenly spaced temperatures from 273 K to 373 K, print the values, and plot them.",
        ],
        requirements: [
          "Use `np.linspace()` to create 6 temperatures from 273 to 373 K.",
          "Calculate the volume at each temperature and print it rounded to 2 decimal places with `np.round()`.",
          "Plot volume against temperature with markers, labelled axes (with units) and a title.",
          "The automatic check compares your printed output; check the plot by eye.",
        ],
        starterCode: `import numpy as np
import matplotlib.pyplot as plt

r = 0.08206   # L·atm/(mol·K)

# Calculate, print and plot the volume
`,
        expectedOutput: "[22.4  24.04 25.68 27.33 28.97 30.61]",
        hints: [
          "`temperature = np.linspace(273, 373, 6)` gives the six temperatures.",
          "The formula works on the whole array: `volume = r * temperature`.",
          "Plot with `plt.plot(temperature, volume, marker=\"o\")`, then add `plt.xlabel()`, `plt.ylabel()`, `plt.title()` and `plt.show()`.",
        ],
        solution: `import numpy as np
import matplotlib.pyplot as plt

r = 0.08206   # L·atm/(mol·K)

temperature = np.linspace(273, 373, 6)
volume = r * temperature
print(np.round(volume, 2))

plt.plot(temperature, volume, marker="o")
plt.xlabel("Temperature (K)")
plt.ylabel("Volume (L)")
plt.title("Volume of 1 mol of gas at 1 atm")
plt.grid(True)
plt.show()`,
      },
      physics: {
        title: "Plot a falling object",
        problem: [
          "An object dropped from rest falls a distance d = ½ × g × t², with g = 9.81 m/s².",
          "Calculate the distance fallen at six evenly spaced times from 0 to 2.5 s, print the values, and plot them.",
        ],
        requirements: [
          "Use `np.linspace()` to create 6 times from 0 to 2.5 s.",
          "Calculate the distance at each time and print it rounded to 2 decimal places with `np.round()`.",
          "Plot distance against time with markers, labelled axes (with units) and a title.",
          "The automatic check compares your printed output; check the plot by eye.",
        ],
        starterCode: `import numpy as np
import matplotlib.pyplot as plt

g = 9.81   # m/s²

# Calculate, print and plot the distance fallen
`,
        expectedOutput: "[ 0.    1.23  4.9  11.04 19.62 30.66]",
        hints: [
          "`time = np.linspace(0, 2.5, 6)` gives the six times.",
          "The formula works on the whole array: `distance = 0.5 * g * time ** 2`.",
          "Plot with `plt.plot(time, distance, marker=\"o\")`, then add `plt.xlabel()`, `plt.ylabel()`, `plt.title()` and `plt.show()`.",
        ],
        solution: `import numpy as np
import matplotlib.pyplot as plt

g = 9.81   # m/s²

time = np.linspace(0, 2.5, 6)
distance = 0.5 * g * time ** 2
print(np.round(distance, 2))

plt.plot(time, distance, marker="o")
plt.xlabel("Time (s)")
plt.ylabel("Distance fallen (m)")
plt.title("Free fall from rest")
plt.grid(True)
plt.show()`,
      },
      biology: {
        title: "Plot bacterial growth",
        problem: [
          "A bacterial culture of 100 cells doubles every 20 minutes, so after t minutes it holds N = 100 × 2^(t / 20) cells.",
          "Calculate the population at six evenly spaced times from 0 to 100 minutes, print the values, and plot them.",
        ],
        requirements: [
          "Use `np.linspace()` to create 6 times from 0 to 100 minutes.",
          "Calculate the population at each time and print it rounded to whole numbers with `np.round()`.",
          "Plot population against time with markers, labelled axes (with units) and a title.",
          "The automatic check compares your printed output; check the plot by eye.",
        ],
        starterCode: `import numpy as np
import matplotlib.pyplot as plt

starting_cells = 100
doubling_time = 20   # minutes

# Calculate, print and plot the population
`,
        expectedOutput: "[ 100.  200.  400.  800. 1600. 3200.]",
        hints: [
          "`time = np.linspace(0, 100, 6)` gives the six times.",
          "The formula works on the whole array: `population = starting_cells * 2 ** (time / doubling_time)`.",
          "Plot with `plt.plot(time, population, marker=\"o\")`, then add `plt.xlabel()`, `plt.ylabel()`, `plt.title()` and `plt.show()`.",
        ],
        solution: `import numpy as np
import matplotlib.pyplot as plt

starting_cells = 100
doubling_time = 20   # minutes

time = np.linspace(0, 100, 6)
population = starting_cells * 2 ** (time / doubling_time)
print(np.round(population))

plt.plot(time, population, marker="o")
plt.xlabel("Time (min)")
plt.ylabel("Number of cells")
plt.title("Bacterial growth")
plt.grid(True)
plt.show()`,
      },
      biochemistry: {
        title: "Plot a Michaelis–Menten curve",
        problem: [
          "An enzyme with Vmax = 100 µmol/min and Km = 2.0 mM reacts at a rate v = Vmax × [S] / (Km + [S]), where [S] is the substrate concentration.",
          "Calculate the rate at six evenly spaced substrate concentrations from 0 to 10 mM, print the values, and plot them.",
        ],
        requirements: [
          "Use `np.linspace()` to create 6 substrate concentrations from 0 to 10 mM.",
          "Calculate the rate at each concentration and print it rounded to 2 decimal places with `np.round()`.",
          "Plot rate against substrate concentration with markers, labelled axes (with units) and a title.",
          "The automatic check compares your printed output; check the plot by eye.",
        ],
        starterCode: `import numpy as np
import matplotlib.pyplot as plt

v_max = 100   # µmol/min
k_m = 2.0     # mM

# Calculate, print and plot the rate
`,
        expectedOutput: "[ 0.   50.   66.67 75.   80.   83.33]",
        hints: [
          "`substrate = np.linspace(0, 10, 6)` gives the six concentrations.",
          "The formula works on the whole array: `rate = v_max * substrate / (k_m + substrate)`.",
          "Plot with `plt.plot(substrate, rate, marker=\"o\")`, then add `plt.xlabel()`, `plt.ylabel()`, `plt.title()` and `plt.show()`.",
        ],
        solution: `import numpy as np
import matplotlib.pyplot as plt

v_max = 100   # µmol/min
k_m = 2.0     # mM

substrate = np.linspace(0, 10, 6)
rate = v_max * substrate / (k_m + substrate)
print(np.round(rate, 2))

plt.plot(substrate, rate, marker="o")
plt.xlabel("Substrate concentration (mM)")
plt.ylabel("Rate (µmol/min)")
plt.title("Michaelis–Menten kinetics")
plt.grid(True)
plt.show()`,
      },
      "general-programming": {
        title: "Plot savings growth",
        problem: [
          "A savings account starts with 1000 and earns 5% interest a year, compounded yearly, so after n years it holds 1000 × 1.05^n.",
          "Calculate the balance at six evenly spaced points from 0 to 10 years, print the values, and plot them.",
        ],
        requirements: [
          "Use `np.linspace()` to create 6 points in time from 0 to 10 years.",
          "Calculate the balance at each point and print it rounded to 2 decimal places with `np.round()`.",
          "Plot the balance against time with markers, labelled axes and a title.",
          "The automatic check compares your printed output; check the plot by eye.",
        ],
        starterCode: `import numpy as np
import matplotlib.pyplot as plt

principal = 1000
rate = 0.05   # 5% a year

# Calculate, print and plot the balance
`,
        expectedOutput: "[1000.   1102.5  1215.51 1340.1  1477.46 1628.89]",
        hints: [
          "`years = np.linspace(0, 10, 6)` gives the six points in time.",
          "The formula works on the whole array: `balance = principal * (1 + rate) ** years`.",
          "Plot with `plt.plot(years, balance, marker=\"o\")`, then add `plt.xlabel()`, `plt.ylabel()`, `plt.title()` and `plt.show()`.",
        ],
        solution: `import numpy as np
import matplotlib.pyplot as plt

principal = 1000
rate = 0.05   # 5% a year

years = np.linspace(0, 10, 6)
balance = principal * (1 + rate) ** years
print(np.round(balance, 2))

plt.plot(years, balance, marker="o")
plt.xlabel("Time (years)")
plt.ylabel("Balance")
plt.title("Savings with 5% interest")
plt.grid(True)
plt.show()`,
      },
    },
  },
];
