<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Memory Card Game</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/memory">Play</router-link>
        </li>
        <li>
          <router-link to="/highscores">High Scores</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "../../assets/css/colorPalette.scss";

header {
  background-color: $primary-color;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  background-color: $primary-button-color;
  border: 1px solid #0b68a7;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: left;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
