import './TaskNewButton.css';
function NewButton({count, setCount}){
    return (
        <div>
      <button className="addNewButton" onClick={() => setCount((count) => count + 1)}>+</button>
      <p>conteo {count}</p>
    </div>
    );
  }

  export {NewButton};