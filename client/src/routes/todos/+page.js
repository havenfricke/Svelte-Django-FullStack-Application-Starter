import { appState } from '../../appState'

/** @type {import('./$types').PageLoad} */
export const load = ({ fetch }) => {

    const fetchTodos = async () => {
        const res = await fetch('api/todos')
        const data = await res.json()
        appState.todos = data
    }

    return {
        todos: fetchTodos()
    }
}