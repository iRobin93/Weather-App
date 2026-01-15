export function formatWeather(day, options) {
  if (!day) return {}

  const { locale, showCelcius, orientation, weatherCard } = options
  const date = new Date(day.date)

  return {
    temperature: showCelcius
      ? `${Math.round(day.temperature)}°`
      : `${Math.round(day.temperature * 9 / 5 + 32)}°F`,

    weekDay:
      orientation === 'landscape'
        ? capitalize(date.toLocaleDateString(locale, { weekday: weatherCard ? "short" : "long" }))
        : capitalize(date.toLocaleDateString(locale, { weekday: 'long' })),

    icon: day.condition === 'clear'
      ? './png/clearsky_day.png'
      : `./png/${day.condition}.png`
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace('.', '')
}
