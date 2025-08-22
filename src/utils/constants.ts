import RedCurveSvg from "../assets/red-curve.svg";
import GreenCurveSvg from "../assets/green-curve.svg";
import OrangeCurveSvg from "../assets/orange-curve.svg";
import YellowCurveSvg from "../assets/yellow-curve.svg";
import BlueCurveSvg from "../assets/blue-curve.svg";
import LinkSvg from "../assets/link-icon.svg";
import TVPlaySvg from "../assets/tv-play.svg";
import PDFSvg from "../assets/pdf-icon.svg";

export type Resource = {
  id: number;
  title: string;
  topic: string;
  tag: string;
  type: "PDF" | "Video" | "Link" | "DOC";
  image?: string;
  icon?: string;
  styles?: {
    color?: string;
    position?: string;
    width?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
};

export const resources: Resource[] = [
  {
    id: 1,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "Link",
    image: RedCurveSvg,
    icon: LinkSvg,
    styles: {
      position: "absolute",
      right: "0",
    },
  },
  {
    id: 2,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "Video",
    image: GreenCurveSvg,
    icon: TVPlaySvg,
    styles: {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
    },
  },
  {
    id: 3,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "Link",
    image: RedCurveSvg,
    icon: LinkSvg,
    styles: {
      position: "absolute",
      right: "0",
    },
  },
  {
    id: 4,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Wellbeing",
    type: "Video",
    image: OrangeCurveSvg,
    icon: TVPlaySvg,
    styles: {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
    },
  },
  {
    id: 5,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "PDF",
    image: YellowCurveSvg,
    icon: PDFSvg,
    styles: {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
    },
  },
  {
    id: 6,
    title: "Taking stock of mental health in your workplace",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "DOC",
    image: BlueCurveSvg,
    icon: PDFSvg,
    styles: {
      position: "absolute",
      right: "0",
    },
  },
];

export const resourceTypes = ["DOC", "Link", "PDF", "Video"];
export const resourceTags = [
  "Secure Base",
  "Sense of Appreciation",
  "Learning Organisation",
  "Mission and Vision",
  "Wellbeing",
];
