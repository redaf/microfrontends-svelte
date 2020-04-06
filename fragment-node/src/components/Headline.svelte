<script>
  export let theme;

  $: style = `
    color: ${theme.colors.highlight};
  `;
</script>

<h1 {style}>
  <slot />
</h1>
