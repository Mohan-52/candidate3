import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  ExternalLink, 
  PlayCircle, 
  Download,
  Link2
} from "lucide-react";

interface Resource {
  title: string;
  description: string;
  url: string;
  type: "resume" | "report" | "recording";
}

interface ResourcesSectionProps {
  resources: Resource[];
}

const getResourceIcon = (type: Resource["type"]) => {
  switch (type) {
    case "resume":
      return FileText;
    case "report":
      return ExternalLink;
    case "recording":
      return PlayCircle;
    default:
      return Link2;
  }
};

export const ResourcesSection = ({ resources }: ResourcesSectionProps) => {
  return (
    <Card 
      className="border-0 shadow-card animate-fade-in"
      style={{ animationDelay: "0.7s" }}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Link2 className="h-5 w-5 text-primary" />
          Resources & Documents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = getResourceIcon(resource.type);
            return (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-border/50 bg-muted/30 p-4 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-card-hover"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground group-hover:text-primary">
                    {resource.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                    {resource.description}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
