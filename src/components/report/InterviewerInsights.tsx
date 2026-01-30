import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Briefcase, Award, CheckCircle } from "lucide-react";

interface InterviewerInsightsProps {
  hiringSignal: string;
  confidenceLevel: string;
  industryReadiness: string;
  summary: string;
}

export const InterviewerInsights = ({
  hiringSignal,
  confidenceLevel,
  industryReadiness,
  summary,
}: InterviewerInsightsProps) => {
  return (
    <Card 
      className="border-0 shadow-card animate-fade-in"
      style={{ animationDelay: "0.6s" }}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Users className="h-5 w-5 text-primary" />
          Interviewer Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Hiring Signal */}
          <div className="flex flex-col items-center rounded-xl bg-success-muted p-5 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-success">
              <Award className="h-6 w-6 text-success-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Hiring Signal</p>
            <p className="mt-1 text-lg font-bold text-success">{hiringSignal}</p>
          </div>

          {/* Confidence Level */}
          <div className="flex flex-col items-center rounded-xl bg-primary/10 p-5 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Confidence Level</p>
            <p className="mt-1 text-lg font-bold text-primary">{confidenceLevel}</p>
          </div>

          {/* Industry Readiness */}
          <div className="flex flex-col items-center rounded-xl bg-info-muted p-5 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-info">
              <Briefcase className="h-6 w-6 text-info-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Industry Readiness</p>
            <p className="mt-1 text-lg font-bold text-info">{industryReadiness}</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 rounded-xl border border-success/30 bg-gradient-to-r from-success-muted to-transparent p-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
            <div>
              <h4 className="font-semibold text-foreground">Consolidated Assessment</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
