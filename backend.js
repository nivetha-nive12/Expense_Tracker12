let transactions = [];
let balance = 0;

function addTransaction() {
    const desc = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    
    if (type === 'income') {
        balance += amount;
    } else {
        balance -= amount;
    }
    
    transactions.push({desc, amount, type});
    document.getElementById('balance').textContent = `₹${balance}`;
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
    displayTransactions();
}

function displayTransactions() {
    const list = document.getElementById('transaction-list');
    list.innerHTML = transactions.map(t => `<li>${t.desc}: ${t.type === 'income' ? '+' : '-'}₹${t.amount}</li>`).join('');
}