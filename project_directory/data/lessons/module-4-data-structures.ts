import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "data-structures";

export const MODULE_4_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "lists",
    description: "Store ordered collections of values in lists, change them, and calculate summary statistics.",
    estimatedMinutes: 20,
    learningObjectives: [
      "Create lists and access items by index",
      "Add, change and remove items",
      "Use `len()`, `sum()`, `min()` and `max()` on a list of numbers",
    ],
    blocks: [
      { type: "heading", text: "Creating lists" },
      {
        type: "paragraph",
        text: "A **list** holds several values in order, inside square brackets and separated by commas. Like strings, list items are indexed from `0`.",
      },
      {
        type: "code",
        code: `temperatures = [293, 310, 350, 400]
print(temperatures[0])
print(temperatures[-1])
print(temperatures[1:3])`,
        output: `293
400
[310, 350]`,
      },
      { type: "heading", text: "Changing a list" },
      {
        type: "paragraph",
        text: "Lists are **mutable**: you can change them after creating them. `append()` adds to the end, assignment replaces an item, and `remove()` deletes the first matching value.",
      },
      {
        type: "code",
        code: `samples = ["Cu", "Al", "Fe"]
samples.append("Ti")
samples[1] = "Mg"
samples.remove("Fe")
print(samples)
print(len(samples))`,
        output: `['Cu', 'Mg', 'Ti']
3`,
      },
      {
        type: "contextExample",
        title: "Summarising measurements",
        variants: {
          "materials-science": {
            intro: "Five hardness tests on a steel sample give slightly different readings. Built-in functions summarise them.",
            code: `hardness = [212, 208, 215, 210, 209]  # Vickers (HV)

average = sum(hardness) / len(hardness)
print(f"Tests: {len(hardness)}")
print(f"Mean: {average:.1f} HV")
print(f"Range: {min(hardness)} to {max(hardness)} HV")`,
            output: `Tests: 5
Mean: 210.8 HV
Range: 208 to 215 HV`,
          },
          chemistry: {
            intro: "A titration is repeated three times. The mean titre is used in the final calculation.",
            code: `titres = [24.15, 24.05, 24.10]  # mL

mean_titre = sum(titres) / len(titres)
print(f"Mean titre: {mean_titre:.2f} mL")
print(f"Spread: {max(titres) - min(titres):.2f} mL")`,
            output: `Mean titre: 24.10 mL
Spread: 0.10 mL`,
          },
          physics: {
            intro: "A pendulum's period is timed five times to reduce random error.",
            code: `periods = [2.01, 1.98, 2.03, 2.00, 1.99]  # s

mean_period = sum(periods) / len(periods)
print(f"Mean period: {mean_period:.3f} s")
print(f"Sorted: {sorted(periods)}")`,
            output: `Mean period: 2.002 s
Sorted: [1.98, 1.99, 2.0, 2.01, 2.03]`,
          },
          biology: {
            intro: "Leaf lengths are measured across a sample of plants.",
            code: `leaf_lengths = [5.2, 6.1, 4.8, 5.9, 6.4, 5.5]  # cm

mean_length = sum(leaf_lengths) / len(leaf_lengths)
print(f"Plants measured: {len(leaf_lengths)}")
print(f"Mean length: {mean_length:.2f} cm")
print(f"Longest leaf: {max(leaf_lengths)} cm")`,
            output: `Plants measured: 6
Mean length: 5.65 cm
Longest leaf: 6.4 cm`,
          },
        },
      },
      { type: "heading", text: "Checking membership" },
      {
        type: "paragraph",
        text: "Use `in` to check whether a value is in a list. It returns `True` or `False`.",
      },
      {
        type: "code",
        code: `noble_gases = ["He", "Ne", "Ar", "Kr", "Xe"]
print("Ar" in noble_gases)
print("N" in noble_gases)`,
        output: `True
False`,
      },
      {
        type: "callout",
        tone: "tip",
        title: "Lists can hold any type",
        text: "A list can mix numbers, strings and even other lists, but lists of one type are usually easier to work with.",
      },
    ],
    exercises: [
      {
        id: "m4l1-q1",
        question: "What is printed?",
        code: `values = [10, 20, 30, 40]
print(values[2])`,
        options: [
          { id: "a", text: "20" },
          { id: "b", text: "30" },
          { id: "c", text: "40" },
        ],
        correctOptionId: "b",
        explanation: "Indexes start at 0, so index 2 is the third item, `30`.",
      },
      {
        id: "m4l1-q2",
        question: "Which method adds an item to the end of a list?",
        options: [
          { id: "a", text: "add()" },
          { id: "b", text: "insert_end()" },
          { id: "c", text: "append()" },
        ],
        correctOptionId: "c",
        explanation: "`append()` adds one item to the end. Python lists have no `add()` method; that belongs to sets.",
      },
      {
        id: "m4l1-q3",
        question: "What is printed?",
        code: `data = [3, 1, 2]
data.append(5)
print(len(data), max(data))`,
        options: [
          { id: "a", text: "4 5" },
          { id: "b", text: "3 3" },
          { id: "c", text: "4 3" },
        ],
        correctOptionId: "a",
        explanation: "After appending, the list is `[3, 1, 2, 5]`: four items with a maximum of 5.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "tuples",
    description: "Group fixed values together in tuples, unpack them into variables, and know when to prefer them over lists.",
    estimatedMinutes: 12,
    learningObjectives: [
      "Create tuples and access their items",
      "Explain why tuples cannot be changed",
      "Unpack a tuple into separate variables",
    ],
    blocks: [
      { type: "heading", text: "Creating tuples" },
      {
        type: "paragraph",
        text: "A **tuple** is like a list but uses round brackets and is **immutable**: once created, it cannot be changed. Use tuples for values that belong together and should stay fixed, such as coordinates.",
      },
      {
        type: "code",
        code: `position = (0.25, 0.25, 0.25)  # fractional coordinates
print(position[0])
print(len(position))`,
        output: `0.25
3`,
      },
      {
        type: "paragraph",
        text: "Trying to change an item raises an error. Run this to see it:",
      },
      {
        type: "code",
        code: `position = (0.25, 0.25, 0.25)
position[0] = 0.5`,
      },
      {
        type: "explanation",
        text: "The `TypeError` tells you that tuples do not support item assignment. If you need to change values, use a list instead.",
      },
      { type: "heading", text: "Unpacking" },
      {
        type: "paragraph",
        text: "**Unpacking** assigns each item of a tuple to its own variable in one line.",
      },
      {
        type: "contextExample",
        title: "Fixed groups of values",
        variants: {
          "materials-science": {
            intro: "The three edge lengths of a unit cell belong together, so a tuple is a good fit.",
            code: `cell_lengths = (5.43, 5.43, 5.43)  # Å, silicon
a, b, c = cell_lengths

volume = a * b * c
print(f"a = {a} Å, b = {b} Å, c = {c} Å")
print(f"Volume: {volume:.1f} Å³")`,
            output: `a = 5.43 Å, b = 5.43 Å, c = 5.43 Å
Volume: 160.1 Å³`,
          },
          chemistry: {
            intro: "An element's symbol, atomic number and atomic mass describe it together.",
            code: `carbon = ("C", 6, 12.011)
symbol, atomic_number, atomic_mass = carbon

print(f"{symbol} has atomic number {atomic_number}")
print(f"Its atomic mass is {atomic_mass} u")`,
            output: `C has atomic number 6
Its atomic mass is 12.011 u`,
          },
          physics: {
            intro: "A 2D velocity has an x and a y component. Unpacking makes the magnitude calculation clear.",
            code: `velocity = (3.0, 4.0)  # m/s
vx, vy = velocity

speed = (vx ** 2 + vy ** 2) ** 0.5
print(f"Speed: {speed} m/s")`,
            output: "Speed: 5.0 m/s",
            explanation: "Raising a number to the power `0.5` takes its square root.",
          },
        },
      },
      {
        type: "callout",
        tone: "info",
        title: "Tuple or list?",
        text: "Use a list for a collection that grows or changes, such as measurements you are still collecting. Use a tuple for a fixed record, such as a coordinate or an (x, y) pair.",
      },
    ],
    exercises: [
      {
        id: "m4l2-q1",
        question: "Which of these creates a tuple?",
        options: [
          { id: "a", text: "[1, 2, 3]" },
          { id: "b", text: "(1, 2, 3)" },
          { id: "c", text: "{1, 2, 3}" },
        ],
        correctOptionId: "b",
        explanation: "Round brackets create a tuple. Square brackets create a list and curly brackets create a set.",
      },
      {
        id: "m4l2-q2",
        question: "What happens when this runs?",
        code: `point = (1, 2)
point[0] = 5`,
        options: [
          { id: "a", text: "`point` becomes (5, 2)" },
          { id: "b", text: "Python raises a TypeError" },
          { id: "c", text: "`point` becomes (1, 5)" },
        ],
        correctOptionId: "b",
        explanation: "Tuples are immutable, so assigning to an item raises a `TypeError`.",
      },
      {
        id: "m4l2-q3",
        question: "What is printed?",
        code: `name, mass = ("Fe", 55.845)
print(name)`,
        options: [
          { id: "a", text: "Fe" },
          { id: "b", text: "(\"Fe\", 55.845)" },
          { id: "c", text: "55.845" },
        ],
        correctOptionId: "a",
        explanation: "Unpacking puts the first item in `name` and the second in `mass`.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "dictionaries",
    description: "Store values under meaningful keys with dictionaries, look them up, and loop over them.",
    estimatedMinutes: 20,
    learningObjectives: [
      "Create a dictionary of key-value pairs",
      "Look up, add and update values by key",
      "Loop over keys and values with `items()`",
    ],
    blocks: [
      { type: "heading", text: "Key-value pairs" },
      {
        type: "paragraph",
        text: "A **dictionary** stores values under **keys**, written `{key: value}`. Instead of remembering that density is item 2, you look it up by name.",
      },
      {
        type: "code",
        code: `copper = {"symbol": "Cu", "density": 8.96, "melting_point": 1085}
print(copper["density"])
copper["structure"] = "FCC"   # add a new key
copper["density"] = 8.94      # update a value
print(copper)`,
        output: `8.96
{'symbol': 'Cu', 'density': 8.94, 'melting_point': 1085, 'structure': 'FCC'}`,
      },
      {
        type: "paragraph",
        text: "Looking up a missing key raises a `KeyError`. Use `get()` to return a default value instead.",
      },
      {
        type: "code",
        code: `copper = {"symbol": "Cu", "density": 8.96}
print(copper.get("band_gap", "not recorded"))`,
        output: "not recorded",
      },
      { type: "heading", text: "Looping over a dictionary" },
      {
        type: "paragraph",
        text: "`items()` gives each key and value together, which you can unpack in a `for` loop. Loops are covered properly in the next module, Control Flow; for now, read `for key, value in ...:` as \"do the indented lines once for each entry\".",
      },
      {
        type: "contextExample",
        title: "Looking up properties",
        variants: {
          "materials-science": {
            intro: "A dictionary maps each metal to its density, so you can look values up by name.",
            code: `densities = {"aluminium": 2.70, "titanium": 4.51, "iron": 7.87, "copper": 8.96}

for metal, density in densities.items():
    print(f"{metal:<10} {density:.2f} g/cm³")

lightest = min(densities, key=densities.get)
print("Lightest:", lightest)`,
            output: `aluminium  2.70 g/cm³
titanium   4.51 g/cm³
iron       7.87 g/cm³
copper     8.96 g/cm³
Lightest: aluminium`,
            explanation: "`key=densities.get` tells `min()` to compare the values (densities) rather than the keys (names).",
          },
          chemistry: {
            intro: "Atomic masses stored in a dictionary make molar mass calculations straightforward.",
            code: `atomic_mass = {"H": 1.008, "C": 12.011, "O": 15.999}
ethanol = {"C": 2, "H": 6, "O": 1}  # C2H6O

molar_mass = 0
for element, count in ethanol.items():
    molar_mass += atomic_mass[element] * count

print(f"Molar mass of ethanol: {molar_mass:.2f} g/mol")`,
            output: "Molar mass of ethanol: 46.07 g/mol",
          },
          biology: {
            intro: "The genetic code maps three-letter codons to amino acids.",
            code: `codon_table = {"AUG": "Met", "UUU": "Phe", "GGC": "Gly", "UAA": "Stop"}
mrna_codons = ["AUG", "UUU", "GGC", "UAA"]

for codon in mrna_codons:
    print(codon, "->", codon_table[codon])`,
            output: `AUG -> Met
UUU -> Phe
GGC -> Gly
UAA -> Stop`,
          },
          "general-programming": {
            intro: "A dictionary can count how often each word appears.",
            code: `words = ["data", "model", "data", "plot", "data"]
counts = {}

for word in words:
    counts[word] = counts.get(word, 0) + 1

print(counts)`,
            output: "{'data': 3, 'model': 1, 'plot': 1}",
          },
        },
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keys must be unique",
        text: "Each key appears only once. Assigning to an existing key replaces its value rather than adding a second entry.",
      },
    ],
    exercises: [
      {
        id: "m4l3-q1",
        question: "What is printed?",
        code: `melting = {"Al": 660, "Fe": 1538}
print(melting["Fe"])`,
        options: [
          { id: "a", text: "660" },
          { id: "b", text: "Fe" },
          { id: "c", text: "1538" },
        ],
        correctOptionId: "c",
        explanation: "Square brackets with a key return the value stored under that key.",
      },
      {
        id: "m4l3-q2",
        question: "What does `properties.get(\"color\", \"unknown\")` return when `\"color\"` is not a key?",
        options: [
          { id: "a", text: "\"unknown\"" },
          { id: "b", text: "A KeyError" },
          { id: "c", text: "None" },
        ],
        correctOptionId: "a",
        explanation: "`get()` returns the default you provide when the key is missing, instead of raising an error.",
      },
      {
        id: "m4l3-q3",
        question: "What is printed?",
        code: `d = {"x": 1}
d["x"] = 2
d["y"] = 3
print(len(d))`,
        options: [
          { id: "a", text: "3" },
          { id: "b", text: "2" },
          { id: "c", text: "1" },
        ],
        correctOptionId: "b",
        explanation: "`d[\"x\"] = 2` updates the existing key, and `d[\"y\"] = 3` adds one new key, so the dictionary has two keys.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "sets",
    description: "Store unique values in sets, remove duplicates, and compare collections with set operations.",
    estimatedMinutes: 15,
    learningObjectives: [
      "Create sets and remove duplicates from a list",
      "Add items and test membership",
      "Use union, intersection and difference",
    ],
    blocks: [
      { type: "heading", text: "Unique values" },
      {
        type: "paragraph",
        text: "A **set** is an unordered collection with **no duplicates**, written with curly brackets. Converting a list to a set is a quick way to find its unique values.",
      },
      {
        type: "code",
        code: `observed = ["Fe", "Ni", "Fe", "Cr", "Ni", "Fe"]
unique_elements = set(observed)
print(len(observed), "readings")
print(len(unique_elements), "unique elements")
print(sorted(unique_elements))`,
        output: `6 readings
3 unique elements
['Cr', 'Fe', 'Ni']`,
      },
      {
        type: "explanation",
        text: "Sets have no fixed order, so `sorted()` is used to print the elements in a predictable order.",
      },
      {
        type: "code",
        code: `elements = {"Fe", "Cr"}
elements.add("Ni")
elements.add("Fe")  # already present: no change
print(len(elements))
print("Ni" in elements)`,
        output: `3
True`,
      },
      { type: "heading", text: "Set operations" },
      {
        type: "list",
        items: [
          "`a | b` **union**: items in either set",
          "`a & b` **intersection**: items in both sets",
          "`a - b` **difference**: items in `a` but not in `b`",
        ],
      },
      {
        type: "contextExample",
        title: "Comparing collections",
        variants: {
          "materials-science": {
            intro: "Compare the elements in two alloys to see what they share.",
            code: `stainless_steel = {"Fe", "Cr", "Ni", "C"}
inconel = {"Ni", "Cr", "Fe", "Mo", "Nb"}

print("In both:", sorted(stainless_steel & inconel))
print("Only in Inconel:", sorted(inconel - stainless_steel))
print("All elements:", len(stainless_steel | inconel))`,
            output: `In both: ['Cr', 'Fe', 'Ni']
Only in Inconel: ['Mo', 'Nb']
All elements: 6`,
          },
          chemistry: {
            intro: "Compare which elements appear in two compounds.",
            code: `glucose = {"C", "H", "O"}
glycine = {"C", "H", "N", "O"}

print("Shared:", sorted(glucose & glycine))
print("Only in glycine:", sorted(glycine - glucose))`,
            output: `Shared: ['C', 'H', 'O']
Only in glycine: ['N']`,
          },
          biology: {
            intro: "Compare the genes expressed in two tissue samples.",
            code: `liver = {"ALB", "APOA1", "CYP3A4", "GAPDH"}
muscle = {"ACTA1", "MYH7", "GAPDH", "DES"}

print("Expressed in both:", sorted(liver & muscle))
print("Liver only:", sorted(liver - muscle))`,
            output: `Expressed in both: ['GAPDH']
Liver only: ['ALB', 'APOA1', 'CYP3A4']`,
          },
        },
      },
      {
        type: "callout",
        tone: "warning",
        title: "Empty sets",
        text: "`{}` creates an empty dictionary, not a set. Use `set()` for an empty set.",
      },
    ],
    exercises: [
      {
        id: "m4l4-q1",
        question: "What is printed?",
        code: `print(len(set([1, 1, 2, 3, 3, 3])))`,
        options: [
          { id: "a", text: "6" },
          { id: "b", text: "3" },
          { id: "c", text: "1" },
        ],
        correctOptionId: "b",
        explanation: "A set keeps one copy of each value: `{1, 2, 3}`, which has three items.",
      },
      {
        id: "m4l4-q2",
        question: "Which operator gives the items that are in both sets?",
        options: [
          { id: "a", text: "|" },
          { id: "b", text: "-" },
          { id: "c", text: "&" },
        ],
        correctOptionId: "c",
        explanation: "`&` is intersection: only the items found in both sets.",
      },
      {
        id: "m4l4-q3",
        question: "What does `type({})` return?",
        options: [
          { id: "a", text: "<class 'dict'>" },
          { id: "b", text: "<class 'set'>" },
          { id: "c", text: "<class 'list'>" },
        ],
        correctOptionId: "a",
        explanation: "Empty curly brackets create a dictionary. Use `set()` to create an empty set.",
      },
    ],
  },
];
