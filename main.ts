import { Command } from 'https://deno.land/x/cliffy/command/mod.ts';

// initialize command
const { options } = await new Command()
  .name('Passgen')
  .version('1.0.0')
  .description('A command-line tool that allows you to generate random and secure passwords.')
  .option('-l, --length <number>', 'Set the length of the password.', { default: 8 })
  .option('-as, --allow-symbols', 'Allow generate the password with symbols.', { default: false })
  .option('-an, --allow-numbers', 'Allow generate the password with numbers.', { default: false })
  .parse(Deno.args);

console.log(options);
