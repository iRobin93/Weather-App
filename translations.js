export class Translations {
    constructor(language = "en-EN") {
        this.language = language;

        const allTexts = {
            "en-EN": {
                settings: "Settings",
                location: "Location",
                appBackgroundColor: "App Background color",
                cardBackgroundColor: "Weather-Card Background color",
                textColor: "Text color",
                language: "Language",
                days: "Days to show",
                celsius: "Show Celsius",
                save: "Save",
                cancel: "Cancel",
                english: "English",
                norwegian: "Norwegian",
                placeNotFoundError: "Could not find location",
                precipitation: "Precipitation",
                humidity: "Humidity",
                wind: "Wind",


            },
            "nb-NO": {
                settings: "Innstillinger",
                location: "Sted",
                appBackgroundColor: "App Bakgrunnsfarge",
                cardBackgroundColor: "Vær-Kort Bakgrunnsfarge",
                textColor: "Tekstfarge",
                language: "Språk",
                days: "Vis dager",
                celsius: "Vis Celsius",
                save: "Lagre",
                cancel: "Avbryt",
                english: "Engelsk",
                norwegian: "Norsk",
                PlaceNotFoundError: "Fant ikke stedet",
                precipitation: "Nedbør",
                humidity: "Luftfuktighet",
                wind: "Vind",
            },
            // Add more languages here
        };

        // Default to Browser language - or English if browser language is not valid
        this.texts = allTexts[language] || allTexts[navigator.language] || allTexts["en-EN"];
    }
}