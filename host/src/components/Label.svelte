<script>
  export let theme;

  $: style = `
    color: ${theme.colors.body};
    background-color: ${theme.colors.text};
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
