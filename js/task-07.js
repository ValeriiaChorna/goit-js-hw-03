console.log('Задание 7*');
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit', // взнос
  WITHDRAW: 'withdraw', // снятие со счета
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = {
      id: this.transactions.length + 1,
      type: Transaction.DEPOSIT,
      amount,
    };
    return this.addTransaction(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return console.log('Ошибка!Cнятие такой суммы не возможно, недостаточно средств.');
    }
    this.balance -= amount;
    const transaction = {
      id: this.transactions.length + 1,
      type: Transaction.WITHDRAW,
      amount,
    };
    return this.addTransaction(transaction);
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    const transactionAdd = this.transactions;
    transactionAdd.push(transaction);
    this.transactions = transactionAdd;
    return this.transactions;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return console.log(`Текущий баланс: ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const el of this.transactions) {
      if (el.id === id) {
        return el;
      }
    }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionTotal = 0;

    for (const el of this.transactions) {
      if (el.type === type) {
        transactionTotal += el.amount;
      }
    }

    return transactionTotal;
  },
};

// Проверка:

account.deposit(5);
account.deposit(100);
account.withdraw(3);
account.withdraw(1000);

console.table(account);
console.table(account.transactions);

account.getBalance();
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));


// const a = {
//   d: 5,
//   b: [],
// };
// const c = a.b;
// c.push(2, 10500);

// a.b = c;

// console.table(a);
