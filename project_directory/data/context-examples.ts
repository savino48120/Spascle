import type { ScientificContextSlug } from "@/types/content";

export interface ContextCodeExample {
  context: ScientificContextSlug;
  filename: string;
  code: string;
  output: string;
}

/**
 * One concept (variables and arithmetic) shown in each scientific context.
 * Used on the landing page to demonstrate context switching.
 */
export const VARIABLES_CONTEXT_EXAMPLES: ContextCodeExample[] = [
  {
    context: "materials-science",
    filename: "unit_cell.py",
    code: `# Lattice constant of copper (FCC), in ångströms
lattice_constant = 3.615
volume = lattice_constant ** 3
print(f"Unit cell volume: {volume:.2f} Å³")`,
    output: "Unit cell volume: 47.24 Å³",
  },
  {
    context: "chemistry",
    filename: "moles.py",
    code: `# Molar mass of water, in g/mol
molar_mass = 18.015
mass = 36.03  # grams
moles = mass / molar_mass
print(f"Moles of water: {moles:.2f} mol")`,
    output: "Moles of water: 2.00 mol",
  },
  {
    context: "physics",
    filename: "kinetic_energy.py",
    code: `# Kinetic energy of a moving object
mass = 2.0      # kg
velocity = 3.5  # m/s
energy = 0.5 * mass * velocity ** 2
print(f"Kinetic energy: {energy:.2f} J")`,
    output: "Kinetic energy: 12.25 J",
  },
  {
    context: "biology",
    filename: "gc_content.py",
    code: `# GC content of a DNA sequence
sequence = "ATGCGCATTA"
gc_count = sequence.count("G") + sequence.count("C")
gc_content = gc_count / len(sequence) * 100
print(f"GC content: {gc_content:.0f}%")`,
    output: "GC content: 40%",
  },
  {
    context: "biochemistry",
    filename: "enzyme_rate.py",
    code: `# Michaelis–Menten reaction rate
v_max = 120.0  # µmol/min
k_m = 2.5      # mM
substrate = 5.0  # mM
rate = v_max * substrate / (k_m + substrate)
print(f"Reaction rate: {rate:.1f} µmol/min")`,
    output: "Reaction rate: 80.0 µmol/min",
  },
  {
    context: "general-programming",
    filename: "basket.py",
    code: `# Total cost of items in a basket
price = 2.50
quantity = 4
total = price * quantity
print(f"Total: \${total:.2f}")`,
    output: "Total: $10.00",
  },
];
