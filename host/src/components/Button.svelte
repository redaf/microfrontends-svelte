<script>
  export let theme;

  $: style = `
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.text};
    margin-top: ${theme.spacing.unit * 10}px;
    margin-right: ${theme.spacing.unit}px;
    padding: ${theme.spacing.unit}px ${theme.spacing.unit * 3}px;
    --background-color: ${theme.colors.body};
    --background-color-active: ${theme.colors.highlight};
  `;
</script>

<style>
  button {
    background-color: var(--background-color);
  }
  button:active {
    background-color: var(--background-color-active);
  }
</style>

<button {style} on:click>
  <slot />
</button>
