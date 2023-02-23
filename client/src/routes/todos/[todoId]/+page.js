import { appState } from '../../../appState'

/** @type {import('./$types').PageLoad} */
export const load = ({ params, fetch }) => {

    const fetchPosts = async (id) => {
        const res = await fetch(`/api/todos/${id}`)
        const data = await res.json()
        appState.todo = data
    }


    return {
        todo: fetchPosts(params.todoId)
    }
}