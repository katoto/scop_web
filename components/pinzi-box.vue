<template>
  <div class="pinzi-box">
    <div class="pinzi-content">
      <div class="pinzi-image">
        <img :src="image" :alt="title" class="img-fluid">
      </div>
      <div class="pinzi-text">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.pinzi-box {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.pinzi-box:hover {
  transform: translateY(-5px);
}

.pinzi-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pinzi-image {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 宽高比 */
  overflow: hidden;
}

.pinzi-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例并填充容器 */
  object-position: center; /* 图片居中显示 */
}

.pinzi-text {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pinzi-text h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.pinzi-text p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}
</style> 