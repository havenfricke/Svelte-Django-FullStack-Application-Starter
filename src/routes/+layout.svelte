<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
    <a href="/posts">Posts</a>
</nav>
  
  <slot></slot>

  <style>
    nav{
      top: 0;
      left: 0;
      position: fixed;
      place-content: start;
      background-color: gray;
      min-width: 100vw;
      overflow-x: hidden;
    }
  </style>