import { Compass, MapPin, Network, ShieldAlert, TrainFront } from "lucide-react";

interface ProjectVisualProps {
  name: string;
  image?: string;
  number: string;
}

export default function ProjectCardVisual({ name, image, number }: ProjectVisualProps) {
  if (image) {
    return (
      <div className="project-image-wrapper">
        <img src={image} alt={`${name} screenshot`} loading="lazy" />
      </div>
    );
  }

  // Minimal, sophisticated project graphic
  const getIcon = () => {
    switch (number) {
      case "01":
        return <TrainFront size={34} strokeWidth={1.4} />;
      case "02":
        return <ShieldAlert size={34} strokeWidth={1.4} />;
      case "03":
        return <Network size={34} strokeWidth={1.4} />;
      case "04":
        return <MapPin size={34} strokeWidth={1.4} />;
      case "05":
      default:
        return <Compass size={34} strokeWidth={1.4} />;
    }
  };

  const getSubtext = () => {
    switch (number) {
      case "01":
        return "CROWD INTELLIGENCE · MUMBAI LOCAL";
      case "02":
        return "SCAM DETECTION · THREAT ANALYSIS";
      case "03":
        return "DECEPTION LAYER · CYBERSECURITY";
      case "04":
        return "STATION NAVIGATION · INDOOR ROUTING";
      case "05":
      default:
        return "ACADEMIC ROADMAP · GUIDED LEARNING";
    }
  };

  return (
    <div className="project-visual-card">
      <div className="project-visual-bg-pattern" />
      <div className="project-visual-icon-wrap">
        {getIcon()}
      </div>
      <span className="project-visual-badge">{getSubtext()}</span>
      <span className="project-visual-watermark">{number}</span>
    </div>
  );
}

