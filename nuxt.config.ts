export default defineNuxtConfig({
  app: {
    head: {
      title: "How's Weather",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '현지 옷차림 사진 기반 날씨 서비스' }
      ]
    }
  },
  nitro: { preset: 'vercel' },
  runtimeConfig: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    public: {
      NUXT_PUBLIC_OPENWEATHER_API_KEY: process.env.NUXT_PUBLIC_OPENWEATHER_API_KEY
    }
  }
})
