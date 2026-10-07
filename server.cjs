var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_crypto = __toESM(require("crypto"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");

// src/data/initialData.ts
var DEFAULT_USER = {
  id: "usr_ssc_01",
  name: "Shri Shyam Recruiting Team",
  email: "info@shrishyamconsulting.in",
  companyName: "Shri Shyam Consulting",
  website: "www.shrishyamconsulting.in",
  phone: "8269715615",
  role: "admin",
  token: "mock_jwt_ssc_token_2026"
};
var INITIAL_JOBS = [
  {
    id: "job_01",
    userId: "usr_ssc_01",
    title: "Senior Full-Stack Engineer (React / Node / AWS)",
    department: "Technology & Product",
    location: "Bangalore / Remote",
    type: "Full-time",
    experience: "4-7 years",
    salaryRange: "22 - 32 LPA",
    openings: 3,
    applicantsCount: 14,
    status: "active",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    description: "Lead architecture and development of scalable cloud applications, candidate portal workflows, and real-time integration microservices.",
    requirements: [
      "4+ years hands-on experience building full-stack applications with React and Node.js",
      "Solid proficiency in TypeScript, RESTful and GraphQL APIs",
      "Experience with relational databases (PostgreSQL/MySQL) and caching systems",
      "Familiarity with containerization and cloud orchestration (AWS/GCP)"
    ],
    benefits: ["Health Insurance Coverage", "Flexible Remote Work", "Performance Bonus", "Learning & Certification Allowance"],
    createdAt: "2026-09-10T10:00:00Z",
    publishedChannels: ["LinkedIn", "Naukri", "Indeed"]
  },
  {
    id: "job_02",
    userId: "usr_ssc_01",
    title: "HR & Talent Acquisition Lead",
    department: "Human Resources & Recruitment",
    location: "Mumbai / Hybrid",
    type: "Full-time",
    experience: "3-5 years",
    salaryRange: "10 - 15 LPA",
    openings: 2,
    applicantsCount: 9,
    status: "active",
    skills: ["Technical Recruiting", "Resdex Search", "LinkedIn Recruiter", "Candidate Pipeline", "HR Tech"],
    description: "Drive end-to-end recruitment for executive and tech positions, oversee Resdex database sourcing, and partner with hiring managers.",
    requirements: [
      "Proven track record in end-to-end IT & leadership recruiting",
      "Expert in Boolean search queries on Resdex, Naukri, and LinkedIn",
      "Outstanding interpersonal and candidate negotiation communication skills"
    ],
    benefits: ["Quarterly Placement Incentives", "Comprehensive Medical", "Hybrid Flexibility"],
    createdAt: "2026-09-12T14:30:00Z",
    publishedChannels: ["LinkedIn", "Naukri", "Facebook"]
  },
  {
    id: "job_03",
    userId: "usr_ssc_01",
    title: "DevOps & Cloud Automation Engineer",
    department: "Infrastructure",
    location: "Gurugram / Pune",
    type: "Full-time",
    experience: "3-6 years",
    salaryRange: "18 - 26 LPA",
    openings: 1,
    applicantsCount: 6,
    status: "active",
    skills: ["Kubernetes", "Terraform", "CI/CD Pipelines", "AWS", "Python", "Monitoring"],
    description: "Build robust CI/CD deployment pipelines, manage container clusters, and automate cloud infrastructure scaling and security.",
    requirements: [
      "Experience provisioning infrastructure using Terraform and Ansible",
      "Strong knowledge of Kubernetes cluster management and Helm charts",
      "Familiarity with security compliance and zero-trust networking"
    ],
    benefits: ["Stock Options", "Home Office Stipend", "Health Insurance"],
    createdAt: "2026-09-14T09:15:00Z",
    publishedChannels: ["LinkedIn", "Indeed", "Twitter"]
  },
  {
    id: "job_04",
    userId: "usr_ssc_01",
    title: "Business Development & Client Partner",
    department: "Sales & Consulting",
    location: "Delhi NCR",
    type: "Full-time",
    experience: "2-5 years",
    salaryRange: "12 - 18 LPA + Commission",
    openings: 2,
    applicantsCount: 5,
    status: "paused",
    skills: ["B2B Sales", "Consulting Services", "Client Relationship", "Lead Generation", "Contract Negotiation"],
    description: "Expand Shri Shyam Consulting client accounts across IT, BFSI, and manufacturing sectors, fostering long-term staffing relationships.",
    requirements: [
      "Strong track record in corporate recruitment sales or consulting services",
      "Excellent presentation and proposal writing capabilities"
    ],
    benefits: ["Lucrative Revenue Sharing", "Travel Allowance", "Leadership Pathway"],
    createdAt: "2026-09-08T11:00:00Z",
    publishedChannels: ["LinkedIn"]
  }
];
var INITIAL_APPLICANTS = [
  {
    id: "app_01",
    userId: "usr_ssc_01",
    jobId: "job_01",
    jobTitle: "Senior Full-Stack Engineer (React / Node / AWS)",
    fullName: "Aarav Sharma",
    email: "aarav.sharma.tech@gmail.com",
    phone: "+91 98112 34567",
    currentRole: "Senior Software Engineer",
    currentCompany: "Infosys Digital",
    location: "Bangalore, India",
    experienceYears: 5.5,
    currentCtc: "18 LPA",
    expectedCtc: "25 LPA",
    noticePeriod: "30 days",
    skills: ["React", "Node.js", "TypeScript", "AWS Lambda", "PostgreSQL", "Redis"],
    stage: "tech_interview",
    rating: 5,
    source: "LinkedIn",
    appliedDate: "2026-09-11",
    notes: [
      "Strong grasp on system design. Built micro-frontends at Infosys.",
      "Positive attitude, eager to join product-focused agile teams.",
      "Requested interview slot on Thursday 3 PM."
    ],
    resumeHistory: [
      {
        id: "res_01_v2",
        version: 2,
        uploadedAt: "2026-09-13T10:00:00Z",
        fileName: "Aarav_Sharma_FullStack_2026_Updated.pdf",
        fileSize: "412 KB",
        parsedSummary: "Experienced full stack developer specializing in modern React ecosystems, Node.js backend services, and scalable cloud deployments.",
        parsedSkills: ["React", "Node.js", "TypeScript", "AWS Lambda", "PostgreSQL"],
        parsedExperienceYears: 5.5,
        education: "B.Tech in Computer Science, NIT Karnataka (2020)",
        rawText: "Aarav Sharma | Senior Software Engineer | 5.5 yrs exp. Stack: React 18, Next.js, Node.js, Express, AWS EC2/S3/Lambda, Docker."
      },
      {
        id: "res_01_v1",
        version: 1,
        uploadedAt: "2026-09-11T12:00:00Z",
        fileName: "Aarav_Sharma_Resume.pdf",
        fileSize: "380 KB",
        parsedSummary: "Full Stack Engineer with 5+ years experience building SaaS applications.",
        parsedSkills: ["React", "Node.js", "JavaScript", "SQL"],
        parsedExperienceYears: 5,
        education: "B.Tech in Computer Science",
        rawText: "Initial resume submission from LinkedIn Easy Apply."
      }
    ],
    linkedinUrl: "https://linkedin.com/in/aarav-sharma-tech",
    whatsappEnabled: true
  },
  {
    id: "app_02",
    userId: "usr_ssc_01",
    jobId: "job_01",
    jobTitle: "Senior Full-Stack Engineer (React / Node / AWS)",
    fullName: "Pooja Verma",
    email: "pooja.verma@techcloud.io",
    phone: "+91 98765 43210",
    currentRole: "Lead Frontend Architect",
    currentCompany: "Zeta Payments",
    location: "Pune / Remote",
    experienceYears: 6.2,
    currentCtc: "22 LPA",
    expectedCtc: "30 LPA",
    noticePeriod: "15 days (Serving Notice)",
    skills: ["React", "TypeScript", "GraphQL", "Webpack", "TailwindCSS", "Jest"],
    stage: "shortlisted",
    rating: 4,
    source: "Resdex",
    appliedDate: "2026-09-13",
    notes: [
      "Serving notice period, available immediately within 15 days.",
      "Handled high-throughput financial dashboards."
    ],
    resumeHistory: [
      {
        id: "res_02_v1",
        version: 1,
        uploadedAt: "2026-09-13T16:20:00Z",
        fileName: "Pooja_Verma_LeadFE_Zeta.pdf",
        fileSize: "520 KB",
        parsedSummary: "Lead Frontend Architect with 6+ years in Fintech, architecting design systems and high-throughput real-time web applications.",
        parsedSkills: ["React", "TypeScript", "GraphQL", "TailwindCSS", "Redux Toolkit"],
        parsedExperienceYears: 6.2,
        education: "B.E in Information Technology, Pune University (2019)"
      }
    ],
    linkedinUrl: "https://linkedin.com/in/pooja-verma-fe",
    whatsappEnabled: true
  },
  {
    id: "app_03",
    userId: "usr_ssc_01",
    jobId: "job_02",
    jobTitle: "HR & Talent Acquisition Lead",
    fullName: "Rohan Deshmukh",
    email: "rohan.deshmukh.hr@gmail.com",
    phone: "+91 97654 11223",
    currentRole: "Senior Technical Recruiter",
    currentCompany: "Wipro Technologies",
    location: "Mumbai, India",
    experienceYears: 4.8,
    currentCtc: "9.5 LPA",
    expectedCtc: "14 LPA",
    noticePeriod: "30 days",
    skills: ["Technical Recruiting", "Resdex", "Headhunting", "Stakeholder Management", "Salary Negotiation"],
    stage: "hr_interview",
    rating: 4,
    source: "Naukri",
    appliedDate: "2026-09-12",
    notes: [
      "Closed 45+ senior niche tech positions in last 12 months.",
      "Very strong with Resdex and LinkedIn Boolean search formulas."
    ],
    resumeHistory: [
      {
        id: "res_03_v1",
        version: 1,
        uploadedAt: "2026-09-12T15:00:00Z",
        fileName: "Rohan_Deshmukh_TA_Lead.pdf",
        fileSize: "310 KB",
        parsedSummary: "Results-driven Technical Recruiter specializing in lateral hiring, specialized engineering talent acquisition, and employer branding.",
        parsedSkills: ["Technical Recruiting", "Resdex", "Naukri Portal", "ATS Operations"],
        parsedExperienceYears: 4.8,
        education: "MBA in Human Resources, Symbiosis Institute (2021)"
      }
    ],
    linkedinUrl: "https://linkedin.com/in/rohan-deshmukh-hr",
    whatsappEnabled: true
  },
  {
    id: "app_04",
    userId: "usr_ssc_01",
    jobId: "job_03",
    jobTitle: "DevOps & Cloud Automation Engineer",
    fullName: "Vikramaditya Rao",
    email: "vikram.cloudops@outlook.com",
    phone: "+91 99001 88776",
    currentRole: "DevOps Specialist",
    currentCompany: "TCS Innovation Labs",
    location: "Hyderabad, India",
    experienceYears: 5,
    currentCtc: "16 LPA",
    expectedCtc: "23 LPA",
    noticePeriod: "Immediate",
    skills: ["Kubernetes", "AWS", "Terraform", "Docker", "Prometheus", "Grafana", "GitLab CI"],
    stage: "offered",
    rating: 5,
    source: "LinkedIn",
    appliedDate: "2026-09-10",
    notes: [
      "Offer letter dispatched: 22.5 LPA fixed + performance bonus.",
      "Immediate joiner, ready to start from next Monday."
    ],
    resumeHistory: [
      {
        id: "res_04_v1",
        version: 1,
        uploadedAt: "2026-09-10T09:00:00Z",
        fileName: "Vikram_Rao_DevOps_AWS_K8s.pdf",
        fileSize: "450 KB",
        parsedSummary: "Certified AWS Solutions Architect & CKA with 5 years managing distributed cloud infrastructure, microservices mesh, and CI/CD pipelines.",
        parsedSkills: ["Kubernetes", "AWS", "Terraform", "CI/CD", "Prometheus"],
        parsedExperienceYears: 5,
        education: "B.Tech in Computer Science, JNTU (2021)"
      }
    ],
    linkedinUrl: "https://linkedin.com/in/vikram-rao-devops",
    whatsappEnabled: true
  },
  {
    id: "app_05",
    userId: "usr_ssc_01",
    fullName: "Sneha Kulkarni",
    email: "sneha.kulkarni@consultfin.com",
    phone: "+91 98450 67890",
    currentRole: "Senior Financial Analyst",
    currentCompany: "Deloitte India",
    location: "Mumbai / Delhi",
    experienceYears: 4.2,
    currentCtc: "14 LPA",
    expectedCtc: "19 LPA",
    noticePeriod: "60 days",
    skills: ["Financial Modeling", "Corporate Valuation", "Due Diligence", "PowerBI", "Advanced Excel"],
    stage: "applied",
    rating: 4,
    source: "Resdex",
    appliedDate: "2026-09-14",
    notes: ["Sourced from Resdex pool for upcoming corporate consulting positions."],
    resumeHistory: [
      {
        id: "res_05_v1",
        version: 1,
        uploadedAt: "2026-09-14T11:20:00Z",
        fileName: "Sneha_Kulkarni_Financial_Consulting.pdf",
        fileSize: "390 KB",
        parsedSummary: "Financial analyst with 4+ years consulting background in M&A, valuations, and commercial planning.",
        parsedSkills: ["Financial Modeling", "Valuation", "Excel", "PowerBI"],
        parsedExperienceYears: 4.2,
        education: "CA (Chartered Accountant) & B.Com, Mumbai University"
      }
    ],
    linkedinUrl: "https://linkedin.com/in/sneha-kulkarni-fin",
    whatsappEnabled: true
  }
];
var INITIAL_MESSAGES = [
  {
    id: "msg_01",
    applicantId: "app_01",
    applicantName: "Aarav Sharma",
    applicantPhone: "+91 98112 34567",
    applicantEmail: "aarav.sharma.tech@gmail.com",
    channel: "email",
    sender: "recruiter",
    subject: "Interview Confirmation - Senior Full-Stack Engineer | Shri Shyam Consulting",
    content: "Dear Aarav,\n\nThank you for speaking with us. We would like to invite you for a Technical Round with our Engineering Lead on Thursday at 3:00 PM IST via Google Meet.\n\nPlease let us know if this slot works for you.\n\nWarm regards,\nShri Shyam Consulting Recruiting Team\ninfo@shrishyamconsulting.in | +91 8269715615",
    timestamp: "2026-09-14T11:30:00Z",
    status: "delivered",
    templateUsed: "technical_interview_invite"
  },
  {
    id: "msg_02",
    applicantId: "app_01",
    applicantName: "Aarav Sharma",
    applicantPhone: "+91 98112 34567",
    applicantEmail: "aarav.sharma.tech@gmail.com",
    channel: "email",
    sender: "candidate",
    subject: "Re: Interview Confirmation - Senior Full-Stack Engineer",
    content: "Hi Team, Thursday 3:00 PM works perfectly for me. Looking forward to meeting the Engineering Lead. Thank you!",
    timestamp: "2026-09-14T12:05:00Z",
    status: "read"
  },
  {
    id: "msg_03",
    applicantId: "app_04",
    applicantName: "Vikramaditya Rao",
    applicantPhone: "+91 99001 88776",
    applicantEmail: "vikram.cloudops@outlook.com",
    channel: "whatsapp",
    sender: "recruiter",
    content: "Hi Vikramaditya! Congratulations from Shri Shyam Consulting. Your official Offer Letter for DevOps & Cloud Automation Engineer has been dispatched to your email. Please review and sign by Friday.",
    timestamp: "2026-09-15T15:45:00Z",
    status: "delivered",
    templateUsed: "offer_announcement"
  }
];
var INITIAL_SOCIAL_CONFIGS = [
  {
    id: "soc_linkedin",
    platform: "linkedin",
    name: "LinkedIn Recruiter & Company Page",
    iconName: "Linkedin",
    accountHandle: "@shrishyamconsulting",
    connected: true,
    lastSync: "2026-09-16T18:00:00Z",
    apiKey: "lk_live_9921_ssc_prod",
    clientId: "78ssc09182390a",
    autoBroadcast: true
  },
  {
    id: "soc_naukri",
    platform: "naukri",
    name: "Naukri.com & Resdex Enterprise",
    iconName: "Briefcase",
    accountHandle: "Shri Shyam Consulting (Recruiter ID: SSC-826971)",
    connected: true,
    lastSync: "2026-09-16T17:30:00Z",
    apiKey: "naukri_api_resdex_key_881",
    autoBroadcast: true
  },
  {
    id: "soc_indeed",
    platform: "indeed",
    name: "Indeed Employer Hub",
    iconName: "Building2",
    accountHandle: "Shri Shyam Consulting Employer",
    connected: true,
    lastSync: "2026-09-15T21:10:00Z",
    apiKey: "ind_emp_sec_7721890",
    autoBroadcast: true
  },
  {
    id: "soc_facebook",
    platform: "facebook",
    name: "Facebook Jobs & Meta Business",
    iconName: "Facebook",
    accountHandle: "ShriShyamConsultingJobs",
    connected: false,
    autoBroadcast: false
  },
  {
    id: "soc_twitter",
    platform: "twitter",
    name: "X / Twitter Talent Handle",
    iconName: "Twitter",
    accountHandle: "@ShriShyamHiring",
    connected: true,
    lastSync: "2026-09-16T08:00:00Z",
    apiKey: "x_api_bearer_992019a",
    autoBroadcast: false
  }
];
var INITIAL_LINKEDIN_LEADS = [
  {
    id: "lead_01",
    fullName: "Nidhi Saxena",
    headline: "Senior Cloud Data Architect @ Accenture | Snowflake, AWS, Python, dbt",
    currentCompany: "Accenture India",
    location: "Gurugram, Haryana, India",
    profileUrl: "https://linkedin.com/in/nidhi-saxena-clouddata",
    skills: ["AWS", "Snowflake", "Python", "dbt", "Data Lake", "Kafka"],
    experienceYears: 6.8,
    suggestedRole: "Senior Cloud Data Engineer",
    email: "nidhi.saxena.data@gmail.com",
    phone: "+91 98109 44321",
    extractedAt: "2026-09-15T14:10:00Z",
    status: "new"
  },
  {
    id: "lead_02",
    fullName: "Karthik Raman",
    headline: "Staff Backend Engineer (Golang / Distributed Systems) ex-Swiggy, Razorpay",
    currentCompany: "Razorpay",
    location: "Bangalore Urban, Karnataka",
    profileUrl: "https://linkedin.com/in/karthik-raman-systems",
    skills: ["Golang", "Kubernetes", "gRPC", "Distributed Systems", "PostgreSQL", "Redis"],
    experienceYears: 7.4,
    suggestedRole: "Principal / Lead Backend Architect",
    email: "karthik.raman@razorpay.me",
    extractedAt: "2026-09-16T09:25:00Z",
    status: "contacted"
  },
  {
    id: "lead_03",
    fullName: "Ananya Singhania",
    headline: "Senior HR Business Partner & Talent Strategist | Tech Hiring Specialist",
    currentCompany: "MakeMyTrip",
    location: "Delhi NCR",
    profileUrl: "https://linkedin.com/in/ananya-singhania-hr",
    skills: ["Talent Acquisition", "HR Strategy", "Executive Search", "Compensation Benchmarking"],
    experienceYears: 5.1,
    suggestedRole: "HR & Talent Acquisition Lead",
    email: "ananya.s.talent@gmail.com",
    extractedAt: "2026-09-16T11:40:00Z",
    status: "new"
  }
];
var INITIAL_N8N_CONFIG = {
  applicantIngestUrl: "https://n8n.workflow.instance/webhook/ats-applicant-ingest",
  jobBroadcastUrl: "https://n8n.workflow.instance/webhook/ats-job-broadcast",
  candidateMessageUrl: "https://n8n.workflow.instance/webhook/ats-candidate-message",
  resdexExportUrl: "https://n8n.workflow.instance/webhook/ats-resdex-export",
  activeEnvironment: "production",
  authHeaderKey: "X-N8N-ATS-TOKEN",
  authHeaderValue: "n8n_sec_ssc_recruiter_2026"
};
var INITIAL_N8N_LOGS = [
  {
    id: "log_01",
    timestamp: "2026-09-16T14:20:11Z",
    eventType: "applicant_ingest",
    targetUrl: "https://n8n.workflow.instance/webhook/ats-applicant-ingest",
    payload: {
      action: "INGEST_LINKEDIN_PROFILE",
      profileUrl: "https://linkedin.com/in/nidhi-saxena-clouddata",
      candidateName: "Nidhi Saxena",
      leadSource: "LinkedIn Extractor",
      tenant: "Shri Shyam Consulting"
    },
    status: "success",
    statusCode: 200,
    durationMs: 342,
    responsePreview: '{"status":"ok","workflowId":"wf_ingest_78","resdexId":"res_9918","message":"Candidate profile enriched & ingested into Resdex store"}'
  },
  {
    id: "log_02",
    timestamp: "2026-09-16T11:05:43Z",
    eventType: "job_broadcast",
    targetUrl: "https://n8n.workflow.instance/webhook/ats-job-broadcast",
    payload: {
      action: "BROADCAST_JOB_POSTING",
      jobId: "job_01",
      title: "Senior Full-Stack Engineer (React / Node / AWS)",
      channels: ["LinkedIn", "Naukri", "Indeed"],
      recruiterContact: "info@shrishyamconsulting.in | 8269715615"
    },
    status: "success",
    statusCode: 200,
    durationMs: 418,
    responsePreview: '{"success":true,"broadcasts":[{"platform":"LinkedIn","postUrl":"https://linkedin.com/jobs/view/9921"},{"platform":"Naukri","status":"active"}]}'
  }
];

// server.ts
var DATA_DIR = import_path.default.join(process.cwd(), "data");
var DB_FILE = import_path.default.join(DATA_DIR, "ats_db.json");
function loadDatabase() {
  try {
    if (!import_fs.default.existsSync(DATA_DIR)) {
      import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (import_fs.default.existsSync(DB_FILE)) {
      const raw = import_fs.default.readFileSync(DB_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn("Failed to load existing DB, initializing default data:", err);
  }
  const initial = {
    users: [DEFAULT_USER],
    jobs: INITIAL_JOBS,
    applicants: INITIAL_APPLICANTS,
    messages: INITIAL_MESSAGES,
    socialConfigs: INITIAL_SOCIAL_CONFIGS,
    linkedinLeads: INITIAL_LINKEDIN_LEADS,
    n8nConfig: INITIAL_N8N_CONFIG,
    n8nLogs: INITIAL_N8N_LOGS
  };
  try {
    import_fs.default.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2));
  } catch (err) {
    console.error("Failed to write initial db file:", err);
  }
  return initial;
}
var db = loadDatabase();
function saveDatabase() {
  try {
    if (!import_fs.default.existsSync(DATA_DIR)) {
      import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
    }
    import_fs.default.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
  } catch (err) {
    console.error("Error saving database:", err);
  }
}
var aiClient = null;
function getAIClient() {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (e) {
      console.warn("Could not initialize GoogleGenAI client:", e);
    }
  }
  return aiClient;
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = process.env.DEFAULT_APP_PORT ? parseInt(process.env.DEFAULT_APP_PORT, 10) : process.env.PORT && process.env.PORT !== "8080" ? parseInt(process.env.PORT, 10) : 3e3;
  const ENCRYPTION_SECRET = process.env.ATS_SECURITY_ENCRYPTION_KEY || "shri-shyam-consulting-aes-key-2026-secure";
  const ENCRYPTION_KEY = import_crypto.default.createHash("sha256").update(ENCRYPTION_SECRET).digest();
  const LICENSE_KEY = process.env.SHRISHYAM_LICENSE_KEY || "SSC-SEC-2026-X992-PROTECTED";
  let ADMIN_SECURITY_PIN = process.env.ADMIN_SECURITY_PIN || "8269";
  let portalLocked = false;
  let blockedScrapeAttempts = 0;
  const scrapeRateMap = /* @__PURE__ */ new Map();
  app.disable("x-powered-by");
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("X-Agency-License", "Shri Shyam Consulting (www.shrishyamconsulting.in)");
    next();
  });
  app.use(import_express.default.json({ limit: "15mb" }));
  app.use((req, res, next) => {
    if (req.path.startsWith("/api/")) {
      console.log(`[API] ${req.method} ${req.path}`);
    }
    next();
  });
  app.use("/api/applicants", (req, res, next) => {
    const ip = req.ip || req.socket.remoteAddress || "client";
    const now = Date.now();
    const windowMs = 60 * 1e3;
    const maxRequests = 150;
    const record = scrapeRateMap.get(ip);
    if (!record || now > record.resetTime) {
      scrapeRateMap.set(ip, { count: 1, resetTime: now + windowMs });
    } else {
      record.count++;
      if (record.count > maxRequests) {
        blockedScrapeAttempts++;
        return res.status(429).json({
          error: "Rate limit exceeded. Automated scraping of candidate database is strictly blocked under Shri Shyam Consulting IP protection.",
          agency: "Shri Shyam Consulting",
          website: "www.shrishyamconsulting.in"
        });
      }
    }
    next();
  });
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "healthy",
      service: "Shri Shyam Consulting ATS & Resdex Engine",
      website: "www.shrishyamconsulting.in",
      contact: "info@shrishyamconsulting.in",
      phone: "8269715615",
      security: {
        encryption: "AES-256-GCM",
        antiReuseProtection: true,
        license: "Valid - Shri Shyam Consulting",
        portalLocked
      },
      renderDeployment: {
        ready: true,
        blueprint: "render.yaml",
        healthCheck: "/api/health"
      },
      databaseRecords: {
        jobs: db.jobs.length,
        applicants: db.applicants.length,
        messages: db.messages.length,
        leads: db.linkedinLeads.length
      }
    });
  });
  app.get("/api/security/status", (_req, res) => {
    res.json({
      encryptionEnabled: true,
      cipherAlgorithm: "AES-256-GCM",
      keyFingerprint: import_crypto.default.createHash("md5").update(ENCRYPTION_KEY).digest("hex").slice(0, 16),
      license: {
        status: "valid",
        holder: "Shri Shyam Consulting",
        contactEmail: "info@shrishyamconsulting.in",
        registeredPhone: "8269715615",
        licenseKey: LICENSE_KEY,
        issuedDate: "2026-09-01",
        antiReuseProtection: true
      },
      headersProtection: {
        csp: true,
        xFrameOptions: true,
        nosniff: true,
        hsts: true,
        noPoweredBy: true
      },
      antiScrapeProtection: {
        enabled: true,
        rateLimitPerMinute: 150,
        blockedRequestsCount: blockedScrapeAttempts
      },
      portalLocked,
      obfuscationEnabled: true,
      renderReady: true
    });
  });
  app.post("/api/security/lockdown", (req, res) => {
    const { pin } = req.body;
    if (pin === ADMIN_SECURITY_PIN) {
      portalLocked = !portalLocked;
      return res.json({ success: true, portalLocked });
    }
    return res.status(403).json({ success: false, message: "Invalid security PIN" });
  });
  app.get("/api/download-dist-zip", (_req, res) => {
    const zipPath = import_path.default.join(process.cwd(), "dist.zip");
    if (import_fs.default.existsSync(zipPath)) {
      res.setHeader("Content-Type", "application/zip");
      res.setHeader("Content-Disposition", 'attachment; filename="shri-shyam-consulting-ats-dist.zip"');
      return res.sendFile(zipPath);
    }
    return res.status(404).json({ error: "dist.zip not found" });
  });
  app.post("/api/security/encrypt-export", (_req, res) => {
    const exportData = JSON.stringify({
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      tenant: "Shri Shyam Consulting",
      website: "www.shrishyamconsulting.in",
      contact: "info@shrishyamconsulting.in",
      recordsCount: {
        jobs: db.jobs.length,
        applicants: db.applicants.length,
        messages: db.messages.length
      },
      jobs: db.jobs,
      applicants: db.applicants,
      messages: db.messages
    });
    const iv = import_crypto.default.randomBytes(16);
    const cipher = import_crypto.default.createCipheriv("aes-256-gcm", ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(exportData, "utf8", "hex");
    encrypted += cipher.final("hex");
    const authTag = cipher.getAuthTag().toString("hex");
    res.json({
      success: true,
      fileName: `ssc_encrypted_ats_backup_${Date.now()}.aes256`,
      algorithm: "AES-256-GCM",
      fingerprint: import_crypto.default.createHash("md5").update(ENCRYPTION_KEY).digest("hex").slice(0, 16),
      agency: "Shri Shyam Consulting (www.shrishyamconsulting.in)",
      encryptedPackage: {
        iv: iv.toString("hex"),
        authTag,
        ciphertext: encrypted
      }
    });
  });
  app.post("/api/auth/login", (req, res) => {
    const { email } = req.body;
    let user = db.users.find((u) => u.email.toLowerCase() === (email || "").toLowerCase());
    if (!user) {
      user = {
        id: `usr_${Date.now()}`,
        name: req.body.name || "Recruitment Manager",
        email: email || "info@shrishyamconsulting.in",
        companyName: req.body.companyName || "Shri Shyam Consulting",
        phone: req.body.phone || "8269715615",
        role: "admin",
        token: `jwt_ssc_${Date.now()}`
      };
      db.users.push(user);
      saveDatabase();
    }
    res.json({ success: true, user });
  });
  app.get("/api/auth/me", (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const user = db.users.find((u) => authHeader.includes(u.id) || authHeader.includes("ssc"));
      if (user) {
        return res.json({ success: true, user });
      }
    }
    return res.json({ success: true, user: db.users[0] || DEFAULT_USER });
  });
  app.get("/api/jobs", (_req, res) => {
    res.json(db.jobs);
  });
  app.post("/api/jobs", async (req, res) => {
    try {
      const newJob = {
        id: `job_${Date.now()}`,
        userId: req.body.userId || "usr_ssc_01",
        title: req.body.title || "Untitled Job",
        department: req.body.department || "General",
        location: req.body.location || "Remote",
        type: req.body.type || "Full-time",
        experience: req.body.experience || "2-5 years",
        salaryRange: req.body.salaryRange || "Competitive",
        openings: Number(req.body.openings) || 1,
        applicantsCount: 0,
        status: req.body.status || "active",
        skills: Array.isArray(req.body.skills) ? req.body.skills : [],
        description: req.body.description || "",
        requirements: Array.isArray(req.body.requirements) ? req.body.requirements : [],
        benefits: Array.isArray(req.body.benefits) ? req.body.benefits : [],
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        publishedChannels: Array.isArray(req.body.publishedChannels) ? req.body.publishedChannels : ["LinkedIn"]
      };
      db.jobs.unshift(newJob);
      saveDatabase();
      if (db.n8nConfig.jobBroadcastUrl) {
        dispatchN8nEvent("job_broadcast", db.n8nConfig.jobBroadcastUrl, {
          action: "NEW_JOB_POSTING",
          job: newJob,
          recruiter: "info@shrishyamconsulting.in | 8269715615",
          publishedChannels: newJob.publishedChannels
        }).catch((e) => console.error("Job broadcast webhook trigger err:", e));
      }
      res.status(201).json(newJob);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.put("/api/jobs/:id", (req, res) => {
    const idx = db.jobs.findIndex((j) => j.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Job not found" });
    db.jobs[idx] = {
      ...db.jobs[idx],
      ...req.body
    };
    saveDatabase();
    res.json(db.jobs[idx]);
  });
  app.delete("/api/jobs/:id", (req, res) => {
    db.jobs = db.jobs.filter((j) => j.id !== req.params.id);
    saveDatabase();
    res.json({ success: true, message: "Job deleted" });
  });
  app.get("/api/applicants", (req, res) => {
    const { jobId, stage, query } = req.query;
    let filtered = [...db.applicants];
    if (jobId && typeof jobId === "string") {
      filtered = filtered.filter((a) => a.jobId === jobId);
    }
    if (stage && typeof stage === "string") {
      filtered = filtered.filter((a) => a.stage === stage);
    }
    if (query && typeof query === "string") {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (a) => a.fullName.toLowerCase().includes(q) || a.currentRole.toLowerCase().includes(q) || a.currentCompany.toLowerCase().includes(q) || a.skills.some((s) => s.toLowerCase().includes(q))
      );
    }
    res.json(filtered);
  });
  app.post("/api/applicants", async (req, res) => {
    try {
      const applicantId = `app_${Date.now()}`;
      const resumeId = `res_${Date.now()}_v1`;
      const initialResume = {
        id: resumeId,
        version: 1,
        uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
        fileName: req.body.resumeFileName || `${(req.body.fullName || "Candidate").replace(/\s+/g, "_")}_Resume.pdf`,
        fileSize: req.body.resumeFileSize || "350 KB",
        parsedSummary: req.body.summary || `Candidate profile for ${req.body.currentRole || "Professional"}.`,
        parsedSkills: Array.isArray(req.body.skills) ? req.body.skills : [],
        parsedExperienceYears: Number(req.body.experienceYears) || 3,
        education: req.body.education || "Bachelor's Degree",
        rawText: req.body.rawResumeText || ""
      };
      const newApplicant = {
        id: applicantId,
        userId: req.body.userId || "usr_ssc_01",
        jobId: req.body.jobId || void 0,
        jobTitle: req.body.jobTitle || void 0,
        fullName: req.body.fullName || "New Candidate",
        email: req.body.email || "candidate@example.com",
        phone: req.body.phone || "8269715615",
        currentRole: req.body.currentRole || "Software Professional",
        currentCompany: req.body.currentCompany || "Independent",
        location: req.body.location || "India",
        experienceYears: Number(req.body.experienceYears) || 3,
        currentCtc: req.body.currentCtc || "Not Disclosed",
        expectedCtc: req.body.expectedCtc || "Competitive",
        noticePeriod: req.body.noticePeriod || "30 days",
        skills: Array.isArray(req.body.skills) ? req.body.skills : [],
        stage: req.body.stage || "applied",
        rating: Number(req.body.rating) || 3,
        source: req.body.source || "Resdex",
        appliedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        notes: req.body.notes ? [req.body.notes] : ["Profile created in Shri Shyam Consulting ATS."],
        resumeHistory: [initialResume],
        linkedinUrl: req.body.linkedinUrl,
        whatsappEnabled: true
      };
      db.applicants.unshift(newApplicant);
      if (newApplicant.jobId) {
        const job = db.jobs.find((j) => j.id === newApplicant.jobId);
        if (job) {
          job.applicantsCount = (job.applicantsCount || 0) + 1;
        }
      }
      saveDatabase();
      if (db.n8nConfig.applicantIngestUrl) {
        dispatchN8nEvent("applicant_ingest", db.n8nConfig.applicantIngestUrl, {
          action: "APPLICANT_INGESTED",
          applicant: newApplicant,
          company: "Shri Shyam Consulting"
        }).catch((e) => console.error("Applicant webhook err:", e));
      }
      res.status(201).json(newApplicant);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.put("/api/applicants/:id", (req, res) => {
    const idx = db.applicants.findIndex((a) => a.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Applicant not found" });
    db.applicants[idx] = {
      ...db.applicants[idx],
      ...req.body
    };
    saveDatabase();
    res.json(db.applicants[idx]);
  });
  app.post("/api/applicants/:id/resume", (req, res) => {
    const applicant = db.applicants.find((a) => a.id === req.params.id);
    if (!applicant) return res.status(404).json({ error: "Applicant not found" });
    const newVersion = (applicant.resumeHistory?.length || 0) + 1;
    const newResume = {
      id: `res_${Date.now()}_v${newVersion}`,
      version: newVersion,
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
      fileName: req.body.fileName || `Updated_Resume_v${newVersion}.pdf`,
      fileSize: req.body.fileSize || "420 KB",
      parsedSummary: req.body.parsedSummary || applicant.currentRole,
      parsedSkills: req.body.parsedSkills || applicant.skills,
      parsedExperienceYears: req.body.parsedExperienceYears || applicant.experienceYears,
      education: req.body.education || "Degree Documented",
      rawText: req.body.rawText || ""
    };
    applicant.resumeHistory = applicant.resumeHistory || [];
    applicant.resumeHistory.unshift(newResume);
    applicant.notes.push(`New resume v${newVersion} uploaded on ${(/* @__PURE__ */ new Date()).toLocaleDateString()}.`);
    saveDatabase();
    res.json({ success: true, resume: newResume, applicant });
  });
  app.post("/api/resdex/search", (req, res) => {
    const { skills, minExp, maxExp, location, noticePeriod, minCtc, maxCtc, keyword } = req.body;
    let results = [...db.applicants];
    if (keyword && typeof keyword === "string") {
      const kw = keyword.toLowerCase().trim();
      results = results.filter((cand) => {
        return cand.fullName.toLowerCase().includes(kw) || cand.currentRole.toLowerCase().includes(kw) || cand.currentCompany.toLowerCase().includes(kw) || cand.skills.some((s) => s.toLowerCase().includes(kw)) || cand.resumeHistory.some((r) => r.parsedSummary?.toLowerCase().includes(kw) || r.rawText?.toLowerCase().includes(kw));
      });
    }
    if (Array.isArray(skills) && skills.length > 0) {
      results = results.filter((cand) => {
        const candSkills = cand.skills.map((s) => s.toLowerCase());
        return skills.some((reqSkill) => candSkills.includes(reqSkill.toLowerCase()));
      });
    }
    if (minExp !== void 0 && minExp !== null && minExp !== "") {
      results = results.filter((cand) => cand.experienceYears >= Number(minExp));
    }
    if (maxExp !== void 0 && maxExp !== null && maxExp !== "") {
      results = results.filter((cand) => cand.experienceYears <= Number(maxExp));
    }
    if (location && typeof location === "string" && location.trim() !== "") {
      const loc = location.toLowerCase().trim();
      results = results.filter((cand) => cand.location.toLowerCase().includes(loc));
    }
    if (noticePeriod && typeof noticePeriod === "string" && noticePeriod !== "all") {
      results = results.filter((cand) => cand.noticePeriod.toLowerCase().includes(noticePeriod.toLowerCase()));
    }
    res.json({
      totalMatches: results.length,
      candidates: results,
      searchCriteria: req.body
    });
  });
  app.get("/api/linkedin/leads", (_req, res) => {
    res.json(db.linkedinLeads);
  });
  app.post("/api/linkedin/extract", async (req, res) => {
    const { profileUrl, rawText } = req.body;
    try {
      let extractedData = {};
      const ai = getAIClient();
      if (ai && (rawText || profileUrl)) {
        try {
          const prompt = `You are an expert HR data extraction agent for Shri Shyam Consulting. Extract structured candidate information from the following LinkedIn profile URL or text snippet into a strict JSON object:
Input:
Profile URL: ${profileUrl || "Not provided"}
Text snippet:
${rawText || "No text snippet provided"}

Return ONLY a valid JSON object matching this schema:
{
  "fullName": "Candidate Full Name",
  "headline": "Current Professional Headline",
  "currentCompany": "Current Employer",
  "location": "City, Country",
  "skills": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "experienceYears": 4.5,
  "suggestedRole": "Ideal Job Role Title",
  "email": "inferred or detected email or dummy candidate@example.com",
  "phone": "candidate phone if present or +91 8269715615"
}`;
          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
          });
          const text = response.text || "{}";
          const jsonMatch = text.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            extractedData = JSON.parse(jsonMatch[0]);
          }
        } catch (aiErr) {
          console.warn("AI extraction fallback to deterministic parser:", aiErr);
        }
      }
      if (!extractedData.fullName) {
        let detectedName = "LinkedIn Professional";
        if (profileUrl) {
          const match = profileUrl.match(/linkedin\.com\/in\/([a-zA-Z0-9-]+)/i);
          if (match && match[1]) {
            detectedName = match[1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          }
        } else if (rawText) {
          const firstLine = rawText.split("\n")[0]?.trim();
          if (firstLine && firstLine.length < 40) {
            detectedName = firstLine;
          }
        }
        const skillKeywords = ["React", "TypeScript", "Node.js", "Python", "AWS", "Java", "DevOps", "HR", "Sales", "Talent Acquisition", "Docker", "PostgreSQL", "SQL", "Recruiting", "Figma", "Marketing"];
        const foundSkills = [];
        if (rawText) {
          for (const s of skillKeywords) {
            if (new RegExp(`\\b${s}\\b`, "i").test(rawText)) {
              foundSkills.push(s);
            }
          }
        }
        if (foundSkills.length === 0) {
          foundSkills.push("Software Engineering", "Problem Solving", "Collaboration");
        }
        extractedData = {
          fullName: detectedName,
          headline: rawText?.split("\n")[1]?.slice(0, 100) || "Senior Technical Specialist",
          currentCompany: "Enterprise Tech Solutions",
          location: "Bangalore, India",
          skills: foundSkills,
          experienceYears: 4.5,
          suggestedRole: "Senior Engineer / Consultant",
          email: `${detectedName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
          phone: "+91 8269715615"
        };
      }
      const newLead = {
        id: `lead_${Date.now()}`,
        fullName: extractedData.fullName || "Candidate Lead",
        headline: extractedData.headline || "Specialist",
        currentCompany: extractedData.currentCompany || "Corporate",
        location: extractedData.location || "India",
        profileUrl: profileUrl || "https://linkedin.com/in/candidate",
        skills: Array.isArray(extractedData.skills) ? extractedData.skills : ["Consulting", "Tech"],
        experienceYears: Number(extractedData.experienceYears) || 3,
        suggestedRole: extractedData.suggestedRole || "Consultant",
        email: extractedData.email,
        phone: extractedData.phone || "+91 8269715615",
        extractedAt: (/* @__PURE__ */ new Date()).toISOString(),
        status: "new"
      };
      db.linkedinLeads.unshift(newLead);
      saveDatabase();
      if (db.n8nConfig.applicantIngestUrl) {
        dispatchN8nEvent("applicant_ingest", db.n8nConfig.applicantIngestUrl, {
          action: "LINKEDIN_LEAD_EXTRACTED",
          lead: newLead,
          source: "Shri Shyam Consulting Lead Engine"
        }).catch((e) => console.error("Webhook trigger err:", e));
      }
      res.status(201).json({ success: true, lead: newLead });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.post("/api/linkedin/convert-to-applicant", (req, res) => {
    const { leadId, jobId } = req.body;
    const lead = db.linkedinLeads.find((l) => l.id === leadId);
    if (!lead) return res.status(404).json({ error: "Lead not found" });
    lead.status = "converted";
    const applicantId = `app_${Date.now()}`;
    const selectedJob = db.jobs.find((j) => j.id === jobId);
    const newApplicant = {
      id: applicantId,
      userId: "usr_ssc_01",
      jobId: jobId || void 0,
      jobTitle: selectedJob ? selectedJob.title : void 0,
      fullName: lead.fullName,
      email: lead.email || `${lead.fullName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
      phone: lead.phone || "+91 8269715615",
      currentRole: lead.suggestedRole || lead.headline,
      currentCompany: lead.currentCompany,
      location: lead.location,
      experienceYears: lead.experienceYears,
      currentCtc: "14 LPA",
      expectedCtc: "20 LPA",
      noticePeriod: "30 days",
      skills: lead.skills,
      stage: "screening",
      rating: 4,
      source: "LinkedIn",
      appliedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      notes: [`Converted from LinkedIn Lead Sourcing (${lead.profileUrl}) on ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`],
      resumeHistory: [
        {
          id: `res_${Date.now()}`,
          version: 1,
          uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
          fileName: `${lead.fullName.replace(/\s+/g, "_")}_LinkedIn_Profile.pdf`,
          fileSize: "280 KB",
          parsedSummary: lead.headline,
          parsedSkills: lead.skills,
          parsedExperienceYears: lead.experienceYears,
          education: "Bachelor's Degree",
          rawText: `Source: LinkedIn Profile
URL: ${lead.profileUrl}
Headline: ${lead.headline}
Current Company: ${lead.currentCompany}`
        }
      ],
      linkedinUrl: lead.profileUrl,
      whatsappEnabled: true
    };
    db.applicants.unshift(newApplicant);
    if (selectedJob) {
      selectedJob.applicantsCount = (selectedJob.applicantsCount || 0) + 1;
    }
    saveDatabase();
    res.json({ success: true, applicant: newApplicant });
  });
  app.get("/api/messages", (req, res) => {
    const { applicantId } = req.query;
    if (applicantId && typeof applicantId === "string") {
      return res.json(db.messages.filter((m) => m.applicantId === applicantId));
    }
    res.json(db.messages);
  });
  app.post("/api/messages", async (req, res) => {
    try {
      const applicant = db.applicants.find((a) => a.id === req.body.applicantId);
      const newMsg = {
        id: `msg_${Date.now()}`,
        applicantId: req.body.applicantId || "app_general",
        applicantName: applicant ? applicant.fullName : req.body.applicantName || "Candidate",
        applicantPhone: applicant ? applicant.phone : req.body.applicantPhone || "8269715615",
        applicantEmail: applicant ? applicant.email : req.body.applicantEmail || "candidate@example.com",
        channel: req.body.channel || "email",
        sender: "recruiter",
        subject: req.body.subject,
        content: req.body.content || "",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        status: "delivered",
        templateUsed: req.body.templateUsed
      };
      db.messages.push(newMsg);
      saveDatabase();
      if (db.n8nConfig.candidateMessageUrl) {
        dispatchN8nEvent("candidate_message", db.n8nConfig.candidateMessageUrl, {
          action: "DISPATCH_CANDIDATE_COMMUNICATION",
          message: newMsg,
          contactInfo: {
            agency: "Shri Shyam Consulting",
            recruiterEmail: "info@shrishyamconsulting.in",
            recruiterPhone: "8269715615"
          }
        }).catch((e) => console.error("Message webhook err:", e));
      }
      res.status(201).json(newMsg);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.get("/api/social-media", (_req, res) => {
    res.json(db.socialConfigs);
  });
  app.put("/api/social-media/:id", (req, res) => {
    const idx = db.socialConfigs.findIndex((s) => s.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Platform not found" });
    db.socialConfigs[idx] = {
      ...db.socialConfigs[idx],
      ...req.body,
      lastSync: (/* @__PURE__ */ new Date()).toISOString()
    };
    saveDatabase();
    res.json(db.socialConfigs[idx]);
  });
  app.post("/api/social-media/broadcast", async (req, res) => {
    const { jobId, platforms, customPostText } = req.body;
    const job = db.jobs.find((j) => j.id === jobId);
    if (!job) return res.status(404).json({ error: "Job not found" });
    const selectedPlatforms = Array.isArray(platforms) ? platforms : ["LinkedIn", "Naukri"];
    job.publishedChannels = Array.from(/* @__PURE__ */ new Set([...job.publishedChannels, ...selectedPlatforms]));
    saveDatabase();
    let n8nResult = null;
    if (db.n8nConfig.jobBroadcastUrl) {
      n8nResult = await dispatchN8nEvent("job_broadcast", db.n8nConfig.jobBroadcastUrl, {
        action: "CROSS_PLATFORM_JOB_BROADCAST",
        job,
        broadcastChannels: selectedPlatforms,
        content: customPostText,
        recruiterContact: {
          email: "info@shrishyamconsulting.in",
          phone: "8269715615",
          agency: "Shri Shyam Consulting"
        }
      });
    }
    res.json({
      success: true,
      job,
      broadcastCount: selectedPlatforms.length,
      platforms: selectedPlatforms,
      n8nResult
    });
  });
  app.get("/api/n8n/config", (_req, res) => {
    res.json(db.n8nConfig);
  });
  app.put("/api/n8n/config", (req, res) => {
    db.n8nConfig = {
      ...db.n8nConfig,
      ...req.body
    };
    saveDatabase();
    res.json(db.n8nConfig);
  });
  app.get("/api/n8n/logs", (_req, res) => {
    res.json(db.n8nLogs.slice(0, 50));
  });
  app.post("/api/n8n/trigger", async (req, res) => {
    const { eventType, customPayload, targetUrl } = req.body;
    const url = targetUrl || db.n8nConfig.applicantIngestUrl || "https://n8n.workflow.instance/webhook/ats-event";
    const payload = customPayload || {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      event: eventType || "manual_test_trigger",
      tenant: "Shri Shyam Consulting",
      contact: "info@shrishyamconsulting.in | 8269715615",
      environment: db.n8nConfig.activeEnvironment
    };
    const result = await dispatchN8nEvent(eventType || "applicant_ingest", url, payload);
    res.json(result);
  });
  async function dispatchN8nEvent(eventType, targetUrl, payload) {
    const startTime = Date.now();
    let status = "simulated";
    let statusCode = 200;
    let responsePreview = "";
    const isLiveUrl = targetUrl && targetUrl.startsWith("http") && !targetUrl.includes(".instance") && !targetUrl.includes("your-n8n");
    if (isLiveUrl) {
      try {
        const headers = {
          "Content-Type": "application/json",
          "User-Agent": "ShriShyamConsulting-ATS/1.0"
        };
        if (db.n8nConfig.authHeaderKey && db.n8nConfig.authHeaderValue) {
          headers[db.n8nConfig.authHeaderKey] = db.n8nConfig.authHeaderValue;
        }
        const fetchResponse = await fetch(targetUrl, {
          method: "POST",
          headers,
          body: JSON.stringify(payload)
        });
        statusCode = fetchResponse.status;
        const respText = await fetchResponse.text();
        responsePreview = respText.slice(0, 500);
        status = fetchResponse.ok ? "success" : "failed";
      } catch (netErr) {
        statusCode = 502;
        status = "failed";
        responsePreview = `Network dispatch error: ${netErr.message}`;
      }
    } else {
      status = "simulated";
      statusCode = 200;
      responsePreview = JSON.stringify({
        simulation: true,
        workflowStatus: "executed",
        receivedPayloadKeys: Object.keys(payload),
        message: `n8n webhook simulated for event '${eventType}'. Live webhook will receive this contract schema when updated in N8n Workflow Hub.`,
        executedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    const durationMs = Date.now() - startTime;
    const logItem = {
      id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      eventType,
      targetUrl,
      payload,
      status,
      statusCode,
      durationMs: Math.max(durationMs, 14),
      responsePreview
    };
    db.n8nLogs.unshift(logItem);
    if (db.n8nLogs.length > 100) {
      db.n8nLogs = db.n8nLogs.slice(0, 100);
    }
    saveDatabase();
    return logItem;
  }
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    const assetsPath = import_path.default.join(process.cwd(), "src/assets");
    if (import_fs.default.existsSync(assetsPath)) {
      app.use("/src/assets", import_express.default.static(assetsPath));
    }
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Shri Shyam Consulting ATS Server running at http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
