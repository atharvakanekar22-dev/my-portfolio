import { Activity, ArrowUpRight, Fingerprint, MapPin, ShieldAlert, TrainFront } from "lucide-react";

export default function ProjectVisual({ type }: { type: string }) {
  if (type === "khali") return <div className="project-visual visual-khali" aria-label="Stylized Khali-Jagah project artwork">
    <div className="phone-mock"><div className="phone-notch"/><span className="phone-kicker">KHÁLI · JAGAH</span><b>Choose your<br/>quieter ride.</b><div className="route-chip"><TrainFront size={15}/><span>Central Line<br/><strong>Dadar → Thane</strong></span></div><div className="crowd-meter"><i/><i/><i/><i/><i/><i/><i/></div><div className="phone-foot">AI CROWD INSIGHT <ArrowUpRight size={12}/></div></div><div className="visual-side-note">MUMBAI<br/>LOCAL · 01</div>
  </div>;
  if (type === "ghartak") return <div className="project-visual visual-ghartak" aria-label="Stylized Ghar Tak project artwork">
    <div className="route-orbit orbit-a"/><div className="route-orbit orbit-b"/><div className="route-pin"><MapPin size={20}/></div><div className="route-point point-one"/><div className="route-point point-two"/><div className="safe-note"><span><Activity size={14}/> JOURNEY ACTIVE</span><b>All good on the way home.</b><small>Family circle · updated just now</small></div><span className="ghartak-word">ghar tak<span>.</span></span>
  </div>;
  if (type === "scam") return <div className="project-visual visual-scam" aria-label="Stylized Scam-Spotter project artwork">
    <div className="scan-rings"><div className="scan-core"><ShieldAlert size={36}/></div></div><div className="scan-label label-top">MESSAGE ANALYSIS <span>01—04</span></div><div className="scan-alert"><span className="alert-dot"/> SUSPICIOUS PATTERN DETECTED</div><div className="scan-label label-bottom">PAUSE · CHECK · VERIFY</div>
  </div>;
  return <div className="project-visual visual-mirage" aria-label="Stylized MirageMesh project artwork">
    <div className="mesh-grid"/><div className="mesh-node node-a"/><div className="mesh-node node-b"/><div className="mesh-node node-c"/><div className="mesh-node node-d"/><div className="mesh-line line-a"/><div className="mesh-line line-b"/><div className="mesh-line line-c"/><div className="mesh-shield"><Fingerprint size={35}/></div><div className="mesh-caption"><span>DECEPTION NETWORK</span><b>Signals in the silence.</b><small>THREAT SURFACE · LIVE MAP</small></div><div className="mesh-index">MM / 001</div>
  </div>;
}
