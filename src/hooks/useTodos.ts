import axios from 'axios'
import React, { useState } from 'react'

/**
 * ステートフルなロジックを書く場所で、極力薄く書く。テストしやすさのために
 * useXXX という名前で定義するhooksでは、リアクティブな変数宣言と関数への注入のみを行う
 *
 */

const onTodoAddButtonPushed = (
  todos: any,
  setTodos: any,
  newTodo: string,
  setNewTodo: React.Dispatch<React.SetStateAction<string>>,
) => () => {
  setTodos([...todos, { title: newTodo }])
  setNewTodo('')
}

const onDeleteButtonPushed = (todos: any, setTodos: any) => async (deleteId: any) => {
  const remainTodos = todos.filter((value: any) => !deleteId.include(value.title))
  setTodos([...remainTodos])
  // APIとの接続はURLを直接指定
  await axios.get('https://jsonplaceholder.typicode.com/todos/')
}

const onCheckboxChanged = (deleteIds: any, setDeleteIds: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target
  setDeleteIds(value)
}

const onFormChanged = (setNewTodo: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setNewTodo(e.target.value)
}
const fetchTodo = (setTodos: any) => async () => {
  const res: any = await axios.get('https://jsonplaceholder.typicode.com/todos/')

  setTodos(res.data)
}
export default function useTodos() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos]: any = useState([])
  const [deleteIds, setDeleteIds] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return {
    todos,
    newTodo,
    deleteIds,
    isLoading,
    onCheckboxChanged: onCheckboxChanged(deleteIds, setDeleteIds),
    fetchTodo: fetchTodo(setTodos),
    onFormChanged: onFormChanged(setNewTodo),
    onTodoAddButtonPushed: onTodoAddButtonPushed(todos, setTodos, newTodo, setNewTodo),
  }
}
