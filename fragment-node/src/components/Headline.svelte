<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  export let theme;

  $: cls = css`
    color: ${theme.colors.highlight};
  `;
</script>

<h1 class={cls}>
  <slot />
</h1>
