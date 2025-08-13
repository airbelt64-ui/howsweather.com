
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const city = query.city || 'Seoul'
  const apiKey = process.env.NUXT_PUBLIC_OPENWEATHER_API_KEY

  const response = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )

  return response
})
