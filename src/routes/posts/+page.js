import { appState } from '../../appState'

/** @type {import('./$types').PageLoad} */
export const load = ({ fetch }) => {
    
    const fetchPosts = async () => {
        const res = await fetch('/api/posts')
        const data = await res.json()
        appState.posts = data
    }

    return {
        posts: fetchPosts()
    }

}