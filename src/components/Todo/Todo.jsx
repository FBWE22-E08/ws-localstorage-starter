
import styles from './Todo.module.css';

export default function Todo({item, onDeleteClicked, onFinishClicked}) {
    //structure css class 
    //[filename]\_[classname]\_\_[hash] for instance: Todo_todoItem__XiOrx = uniquely scoped 
    return (
      <div className={styles.todoItem}>
          <p><b>Todo Item:</b> {item.text}</p>
          <p><b>Created On:</b> {new Date(item.createdOn).toLocaleString()}</p>
          <p><b>Status:</b> {item.done ? 'Done' : 'In progress...'}</p>
        <button onClick={() => onFinishClicked(item)}>I finished this task</button>
         &nbsp;
        <button onClick={() => onDeleteClicked(item)}>Delete this task</button>
      </div>
    )
  }
  