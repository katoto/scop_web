<template>
  <footer class="bg-light py-5">
    <div class="container">
      <div class="footer-nav">
        <div class="footer-nav-item">
          <h5>{{ $t('nav.about') }}</h5>
          <ul class="list-unstyled">
            <li>
              <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-nav-item">
          <h5>{{ $t('nav.product') }}</h5>
          <ul class="list-unstyled">
            <li>
              <NuxtLink :to="localePath('/product0')">{{ $t('nav.product') }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-nav-item">
          <h5>{{ $t('nav.r_and_d') }}</h5>
          <ul class="list-unstyled">
            <li>
              <NuxtLink :to="localePath('/rd')">{{ $t('nav.rd') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/rdfeedback')">{{ $t('nav.rdFeedback') }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-nav-item">
          <h5>{{ $t('nav.news') }}</h5>
          <ul class="list-unstyled">
            <li>
              <NuxtLink :to="localePath('/news')">{{ $t('nav.news') }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-nav-item">
          <h5>{{ $t('nav.contact') }}</h5>
          <ul class="list-unstyled">
            <li>
              <NuxtLink :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="footer-copyright">
        <p class="mb-0 text-center">&copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style lang="less" scoped>
footer {
  .footer-nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 2rem;

    .footer-nav-item {
      flex: 1;
      min-width: 160px;
      max-width: 200px;

      h5 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: #333;
        font-weight: 600;
        position: relative;
        padding-bottom: 8px;
      }

      ul {
        li {
          margin-bottom: 0.8rem;

          a {
            color: #666;
            text-decoration: none;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            position: relative;
            padding-left: 0;
            display: inline-block;
            cursor: pointer;

            &::before {
              content: '';
              position: absolute;
              left: 0;
              bottom: -2px;
              width: 0;
              height: 1px;
              background-color: #C9A14D;
              transition: width 0.3s ease;
            }

            &:hover {
              color: #C9A14D;
              padding-left: 8px;

              &::before {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

  hr {
    margin: 2rem 0;
    border-color: #eee;
  }

  .footer-copyright {
    text-align: center;
    color: #666;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 768px) {
  footer {
    padding: 2rem 0 !important;

    .footer-nav {
      flex-direction: column;
      gap: 0;
      margin-bottom: 1rem;

      .footer-nav-item {
        flex: 0 0 100%;
        max-width: none;
        min-width: auto;
        width: 100%;
        padding: 0.75rem 0;
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
        }

        h5 {
          display: none;
        }

        ul {
          margin: 0;
          padding: 0;

          li {
            margin: 0;
            padding: 0;

            a {
              font-size: 0.9rem;
              display: block;
              padding: 0.5rem 0;
            }
          }
        }

        &:only-child {
          width: auto;
          max-width: 300px;
          margin: 0 auto;
          border-bottom: none;
        }
      }
    }

    hr {
      display: none;
    }

    .footer-copyright {
      font-size: 0.85rem;
      margin-top: 1rem;
    }
  }
}

@media screen and (max-width: 480px) {
  footer {
    .footer-nav {
      .footer-nav-item {
        &:only-child {
          margin: 0;
        }
      }
    }
  }
}
</style>