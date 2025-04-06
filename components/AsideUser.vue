<script setup lang="ts"></script>

<template>
	<div class="user-container">
		<section class="user"></section>
	</div>
</template>

<style scoped lang="scss">
@use "../assets/scss/abstracts" as *;
@use "../assets/scss/mixins" as *;

.user-container {
	position: relative;
}

.user {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;

	padding: 10px 20px;
	height: 70px;

	@include shadows;
	border: 1px solid var(--border-color);
	border-radius: $border-radius-md;
	user-select: none;
	font-family: $font-family-info;
	letter-spacing: 0.5px;

	.user__image {
		width: 45px;
		border: 1px solid var(--text-color-muted);
		border-radius: $border-radius-circle;
	}

	.user-info {
		display: flex;
		flex-direction: column;
		line-height: 25px;
		font-weight: $font-weight-semibold;
		font-size: $font-size-md;

		.user-info__email {
			color: var(--text-color-secondary);
		}
	}
}

.tooltip {
	position: absolute;
	top: -10px;
	left: 50%;
	padding: 10px;

	width: 300px;

	z-index: 1000;
	transform: translateX(-50%) translateY(-100%);

	background-color: var(--background-color);
	border: 1px solid var(--border-color);
	border-radius: $border-radius-md;
	box-shadow: 0 2px 10px var(--border-color);
	font-family: $font-family-info;

	&::after {
		content: "";
		position: absolute;
		bottom: -10px;
		left: 50%;

		transform: translateX(-50%);

		border-width: 10px 10px 0;
		border-style: solid;
		border-color: var(--border-color) transparent transparent transparent;
	}

	.tooltip-info__property {
		margin: 0 0 5px;
		font-weight: $font-weight-semibold;
	}

	.tooltip-info__value > pre {
		display: inline;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-bottom: 5px;
	}
}
</style>
