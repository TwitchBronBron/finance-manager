<script lang="ts">
	import BoxArrowRight from 'svelte-bootstrap-icons/lib/BoxArrowRight.svelte';
	import BoxArrowInLeft from 'svelte-bootstrap-icons/lib/BoxArrowInLeft.svelte';
	import * as firebase from '$lib/firebase';
	import { user } from './firebase';
	import ProfileIcon from './ProfileIcon.svelte';
</script>

<nav class="navbar bg-primary navbar-expand-sm">
	<div class="container-fluid">
		<a class="navbar-brand text-white fw-bold">Finance Manager</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav text-white justify-content-end flex-grow-1 pe-3">
					<li class="nav-item dropdown">
						<a data-bs-toggle="dropdown" aria-expanded="false">
							<ProfileIcon />
						</a>
						<ul class="dropdown-menu dropdown-menu-end">
							{#if !$user}
								<li>
									<a class="dropdown-item" on:click={firebase.signIn}>
										<BoxArrowInLeft />
										Sign in
									</a>
								</li>
							{/if}
							{#if $user}
								<!-- <li><hr class="dropdown-divider" /></li> -->
								<li>
									<a class="dropdown-item" on:click={firebase.signOut}>
										<BoxArrowRight />
										Sign out
									</a>
								</li>
							{/if}
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
