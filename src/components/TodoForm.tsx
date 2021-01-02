// Reactコンポーネント(UIとリアクティブ変数・フックスを結びつける)
export default function TodoForm({todos, newTodo, onTodoAddButtonPushed, onFormChanged}:any) {

    return (
      <div>
        <input type="text" value={newTodo} onChange={onFormChanged} />
        <button onClick={() => onTodoAddButtonPushed()}> osu </button>
      </div>
    )
}
  