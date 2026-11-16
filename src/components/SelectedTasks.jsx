



export const SelectedTasks = ({ tasks = [], onRemoveTask, onClearAll }) => {
  return (
    <section className="panel selected-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">ВАША ОЧЕРЕДЬ</p>
          <h2>Мои заказы</h2>
        </div>
        <span className="count-badge count-badge-accent">{tasks.length}</span>
      </div>

      {tasks.length === 0 ? (
        <div className="selected-empty">
          <span className="empty-icon" aria-hidden="true">＋</span>
          <h3>Здесь пока пусто</h3>
          <p>Добавьте заказ из ленты — он появится в этом списке.</p>
        </div>
      ) : (
        <>
          <ul className="task-list selected-list">
            {tasks.map((task) => (
              <li className="task-card selected-task-card" key={task.id}>
                <div className="task-content">
                  <p className="task-title">{task.title}</p>
                  <span className="task-meta">
                    Заказ #{String(task.id).padStart(3, '0')}
                  </span>
                </div>
                <button
                  className="button button-quiet"
                  type="button"
                  onClick={() => onRemoveTask(task.id)}
                >
                  Отказаться
                </button>
              </li>
            ))}
          </ul>
          <button
            className="clear-button"
            type="button"
            onClick={onClearAll}
          >
            Очистить всё
          </button>
        </>
      )}
    </section>
  )
}

export default SelectedTasks
