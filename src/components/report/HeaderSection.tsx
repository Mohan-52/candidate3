import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, User, Award } from "lucide-react";

interface HeaderSectionProps {
  candidateName: string;
  recommendation: string;
  overallScore: number;
  resumeUrl: string;
  topinReportUrl: string;
}

export const HeaderSection = ({
  candidateName,
  recommendation,
  overallScore,
  resumeUrl,
  topinReportUrl,
}: HeaderSectionProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-hero p-8 text-primary-foreground shadow-elevated hover:shadow-elevated transition-all duration-300 cursor-default">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-70 hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5 blur-2xl opacity-70 hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4 group">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <User className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">
                Candidate Report
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight lg:text-4xl">
                {candidateName}
              </h1>
              <Badge className="mt-3 border-0 bg-success px-4 py-1.5 text-sm font-semibold text-success-foreground shadow-lg">
                <Award className="mr-1.5 h-4 w-4" />
                {recommendation}
              </Badge>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end group">
            <div className="rounded-xl bg-white/20 px-6 py-4 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <p className="text-sm font-medium uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Overall Score
              </p>
              <p className="text-4xl font-bold group-hover:scale-110 transition-transform duration-300 origin-left" style={{ transformOrigin: 'left' }}>{overallScore}</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/20 text-primary-foreground hover:bg-white/30 border-0"
                  asChild
                >
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/20 text-primary-foreground hover:bg-white/30 border-0"
                  asChild
                >
                  <a href={topinReportUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Topin Report
                  </a>
                </Button>
              </div>
              <div className="rounded-lg bg-white/10 px-3 py-2 text-xs backdrop-blur-sm opacity-90 hover:bg-white/20 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-lg">
                <p className="font-semibold text-white mb-1">Access Credentials:</p>
                <p className="text-white/90">Mobile: 9800141844</p>
                <p className="text-white/90">OTP: 561811</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
