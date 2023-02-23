<script>
	import { appState } from "../../../appState";
           /** @type {import('./$types').PageData} */
</script>

<div>
    <h1>{appState.post.data.title}</h1>
    <p>{appState.post.data.body}</p>
</div>