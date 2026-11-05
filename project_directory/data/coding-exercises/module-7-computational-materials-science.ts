import type { CodingExercise } from "@/types/lesson";

/** Hands-on coding exercises for Module 7 (Computational Materials Science). Materials science only, like the module's lessons. */
export const MODULE_7_CODING_EXERCISES: CodingExercise[] = [
  {
    moduleSlug: "computational-materials-science",
    lessonSlug: "representing-materials-data",
    variants: {
      "materials-science": {
        title: "The stiffest for its weight",
        problem: [
          "For a light, stiff component you need a high **specific stiffness**: Young's modulus divided by density.",
          "The starter code holds four candidate materials as a list of dictionaries. Report each one's specific stiffness and pick the best.",
        ],
        requirements: [
          "Write a function `specific_stiffness(material)` that takes one record and returns its modulus divided by its density.",
          "Loop over the materials and print each as `Aluminium 6061: 25.6` (1 decimal place).",
          "Use `max()` with `key=` to find the best material and print `Best: ...`.",
        ],
        starterCode: `materials = [
    {"name": "Aluminium 6061", "density": 2.70, "youngs_modulus": 69},
    {"name": "Alumina", "density": 3.95, "youngs_modulus": 380},
    {"name": "Steel AISI 4140", "density": 7.85, "youngs_modulus": 205},
    {"name": "Nylon 6", "density": 1.14, "youngs_modulus": 2.7},
]   # density in g/cm³, modulus in GPa

# Define specific_stiffness, print each value, then the best material
`,
        expectedOutput: `Aluminium 6061: 25.6
Alumina: 96.2
Steel AISI 4140: 26.1
Nylon 6: 2.4
Best: Alumina`,
        hints: [
          "The function body is one line: `return material[\"youngs_modulus\"] / material[\"density\"]`.",
          "Inside the loop: `print(f\"{material['name']}: {specific_stiffness(material):.1f}\")`.",
          "Pass the function itself, without brackets: `best = max(materials, key=specific_stiffness)`, then print `best[\"name\"]`.",
        ],
        solution: `materials = [
    {"name": "Aluminium 6061", "density": 2.70, "youngs_modulus": 69},
    {"name": "Alumina", "density": 3.95, "youngs_modulus": 380},
    {"name": "Steel AISI 4140", "density": 7.85, "youngs_modulus": 205},
    {"name": "Nylon 6", "density": 1.14, "youngs_modulus": 2.7},
]   # density in g/cm³, modulus in GPa

def specific_stiffness(material):
    """Young's modulus divided by density, in GPa per (g/cm³)."""
    return material["youngs_modulus"] / material["density"]

for material in materials:
    print(f"{material['name']}: {specific_stiffness(material):.1f}")

best = max(materials, key=specific_stiffness)
print("Best:", best["name"])`,
      },
    },
  },
  {
    moduleSlug: "computational-materials-science",
    lessonSlug: "working-with-scientific-data",
    variants: {
      "materials-science": {
        title: "Young's modulus from test data",
        problem: [
          "The starter code contains the elastic part of a tensile test as CSV text: strain in the first column and stress in MPa in the second.",
          "In the elastic region, stress = E × strain, so the slope of a straight-line fit is Young's modulus E.",
        ],
        requirements: [
          "Load the data with `np.loadtxt()`, skipping the header.",
          "Print the number of data points.",
          "Fit a straight line to stress against strain with `np.polyfit()`.",
          "Print Young's modulus in GPa with 1 decimal place.",
        ],
        starterCode: `import io
import numpy as np

csv_text = """strain,stress_mpa
0.0000,0
0.0010,71
0.0020,139
0.0030,211
0.0040,280
0.0050,352"""

# Load the data, then fit a line to find Young's modulus
`,
        expectedOutput: `Data points: 6
Young's modulus: 70.3 GPa`,
        hints: [
          "`data = np.loadtxt(io.StringIO(csv_text), delimiter=\",\", skiprows=1)` loads the table.",
          "Columns are `data[:, 0]` (strain) and `data[:, 1]` (stress); `len(data)` counts the rows.",
          "`slope, intercept = np.polyfit(strain, stress, 1)` gives the slope in MPa; divide by 1000 for GPa.",
        ],
        solution: `import io
import numpy as np

csv_text = """strain,stress_mpa
0.0000,0
0.0010,71
0.0020,139
0.0030,211
0.0040,280
0.0050,352"""

data = np.loadtxt(io.StringIO(csv_text), delimiter=",", skiprows=1)
strain = data[:, 0]
stress = data[:, 1]
print("Data points:", len(data))

slope, intercept = np.polyfit(strain, stress, 1)
print(f"Young's modulus: {slope / 1000:.1f} GPa")`,
      },
    },
  },
  {
    moduleSlug: "computational-materials-science",
    lessonSlug: "visualizing-materials-properties",
    variants: {
      "materials-science": {
        title: "Plot and report a tensile test",
        problem: [
          "The starter code holds the full stress–strain curve of a steel sample.",
          "Find the ultimate tensile strength (the highest stress) and the strain at which it occurs, then plot the curve with that point highlighted.",
        ],
        requirements: [
          "Use `np.argmax()` to find the position of the highest stress.",
          "Print `UTS: 520 MPa` and `At strain: 0.120` (3 decimal places).",
          "Plot the curve with strain in % on the x-axis, label both axes with units, mark the UTS with a single highlighted point, and add a legend.",
          "The automatic check compares your printed output; check the plot by eye.",
        ],
        starterCode: `import numpy as np
import matplotlib.pyplot as plt

strain = np.array([0.0, 0.001, 0.002, 0.005, 0.02, 0.05, 0.08, 0.12, 0.16, 0.20, 0.22])
stress = np.array([0, 200, 350, 380, 400, 450, 500, 520, 510, 470, 430])   # MPa

# Find the UTS, print it, and plot the curve
`,
        expectedOutput: `UTS: 520 MPa
At strain: 0.120`,
        hints: [
          "`peak = np.argmax(stress)` gives the index of the largest stress; use it with both arrays.",
          "Plot the curve with `plt.plot(strain * 100, stress, label=\"Steel\")`.",
          "Highlight one point with a marker and no line: `plt.plot(strain[peak] * 100, stress[peak], \"o\", markersize=9, label=\"UTS\")`, then `plt.legend()`.",
        ],
        solution: `import numpy as np
import matplotlib.pyplot as plt

strain = np.array([0.0, 0.001, 0.002, 0.005, 0.02, 0.05, 0.08, 0.12, 0.16, 0.20, 0.22])
stress = np.array([0, 200, 350, 380, 400, 450, 500, 520, 510, 470, 430])   # MPa

peak = np.argmax(stress)
print(f"UTS: {stress[peak]} MPa")
print(f"At strain: {strain[peak]:.3f}")

plt.plot(strain * 100, stress, marker="o", markersize=4, label="Steel")
plt.plot(strain[peak] * 100, stress[peak], "o", markersize=9, label="UTS")
plt.xlabel("Strain (%)")
plt.ylabel("Stress (MPa)")
plt.title("Tensile test")
plt.legend()
plt.grid(True)
plt.show()`,
      },
    },
  },
];
