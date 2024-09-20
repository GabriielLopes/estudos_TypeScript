import isEmail from 'validator/lib/isEmail';

const SHOW_MESSAGE_ERROR = 'show-message-error';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const confirmPassword = document.querySelector(
  '.confirmpassword',
) as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, password, confirmPassword);
  checkEmail(email);
  checkEqualPasswords(password, confirmPassword);

  if (shouldSendForm(this)) console.log('Enviado!');
});

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_MESSAGE_ERROR)
    .forEach((item) => item.classList.remove(SHOW_MESSAGE_ERROR));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const form_fields = input.parentElement as HTMLDivElement; // irá capturar o pai do elemento, noo caso 'form-fields'
  const errorMessage = form_fields.querySelector(
    '.info-erro',
  ) as HTMLParagraphElement;
  errorMessage.innerHTML = msg;
  form_fields.classList.add(SHOW_MESSAGE_ERROR);
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, '* Este campo não pode ficar vazio!');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value))
    showErrorMessage(input, '* O e-mail informado é inválido!');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  confirmPassword: HTMLInputElement,
): void {
  if (password.value !== confirmPassword.value) {
    showErrorMessage(password, '');
    showErrorMessage(confirmPassword, 'As senhas não conferem!');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_MESSAGE_ERROR).forEach(() => (send = false));
  return send;
}
