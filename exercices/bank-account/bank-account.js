//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance;
  #open;
  
  constructor() {
    this.#balance = 0;
    this.#open = false;
  }

  open() {
    if (!this.#open) {
    this.#open = true;
    this.#balance = 0;
    } else {
      throw new ValueError()
    }
  }

  close() {
    if (this.#open) {
    this.#open = false;
    this.#balance = 0;
    } else {
      throw new ValueError()
    }
  }

  deposit(depos) {
      if (this.#open && depos >= 0) {
        this.#balance += depos
      } else {
        throw new ValueError()
      }
  }

  withdraw(withdrawMoney) {    
    if (this.#open) {
      if (this.#balance >= withdrawMoney && withdrawMoney >= 0) {
        this.#balance -= withdrawMoney
    } else {
      throw new ValueError()
    }} else {
      throw new ValueError()
    }
  }

  get balance() {
    if (this.#open) {
    return this.#balance
    } else {
      throw new ValueError()
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}