<script setup lang="ts">
</script>

<template>
  <div>
    <Navbar />
    <main class="main-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="less" scoped>
.main-content {
  // padding-top: 76px; // Height of navbar
  min-height: calc(100vh - 300px); // 减去导航栏和页脚的高度
}

// Global styles
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

// Bootstrap overrides
.btn {
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;

  &-primary {
    background-color: #007bff;
    border-color: #007bff;

    &:hover {
      background-color: darken(#007bff, 10%);
      border-color: darken(#007bff, 10%);
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
