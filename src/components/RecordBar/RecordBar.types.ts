export interface RecordBarProps {
  barType: "beforeRecord" | "recording" | "afterRecord";

  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RecordBarStylesProps {
  barType: "beforeRecord" | "recording" | "afterRecord";
}
