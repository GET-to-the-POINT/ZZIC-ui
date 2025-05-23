import { error, redirect } from '@sveltejs/kit';

export const prerender = false;

export const actions = {
	default: async ({ fetch }) => {
		const response = await fetch('https://zzic-api.xiyo.dev/auth/sign-out', {
			method: 'POST',
			credentials: 'include'
		});
		if (!response.ok) {
			throw error(response.status, 'Failed to sign out');
		}
		throw redirect(303, '/');
	}
};
