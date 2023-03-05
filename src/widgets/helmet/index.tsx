import { useDispatch } from "react-redux";
import { gameActions } from "../../shared/lib/store/game/game.slice";

export const Helmet = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(gameActions.initiateGame());
        }}
      >
        START NEW GAME
      </button>
    </>
  );
};
