<script>
  export let theme;

  $: style = `
    color: ${theme.colors.text};
    border: ${theme.border.width}px solid ${theme.colors.text};
    background-color: ${theme.colors.body};
    padding: ${theme.spacing.unit * 5}px;
  `;
</script>

<style>
  div {
    width: 33%;
    display: flex;
    position: relative;
    width: 800px;
    margin: 0 auto;
  }
</style>

<div {style}>
  <slot />
</div>
