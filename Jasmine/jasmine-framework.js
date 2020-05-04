describe('sample', function() {

    it('should register , login and do delete for a sample angular application', function() {

      browser.ignoreSynchronization = true;
      // Opening the browser
      browser.get('https://angular-7-registration-login-example.stackblitz.io/login');
      browser.sleep(10000);

      // Clicking on Register link
      element(by.css('a[href*="/register"]')).click();
      element(by.css('input[formControlName=firstName]')).sendKeys('poojitha');
      element(by.css('input[formControlName=lastName]')).sendKeys('harsha');
      element(by.css('input[formControlName=username]')).sendKeys('poojitha');
      element(by.css('input[formControlName=password]')).sendKeys('password');
      element(by.buttonText('Register')).click();
      browser.sleep(1500);
      
      // Verifying the alert message n successful registration
      var successMsg= element(by.css('div[class="alert alert-success"]'));
      expect(successMsg.getText()).toEqual("Registration successful");

      // login to the application using the new registered credentials
      element(by.css('input[formControlName=username]')).sendKeys('poojitha');
      element(by.css('input[formControlName=password]')).sendKeys('password');
      element(by.buttonText('Login')).click();
      browser.sleep(1000);
      
      // Verifying the title of the page
      expect(browser.getTitle()).toEqual("Angular 7 User Registration and Login Example");
      element(by.css('a[class="text-danger"]')).click();

      // Logging out of the application
      element(by.css('a[class="nav-item nav-link"]')).click();
      browser.sleep(5000);
     
    });
  });