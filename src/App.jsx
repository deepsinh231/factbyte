import { useState } from "react"
import { Outlet } from "react-router-dom";
import { Headers } from "./Components";

function App() {
  const [Loding, setLoding] = useState(false);

  return !Loding ? (
    <div>
      <Headers></Headers>
      <main >
        <Outlet />
      </main>
    </div>
  ) :
    <Loadear />
}

export default App