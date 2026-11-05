import type { CodingExercise } from "@/types/lesson";

/** Hands-on coding exercises for Module 5 (Functions), with a version for every scientific context. */
export const MODULE_5_CODING_EXERCISES: CodingExercise[] = [
  {
    moduleSlug: "functions",
    lessonSlug: "introduction-to-functions",
    variants: {
      "materials-science": {
        title: "A temperature conversion function",
        problem: [
          "Melting points are usually listed in °C, but many formulas need kelvin. Instead of repeating `+ 273.15` everywhere, write a function that does the conversion.",
          "Then use it to report the melting points of aluminium (660 °C), copper (1085 °C) and iron (1538 °C) in kelvin.",
        ],
        requirements: [
          "Define a function `celsius_to_kelvin(temperature_c)` that **returns** the temperature in kelvin.",
          "Call it three times and print each result with 2 decimal places, for example `Aluminium: 933.15 K`.",
        ],
        starterCode: `# Define celsius_to_kelvin here


# Use it to print the three melting points in kelvin
`,
        expectedOutput: `Aluminium: 933.15 K
Copper: 1358.15 K
Iron: 1811.15 K`,
        hints: [
          "A function definition starts with `def celsius_to_kelvin(temperature_c):` and the body is indented below it.",
          "The body needs only one line: `return temperature_c + 273.15`.",
          "Call it inside an f-string: `print(f\"Aluminium: {celsius_to_kelvin(660):.2f} K\")`.",
        ],
        solution: `def celsius_to_kelvin(temperature_c):
    """Convert a temperature from °C to K."""
    return temperature_c + 273.15

print(f"Aluminium: {celsius_to_kelvin(660):.2f} K")
print(f"Copper: {celsius_to_kelvin(1085):.2f} K")
print(f"Iron: {celsius_to_kelvin(1538):.2f} K")`,
      },
      chemistry: {
        title: "A percentage yield function",
        problem: [
          "The percentage yield of a reaction compares the mass of product you actually made with the most you could have made: actual ÷ theoretical × 100. Instead of repeating the formula for every experiment, write a function for it.",
          "Then use it to report three experiments: 8.2 g from a possible 10.0 g, 4.5 g from 5.0 g, and 13.1 g from 15.0 g.",
        ],
        requirements: [
          "Define a function `percent_yield(actual_g, theoretical_g)` that **returns** the percentage yield.",
          "Call it three times and print each result with 1 decimal place, for example `Experiment 1: 82.0%`.",
        ],
        starterCode: `# Define percent_yield here


# Use it to print the yield of the three experiments
`,
        expectedOutput: `Experiment 1: 82.0%
Experiment 2: 90.0%
Experiment 3: 87.3%`,
        hints: [
          "A function definition starts with `def percent_yield(actual_g, theoretical_g):` and the body is indented below it.",
          "The body needs only one line: `return actual_g / theoretical_g * 100`.",
          "Call it inside an f-string: `print(f\"Experiment 1: {percent_yield(8.2, 10.0):.1f}%\")`.",
        ],
        solution: `def percent_yield(actual_g, theoretical_g):
    """Percentage yield of a reaction."""
    return actual_g / theoretical_g * 100

print(f"Experiment 1: {percent_yield(8.2, 10.0):.1f}%")
print(f"Experiment 2: {percent_yield(4.5, 5.0):.1f}%")
print(f"Experiment 3: {percent_yield(13.1, 15.0):.1f}%")`,
      },
      physics: {
        title: "A speed conversion function",
        problem: [
          "Everyday speeds are given in km/h, but physics formulas need m/s. Instead of repeating `/ 3.6` everywhere, write a function that does the conversion.",
          "Then use it to report the speeds of a walker (5 km/h), a car (50 km/h) and a high-speed train (300 km/h) in m/s.",
        ],
        requirements: [
          "Define a function `kmh_to_ms(speed_kmh)` that **returns** the speed in m/s.",
          "Call it three times and print each result with 2 decimal places, for example `Walker: 1.39 m/s`.",
        ],
        starterCode: `# Define kmh_to_ms here


# Use it to print the three speeds in m/s
`,
        expectedOutput: `Walker: 1.39 m/s
Car: 13.89 m/s
Train: 83.33 m/s`,
        hints: [
          "A function definition starts with `def kmh_to_ms(speed_kmh):` and the body is indented below it.",
          "The body needs only one line: `return speed_kmh / 3.6`.",
          "Call it inside an f-string: `print(f\"Walker: {kmh_to_ms(5):.2f} m/s\")`.",
        ],
        solution: `def kmh_to_ms(speed_kmh):
    """Convert a speed from km/h to m/s."""
    return speed_kmh / 3.6

print(f"Walker: {kmh_to_ms(5):.2f} m/s")
print(f"Car: {kmh_to_ms(50):.2f} m/s")
print(f"Train: {kmh_to_ms(300):.2f} m/s")`,
      },
      biology: {
        title: "A microscope size function",
        problem: [
          "Under a microscope, the real size of a cell is its size in the image divided by the magnification. Image sizes are measured in mm but cells are measured in micrometres (1 mm = 1000 µm). Instead of repeating the calculation for every cell, write a function for it.",
          "Then use it to find the real size of three human cells, all photographed at ×400: a red blood cell (3.0 mm in the image), a white blood cell (4.8 mm) and a cheek cell (24 mm).",
        ],
        requirements: [
          "Define a function `actual_size(image_size_mm, magnification)` that **returns** the real size in µm.",
          "Call it three times and print each result with 1 decimal place, for example `Red blood cell: 7.5 µm`.",
        ],
        starterCode: `# Define actual_size here


# Use it to print the real size of the three cells
`,
        expectedOutput: `Red blood cell: 7.5 µm
White blood cell: 12.0 µm
Cheek cell: 60.0 µm`,
        hints: [
          "A function definition starts with `def actual_size(image_size_mm, magnification):` and the body is indented below it.",
          "Convert to µm and divide by the magnification: `return image_size_mm * 1000 / magnification`.",
          "Call it inside an f-string: `print(f\"Red blood cell: {actual_size(3.0, 400):.1f} µm\")`.",
        ],
        solution: `def actual_size(image_size_mm, magnification):
    """Real size in µm of an object measured in a microscope image."""
    return image_size_mm * 1000 / magnification

print(f"Red blood cell: {actual_size(3.0, 400):.1f} µm")
print(f"White blood cell: {actual_size(4.8, 400):.1f} µm")
print(f"Cheek cell: {actual_size(24, 400):.1f} µm")`,
      },
      biochemistry: {
        title: "An NADH concentration function",
        problem: [
          "NADH is a molecule that many enzymes produce or use up, and it absorbs ultraviolet light at 340 nm. Its concentration in µM is absorbance ÷ 6220 × 1,000,000 (Beer–Lambert law, 1 cm path). Instead of repeating the formula for every sample, write a function for it.",
          "Then use it to report three samples with absorbances of 0.25, 0.62 and 1.10.",
        ],
        requirements: [
          "Define a function `nadh_concentration(absorbance)` that **returns** the concentration in µM.",
          "Call it three times and print each result with 2 decimal places, for example `Sample A: 40.19 µM`.",
        ],
        starterCode: `# Define nadh_concentration here


# Use it to print the concentration in the three samples
`,
        expectedOutput: `Sample A: 40.19 µM
Sample B: 99.68 µM
Sample C: 176.85 µM`,
        hints: [
          "A function definition starts with `def nadh_concentration(absorbance):` and the body is indented below it.",
          "The body needs only one line: `return absorbance / 6220 * 1_000_000`.",
          "Call it inside an f-string: `print(f\"Sample A: {nadh_concentration(0.25):.2f} µM\")`.",
        ],
        solution: `def nadh_concentration(absorbance):
    """NADH concentration in µM from its absorbance at 340 nm."""
    return absorbance / 6220 * 1_000_000

print(f"Sample A: {nadh_concentration(0.25):.2f} µM")
print(f"Sample B: {nadh_concentration(0.62):.2f} µM")
print(f"Sample C: {nadh_concentration(1.10):.2f} µM")`,
      },
      "general-programming": {
        title: "A temperature conversion function",
        problem: [
          "A weather app stores temperatures in °C but some users want °F. Instead of repeating `* 9 / 5 + 32` everywhere, write a function that does the conversion.",
          "Then use it to report today's temperatures in London (18 °C), Cairo (35 °C) and Oslo (-4 °C).",
        ],
        requirements: [
          "Define a function `celsius_to_fahrenheit(temperature_c)` that **returns** the temperature in °F.",
          "Call it three times and print each result with 1 decimal place, for example `London: 64.4 °F`.",
        ],
        starterCode: `# Define celsius_to_fahrenheit here


# Use it to print the three temperatures in °F
`,
        expectedOutput: `London: 64.4 °F
Cairo: 95.0 °F
Oslo: 24.8 °F`,
        hints: [
          "A function definition starts with `def celsius_to_fahrenheit(temperature_c):` and the body is indented below it.",
          "The body needs only one line: `return temperature_c * 9 / 5 + 32`.",
          "Call it inside an f-string: `print(f\"London: {celsius_to_fahrenheit(18):.1f} °F\")`.",
        ],
        solution: `def celsius_to_fahrenheit(temperature_c):
    """Convert a temperature from °C to °F."""
    return temperature_c * 9 / 5 + 32

print(f"London: {celsius_to_fahrenheit(18):.1f} °F")
print(f"Cairo: {celsius_to_fahrenheit(35):.1f} °F")
print(f"Oslo: {celsius_to_fahrenheit(-4):.1f} °F")`,
      },
    },
  },
  {
    moduleSlug: "functions",
    lessonSlug: "function-arguments",
    variants: {
      "materials-science": {
        title: "How far does a bar stretch?",
        problem: [
          "A bar under a tensile force stretches by ΔL = F × L / (A × E), where F is the force (N), L the length (m), A the cross-sectional area (m²) and E the Young's modulus (Pa).",
          "Most bars in your lab are steel (E = 200 × 10⁹ Pa) with an area of 1 × 10⁻⁴ m², so these make good default values.",
        ],
        requirements: [
          "Define `bar_extension(force_n, length_m, area_m2=1e-4, modulus_pa=200e9)` that returns the extension in **millimetres**.",
          "Print the extension of a 2 m steel bar under 10,000 N, using the defaults.",
          "Print the extension of the same bar made of aluminium (E = 70 × 10⁹ Pa), using a keyword argument.",
          "Print the extension of the aluminium bar with twice the area (2 × 10⁻⁴ m²), using keyword arguments. Show 3 decimal places each time.",
        ],
        starterCode: `# Define bar_extension with default values for area and modulus


# Steel bar, default area

# Aluminium bar

# Aluminium bar with twice the area
`,
        expectedOutput: `Steel: 1.000 mm
Aluminium: 2.857 mm
Aluminium, double area: 1.429 mm`,
        hints: [
          "Parameters with defaults go after the ones without: `def bar_extension(force_n, length_m, area_m2=1e-4, modulus_pa=200e9):`.",
          "Calculate the extension in metres, then multiply by 1000 for millimetres: `return force_n * length_m / (area_m2 * modulus_pa) * 1000`.",
          "Override a default by name: `bar_extension(10000, 2.0, modulus_pa=70e9)`.",
        ],
        solution: `def bar_extension(force_n, length_m, area_m2=1e-4, modulus_pa=200e9):
    """Elastic extension in mm of a bar under tension."""
    return force_n * length_m / (area_m2 * modulus_pa) * 1000

print(f"Steel: {bar_extension(10000, 2.0):.3f} mm")
print(f"Aluminium: {bar_extension(10000, 2.0, modulus_pa=70e9):.3f} mm")
print(f"Aluminium, double area: {bar_extension(10000, 2.0, area_m2=2e-4, modulus_pa=70e9):.3f} mm")`,
      },
      chemistry: {
        title: "Volume of a gas",
        problem: [
          "The ideal gas law gives the volume of a gas: V = nRT / P, where n is the amount (mol), R = 8.314 J/(mol·K), T the temperature (K) and P the pressure (Pa).",
          "Most of your calculations are at standard conditions (T = 273.15 K, P = 101,325 Pa), so these make good default values.",
        ],
        requirements: [
          "Define `gas_volume(moles, temperature_k=273.15, pressure_pa=101325)` that returns the volume in **litres** (1 m³ = 1000 L).",
          "Print the volume of 1 mol of gas, using the defaults.",
          "Print the volume of 1 mol at 25 °C (298.15 K), using a keyword argument.",
          "Print the volume of 1 mol at 25 °C and twice the pressure (202,650 Pa), using keyword arguments. Show 2 decimal places each time.",
        ],
        starterCode: `# Define gas_volume with default values for temperature and pressure


# 1 mol at standard conditions

# 1 mol at 25 °C

# 1 mol at 25 °C and twice the pressure
`,
        expectedOutput: `Standard conditions: 22.41 L
At 25 °C: 24.46 L
At 25 °C, double pressure: 12.23 L`,
        hints: [
          "Parameters with defaults go after the ones without: `def gas_volume(moles, temperature_k=273.15, pressure_pa=101325):`.",
          "Calculate the volume in m³, then multiply by 1000 for litres: `return moles * 8.314 * temperature_k / pressure_pa * 1000`.",
          "Override a default by name: `gas_volume(1, temperature_k=298.15)`.",
        ],
        solution: `def gas_volume(moles, temperature_k=273.15, pressure_pa=101325):
    """Volume in litres of an ideal gas."""
    return moles * 8.314 * temperature_k / pressure_pa * 1000

print(f"Standard conditions: {gas_volume(1):.2f} L")
print(f"At 25 °C: {gas_volume(1, temperature_k=298.15):.2f} L")
print(f"At 25 °C, double pressure: {gas_volume(1, temperature_k=298.15, pressure_pa=202650):.2f} L")`,
      },
      physics: {
        title: "Potential energy on other worlds",
        problem: [
          "Gravitational potential energy is E = m × g × h, where m is the mass (kg), g the gravitational field strength (m/s²) and h the height (m).",
          "Most of your calculations are on Earth (g = 9.81 m/s²) for objects lifted 1 m, so these make good default values.",
        ],
        requirements: [
          "Define `potential_energy(mass_kg, height_m=1.0, g=9.81)` that returns the energy in joules.",
          "Print the energy of a 2 kg mass, using the defaults.",
          "Print the energy of the same mass lifted 10 m, using a keyword argument.",
          "Print the energy of the same mass lifted 10 m on the Moon (g = 1.62 m/s²), using keyword arguments. Show 2 decimal places each time.",
        ],
        starterCode: `# Define potential_energy with default values for height and g


# 2 kg lifted 1 m on Earth

# 2 kg lifted 10 m on Earth

# 2 kg lifted 10 m on the Moon
`,
        expectedOutput: `Earth, 1 m: 19.62 J
Earth, 10 m: 196.20 J
Moon, 10 m: 32.40 J`,
        hints: [
          "Parameters with defaults go after the ones without: `def potential_energy(mass_kg, height_m=1.0, g=9.81):`.",
          "The body needs only one line: `return mass_kg * g * height_m`.",
          "Override a default by name: `potential_energy(2, height_m=10)`.",
        ],
        solution: `def potential_energy(mass_kg, height_m=1.0, g=9.81):
    """Gravitational potential energy in joules."""
    return mass_kg * g * height_m

print(f"Earth, 1 m: {potential_energy(2):.2f} J")
print(f"Earth, 10 m: {potential_energy(2, height_m=10):.2f} J")
print(f"Moon, 10 m: {potential_energy(2, height_m=10, g=1.62):.2f} J")`,
      },
      biology: {
        title: "Counting cells with a haemocytometer",
        problem: [
          "A haemocytometer is a slide with a counting grid. Each large square holds 0.0001 mL (1 × 10⁻⁴ mL), so the cell concentration is: cells per mL = count ÷ squares × dilution ÷ 0.0001.",
          "You usually count 4 squares of an undiluted sample, so these make good default values.",
        ],
        requirements: [
          "Define `cells_per_ml(count, squares=4, dilution=1)` that returns the concentration in cells per mL.",
          "Print the concentration for a count of 120, using the defaults.",
          "Print the concentration for the same count from a sample diluted 10 times, using a keyword argument.",
          "Print the concentration for the same count over 5 squares of the 10-times dilution, using keyword arguments. Show the numbers with thousands separators and no decimal places (`:,.0f`).",
        ],
        starterCode: `# Define cells_per_ml with default values for squares and dilution


# 120 cells in 4 squares, undiluted

# 120 cells in 4 squares, diluted 10 times

# 120 cells in 5 squares, diluted 10 times
`,
        expectedOutput: `Undiluted: 300,000 cells/mL
Diluted 10x: 3,000,000 cells/mL
Diluted 10x, 5 squares: 2,400,000 cells/mL`,
        hints: [
          "Parameters with defaults go after the ones without: `def cells_per_ml(count, squares=4, dilution=1):`.",
          "The body needs only one line: `return count / squares * dilution / 0.0001`.",
          "Override a default by name: `cells_per_ml(120, dilution=10)`. Format with `:,.0f`.",
        ],
        solution: `def cells_per_ml(count, squares=4, dilution=1):
    """Cell concentration per mL from a haemocytometer count."""
    return count / squares * dilution / 0.0001

print(f"Undiluted: {cells_per_ml(120):,.0f} cells/mL")
print(f"Diluted 10x: {cells_per_ml(120, dilution=10):,.0f} cells/mL")
print(f"Diluted 10x, 5 squares: {cells_per_ml(120, squares=5, dilution=10):,.0f} cells/mL")`,
      },
      biochemistry: {
        title: "Reaction rates for different enzymes",
        problem: [
          "The Michaelis–Menten equation gives an enzyme's reaction rate: v = Vmax × [S] / (Km + [S]), where [S] is the substrate concentration (mM).",
          "The enzyme you use most has Vmax = 100 µmol/min and Km = 2.0 mM, so these make good default values.",
        ],
        requirements: [
          "Define `reaction_rate(substrate_mm, v_max=100, k_m=2.0)` that returns the rate in µmol/min.",
          "Print the rate at 2 mM substrate, using the defaults.",
          "Print the rate at 2 mM for a mutant enzyme with Km = 0.5 mM, using a keyword argument.",
          "Print the rate at 2 mM for a mutant with Km = 0.5 mM and Vmax = 150 µmol/min, using keyword arguments. Show 1 decimal place each time.",
        ],
        starterCode: `# Define reaction_rate with default values for v_max and k_m


# Usual enzyme

# Mutant with a lower Km

# Mutant with a lower Km and higher Vmax
`,
        expectedOutput: `Usual enzyme: 50.0 µmol/min
Lower Km: 80.0 µmol/min
Lower Km, higher Vmax: 120.0 µmol/min`,
        hints: [
          "Parameters with defaults go after the ones without: `def reaction_rate(substrate_mm, v_max=100, k_m=2.0):`.",
          "The body needs only one line: `return v_max * substrate_mm / (k_m + substrate_mm)`.",
          "Override a default by name: `reaction_rate(2, k_m=0.5)`.",
        ],
        solution: `def reaction_rate(substrate_mm, v_max=100, k_m=2.0):
    """Michaelis–Menten reaction rate in µmol/min."""
    return v_max * substrate_mm / (k_m + substrate_mm)

print(f"Usual enzyme: {reaction_rate(2):.1f} µmol/min")
print(f"Lower Km: {reaction_rate(2, k_m=0.5):.1f} µmol/min")
print(f"Lower Km, higher Vmax: {reaction_rate(2, v_max=150, k_m=0.5):.1f} µmol/min")`,
      },
      "general-programming": {
        title: "Cost of an order",
        problem: [
          "An online bookshop works out the cost of an order as price × quantity × (1 − discount), where the discount is a fraction such as 0.1 for 10% off.",
          "Most orders are for a single book with no discount, so these make good default values.",
        ],
        requirements: [
          "Define `order_cost(price, quantity=1, discount=0.0)` that returns the cost.",
          "Print the cost of one book priced 12.00, using the defaults.",
          "Print the cost of 3 of the same book, using a keyword argument.",
          "Print the cost of 3 books with a 10% discount, using keyword arguments. Show 2 decimal places each time.",
        ],
        starterCode: `# Define order_cost with default values for quantity and discount


# One book

# Three books

# Three books with 10% off
`,
        expectedOutput: `One book: 12.00
Three books: 36.00
Three books, 10% off: 32.40`,
        hints: [
          "Parameters with defaults go after the ones without: `def order_cost(price, quantity=1, discount=0.0):`.",
          "The body needs only one line: `return price * quantity * (1 - discount)`.",
          "Override a default by name: `order_cost(12.00, quantity=3)`.",
        ],
        solution: `def order_cost(price, quantity=1, discount=0.0):
    """Cost of an order after any discount."""
    return price * quantity * (1 - discount)

print(f"One book: {order_cost(12.00):.2f}")
print(f"Three books: {order_cost(12.00, quantity=3):.2f}")
print(f"Three books, 10% off: {order_cost(12.00, quantity=3, discount=0.1):.2f}")`,
      },
    },
  },
  {
    moduleSlug: "functions",
    lessonSlug: "return-values",
    variants: {
      "materials-science": {
        title: "Stress, strain and stiffness",
        problem: [
          "In a tensile test, a force of 5000 N on a sample with a cross-section of 50 mm² stretched its 50 mm gauge length by 0.05 mm.",
          "Stress is force divided by area (N/mm² is the same as MPa), and strain is extension divided by original length. Young's modulus is stress divided by strain.",
        ],
        requirements: [
          "Define `stress_and_strain(force_n, area_mm2, extension_mm, length_mm)` that **returns two values**: the stress in MPa and the strain.",
          "Call it once and unpack the result into two variables.",
          "Print the stress (1 decimal place), the strain (4 decimal places) and Young's modulus in GPa (1 decimal place).",
        ],
        starterCode: `# Define stress_and_strain here


# Call it with the test values and print the three results
`,
        expectedOutput: `Stress: 100.0 MPa
Strain: 0.0010
Young's modulus: 100.0 GPa`,
        hints: [
          "Return both values separated by a comma: `return stress, strain`.",
          "Unpack the returned tuple: `stress, strain = stress_and_strain(5000, 50, 0.05, 50)`.",
          "Stress / strain is in MPa; divide by 1000 to get GPa.",
        ],
        solution: `def stress_and_strain(force_n, area_mm2, extension_mm, length_mm):
    """Return the engineering stress (MPa) and strain of a tensile sample."""
    stress = force_n / area_mm2
    strain = extension_mm / length_mm
    return stress, strain

stress, strain = stress_and_strain(5000, 50, 0.05, 50)
print(f"Stress: {stress:.1f} MPa")
print(f"Strain: {strain:.4f}")
print(f"Young's modulus: {stress / strain / 1000:.1f} GPa")`,
      },
      chemistry: {
        title: "Moles and molecules",
        problem: [
          "A sample of water weighs 9.0 g. The amount in moles is the mass divided by the molar mass (18.015 g/mol), and the number of molecules is the amount multiplied by Avogadro's number (6.022 × 10²³ per mol).",
          "Write a function that works out both, then use them to find the mass of a single water molecule.",
        ],
        requirements: [
          "Define `moles_and_molecules(mass_g, molar_mass)` that **returns two values**: the amount in moles and the number of molecules.",
          "Call it once and unpack the result into two variables.",
          "Print the amount (3 decimal places), the number of molecules and the mass of one molecule in grams (both with `:.2e`).",
        ],
        starterCode: `# Define moles_and_molecules here


# Call it for 9.0 g of water and print the three results
`,
        expectedOutput: `Amount: 0.500 mol
Molecules: 3.01e+23
Mass of one molecule: 2.99e-23 g`,
        hints: [
          "Return both values separated by a comma: `return moles, molecules`.",
          "Unpack the returned tuple: `moles, molecules = moles_and_molecules(9.0, 18.015)`.",
          "The mass of one molecule is the total mass divided by the number of molecules: `9.0 / molecules`.",
        ],
        solution: `def moles_and_molecules(mass_g, molar_mass):
    """Return the amount (mol) and number of molecules in a sample."""
    moles = mass_g / molar_mass
    molecules = moles * 6.022e23
    return moles, molecules

moles, molecules = moles_and_molecules(9.0, 18.015)
print(f"Amount: {moles:.3f} mol")
print(f"Molecules: {molecules:.2e}")
print(f"Mass of one molecule: {9.0 / molecules:.2e} g")`,
      },
      physics: {
        title: "An accelerating car",
        problem: [
          "A car travelling at 5 m/s accelerates at 2 m/s² for 10 s.",
          "Its final velocity is v = u + a × t and the distance it covers is s = u × t + ½ × a × t², where u is the starting velocity. Its average speed is the distance divided by the time.",
        ],
        requirements: [
          "Define `motion(initial_velocity, acceleration, time)` that **returns two values**: the final velocity and the distance.",
          "Call it once and unpack the result into two variables.",
          "Print the final velocity, the distance and the average speed (1 decimal place each).",
        ],
        starterCode: `# Define motion here


# Call it for the car and print the three results
`,
        expectedOutput: `Final velocity: 25.0 m/s
Distance: 150.0 m
Average speed: 15.0 m/s`,
        hints: [
          "Return both values separated by a comma: `return final_velocity, distance`.",
          "Unpack the returned tuple: `final_velocity, distance = motion(5, 2, 10)`.",
          "The average speed is `distance / 10`.",
        ],
        solution: `def motion(initial_velocity, acceleration, time):
    """Return the final velocity (m/s) and distance (m) under constant acceleration."""
    final_velocity = initial_velocity + acceleration * time
    distance = initial_velocity * time + 0.5 * acceleration * time ** 2
    return final_velocity, distance

final_velocity, distance = motion(5, 2, 10)
print(f"Final velocity: {final_velocity:.1f} m/s")
print(f"Distance: {distance:.1f} m")
print(f"Average speed: {distance / 10:.1f} m/s")`,
      },
      biology: {
        title: "GC content of a gene",
        problem: [
          "The GC content of a DNA sequence is the percentage of its bases that are G or C. It varies between species and affects how stable the DNA is.",
          "Write a function that measures a sequence, then use the results to work out its GC content.",
        ],
        requirements: [
          "Define `sequence_stats(sequence)` that **returns two values**: the length of the sequence and the number of G and C bases.",
          "Call it once on the sequence in the starter code and unpack the result into two variables.",
          "Print the length, the number of GC bases and the GC content as a percentage (1 decimal place).",
        ],
        starterCode: `dna = "ATGCGTACGTTAGCCATGAA"

# Define sequence_stats here


# Call it and print the three results
`,
        expectedOutput: `Length: 20 bases
GC bases: 9
GC content: 45.0%`,
        hints: [
          "`sequence.count(\"G\") + sequence.count(\"C\")` counts the G and C bases.",
          "Return both values separated by a comma: `return len(sequence), gc_count`.",
          "Unpack the returned tuple: `length, gc_count = sequence_stats(dna)`, then the GC content is `gc_count / length * 100`.",
        ],
        solution: `dna = "ATGCGTACGTTAGCCATGAA"

def sequence_stats(sequence):
    """Return the length of a DNA sequence and its number of G and C bases."""
    gc_count = sequence.count("G") + sequence.count("C")
    return len(sequence), gc_count

length, gc_count = sequence_stats(dna)
print(f"Length: {length} bases")
print(f"GC bases: {gc_count}")
print(f"GC content: {gc_count / length * 100:.1f}%")`,
      },
      biochemistry: {
        title: "How saturated is the enzyme?",
        problem: [
          "An enzyme has Vmax = 120 µmol/min and Km = 2.0 mM. The Michaelis–Menten equation gives its rate at a substrate concentration [S]: v = Vmax × [S] / (Km + [S]).",
          "The fraction of Vmax it reaches shows how saturated the enzyme is. Work out both at 6.0 mM substrate.",
        ],
        requirements: [
          "Define `rate_and_saturation(substrate_mm, v_max, k_m)` that **returns two values**: the rate and the fraction of Vmax.",
          "Call it once and unpack the result into two variables.",
          "Print the rate (1 decimal place), the saturation as a percentage (`:.0%`) and the spare capacity, Vmax minus the rate (1 decimal place).",
        ],
        starterCode: `# Define rate_and_saturation here


# Call it at 6.0 mM and print the three results
`,
        expectedOutput: `Rate: 90.0 µmol/min
Saturation: 75%
Spare capacity: 30.0 µmol/min`,
        hints: [
          "Return both values separated by a comma: `return rate, rate / v_max`.",
          "Unpack the returned tuple: `rate, saturation = rate_and_saturation(6.0, 120, 2.0)`.",
          "`:.0%` multiplies by 100 and adds a percent sign: `f\"{0.75:.0%}\"` gives `75%`.",
        ],
        solution: `def rate_and_saturation(substrate_mm, v_max, k_m):
    """Return the Michaelis–Menten rate and the fraction of Vmax reached."""
    rate = v_max * substrate_mm / (k_m + substrate_mm)
    return rate, rate / v_max

rate, saturation = rate_and_saturation(6.0, 120, 2.0)
print(f"Rate: {rate:.1f} µmol/min")
print(f"Saturation: {saturation:.0%}")
print(f"Spare capacity: {120 - rate:.1f} µmol/min")`,
      },
      "general-programming": {
        title: "Price with tax",
        problem: [
          "A shop's prices are stored before tax. A product costs 80.00 before 20% tax.",
          "Write a function that works out the tax and the price including tax, then use them to find what share of the final price is tax.",
        ],
        requirements: [
          "Define `add_tax(net_price, tax_rate)` that **returns two values**: the tax and the price including tax.",
          "Call it once and unpack the result into two variables.",
          "Print the tax, the price including tax (2 decimal places each) and the tax's share of the final price (`:.1%`).",
        ],
        starterCode: `# Define add_tax here


# Call it for 80.00 at 20% tax and print the three results
`,
        expectedOutput: `Tax: 16.00
Price with tax: 96.00
Tax share: 16.7%`,
        hints: [
          "Return both values separated by a comma: `return tax, net_price + tax`.",
          "Unpack the returned tuple: `tax, gross_price = add_tax(80.00, 0.2)`.",
          "The share is `tax / gross_price`. `:.1%` shows it as a percentage with 1 decimal place.",
        ],
        solution: `def add_tax(net_price, tax_rate):
    """Return the tax on a price and the price including tax."""
    tax = net_price * tax_rate
    return tax, net_price + tax

tax, gross_price = add_tax(80.00, 0.2)
print(f"Tax: {tax:.2f}")
print(f"Price with tax: {gross_price:.2f}")
print(f"Tax share: {tax / gross_price:.1%}")`,
      },
    },
  },
];
