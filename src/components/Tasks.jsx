
export function Tasks({
  tasks = [],
  isLoading,
  isError,
  error,
  selectedTaskIds = new Set(),
  onAddTask,
}) {
  return (
    <section className="panel available-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">ЛЕНТА</p>
          <h2>Все заказы</h2>
        </div>
        {!isLoading && !isError && (
          <span className="count-badge">{tasks.length}</span>
        )}
      </div>

      {isLoading && (
        <div className="status-message" role="status">
          <span className="spinner" aria-hidden="true" />
          Загрузка заказов...
        </div>
      )}

      {isError && (
        <div className="status-message error-message" role="alert">
          Не удалось загрузить заказы: {error?.message || 'Неизвестная ошибка'}
        </div>
      )}

      {!isLoading && !isError && tasks.length === 0 && (
        <p className="empty-state">Пока нет доступных заказов.</p>
      )}

      {!isLoading && !isError && tasks.length > 0 && (
        <ul className="task-list">
          {tasks.map((task, index) => {
            const isSelected = selectedTaskIds.has(task.id)

            return (
              <li className="task-card" key={task.id}>
                <div className="task-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="task-content">
                  <p className="task-title">{task.title}</p>
                  <span className="task-meta">
                    Заказ #{String(task.id).padStart(3, '0')}
                  </span>
                </div>
                <button
                  className={`button ${isSelected ? 'button-selected' : 'button-primary'}`}
                  type="button"
                  onClick={() => onAddTask(task)}
                  disabled={isSelected}
                >
                  {isSelected ? 'Уже выбрано' : 'Взять в работу'}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default Tasks
