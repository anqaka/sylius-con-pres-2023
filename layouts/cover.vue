<template>
  <div class="slidev-layout cover text-center content-center">
    <Snowdog/>
    <div class="my-auto w-full">
      <slot/>
    </div>
    <div class="key-nav text-left mt-14 text-sm">
      <p>Keyboard navigation:</p>
      <kbd>right</kbd> / <kbd>space</kbd> - next step<br>
      <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> - previous step
    </div>
  </div>
</template>