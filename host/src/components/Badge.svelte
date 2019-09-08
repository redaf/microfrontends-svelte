<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  export let theme;

  $: cls = css`
    display: inline-block;
    background-color: ${theme.colors.highlight};
    padding: ${theme.spacing.unit / 2}px ${theme.spacing.unit * 2}px;
    color: ${theme.colors.body};
    border-radius: 10px;
    margin-left: ${theme.spacing.unit}px;
  `;
</script>

<span class={cls}>
  <slot />
</span>
