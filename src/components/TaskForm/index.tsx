import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import styles from './TaskForm.module.scss';
import { v4 } from 'uuid';
import { taskContext } from '../../context/TasksContext';

export function TaskForm() {
    const { newTask } = taskContext();
    const [description, setDescription] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        const task = {
            id: v4(),
            description,
            finalized: false,
        };
        newTask(task);
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.container}>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                className={styles.input}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button className={styles.button} type="submit">
                Criar
                <PlusCircle />
            </button>
        </form>
    );
}
