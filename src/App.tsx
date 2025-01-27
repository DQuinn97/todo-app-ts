import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <main>
        <form action="">
          <input type="text" placeholder="Enter new item" />
          <button>+</button>
        </form>
        <ul>
          <li className="checked">
            <span>todo 1</span>
            <a href="#" className="check"></a>
            <a href="#" className="remove"></a>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
