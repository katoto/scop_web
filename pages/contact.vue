<template>
  <div class="contact-page">
    <!-- 页面标题 -->
    <div class="page-header bg-light py-5">
      <div class="container">
        <h1 class="display-4">{{ $t('contact.title') }}</h1>
        <p class="lead">{{ $t('contact.subtitle') }}</p>
      </div>
    </div>

    <!-- 联系信息 -->
    <section class="contact-info py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <h3 class="card-title mb-4">{{ $t('contact.headquarters.title') }}</h3>
                <div class="mb-4">
                  <h5>{{ $t('contact.headquarters.address.title') }}</h5>
                  <p>{{ $t('contact.headquarters.address.content') }}</p>
                </div>
                <div class="mb-4">
                  <h5>{{ $t('contact.headquarters.phone.title') }}</h5>
                  <p>{{ $t('contact.headquarters.phone.content') }}</p>
                </div>
                <div class="mb-4">
                  <h5>{{ $t('contact.headquarters.email.title') }}</h5>
                  <p>{{ $t('contact.headquarters.email.content') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <h3 class="card-title mb-4">{{ $t('contact.global.title') }}</h3>
                <div class="mb-4">
                  <h5>{{ $t('contact.global.asia.title') }}</h5>
                  <p>{{ $t('contact.global.asia.content') }}</p>
                </div>
                <div class="mb-4">
                  <h5>{{ $t('contact.global.europe.title') }}</h5>
                  <p>{{ $t('contact.global.europe.content') }}</p>
                </div>
                <div class="mb-4">
                  <h5>{{ $t('contact.global.america.title') }}</h5>
                  <p>{{ $t('contact.global.america.content') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系表单 -->
    <section class="contact-form py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-5">
                <h3 class="text-center mb-4">{{ $t('contact.form.title') }}</h3>
                <form @submit.prevent="submitForm">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="name" class="form-label">{{ $t('contact.form.name') }}</label>
                      <input type="text" class="form-control" id="name" v-model="form.name" required>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="email" class="form-label">{{ $t('contact.form.email') }}</label>
                      <input type="email" class="form-control" id="email" v-model="form.email" required>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="subject" class="form-label">{{ $t('contact.form.subject') }}</label>
                    <input type="text" class="form-control" id="subject" v-model="form.subject" required>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">{{ $t('contact.form.message') }}</label>
                    <textarea class="form-control" id="message" rows="5" v-model="form.message" required></textarea>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">{{ $t('contact.form.submit') }}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // 处理表单提交
  console.log('Form submitted:', form.value)
  // 这里可以添加表单提交逻辑
}
</script>

<style lang="less" scoped>
.contact-page {
  .page-header {
    background-color: #f8f9fa;
    margin-bottom: 2rem;
  }

  .card {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  .form-control {
    &:focus {
      box-shadow: none;
      border-color: #007bff;
    }
  }

  .btn-primary {
    padding: 0.75rem 2rem;
  }
}
</style> 