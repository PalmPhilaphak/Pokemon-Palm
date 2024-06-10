// nuxt-config.d.ts
import { NuxtConfig } from '@nuxt/types'

declare module '@nuxt/types' {
  interface NuxtConfig {
    basePath?: string
  }
}
