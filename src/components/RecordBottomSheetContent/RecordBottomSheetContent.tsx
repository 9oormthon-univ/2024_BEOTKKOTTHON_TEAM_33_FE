import * as S from "./RecordBottomSheetContent.styles";
import * as CS from "../BaseBottomSheetContent/BaseBottomSheetContent.styles";
import RecordBar from "@components/RecordBar/RecordBar";
import { useState, useRef, useEffect } from "react";
import RecordIcon from "@assets/icons/recordIcon.svg?react";
import StopIcon from "@assets/icons/stopIcon.svg?react";
import ReplayIcon from "@assets/icons/replayIcon.svg?react";
import { RecordBottomSheetContentProps } from "./RecordBottomSheetContent.types";

const RecordBottomSheetContent = ({ setIsVisible }: RecordBottomSheetContentProps) => {
  const [barType, setBarType] = useState<"beforeRecord" | "recording" | "afterRecord">(
    "beforeRecord"
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = () => {
    const initRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;

        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        const chunks: Blob[] = [];
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: "audio/wav" });
          setRecordedChunks(chunks);
        };

        mediaRecorder.start();
        setBarType("recording");
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    };

    initRecording();
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  const playRecording = () => {
    const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    audio.play();

    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  useEffect(() => {
    if (isPlaying) {
      playRecording();
    }
  }, [isPlaying]);

  return (
    <CS.BaseBottomSheetContentWrapper>
      <CS.MainTitle>추억을 말해주세요!</CS.MainTitle>
      <RecordBar barType={barType} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <S.BottomSectionWrapper>
        <S.CancelText onClick={() => setIsVisible(false)}>취소</S.CancelText>
        {barType === "beforeRecord" ? (
          <button
            onClick={() => {
              setBarType("recording");
              startRecording();
            }}
          >
            <RecordIcon />
          </button>
        ) : barType === "recording" ? (
          <button
            onClick={() => {
              setBarType("afterRecord");
              stopRecording();
            }}
          >
            <StopIcon />
          </button>
        ) : (
          <button
            onClick={() => {
              setBarType("beforeRecord");
            }}
          >
            <ReplayIcon />
          </button>
        )}
        <S.DoneText
          onClick={
            // TODO: STT 기능 추가
            () => setIsVisible(false)
          }
        >
          완료
        </S.DoneText>
      </S.BottomSectionWrapper>
    </CS.BaseBottomSheetContentWrapper>
  );
};

export default RecordBottomSheetContent;
