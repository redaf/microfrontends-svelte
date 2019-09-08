<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  export let theme;

  $: cls = css`
    background-color: ${theme.colors.body};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.text};
    margin-top: ${theme.spacing.unit * 10}px;
    margin-right: ${theme.spacing.unit}px;
    padding: ${theme.spacing.unit}px ${theme.spacing.unit * 3}px;

    &:active {
      background-color: ${theme.colors.highlight};
    }
  `;
</script>

<button class={cls} on:click>
  <slot />
</button>
