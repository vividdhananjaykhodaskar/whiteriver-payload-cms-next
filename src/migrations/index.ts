import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251107_101831 from './20251107_101831';
import * as migration_20251107_115138 from './20251107_115138';

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
    name: '20251107_115138'
  },
];
