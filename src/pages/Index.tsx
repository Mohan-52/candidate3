import { HeaderSection } from "@/components/report/HeaderSection";
import { ScoreAnalytics } from "@/components/report/ScoreAnalytics";
import { InterviewSection } from "@/components/report/InterviewSection";
import { StrengthsAndImprovements } from "@/components/report/StrengthsAndImprovements";
import { InterviewerInsights } from "@/components/report/InterviewerInsights";
import { ResourcesSection } from "@/components/report/ResourcesSection";

const candidateData = {
  name: "Siva Surya Teja Meka",
  recommendation: "Strong Hire",
  overallScore: 120.13,
  codingScore: 92.13,
  dsaScore: 8,
  resumeUrl:
    "https://nw-forms-backend-media-static.s3.ap-south-1.amazonaws.com/ccbp_prod/media/upload/resume/1764159677183_Full-Stack%20Resume_1be5151c-78eb-4731-951a-d934ced0b76b.pdf",
  topinReportUrl:
    "https://config.topin.tech/candidate-statistics/440f624f-e7c2-4c45-b0e4-1f4c56487eda/4a0fceae-2ecd-44eb-9bd6-fd587be89684",
};

const tr1Data = {
  type: "dsa" as const,
  title: "TR1 – DSA Interview",
  subtitle: "Two Problems | Logic, Optimization, Edge-Case Handling",
  interviewer: "Asish Kumar Upadhyay",
  duration: "46 Minutes",
  focusAreas: [
    "Arrays & Strings",
    "Logic Building",
    "Optimization",
    "Edge-Case Handling",
    "Coding on LeetCode-style problems",
  ],
  questions: ["Vowels of All Substrings", "Removing Stars from a String"],
  insights: [
    {
      title: "Logical Thinking",
      description:
        "Shows strong command in identifying patterns and solving string & array-based challenges efficiently.",
    },
    {
      title: "Time Complexity Awareness",
      description:
        "Understands how to optimize brute-force solutions into linear or near-linear time.",
    },
    {
      title: "Coding Fluency",
      description:
        "Writes clean and structured code while explaining thought process at each step.",
    },
  ],
  recordingTitle: "NxtWave Employability – DSA Interview",
  recordingSubtitle: "Siva Surya Teja Meka – Recording Session",
  recordingUrl:
    "https://drive.google.com/file/d/1rAwvXBDjt9Bs62lDVPR39I9UmEAA0tRZ/view?usp=sharing",
};

const tr2Data = {
  type: "technical" as const,
  title: "TR2 – Technical & System Interview",
  subtitle: "Full-Stack + System + Deployment | Practical understanding",
  interviewer: "Pavani",
  duration: "58 Minutes",
  focusAreas: [
    "DSA: Basic arrays, logic, debugging",
    "HTML & CSS",
    "JavaScript & React",
    "Node & Express",
    "Database & Schema Design",
    "Deployment / DevOps",
    "CS Fundamentals",
  ],
  questions: [
    "Rotate an array by K steps. Explain approach, edge cases, and time complexity.",
    "Design RESTful APIs for a To-Do application with authentication.",
    "Explain controlled components, useState, useEffect, and when to use useReducer.",
    "Explain DOCTYPE, semantic HTML, CSS box model, and benefits of Flexbox.",
    "Explain MERN deployment on a virtual machine end-to-end.",
  ],
  insights: [
    {
      title: "Full-Stack Practical Skills",
      description:
        "Demonstrates strong understanding of both frontend and backend concepts with real-world project exposure.",
    },
    {
      title: "Structured System Thinking",
      description:
        "Explains API design, authentication flow, and deployment steps with clarity.",
    },
    {
      title: "Frontend Expertise",
      description:
        "Strong grasp on React fundamentals, component design, and state management.",
    },
  ],
  recordingTitle: "NxtWave Employability – Technical Interview Round 2",
  recordingSubtitle: "Siva Surya Teja Meka – Recording Session",
  recordingUrl:
    "https://drive.google.com/file/d/1mrWTCbGDS_Gqcm2lLoNO2KBAp3mAOb7d/view?usp=sharing",
};

const strengths = [
  "Good frontend and backend practical understanding with MERN stack knowledge.",
  "Strong problem-solving fundamentals for basic to mid-level DSA.",
  "Good debugging skills and systematic approach to logic questions.",
  "Clear explanation of system workflows and API interactions.",
  "Understands deployment pipeline and environment setups.",
];

const improvements = [
  "Strengthen advanced DSA patterns like DP, sliding window, and graph algorithms.",
  "Improve depth in database query optimization & indexing.",
  "Practice more system design for scalable architectures.",
  "Work on writing more production-ready backend code.",
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
    url: "https://drive.google.com/file/d/1rAwvXBDjt9Bs62lDVPR39I9UmEAA0tRZ/view?usp=sharing",
    type: "recording" as const,
  },
  {
    title: "Technical Interview Recording",
    description: "TR2 Interview Recording",
    url: "https://drive.google.com/file/d/1mrWTCbGDS_Gqcm2lLoNO2KBAp3mAOb7d/view?usp=sharing",
    type: "recording" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <HeaderSection
          candidateName={candidateData.name}
          recommendation={candidateData.recommendation}
          overallScore={candidateData.overallScore}
          resumeUrl={candidateData.resumeUrl}
          topinReportUrl={candidateData.topinReportUrl}
        />

        {/* Content sections */}
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
            confidenceLevel="High"
            industryReadiness="Job-Ready"
            summary="Siva Surya Teja Meka demonstrates strong practical engineering skills with a solid understanding of full-stack development. Both interviews highlight clear communication, structured thinking, and real-world deployment knowledge. With further practice in advanced DSA and backend depth, he is capable of performing efficiently in production environments."
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
