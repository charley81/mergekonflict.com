import * as migration_20260511_022756_init from './20260511_022756_init';
import * as migration_20260511_023009_media from './20260511_023009_media';

export const migrations = [
  {
    up: migration_20260511_022756_init.up,
    down: migration_20260511_022756_init.down,
    name: '20260511_022756_init',
  },
  {
    up: migration_20260511_023009_media.up,
    down: migration_20260511_023009_media.down,
    name: '20260511_023009_media',
  },
];
