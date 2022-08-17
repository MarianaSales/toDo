import { createContext, useState, useCallback, useContext } from 'react';

interface TaskContextProviderProps {
    children: React.ReactNode;
}

type Task = {
    id: string;
    finalized: boolean;
    description: string;
};

type TaskContextData = {
    tasks: Task[];
    newTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    switchTaskFinalized: (id: string) => void;
};

const TaskContext = createContext({} as TaskContextData);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const newTask = useCallback((tasks: Task) => {
        setTasks((state) => [tasks, ...state]);
    }, []);
    const deleteTask = useCallback((id: string) => {
        setTasks((task) => tasks.filter((task) => task.id !== id));
    }, []);
    const switchTaskFinalized = useCallback(
        (id: string) => {
            const newTasks = tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, finalized: !task.finalized };
                }
                return task;
            });

            setTasks(newTasks);
        },
        [tasks]
    );

    return (
        <TaskContext.Provider value={{ tasks, newTask, deleteTask, switchTaskFinalized }}>
            {children}
        </TaskContext.Provider>
    );
}

export function taskContext() {
    const context = useContext(TaskContext);
    return context;
}
