import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <Note
        key={entry.id}
        title={entry.title}
        content={entry.content} />
      <Footer />
    </div>
  );
}

export default App;
