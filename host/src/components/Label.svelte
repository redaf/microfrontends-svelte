<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  export let theme;

  $: cls = css`
    position: absolute;
    top: 0;
    right: 0;
    color: ${theme.colors.body};
    background-color: ${theme.colors.text};
    padding: ${theme.spacing.unit}px ${theme.spacing.unit * 2}px;
  `;
</script>

<div class={cls}>
  <slot />
</div>
