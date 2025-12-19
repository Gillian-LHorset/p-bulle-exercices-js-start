//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
  account = undefined;
  }

  open() {
    if (account === undefined) {
    account = {balance: 0}
    } else {
      throw new ValueError
    }
  }

  close() {
    if (account != undefined) {
    account = undefined
    } else {
      throw new ValueError
    }
  }

  deposit(depos) {
      if (account != undefined && account.balance != undefined && depos >= 0) {
        account.balance += depos
      } else {
        throw new ValueError
      }
  }

  withdraw(withdrawMoney) {    
    if (account != undefined) {
      if (account.balance >= withdrawMoney && withdrawMoney >= 0) {
        account.balance -= withdrawMoney
    } else {
      throw new ValueError
    }} else {
      throw new ValueError
    }
  }

  get balance() {
    if (account != undefined) {
    return account.balance
    } else {
      throw new ValueError
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}