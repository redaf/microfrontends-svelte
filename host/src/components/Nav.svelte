<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  export let theme;

  $: cls = css`
    background-color: ${theme.colors.body};
    border: ${theme.border.width}px dashed ${theme.colors.text};
    padding: ${theme.spacing.unit * 3}px;
    margin-right: ${theme.spacing.unit * 3}px;
    width: 33%;

    a,
    a:hover,
    a:visited {
      color: ${theme.colors.highlight};
    }
  `;
</script>

<nav class={cls}>
  <slot />
</nav>
