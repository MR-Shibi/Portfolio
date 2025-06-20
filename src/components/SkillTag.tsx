interface SkillTagProps {
  skill: string;
  delay?: number;
}

export function SkillTag({ skill, delay = 0 }: SkillTagProps) {
  return (
    <div
      className="skill-tag animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </div>
  );
}
