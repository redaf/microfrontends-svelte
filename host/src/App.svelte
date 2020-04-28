<script>
  import AsyncComponent from "./AsyncComponent.svelte";

  import Badge from "./components/Badge.svelte";
  import Button from "./components/Button.svelte";
  import Container from "./components/Container.svelte";
  import Label from "./components/Label.svelte";
  import Main from "./components/Main.svelte";
  import Nav from "./components/Nav.svelte";
  import ThemeSwitcher from "./components/ThemeSwitcher.svelte";

  import { light, dark } from "./themes.js";

  let theme = light;

  let counter = 0;

  function incrementCounter() {
    counter += 1;
  }

  function setTheme(th) {
    theme = th;
  }

  const prefix = "/fragments/node";
  const loadManifest = () =>
    fetch(`${prefix}/manifest.json`).then(res => res.json());
</script>

<Container {theme}>
  <Label {theme}>host</Label>
  <Nav {theme}>
    <h3>
      Menu
      <Badge {theme}>{counter}</Badge>
    </h3>
    <a href="/">Fragment</a>
    <br />
    <Button {theme} on:click={incrementCounter}>Increment</Button>
    <ThemeSwitcher
      {theme}
      on:setLightTheme={() => setTheme(light)}
      on:setDarkTheme={() => setTheme(dark)} />
  </Nav>
  <Main>
    <AsyncComponent
      {prefix}
      {loadManifest}
      {theme}
      {counter}
      onIncrementCounter={incrementCounter} />
  </Main>
</Container>
