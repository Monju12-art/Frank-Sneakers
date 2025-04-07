document.addEventListener("DOMContentLoaded", function() {
  // Select the button and notification elements
  const paymentButton = document.getElementById('make-payment');
  const notification = document.getElementById('notification');

  // Function to show the notification
  function showNotification(message) {
      notification.textContent = message;
      notification.style.display = 'block';
      notification.classList.remove('fade-out'); // Ensure it's fully visible

      // Hide the notification after 3 seconds with a fade-out effect
      setTimeout(() => {
          notification.classList.add('fade-out'); // Start fading out
          setTimeout(() => {
              notification.style.display = 'none'; // Hide after fade-out
          }, 1000); // Matches CSS transition time
      }, 7000);
  }

  // Attach event listener to the payment button
  paymentButton.addEventListener('click', function() {
      showNotification('Payment Successful!');
  });
});

function goback(){
    window.location.href = "index.html";
}