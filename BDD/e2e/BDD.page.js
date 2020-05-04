module.exports = {
  
  getURL: () => {
      return browser.get('https://angular-7-registration-login-example.stackblitz.io/login');
  },
  register: () => {
      return element(by.css('a[href*="/register"]'));
  },
  firstName: () => {
      return element(by.css('input[formControlName=firstName]'));
  },
  lastName: () => {
      return element(by.css('input[formControlName=lastName]'));
  },
  userName: () => {
      return element(by.css('input[formControlName=username]'));
  },
  password: () => {
      return element(by.css('input[formControlName=password]'));
  },
  registerButton: () => {
      return element(by.buttonText('Register'));
  },
  loginButton: () => {
      return element(by.buttonText('Login'));
  },
  deleteButton: () => {
      return element(by.css('a[class="text-danger"]'));
  },
  logoutButton: () => {
      return element(by.css('a[class="nav-item nav-link"]'));
  },
  successAlert: () => {
      return element(by.css('div[class="alert alert-success"]'));
  }
}