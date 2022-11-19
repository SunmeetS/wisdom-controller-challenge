<template>
    <button>
        <slot>
        </slot>
    </button>
</template>

<script setup lang="ts">
</script>

<style scoped>

button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    background: #F1C12B;
    border-radius: 4px;
    width: 100%;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
}
</style>