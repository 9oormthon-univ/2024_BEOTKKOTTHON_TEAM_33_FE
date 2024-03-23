import * as S from "./RecordBar.styles";
import { RecordBarProps } from "./RecordBar.types";
import PlayIcon from "@assets/icons/playIcon.svg?react";
import Lottie from "react-lottie";
import BeforePlaying from "@assets/lotties/beforePlaying.json";
import Playing from "@assets/lotties/playing.json";
import { MediaRecorder, register } from "extendable-media-recorder";
import { connect } from "extendable-media-recorder-wav-encoder";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { fileState, encoderState } from "@stores/fileStore";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

let mediaRecorder: MediaRecorder;
const navigate = useNavigate();

const [file, setFile] = useRecoilState(fileState);
const [encoderRegisted, setEncoderRegisted] = useRecoilState(encoderState);

const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
const [isRecording, setIsRecording] = useState(false);
const [recordFile, setRecordFile] = useState<string | unknown>("");
const [isPlaying, setIsPlaying] = useState(false);
const [isRecordDone, setIsRecordDone] = useState(false);

const startRecording = async () => {
  try {
    setRecordedChunks([]);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    console.log(stream);

    mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/wav" }) as MediaRecorder;

    mediaRecorder.ondataavailable = (e: BlobEvent) => {
      if (e.data.size > 0) {
        setRecordedChunks((prev) => [...prev, e.data]);
      }
    };

    mediaRecorder.start();
    setIsRecording(true);
  } catch (error: any) {
    console.log(error);
  }
};

const stopRecording = () => {
  if (mediaRecorder && isRecording) {
    mediaRecorder.stop();
    setIsRecording(false);
  }
};

const playRecording = () => {
  if (recordedChunks.length === 0) {
    toast.error("녹음된 오디오가 없습니다.");

    window.location.reload();
  }

  setIsRecording(true);

  const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);
  setRecordFile(audioBlob);

  audio.play();

  audio.onended = () => {
    setIsPlaying(false);
  };
};

const handleRecordDone = () => {
  if (isRecording) {
    stopRecording();
    setIsRecordDone(true);
  }
};

const handleSave = () => {
  const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
  setRecordFile(audioBlob);

  setFile(recordFile as string);

  // TODO
  navigate("/");
};

const RecordBar = ({ barType }: RecordBarProps) => {
  const lottieOptions = {
    loop: barType === "beforeRecord" ? false : true,
    autoplay: barType === "beforeRecord" ? false : true,
    animationData: barType === "beforeRecord" ? BeforePlaying : Playing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    if (!encoderRegisted) {
      const initRegister = async () => {
        await register(await connect());
      };

      initRegister();

      setEncoderRegisted(true);
    }

    startRecording();
  }, []);

  return (
    <S.RecordBarWrapper barType={barType}>
      {barType === "afterRecord" && (
        // TODO: 재생 기능 추가
        <button>
          <PlayIcon />
        </button>
      )}
      <S.LottieWrapper barType={barType}>
        {barType === "beforeRecord" ? (
          <Lottie options={lottieOptions} height={40} width={75} />
        ) : (
          <Lottie options={lottieOptions} height={40} width={75} />
        )}
      </S.LottieWrapper>
      <S.TimerText barType={barType}>00:00</S.TimerText>
    </S.RecordBarWrapper>
  );
};

export default RecordBar;
