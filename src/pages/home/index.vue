<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);

  html, body {
    padding: 0;
    margin: 0;
    background-color: #fafffd;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  .content {
    align-items: center;
    display: flex;
    min-height: 100vh;
    justify-content: center;
  }

  .content-inner {
    display: block;
    text-align:center;
  }

  .logo {
    width: 200px;
    height: 200px;
  }

  .title {
    color: #424242;
    display: block;
    font-size: 5rem;
    line-height: 5rem;
    margin-bottom: 2rem;
    margin-top: 0;
    font-weight: 100;
    text-align: center;
  }

  .subtitle {
    color: #2e805b;
    display: block;
    font-size: 2rem;
    font-weight: 200;
    text-align: center;
  }
</style>

<template>
  <div class="content">
    <div class="content-inner">
      <img
        class="logo"
        :src="require('@/assets/img/logo.png')"
      />
      <h1 class="title">
        Vueture
      </h1>
      <small class="subtitle">
        Make something awesome!
      </small>
    </div>
  </div>
</template>
