import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskContextProvider } from './context/TasksContext';

export function App() {
    return (
        <TaskContextProvider>
            <Header />
            <TaskForm />
            <TaskList />
        </TaskContextProvider>
    );
}
