import * as Colors from 'https://deno.land/std/fmt/colors.ts';
import { Command } from 'https://deno.land/x/cliffy/command/mod.ts';

import { CreatePassword } from './libs/create-password.ts';

// initialize command
const { options } = await new Command()
  .name('Passgen')
  .version('1.0.0')
  .description('A command-line tool that allows you to generate random and secure passwords.')
  .option('-l, --length <number>', 'Set the length of the password.', { default: 8 })
  .option('-as, --allow-symbols', 'Allow generate the password with symbols.')
  .option('-an, --allow-numbers', 'Allow generate the password with numbers.')
  .parse(Deno.args);

const { length, allowSymbols, allowNumbers } = options;

// generate and store the password
const password = CreatePassword({ length, allowSymbols, allowNumbers });

// print the result
console.info(Colors.yellow('Generated Password:'), Colors.white(password));
