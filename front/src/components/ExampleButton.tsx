import { Props } from "types/types";
import useApi from "hooks/useApi";
import { Game } from "types/api";
function ExampleButton({ id, text, flag}: Props) {
  const games = useApi<Game[]>(`games/${id}`);

  const playAudio = () => {
    if(text === '인트로 듣기'){
      var audio = new Audio(games?.at(0)?.game_file[0].file_id.location);
    } else {
      var audio = new Audio(games?.at(0)?.game_file[1].file_id.location);
    }
    audio.play();
  }

  return (
    <div className="flex justify-center">
        <span onClick={playAudio} className="text-center cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition h-12 w-[200px] border-2 bg-[#333d79] justify-center m-auto rounded-2xl px-10 py-1 text-white text-2xl font-medium">
          {text}
        </span>
    </div>
  );
}

export default ExampleButton;
