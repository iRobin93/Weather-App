export class Translations {
    constructor(language = "en-EN") {
        this.language = language;

        const allTexts = {
            "en-EN": {
                settings: "Settings",
                location: "Location",
                appBackgroundColor: "App background color",
                cardBackgroundColor: "Weather-card background color",
                textColor: "Text color",
                language: "Language",
                days: "Days to show",
                celsius: "Show celsius",
                showLocation: "Show location",
                showTempCharacter: "Show temperature character",
                showDecimals: "Show decimals",
                forcePerspective: "Force perspective",
                noForcePerspective: "None",
                portraitForcePerspective: "Portrait",
                landscapeForcePerspective: "Landscape",
                save: "Save",
                cancel: "Cancel",
                english: "English",
                norwegian: "Norwegian",
                placeNotFoundError: "Could not find location",
                precipitation: "Precipitation",
                humidity: "Humidity",
                wind: "Wind",
                meterPerSecond: "m/s",
                


            },
            "nb-NO": {
                settings: "Innstillinger",
                location: "Sted",
                appBackgroundColor: "App bakgrunnsfarge",
                cardBackgroundColor: "Vær-kort bakgrunnsfarge",
                textColor: "Tekstfarge",
                language: "Språk",
                days: "Vis dager",
                celsius: "Vis celsius",
                showLocation: "Vis sted",
                showTempCharacter: "Vis temperatur bokstav",
                showDecimals: "Vis desimaler",
                forcePerspective: "Tving perspektiv",
                noForcePerspective: "Ingen",
                portraitForcePerspective: "Stående",
                landscapeForcePerspective: "Liggende",
                save: "Lagre",
                cancel: "Avbryt",
                english: "Engelsk",
                norwegian: "Norsk",
                PlaceNotFoundError: "Fant ikke stedet",
                precipitation: "Nedbør",
                humidity: "Luftfuktighet",
                wind: "Vind",
                meterPerSecond: "m/s",
            },
            // Add more languages here
        };

        // Default to Browser language - or English if browser language is not valid
        this.texts = allTexts[language] || allTexts[navigator.language] || allTexts["en-EN"];
    }
}