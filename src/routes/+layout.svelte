<script>
	import '../app.postcss';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
</script>

<header class="bg-light-gray absolute w-screen flex justify-around">
	<nav>
		<ul class="flex flex-row gap-2">
			<li>Quick navigation</li>
			<li>About me</li>
			<li>Shipping</li>
		</ul>
	</nav>
	<div class="h-8 w-8 text-center">
		<Fa icon={faCartShopping} color="dark-gray" class="" />
	</div>
</header>
>
<main class="min-h-100">
	<slot />
</main>
<footer class="h-[100px] bg-light-gray absolute bottom-0 w-screen">
	Neznayer Art shop. All rights reserved.
</footer>
