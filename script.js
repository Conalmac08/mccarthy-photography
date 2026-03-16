document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.name.value;
  const email = this.email.value;
  const phone = this.phone.value;
  const details = this.details.value;

  // Send email using mailto (simplest static method)
  const mailtoLink = `mailto:conalmac08@gmail.com?subject=Booking Request from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ADetails: ${details}`;
  window.location.href = mailtoLink;

  alert('Thank you! Your booking request has been prepared to send.');
});
