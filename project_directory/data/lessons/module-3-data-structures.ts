import type { LessonContent } from "@/types/lesson";

const MODULE_SLUG = "data-structures";

export const MODULE_3_LESSONS: LessonContent[] = [
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "lists",
    description: "Store many values in order with lists: access and slice them, add and remove items, sort them, and summarise numeric data.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Create lists and access items by index and slice",
      "Change a list with methods such as `append()`, `insert()` and `remove()`",
      "Sort lists and check whether they contain a value",
      "Summarise numeric lists with `len()`, `sum()`, `min()` and `max()`",
    ],
    blocks: [
      { type: "heading", text: "Why collections?" },
      {
        type: "paragraph",
        text: "A variable holds one value. Scientific work usually involves many related values: a series of temperature readings, the elements in an alloy, the masses of a set of samples. Creating `reading1`, `reading2`, `reading3` and so on quickly becomes unmanageable. Python's **data structures** (also called **collections**) store many values under a single name. This module covers the four built-in ones: lists, tuples, dictionaries and sets.",
      },
      { type: "heading", text: "Creating lists" },
      {
        type: "paragraph",
        text: "A **list** holds values in a fixed order. Write the values inside square brackets, separated by commas. A list can hold any type of value, including a mix of types, and `len()` tells you how many items it contains.",
      },
      {
        type: "code",
        code: `temperatures = [293, 310, 350, 400]       # K
elements = ["Fe", "Cr", "Ni"]
sample = ["Cu-01", 8.96, True]             # mixed types are allowed
empty = []

print(temperatures)
print(len(elements))
print(len(empty))`,
        output: `[293, 310, 350, 400]
3
0`,
      },
      { type: "heading", text: "Accessing items" },
      {
        type: "paragraph",
        text: "Lists use the same indexing and slicing as strings. The first item is at index `0`, negative indexes count from the end, and `[start:stop]` gives a new list containing the items from `start` up to, but not including, `stop`.",
      },
      {
        type: "code",
        code: `temperatures = [293, 310, 350, 400]
print(temperatures[0])      # first
print(temperatures[-1])     # last
print(temperatures[1:3])    # items 1 and 2`,
        output: `293
400
[310, 350]`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "IndexError",
        text: "Asking for an index that doesn't exist, such as `temperatures[4]` in a four-item list, raises an `IndexError: list index out of range`. Remember that the last valid index is one less than the length.",
      },
      { type: "heading", text: "Changing a list" },
      {
        type: "paragraph",
        text: "Unlike strings, lists are **mutable**: you can change them after creating them. Assign to an index to replace an item, or use list methods to add and remove items. These methods change the list **in place** and don't return a new list.",
      },
      {
        type: "table",
        columns: ["Method", "What it does"],
        rows: [
          ["`append(x)`", "Add `x` to the end"],
          ["`insert(i, x)`", "Insert `x` at index `i`, moving later items along"],
          ["`extend(other)`", "Add every item from another list to the end"],
          ["`remove(x)`", "Remove the first item equal to `x`"],
          ["`pop()`", "Remove and return the last item (or `pop(i)` for index `i`)"],
          ["`index(x)`", "Return the index of the first item equal to `x`"],
          ["`count(x)`", "Count how many items equal `x`"],
        ],
      },
      {
        type: "code",
        code: `samples = ["Cu", "Al", "Fe"]
samples.append("Ti")          # add to the end
samples.insert(1, "Ni")       # add at index 1
samples[0] = "Cu-annealed"    # replace an item
samples.remove("Al")          # remove by value
last = samples.pop()          # remove and keep the last item

print(samples)
print("Removed:", last)`,
        output: `['Cu-annealed', 'Ni', 'Fe']
Removed: Ti`,
      },
      { type: "heading", text: "Checking membership" },
      {
        type: "paragraph",
        text: "The `in` operator checks whether a value is in a list and returns `True` or `False`. `not in` checks the opposite.",
      },
      {
        type: "code",
        code: `alloy = ["Fe", "Cr", "Ni"]
print("Cr" in alloy)
print("Mo" in alloy)
print("Mo" not in alloy)`,
        output: `True
False
True`,
      },
      { type: "heading", text: "Sorting" },
      {
        type: "paragraph",
        text: "There are two ways to sort. The method `list.sort()` sorts the list itself (in place). The built-in function `sorted(list)` leaves the original alone and returns a new sorted list. Both sort numbers from smallest to largest and text alphabetically. Add `reverse=True` to sort the other way.",
      },
      {
        type: "code",
        code: `melting_points = [1538, 660, 1085, 3422]
print(sorted(melting_points))
print(melting_points)                 # unchanged

melting_points.sort(reverse=True)
print(melting_points)                 # now changed`,
        output: `[660, 1085, 1538, 3422]
[1538, 660, 1085, 3422]
[3422, 1538, 1085, 660]`,
      },
      { type: "heading", text: "Summarising numeric data" },
      {
        type: "paragraph",
        text: "The built-in functions `len()`, `sum()`, `min()` and `max()` work on any list of numbers. Together they give a quick summary of a dataset, including the mean (the sum divided by the count).",
      },
      {
        type: "contextExample",
        title: "Summarising measurements",
        variants: {
          "materials-science": {
            intro: "Five Vickers hardness measurements were taken across a steel sample.",
            code: `hardness = [152, 160, 158, 149, 155]   # HV

mean_hardness = sum(hardness) / len(hardness)
print(f"Measurements: {len(hardness)}")
print(f"Range: {min(hardness)} to {max(hardness)} HV")
print(f"Mean: {mean_hardness:.1f} HV")`,
            output: `Measurements: 5
Range: 149 to 160 HV
Mean: 154.8 HV`,
          },
          chemistry: {
            intro: "A titration was repeated four times, giving these end-point volumes.",
            code: `volumes = [24.35, 24.30, 24.40, 24.35]   # mL

mean_volume = sum(volumes) / len(volumes)
print(f"Titres: {len(volumes)}")
print(f"Spread: {max(volumes) - min(volumes):.2f} mL")
print(f"Mean titre: {mean_volume:.2f} mL")`,
            output: `Titres: 4
Spread: 0.10 mL
Mean titre: 24.35 mL`,
          },
          physics: {
            intro: "A pendulum's period was timed five times.",
            code: `periods = [2.01, 1.98, 2.03, 2.00, 1.99]   # s

mean_period = sum(periods) / len(periods)
print(f"Trials: {len(periods)}")
print(f"Fastest: {min(periods)} s, slowest: {max(periods)} s")
print(f"Mean period: {mean_period:.3f} s")`,
            output: `Trials: 5
Fastest: 1.98 s, slowest: 2.03 s
Mean period: 2.002 s`,
          },
          biology: {
            intro: "Plant heights were measured after three weeks of growth.",
            code: `heights = [12.4, 15.1, 13.8, 14.2, 11.9, 13.3]   # cm

mean_height = sum(heights) / len(heights)
print(f"Plants: {len(heights)}")
print(f"Tallest: {max(heights)} cm")
print(f"Mean height: {mean_height:.1f} cm")`,
            output: `Plants: 6
Tallest: 15.1 cm
Mean height: 13.5 cm`,
          },
          biochemistry: {
            intro: "Absorbance readings of the same protein sample were taken in triplicate.",
            code: `absorbance = [0.512, 0.498, 0.505]

mean_absorbance = sum(absorbance) / len(absorbance)
print(f"Replicates: {len(absorbance)}")
print(f"Mean absorbance: {mean_absorbance:.3f}")`,
            output: `Replicates: 3
Mean absorbance: 0.505`,
          },
          "general-programming": {
            intro: "A fitness tracker recorded these step counts over five days.",
            code: `daily_steps = [8200, 10450, 6900, 12100, 9350]

mean_steps = sum(daily_steps) / len(daily_steps)
print(f"Days recorded: {len(daily_steps)}")
print(f"Range: {min(daily_steps)} to {max(daily_steps)} steps")
print(f"Mean: {mean_steps:.0f} steps")`,
            output: `Days recorded: 5
Range: 6900 to 12100 steps
Mean: 9400 steps`,
          },
        },
      },
      { type: "heading", text: "Lists inside lists" },
      {
        type: "paragraph",
        text: "A list can contain other lists. This is a simple way to store a table: each inner list is a row. Use two indexes to reach a single value: the first picks the row, the second picks the item in that row.",
      },
      {
        type: "code",
        code: `# Each row: [temperature in K, resistance in ohms]
measurements = [
    [293, 1.72],
    [323, 1.92],
    [373, 2.26],
]
print(measurements[1])       # the second row
print(measurements[1][1])    # resistance in the second row`,
        output: `[323, 1.92]
1.92`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "Copying a list",
        text: "`b = a` does **not** copy a list. Both names then refer to the same list, so changing `b` also changes `a`. Use `b = a.copy()` when you need an independent copy.",
      },
      {
        type: "code",
        code: `original = [1.0, 2.0, 3.0]
same_list = original
real_copy = original.copy()

same_list.append(4.0)
print(original)     # changed too!
print(real_copy)    # unaffected`,
        output: `[1.0, 2.0, 3.0, 4.0]
[1.0, 2.0, 3.0]`,
      },
    ],
    exercises: [
      {
        id: "m3l1-q1",
        question: "What does this code print?",
        code: `elements = ["Fe", "Cr", "Ni", "Mo"]
print(elements[1:3])`,
        options: [
          { id: "a", text: "['Fe', 'Cr', 'Ni']" },
          { id: "b", text: "['Cr', 'Ni']" },
          { id: "c", text: "['Cr', 'Ni', 'Mo']" },
        ],
        correctOptionId: "b",
        explanation: "The slice starts at index 1 and stops before index 3, giving the items at indexes 1 and 2.",
      },
      {
        id: "m3l1-q2",
        question: "Which statement adds `\"Ti\"` to the end of the list `samples`?",
        options: [
          { id: "a", text: "`samples.add(\"Ti\")`" },
          { id: "b", text: "`samples.append(\"Ti\")`" },
          { id: "c", text: "`samples + \"Ti\"`" },
        ],
        correctOptionId: "b",
        explanation: "`append()` adds one item to the end of a list. Lists don't have an `add()` method; that belongs to sets.",
      },
      {
        id: "m3l1-q3",
        question: "What is the difference between `values.sort()` and `sorted(values)`?",
        options: [
          { id: "a", text: "There is no difference" },
          { id: "b", text: "`sort()` changes the list itself; `sorted()` returns a new sorted list and leaves the original alone" },
          { id: "c", text: "`sorted()` only works on text" },
        ],
        correctOptionId: "b",
        explanation: "`sort()` sorts in place, while `sorted()` makes a new list. Use `sorted()` when you need to keep the original order too.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "tuples",
    description: "Use tuples for fixed groups of values such as coordinates or records, and unpack them into separate variables.",
    estimatedMinutes: 20,
    learningObjectives: [
      "Create tuples and access their items",
      "Explain how tuples differ from lists and when to use each",
      "Unpack a tuple into separate variables",
    ],
    blocks: [
      { type: "heading", text: "Creating tuples" },
      {
        type: "paragraph",
        text: "A **tuple** is an ordered collection, like a list, but it **cannot be changed** after it is created: you can't add, remove or replace items. Tuples are written with round brackets instead of square ones.",
      },
      {
        type: "code",
        code: `position = (0.25, 0.25, 0.25)        # fractional coordinates of an atom
lattice = (5.431, 5.431, 5.431)      # a, b, c of silicon in Å
element = ("Si", 14, 28.085)         # symbol, atomic number, atomic mass

print(position)
print(element[0])
print(len(lattice))`,
        output: `(0.25, 0.25, 0.25)
Si
3`,
      },
      {
        type: "paragraph",
        text: "Indexing, slicing, `len()` and `in` all work exactly as they do for lists. A tuple with only one item needs a trailing comma, `(5,)`, otherwise Python reads the brackets as ordinary maths brackets.",
      },
      { type: "heading", text: "Why use a tuple instead of a list?" },
      {
        type: "list",
        items: [
          "**Fixed records**: coordinates `(x, y, z)`, lattice parameters `(a, b, c)` or an element's `(symbol, number, mass)` always have the same number of parts in the same order. A tuple says *this group belongs together and shouldn't change*.",
          "**Safety**: because a tuple can't be modified, other code can't accidentally change it.",
          "**Dictionary keys**: tuples can be used as keys in a dictionary (next lesson); lists cannot.",
        ],
      },
      {
        type: "paragraph",
        text: "A good rule of thumb: use a **list** for a varying number of similar things (all the measurements in an experiment), and a **tuple** for a fixed number of related things (one measurement's temperature and value).",
      },
      {
        type: "code",
        code: `lattice = (5.431, 5.431, 5.431)
lattice[0] = 5.5`,
      },
      {
        type: "explanation",
        text: "Trying to change a tuple raises `TypeError: 'tuple' object does not support item assignment`. If you need a changed version, create a new tuple.",
      },
      { type: "heading", text: "Unpacking" },
      {
        type: "paragraph",
        text: "**Unpacking** assigns each item of a tuple to its own variable in a single line. The number of variables on the left must match the number of items. This makes code that works with records much easier to read: `a, b, c = lattice` is clearer than using `lattice[0]`, `lattice[1]` and `lattice[2]`.",
      },
      {
        type: "contextExample",
        title: "Unpacking a record",
        variants: {
          "materials-science": {
            intro: "An orthorhombic unit cell has three different lattice parameters. Unpacking them makes the volume formula easy to read.",
            code: `lattice = (4.76, 10.20, 5.98)   # a, b, c in Å

a, b, c = lattice
volume = a * b * c
print(f"a = {a} Å, b = {b} Å, c = {c} Å")
print(f"Volume: {volume:.1f} Å³")`,
            output: `a = 4.76 Å, b = 10.2 Å, c = 5.98 Å
Volume: 290.3 Å³`,
          },
          chemistry: {
            intro: "Each element record holds its symbol, atomic number and atomic mass.",
            code: `carbon = ("C", 6, 12.011)

symbol, atomic_number, atomic_mass = carbon
print(f"{symbol} has atomic number {atomic_number}")
print(f"Mass of 2 mol of {symbol}: {2 * atomic_mass:.3f} g")`,
            output: `C has atomic number 6
Mass of 2 mol of C: 24.022 g`,
          },
          physics: {
            intro: "A 2D velocity is a pair of components. Unpacking them gives the speed with Pythagoras' theorem.",
            code: `import math

velocity = (3.0, 4.0)   # vx, vy in m/s

vx, vy = velocity
speed = math.sqrt(vx ** 2 + vy ** 2)
print(f"Speed: {speed} m/s")`,
            output: "Speed: 5.0 m/s",
          },
          biology: {
            intro: "A field observation is stored as (species, count, site).",
            code: `observation = ("Bombus terrestris", 14, "Meadow B")

species, count, site = observation
print(f"{count} x {species} recorded at {site}")`,
            output: "14 x Bombus terrestris recorded at Meadow B",
          },
          biochemistry: {
            intro: "Each amino acid record holds its name, one-letter code and molar mass. Unpacking it makes a solution calculation easy to read.",
            code: `amino_acid = ("tryptophan", "W", 204.23)   # name, one-letter code, molar mass in g/mol

name, code, molar_mass = amino_acid
print(f"{name} ({code}): {molar_mass} g/mol")
print(f"Mass for 50 mL of a 2 mM solution: {0.002 * 0.050 * molar_mass * 1000:.1f} mg")`,
            output: `tryptophan (W): 204.23 g/mol
Mass for 50 mL of a 2 mM solution: 20.4 mg`,
          },
          "general-programming": {
            intro: "A point on a grid is stored as an (x, y) pair. Unpacking it gives each coordinate a name.",
            code: `point = (3, 4)   # x, y

x, y = point
distance = (x ** 2 + y ** 2) ** 0.5
print(f"x = {x}, y = {y}")
print(f"Distance from origin: {distance}")`,
            output: `x = 3, y = 4
Distance from origin: 5.0`,
          },
        },
      },
      { type: "subheading", text: "Swapping values" },
      {
        type: "paragraph",
        text: "Unpacking makes it easy to swap two variables without a temporary variable. Python builds the tuple on the right first, then unpacks it into the names on the left.",
      },
      {
        type: "code",
        code: `low, high = 1085, 660
low, high = high, low
print(low, high)`,
        output: "660 1085",
      },
      { type: "heading", text: "Tuple methods and conversion" },
      {
        type: "paragraph",
        text: "Because tuples can't change, they only have two methods: `count(x)` and `index(x)`, which work just like the list versions. You can convert between the two types with `list()` and `tuple()`, for example to change a value and then turn the result back into a tuple.",
      },
      {
        type: "code",
        code: `lattice = (5.431, 5.431, 5.431)
print(lattice.count(5.431))

editable = list(lattice)
editable[2] = 5.50
lattice = tuple(editable)
print(lattice)`,
        output: `3
(5.431, 5.431, 5.5)`,
      },
    ],
    exercises: [
      {
        id: "m3l2-q1",
        question: "What happens when you run this code?",
        code: `point = (1.0, 2.0, 3.0)
point[0] = 0.0`,
        options: [
          { id: "a", text: "`point` becomes `(0.0, 2.0, 3.0)`" },
          { id: "b", text: "A `TypeError`, because tuples can't be changed" },
          { id: "c", text: "Python adds `0.0` to the start of the tuple" },
        ],
        correctOptionId: "b",
        explanation: "Tuples are immutable. Assigning to an item raises a `TypeError`.",
      },
      {
        id: "m3l2-q2",
        question: "After `symbol, number, mass = (\"O\", 8, 15.999)`, what is `number`?",
        options: [
          { id: "a", text: "`\"O\"`" },
          { id: "b", text: "`8`" },
          { id: "c", text: "`15.999`" },
        ],
        correctOptionId: "b",
        explanation: "Unpacking assigns items in order: the second variable gets the second item.",
      },
      {
        id: "m3l2-q3",
        question: "Which is the best choice for storing an atom's (x, y, z) position?",
        options: [
          { id: "a", text: "A tuple, because it is a fixed group of three related values" },
          { id: "b", text: "A string such as `\"1.0,2.0,3.0\"`" },
          { id: "c", text: "Three separate lists" },
        ],
        correctOptionId: "a",
        explanation: "A position always has exactly three coordinates in a fixed order, which is exactly what tuples are for.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "dictionaries",
    description: "Store values under meaningful keys with dictionaries: look values up, add and change entries, and build records for materials and samples.",
    estimatedMinutes: 30,
    learningObjectives: [
      "Create a dictionary of key-value pairs",
      "Look up values safely with `[]` and `get()`",
      "Add, update and remove entries",
      "Use nested dictionaries to describe a record with several properties",
    ],
    blocks: [
      { type: "heading", text: "Key-value pairs" },
      {
        type: "paragraph",
        text: "Lists and tuples identify items by position. That works when order is what matters, but often you want to look something up by **name**. Remembering that density is item 2 in a list is error-prone; looking up `\"density\"` is not. A **dictionary** stores **key-value pairs**: each unique key maps to a value, like a word and its definition in a real dictionary.",
      },
      {
        type: "paragraph",
        text: "Dictionaries are written with curly braces. Each pair is written `key: value`, and pairs are separated by commas. Keys are usually strings; values can be anything, including lists or other dictionaries.",
      },
      {
        type: "code",
        code: `copper = {
    "symbol": "Cu",
    "density": 8.96,          # g/cm³
    "melting_point": 1085,    # °C
    "structure": "FCC",
}
print(copper["density"])
print(len(copper))`,
        output: `8.96
4`,
      },
      { type: "heading", text: "Looking up values" },
      {
        type: "paragraph",
        text: "Put a key in square brackets to get its value. If the key doesn't exist, Python raises a `KeyError`. When a key might be missing, use the `get()` method instead: it returns `None`, or a default value you choose, rather than stopping the program.",
      },
      {
        type: "code",
        code: `copper = {"symbol": "Cu", "density": 8.96}
print(copper.get("density"))
print(copper.get("band_gap"))
print(copper.get("band_gap", "not recorded"))`,
        output: `8.96
None
not recorded`,
      },
      {
        type: "paragraph",
        text: "The `in` operator checks whether a **key** is present. It does not look at the values.",
      },
      {
        type: "code",
        code: `copper = {"symbol": "Cu", "density": 8.96}
print("density" in copper)
print("Cu" in copper)       # "Cu" is a value, not a key`,
        output: `True
False`,
      },
      { type: "heading", text: "Adding, changing and removing entries" },
      {
        type: "paragraph",
        text: "Dictionaries are mutable. Assigning to a key that doesn't exist yet adds a new pair; assigning to an existing key replaces its value. `del` removes a pair, and `pop(key)` removes it and returns its value. `update()` adds or changes several pairs at once from another dictionary.",
      },
      {
        type: "code",
        code: `sample = {"id": "Al-07", "mass": 2.70}
sample["volume"] = 1.0              # add a new key
sample["mass"] = 2.71               # change an existing value
sample.update({"operator": "AR", "temperature": 293})
del sample["operator"]              # remove a key

print(sample)`,
        output: "{'id': 'Al-07', 'mass': 2.71, 'volume': 1.0, 'temperature': 293}",
      },
      {
        type: "callout",
        tone: "info",
        title: "Keys are unique",
        text: "A dictionary can't contain the same key twice. Assigning to an existing key always replaces the old value. Dictionaries remember the order in which keys were first added.",
      },
      { type: "heading", text: "Keys, values and items" },
      {
        type: "paragraph",
        text: "Three methods give you views of a dictionary's contents: `keys()` gives the keys, `values()` gives the values, and `items()` gives each pair as a `(key, value)` tuple. Wrap them in `list()` to see them as ordinary lists. Since `values()` gives all the values, you can pass it straight to functions such as `max()` and `sum()`.",
      },
      {
        type: "code",
        code: `melting_points = {"Al": 660, "Cu": 1085, "Fe": 1538}
print(list(melting_points.keys()))
print(list(melting_points.values()))
print(list(melting_points.items()))
print(max(melting_points.values()))`,
        output: `['Al', 'Cu', 'Fe']
[660, 1085, 1538]
[('Al', 660), ('Cu', 1085), ('Fe', 1538)]
1538`,
      },
      {
        type: "paragraph",
        text: "In the Control Flow module you will use `items()` with a `for` loop to go through every key-value pair in turn.",
      },
      { type: "heading", text: "Building records" },
      {
        type: "paragraph",
        text: "Dictionaries are ideal for describing one thing with several named properties. Values can themselves be lists or dictionaries, so you can build detailed records. Chain the square brackets to reach values inside.",
      },
      {
        type: "contextExample",
        title: "A record as a dictionary",
        variants: {
          "materials-science": {
            intro: "A material record with nested mechanical properties and a list of measured hardness values.",
            code: `steel = {
    "name": "AISI 304",
    "composition": {"Fe": 70.0, "Cr": 19.0, "Ni": 9.0},   # wt%
    "mechanical": {"youngs_modulus": 193, "yield_strength": 215},  # GPa, MPa
    "hardness": [201, 198, 205],   # HV
}

print(steel["name"])
print(steel["composition"]["Cr"], "wt% Cr")
print(steel["mechanical"]["yield_strength"], "MPa")
print(max(steel["hardness"]), "HV maximum")`,
            output: `AISI 304
19.0 wt% Cr
215 MPa
205 HV maximum`,
          },
          chemistry: {
            intro: "Atomic masses stored in a dictionary make molar mass calculations straightforward and readable.",
            code: `atomic_mass = {"H": 1.008, "C": 12.011, "O": 15.999}

# Ethanol is C2H6O
molar_mass = 2 * atomic_mass["C"] + 6 * atomic_mass["H"] + atomic_mass["O"]
print(f"Molar mass of ethanol: {molar_mass:.2f} g/mol")`,
            output: "Molar mass of ethanol: 46.07 g/mol",
          },
          physics: {
            intro: "Physical constants can be stored by name so formulas read naturally.",
            code: `constants = {"c": 2.998e8, "h": 6.626e-34}   # m/s, J·s

wavelength = 500e-9   # m (green light)
energy = constants["h"] * constants["c"] / wavelength
print(f"Photon energy: {energy:.3e} J")`,
            output: "Photon energy: 3.973e-19 J",
          },
          biology: {
            intro: "The genetic code maps three-letter codons to amino acids.",
            code: `codon_table = {"AUG": "Met", "UUU": "Phe", "GGC": "Gly", "UAA": "Stop"}

print(codon_table["AUG"])
print(codon_table.get("CCC", "unknown codon"))`,
            output: `Met
unknown codon`,
          },
          biochemistry: {
            intro: "Every enzyme works best at a particular pH and temperature. This record keeps pepsin's optimum conditions together. Pepsin digests proteins in the acidic stomach.",
            code: `enzyme = {
    "name": "pepsin",
    "found_in": "stomach",
    "optimum": {"ph": 2.0, "temperature": 37},   # temperature in °C
}

best = enzyme["optimum"]
print(f"{enzyme['name']} ({enzyme['found_in']}) works best at pH {best['ph']} and {best['temperature']} °C")`,
            output: "pepsin (stomach) works best at pH 2.0 and 37 °C",
          },
          "general-programming": {
            intro: "An online order record with a nested customer dictionary and a list of items.",
            code: `order = {
    "id": "A1042",
    "customer": {"name": "Sam", "city": "Leeds"},
    "items": ["notebook", "pen", "stapler"],
    "total": 18.75,
}

print(order["id"])
print(order["customer"]["city"])
print(len(order["items"]), "items")
print(order["total"], "total")`,
            output: `A1042
Leeds
3 items
18.75 total`,
          },
        },
      },
      {
        type: "callout",
        tone: "tip",
        title: "Quotes inside f-strings",
        text: "When you look up a dictionary key inside an f-string, use the other kind of quote for the key: `f\"{enzyme['name']}\"`. Using the same quote as the f-string itself can confuse older versions of Python.",
      },
    ],
    exercises: [
      {
        id: "m3l3-q1",
        question: "What does this code print?",
        code: `densities = {"Al": 2.70, "Cu": 8.96}
print(densities["Cu"])`,
        options: [
          { id: "a", text: "8.96" },
          { id: "b", text: "Cu" },
          { id: "c", text: "1" },
        ],
        correctOptionId: "a",
        explanation: "Square brackets with a key return that key's value.",
      },
      {
        id: "m3l3-q2",
        question: "What does `densities.get(\"Au\", 0)` return if `\"Au\"` is not a key?",
        options: [
          { id: "a", text: "A `KeyError`" },
          { id: "b", text: "`0`" },
          { id: "c", text: "`None`" },
        ],
        correctOptionId: "b",
        explanation: "`get()` returns the default you provide (here `0`) when the key is missing, instead of raising an error.",
      },
      {
        id: "m3l3-q3",
        question: "What is `sample` after this code runs?",
        code: `sample = {"mass": 2.70}
sample["mass"] = 2.75`,
        options: [
          { id: "a", text: "`{'mass': 2.70, 'mass': 2.75}`" },
          { id: "b", text: "`{'mass': 2.75}`" },
          { id: "c", text: "An error, because the key already exists" },
        ],
        correctOptionId: "b",
        explanation: "Keys are unique. Assigning to an existing key replaces its value.",
      },
    ],
  },
  {
    moduleSlug: MODULE_SLUG,
    lessonSlug: "sets",
    description: "Work with collections of unique values: remove duplicates, test membership quickly, and compare groups with union, intersection and difference.",
    estimatedMinutes: 20,
    learningObjectives: [
      "Create sets and use them to remove duplicates",
      "Add and remove items from a set",
      "Compare sets with union, intersection and difference",
    ],
    blocks: [
      { type: "heading", text: "Unique values" },
      {
        type: "paragraph",
        text: "A **set** is a collection where every value appears **at most once**. Sets are written with curly braces, like dictionaries, but contain single values rather than key-value pairs. If you add a value that is already there, nothing changes.",
      },
      {
        type: "paragraph",
        text: "Sets are **unordered**: they don't keep items in the order you added them, so you can't use indexes like `s[0]`. When you need the items in order, for example to print them, use `sorted()`, which returns a sorted list.",
      },
      {
        type: "code",
        code: `elements = {"Fe", "Cr", "Ni", "Fe", "Cr"}
print(len(elements))
print(sorted(elements))`,
        output: `3
['Cr', 'Fe', 'Ni']`,
      },
      { type: "subheading", text: "Removing duplicates from a list" },
      {
        type: "paragraph",
        text: "Converting a list to a set with `set()` throws away duplicates. This is the quickest way to find the distinct values in a dataset.",
      },
      {
        type: "contextExample",
        title: "Finding distinct values",
        variants: {
          "materials-science": {
            intro: "A batch of samples was labelled with its crystal structure. Which structures appear?",
            code: `structures = ["FCC", "BCC", "FCC", "HCP", "BCC", "FCC"]
distinct = set(structures)
print(f"{len(structures)} samples, {len(distinct)} structures")
print(sorted(distinct))`,
            output: `6 samples, 3 structures
['BCC', 'FCC', 'HCP']`,
          },
          chemistry: {
            intro: "Which elements appear in a list of atoms from a molecule file?",
            code: `atoms = ["C", "H", "H", "H", "C", "O", "H", "H", "H"]
print(sorted(set(atoms)))`,
            output: "['C', 'H', 'O']",
          },
          physics: {
            intro: "Students labelled the forces in a set of free-body diagrams. Which different forces did they use?",
            code: `labels = ["gravity", "normal force", "gravity", "friction", "gravity", "tension"]
print(sorted(set(labels)))`,
            output: "['friction', 'gravity', 'normal force', 'tension']",
          },
          biology: {
            intro: "Which nucleotide bases occur in this RNA fragment?",
            code: `rna = "AUGGCUUAA"
print(sorted(set(rna)))`,
            output: "['A', 'C', 'G', 'U']",
            explanation: "`set()` works on any collection, including a string, where each character is one item.",
          },
          biochemistry: {
            intro: "Which distinct amino acids make up this short peptide?",
            code: `peptide = "GAGAGSGAAG"
residues = set(peptide)
print(len(residues), "distinct residues:", sorted(residues))`,
            output: "3 distinct residues: ['A', 'G', 'S']",
          },
          "general-programming": {
            intro: "A website logged the username of every visit. How many different people visited?",
            code: `visitors = ["amir", "bea", "amir", "chen", "bea", "amir"]
unique_visitors = set(visitors)
print(f"{len(visitors)} visits, {len(unique_visitors)} unique visitors")
print(sorted(unique_visitors))`,
            output: `6 visits, 3 unique visitors
['amir', 'bea', 'chen']`,
          },
        },
      },
      { type: "heading", text: "Adding and removing items" },
      {
        type: "paragraph",
        text: "`add(x)` puts one value into a set. `remove(x)` takes it out but raises a `KeyError` if it isn't there; `discard(x)` does the same without an error. Testing membership with `in` is very fast for sets, even when they are large.",
      },
      {
        type: "code",
        code: `alloying = {"Cr", "Ni"}
alloying.add("Mo")
alloying.add("Cr")          # already present: no change
alloying.discard("W")       # not present: no error
print(sorted(alloying))
print("Mo" in alloying)`,
        output: `['Cr', 'Mo', 'Ni']
True`,
      },
      {
        type: "callout",
        tone: "warning",
        title: "Creating an empty set",
        text: "`{}` creates an empty **dictionary**, not a set. Use `set()` for an empty set.",
      },
      { type: "heading", text: "Set operations" },
      {
        type: "paragraph",
        text: "Sets support the operations from mathematical set theory. They are a clear way to compare two groups: which items they share, which belong to only one, and which appear in either.",
      },
      {
        type: "table",
        columns: ["Operator", "Method", "Result contains"],
        rows: [
          ["`a | b`", "`a.union(b)`", "Items in `a`, in `b`, or in both"],
          ["`a & b`", "`a.intersection(b)`", "Items in both `a` and `b`"],
          ["`a - b`", "`a.difference(b)`", "Items in `a` but not in `b`"],
          ["`a ^ b`", "`a.symmetric_difference(b)`", "Items in exactly one of `a` and `b`"],
        ],
      },
      {
        type: "code",
        code: `steel_304 = {"Fe", "Cr", "Ni", "C"}
steel_316 = {"Fe", "Cr", "Ni", "Mo", "C"}

print("Shared:", sorted(steel_304 & steel_316))
print("Only in 316:", sorted(steel_316 - steel_304))
print("All elements:", sorted(steel_304 | steel_316))`,
        output: `Shared: ['C', 'Cr', 'Fe', 'Ni']
Only in 316: ['Mo']
All elements: ['C', 'Cr', 'Fe', 'Mo', 'Ni']`,
      },
      {
        type: "explanation",
        text: "The molybdenum in 316 stainless steel improves its resistance to corrosion, which the set difference picks out immediately.",
      },
      {
        type: "table",
        caption: "Choosing a data structure",
        columns: ["Structure", "Ordered?", "Changeable?", "Duplicates?", "Use it for"],
        rows: [
          ["List `[...]`", "Yes", "Yes", "Yes", "A sequence of similar values: measurements, samples"],
          ["Tuple `(...)`", "Yes", "No", "Yes", "A fixed record: coordinates, (symbol, mass)"],
          ["Dictionary `{k: v}`", "Yes (insertion order)", "Yes", "Keys must be unique", "Looking values up by name"],
          ["Set `{...}`", "No", "Yes", "No", "Unique values and comparing groups"],
        ],
      },
    ],
    exercises: [
      {
        id: "m3l4-q1",
        question: "What does this code print?",
        code: `print(len({"Fe", "Fe", "Ni"}))`,
        options: [
          { id: "a", text: "3" },
          { id: "b", text: "2" },
          { id: "c", text: "1" },
        ],
        correctOptionId: "b",
        explanation: "A set keeps only unique values, so the duplicate `\"Fe\"` is stored once.",
      },
      {
        id: "m3l4-q2",
        question: "Which expression gives the elements found in **both** `a` and `b`?",
        options: [
          { id: "a", text: "`a | b`" },
          { id: "b", text: "`a & b`" },
          { id: "c", text: "`a - b`" },
        ],
        correctOptionId: "b",
        explanation: "`&` is the intersection: items present in both sets.",
      },
      {
        id: "m3l4-q3",
        question: "How do you create an empty set?",
        options: [
          { id: "a", text: "`{}`" },
          { id: "b", text: "`set()`" },
          { id: "c", text: "`[]`" },
        ],
        correctOptionId: "b",
        explanation: "`{}` is an empty dictionary and `[]` an empty list. Use `set()` for an empty set.",
      },
    ],
  },
];
