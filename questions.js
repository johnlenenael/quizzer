// Original practice problems covering the same topics listed on the book cover.
// answer = index (0-3) of the correct choice. points: easy 10, medium 15, hard 20.
window.QUESTIONS = [
  {
    id: 1, topic: "DC Circuits", difficulty: "easy", points: 10,
    question: "Three resistors of 6 Ω, 12 Ω and 4 Ω are connected in parallel. What is the equivalent resistance?",
    choices: ["1 Ω", "2 Ω", "4 Ω", "22 Ω"], answer: 1,
    solution: "1/Req = 1/6 + 1/12 + 1/4\n1/Req = 2/12 + 1/12 + 3/12 = 6/12\nReq = 12/6 = 2 Ω"
  },
  {
    id: 2, topic: "DC Circuits", difficulty: "easy", points: 10,
    question: "A 12 V source is connected to a 4 Ω and an 8 Ω resistor in series. What is the voltage across the 8 Ω resistor?",
    choices: ["4 V", "6 V", "8 V", "12 V"], answer: 2,
    solution: "Rt = 4 + 8 = 12 Ω\nI = V/Rt = 12/12 = 1 A\nV(8 Ω) = I × R = 1 × 8 = 8 V"
  },
  {
    id: 3, topic: "DC Circuits", difficulty: "medium", points: 15,
    question: "A heater rated 1500 W at 120 V is operating at its rating. What is its resistance?",
    choices: ["8.0 Ω", "9.6 Ω", "12.5 Ω", "18.0 Ω"], answer: 1,
    solution: "P = V²/R\nR = V²/P = 120² / 1500 = 14,400 / 1500 = 9.6 Ω"
  },
  {
    id: 4, topic: "AC Circuits", difficulty: "medium", points: 15,
    question: "A series RL circuit has R = 30 Ω and XL = 40 Ω and is connected to a 120 V source. Find the current.",
    choices: ["1.7 A", "2.4 A", "3.0 A", "4.0 A"], answer: 1,
    solution: "Z = √(R² + XL²) = √(30² + 40²) = √2500 = 50 Ω\nI = V/Z = 120/50 = 2.4 A"
  },
  {
    id: 5, topic: "AC Circuits", difficulty: "medium", points: 15,
    question: "For the same series RL circuit (R = 30 Ω, XL = 40 Ω, 120 V), what is the real power consumed?",
    choices: ["288 W", "172.8 W", "230.4 W", "120 W"], answer: 1,
    solution: "I = 120/50 = 2.4 A\nReal power is dissipated only in R:\nP = I²R = (2.4)² × 30 = 5.76 × 30 = 172.8 W\n(Check: S = VI = 288 VA, pf = R/Z = 0.6, P = 288 × 0.6 = 172.8 W)"
  },
  {
    id: 6, topic: "AC Circuits", difficulty: "hard", points: 20,
    question: "A series RLC circuit has L = 10 mH and C = 10 µF. What is its resonant frequency?",
    choices: ["159 Hz", "503 Hz", "1007 Hz", "3162 Hz"], answer: 1,
    solution: "fr = 1 / (2π√(LC))\nLC = (10×10⁻³)(10×10⁻⁶) = 1×10⁻⁷\n√(LC) = 3.162×10⁻⁴\nfr = 1 / (2π × 3.162×10⁻⁴) = 1 / 1.987×10⁻³ ≈ 503 Hz"
  },
  {
    id: 7, topic: "Electrostatics", difficulty: "easy", points: 10,
    question: "Two point charges of 2 µC each are placed 0.3 m apart in air. What is the force between them? (k = 9×10⁹ N·m²/C²)",
    choices: ["0.12 N", "0.4 N", "1.2 N", "4.0 N"], answer: 1,
    solution: "F = k q1 q2 / r²\nF = (9×10⁹)(2×10⁻⁶)(2×10⁻⁶) / (0.3)²\nF = 0.036 / 0.09 = 0.4 N (repulsive)"
  },
  {
    id: 8, topic: "Electrostatics", difficulty: "easy", points: 10,
    question: "A 10 µF and a 20 µF capacitor are connected in series. What is the equivalent capacitance?",
    choices: ["30 µF", "15 µF", "6.67 µF", "5 µF"], answer: 2,
    solution: "Series capacitors: Ceq = (C1 × C2)/(C1 + C2)\nCeq = (10 × 20)/(10 + 20) = 200/30 = 6.67 µF"
  },
  {
    id: 9, topic: "Electrostatics", difficulty: "medium", points: 15,
    question: "How much energy is stored in a 100 µF capacitor charged to 200 V?",
    choices: ["0.02 J", "1 J", "2 J", "4 J"], answer: 2,
    solution: "W = ½ C V²\nW = ½ (100×10⁻⁶)(200)² = ½ (100×10⁻⁶)(40,000) = 2 J"
  },
  {
    id: 10, topic: "Electromagnetic Induction", difficulty: "medium", points: 15,
    question: "A coil of 200 turns is linked by a flux that changes uniformly from 0.05 Wb to 0.01 Wb in 0.2 s. What is the average induced emf?",
    choices: ["8 V", "10 V", "40 V", "200 V"], answer: 2,
    solution: "e = N (ΔΦ/Δt)\nΔΦ = 0.05 − 0.01 = 0.04 Wb\ne = 200 × (0.04 / 0.2) = 200 × 0.2 = 40 V"
  },
  {
    id: 11, topic: "Magnetic Circuits", difficulty: "easy", points: 10,
    question: "A coil of 500 turns carries 2 A around a magnetic path 0.4 m long. What is the magnetic field intensity H?",
    choices: ["1000 AT/m", "1250 AT/m", "2500 AT/m", "5000 AT/m"], answer: 2,
    solution: "mmf = NI = 500 × 2 = 1000 ampere-turns\nH = mmf / l = 1000 / 0.4 = 2500 AT/m"
  },
  {
    id: 12, topic: "Instrumentation", difficulty: "medium", points: 15,
    question: "A d'Arsonval movement has a full-scale current of 50 µA. If it is used as a 100 V voltmeter, what is the total resistance of the meter (movement + multiplier)?",
    choices: ["20 kΩ", "200 kΩ", "2 MΩ", "20 MΩ"], answer: 2,
    solution: "Total resistance = Vfs / Ifs\n= 100 / (50×10⁻⁶) = 2×10⁶ Ω = 2 MΩ\n(Sensitivity = 1/Ifs = 20,000 Ω/V; 20,000 × 100 V = 2 MΩ)"
  },
  {
    id: 13, topic: "DC Generators", difficulty: "medium", points: 15,
    question: "A shunt generator delivers 100 A to the load at 230 V terminal voltage. The field current is 5 A and the armature resistance is 0.1 Ω. Find the generated emf (neglect brush drop).",
    choices: ["230.0 V", "240.0 V", "240.5 V", "241.0 V"], answer: 2,
    solution: "Ia = IL + If = 100 + 5 = 105 A\nEg = Vt + Ia·Ra = 230 + (105)(0.1) = 230 + 10.5 = 240.5 V"
  },
  {
    id: 14, topic: "DC Motors", difficulty: "medium", points: 15,
    question: "A shunt motor is connected to a 230 V supply and draws an armature current of 40 A. If Ra = 0.5 Ω, what is the mechanical power developed by the armature?",
    choices: ["8.4 kW", "9.2 kW", "8.0 kW", "20 kW"], answer: 0,
    solution: "Back emf Eb = V − Ia·Ra = 230 − (40)(0.5) = 210 V\nPd = Eb × Ia = 210 × 40 = 8400 W = 8.4 kW\n(9.2 kW is the electrical input to the armature, V × Ia)"
  },
  {
    id: 15, topic: "Alternators", difficulty: "easy", points: 10,
    question: "An 8-pole alternator generates 60 Hz. What is its synchronous speed?",
    choices: ["600 rpm", "900 rpm", "1200 rpm", "1800 rpm"], answer: 1,
    solution: "Ns = 120 f / P\nNs = 120 × 60 / 8 = 7200 / 8 = 900 rpm"
  },
  {
    id: 16, topic: "Transformers", difficulty: "medium", points: 15,
    question: "A 50 kVA, 2400/240 V single-phase transformer. What is the rated secondary current?",
    choices: ["20.8 A", "104.2 A", "208.3 A", "2083 A"], answer: 2,
    solution: "I2 = kVA × 1000 / V2 = 50,000 / 240 = 208.3 A\n(The primary current is 50,000/2400 = 20.8 A)"
  },
  {
    id: 17, topic: "Transformers", difficulty: "hard", points: 20,
    question: "A 10 kVA transformer has a core loss of 100 W and a copper loss of 150 W at full load. What is the full-load efficiency at unity power factor?",
    choices: ["95.0%", "96.6%", "97.6%", "98.5%"], answer: 2,
    solution: "Output = 10 kVA × 1.0 = 10,000 W\nTotal losses = 100 + 150 = 250 W\nInput = 10,000 + 250 = 10,250 W\nη = 10,000 / 10,250 = 0.9756 = 97.6%"
  },
  {
    id: 18, topic: "Induction Motors", difficulty: "medium", points: 15,
    question: "A 6-pole, 60 Hz induction motor runs at 1140 rpm. What is the slip?",
    choices: ["3%", "4%", "5%", "6%"], answer: 2,
    solution: "Ns = 120 f / P = 120 × 60 / 6 = 1200 rpm\ns = (Ns − N)/Ns = (1200 − 1140)/1200 = 60/1200 = 0.05 = 5%"
  },
  {
    id: 19, topic: "Synchronous Motors", difficulty: "easy", points: 10,
    question: "Which statement about an over-excited synchronous motor is correct?",
    choices: [
      "It operates at a lagging power factor",
      "It operates at a leading power factor and can be used to correct the power factor of a system",
      "It runs below synchronous speed",
      "It cannot be started without a load"
    ], answer: 1,
    solution: "When the field is over-excited, the motor's back emf is large and the armature draws a leading current, so it acts like a capacitor to the supply. That is why synchronous condensers are used for power factor correction. A synchronous motor always runs at exactly synchronous speed."
  },
  {
    id: 20, topic: "Transmission Lines", difficulty: "medium", points: 15,
    question: "The receiving-end voltage of a line is 13.2 kV at no load and 12 kV at full load. What is the voltage regulation?",
    choices: ["9.1%", "10%", "11%", "1.2%"], answer: 1,
    solution: "VR = (VNL − VFL)/VFL × 100\nVR = (13.2 − 12)/12 × 100 = 1.2/12 × 100 = 10%\n(Dividing by the no-load voltage would wrongly give 9.1%.)"
  },
  {
    id: 21, topic: "Faults", difficulty: "hard", points: 20,
    question: "A generator rated 10 MVA has a total fault impedance of 0.2 per unit on its own base. What is the three-phase short-circuit MVA?",
    choices: ["2 MVA", "10 MVA", "50 MVA", "200 MVA"], answer: 2,
    solution: "Fault current (pu) = 1 / Zpu = 1 / 0.2 = 5 pu\nShort-circuit MVA = MVAbase × Ipu = 10 × 5 = 50 MVA\n(or MVAsc = MVAbase / Zpu = 10/0.2 = 50 MVA)"
  },
  {
    id: 22, topic: "Illumination", difficulty: "easy", points: 10,
    question: "A point source of 1000 cd hangs 4 m directly above a table. What is the illuminance on the table directly below it?",
    choices: ["62.5 lux", "250 lux", "1000 lux", "15.6 lux"], answer: 0,
    solution: "Inverse-square law: E = I / d²\nE = 1000 / 4² = 1000 / 16 = 62.5 lux"
  },
  {
    id: 23, topic: "Rectifiers & Converters", difficulty: "medium", points: 15,
    question: "A single-phase full-wave rectifier has a peak output voltage Vm = 170 V. What is the average (dc) output voltage?",
    choices: ["54.1 V", "108.2 V", "120.2 V", "170 V"], answer: 1,
    solution: "For a full-wave rectifier: Vdc = 2 Vm / π\nVdc = 2 × 170 / 3.1416 = 340 / 3.1416 ≈ 108.2 V\n(A half-wave rectifier would give Vm/π = 54.1 V.)"
  },
  {
    id: 24, topic: "Power Plants", difficulty: "hard", points: 20,
    question: "A hydroelectric plant has a net head of 50 m and a flow of 10 m³/s. If the overall efficiency is 80%, what is the electrical output?",
    choices: ["3.14 MW", "3.92 MW", "4.91 MW", "39.2 MW"], answer: 1,
    solution: "P = ρ g Q H η\nP = (1000)(9.81)(10)(50)(0.80)\nP = 4,905,000 × 0.80 = 3,924,000 W ≈ 3.92 MW"
  },
  {
    id: 25, topic: "Power Plants", difficulty: "medium", points: 15,
    question: "A 100 MW plant generates 438,000 MWh in a year (8760 hours). What is its capacity factor?",
    choices: ["25%", "50%", "75%", "100%"], answer: 1,
    solution: "Maximum possible energy = 100 MW × 8760 h = 876,000 MWh\nCapacity factor = actual / maximum = 438,000 / 876,000 = 0.50 = 50%"
  }
];
