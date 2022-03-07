import { useState } from "react";



export function Counter(){
    const [book , setBook ] = useState(0);
    const [ Pens , setPen] = useState(0);
    const [Notebook , setNotebook ] = useState(0);
    const [Inkpen , setInkpen] = useState(0);
  const Total = book+Pens+Notebook+Inkpen;

    return (
        <div>
            <h3>Book : {book}</h3>
            <button onClick={() =>{
               setBook(book+1)
            }}>Add</button>


            <button onClick={() =>{
                setBook(book-1)
            }}>Subs</button>

      
        <h3>Pens: { Pens}</h3>
        <button onClick={() =>{
              setPen(Pens+1)
          }}>Add</button>


          <button onClick={() =>{
              setPen(Pens-1)
          }}>Subs</button>


        <h3>NoteBook: {Notebook}</h3>
        <button onClick={() =>{
              setNotebook(Notebook+1)
          }}>Add</button>


          <button onClick={() =>{
              setNotebook(Notebook-1)
          }}>Subs </button>
                     
        

    
    <h3>InkPen: {Inkpen}</h3>
    <button onClick={() =>{
               setInkpen(Inkpen+1)
            }}>Add</button>


            <button onClick={() =>{
                setInkpen(Inkpen-1)
            }}>Subs</button>

<h3>TotalCount: {Total}</h3>


        </div>
    )
}