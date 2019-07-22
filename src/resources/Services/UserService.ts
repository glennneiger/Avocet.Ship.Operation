export class UserService {
  _currentUserLoggedIn = false;
  _userStore = {};
  _users = [];

  getCurrentUser() {
    return this._userStore;
  }

  findUser(username) {
    // Do something server side and return the user
  }

  findUsers(criteria) {
    // Will find one or more users and then return them
    // They will also be stored on this class in the _users variable
  }
}
