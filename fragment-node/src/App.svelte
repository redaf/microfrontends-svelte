<script>
  import Button from "./components/Button.svelte";
  import Container from "./components/Container.svelte";
  import Headline from "./components/Headline.svelte";
  import Label from "./components/Label.svelte";

  export let theme;
  export let counter;
  export let onIncrementCounter;
</script>

<Container {theme}>
  <Label {theme}>fragment</Label>
  <Headline {theme}>Hello svelte people!</Headline>
  <h2>
    Count:
    <strong>{counter}</strong>
  </h2>
  <Button {theme} on:click={onIncrementCounter}>Increment</Button>
</Container>
