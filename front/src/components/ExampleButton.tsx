import Link from "next/link";
import { Props } from "types/types";
import useApi from "hooks/useApi";
import { Game } from "types/api";
function ExampleButton({ id }: Props) {
  const games = useApi<Game[]>(`games/${id}`);
  return (
    <div className="flex justify-center">
        <audio id='audio_play' src='./사운드 파일.mp3'></audio>
        <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition h-12 w-auto border-2 bg-[#333d79] justify-center m-auto rounded-2xl px-10 py-1 text-white text-2xl font-medium">
          인트로 듣기
        </span>
    </div>
  );
}
function play() : void {
  var audio = document.getElementById('audio_play'); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
}

export default ExampleButton;
