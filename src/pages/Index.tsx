import { HeaderSection } from "@/components/report/HeaderSection";
import { ScoreAnalytics } from "@/components/report/ScoreAnalytics";
import { InterviewSection } from "@/components/report/InterviewSection";
import { StrengthsAndImprovements } from "@/components/report/StrengthsAndImprovements";
import { InterviewerInsights } from "@/components/report/InterviewerInsights";
import { ResourcesSection } from "@/components/report/ResourcesSection";

const candidateData = {
  name: "Harsh Mishra",
  recommendation: "Strong Hire",
  overallScore: 146.96,
  codingScore: 118.96,
  dsaScore: 5,
  resumeUrl: "https://nw-forms-backend-media-static.s3.ap-south-1.amazonaws.com/ccbp_prod/media/upload/resume/1763365853009_HarshMishra_22bec048_7e6a3eb7-d781-42d3-82a1-7657d7e96350.pdf",
  topinReportUrl: "https://config.topin.tech/candidate-statistics/f6abffac-0fcb-48ac-9db0-847e5fbaaac9/dfd8532d-7f58-458c-af4b-c27e5affacf0",
};

const tr1Data = {
  type: "dsa" as const,
  title: "TR1 – DSA Interview",
  subtitle: "45–90 Minutes | Approach clarity, live coding, edge-case handling",
  interviewer: "Mostafijur Rahaman",
  duration: "1 Hour 11 Minutes",
  focusAreas: [
    "Problem-Solving Approach",
    "Live Coding",
    "Edge-Case Handling",
    "DSA Coding",
    "Communication",
  ],
  questions: [
    "Minimum Number of Operations to Move All Balls to Each Box",
    "Maximum Subarray Sum With One Deletion",
  ],
  insights: [
    {
      title: "Problem-Solving Approach",
      description: "Demonstrated structured thinking, breaking down complex problems into manageable sub-problems before coding.",
    },
    {
      title: "Edge-Case Handling",
      description: "Proactively identified edge cases and boundary conditions, showing defensive programming awareness.",
    },
    {
      title: "Communication Clarity",
      description: "Articulated thought process clearly while coding, making it easy to follow the solution development.",
    },
  ],
  recordingTitle: "NxtWave Employability – DSA Interview",
  recordingSubtitle: "Ashish Tandi – 2025/12/23 09:43 GMT+05:30",
};

const tr2Data = {
  type: "technical" as const,
  title: "TR2 – Technical & System Interview",
  subtitle: "45–90 Minutes | Code ownership, project depth, system thinking",
  interviewer: "Abhishek Sharma",
  duration: "45 Minutes",
  focusAreas: [
    "DSA & Algorithms",
    "Git Commands",
    "HTML & CSS",
    "Frontend Concepts",
    "Backend Concepts",
    "Database Queries",
  ],
  questions: [
    "What data structure is used internally in a hashmap?",
    "How does JavaScript handle async operations though it is single-threaded?",
    "How do you push a new feature to an existing repository?",
    "Why do we create indexes in databases?",
    "Find the k-th smallest element in an array.",
  ],
  insights: [
    {
      title: "Full-Stack Understanding",
      description: "Shows comprehensive knowledge across the stack, from frontend frameworks to database optimization.",
    },
    {
      title: "Real-World Scenario Handling",
      description: "Applied theoretical concepts to practical scenarios effectively, demonstrating industry readiness.",
    },
    {
      title: "System Thinking",
      description: "Understood how different components interact in a system architecture context.",
    },
  ],
  recordingTitle: "NxtWave Employability – Interview Round 2",
  recordingSubtitle: "Harsh Mishra – 2025/12/28 11:42 GMT+05:30",
};

const strengths = [
  "Excellent coding proficiency with strong fundamentals in multiple programming paradigms",
  "Clear and articulate communication during technical discussions",
  "Strong understanding of full-stack development concepts and best practices",
  "Proactive in identifying edge cases and writing defensive code",
  "Good grasp of database concepts including indexing and query optimization",
];

const improvements = [
  "Deepen expertise in advanced data structures and algorithms for complex problem-solving",
  "Practice more competitive programming to improve DSA scores",
  "Explore system design concepts for scalability and architecture understanding",
  "Build more end-to-end projects to strengthen practical implementation experience",
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
    description: "TR1 Interview with Mostafijur Rahaman – Dec 23, 2025",
    url: "#",
    type: "recording" as const,
  },
  {
    title: "Technical Interview Recording",
    description: "TR2 Interview with Abhishek Sharma – Dec 28, 2025",
    url: "#",
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
          {/* Score Analytics */}
          <ScoreAnalytics
            overallScore={candidateData.overallScore}
            codingScore={candidateData.codingScore}
            dsaScore={candidateData.dsaScore}
          />

          {/* Interview Sections */}
          <InterviewSection {...tr1Data} />
          <InterviewSection {...tr2Data} />

          {/* Strengths & Improvements */}
          <StrengthsAndImprovements
            strengths={strengths}
            improvements={improvements}
          />

          {/* Interviewer Insights */}
          <InterviewerInsights
            hiringSignal="Strong Hire"
            confidenceLevel="High (92%)"
            industryReadiness="Production Ready"
            summary="Harsh Mishra demonstrates exceptional coding abilities and a solid understanding of full-stack development. His communication skills during technical discussions were clear and professional. While there's room for growth in advanced algorithmic thinking, his current skill set and learning trajectory make him an excellent candidate for mid-level engineering roles. Both interviewers expressed high confidence in his ability to contribute meaningfully to a development team from day one."
          />

          {/* Resources */}
          <ResourcesSection resources={resources} />
        </div>

        {/* Footer */}
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
