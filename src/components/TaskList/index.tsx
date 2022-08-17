import { taskContext } from '../../context/TasksContext';
import { Task } from '../Task';
import styles from './TaskList.module.scss';

export function TaskList() {
    const { tasks } = taskContext();

    const createdTasks = tasks.length;
    const finalizedTasks = tasks.filter((task) => task.finalized).length;
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <span className={styles.createdLists}>Tarefas criadas</span>
                    <span className={styles.badge}>{createdTasks}</span>
                </div>

                <div>
                    <span className={styles.finalizedLists}>Concluídas</span>
                    <span className={styles.badge}>
                        {finalizedTasks} de {createdTasks}
                    </span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map(({ description, finalized, id }) => (
                    <Task key={id} id={id} description={description} finalized={finalized} />
                ))}
            </div>
        </div>
    );
}
