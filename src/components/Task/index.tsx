import { TrashSimple } from 'phosphor-react';
import { useState } from 'react';
import { taskContext } from '../../context/TasksContext';
import styles from './Task.module.scss';

interface TaskItemProps {
    id: string;
    finalized: boolean;
    description: string;
}

export function Task({ id, finalized, description }: TaskItemProps) {
    const { deleteTask, switchTaskFinalized } = taskContext();
    const [finishedTask, setFinishedTask] = useState('');

    function handleDeleteTask(id: string) {
        deleteTask(id);
    }

    return (
        <div className={styles.container}>
            <label className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    onChange={(e) => switchTaskFinalized(id)}
                    //checked={finalized}
                />
                <span className={styles.chechmark} onClick={() => setFinishedTask(id)}></span>
            </label>
            <p>{description}</p>
            <button className={styles.deleteButton} onClick={() => handleDeleteTask(id)}>
                <TrashSimple />
                Excluir
            </button>
        </div>
    );
}
