import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  User, 
  PlayCircle, 
  CheckCircle2, 
  Code, 
  Brain,
  MessageSquare,
  Lightbulb,
  Target
} from "lucide-react";

interface InterviewSectionProps {
  type: "dsa" | "technical";
  title: string;
  subtitle: string;
  interviewer: string;
  duration: string;
  focusAreas: string[];
  questions: string[];
  insights: {
    title: string;
    description: string;
  }[];
  recordingTitle: string;
  recordingSubtitle: string;
}

export const InterviewSection = ({
  type,
  title,
  subtitle,
  interviewer,
  duration,
  focusAreas,
  questions,
  insights,
  recordingTitle,
  recordingSubtitle,
}: InterviewSectionProps) => {
  const Icon = type === "dsa" ? Brain : Code;
  const iconColor = type === "dsa" ? "text-warning" : "text-success";
  const badgeColor = type === "dsa" ? "bg-warning-muted text-warning" : "bg-success-muted text-success";
  
  return (
    <Card 
      className="border-0 shadow-card animate-fade-in overflow-hidden" 
      style={{ animationDelay: type === "dsa" ? "0.2s" : "0.3s" }}
    >
      <CardHeader className="border-b border-border/50 bg-muted/30">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-muted ${iconColor}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1.5">
              <User className="h-3 w-3" />
              {interviewer}
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <Clock className="h-3 w-3" />
              {duration}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6">
            {/* Focus Areas */}
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                <Target className="h-4 w-4 text-primary" />
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, index) => (
                  <Badge key={index} className={`${badgeColor} border-0`}>
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Questions */}
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                <MessageSquare className="h-4 w-4 text-primary" />
                Sample Questions
              </h4>
              <ul className="space-y-2">
                {questions.map((question, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right column - Insights */}
          <div>
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
              <Lightbulb className="h-4 w-4 text-primary" />
              Performance Insights
            </h4>
            <div className="space-y-3">
              {insights.map((insight, index) => (
                <div 
                  key={index} 
                  className="rounded-lg border border-border/50 bg-muted/30 p-3"
                >
                  <p className="font-medium text-foreground">{insight.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{insight.description}</p>
                </div>
              ))}
            </div>
            
            {/* Recording link */}
            <div className="mt-4 rounded-lg bg-primary/5 p-4">
              <div className="flex items-start gap-3">
                <PlayCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{recordingTitle}</p>
                  <p className="text-xs text-muted-foreground">{recordingSubtitle}</p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
