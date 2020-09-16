<template>
	<div class="view fr">
		<iframe :src="src"></iframe>
	</div>
</template>

<script>
	export default {
		name: 'MainIframe',
		props: {
			src: String
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.view {
		width: 100%;
		height: 100%;
	}
	
	iframe{
		width: 100%;
		height: 100%;
	}
</style>
