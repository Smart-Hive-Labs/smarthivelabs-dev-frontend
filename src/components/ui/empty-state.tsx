import { Code2 } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function EmptyState({
  title = "Nothing here yet",
  message = "Check back soon.",
  icon: Icon = Code2,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <Icon className="h-10 w-10 opacity-20 text-primary" />
      <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground/50">{title}</p>
      <p className="text-xs text-muted-foreground/40 max-w-xs">{message}</p>
    </div>
  );
}
