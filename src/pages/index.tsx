import React, { useEffect } from 'react'
import { NextPage } from 'next'
import useTodos from '@src/hooks/useTodos'
import TodoForm from '@src/components/TodoForm'
import TodoList from '@src/components/TodoList'

const Home: NextPage = () => {
  const { SITE_NAME } = process.env
  const todo = useTodos()
  useEffect(() => {
    todo.fetchTodo()
  }, [])
  return (
    <>
      <h1 data-testid="helloH1" className="text-xl text-gray-900">
        Hello from <u>{SITE_NAME}</u>.
      </h1>
      {todo.deleteIds}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <TodoForm {...todo} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <TodoList {...todo} />
    </>
  )
}

export default Home
