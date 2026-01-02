import 'dotenv/config';

import { InstallGlobalCommands } from './utils.js';

const OSTO_COMMAND = {
  name: 'osto',
  description: 'brote psicotico',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [OSTO_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
