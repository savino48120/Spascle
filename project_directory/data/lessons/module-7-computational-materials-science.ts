import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "computational-materials-science";

export const MODULE_7_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "representing-materials-data",
    description: "Combine lists, dictionaries and functions to store a small materials database, calculate derived properties, and select materials that meet design requirements.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Represent a set of materials as a list of dictionaries",
      "Write functions that calculate derived properties from a record",
      "Filter and rank materials against design criteria",
      "Sort records by a property using `sorted()` with `key=`",
    ],
    blocks: [
      { type: "heading", text: "Bringing the pieces together" },
      {
        type: "paragraph",
        text: "This module applies everything from the course to realistic materials problems. A common first step in any computational project is deciding how to **represent** the data. For a collection of materials, each with several named properties, a natural choice is a **list of dictionaries**: each dictionary is one material's record, and the list holds the whole dataset.",
      },
      {
        type: "code",
        code: `materials = [
    {"name": "Aluminium 6061", "density": 2.70, "youngs_modulus": 69,  "yield_strength": 276, "cost": 2.5},
    {"name": "Titanium Ti-6Al-4V", "density": 4.43, "youngs_modulus": 114, "yield_strength": 880, "cost": 25.0},
    {"name": "Steel AISI 4140", "density": 7.85, "youngs_modulus": 205, "yield_strength": 655, "cost": 1.2},
    {"name": "Magnesium AZ31", "density": 1.77, "youngs_modulus": 45,  "yield_strength": 200, "cost": 4.0},
    {"name": "Copper C11000", "density": 8.96, "youngs_modulus": 117, "yield_strength": 70,  "cost": 8.0},
]
# Units: density g/cm³, modulus GPa, yield strength MPa, cost $/kg

print(len(materials), "materials")
print(materials[1]["name"], "yields at", materials[1]["yield_strength"], "MPa")`,
        output: `5 materials
Titanium Ti-6Al-4V yields at 880 MPa`,
      },
      {
        type: "callout",
        tone: "tip",
        title: "Record your units",
        text: "Unit mistakes are among the most common errors in scientific code. Write the units in a comment next to the data, include them in key names (such as `density_g_cm3`), or both.",
      },
      { type: "heading", text: "Derived properties" },
      {
        type: "paragraph",
        text: "Engineers often care less about a raw property than about a combination. For a lightweight part, what matters is strength or stiffness **per unit mass**: the **specific strength** (yield strength ÷ density) and **specific stiffness** (Young's modulus ÷ density). Small functions that take a record and return a derived value keep these formulas in one tested place.",
      },
      {
        type: "code",
        code: `def specific_strength(material):
    """Yield strength divided by density, in MPa per (g/cm³)."""
    return material["yield_strength"] / material["density"]

def specific_stiffness(material):
    """Young's modulus divided by density, in GPa per (g/cm³)."""
    return material["youngs_modulus"] / material["density"]

materials = [
    {"name": "Aluminium 6061", "density": 2.70, "youngs_modulus": 69, "yield_strength": 276},
    {"name": "Steel AISI 4140", "density": 7.85, "youngs_modulus": 205, "yield_strength": 655},
    {"name": "Titanium Ti-6Al-4V", "density": 4.43, "youngs_modulus": 114, "yield_strength": 880},
]

print(f"{'Material':<20}{'Spec. strength':>16}{'Spec. stiffness':>17}")
for material in materials:
    print(f"{material['name']:<20}{specific_strength(material):>16.1f}{specific_stiffness(material):>17.1f}")`,
        output: `Material              Spec. strength  Spec. stiffness
Aluminium 6061                 102.2             25.6
Steel AISI 4140                 83.4             26.1
Titanium Ti-6Al-4V             198.6             25.7`,
      },
      {
        type: "explanation",
        text: "Steel is the strongest and stiffest of the three in absolute terms, but per unit mass titanium is far stronger, and the three have almost identical specific stiffness. This is why aircraft use aluminium and titanium alloys.",
      },
      { type: "subheading", text: "Adding computed values to the records" },
      {
        type: "paragraph",
        text: "Because dictionaries are mutable, you can store a derived value back in each record with a loop. Later code can then use it like any other property.",
      },
      {
        type: "code",
        code: `materials = [
    {"name": "Aluminium 6061", "density": 2.70, "yield_strength": 276},
    {"name": "Magnesium AZ31", "density": 1.77, "yield_strength": 200},
]

for material in materials:
    material["specific_strength"] = round(material["yield_strength"] / material["density"], 1)

print(materials[1])`,
        output: "{'name': 'Magnesium AZ31', 'density': 1.77, 'yield_strength': 200, 'specific_strength': 113.0}",
      },
      { type: "heading", text: "Selecting materials" },
      {
        type: "paragraph",
        text: "Materials selection usually starts by removing candidates that fail a hard requirement, then ranking the rest. A loop with an `if`, or a function that returns `True` or `False`, expresses the requirements clearly.",
      },
      {
        type: "code",
        code: `materials = [
    {"name": "Aluminium 6061", "density": 2.70, "yield_strength": 276, "cost": 2.5},
    {"name": "Titanium Ti-6Al-4V", "density": 4.43, "yield_strength": 880, "cost": 25.0},
    {"name": "Steel AISI 4140", "density": 7.85, "yield_strength": 655, "cost": 1.2},
    {"name": "Magnesium AZ31", "density": 1.77, "yield_strength": 200, "cost": 4.0},
    {"name": "Copper C11000", "density": 8.96, "yield_strength": 70, "cost": 8.0},
]

def meets_requirements(material, max_density=5.0, min_strength=250):
    return material["density"] <= max_density and material["yield_strength"] >= min_strength

candidates = []
for material in materials:
    if meets_requirements(material):
        candidates.append(material)

for material in candidates:
    print(material["name"])`,
        output: `Aluminium 6061
Titanium Ti-6Al-4V`,
      },
      { type: "heading", text: "Sorting records by a property" },
      {
        type: "paragraph",
        text: "`sorted()` can't sort dictionaries on its own, because it doesn't know which property to compare. Its `key=` argument takes a **function** that is applied to each item to get the value to sort by. Notice that you pass the function's name **without** brackets: you are handing over the function itself for `sorted()` to call, not calling it yourself.",
      },
      {
        type: "code",
        code: `materials = [
    {"name": "Aluminium 6061", "density": 2.70, "yield_strength": 276, "cost": 2.5},
    {"name": "Titanium Ti-6Al-4V", "density": 4.43, "yield_strength": 880, "cost": 25.0},
    {"name": "Steel AISI 4140", "density": 7.85, "yield_strength": 655, "cost": 1.2},
    {"name": "Magnesium AZ31", "density": 1.77, "yield_strength": 200, "cost": 4.0},
]

def get_cost(material):
    return material["cost"]

def strength_per_dollar(material):
    # MPa per (g/cm³) per ($/kg): higher is better value for a light, strong part
    return material["yield_strength"] / material["density"] / material["cost"]

print("Cheapest first:")
for material in sorted(materials, key=get_cost):
    print(f"  {material['name']}: \${material['cost']}/kg")

best = max(materials, key=strength_per_dollar)
print("Best strength per dollar:", best["name"])`,
        output: `Cheapest first:
  Steel AISI 4140: $1.2/kg
  Aluminium 6061: $2.5/kg
  Magnesium AZ31: $4.0/kg
  Titanium Ti-6Al-4V: $25.0/kg
Best strength per dollar: Steel AISI 4140`,
      },
      {
        type: "explanation",
        text: "`max()` and `min()` accept `key=` too. Titanium is the best performer, but on strength per dollar the cheap steel wins: ranking depends on which criterion you choose.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Beyond lists of dictionaries",
        text: "For larger datasets, scientists usually move to a table library such as **pandas**, or to specialised materials libraries such as **pymatgen**, which represent structures and properties with their own objects. The ideas are the same: records, derived properties, filters and rankings.",
      },
    ],
    exercises: [
      {
        id: "m7l1-q1",
        question: "How would you get the density of the third material in `materials`, a list of dictionaries?",
        options: [
          { id: "a", text: "`materials[\"density\"][2]`" },
          { id: "b", text: "`materials[2][\"density\"]`" },
          { id: "c", text: "`materials.density[3]`" },
        ],
        correctOptionId: "b",
        explanation: "First pick the record from the list by index (2 is the third), then the property from the dictionary by key.",
      },
      {
        id: "m7l1-q2",
        question: "What does `sorted(materials, key=get_cost)` do?",
        options: [
          { id: "a", text: "Sorts the materials by the value `get_cost` returns for each one" },
          { id: "b", text: "Removes materials that have no cost" },
          { id: "c", text: "Calls `get_cost()` once and sorts by its result" },
        ],
        correctOptionId: "a",
        explanation: "`sorted()` calls the key function on every item and orders the items by those values.",
      },
      {
        id: "m7l1-q3",
        question: "What is specific strength?",
        options: [
          { id: "a", text: "Yield strength multiplied by density" },
          { id: "b", text: "Yield strength divided by density: strength per unit mass" },
          { id: "c", text: "The strength of one specific sample" },
        ],
        correctOptionId: "b",
        explanation: "Dividing by density gives strength per unit mass, which matters when weight must be kept low.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "working-with-scientific-data",
    description: "Load tabular data into NumPy, convert units, clean out invalid readings, and extract physical quantities with a straight-line fit.",
    estimatedMinutes: 35,
    learningObjectives: [
      "Load comma-separated data into a NumPy array with `np.loadtxt()`",
      "Select columns, convert units and remove invalid values",
      "Fit a straight line to data with `np.polyfit()` and interpret the slope",
      "Find key values such as a maximum and where it occurs",
    ],
    blocks: [
      { type: "heading", text: "Data as text" },
      {
        type: "paragraph",
        text: "Instruments and simulations commonly save results as **CSV** (comma-separated values) files: plain text where each line is a row and commas separate the columns, often with a header line describing them. NumPy's `np.loadtxt()` reads such data straight into a 2D array.",
      },
      {
        type: "paragraph",
        text: "On your own computer you would write `np.loadtxt(\"expansion.csv\", delimiter=\",\", skiprows=1)`. In these examples the data is written into the program as a string, and `io.StringIO()` makes that string behave like a file, so the same `loadtxt` call works.",
      },
      {
        type: "code",
        code: `import io
import numpy as np

csv_text = """temperature_c,length_mm
20,100.000
100,100.185
200,100.415
300,100.648
400,100.880
500,101.115"""

data = np.loadtxt(io.StringIO(csv_text), delimiter=",", skiprows=1)
print(data.shape)
print(data[:2])`,
        output: `(6, 2)
[[ 20.    100.   ]
 [100.    100.185]]`,
      },
      {
        type: "explanation",
        text: "`delimiter=\",\"` says the columns are separated by commas, and `skiprows=1` skips the header line, which contains text rather than numbers.",
      },
      { type: "heading", text: "Selecting columns and converting units" },
      {
        type: "paragraph",
        text: "Give each column a meaningful name by slicing it out of the table. Then unit conversions apply to the whole column at once.",
      },
      {
        type: "code",
        code: `import io
import numpy as np

csv_text = """temperature_c,length_mm
20,100.000
100,100.185
200,100.415
300,100.648
400,100.880
500,101.115"""
data = np.loadtxt(io.StringIO(csv_text), delimiter=",", skiprows=1)

temperature_k = data[:, 0] + 273.15
length_m = data[:, 1] / 1000
strain = (length_m - length_m[0]) / length_m[0]

print("T (K):", temperature_k)
print("Strain (%):", np.round(strain * 100, 3))`,
        output: `T (K): [293.15 373.15 473.15 573.15 673.15 773.15]
Strain (%): [0.    0.185 0.415 0.648 0.88  1.115]`,
      },
      { type: "heading", text: "Fitting a straight line" },
      {
        type: "paragraph",
        text: "Many physical laws are linear over a useful range, and the **slope** of the line is the quantity you want. For thermal expansion, strain = α × ΔT, so the slope of strain against temperature is the expansion coefficient α. `np.polyfit(x, y, 1)` finds the best-fit straight line (a polynomial of degree 1) by least squares and returns the slope and intercept.",
      },
      {
        type: "code",
        code: `import io
import numpy as np

csv_text = """temperature_c,length_mm
20,100.000
100,100.185
200,100.415
300,100.648
400,100.880
500,101.115"""
data = np.loadtxt(io.StringIO(csv_text), delimiter=",", skiprows=1)
temperature = data[:, 0]
length = data[:, 1]
strain = (length - length[0]) / length[0]

slope, intercept = np.polyfit(temperature, strain, 1)
print(f"Expansion coefficient: {slope:.2e} 1/K")
print(f"That is {slope * 1e6:.1f} × 10⁻⁶ /K")`,
        output: `Expansion coefficient: 2.32e-05 1/K
That is 23.2 × 10⁻⁶ /K`,
      },
      {
        type: "explanation",
        text: "Always compare a fitted result with reference values. 23.2 × 10⁻⁶ /K matches aluminium (23.1 × 10⁻⁶ /K) and is far from copper (16.5 × 10⁻⁶ /K) or steel (about 12 × 10⁻⁶ /K), which is a useful check that the sample is what you think it is.",
      },
      { type: "subheading", text: "How good is the fit?" },
      {
        type: "paragraph",
        text: "`np.polyval()` evaluates the fitted line at your x-values. The differences between the data and the line are the **residuals**; small, random residuals mean the straight line describes the data well.",
      },
      {
        type: "code",
        code: `import numpy as np

temperature = np.array([20, 100, 200, 300, 400, 500])
strain = np.array([0.0, 0.00185, 0.00415, 0.00648, 0.00880, 0.01115])

coefficients = np.polyfit(temperature, strain, 1)
fitted = np.polyval(coefficients, temperature)
residuals = strain - fitted

print("Largest residual:", f"{np.max(np.abs(residuals)):.1e}")`,
        output: "Largest residual: 1.8e-05",
      },
      { type: "heading", text: "Cleaning data" },
      {
        type: "paragraph",
        text: "Real datasets contain problems: a sensor drops out and records `0`, a value is missing, or a reading is physically impossible. NumPy represents missing values as `np.nan` (*not a number*). Boolean masks remove invalid rows before analysis, and `np.isnan()` finds missing values.",
      },
      {
        type: "code",
        code: `import numpy as np

hardness = np.array([152, 160, np.nan, 158, 0, 149, 155, 1450])   # HV

valid = ~np.isnan(hardness) & (hardness > 0) & (hardness < 1000)
clean = hardness[valid]

print(f"Kept {clean.size} of {hardness.size} readings: {clean}")
print(f"Mean hardness: {clean.mean():.1f} HV")`,
        output: `Kept 5 of 8 readings: [152. 160. 158. 149. 155.]
Mean hardness: 154.8 HV`,
      },
      {
        type: "explanation",
        text: "`~` means *not* for Boolean arrays, so `~np.isnan(hardness)` is `True` for values that are present. Always report how many points you removed and why: silently discarding data is poor scientific practice.",
      },
      { type: "heading", text: "Finding key values" },
      {
        type: "paragraph",
        text: "`np.max()` gives the largest value, and `np.argmax()` gives its **index**, which you can use to look up the matching value in another column. From a tensile test, for example, this gives the ultimate tensile strength and the strain at which it occurred.",
      },
      {
        type: "code",
        code: `import numpy as np

strain = np.array([0.000, 0.002, 0.004, 0.010, 0.050, 0.100, 0.150, 0.180])
stress = np.array([0, 140, 270, 300, 330, 345, 340, 310])   # MPa

peak_index = np.argmax(stress)
print(f"Ultimate tensile strength: {stress[peak_index]} MPa")
print(f"Reached at a strain of {strain[peak_index]:.3f}")

elastic = strain <= 0.004
modulus, _ = np.polyfit(strain[elastic], stress[elastic], 1)
print(f"Young's modulus: {modulus / 1000:.1f} GPa")`,
        output: `Ultimate tensile strength: 345 MPa
Reached at a strain of 0.100
Young's modulus: 67.5 GPa`,
      },
      {
        type: "explanation",
        text: "Assigning to `_` is a convention for *a value I don't need*: here, the intercept of the fit.",
      },
    ],
    exercises: [
      {
        id: "m7l2-q1",
        question: "Why is `skiprows=1` used with `np.loadtxt()` here?",
        options: [
          { id: "a", text: "To skip the header line, which contains text instead of numbers" },
          { id: "b", text: "To skip every other row" },
          { id: "c", text: "To start counting rows from 1" },
        ],
        correctOptionId: "a",
        explanation: "`loadtxt` expects numbers, so the text header must be skipped.",
      },
      {
        id: "m7l2-q2",
        question: "What does `np.polyfit(x, y, 1)` return?",
        options: [
          { id: "a", text: "The slope and intercept of the best-fit straight line" },
          { id: "b", text: "The largest value of `y`" },
          { id: "c", text: "A plot of `y` against `x`" },
        ],
        correctOptionId: "a",
        explanation: "With degree 1, `polyfit` returns the coefficients of a straight line: slope first, then intercept.",
      },
      {
        id: "m7l2-q3",
        question: "What is the difference between `np.max(a)` and `np.argmax(a)`?",
        options: [
          { id: "a", text: "There is no difference" },
          { id: "b", text: "`max` returns the largest value; `argmax` returns its index" },
          { id: "c", text: "`argmax` returns the second largest value" },
        ],
        correctOptionId: "b",
        explanation: "The index from `argmax` lets you find matching values in other arrays, such as the strain at peak stress.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "visualizing-materials-properties",
    description: "Turn materials data into clear figures: a stress–strain curve, data with a fitted line, and a materials property chart on logarithmic axes.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Plot a measured curve and mark key points on it",
      "Show data points together with a fitted line",
      "Use logarithmic axes for properties spanning several orders of magnitude",
      "Put several plots side by side with subplots",
    ],
    blocks: [
      { type: "heading", text: "Good scientific figures" },
      {
        type: "paragraph",
        text: "A figure should let a reader understand your result without reading the code. Before looking at examples, here are the habits that make the biggest difference:",
      },
      {
        type: "list",
        items: [
          "Label every axis with the quantity **and its units**.",
          "Show measured data as **markers** and models or fits as **lines**, so readers can tell them apart.",
          "Add a legend whenever there is more than one series.",
          "Choose scales that suit the data: logarithmic axes for values spanning several orders of magnitude.",
          "Keep it simple: remove anything that doesn't help the reader.",
        ],
      },
      { type: "heading", text: "A stress–strain curve" },
      {
        type: "paragraph",
        text: "The stress–strain curve from a tensile test is one of the most important plots in materials science. This example plots the curve and marks the ultimate tensile strength found with `np.argmax()`.",
      },
      {
        type: "code",
        code: `import numpy as np
import matplotlib.pyplot as plt

strain = np.array([0.000, 0.001, 0.002, 0.003, 0.004, 0.010, 0.030, 0.050,
                   0.075, 0.100, 0.125, 0.150, 0.170, 0.180])
stress = np.array([0, 70, 140, 205, 270, 300, 318, 330, 340, 345, 344, 340, 328, 310])  # MPa

peak = np.argmax(stress)

plt.figure(figsize=(6, 4))
plt.plot(strain * 100, stress, color="#580A50", marker="o", markersize=4, label="Measured")
plt.plot(strain[peak] * 100, stress[peak], "o", color="#DB9000", markersize=9, label=f"UTS = {stress[peak]} MPa")
plt.xlabel("Strain (%)")
plt.ylabel("Stress (MPa)")
plt.title("Tensile test of an aluminium alloy")
plt.legend()
plt.grid(True)
plt.show()`,
        outputImage: {
          src: "/images/lessons/materials-stress-strain.png",
          alt: "Stress–strain curve rising steeply to about 300 MPa at under 1 percent strain, then gradually to a maximum of 345 MPa near 10 percent, marked with a gold point labelled UTS = 345 MPa, before falling to 310 MPa at 18 percent.",
          width: 540,
          height: 391,
        },
      },
      {
        type: "explanation",
        text: "The format string `\"o\"` in the second `plt.plot()` call draws a marker with no line, which is how a single point is highlighted.",
      },
      { type: "heading", text: "Data with a fitted line" },
      {
        type: "paragraph",
        text: "When you fit a model, plot the measured points and the fitted line together so the quality of the fit is visible. Calculate the line over a smooth range of x-values with `np.linspace()` and `np.polyval()`.",
      },
      {
        type: "code",
        code: `import numpy as np
import matplotlib.pyplot as plt

temperature = np.array([20, 100, 200, 300, 400, 500])            # °C
strain = np.array([0.0, 0.00185, 0.00415, 0.00648, 0.00880, 0.01115])

coefficients = np.polyfit(temperature, strain, 1)
smooth_t = np.linspace(0, 520, 100)

plt.figure(figsize=(6, 4))
plt.plot(temperature, strain * 100, "o", color="#580A50", label="Measured")
plt.plot(smooth_t, np.polyval(coefficients, smooth_t) * 100, "--", color="#DB9000",
         label=f"Fit: α = {coefficients[0] * 1e6:.1f} × 10⁻⁶ /K")
plt.xlabel("Temperature (°C)")
plt.ylabel("Thermal strain (%)")
plt.title("Thermal expansion")
plt.legend()
plt.grid(True)
plt.show()`,
        outputImage: {
          src: "/images/lessons/materials-linear-fit.png",
          alt: "Six measured points of thermal strain against temperature, lying on a dashed straight fitted line labelled Fit: alpha = 23.2 times ten to the minus six per kelvin.",
          width: 536,
          height: 391,
        },
      },
      { type: "heading", text: "Property charts on logarithmic axes" },
      {
        type: "paragraph",
        text: "Material properties span enormous ranges: Young's modulus runs from below 0.01 GPa for foams to over 1000 GPa for diamond. On ordinary axes, most materials would be squashed into one corner. **Logarithmic axes**, set with `plt.xscale(\"log\")` and `plt.yscale(\"log\")`, give equal space to each factor of ten. Charts like this, popularised by Michael Ashby, are a standard tool for choosing materials.",
      },
      {
        type: "code",
        code: `import matplotlib.pyplot as plt

families = {
    "Metals":    ([2.7, 4.4, 7.8, 8.9, 19.3], [69, 114, 205, 117, 411]),
    "Ceramics":  ([3.9, 3.2, 2.2, 3.5], [380, 410, 72, 1050]),
    "Polymers":  ([0.95, 1.2, 1.4, 1.05], [1.0, 2.4, 3.0, 3.3]),
    "Foams":     ([0.03, 0.05, 0.1], [0.005, 0.02, 0.08]),
}   # (density in g/cm³, Young's modulus in GPa)

plt.figure(figsize=(6, 4))
for family, (density, modulus) in families.items():
    plt.scatter(density, modulus, label=family, s=50)

plt.xscale("log")
plt.yscale("log")
plt.xlabel("Density (g/cm³)")
plt.ylabel("Young's modulus (GPa)")
plt.title("Stiffness versus density")
plt.legend()
plt.grid(True, which="both", alpha=0.3)
plt.show()`,
        outputImage: {
          src: "/images/lessons/materials-ashby-chart.png",
          alt: "Log–log scatter plot of Young's modulus against density. Foams sit at the bottom left, polymers in the middle left, and metals and ceramics in separate clusters at the top right.",
          width: 547,
          height: 396,
        },
      },
      {
        type: "explanation",
        text: "Each material family occupies its own region of the chart, which is exactly what makes these charts useful for selection.",
      },
      { type: "heading", text: "Several plots in one figure" },
      {
        type: "paragraph",
        text: "`plt.subplots(rows, columns)` creates a figure containing a grid of separate plots, called **axes**. It returns the figure and the axes; you then draw on each axes object directly. Its methods have slightly different names: `ax.set_xlabel()` instead of `plt.xlabel()`, and `ax.set_title()` instead of `plt.title()`.",
      },
      {
        type: "code",
        code: `import numpy as np
import matplotlib.pyplot as plt

temperature = np.linspace(300, 1200, 50)                  # K
diffusivity = 2.3e-5 * np.exp(-148_000 / (8.314 * temperature))

fig, (left, right) = plt.subplots(1, 2, figsize=(9, 3.5))

left.plot(temperature, diffusivity, color="#580A50")
left.set_xlabel("Temperature (K)")
left.set_ylabel("D (m²/s)")
left.set_title("Linear scale")

right.plot(1000 / temperature, diffusivity, color="#580A50")
right.set_yscale("log")
right.set_xlabel("1000 / T (1/K)")
right.set_title("Arrhenius plot")

fig.tight_layout()
plt.show()`,
        outputImage: {
          src: "/images/lessons/materials-subplots.png",
          alt: "Two side-by-side plots of carbon diffusivity in iron. Left: on linear axes the curve is flat near zero and then rises sharply above 1000 K. Right: on a log scale against 1000 over T, the same data forms a straight line.",
          width: 889,
          height: 340,
        },
      },
      {
        type: "explanation",
        text: "On linear axes the diffusivity looks negligible below about 900 K. The Arrhenius plot (log of D against 1/T) turns the exponential into a straight line whose slope gives the activation energy. Choosing the right axes can reveal the physics.",
      },
    ],
    exercises: [
      {
        id: "m7l3-q1",
        question: "When should you use logarithmic axes?",
        options: [
          { id: "a", text: "Whenever the data contains decimals" },
          { id: "b", text: "When values span several orders of magnitude" },
          { id: "c", text: "Only for bar charts" },
        ],
        correctOptionId: "b",
        explanation: "Log axes give equal space to each factor of ten, so very small and very large values are both visible.",
      },
      {
        id: "m7l3-q2",
        question: "How should measured data and a fitted model usually be shown together?",
        options: [
          { id: "a", text: "Both as solid lines of the same colour" },
          { id: "b", text: "Data as markers and the model as a line" },
          { id: "c", text: "Only the model needs to be shown" },
        ],
        correctOptionId: "b",
        explanation: "Markers show where measurements actually are, and a line shows the continuous model, so readers can judge the fit.",
      },
      {
        id: "m7l3-q3",
        question: "After `fig, ax = plt.subplots()`, how do you label the x-axis?",
        options: [
          { id: "a", text: "`ax.set_xlabel(\"...\")`" },
          { id: "b", text: "`ax.xlabel = \"...\"`" },
          { id: "c", text: "`fig.label(\"...\")`" },
        ],
        correctOptionId: "a",
        explanation: "Axes objects use `set_` methods: `set_xlabel()`, `set_ylabel()`, `set_title()`.",
      },
    ],
  },
];
