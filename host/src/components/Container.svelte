<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  export let theme;

  $: cls = css`
    width: 33%;
    display: flex;
    position: relative;
    color: ${theme.colors.text};
    border: ${theme.border.width}px solid ${theme.colors.text};
    background-color: ${theme.colors.body};
    padding: ${theme.spacing.unit * 5}px;
    width: 800px;
    margin: 0 auto;
  `;
</script>

<div class={cls}>
  <slot />
</div>
