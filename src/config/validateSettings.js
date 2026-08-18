export function validateSettings(settings) {
    if(typeof settings === "object") {
        if(typeof settings.world === "object" &&
            typeof settings.grass === "object" &&
            typeof settings.rabbit === "object" &&
            typeof settings.fox === "object" &&
            typeof settings.statistics === "object"
         ) {
            
         }
        else {
            throw new Error(
                `Un des paramètres de ${settings} n'est pas un objet.`
                );
        }
    }
    else {
        throw new Error(
            `${settings} n'est pas un objet.`
        );
    }
}