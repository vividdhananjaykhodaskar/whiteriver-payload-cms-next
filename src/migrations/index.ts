import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251107_101831 from './20251107_101831';
import * as migration_20251107_115138 from './20251107_115138';
import * as migration_20251107_115819 from './20251107_115819';
import * as migration_20251107_121447 from './20251107_121447';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251107_101831.up,
    down: migration_20251107_101831.down,
    name: '20251107_101831',
  },
  {
    up: migration_20251107_115138.up,
    down: migration_20251107_115138.down,
    name: '20251107_115138',
  },
  {
    up: migration_20251107_115819.up,
    down: migration_20251107_115819.down,
    name: '20251107_115819',
  },
  {
    up: migration_20251107_121447.up,
    down: migration_20251107_121447.down,
    name: '20251107_121447'
  },
];
