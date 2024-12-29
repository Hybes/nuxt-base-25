<script setup>
import * as z from 'zod'
useSeoMeta({
	title: 'Nuxt Base 25',
	description: 'Nuxt Base 25 - By Hybes'
})

const schema = z.object({
	name: z.string().min(3, 'Must be at least 3 characters'),
	email: z.string().email('Invalid email')
})

const state = reactive({
	name: undefined,
	email: undefined
})

const toast = useToast()
async function onSubmit(event) {
	try {
		const response = await $fetch('/api/email', event)
		if (response.success) {
			toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
		} else {
			toast.add({ title: 'Error', description: 'The form has not been submitted.', color: 'error' })
		}
	} catch (error) {
		toast.add({ title: 'Error', description: 'The form has not been submitted.', color: 'error' })
	}
}
</script>

<template>
	<main class="prose dark:prose-invert container p-4">
		<h1>Hello World</h1>
		<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h2>

		<div class="my-8 w-full overflow-hidden">
			<div class="animate-slideshow flex">
				<div v-for="i in 2" :key="i" class="flex min-w-full justify-around">
					<NuxtImg v-for="j in 4" :key="j" src="https://placehold.co/100x100" class="mx-2 h-12" alt="Logo 2" />
				</div>
			</div>
		</div>

		<NuxtForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
			<NuxtFormField label="Name" name="name">
				<NuxtInput v-model="state.name" />
			</NuxtFormField>
			<NuxtFormField label="Email" name="email">
				<NuxtInput v-model="state.email" />
			</NuxtFormField>
			<NuxtButton type="submit">Submit</NuxtButton>
		</NuxtForm>
	</main>
</template>
