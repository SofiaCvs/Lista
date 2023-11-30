import "/src/styles/TaskCounter.css";


function TaskCounter({completed, total}){
    return (
      <h2 className="TaskCounter">
        You have complete <span>{completed}</span> of <span>{total}</span> task.
        </h2>
    );
  }

  export {TaskCounter};
  /**
 * Cree un estado que almacena lo que los usuarios buscan
 * Lo comunico con el componente padre
 *
 */