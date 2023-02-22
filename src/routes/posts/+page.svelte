<script>
	import { appState } from '../../appState';
</script>

<div>
    {#each appState.posts.data.posts as post}
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    {/each}
</div>


