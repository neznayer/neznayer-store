<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
</script>

<button class="h-[30px] w-[30px] bg-dark-gray rounded-[7px] block flex-0 relative">
	<Fa
		icon={faSearch}
		color="white"
		class="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]"
	/>
</button>
