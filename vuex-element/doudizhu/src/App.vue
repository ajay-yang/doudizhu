<template>
	<div class='container'>
		<div id="app">
    	<router-view></router-view>
  	</div>
	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	*{
		margin:0px;
		padding:0px;
	}
	.container{
		width:auto;
		height:96vh;
		background-image: url(assets/bg.jpg);
		background-size: cover;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
