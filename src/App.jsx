import { useQuery } from '@tanstack/react-query'
import { fetchApi } from './api/api.js'
import { Tasks } from './components/Tasks.jsx'
import { PageHeader } from './components/PageHeader.jsx'
import { SelectedTasks } from './components/SelectedTasks.jsx'
import { useSelectedStore } from './store/useSelectedStore.js'
import './App.css'

function App() {
  const { data: tasks = [], isLoading, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchApi,
  })

  const selectedTasks = useSelectedStore((state) => state.selectedTasks)
  const addTask = useSelectedStore((state) => state.addTask)
  const removeTask = useSelectedStore((state) => state.removeTask)
  const clearAll = useSelectedStore((state) => state.clearAll)
  const selectedTaskIds = new Set(selectedTasks.map((task) => task.id))

  return (
    <main className="app-shell">
      <PageHeader />

      <section className="intro">
        <p className="eyebrow">Фриланс-Биржа</p>
        <h2>Выберите свой следующий проект</h2>
        <p className="intro-copy">Выбирайте задачи из списка и собирайте свою рабочую очередь</p>
      </section>

      <section className="workspace" aria-label="Заказы">
        <Tasks
          tasks={tasks}
          isLoading={isLoading}
          isError={isError}
          error={error}
          selectedTaskIds={selectedTaskIds}
          onAddTask={addTask}
        />
        <SelectedTasks
          tasks={selectedTasks}
          onRemoveTask={removeTask}
          onClearAll={clearAll}
        />
      </section>

      <footer className="page-footer">
        Заказы загружаются с сервера. Ваш выбор хранится в приложении
      </footer>
    </main>
  )
}

export default App
