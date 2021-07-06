interface CreatePasswordProps {
  length: number;
  allowSymbols: boolean;
  allowNumbers: boolean;
}

export const CreatePassword = ({
  length,
  allowSymbols,
  allowNumbers
}: CreatePasswordProps): string => {
  // values that may contain the password
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbols = '!@#$%^&*_-+=';
  const numbers = '0123456789';

  let characters = alpha;

  // include or exclude symbols and numbers
  allowSymbols ? (characters += symbols) : '';
  allowNumbers ? (characters += numbers) : '';

  let password = '';

  // generate a password
  for (let idx = 0; idx < length; idx++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
};
