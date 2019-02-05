import {sortBy} from 'lodash-es';

export const seedGrowTimes = {
  appleTreeSeeds: 6 * 3600000,
  crystalLeafSeeds: 3 * 3600000,
  dottedGreenLeafSeeds: 15 * 60000,
  goldLeafSeeds: 2 * 3600000,
  greenLeafSeeds: 30 * 60000,
  hauntedTreeSeeds: 12 * 3600000,
  limeLeafSeeds: 3600000,
  mapleTreeSeeds: 6 * 3600000,
  oakTreeSeeds: 2 * 3600000,
  pineTreeSeeds: 36000000,
  redMushroomSeeds: 15 * 60000,
  redwoodTreeSeeds: 8 * 3600000,
  treeSeeds: 3600000,
  willowTreeSeeds: 4 * 3600000
};

export type SeedName = keyof typeof seedGrowTimes;

export const seedNames: SeedName[] = sortBy(<SeedName[]>Object.keys(seedGrowTimes), k => seedGrowTimes[k]);
