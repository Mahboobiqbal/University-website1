import { DEGREE_PROGRAMS } from "./apply-workflow";

export interface ProgramFee {
  program: string;
  level: "Undergraduate" | "MS/MPhil" | "PhD";
  admissionFee: number;
  annualFee: number;
  perSemesterFee: number;
}

export interface DepartmentFees {
  note: string;
  programs: ProgramFee[];
}

type FeeSeed = {
  program: string;
  level: ProgramFee["level"];
  admissionFee: number;
  annualFee: number;
};

function toProgramFee(seed: FeeSeed): ProgramFee {
  return {
    ...seed,
    perSemesterFee: Math.round(seed.annualFee / 2),
  };
}

/** Fallback annual/admission fees by level when a programme is not in DEGREE_PROGRAMS */
const LEVEL_DEFAULTS: Record<
  ProgramFee["level"],
  { annualFee: number; admissionFee: number }
> = {
  Undergraduate: { annualFee: 42000, admissionFee: 12000 },
  "MS/MPhil": { annualFee: 54000, admissionFee: 18000 },
  PhD: { annualFee: 62000, admissionFee: 20000 },
};

/** Map DEGREE_PROGRAMS entries onto a department via name keywords */
function matchDegreePrograms(deptId: string): ProgramFee[] {
  const keywordMap: Record<string, string[]> = {
    "computer-software-technology": ["computer", "software", "artificial intelligence"],
    physics: ["physics"],
    "mathematics-statistics": ["mathematics", "statistics"],
    geology: ["geology"],
    "biotechnology-genetics-forensic-microbiology": ["biotechnology", "microbiology"],
    chemistry: ["chemistry"],
    zoology: ["zoology"],
    botany: ["botany"],
    "environmental-sciences": ["environmental"],
    "management-commerce": ["bba", "business"],
    "economics-development-studies": ["economics"],
    "tourism-hospitality": ["tourism"],
    "psychological-studies": ["psychology"],
    "english-foreign-languages": ["english"],
    "law-shariah": ["llb", "law"],
    "islamic-arabic-studies": ["islamic"],
    "pashto-local-languages": ["pashto"],
  };

  const keywords = keywordMap[deptId] ?? [];
  if (keywords.length === 0) return [];

  return DEGREE_PROGRAMS.filter((prog) =>
    keywords.some((kw) => prog.name.toLowerCase().includes(kw))
  ).map((prog) => {
    const level: ProgramFee["level"] = prog.level.includes("PhD")
      ? "PhD"
      : prog.level.includes("MS") || prog.level.includes("MPhil")
        ? "MS/MPhil"
        : "Undergraduate";
    return toProgramFee({
      program: prog.name,
      level,
      admissionFee: prog.admissionFee,
      annualFee: prog.annualFee,
    });
  });
}

/** Extra programmes not listed in DEGREE_PROGRAMS, per department */
const EXTRA_PROGRAMS: Record<string, FeeSeed[]> = {
  "computer-software-technology": [
    { program: "BS Information Technology", level: "Undergraduate", admissionFee: 15000, annualFee: 46000 },
    { program: "BS Data Science", level: "Undergraduate", admissionFee: 15000, annualFee: 48000 },
    { program: "PhD Computer Science", level: "PhD", admissionFee: 20000, annualFee: 65000 },
  ],
  "management-commerce": [
    { program: "BS Digital Marketing", level: "Undergraduate", admissionFee: 14000, annualFee: 44000 },
    { program: "BS Business Analytics", level: "Undergraduate", admissionFee: 14000, annualFee: 44000 },
    { program: "BS Accounting and Finance", level: "Undergraduate", admissionFee: 14000, annualFee: 44000 },
    { program: "MBA (Business Stream)", level: "MS/MPhil", admissionFee: 18000, annualFee: 56000 },
    { program: "MS Management Sciences", level: "MS/MPhil", admissionFee: 18000, annualFee: 54000 },
  ],
  "islamic-arabic-studies": [
    { program: "MPhil Arabic Studies", level: "MS/MPhil", admissionFee: 16000, annualFee: 48000 },
    { program: "PhD Islamic Studies", level: "PhD", admissionFee: 20000, annualFee: 62000 },
  ],
  "english-foreign-languages": [
    { program: "MPhil Linguistics", level: "MS/MPhil", admissionFee: 16000, annualFee: 50000 },
  ],
  physics: [
    { program: "MPhil Physics", level: "MS/MPhil", admissionFee: 18000, annualFee: 54000 },
  ],
  "economics-development-studies": [
    { program: "MS Economics", level: "MS/MPhil", admissionFee: 17000, annualFee: 52000 },
  ],
  "allied-health-sciences": [
    { program: "BS Medical Laboratory Technology (MLT)", level: "Undergraduate", admissionFee: 18000, annualFee: 58000 },
    { program: "BS Dental Technology", level: "Undergraduate", admissionFee: 18000, annualFee: 56000 },
    { program: "Doctor of Physical Therapy (DPT)", level: "Undergraduate", admissionFee: 20000, annualFee: 72000 },
    { program: "BS Radiography & Imaging Technology", level: "Undergraduate", admissionFee: 18000, annualFee: 58000 },
  ],
  hunerkada: [
    { program: "BS Fine Arts", level: "Undergraduate", admissionFee: 14000, annualFee: 48000 },
    { program: "BS Performing Arts", level: "Undergraduate", admissionFee: 14000, annualFee: 46000 },
  ],
  "urdu": [
    { program: "BS Urdu", level: "Undergraduate", admissionFee: 10000, annualFee: 32000 },
    { program: "MPhil Urdu", level: "MS/MPhil", admissionFee: 15000, annualFee: 46000 },
  ],
  archaeology: [
    { program: "BS Archaeology", level: "Undergraduate", admissionFee: 12000, annualFee: 40000 },
  ],
  "tourism-hospitality": [
    { program: "BS Culinary Arts", level: "Undergraduate", admissionFee: 14000, annualFee: 44000 },
  ],
  "agricultural-sciences-forestry": [
    { program: "BS Agriculture", level: "Undergraduate", admissionFee: 15000, annualFee: 50000 },
    { program: "BS Forestry", level: "Undergraduate", admissionFee: 15000, annualFee: 50000 },
  ],
  "media-communication-studies": [
    { program: "BS Media & Communication Studies", level: "Undergraduate", admissionFee: 13000, annualFee: 42000 },
  ],
  "education-staff-training": [
    { program: "BS Education", level: "Undergraduate", admissionFee: 12000, annualFee: 38000 },
    { program: "MPhil Education", level: "MS/MPhil", admissionFee: 16000, annualFee: 50000 },
  ],
  "pakistan-studies": [
    { program: "BS Pakistan Studies", level: "Undergraduate", admissionFee: 11000, annualFee: 36000 },
  ],
  "social-gender-studies": [
    { program: "BS Social & Gender Studies", level: "Undergraduate", admissionFee: 12000, annualFee: 38000 },
  ],
  "law-shariah": [
    { program: "LLB (5 Years)", level: "Undergraduate", admissionFee: 18000, annualFee: 55000 },
  ],
};

const DEFAULT_NOTE =
  "Indicative fee schedule for this discipline. Amounts may vary by admission session, campus, and HEC revisions — confirm the latest challan with the Treasurer’s Office or Directorate of Admissions.";

function buildDepartmentFees(deptId: string, programs: { name: string; level: string }[]): DepartmentFees {
  const fromDegree = matchDegreePrograms(deptId);
  const extras = (EXTRA_PROGRAMS[deptId] ?? []).map(toProgramFee);

  const byName = new Map<string, ProgramFee>();
  for (const fee of [...fromDegree, ...extras]) {
    byName.set(fee.program.toLowerCase(), fee);
  }

  // Prefer real department programme names when we can pair them with fees
  const paired: ProgramFee[] = [];
  for (const prog of programs) {
    const level: ProgramFee["level"] =
      prog.level.toLowerCase().includes("phd")
        ? "PhD"
        : prog.level.toLowerCase().includes("ms") || prog.level.toLowerCase().includes("mphil")
          ? "MS/MPhil"
          : "Undergraduate";

    const key = prog.name.toLowerCase();
    const exact = byName.get(key);
    if (exact) {
      paired.push({ ...exact, program: prog.name });
      byName.delete(key);
      continue;
    }

    const fuzzy = [...byName.values()].find((fee) => {
      const feeName = fee.program.toLowerCase();
      return (
        feeName.includes(key) ||
        key.includes(feeName) ||
        feeName.split(/\s+/).some((word) => word.length > 4 && key.includes(word))
      );
    });
    if (fuzzy) {
      paired.push({ ...fuzzy, program: prog.name, level });
      for (const [k, v] of byName) {
        if (v === fuzzy) byName.delete(k);
      }
      continue;
    }

    const defaults = LEVEL_DEFAULTS[level];
    paired.push(
      toProgramFee({
        program: prog.name,
        level,
        admissionFee: defaults.admissionFee,
        annualFee: defaults.annualFee,
      })
    );
  }

  // Keep any matched DEGREE_PROGRAMS not listed on the department (still useful)
  const leftover = [...byName.values()];

  return {
    note: DEFAULT_NOTE,
    programs: [...paired, ...leftover],
  };
}

const OVERRIDE: Record<string, DepartmentFees> = {
  "allied-health-sciences": {
    note: "Health-science programmes include laboratory and clinical placement charges. Confirm the current fee challan with the faculty office.",
    programs: [],
  },
};

export function getDepartmentFees(
  deptId: string,
  programs: { name: string; level: string }[]
): DepartmentFees {
  const override = OVERRIDE[deptId];
  if (override && override.programs.length > 0) return override;
  return buildDepartmentFees(deptId, programs);
}

export function formatFee(amount: number): string {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}
