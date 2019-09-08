<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  export let theme;

  $: cls = css`
    border: 3px solid ${theme.colors.highlight};
    padding: ${theme.spacing.unit * 3}px;
    width: 100%;
    height: 100%;
    position: relative;
  `;
</script>

<div class={cls}>
  <slot />
</div>
