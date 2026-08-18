export const defaultSettings = {
    world: {
        width: 960,
        height: 590,
        grassGridColumns: 40,
        grassGridRows: 25,
        turnsPerDay: 10,
        seed: 12345,
        maxDays: 365,
    },

    grass: {
        initialLevelMin: 40,
        initialLevelMax: 80,
        growthPerTurn: 0.15,
        consumptionPerMeal: 20,
        energyPerUnit: 0.5,
    },

    rabbit: {
        initialPopulation: 10,
        populationLimit: 500,
        initialEnergy: 70,
        maxEnergy: 100,
        speed: 2.5,
        movementEnergyCost: 0.2,
        grassPerceptionRadius: 80,
        foxPerceptionRadius: 100,
        reproductionEnergyThreshold: 80,
        reproductionEnergyCost: 35,
        reproductionCooldownTurns: 50,
        maxAgeTurns: 1200,
    },

    fox: {
        initialPopulation: 3,
        populationLimit: 200,
        initialEnergy: 90,
        maxEnergy: 120,
        speed: 3.2,
        movementEnergyCost: 0.35,
        rabbitPerceptionRadius: 150,
        captureRadius: 12,
        energyPerCapture: 45,
        reproductionEnergyThreshold: 100,
        reproductionEnergyCost: 45,
        reproductionCooldownTurns: 100,
        maxAgeTurns: 1800,  
    },

    statistics: {
        collectionIntervalTurns: 10,
        maxDisplayedPoints: 200,
    },
};