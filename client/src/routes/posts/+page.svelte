<script>
	import { appState } from '../../appState';
</script>

<div>
    {#each appState.posts.data.posts as post}
    <a style="text-decoration: none; color: black;" href={`/posts/${post.id}`}>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </a>
    {/each}
</div>


