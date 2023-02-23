<script>
	import { appState } from '../../../appState';
    /** @type {import('./$types').PageData} */
</script>

<div>
    <h1>{appState.todo.data.title}</h1>
    <p>{appState.todo.data.description}</p>
</div>