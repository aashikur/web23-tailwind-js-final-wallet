 let currentWallet = 1350;
                
                function deposit() {
                    // Take deposited Input 
                    const depositInput = document.getElementById('depositInput');
                    const depositAmount = parseFloat(depositInput.value);

                    // Take Previous Deposited Ammount
                    const showDeposit = document.getElementById('depositAmount');
                    const showAmmount = parseFloat(showDeposit.textContent);

                    if (!isNaN(depositAmount) && depositAmount > 0) {
                        currentWallet += depositAmount;

                        document.getElementById('ErrorD').style.display = 'none';
                        const x = showAmmount + depositAmount;
                        showDeposit.textContent = x.toFixed(2);
                        updateDisplay();
                        depositInput.value = '';
                    } else {
                        document.getElementById('ErrorD').style.display = 'block';
                        document.getElementById('ErrorW').style.display = 'none';

                    }
                }
        
                function withdraw() {
                    // Take Withdrowal Input
                    const withdrawInput = document.getElementById('withdrawInput');
                    const withdrawAmount = parseFloat(withdrawInput.value);

                    //Take Previous Deposite amount
                    const showWithdraw = document.getElementById('withdrawAmount');
                    const showAmmount = parseFloat(showWithdraw.textContent);

                    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= currentWallet) {
                        currentWallet -= withdrawAmount;

                        document.getElementById('ErrorW').style.display = 'none';
                        const y = showAmmount + withdrawAmount;
                        showWithdraw.textContent = y.toFixed(2);
                        updateDisplay();
                        withdrawInput.value = '';
                    }else {
                        document.getElementById('ErrorW').style.display = 'block';
                        document.getElementById('ErrorD').style.display = 'none';

                    }
                }
        
                function updateDisplay() {
                    document.getElementById('currentWallet').textContent = currentWallet.toFixed(2);
                }


