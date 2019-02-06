import {upperFirst} from 'lodash-es';
import {areas} from '../../consts/areas';
import {Item} from '../structures/Item';

const artifacts: string[] = [
  'brokenSwordArtifact',
  'cannonBallsArtifact',
  'oldCannonArtifact',
  'strangeLeafArtifact',
  'ancientLogArtifact',
  'rainbowFlowerArtifact',
  'clayVaseArtifact',
  'batWingArtifact',
  'skullArtifact',
  'sulferArtifact',
  'volcanicRockArtifact',
  'volcanicSmokeArtifact',
  'iceArtifact',
  'snowballsArtifact',
  'frozenHeadArtifact',
  'spiderLegsArtifact',
  'broomArtifact',
  'hauntedSkullArtifact'
];

const lootBags: string[] = areas.map(a => `${a}Loot`);
lootBags.push(...lootBags.map(t => `shiny${upperFirst(t)}`));

const statues: string[] = [
  'bronze',
  'iron',
  'silver',
  'gold',
  'promethium',
  'titanium'
].reduce<string[]>(
  (acc, type) => {
    for (let i = 1; i <= 4; i++) {
      let name = `${type}StatueMetalDetector`;
      if (i !== 1) {
        name += i.toString();
      }
      acc.push(name);
    }

    return acc;
  },
  []
);

export const exploringGoodies = artifacts
  .concat(lootBags)
  .concat(statues)
  .map(Item.fromNameClick);
