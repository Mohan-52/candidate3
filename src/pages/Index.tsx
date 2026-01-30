import { HeaderSection } from "@/components/report/HeaderSection";
import { ScoreAnalytics } from "@/components/report/ScoreAnalytics";
import { InterviewSection } from "@/components/report/InterviewSection";
import { StrengthsAndImprovements } from "@/components/report/StrengthsAndImprovements";
import { InterviewerInsights } from "@/components/report/InterviewerInsights";
import { ResourcesSection } from "@/components/report/ResourcesSection";

const candidateData = {
  name: "Harshit Pandey",
  recommendation: "Strong Hire",
  overallScore: 129.91,
  codingScore: 100.91,
  dsaScore: 6,
  resumeUrl:
    "https://nw-forms-backend-media-static.s3.ap-south-1.amazonaws.com/ccbp_prod/media/upload/resume/1764039923120_Harshit_Pandey_MNNIT_fce91779-708c-4c5c-b529-b02bf830f6e6.pdf",
  topinReportUrl:
    "https://config.topin.tech/candidate-statistics/0465f9d9-ed0f-402e-8d4f-d9d07688f124/653bf935-af9d-42b3-ba10-0c3bedb704b6",
};

const tr1Data = {
  type: "dsa" as const,
  title: "TR1 – DSA Interview",
  subtitle: "Advanced String & Array Problems | Optimal Thinking",
  interviewer: "Praveena",
  duration: "1 Hour 11 Minutes",
  focusAreas: [
    "String Manipulation",
    "Array Partitioning",
    "Two-Pointer Techniques",
    "Edge-Case Handling",
    "Optimization",
  ],
  questions: [
    "Take K of Each Character From Left and Right",
    "Ways to Split Array Into Good Subarrays",
  ],
  insights: [
    {
      title: "Optimization Thinking",
      description:
        "Showed the ability to convert brute-force logic into optimal solutions using two-pointer and prefix-based strategies.",
    },
    {
      title: "Edge-Case Identification",
      description:
        "Handled boundary cases effectively, especially in string-window and split-based problems.",
    },
    {
      title: "Clarity in Communication",
      description:
        "Explained each step with clarity, making the thought process easy to follow.",
    },
  ],
  recordingTitle: "NxtWave Employability – DSA Interview",
  recordingSubtitle: "Harshit Pandey – Recording Session",
  recordingUrl:
    "https://drive.google.com/file/d/16eAoSH1fCEzrT4aTmVP6xz8JaJAkd2XN/view?usp=sharing",
};

const tr2Data = {
  type: "technical" as const,
  title: "TR2 – Technical & System Interview",
  subtitle: "Full Stack | Practical Scenarios | Real World Systems",
  interviewer: "Archita Sundaray",
  duration: "1 Hour",
  focusAreas: [
    "DSA basics (arrays, logic, complexity)",
    "Semantic HTML, Box Model, Flexbox",
    "JavaScript + React Internals",
    "Node.js + Express + Middleware",
    "Database Schema Design & Indexing",
    "Networking Basics & Reliability",
  ],
  questions: [
    "Explain WebSockets and why they are better than polling.",
    "Solve: Product of Array Except Self (brute force + optimized).",
    "Explain semantic HTML and accessibility benefits.",
    "Design a paginated GET API for product listings.",
    "Implement a stack using only queues with proper complexities.",
  ],
  insights: [
    {
      title: "Full-Stack Strength",
      description:
        "Demonstrated solid understanding across frontend, backend, and database concepts with clarity.",
    },
    {
      title: "Strong DSA Fundamentals",
      description:
        "Logical and systematic approach to array transformations and edge-case handling.",
    },
    {
      title: "System Design Awareness",
      description:
        "Understands API structuring, pagination, and scalability considerations.",
    },
  ],
  recordingTitle: "NxtWave Employability – Technical Interview Round 2",
  recordingSubtitle: "Harshit Pandey – Recording Session",
  recordingUrl:
    "https://drive.google.com/file/d/1AXr2Kazne3xPfyL7C7XsOAfGeAz4qmum/view?usp=sharing",
};

const strengths = [
  "Strong grasp of array and string-based DSA problems.",
  "Excellent understanding of semantic HTML, accessibility, and modern CSS layouts.",
  "Deep knowledge of JavaScript fundamentals and React internals.",
  "Clear breakdown of backend concepts like middleware and async handling.",
  "Good understanding of schema design and indexing strategies in databases.",
];

const improvements = [
  "Increase exposure to large-scale system design patterns.",
  "Strengthen advanced React patterns and performance optimization.",
  "Practice more complex DSA problems involving graphs and DP.",
  "Improve backend scalability strategies including caching and load handling.",
];

const resources = [
  {
    title: "Candidate Resume",
    description: "Full resume with education, skills, and experience details",
    url: candidateData.resumeUrl,
    type: "resume" as const,
  },
  {
    title: "Topin Tech Report",
    description: "Comprehensive assessment and statistics from Topin platform",
    url: candidateData.topinReportUrl,
    type: "report" as const,
  },
  {
    title: "DSA Interview Recording",
    description: "TR1 Interview Recording",
    url: tr1Data.recordingUrl,
    type: "recording" as const,
  },
  {
    title: "Technical Interview Recording",
    description: "TR2 Interview Recording",
    url: tr2Data.recordingUrl,
    type: "recording" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <HeaderSection
          candidateName={candidateData.name}
          recommendation={candidateData.recommendation}
          overallScore={candidateData.overallScore}
          resumeUrl={candidateData.resumeUrl}
          topinReportUrl={candidateData.topinReportUrl}
        />

        <div className="mt-8 space-y-8">
          <ScoreAnalytics
            overallScore={candidateData.overallScore}
            codingScore={candidateData.codingScore}
            dsaScore={candidateData.dsaScore}
          />

          <InterviewSection {...tr1Data} />
          <InterviewSection {...tr2Data} />

          <StrengthsAndImprovements
            strengths={strengths}
            improvements={improvements}
          />

          <InterviewerInsights
            hiringSignal="Strong Hire"
            confidenceLevel="High (92%)"
            industryReadiness="Job Ready"
            summary="Harshit Pandey demonstrated strong fundamental and practical engineering skills. His clarity in problem-solving, full-stack understanding, and structured approach to both DSA and system design make him a reliable and industry-ready candidate. Both interviewers rated him highly for communication, coding, and technical depth."
          />

          <ResourcesSection resources={resources} />
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Report generated by NxtWave Employability Assessment Platform
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            Confidential – For authorized hiring partners only
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
