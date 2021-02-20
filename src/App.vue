<template>
  <div id="app">
    <router-link to='/radio'>To radio component</router-link><br>
    <router-link to='/radioButton'>To radioButton component</router-link><br>
    <router-link to='/checkbox'>To checkbox component</router-link><br>
    <router-link to='/checkboxGroup'>To checkboxGroup component</router-link><br>
    <router-link to='/indeterminate'>To indeterminate component</router-link><br>
    <router-link to='/input'>To input component</router-link><br>
    <router-link to='/inputNumber'>To inputNumber component</router-link><br>
    <router-link to='/select'>To select component</router-link><br>
    <router-link to='/cascader'>To cascader component</router-link><br>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
