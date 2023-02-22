<script>
       /** @type {import('./$types').PageData} */
	import { appState } from "../../../appState";
</script>

<div>
    <h1>{appState.post.data.title}</h1>
    <p>{appState.post.data.body}</p>
</div>