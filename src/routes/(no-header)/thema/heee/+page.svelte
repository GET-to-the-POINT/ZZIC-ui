<script>
	import { applyAction, enhance } from '$app/forms';

	const todos = [
		{ id: 1, title: 'Demo 1', description: '설명', done: false },
		{ id: 2, title: 'Demo 2', description: '설명', done: true }
	];

	const yetTodos = todos.filter((t) => !t.done);
	const doneTodos = todos.filter((t) => t.done);

	const transition = () => {
		return async ({ result, update }) => {
			if (!document.startViewTransition) await applyAction(result);
			document.startViewTransition(async () => {
				await update();
			});
		};
	};
</script>

{#snippet zzic(data)}
	<form method="POST" use:enhance={transition} class="todo"
				style:view-transition-name={['zzic', data.id].join('-')}>
		<input type="hidden" name="id" bind:value={data.id} />
		<button type="submit" class="zzic-left"
						data-done={data.done}
						style:visibility={data.done ? 'hidden' : 'visible'}
						formaction="?/done">
			<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
				<path d="M23 45C35.1503 45 45 35.1503 45 23C45 10.8497 35.1503 1 23 1C10.8497 1 1 10.8497 1 23C1 35.1503 10.8497 45 23 45Z"
							stroke="#E2E4E8" stroke-width="2" stroke-miterlimit="10" />
			</svg>
		</button>

		<a href={`/${data.id}`} class="zzic-right">
			<div class="container">
				<div>{data.title}</div>
			</div>
		</a>
	</form>
{/snippet}

<header>
	<h1 style:view-transition-name="h1">ZZIC</h1>
</header>

<div class="container">
	<form id="create" method="POST" use:enhance={transition}>
		<textarea
			name="title"
			placeholder="무엇을 해야하나요?"
			class="styled-input"
		></textarea>
		<button type="submit" formaction="?/add">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V7H2C1.44771 7 1 7.44771 1 8C1 8.55228 1.44771 9 2 9H7V14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14V9H14C14.5523 9 15 8.5523 15 8C15 7.44772 14.5523 7 14 7H9V2Z"
							fill="white" />
			</svg>
		</button>
	</form>

	<div style:view-transition-class="zzic">
		<h2 style:view-transition-name="yet">할 일</h2>
		<ul id="todos">
			{#each yetTodos as todo (['yet', todo.id].join('-'))}
				{@render zzic(todo)}
			{/each}
		</ul>
	</div>

	<hr style:view-transition-name="divide" />

	<h2 style:view-transition-name="done">한 일</h2>
	<ul id="todos">
		{#each doneTodos as todo (['done', todo.id].join('-'))}
			{@render zzic(todo)}
		{/each}
	</ul>
</div>

<style>
    ul {
        padding-inline-start: unset;
    }

    #create {
        position: relative;
    }

    #create textarea {
        border: none;
        width: 100%;
        border-radius: 1rem;
        box-sizing: border-box;
        padding-block: 0.75rem;
        padding-inline: 1rem;
        outline: none;
        transition: height 0.3s ease;
        height: 3rem;
    }

    #create textarea:focus {
        height: 6rem;
    }

    #create button {
        position: absolute;
        box-sizing: border-box;
        inset-block-end: 0.75rem;
        inset-inline-end: 1rem;
        border-radius: 99999rem;
        padding: 0.5rem;
        border: unset;
        background-color: black;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    #create button:hover {
        background-color: mediumseagreen;
    }

    #create button svg {
        display: block;
    }

    .todo {
        display: grid;
        grid-template-columns: auto 1fr auto;
    }

    .todo a {
        text-decoration: unset;
    }

    #todos {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .zzic-left {
        background-color: unset;
        cursor: pointer;
        block-size: 90px;
        min-inline-size: 90px;
        border: 15px solid transparent;
        border-image-source: url('zzic-left.svg');
        border-image-slice: 15 15 15 15 fill;
        border-image-repeat: stretch;
        box-sizing: border-box;
    }

    .zzic-right {
        overflow: auto;
        white-space: nowrap;
        color: white;
        block-size: 90px;
        min-inline-size: 90px;
        border: 15px solid transparent;
        border-image-source: url('zzic-right.svg');
        border-image-slice: 15 15 15 15 fill;
        border-image-repeat: stretch;
        box-sizing: border-box;
    }

    .zzic-right .container {
        display: flex;
        justify-content: space-between;
    }

    .zzic-right .container button {
        background-color: unset;
        padding: unset;
        border: unset;
        cursor: pointer;
    }
</style>