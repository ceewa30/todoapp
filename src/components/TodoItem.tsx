import styles from  "./todoitem.module.css";

export default function TodoItem({item, todos, setTodos}) {
    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo!== item));
    }
    function handleClick(item) {
        setTodos(todos.map((todo) => todo.name === item.name? {...todo, done:!todo.done} : todo));
    }
    const className = item.done? styles.completed : "";
    return (
        <div className={styles.todoitem}>
            <div className={styles.todoitems}>
                <span onClick={() => handleClick(item)} className={styles.todoInput}><p className={className}>{item.name}</p></span>
                <button onClick={() => handleDelete(item)} className={styles.deleteButton}>X</button>
            </div>
        </div>
    );
}