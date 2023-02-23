<script>
	import { appState } from "../../appState";
</script>

<div>
    {#each appState.todos.data as todo}
    <a style="text-decoration: none; color: black;" href={`/todos/${todo.id}`}>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
    </a>
    {/each}
</div>