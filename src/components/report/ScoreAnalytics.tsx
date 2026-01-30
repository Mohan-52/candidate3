import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Code, Brain, TrendingUp } from "lucide-react";

interface ScoreAnalyticsProps {
  overallScore: number;
  codingScore: number;
  dsaScore: number;
}

const ScoreCircle = ({
  score,
  maxScore,
  label,
  icon: Icon,
  colorClass,
}: {
  score: number;
  maxScore: number;
  label: string;
  icon: React.ElementType;
  colorClass: string;
}) => {
  const percentage = Math.min((score / maxScore) * 100, 100);
  const strokeDasharray = 2 * Math.PI * 45;
  const strokeDashoffset = strokeDasharray * (1 - percentage / 100);

  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative h-32 w-32 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted/50 transition-all duration-300 group-hover:text-muted"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className={`${colorClass} transition-all duration-300 group-hover:brightness-110`}
            style={{
              strokeDasharray,
              strokeDashoffset,
              transition: "stroke-dashoffset 1s ease-out, filter 0.3s ease-out",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className={`h-5 w-5 mb-1 ${colorClass} transition-all duration-300 group-hover:scale-125`} />
          <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{score}</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">{label}</p>
    </div>
  );
};

const ProgressBar = ({
  label,
  value,
  maxValue,
  colorClass,
}: {
  label: string;
  value: number;
  maxValue: number;
  colorClass: string;
}) => {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="space-y-2 group p-3 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:shadow-card-hover">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{label}</span>
        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{value} / {maxValue}</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-muted group-hover:bg-muted/80 transition-colors duration-300 shadow-sm">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass} group-hover:shadow-lg`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const ScoreAnalytics = ({ overallScore, codingScore, dsaScore }: ScoreAnalyticsProps) => {
  return (
    <Card className="border-0 shadow-card hover:shadow-card-hover animate-fade-in transition-all duration-300" style={{ animationDelay: "0.1s" }}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <BarChart3 className="h-5 w-5 text-primary" />
          Score Analytics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Circular scores */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <ScoreCircle
              score={overallScore}
              maxScore={200}
              label="Overall Score"
              icon={TrendingUp}
              colorClass="text-primary"
            />
            <ScoreCircle
              score={codingScore}
              maxScore={150}
              label="Coding Score"
              icon={Code}
              colorClass="text-success"
            />
          </div>

          {/* Progress bars and insights */}
          <div className="space-y-6">
            <ProgressBar
              label="Overall Performance"
              value={overallScore}
              maxValue={200}
              colorClass="bg-primary"
            />
            <ProgressBar
              label="Coding Proficiency"
              value={codingScore}
              maxValue={150}
              colorClass="bg-success"
            />

            <div className="rounded-lg bg-info-muted p-4 transition-all duration-300 hover:shadow-card hover:bg-info-muted/80 hover:border border-primary/20 cursor-pointer">
              <p className="text-sm text-foreground">
                <strong className="text-primary">Performance Insight:</strong> Harsh demonstrates
                exceptional coding abilities with a score in the top tier. The overall score of{" "}
                <strong>{overallScore}</strong> indicates strong technical foundations, with room
                for growth in algorithmic problem-solving depth.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
