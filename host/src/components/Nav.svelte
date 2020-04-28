<script>
  export let theme;

  $: style = `
    background-color: ${theme.colors.body};
    border: ${theme.border.width}px dashed ${theme.colors.text};
    padding: ${theme.spacing.unit * 3}px;
    margin-right: ${theme.spacing.unit * 3}px;
    --a-color: ${theme.colors.highlight};
  `;
</script>

<style>
  nav :global(a),
  nav :global(a:hover),
  nav :global(a:visited) {
    color: var(--a-color);
  }
  nav {
    width: 33%;
  }
</style>

<nav {style}>
  <slot />
</nav>
