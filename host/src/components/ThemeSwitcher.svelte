<script>
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let theme;

  function onSetLightTheme() {
    dispatch("setLightTheme");
  }

  function onSetDarkTheme() {
    dispatch("setDarkTheme");
  }
</script>

<div>
  <Button {theme} on:click={onSetLightTheme}>Light</Button>
  <Button {theme} on:click={onSetDarkTheme}>Dark</Button>
</div>
