import React from 'react'

export default function TodoList({ todos, onCheckboxChanged }: any) {
  return (
    <>
      {todos.map((v: any) => (
        <>
          <input type="checkbox" value={v.title} onChange={onCheckboxChanged} key={v.title} />
          {v.title} <br />
        </>
      ))}
    </>
  )
}
