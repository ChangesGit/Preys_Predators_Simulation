export function validateSettings(settings) {
  assertObject(settings, "settings");

  assertObject(settings.world, "world");
  assertObject(settings.grass, "grass");
  assertObject(settings.rabbit, "rabbit");
  assertObject(settings.fox, "fox");
  assertObject(settings.statistics, "statistics");

  validateWorld(settings.world);
  validateGrass(settings.grass);
  validateRabbit(settings.rabbit);
  validateFox(settings.fox);
  validateStatistics(settings.statistics);

  return settings;
}

function validateWorld(world) {
  assertPositiveNumber(world.width, "world.width");
  assertPositiveNumber(world.height, "world.height");
  assertPositiveInteger(world.grassGridColumns, "world.grassGridColumns");
  assertPositiveInteger(world.grassGridRows, "world.grassGridRows");
  assertPositiveInteger(world.turnsPerDay, "world.turnsPerDay");
  assertInteger(world.seed, "world.seed");
  assertPositiveInteger(world.maxDays, "world.maxDays");
}

function validateGrass(grass) {
  assertNumberInRange(
    grass.initialLevelMin,
    0,
    100,
    "grass.initialLevelMin"
  );
  assertNumberInRange(
    grass.initialLevelMax,
    0,
    100,
    "grass.initialLevelMax"
  );
  assertNotGreaterThan(
    grass.initialLevelMin,
    grass.initialLevelMax,
    "grass.initialLevelMin",
    "grass.initialLevelMax"
  );
  assertNonNegativeNumber(grass.growthPerTurn, "grass.growthPerTurn");
  assertPositiveNumber(grass.consumptionPerMeal, "grass.consumptionPerMeal");
  assertMaximum(grass.consumptionPerMeal, 100, "grass.consumptionPerMeal");
  assertNonNegativeNumber(grass.energyPerUnit, "grass.energyPerUnit");
}

function validateRabbit(rabbit) {
  assertNonNegativeInteger(rabbit.initialPopulation, "rabbit.initialPopulation");
  assertPositiveInteger(rabbit.populationLimit, "rabbit.populationLimit");
  assertNotGreaterThan(
    rabbit.initialPopulation,
    rabbit.populationLimit,
    "rabbit.initialPopulation",
    "rabbit.populationLimit"
  );
  assertNonNegativeNumber(rabbit.initialEnergy, "rabbit.initialEnergy");
  assertPositiveNumber(rabbit.maxEnergy, "rabbit.maxEnergy");
  assertNotGreaterThan(
    rabbit.initialEnergy,
    rabbit.maxEnergy,
    "rabbit.initialEnergy",
    "rabbit.maxEnergy"
  );
  assertNonNegativeNumber(rabbit.speed, "rabbit.speed");
  assertNonNegativeNumber(rabbit.movementEnergyCost, "rabbit.movementEnergyCost");
  assertNonNegativeNumber(
    rabbit.grassPerceptionRadius,
    "rabbit.grassPerceptionRadius"
  );
  assertNonNegativeNumber(
    rabbit.foxPerceptionRadius,
    "rabbit.foxPerceptionRadius"
  );
  assertNonNegativeNumber(
    rabbit.reproductionEnergyThreshold,
    "rabbit.reproductionEnergyThreshold"
  );
  assertNotGreaterThan(
    rabbit.reproductionEnergyThreshold,
    rabbit.maxEnergy,
    "rabbit.reproductionEnergyThreshold",
    "rabbit.maxEnergy"
  );
  assertNonNegativeNumber(
    rabbit.reproductionEnergyCost,
    "rabbit.reproductionEnergyCost"
  );
  assertNonNegativeInteger(
    rabbit.reproductionCooldownTurns,
    "rabbit.reproductionCooldownTurns"
  );
  assertPositiveInteger(rabbit.maxAgeTurns, "rabbit.maxAgeTurns");
}

function validateFox(fox) {
  assertNonNegativeInteger(fox.initialPopulation, "fox.initialPopulation");
  assertPositiveInteger(fox.populationLimit, "fox.populationLimit");
  assertNotGreaterThan(
    fox.initialPopulation,
    fox.populationLimit,
    "fox.initialPopulation",
    "fox.populationLimit"
  );
  assertNonNegativeNumber(fox.initialEnergy, "fox.initialEnergy");
  assertPositiveNumber(fox.maxEnergy, "fox.maxEnergy");
  assertNotGreaterThan(
    fox.initialEnergy,
    fox.maxEnergy,
    "fox.initialEnergy",
    "fox.maxEnergy"
  );
  assertNonNegativeNumber(fox.speed, "fox.speed");
  assertNonNegativeNumber(fox.movementEnergyCost, "fox.movementEnergyCost");
  assertNonNegativeNumber(
    fox.rabbitPerceptionRadius,
    "fox.rabbitPerceptionRadius"
  );
  assertNonNegativeNumber(fox.captureRadius, "fox.captureRadius");
  assertNonNegativeNumber(fox.energyPerCapture, "fox.energyPerCapture");
  assertNonNegativeNumber(
    fox.reproductionEnergyThreshold,
    "fox.reproductionEnergyThreshold"
  );
  assertNotGreaterThan(
    fox.reproductionEnergyThreshold,
    fox.maxEnergy,
    "fox.reproductionEnergyThreshold",
    "fox.maxEnergy"
  );
  assertNonNegativeNumber(
    fox.reproductionEnergyCost,
    "fox.reproductionEnergyCost"
  );
  assertNonNegativeInteger(
    fox.reproductionCooldownTurns,
    "fox.reproductionCooldownTurns"
  );
  assertPositiveInteger(fox.maxAgeTurns, "fox.maxAgeTurns");
}

function validateStatistics(statistics) {
  assertPositiveInteger(
    statistics.collectionIntervalTurns,
    "statistics.collectionIntervalTurns"
  );
  assertPositiveInteger(
    statistics.maxDisplayedPoints,
    "statistics.maxDisplayedPoints"
  );
}

function assertObject(value, path) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(`${path} doit être un objet.`);
  }
}

function assertNumber(value, path) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${path} doit être un nombre fini.`);
  }
}

function assertInteger(value, path) {
  assertNumber(value, path);

  if (!Number.isInteger(value)) {
    throw new TypeError(`${path} doit être un entier.`);
  }
}

function assertPositiveNumber(value, path) {
  assertNumber(value, path);

  if (value <= 0) {
    throw new RangeError(`${path} doit être strictement positif.`);
  }
}

function assertNonNegativeNumber(value, path) {
  assertNumber(value, path);

  if (value < 0) {
    throw new RangeError(`${path} doit être positif ou nul.`);
  }
}

function assertPositiveInteger(value, path) {
  assertInteger(value, path);

  if (value <= 0) {
    throw new RangeError(`${path} doit être un entier strictement positif.`);
  }
}

function assertNonNegativeInteger(value, path) {
  assertInteger(value, path);

  if (value < 0) {
    throw new RangeError(`${path} doit être un entier positif ou nul.`);
  }
}

function assertNumberInRange(value, minimum, maximum, path) {
  assertNumber(value, path);

  if (value < minimum || value > maximum) {
    throw new RangeError(
      `${path} doit être compris entre ${minimum} et ${maximum}.`
    );
  }
}

function assertMaximum(value, maximum, path) {
  if (value > maximum) {
    throw new RangeError(`${path} doit être inférieur ou égal à ${maximum}.`);
  }
}

function assertNotGreaterThan(value, maximum, path, maximumPath) {
  if (value > maximum) {
    throw new RangeError(
      `${path} doit être inférieur ou égal à ${maximumPath}.`
    );
  }
}
