<script>
  export let theme;

  $: style = `
    background-color: ${theme.colors.highlight};
    padding: ${theme.spacing.unit / 2}px ${theme.spacing.unit * 2}px;
    color: ${theme.colors.body};
    margin-left: ${theme.spacing.unit}px;
  `;
</script>

<style>
  span {
    display: inline-block;
    border-radius: 10px;
  }
</style>

<span {style}>
  <slot />
</span>
