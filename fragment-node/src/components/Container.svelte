<script>
  export let theme;

  $: style = `
    border: 3px solid ${theme.colors.highlight};
    padding: ${theme.spacing.unit * 3}px;
  `;
</script>

<style>
  div {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>

<div {style}>
  <slot />
</div>
