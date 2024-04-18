<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$components/Header/Header.svelte';
	import { baseColors } from '$lib';
	const listItems: { [key: string]: string }[] = [
		{
			icon: 'star2',
			text: 'new',
			stroke: '1rem',
			link: '',
			id: 'new'
		},
		{
			icon: 'moon',
			text: 'gradient',
			stroke: '.5rem',
			link: './gradient',
			id: 'gradient'
		},
		{
			icon: 'random3',
			text: 'create',
			stroke: '.7rem',
			link: './create',
			id: 'create'
		},
		{
			icon: 'heart3',
			text: 'collection',
			stroke: '1rem',
			link: './collection',
			id: 'collection'
		}
	];

	function toggleActiveClasses(e: CustomEvent) {
		const activeLinks = document.querySelectorAll('.active') as NodeListOf<HTMLElement>;
		const { target, currentTarget } = e;
		if (target === currentTarget) return;
		activeLinks.forEach((activeLink) => activeLink.classList.remove('active'));
		if (target instanceof Element) target.closest('.link-page')?.classList.add('active');
	}
	let tagColor = '',
		color = 'bill';
	function setColor(e: CustomEvent) {
		tagColor = e.detail.color;
	}
</script>

<svelte:window
	on:popstate={(e) => {
		const id = e.target.location.pathname.replace(/^\/|\/$/g, '').trim();
		document.querySelectorAll('.active').forEach((item) => item.classList.remove('active'));
		if (id === '') {
			document.querySelector('#new')?.classList.add('active');
		}
		document.querySelector(`#${id}`)?.classList.add('active');
	}}
/>
<Header on:handleColor={setColor} {baseColors} />
<main class="main min-h-full flex justify-between gap-5">
	<section
		class="main--section__1 pl-[2.5rem] z-50 min-w-[5rem] max-w-[5rem] sm:max-w-[24rem] sm:min-w-[24rem] absolute sm:sticky h-[85vh] top-[8rem] mt-[8rem] overflow-y-scroll"
	>
		<menu
			on:click={toggleActiveClasses}
			class="bg-white capitalize control--pallete border-t-[.1rem] border-t-[#f8f8f8] sm:border-t-0 fixed sm:relative left-1/2 bottom-[-.5rem] -translate-x-1/2 gap-[.5rem] w-full flex sm:flex-col items-center justify-around p-[.5rem] bg-red-400 sm:p-[1rem] sm:items-start bg-wh ite z-10 text-gray-800 text-[1.6rem]"
		>
			{#each listItems as item, id}
				<li
					id={item.id}
					class="{id === 0
						? `active`
						: ``} link-page w-full mb-[.5rem] rounded-[.8rem] sm:rounded-[1rem]"
					data-btn="btn"
					data-content="new"
				>
					<a
						href="/{item.link}"
						class="flex flex-col sm:flex-row gap-[.8rem] px-[.8rem] py-[1rem] text-[1.7rem] items-center"
					>
						<span>
							<svg
								class="w-[2.8rem] h-[2.8rem] sm:w-[2.2rem] stroke-[{item.stroke}] sm:h-[2.2rem] stroke-black text-transparent"
							>
								<use href="icon.svg#{item.icon}"></use>
							</svg>
						</span>
						<span>{item.text}</span>
					</a>
				</li>
			{/each}
		</menu>
	</section>
	<div class="w-full p-5 mt-[10rem]">
		<slot />
	</div>
</main>
