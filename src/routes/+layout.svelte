<script>
	import '../app.postcss';
</script>

<header class="bg-pink-300 absolute w-screen">
	<nav>
		<ul class="p-0 flex flex-row gap-2">
			<li>Quick navigation</li>
			<li>About me</li>
			<li>Shipping</li>
		</ul>
	</nav>
</header>
>
<main class="min-h-100">
	<slot />
</main>
<footer class="h-[100px] bg-slate-400 absolute bottom-0 w-screen">
	Neznayer Art shop. All rights reserved.
</footer>
