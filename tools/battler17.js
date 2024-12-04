const fixTraits = (gotchi) => {
  const traitMaps = {
    speed: {
      baseFormula: 100,
      multiplier: 1,
      traitKey: 0,
      isNegative: false,
    },
    health: {
      baseFormula: "brs*0.75",
      multiplier: 12,
      traitKey: 0,
      isNegative: true,
    },
    crit: {
      baseFormula: 0,
      multiplier: 0.5,
      traitKey: 1,
      isNegative: false,
    },
    armor: {
      baseFormula: 0,
      multiplier: 2,
      traitKey: 1,
      isNegative: true,
    },
    evade: {
      baseFormula: 0,
      multiplier: 0.3,
      traitKey: 2,
      isNegative: false,
    },
    resist: {
      baseFormula: 0,
      multiplier: 1,
      traitKey: 2,
      isNegative: true,
    },
    magic: {
      baseFormula: "brs*0.25",
      multiplier: 5,
      traitKey: 3,
      isNegative: false,
    },
    physical: {
      baseFormula: "brs*0.25",
      multiplier: 5,
      traitKey: 3,
      isNegative: true,
    },
    accuracy: {
      baseFormula: 50,
      multiplier: 0.5,
      traitKey: 45,
      isNegative: false,
    },
  };


  const traitValue = (trait) => {
    return trait < 50 ? 50 - trait : trait - 50 + 1;
  };

  const onchainVals = [
    gotchi.nrg,
    gotchi.agg,
    gotchi.spk,
    gotchi.brn,
    gotchi.eyc,
    gotchi.eys,
  ];
  // Convert trait value to in-game value
  const traitValues = onchainVals.map((x) => {
    return traitValue(x);
  });

  // Map traits
  for (const trait in traitMaps) {
    const traitMap = traitMaps[trait];
    const onchainVal = onchainVals[traitMap.traitKey];

    let base = traitMap.baseFormula;

    // If baseFormula is a string and contains a * then it is a formula
    if (
      typeof traitMap.baseFormula === "string" &&
      traitMap.baseFormula.includes("*")
    ) {
      const formula = traitMap.baseFormula.split("*");

      if (!gotchi[formula[0]]) throw new Error("Trait not found: ", formula[0]);

      base = Math.round(Number(gotchi[formula[0]]) * Number(formula[1]));
    }

    let newTrait;
    if (trait !== "accuracy") {
      if (traitMap.isNegative) {
        newTrait =
          onchainVal < 50
            ? Math.round(
                base + traitValues[traitMap.traitKey] * traitMap.multiplier
              )
            : base;
      } else {
        newTrait =
          onchainVal < 50
            ? base
            : Math.round(
                base + traitValues[traitMap.traitKey] * traitMap.multiplier
              );
      }
    } else {
      newTrait = base + (traitValues[4] + traitValues[5]) * traitMap.multiplier;
    }

    if (newTrait !== gotchi[trait]) gotchi[trait] = newTrait;
  }
};

// const gotchi = {
//   brs: 600,
//   agg: 90,
//   nrg: 90,
//   spk: 90,
//   brn: 90,
//   eys: 90,
//   eyc: 90,
// };
// fixTraits(gotchi);
// console.log(gotchi);

const gotchi2 = {
  brs: 545,
  agg: 10,
  nrg: 11,
  spk: 12,
  brn: 13,
  eys: 14,
  eyc: 15,
};
fixTraits(gotchi2);
console.log(gotchi2);
