export function formatWeather(day, options) {
  if (!day) return {};

  const { locale, showFahrenheit, orientation, weatherCard, contentBlock } =
    options;
  const date = new Date(day.date);

  return {
    temperature: showFahrenheit
      ? `${
          contentBlock.properties?.showDecimals
            ? ((day.temperature * 9) / 5 + 32).toFixed(1)
            : Math.round((day.temperature * 9) / 5 + 32)
        }°${contentBlock.properties?.showTempCharacter ? "F" : ""}`
      : `${
          contentBlock.properties?.showDecimals
            ? day.temperature.toFixed(1)
            : Math.round(day.temperature)
        }°${contentBlock.properties?.showTempCharacter ? "C" : ""}`,

    weekDay:
      orientation === "landscape"
        ? capitalize(
            date.toLocaleDateString(locale, {
              weekday: weatherCard ? "short" : "long",
            }),
          )
        : capitalize(date.toLocaleDateString(locale, { weekday: "long" })),

    icon:
      day.condition === "clear"
        ? "./png/clearsky_day.png"
        : `./png/${day.condition}.png`,
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(".", "");
}
