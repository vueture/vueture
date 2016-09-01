<style lang="scss">
  // Home
  //
  // Home component
  //
  // Styleguide pages.home
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);

  html, body {
    background-color: #FFF3E0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  .content {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .content__inner {
    display: block;
  }

  .title {
    color: #FF9800;
    display: block;
    font-size: 5rem;
    font-weight: 100;
    text-align: center;
  }

  .subtitle {
    color: #424242;
    display: block;
    font-size: 2.5rem;
    font-weight: 200;
    text-align: center;
  }
</style>
<template>
  <div class="content">
    <div class="content__inner">
      <h1 class="title">
        Lucevi
      </h1>
      <small class="subtitle">
        Make something awesome!
      </small>
    </div>
  </div>
</template>
