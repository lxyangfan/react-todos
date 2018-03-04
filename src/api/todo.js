import fetch from 'isomorphic-fetch'

export async function fetchTodos() {
    return await fetch(`http://5987c69a2f50af001157524e.mockapi.io/api/v1/todos`).then(res => res.json())
}
