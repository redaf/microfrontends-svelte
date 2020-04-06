<script>
  export let theme;

  $: style = `
    background-color: ${theme.colors.highlight};
    color: ${theme.colors.body};
    padding: ${theme.spacing.unit}px ${theme.spacing.unit * 2}px;
  `;
</script>

<style>
  div {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>

<div {style}>
  <slot />
</div>
