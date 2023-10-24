document.getElementById("start-payment").addEventListener("click", () => {
    const overlay = document.getElementById("overlay");
    const paymentStatus = document.getElementById("payment-status");

    // Simulate payment processing (you can replace this with your logic)
    simulatePayment()
        .then(() => {
            paymentStatus.textContent = "Payment Successful";
            paymentStatus.style.display = "block";
        })
        .catch(() => {
            paymentStatus.textContent = "Payment Failed";
            paymentStatus.style.color = "red";
            paymentStatus.style.display = "block";
        })
        .finally(() => {
            overlay.style.display = "block";
        });
});

function simulatePayment() {
    return new Promise((resolve, reject) => {
        // Simulate a payment process (e.g., API request)
        setTimeout(() => {
            // Replace this with your payment success/failure condition
            const isSuccess = Math.random() < 0.8;
            if (isSuccess) {
                resolve();
            } else {
                reject();
            }
        }, 2000); // Simulate a 2-second payment process
    });
}
