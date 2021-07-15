# Passgen

A command-line tool that allows you to generate random and secure passwords.

## Usage

Before of all make sure that you have installed `Deno 1.11.5` or later. Then run the following:

```sh
deno run main.ts [options]
```

## Command-line Options

| Short | Long              | Description                                  |
| :---- | :---------------- | :------------------------------------------- |
| `-h`  | `--help`          | Show the information about the program.      |
| `-v`  | `--version`       | Show the version number for this program.    |
| `-l`  | `--length`        | Set the length of the password. (Default: 8) |
| `-as` | `--allow-symbols` | Allow generate the password with symbols.    |
| `-an` | `--allow-numbers` | Allow generate the password with numbers.    |

## License

[MIT](https://choosealicense.com/licenses/mit/)
