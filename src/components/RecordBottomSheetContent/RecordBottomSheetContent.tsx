import * as S from "./RecordBottomSheetContent.styles";
import * as CS from "../BaseBottomSheetContent/BaseBottomSheetContent.styles";
import RecordBar from "@components/RecordBar/RecordBar";
import { useState, useRef, useEffect } from "react";
import RecordIcon from "@assets/icons/recordIcon.svg?react";
import StopIcon from "@assets/icons/stopIcon.svg?react";
import ReplayIcon from "@assets/icons/replayIcon.svg?react";
import { RecordBottomSheetContentProps } from "./RecordBottomSheetContent.types";
import { diaryState } from "@stores/diaryStore";
import { useRecoilState } from "recoil";

const RecordBottomSheetContent = ({ setIsVisible }: RecordBottomSheetContentProps) => {
  const [diary, setDiary] = useRecoilState(diaryState);

  const [barType, setBarType] = useState<"beforeRecord" | "recording" | "afterRecord">(
    "beforeRecord"
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [transcript, setTranscript] = useState<string>("");

  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const recognition = new (window as any).webkitSpeechRecognition();
  recognition.lang = "ko-KR";
  recognition.interimResults = false;

  recognition.onresult = (event: any) => {
    setTranscript(event.results[0][0].transcript);
  };

  recognition.onerror = (event: any) => {
    console.error("Error occurred during speech recognition:", event.error);
  };

  recognition.onend = () => {
    console.log("Speech recognition completed.");
  };

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

  useEffect(() => {
    console.log("Transcript:", transcript);
  }, [transcript]);

  useEffect(() => {
    console.log(diary);
  }, [diary]);

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
              recognition.start();
            }}
          >
            <RecordIcon />
          </button>
        ) : barType === "recording" ? (
          <button
            onClick={() => {
              setBarType("afterRecord");
              stopRecording();
              recognition.stop();
            }}
          >
            <StopIcon />
          </button>
        ) : (
          <button
            onClick={() => {
              setBarType("recording");
              recognition.stop();
              recognition.start();
            }}
          >
            <ReplayIcon />
          </button>
        )}
        {barType === "afterRecord" ? (
          <S.DoneText
            onClick={() => {
              setIsVisible(false);
              setDiary({ ...diary, voiceText: transcript });
            }}
          >
            완료
          </S.DoneText>
        ) : (
          <S.DoneText>완료</S.DoneText>
        )}
      </S.BottomSectionWrapper>
    </CS.BaseBottomSheetContentWrapper>
  );
};

export default RecordBottomSheetContent;
