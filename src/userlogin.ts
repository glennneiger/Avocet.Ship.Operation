import { DialogController } from 'aurelia-dialog';
import { AuthService } from 'resources/Services/AuthService';
import { inject } from 'aurelia-framework';
import Swal from 'sweetalert2'
import { Shipservice } from 'resources/Services/Shipservice'
@inject(AuthService, DialogController, Shipservice)
export class Userlogin {
  //static inject = [DialogController];
  //static auth = [AuthService];
  auth;
  controller;
  receivedcode;
  generatedcode;
  myPub;
  person = { firstName: '' };
  isNewuser: boolean = true;
  isNew: boolean = false;
  useremail;
  userpassword;
  userpasswordagain;
  servercode;
  isCode: boolean = false;
  constructor(AuthService, controller, Shipservice) {
    this.controller = controller;
    this.isNewuser = true;
    this.auth = AuthService;
    this.myPub = Shipservice;
  }

  resendmypassword() {
    if (this.useremail && this.useremail.contains("@")) {

      this.auth.sendpassword(this.useremail);
      Swal.fire("Your password has been sent to your email.");
    }

  }

  registeruser() {
    if (this.userpassword != this.userpasswordagain) {
      Swal.fire("Passwords do not match.");
      return;
    }

    if (this.userpassword.length > 10) {
      Swal.fire("Password is too long. Please shorten your password to a maximum of 10 characters.");
      return;
    }

    this.auth.GetCode(this.useremail, this.userpassword).then(data => {
      if (data != 'NULL') {
        Swal.fire("Please check you email. Enter or paste the Code received.");
        this.servercode = data;
        this.servercode = this.servercode.replace('"', '');
        this.isCode = true;
      }
      else {
        Swal.fire("Check you email and password for syntax.");
      }
    });

  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  SignIn() {
    this.auth.GetAuthenticated(this.useremail, this.userpassword).then(data => {
      if (data.email) {

        this.myPub.currentuser = data;
        this.controller.ok(data);
      }
      else {
        Swal.fire("Login name and password do not match.");
      }
    });
    //lets connect and then
    //repository.getData()
    //  .then(data => {
    //    //alert(data[0].shipname);
    //    this.shiplist = data;
    //    this.myPub.myships = data; // JSON.parse(data);
    //    this.message = this.shiplist[0].shipname;
    //  });

  }
  verifyandcontinue() {
    if (this.userpassword.length > 10) {
      Swal.fire("Password is too long. Please shorten your password to a maximum of 10 characters.");
      return;
    }
    if (this.servercode == this.receivedcode) {
      //create an account 
      this.auth.CreateAccount(this.useremail, this.userpassword).then(data => {
        if (data.email) {
          this.myPub.currentuser = data;
          this.controller.ok(data);
        } else {
          Swal.fire("Login name and password do not match.");
        }
      });

      //this.controller.ok();
    } else
      Swal.fire("Login name and password do not match.Please check the values");
  }

  hideisnewuser() {
  this.isNewuser = false;
    this.isNew = true;
  }

  activate(person) {
    this.person = person;
  }
}

//  <button type="submit" class="btn btn-primary btn-block pull-right" click.trigger="controller.ok(person)">Sign In</button>

