import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowUpCircle, Sparkles, Target } from "lucide-react";

interface StrengthsAndImprovementsProps {
  strengths: string[];
  improvements: string[];
}

export const StrengthsAndImprovements = ({
  strengths,
  improvements,
}: StrengthsAndImprovementsProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Strengths */}
      <Card 
        className="border-0 shadow-card animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success-muted">
              <Sparkles className="h-4 w-4 text-success" />
            </div>
            Key Strengths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 rounded-lg bg-success-muted/50 p-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                <span className="text-sm text-foreground">{strength}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Areas for Improvement */}
      <Card 
        className="border-0 shadow-card animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning-muted">
              <Target className="h-4 w-4 text-warning" />
            </div>
            Areas for Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {improvements.map((improvement, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 rounded-lg bg-warning-muted/50 p-3"
              >
                <ArrowUpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-warning" />
                <span className="text-sm text-foreground">{improvement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
