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
                        wind: "Wind",
                        english: "English",
                        norwegian: "Norwegian",
                        PlaceNotFoundError: "Could not find location",

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
                        wind: "Vind",
                        english: "Engelsk",
                        norwegian: "Norsk",
                        PlaceNotFoundError: "Fant ikke stedet",
                    },
                    // Add more languages here
                };

                // Default to Browser language - or English if browser language is not valid
                this.texts = allTexts[language] || allTexts[navigator.language] || allTexts["en-EN"];
            }
        }