<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  export let theme;

  $: cls = css`
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${theme.colors.highlight};
    color: ${theme.colors.body};
    padding: ${theme.spacing.unit}px ${theme.spacing.unit * 2}px;
  `;
</script>

<div class={cls}>
  <slot />
</div>
