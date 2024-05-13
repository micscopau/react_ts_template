import { thing } from "./test";

function App(): React.ReactElement {

  const myThing: thing = { thing: "thing", other: 11 };

  return (
    <div className="app">
      Hello World
      {myThing.thing}
      {myThing.other}
    </div>
  )
}

export default App
