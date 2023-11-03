<script setup lang="ts">

interface CardProps {
  position: 'left' | 'right'
}

const props = withDefaults(defineProps<CardProps>(), {
  position: 'left'
})

</script>
<template>
  <div :class="['block w-fit relative shadow-2xl my-8 bg-gradient-linear-[(180deg,_#efada3_0%,_#ff674d_40%,_#2f2a95_100%)]', props.position === 'left' ? 'mr-auto' : 'ml-auto' ]">
    <div :class="['bg-grayLighter py-4 px-10', props.position === 'left' ? 'ml-1' : 'mr-1' ]">
      <slot />
    </div>
  </div>
</template>

