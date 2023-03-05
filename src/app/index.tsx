import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../shared/lib/store/game/game.slice";
import { Field, Helmet } from "../widgets";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameActions.initiateGame());
  }, []);

  return (
    <div className="App">
      <Helmet />
      <Field />
    </div>
  );
};

export default App;
