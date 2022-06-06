import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {/* <Note />  */}
{/* either you can you this method below */}
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
{/* or you can use this method below */}
      {/* {notes.map(Note)} */}
      <Footer />
    </div>
  );
}

export default App;
