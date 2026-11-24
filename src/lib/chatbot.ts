import { GoogleGenAI } from "@google/genai";
import { DEPARTMENTS } from "@/data/departments";
import { FACULTIES } from "@/data/faculties";
import { ROADMAPS } from "@/data/bahria-admissions";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatResponse {
  reply: string;
  suggestions?: string[];
  source: "gemini" | "knowledge-base";
}

// System prompt grounding for Gemini model
const UNIVERSITY_SYSTEM_PROMPT = `
You are the official AI Assistant for the University of Swat (جامعہ سوات), a premier public-sector university located in Swat Valley, Khyber Pakhtunkhwa, Pakistan.
Established in 2010, the University operates under the motto "Aspiring for Quality Education with Relevance".
The Vice Chancellor is Prof. Dr. Hassan Sher (Tamgha-e-Imtiaz).

Your primary role is to assist students, applicants, parents, researchers, and visitors with accurate, helpful, and polite information about:
1. Admissions (Undergraduate BS/BBA/LLB, Masters/MPhil, PhD, deadlines, criteria, entry tests, merit calculation).
2. Academic Programs (Over 49 degree programs across 22 departments and 6 faculties).
3. Faculties:
   - Faculty of Religious, Languages, Humanities & Legal Studies
   - Faculty of Physical, Numerical & Computational Sciences
   - Faculty of Management, Art & Social Sciences
   - Faculty of Chemical, Life & Environmental Sciences
   - Faculty of Agriculture, Animal Sciences & Veterinary Medicine
   - Faculty of Medicine & Allied Health Sciences
4. Campuses:
   - Main Campus: Charbagh, Swat (Houses principal faculties, Central Library, and administration)
   - Shangla Sub-Campus: Alpuri, Shangla
   - Women Sub-Campus: Saidu Sharif / Kanju
5. Fees & Financial Aid:
   - Competitive public sector fee structure.
   - Scholarships: HEC Need-Based Scholarships, Ehsaas Undergraduate Scheme, Mora Scholarships, and University Merit Awards.
6. Central Library:
   - 50,000+ volumes, automated library management system, HEC Digital Library with thousands of research journals.
   - Contact: librarian@uswat.edu.pk
7. Contact Information:
   - Main Office: University of Swat, Main Campus, Charbagh, Swat, KP, Pakistan
   - Email: admissions@uswat.edu.pk / info@uswat.edu.pk
   - Official portal: uswat.edu.pk

Guidelines:
- Maintain a warm, dignified, and professional tone suited for a university.
- Always provide structured, easy-to-read formatting (bullet points, bold text).
- Include relevant internal links using markdown where helpful:
  - [Browse Academic Programs](/programs)
  - [View Admissions Guide](/admissions)
  - [Departments Directory](/departments)
  - [Campus Locations](/campuses)
  - [Contact Office](/contact)
  - [Vice Chancellor's Message](/vice-chancellor)
- Remind users to verify critical dates, fee challans, and merit lists on the official University notice board (uswat.edu.pk).
`.trim();

// Local Knowledge Base Matcher for high-speed offline/fallback responses
function getKnowledgeBaseResponse(query: string): { reply: string; suggestions: string[] } {
  const q = query.toLowerCase().trim();

  // Greetings
  if (
    q.match(/^(hi|hello|hey|salam|assalam|aoa|greetings|good morning|good afternoon|good evening)/i)
  ) {
    return {
      reply: `**Welcome to the University of Swat Virtual Assistant!** 🎓

I am here to help you navigate our academic offerings, admissions processes, campus life, and university services.

Here are a few popular topics I can assist you with:
- **[Undergraduate & Graduate Admissions](/admissions)**
- **[49+ Degree Programs & Eligibility](/programs)**
- **[22 Teaching Departments](/departments)**
- **[Main Campus (Charbagh) & Sub-campuses](/campuses)**
- **[Fee Structure & HEC Scholarships](/admissions/guide/fee-structure)**

How can I help you today?`,
      suggestions: [
        "How do I apply for admissions?",
        "What degree programs are offered?",
        "Where are the campuses located?",
        "What scholarships are available?",
      ],
    };
  }

  // Admissions & How to apply
  if (
    q.includes("apply") ||
    q.includes("admission") ||
    q.includes("admit") ||
    q.includes("entry test") ||
    q.includes("merit") ||
    q.includes("deadline") ||
    q.includes("last date") ||
    q.includes("intake")
  ) {
    return {
      reply: `### University of Swat Admissions Guide

Admissions at the University of Swat open biannually for **Fall** (major intake) and **Spring** semesters:

#### 1. Available Study Levels
- **Undergraduate (BS / 4-Year Degrees)**: Minimum 50% marks in Intermediate (HSSC / FA / FSc / ICS / I.Com) or equivalent.
- **Master's / MPhil (2-Year Degrees)**: 16 years of education in a relevant field with a minimum 2.5/4.0 CGPA (or 50% marks in annual system) plus GAT (General) score.
- **PhD Programs**: 18 years of education (MS/MPhil with thesis) with minimum 3.0/4.0 CGPA plus GAT (Subject) or departmental test.

#### 2. Application Procedure
1. Visit the online admissions portal at **uswat.edu.pk**.
2. Select your desired campus (**Main Campus Charbagh**, **Shangla Sub-Campus**, or **Women Sub-Campus**).
3. Upload required academic certificates, CNIC/B-Form, and passport-size photographs.
4. Deposit the application processing fee at designated bank branches using the generated challan.
5. Check the portal for entry test schedules, merit lists, and interview dates.

🔗 **Useful Links:**
- [Explore the Admissions Roadmap](/admissions)
- [How to Apply Step-by-Step](/admissions/guide/how-to-apply)
- [Fee Structure & Payment Guide](/admissions/guide/fee-structure)
- [Admission Quotas & Reserved Seats](/admissions/guide/admission-quota)`,
      suggestions: [
        "What are the admission eligibility requirements?",
        "What scholarships can I apply for?",
        "View BS programs",
        "Contact the Admissions Office",
      ],
    };
  }

  // Programs & Degrees
  if (
    q.includes("program") ||
    q.includes("degree") ||
    q.includes("course") ||
    q.includes("study") ||
    q.includes("bachelor") ||
    q.includes("bs") ||
    q.includes("mphil") ||
    q.includes("phd") ||
    q.includes("major")
  ) {
    return {
      reply: `### Academic Programs at University of Swat

The University offers **49 academic programs** across **22 teaching departments**:

#### Popular Undergraduate Degrees (BS 4-Year):
- **Computing & Technology**: BS Computer Science, BS Software Engineering, BS Information Technology
- **Sciences**: BS Physics, BS Chemistry, BS Mathematics, BS Botany, BS Zoology, BS Geology, BS Environmental Sciences
- **Humanities & Languages**: BS English (Literature & Linguistics), BS Islamic Studies, BS Pashto
- **Social & Management Sciences**: BBA (Business Administration), BS Economics, BS Tourism & Hospitality, 5-Year LLB (Law)

#### Postgraduate & Doctoral Studies:
- **MS/MPhil**: Computer Science, Physics, Chemistry, Botany, Zoology, Economics, English, Management Sciences.
- **PhD**: Botany, Zoology, Chemistry, Physics, and specialized research areas.

🔗 **Explore Programs:**
- [Browse All Programs by Study Level](/programs)
- [Departments & Faculty Directory](/departments)
- [Faculty & Academic Groups](/faculties)`,
      suggestions: [
        "Tell me about BS Computer Science",
        "What are the eligibility criteria for BS English?",
        "Where is the Main Campus?",
        "How much are the semester fees?",
      ],
    };
  }

  // Specific programs: Computer Science
  if (
    q.includes("computer science") ||
    q.includes("software engineering") ||
    q.includes("it") ||
    q.includes("cs")
  ) {
    return {
      reply: `### Department of Computer and Software Technology 💻

The Department of Computer and Software Technology is one of the most vibrant departments at the University of Swat, preparing students for competitive careers in software engineering, artificial intelligence, data science, and networking.

- **Degrees Offered**:
  - **BS Computer Science (BS CS)** — 4 Years (8 Semesters)
  - **BS Software Engineering (BS SE)** — 4 Years (8 Semesters)
  - **MS Computer Science (MS CS)** — 2 Years
  - **PhD Computer Science**
- **Eligibility for BS**: At least 50% marks in FSc Pre-Engineering, ICS, or General Science with Mathematics.
- **Facilities**: State-of-the-art computer labs, high-speed internet, and dedicated research groups.

🔗 [View Computer & Software Technology Department](/department/computer-and-software-technology) | [All Programs](/programs)`,
      suggestions: [
        "How do I apply for BS Computer Science?",
        "What is the fee structure?",
        "Show me other science programs",
      ],
    };
  }

  // Fees & Scholarships
  if (
    q.includes("fee") ||
    q.includes("scholarship") ||
    q.includes("financial aid") ||
    q.includes("cost") ||
    q.includes("dues") ||
    q.includes("challan") ||
    q.includes("tuition")
  ) {
    return {
      reply: `### Tuition Fees & Scholarships 💰

The University of Swat provides an affordable public-sector fee schedule with extensive financial support opportunities:

#### 1. Tuition & Semester Dues
- **Undergraduate (BS Programs)**: Semester dues typically range from **PKR 25,000 to PKR 45,000** depending on the faculty (Laboratory sciences and computing have modest lab charges).
- **Postgraduate (MS/MPhil)**: Approximately **PKR 35,000 to PKR 50,000** per semester.
- Dues are deposited via automated bank challans at nominated branches of Habib Bank Limited (HBL) or Allied Bank.

#### 2. Financial Aid & Scholarships
- **HEC Need-Based Scholarships**: Covers tuition fees plus a monthly living stipend for deserving students.
- **Ehsaas / BISP Undergraduate Scholarship Project**: Full tuition coverage and annual educational stipends.
- **Mora Scholarships & District Zakat Fund**: Financial assistance for underprivileged students.
- **University Merit Scholarships**: Awarded to top-ranking students across departments each semester.

🔗 **Helpful Links:**
- [Official Fee Structure Overview](/admissions/guide/fee-structure)
- [Scholarships & Financial Aid Guide](/admissions/information/scholarships)
- [Contact Finance Branch](/contact)`,
      suggestions: [
        "What are the eligibility requirements for HEC scholarships?",
        "How to pay admission fees?",
        "View admissions guide",
      ],
    };
  }

  // Campuses & Locations
  if (
    q.includes("campus") ||
    q.includes("location") ||
    q.includes("where") ||
    q.includes("address") ||
    q.includes("charbagh") ||
    q.includes("shangla") ||
    q.includes("hostel") ||
    q.includes("facility")
  ) {
    return {
      reply: `### Campuses & Facilities 📍

The University of Swat operates across the picturesque Swat Valley with dedicated learning centers:

1. **Main Campus (Charbagh, Swat)**
   - Houses the central administration, major teaching faculties, state-of-the-art laboratories, and the central library.
   - Location: Main G.T. Road, Charbagh, Swat, Khyber Pakhtunkhwa.
2. **Shangla Sub-Campus (Alpuri)**
   - Provides higher education opportunities to students of the Shangla district in computer science, management, and basic sciences.
3. **Women Sub-Campus**
   - Dedicated environment promoting women's education in core humanities, social sciences, and natural sciences.

**Campus Amenities:**
- **Transport**: University buses cover routes from Mingora, Saidu Sharif, Barikot, Khwazakhela, and surrounding areas.
- **Hostel Facilities**: On-campus accommodation available for outstation male and female students.
- **Sports & Recreation**: Cricket and football grounds, indoor sports, and active student societies.

🔗 [Explore Campuses & Facilities](/campuses) | [Campus Life & Societies](/student-life)`,
      suggestions: [
        "What departments are at the Main Campus?",
        "How can I contact the transport office?",
        "Explore student life",
      ],
    };
  }

  // Departments & Faculties
  if (
    q.includes("department") ||
    q.includes("faculty") ||
    q.includes("faculties") ||
    q.includes("teacher") ||
    q.includes("professor")
  ) {
    return {
      reply: `### Faculties & Departments Overview 🏛️

The University of Swat comprises **6 Academic Faculties** and **22 Teaching Departments**:

- **Physical, Numerical & Computational Sciences**: Computer & Software Technology, Physics, Mathematics & Statistics, Geology
- **Chemical, Life & Environmental Sciences**: Chemistry, Botany, Zoology, Environmental Sciences
- **Religious, Languages & Humanities**: English & Foreign Languages, Islamic & Arabic Studies, Pashto & Local Languages, Law & Shariah
- **Management, Art & Social Sciences**: Management & Commerce, Economics, Tourism & Hospitality, Archaeology, Pakistan Studies
- **Agriculture, Animal Sciences & Veterinary Medicine**: Agricultural Sciences, Animal Sciences
- **Medicine & Allied Health Sciences**: Allied Health and related programs

🔗 [View All Departments](/departments) | [Browse Academic Faculties](/faculties)`,
      suggestions: [
        "Tell me about English and Foreign Languages",
        "View computer science department",
        "Browse all programs",
      ],
    };
  }

  // Central Library & Research
  if (
    q.includes("library") ||
    q.includes("book") ||
    q.includes("research") ||
    q.includes("oric") ||
    q.includes("journal")
  ) {
    return {
      reply: `### Central Library & Research Facilities 📚

The **University of Swat Central Library** is located at the Main Campus, Charbagh:
- **Collections**: Over 50,000 printed books, reference volumes, rare historical texts, and manuscripts.
- **Digital Library**: Full access to the **HEC National Digital Library**, providing over 75,000 electronic journals, research papers, and articles.
- **Automation**: Fully cataloged using the KOHA integrated library management system with OPAC search.
- **Research & Innovation (ORIC)**: Supports faculty and student research projects, patents, and industrial commercialization.

✉️ **Contact Library**: \`librarian@uswat.edu.pk\`
🔗 [Central Library Page](/library) | [Research & ORIC](/research)`,
      suggestions: [
        "How can I access digital journals?",
        "View research centers",
        "Contact the librarian",
      ],
    };
  }

  // Vice Chancellor & Administration
  if (
    q.includes("vc") ||
    q.includes("vice chancellor") ||
    q.includes("hassan sher") ||
    q.includes("chancellor") ||
    q.includes("admin") ||
    q.includes("registrar")
  ) {
    return {
      reply: `### University Leadership & Administration 🎓

- **Vice Chancellor**: **Prof. Dr. Hassan Sher** (*Tamgha-e-Imtiaz*)
  - A distinguished educationist and researcher dedicated to academic excellence, socio-economic uplift of the region, and research with real-world relevance.
- **University Governance**:
  - The university operates under the Khyber Pakhtunkhwa Universities Act with statutory bodies including the Senate, Syndicate, and Academic Council.
- **Key Administrative Offices**:
  - Registrar Office: \`registrar@uswat.edu.pk\`
  - Controller of Examinations: \`controller@uswat.edu.pk\`
  - Directorate of Admissions: \`admissions@uswat.edu.pk\`

🔗 [Read Vice Chancellor's Message](/vice-chancellor) | [Administrative Directory](/administration)`,
      suggestions: [
        "Read Vice Chancellor's Message",
        "Contact the Registrar Office",
        "Learn about university history",
      ],
    };
  }

  // Contact & Helpdesk
  if (
    q.includes("contact") ||
    q.includes("phone") ||
    q.includes("email") ||
    q.includes("call") ||
    q.includes("helpline") ||
    q.includes("inquiry") ||
    q.includes("number")
  ) {
    return {
      reply: `### Contact the University of Swat 📞

- **Main Campus Address**:
  University of Swat, Main Campus, Charbagh, District Swat, Khyber Pakhtunkhwa, Pakistan
- **Telephone / Exchange**:
  +92-946-920815 / +92-946-724127
- **Key Email Inquiries**:
  - **Admissions**: \`admissions@uswat.edu.pk\`
  - **General Inquiries**: \`info@uswat.edu.pk\`
  - **Registrar Office**: \`registrar@uswat.edu.pk\`
  - **Central Library**: \`librarian@uswat.edu.pk\`
- **Official Website**:
  [uswat.edu.pk](https://uswat.edu.pk)

🔗 [Visit Contact & Directory Page](/contact) | [Administrative Offices](/administration)`,
      suggestions: [
        "Where is the Main Campus?",
        "How do I apply for admissions?",
        "View all academic departments",
      ],
    };
  }

  // Fallback intelligent general response
  return {
    reply: `I can help you with comprehensive information about the **University of Swat**:

- **Admissions**: Application dates, merit criteria, eligibility for BS, MPhil, and PhD programs.
- **Academic Programs**: Detailed curricula and duration for our 49+ undergraduate and postgraduate degrees.
- **Departments & Faculty**: Directory of our 22 teaching departments across 6 faculties.
- **Campus Details**: Information regarding Main Campus (Charbagh), Shangla, and Women Sub-Campuses.
- **Fees & Financial Aid**: Semester fee schedules, HEC Need-Based Scholarships, and fee challans.
- **University Contacts**: Direct emails and phone numbers for admissions, exams, and offices.

Please feel free to ask a specific question, or select one of the suggested topics below:`,
    suggestions: [
      "How do I apply for admissions?",
      "What programs are offered?",
      "Fee structure and scholarships",
      "Where is the Main Campus?",
    ],
  };
}

/**
 * Generate a response using Gemini API if configured, otherwise fallback to local knowledge base.
 */
export async function generateChatResponse(messages: ChatMessage[]): Promise<ChatResponse> {
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  const userQuery = lastUserMessage?.content || "";

  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GENAI_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });

      // Build conversation history for generateContent
      const contents = messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        }));

      // If no valid contents, use the single user query
      const payload = contents.length > 0 ? contents : [{ role: "user", parts: [{ text: userQuery }] }];

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: payload,
        config: {
          systemInstruction: UNIVERSITY_SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "";
      if (replyText.trim().length > 0) {
        return {
          reply: replyText,
          source: "gemini",
          suggestions: [
            "How do I apply for admissions?",
            "What programs are offered?",
            "Tell me about fees and scholarships",
            "Where are the campuses located?",
          ],
        };
      }
    } catch (error) {
      console.warn("Gemini API call failed or timed out, falling back to knowledge base:", error);
    }
  }

  // Graceful, fast local knowledge-base fallback
  const kb = getKnowledgeBaseResponse(userQuery);
  return {
    reply: kb.reply,
    suggestions: kb.suggestions,
    source: "knowledge-base",
  };
}
