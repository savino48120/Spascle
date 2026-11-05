import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "scientific-python";

export const MODULE_6_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "introduction-to-numpy",
    description: "Meet NumPy, the foundation of numerical computing in Python: import it, create your first arrays, and calculate on whole datasets at once.",
    estimatedMinutes: 25,
    learningObjectives: [
      "Explain what modules, packages and libraries are, and import NumPy",
      "Describe why NumPy arrays are used instead of lists for numerical work",
      "Create an array from a list and do arithmetic on every element at once",
      "Calculate summary statistics with NumPy functions",
    ],
    blocks: [
      { type: "heading", text: "Modules, packages and libraries" },
      {
        type: "paragraph",
        text: "You have already used `import math` to load extra functions. A **module** is a single file of Python code; a **package** is a collection of modules; and **library** is the everyday word for a package that provides a set of tools. Python's real strength in science comes from libraries written by the community, and the most important of all is **NumPy** (Numerical Python).",
      },
      {
        type: "paragraph",
        text: "NumPy provides the **array**: a fast, compact grid of numbers. Almost every scientific Python library, including Matplotlib, SciPy, pandas and the materials packages ASE and pymatgen, is built on NumPy arrays.",
      },
      {
        type: "callout",
        tone: "info",
        title: "An introduction, not the whole story",
        text: "This module gives you enough NumPy and Matplotlib to analyse and plot simple data. Both have separate SPASCLE courses that go much further.",
      },
      { type: "heading", text: "Importing NumPy" },
      {
        type: "paragraph",
        text: "NumPy is imported with a short **alias**. `import numpy as np` loads the library and lets you refer to it as `np`. This alias is a universal convention: you will see `np.` in almost all scientific Python code. The first time you run NumPy code here, it takes a few seconds to load.",
      },
      {
        type: "code",
        code: `import numpy as np

temperatures = np.array([293.0, 310.0, 350.0, 400.0])
print(temperatures)
print(type(temperatures))`,
        output: `[293. 310. 350. 400.]
<class 'numpy.ndarray'>`,
      },
      {
        type: "explanation",
        text: "`np.array()` turns a list into an array. NumPy prints arrays without commas, and shows `293.` as shorthand for `293.0`. The type is `ndarray`, short for *n-dimensional array*.",
      },
      { type: "heading", text: "Why not just use lists?" },
      {
        type: "paragraph",
        text: "Lists can hold numbers, but they weren't designed for maths. To convert every temperature in a list you need a loop. With an array, you write the calculation once and NumPy applies it to **every element**. This is called **vectorised** arithmetic.",
      },
      {
        type: "code",
        code: `import numpy as np

celsius_list = [20, 450, 850, 1050]

# With a list: a loop is needed
kelvin_list = []
for temperature in celsius_list:
    kelvin_list.append(temperature + 273.15)
print(kelvin_list)

# With an array: one expression
celsius = np.array(celsius_list)
print(celsius + 273.15)`,
        output: `[293.15, 723.15, 1123.15, 1323.15]
[ 293.15  723.15 1123.15 1323.15]`,
      },
      {
        type: "list",
        items: [
          "**Shorter, clearer code**: the formula looks like the maths it represents.",
          "**Much faster**: NumPy does the work in optimised compiled code. On millions of values it can be 10 to 100 times faster than a Python loop.",
          "**Less memory**: an array stores numbers compactly, all of the same type.",
          "**A huge toolbox**: statistics, linear algebra, Fourier transforms, random numbers and more.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "+ means different things",
        text: "For lists, `+` joins two lists together: `[1, 2] + [3, 4]` is `[1, 2, 3, 4]`. For arrays, `+` adds element by element: `np.array([1, 2]) + np.array([3, 4])` is `[4 6]`.",
      },
      { type: "heading", text: "Calculating with arrays" },
      {
        type: "paragraph",
        text: "All the arithmetic operators work element by element, both between an array and a single number and between two arrays of the same length. NumPy also has its own versions of mathematical functions, such as `np.sqrt()`, `np.exp()` and `np.log()`, which work on whole arrays.",
      },
      {
        type: "contextExample",
        title: "A formula applied to a whole dataset",
        variants: {
          "materials-science": {
            intro: "Calculate the density of five samples from their masses and volumes in one step.",
            code: `import numpy as np

masses = np.array([26.98, 89.60, 45.10, 78.70, 193.2])   # g
volumes = np.array([10.0, 10.0, 10.0, 10.0, 10.0])      # cm³

densities = masses / volumes
print(densities)`,
            output: "[ 2.698  8.96   4.51   7.87  19.32 ]",
          },
          chemistry: {
            intro: "Convert a set of hydrogen-ion concentrations to pH values with pH = −log₁₀[H⁺].",
            code: `import numpy as np

h_concentration = np.array([1e-2, 3.2e-5, 1e-7, 5e-10])   # mol/L
ph = -np.log10(h_concentration)
print(np.round(ph, 2))`,
            output: "[2.   4.49 7.   9.3 ]",
          },
          physics: {
            intro: "Calculate the kinetic energy of a 2 kg object at several speeds.",
            code: `import numpy as np

speeds = np.array([1.0, 2.0, 5.0, 10.0])   # m/s
energies = 0.5 * 2.0 * speeds ** 2
print(energies)`,
            output: "[  1.   4.  25. 100.]",
          },
          biology: {
            intro: "Exponential growth of a culture at several time points.",
            code: `import numpy as np

hours = np.array([0, 1, 2, 3, 4])
cells = 100 * 2 ** hours
print(cells)`,
            output: "[ 100  200  400  800 1600]",
          },
          biochemistry: {
            intro: "Michaelis–Menten rates for a series of substrate concentrations.",
            code: `import numpy as np

substrate = np.array([0.5, 1.0, 2.5, 5.0, 10.0])   # mM
rate = 120.0 * substrate / (2.5 + substrate)
print(np.round(rate, 1))`,
            output: "[20.  34.3 60.  80.  96. ]",
          },
          "general-programming": {
            intro: "Calculate the line totals of a shopping order by multiplying every price by its quantity in one step.",
            code: `import numpy as np

prices = np.array([4.99, 12.50, 0.89, 25.00, 7.25])
quantities = np.array([3, 1, 10, 2, 4])

line_totals = prices * quantities
print(line_totals)
print(f"Order total: {line_totals.sum():.2f}")`,
            output: `[14.97 12.5   8.9  50.   29.  ]
Order total: 115.37`,
          },
        },
      },
      { type: "heading", text: "Summary statistics" },
      {
        type: "paragraph",
        text: "NumPy has functions for the statistics you use every day. Each takes an array and returns a single number.",
      },
      {
        type: "table",
        columns: ["Function", "Returns"],
        rows: [
          ["`np.mean(a)`", "Arithmetic mean"],
          ["`np.median(a)`", "Median (middle value)"],
          ["`np.std(a)`", "Standard deviation"],
          ["`np.min(a)`, `np.max(a)`", "Smallest and largest value"],
          ["`np.sum(a)`", "Sum of all elements"],
        ],
      },
      {
        type: "code",
        code: `import numpy as np

hardness = np.array([152, 160, 158, 149, 155])   # HV

print(f"Mean:   {np.mean(hardness):.1f} HV")
print(f"Median: {np.median(hardness):.1f} HV")
print(f"Std:    {np.std(hardness):.2f} HV")
print(f"Range:  {np.max(hardness) - np.min(hardness)} HV")`,
        output: `Mean:   154.8 HV
Median: 155.0 HV
Std:    3.97 HV
Range:  11 HV`,
      },
      {
        type: "callout",
        tone: "tip",
        title: "Functions and methods",
        text: "Most of these are also available as array methods: `hardness.mean()` is the same as `np.mean(hardness)`. You will see both styles in other people's code.",
      },
    ],
    exercises: [
      {
        id: "m6l1-q1",
        question: "What is the conventional way to import NumPy?",
        options: [
          { id: "a", text: "`import numpy as np`" },
          { id: "b", text: "`import np`" },
          { id: "c", text: "`from numpy import everything`" },
        ],
        correctOptionId: "a",
        explanation: "`import numpy as np` is the universal convention, so NumPy functions are written `np.something`.",
      },
      {
        id: "m6l1-q2",
        question: "What does this code print?",
        code: `import numpy as np
print(np.array([1, 2, 3]) * 2)`,
        options: [
          { id: "a", text: "[1, 2, 3, 1, 2, 3]" },
          { id: "b", text: "[2 4 6]" },
          { id: "c", text: "12" },
        ],
        correctOptionId: "b",
        explanation: "Arithmetic on an array is applied to each element. (Multiplying a *list* by 2 would repeat it instead.)",
      },
      {
        id: "m6l1-q3",
        question: "What is the main reason scientists use NumPy arrays rather than lists for numbers?",
        options: [
          { id: "a", text: "Arrays can hold text and numbers together" },
          { id: "b", text: "Calculations apply to whole arrays at once and run much faster" },
          { id: "c", text: "Lists can't store decimals" },
        ],
        correctOptionId: "b",
        explanation: "Vectorised arithmetic is both clearer and far faster than looping over a list.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "numpy-arrays",
    description: "Create arrays in different ways, inspect their shape and type, and select values from one- and two-dimensional arrays.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Create arrays with `np.array()`, `np.arange()`, `np.linspace()`, `np.zeros()` and `np.ones()`",
      "Inspect an array's `shape`, `ndim`, `size` and `dtype`",
      "Create two-dimensional arrays to represent tables of data",
      "Index and slice one- and two-dimensional arrays",
    ],
    blocks: [
      { type: "heading", text: "Creating arrays" },
      {
        type: "paragraph",
        text: "Besides converting lists with `np.array()`, NumPy can generate arrays directly. This is how you create ranges of temperatures, time steps or positions for a calculation.",
      },
      {
        type: "table",
        columns: ["Function", "Creates", "Example result"],
        rows: [
          ["`np.arange(start, stop, step)`", "Evenly spaced values with a given step (stop not included), like `range()` but allowing decimals", "`np.arange(0, 1, 0.25)` → `[0. 0.25 0.5 0.75]`"],
          ["`np.linspace(start, stop, n)`", "`n` evenly spaced values, **including** both ends", "`np.linspace(0, 1, 5)` → `[0. 0.25 0.5 0.75 1.]`"],
          ["`np.zeros(n)`", "An array of `n` zeros", "`np.zeros(3)` → `[0. 0. 0.]`"],
          ["`np.ones(n)`", "An array of `n` ones", "`np.ones(3)` → `[1. 1. 1.]`"],
        ],
      },
      {
        type: "code",
        code: `import numpy as np

temperatures = np.arange(300, 701, 100)    # 300 K to 700 K in 100 K steps
strains = np.linspace(0, 0.02, 5)           # 5 strain values from 0 to 2%
results = np.zeros(4)                       # placeholders to fill in later

print(temperatures)
print(strains)
print(results)`,
        output: `[300 400 500 600 700]
[0.    0.005 0.01  0.015 0.02 ]
[0. 0. 0. 0.]`,
      },
      {
        type: "callout",
        tone: "tip",
        title: "arange or linspace?",
        text: "Use `np.arange()` when you know the **step size**, and `np.linspace()` when you know **how many points** you want. For decimal steps `linspace` is safer, because rounding errors can make `arange` include or miss the last value unexpectedly.",
      },
      { type: "heading", text: "Array attributes" },
      {
        type: "paragraph",
        text: "Every array carries information about itself in **attributes**, which you read with a dot but without brackets.",
      },
      {
        type: "table",
        columns: ["Attribute", "Meaning"],
        rows: [
          ["`a.shape`", "The size along each dimension, as a tuple, e.g. `(5,)` or `(3, 4)`"],
          ["`a.ndim`", "The number of dimensions"],
          ["`a.size`", "The total number of elements"],
          ["`a.dtype`", "The data type of the elements, e.g. `int64` or `float64`"],
        ],
      },
      {
        type: "paragraph",
        text: "All elements of an array share **one** data type. If you mix integers and floats, NumPy converts everything to floats. This is part of why arrays are fast, but it also means an array isn't the right place for mixed data such as names and numbers together.",
      },
      {
        type: "code",
        code: `import numpy as np

counts = np.array([4, 2, 8])
mixed = np.array([4, 2.5, 8])

print(counts.dtype, counts.shape, counts.size)
print(mixed.dtype)
print(mixed)`,
        output: `int32 (3,) 3
float64
[4.  2.5 8. ]`,
      },
      {
        type: "explanation",
        text: "The exact integer type depends on the computer. Python in the browser uses `int32`; on most desktop computers you will see `int64`. Both are whole numbers; they differ in the largest value they can hold.",
      },
      { type: "heading", text: "Two-dimensional arrays" },
      {
        type: "paragraph",
        text: "Experimental data often comes as a table: rows of samples and columns of properties, or rows of time steps and columns of sensors. A **two-dimensional array** stores such a table. Create one from a list of lists, where each inner list is a row.",
      },
      {
        type: "code",
        code: `import numpy as np

# Rows: three samples. Columns: hardness (HV) at 4 positions.
hardness = np.array([
    [152, 160, 158, 149],
    [201, 198, 205, 199],
    [175, 172, 178, 176],
])
print(hardness)
print("Shape:", hardness.shape)
print("Dimensions:", hardness.ndim)`,
        output: `[[152 160 158 149]
 [201 198 205 199]
 [175 172 178 176]]
Shape: (3, 4)
Dimensions: 2`,
      },
      {
        type: "explanation",
        text: "The shape `(3, 4)` means 3 rows and 4 columns. Shapes are always listed as rows first, then columns.",
      },
      { type: "heading", text: "Indexing and slicing" },
      {
        type: "paragraph",
        text: "One-dimensional arrays are indexed and sliced exactly like lists. For a two-dimensional array, give the **row** and the **column** separated by a comma: `a[row, column]`. A colon on its own means *all*, so `a[:, 0]` is the whole first column and `a[1, :]` (or just `a[1]`) is the whole second row.",
      },
      {
        type: "code",
        code: `import numpy as np

hardness = np.array([
    [152, 160, 158, 149],
    [201, 198, 205, 199],
    [175, 172, 178, 176],
])

print(hardness[1, 2])      # row 1, column 2
print(hardness[0])         # the first sample
print(hardness[:, 0])      # position 0 for every sample
print(hardness[1:, :2])    # rows 1 onwards, first two columns`,
        output: `205
[152 160 158 149]
[152 201 175]
[[201 198]
 [175 172]]`,
      },
      {
        type: "contextExample",
        title: "Selecting from a table of data",
        variants: {
          "materials-science": {
            intro: "A table of tensile test results: one row per steel sample, one column per property.",
            code: `import numpy as np

# Rows: four steel samples. Columns: yield strength (MPa), tensile strength (MPa), elongation (%).
tensile = np.array([
    [215, 505, 40],
    [250, 460, 23],
    [350, 620, 18],
    [520, 760, 12],
])

print("Shape:", tensile.shape)
print("Third sample, tensile strength:", tensile[2, 1], "MPa")
print("Elongation of every sample:", tensile[:, 2])
print("First two samples, strengths only:")
print(tensile[:2, :2])`,
            output: `Shape: (4, 3)
Third sample, tensile strength: 620 MPa
Elongation of every sample: [40 23 18 12]
First two samples, strengths only:
[[215 505]
 [250 460]]`,
            explanation: "Indices count from 0, so `[2, 1]` is the third row and the second column. `[:2, :2]` takes the first two rows and the first two columns.",
          },
          chemistry: {
            intro: "A calibration table from a spectrophotometer: one row per standard solution, one column per wavelength.",
            code: `import numpy as np

# Rows: four standard solutions. Columns: absorbance at 450, 520 and 600 nm.
absorbance = np.array([
    [0.05, 0.12, 0.03],
    [0.10, 0.25, 0.06],
    [0.15, 0.37, 0.09],
    [0.20, 0.49, 0.12],
])

print("Shape:", absorbance.shape)
print("Fourth standard at 520 nm:", absorbance[3, 1])
print("All standards at 520 nm:", absorbance[:, 1])
print("Last two standards, first two wavelengths:")
print(absorbance[2:, :2])`,
            output: `Shape: (4, 3)
Fourth standard at 520 nm: 0.49
All standards at 520 nm: [0.12 0.25 0.37 0.49]
Last two standards, first two wavelengths:
[[0.15 0.37]
 [0.2  0.49]]`,
          },
          physics: {
            intro: "The position of a projectile recorded at four time steps: one row per time step, one column per coordinate.",
            code: `import numpy as np

# Rows: position at four time steps. Columns: x, y, z (m).
positions = np.array([
    [0.0, 0.0, 10.0],
    [1.5, 0.0, 9.5],
    [3.0, 0.0, 8.0],
    [4.5, 0.0, 5.6],
])

print("Shape:", positions.shape)
print("Height at the third time step:", positions[2, 2], "m")
print("Height at every time step:", positions[:, 2])
print("x and y for the first two time steps:")
print(positions[:2, :2])`,
            output: `Shape: (4, 3)
Height at the third time step: 8.0 m
Height at every time step: [10.   9.5  8.   5.6]
x and y for the first two time steps:
[[0.  0. ]
 [1.5 0. ]]`,
          },
          biology: {
            intro: "A table of heart rates from an exercise practical: one row per student, one column per activity.",
            code: `import numpy as np

# Rows: three students. Columns: heart rate (beats per minute) at rest,
# after walking, after running, and after 5 minutes' recovery.
heart_rate = np.array([
    [68, 92, 145, 80],
    [72, 98, 152, 85],
    [60, 85, 130, 70],
])

print("Shape:", heart_rate.shape)
print("Second student after running:", heart_rate[1, 2], "bpm")
print("Every student at rest:", heart_rate[:, 0])
print("First two students, last two readings:")
print(heart_rate[:2, 2:])`,
            output: `Shape: (3, 4)
Second student after running: 152 bpm
Every student at rest: [68 72 60]
First two students, last two readings:
[[145  80]
 [152  85]]`,
          },
          biochemistry: {
            intro: "Plate reader data from an enzyme assay: one row per replicate well, one column per time point.",
            code: `import numpy as np

# Rows: three replicate wells. Columns: absorbance at 0, 2, 4 and 6 minutes.
plate = np.array([
    [0.10, 0.24, 0.37, 0.48],
    [0.11, 0.25, 0.38, 0.50],
    [0.10, 0.23, 0.36, 0.47],
])

print("Shape:", plate.shape)
print("Second well at 4 minutes:", plate[1, 2])
print("Every well at 6 minutes:", plate[:, 3])
print("First two wells, first two readings:")
print(plate[:2, :2])`,
            output: `Shape: (3, 4)
Second well at 4 minutes: 0.38
Every well at 6 minutes: [0.48 0.5  0.47]
First two wells, first two readings:
[[0.1  0.24]
 [0.11 0.25]]`,
          },
          "general-programming": {
            intro: "A sales table: one row per shop, one column per month.",
            code: `import numpy as np

# Rows: three shops. Columns: units sold in January to April.
sales = np.array([
    [120, 135, 150, 160],
    [80, 95, 90, 110],
    [200, 210, 190, 230],
])

print("Shape:", sales.shape)
print("Third shop in March:", sales[2, 2])
print("Every shop in January:", sales[:, 0])
print("Last two shops, last two months:")
print(sales[1:, 2:])`,
            output: `Shape: (3, 4)
Third shop in March: 190
Every shop in January: [120  80 200]
Last two shops, last two months:
[[ 90 110]
 [190 230]]`,
          },
        },
      },
      {
        type: "paragraph",
        text: "You can also assign to an index or a slice to change values. Assigning a single number to a slice sets every element in it.",
      },
      {
        type: "code",
        code: `import numpy as np

readings = np.array([8.95, 8.97, 0.0, 8.96, 0.0])
readings[2] = 8.94          # replace one value
readings[3:] = 9.00         # set every value in a slice
print(readings)`,
        output: "[8.95 8.97 8.94 9.   9.  ]",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Slices are views, not copies",
        text: "Unlike list slices, an array slice shares its data with the original array. Changing the slice changes the original. Use `.copy()` if you need an independent array: `part = readings[:3].copy()`.",
      },
    ],
    exercises: [
      {
        id: "m6l2-q1",
        question: "What does `np.linspace(0, 10, 3)` produce?",
        options: [
          { id: "a", text: "[0. 5. 10.]" },
          { id: "b", text: "[0 3 6 9]" },
          { id: "c", text: "[0. 3.33 6.67]" },
        ],
        correctOptionId: "a",
        explanation: "`linspace` gives the requested number of evenly spaced points, including both the start and the stop value.",
      },
      {
        id: "m6l2-q2",
        question: "An array has shape `(4, 3)`. What does that mean?",
        options: [
          { id: "a", text: "4 columns and 3 rows" },
          { id: "b", text: "4 rows and 3 columns" },
          { id: "c", text: "Values from 4 to 3" },
        ],
        correctOptionId: "b",
        explanation: "Shapes list the number of rows first, then the number of columns.",
      },
      {
        id: "m6l2-q3",
        question: "For a 2D array `data`, what does `data[:, 1]` select?",
        options: [
          { id: "a", text: "The second row" },
          { id: "b", text: "The second column" },
          { id: "c", text: "The element in the first row, second column" },
        ],
        correctOptionId: "b",
        explanation: "`:` means all rows, and `1` picks column index 1, so the result is the whole second column.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "array-operations",
    description: "Do element-wise maths on arrays, summarise rows and columns with `axis`, and filter data with Boolean conditions.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Combine arrays with element-wise arithmetic and NumPy functions",
      "Summarise rows or columns of a 2D array with `axis`",
      "Create Boolean masks with comparisons and use them to filter data",
      "Apply a scientific formula to a whole range of values",
    ],
    blocks: [
      { type: "heading", text: "Element-wise operations" },
      {
        type: "paragraph",
        text: "When you combine two arrays of the same shape with an operator, NumPy pairs up the elements in matching positions: the first with the first, the second with the second, and so on. When you combine an array with a single number, that number is used with every element. (NumPy calls this **broadcasting**: the single value is *broadcast* across the array.)",
      },
      {
        type: "code",
        code: `import numpy as np

force = np.array([1000.0, 2000.0, 3000.0, 4000.0])   # N
area = 20.0e-6                                        # m² (20 mm²)
original_length = 50.0                                # mm
extension = np.array([0.012, 0.024, 0.036, 0.049])    # mm

stress = force / area / 1e6          # MPa
strain = extension / original_length
modulus = stress / strain / 1000     # GPa

print("Stress (MPa):", stress)
print("Strain:      ", strain)
print("Modulus (GPa):", np.round(modulus, 1))`,
        output: `Stress (MPa): [ 50. 100. 150. 200.]
Strain:       [0.00024 0.00048 0.00072 0.00098]
Modulus (GPa): [208.3 208.3 208.3 204.1]`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "Shapes must match",
        text: "Combining two arrays of different lengths, such as 4 elements and 3 elements, raises a `ValueError` saying the shapes could not be broadcast together.",
      },
      { type: "heading", text: "Mathematical functions" },
      {
        type: "paragraph",
        text: "NumPy's mathematical functions, sometimes called **universal functions**, apply to every element. Use them instead of the `math` module whenever you work with arrays: `math.exp()` only accepts a single number, while `np.exp()` accepts a whole array.",
      },
      {
        type: "table",
        columns: ["Function", "Calculates"],
        rows: [
          ["`np.sqrt(a)`", "Square root"],
          ["`np.exp(a)`", "eˣ"],
          ["`np.log(a)`, `np.log10(a)`", "Natural and base-10 logarithm"],
          ["`np.sin(a)`, `np.cos(a)`", "Trigonometry (radians)"],
          ["`np.abs(a)`", "Absolute value"],
          ["`np.round(a, n)`", "Round to `n` decimal places"],
        ],
      },
      {
        type: "contextExample",
        title: "A formula over a range of values",
        variants: {
          "materials-science": {
            intro: "Diffusion follows an Arrhenius law, D = D₀ exp(−Q / RT). Calculate the diffusion coefficient of carbon in iron across a range of temperatures.",
            code: `import numpy as np

d0 = 2.3e-5        # m²/s
q = 148_000        # J/mol, activation energy
r = 8.314          # J/(mol·K)

temperatures = np.array([800, 900, 1000, 1100, 1200])   # K
diffusivity = d0 * np.exp(-q / (r * temperatures))

for temperature, d in zip(temperatures, diffusivity):
    print(f"{temperature} K: {d:.2e} m²/s")`,
            output: `800 K: 4.99e-15 m²/s
900 K: 5.91e-14 m²/s
1000 K: 4.27e-13 m²/s
1100 K: 2.16e-12 m²/s
1200 K: 8.30e-12 m²/s`,
            explanation: "`zip()` pairs up items from two sequences so a `for` loop can unpack them together. Notice how strongly diffusion depends on temperature: about 1,700 times faster at 1200 K than at 800 K.",
          },
          chemistry: {
            intro: "The Arrhenius equation k = A exp(−Eₐ / RT) gives a rate constant at several temperatures.",
            code: `import numpy as np

a = 1.0e10        # 1/s
ea = 75_000       # J/mol
r = 8.314

temperatures = np.array([280, 300, 320, 340])   # K
k = a * np.exp(-ea / (r * temperatures))
print(np.round(k / k[0], 1))   # relative to the rate at 280 K`,
            output: "[  1.    8.6  56.1 294.6]",
          },
          physics: {
            intro: "Radioactive decay: N = N₀ e^(−λt) evaluated at several times.",
            code: `import numpy as np

n0 = 1000.0
half_life = 5730.0                  # years, carbon-14
decay_constant = np.log(2) / half_life

years = np.array([0, 5730, 11460, 17190])
remaining = n0 * np.exp(-decay_constant * years)
print(np.round(remaining, 1))`,
            output: "[1000.  500.  250.  125.]",
          },
          biology: {
            intro: "Logistic growth: a population levels off at the carrying capacity K.",
            code: `import numpy as np

k, n0, rate = 1000.0, 10.0, 0.8
time = np.arange(0, 13, 3)        # days

population = k / (1 + (k - n0) / n0 * np.exp(-rate * time))
print(np.round(population))`,
            output: "[ 10. 100. 551. 931. 993.]",
          },
          biochemistry: {
            intro: "The Henderson–Hasselbalch equation gives the fraction of an acidic group that has lost its proton: 1 / (1 + 10^(pKa − pH)). Calculate it for the histidine side chain across a range of pH values.",
            code: `import numpy as np

pka = 6.0   # histidine side chain

ph = np.array([4.0, 5.0, 6.0, 7.0, 8.0])
fraction_deprotonated = 1 / (1 + 10 ** (pka - ph))
print(np.round(fraction_deprotonated, 3))`,
            output: "[0.01  0.091 0.5   0.909 0.99 ]",
            explanation: "At pH = pKa exactly half of the side chains are deprotonated. One pH unit either side, the split is roughly 10:1.",
          },
          "general-programming": {
            intro: "Calculate a savings balance with 5% compound interest at several points in time.",
            code: `import numpy as np

principal = 1000
rate = 0.05
years = np.array([0, 5, 10, 15, 20])

balance = principal * (1 + rate) ** years
for year, amount in zip(years, balance):
    print(f"Year {year:>2}: {amount:8.2f}")`,
            output: `Year  0:  1000.00
Year  5:  1276.28
Year 10:  1628.89
Year 15:  2078.93
Year 20:  2653.30`,
          },
        },
      },
      { type: "heading", text: "Aggregating along an axis" },
      {
        type: "paragraph",
        text: "Functions such as `np.mean()` and `np.max()` reduce a whole array to one number by default. For a 2D table you usually want one result per row or per column. The `axis` argument chooses the direction: `axis=0` works **down** the columns (one result per column), and `axis=1` works **across** the rows (one result per row).",
      },
      {
        type: "code",
        code: `import numpy as np

# Rows: three samples. Columns: hardness at 4 positions.
hardness = np.array([
    [152, 160, 158, 149],
    [201, 198, 205, 199],
    [175, 172, 178, 176],
])

print("Mean of each sample:  ", hardness.mean(axis=1))
print("Mean at each position:", np.round(hardness.mean(axis=0), 1))
print("Overall mean:", round(hardness.mean(), 1))`,
        output: `Mean of each sample:   [154.75 200.75 175.25]
Mean at each position: [176.  176.7 180.3 174.7]
Overall mean: 176.9`,
      },
      { type: "heading", text: "Comparisons and Boolean masks" },
      {
        type: "paragraph",
        text: "Comparing an array with a value gives an array of `True`/`False` values, one per element. This is called a **Boolean mask**. Putting a mask inside square brackets selects only the elements where the mask is `True`. This is the NumPy way to filter data, with no loop needed.",
      },
      {
        type: "code",
        code: `import numpy as np

densities = np.array([2.70, 4.51, 7.87, 8.96, 19.32, 1.74])
names = np.array(["Al", "Ti", "Fe", "Cu", "Au", "Mg"])

is_light = densities < 5
print(is_light)
print(densities[is_light])
print(names[is_light])
print("Number of light metals:", np.sum(is_light))`,
        output: `[ True  True False False False  True]
[2.7  4.51 1.74]
['Al' 'Ti' 'Mg']
Number of light metals: 3`,
      },
      {
        type: "explanation",
        text: "The same mask can select from any array of the same length, so a mask built from `densities` picks the matching `names`. `np.sum()` of a mask counts the `True` values, because `True` counts as 1 and `False` as 0.",
      },
      {
        type: "paragraph",
        text: "Combine conditions with `&` (and) and `|` (or), putting each condition in brackets. Python's `and` and `or` don't work element by element on arrays.",
      },
      {
        type: "code",
        code: `import numpy as np

readings = np.array([8.94, 8.97, 9.31, 8.95, 8.60, 8.96])
valid = (readings > 8.9) & (readings < 9.0)
print(readings[valid])
print(f"Mean of valid readings: {readings[valid].mean():.3f}")`,
        output: `[8.94 8.97 8.95 8.96]
Mean of valid readings: 8.955`,
      },
    ],
    exercises: [
      {
        id: "m6l3-q1",
        question: "What does this code print?",
        code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([10, 20, 30])
print(a + b)`,
        options: [
          { id: "a", text: "[1 2 3 10 20 30]" },
          { id: "b", text: "[11 22 33]" },
          { id: "c", text: "66" },
        ],
        correctOptionId: "b",
        explanation: "Arrays of the same shape are added element by element.",
      },
      {
        id: "m6l3-q2",
        question: "For a 2D array of samples (rows) by measurements (columns), which gives the mean of each sample?",
        options: [
          { id: "a", text: "`data.mean(axis=0)`" },
          { id: "b", text: "`data.mean(axis=1)`" },
          { id: "c", text: "`data.mean()`" },
        ],
        correctOptionId: "b",
        explanation: "`axis=1` works across each row, giving one mean per row (per sample).",
      },
      {
        id: "m6l3-q3",
        question: "What does `values[values > 0]` return?",
        options: [
          { id: "a", text: "`True` or `False`" },
          { id: "b", text: "Only the elements of `values` that are greater than 0" },
          { id: "c", text: "The positions of the positive values" },
        ],
        correctOptionId: "b",
        explanation: "`values > 0` is a Boolean mask, and indexing with it keeps only the elements where it is `True`.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "introduction-to-matplotlib",
    description: "Draw your first scientific plots with Matplotlib: line plots, scatter plots and bar charts, with labelled axes, titles and legends.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Create line and scatter plots with `plt.plot()` and `plt.scatter()`",
      "Label axes, add a title, a legend and a grid",
      "Plot several data series on one figure",
      "Choose a suitable plot type for your data",
    ],
    blocks: [
      { type: "heading", text: "Why plot?" },
      {
        type: "paragraph",
        text: "A table of numbers hides trends that a plot reveals at a glance: a linear region, a sudden change, an outlier. **Matplotlib** is Python's standard plotting library. It can produce anything from a quick check of your data to figures ready for publication. Like NumPy, it has its own SPASCLE course; this lesson covers the essentials.",
      },
      {
        type: "paragraph",
        text: "Most plotting uses the `pyplot` module, imported as `plt` by convention. When you run plotting code in SPASCLE's editor, the figure appears in the output panel. The first run takes a little longer while Matplotlib loads.",
      },
      { type: "heading", text: "Your first line plot" },
      {
        type: "paragraph",
        text: "`plt.plot(x, y)` draws a line through the points given by two sequences of the same length: x-coordinates and y-coordinates. Lists and NumPy arrays both work. `plt.show()` displays the finished figure.",
      },
      {
        type: "code",
        code: `import matplotlib.pyplot as plt

temperature = [300, 400, 500, 600, 700, 800]       # K
resistivity = [1.72, 2.42, 3.11, 3.81, 4.50, 5.20]  # µΩ·cm, copper

plt.plot(temperature, resistivity)
plt.show()`,
        outputImage: {
          src: "/images/lessons/matplotlib-first-plot.png",
          alt: "A straight line rising from about 1.7 at 300 on the x axis to about 5.2 at 800, with unlabelled axes.",
          width: 547,
          height: 413,
        },
      },
      {
        type: "paragraph",
        text: "The plot shows the trend, but nobody else could tell what it represents. A scientific plot always needs labelled axes **with units**.",
      },
      { type: "heading", text: "Labels, titles and grids" },
      {
        type: "table",
        columns: ["Function", "Adds"],
        rows: [
          ["`plt.xlabel(\"...\")`, `plt.ylabel(\"...\")`", "Axis labels"],
          ["`plt.title(\"...\")`", "A title above the plot"],
          ["`plt.grid(True)`", "Grid lines, which help readers estimate values"],
          ["`plt.legend()`", "A key for plots with several series (see below)"],
          ["`plt.figure(figsize=(w, h))`", "A new figure of the given size in inches (call it first)"],
        ],
      },
      {
        type: "paragraph",
        text: "`plt.plot()` also accepts a **format** for the line and markers. `marker=\"o\"` adds a circle at each data point, which shows readers where the measurements actually are. `linestyle=\"--\"` draws a dashed line, and `color=` sets the colour.",
      },
      {
        type: "code",
        code: `import matplotlib.pyplot as plt

temperature = [300, 400, 500, 600, 700, 800]
resistivity = [1.72, 2.42, 3.11, 3.81, 4.50, 5.20]

plt.figure(figsize=(6, 4))
plt.plot(temperature, resistivity, marker="o", color="#580A50")
plt.xlabel("Temperature (K)")
plt.ylabel("Resistivity (µΩ·cm)")
plt.title("Electrical resistivity of copper")
plt.grid(True)
plt.show()`,
        outputImage: {
          src: "/images/lessons/matplotlib-labelled-plot.png",
          alt: "Line plot titled Electrical resistivity of copper, with Temperature (K) on the x axis and Resistivity on the y axis. Circular markers show six points rising linearly.",
          width: 536,
          height: 391,
        },
      },
      { type: "heading", text: "Several series and a legend" },
      {
        type: "paragraph",
        text: "Call `plt.plot()` several times before `plt.show()` to draw several lines on the same axes. Give each a `label=`, then call `plt.legend()` to show which line is which. NumPy is handy here for generating smooth x-values with `np.linspace()` and calculating y-values from a formula.",
      },
      {
        type: "code",
        code: `import numpy as np
import matplotlib.pyplot as plt

temperature = np.linspace(0, 400, 50)     # temperature rise, K
length = 1.0                              # m

for name, alpha in [("Aluminium", 23.1e-6), ("Copper", 16.5e-6), ("Steel", 12.0e-6)]:
    expansion_mm = alpha * length * temperature * 1000
    plt.plot(temperature, expansion_mm, label=name)

plt.xlabel("Temperature rise (K)")
plt.ylabel("Expansion of a 1 m bar (mm)")
plt.title("Thermal expansion")
plt.legend()
plt.grid(True)
plt.show()`,
        outputImage: {
          src: "/images/lessons/matplotlib-legend.png",
          alt: "Three straight lines starting at zero, labelled Aluminium, Copper and Steel in a legend. Aluminium is steepest, reaching about 9 mm at 400 K; steel is shallowest at about 5 mm.",
          width: 554,
          height: 453,
        },
      },
      { type: "heading", text: "Scatter plots" },
      {
        type: "paragraph",
        text: "Use `plt.scatter(x, y)` when each point is an independent measurement and joining them with a line would suggest a continuity that isn't there, for example when comparing properties of different materials. `plt.annotate()` adds a text label next to a point.",
      },
      {
        type: "code",
        code: `import matplotlib.pyplot as plt

names = ["Mg", "Al", "Ti", "Fe", "Cu", "W"]
density = [1.74, 2.70, 4.51, 7.87, 8.96, 19.25]      # g/cm³
modulus = [45, 70, 116, 211, 130, 411]               # GPa

plt.scatter(density, modulus, color="#580A50")
for name, x, y in zip(names, density, modulus):
    plt.annotate(name, (x, y), textcoords="offset points", xytext=(5, 5))

plt.xlabel("Density (g/cm³)")
plt.ylabel("Young's modulus (GPa)")
plt.title("Stiffness versus density of metals")
plt.grid(True)
plt.show()`,
        outputImage: {
          src: "/images/lessons/matplotlib-scatter.png",
          alt: "Scatter plot of Young's modulus against density for six metals, each point labelled: Mg, Al and Ti at low density and stiffness, Fe and Cu in the middle, and W at the top right.",
          width: 584,
          height: 453,
        },
      },
      { type: "heading", text: "Bar charts" },
      {
        type: "paragraph",
        text: "`plt.bar(categories, values)` compares a quantity across named categories.",
      },
      {
        type: "code",
        code: `import matplotlib.pyplot as plt

metals = ["Al", "Cu", "Fe", "Ti", "W"]
melting_point = [660, 1085, 1538, 1668, 3422]   # °C

plt.bar(metals, melting_point, color="#580A50")
plt.ylabel("Melting point (°C)")
plt.title("Melting points of common metals")
plt.show()`,
        outputImage: {
          src: "/images/lessons/matplotlib-bar.png",
          alt: "Bar chart of melting points: aluminium about 660, copper about 1085, iron about 1538, titanium about 1668 and tungsten much higher at about 3422 degrees Celsius.",
          width: 580,
          height: 433,
        },
      },
      {
        type: "table",
        caption: "Choosing a plot type",
        columns: ["Plot", "Use it for"],
        rows: [
          ["Line `plt.plot()`", "A quantity that changes continuously with another: temperature over time, a property against composition, a calculated curve"],
          ["Scatter `plt.scatter()`", "Independent measurements, or the relationship between two properties across many samples"],
          ["Bar `plt.bar()`", "Comparing one value across separate categories"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Saving figures",
        text: "On your own computer, `plt.savefig(\"figure.png\", dpi=300)` saves the current figure to a file. Call it before `plt.show()`. Use `.pdf` or `.svg` for figures that will be printed or published.",
      },
    ],
    exercises: [
      {
        id: "m6l4-q1",
        question: "Which function draws a line through a sequence of points?",
        options: [
          { id: "a", text: "`plt.plot(x, y)`" },
          { id: "b", text: "`plt.bar(x, y)`" },
          { id: "c", text: "`plt.line(x, y)`" },
        ],
        correctOptionId: "a",
        explanation: "`plt.plot()` draws lines (and markers, if requested) through the points.",
      },
      {
        id: "m6l4-q2",
        question: "You plotted two lines, each with a `label=`. What shows which line is which?",
        options: [
          { id: "a", text: "`plt.title()`" },
          { id: "b", text: "`plt.legend()`" },
          { id: "c", text: "`plt.grid(True)`" },
        ],
        correctOptionId: "b",
        explanation: "`plt.legend()` displays a key using the labels given to each plotted series.",
      },
      {
        id: "m6l4-q3",
        question: "You measured the hardness and density of 40 different alloys. Which plot shows how the two properties relate?",
        options: [
          { id: "a", text: "A line plot" },
          { id: "b", text: "A scatter plot" },
          { id: "c", text: "A bar chart" },
        ],
        correctOptionId: "b",
        explanation: "Each alloy is an independent point, so a scatter plot shows the relationship without implying a continuous line between them.",
      },
    ],
  },
];
