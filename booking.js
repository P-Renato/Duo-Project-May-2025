document.querySelector('.slideBtn').addEventListener('click', () => {

  const form = document.getElementById('bookingForm');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';

});

document.addEventListener('click', (e) => {
  const form = document.getElementById('bookingForm');
  const isClickInsideForm = form.contains(e.target);
  const isClickOnButton = e.target.classList.contains('slideBtn');
  
  if (form.style.display === 'block' && !isClickInsideForm && !isClickOnButton) {
    form.style.display = 'none';
  }
});

// Handle Form Submission
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const booking = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    adults: document.getElementById('adults').value,
    children: document.getElementById('children').value,
    startDate: document.getElementById('startDate').value,
    endDate: document.getElementById('endDate').value,
    destination: document.getElementById('destination').value,
    budget: document.getElementById('budget').value
  };

  let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));

  alert('Booking saved!');
  this.reset();
 /*  displayBookings(); */
  document.getElementById('bookingForm').style.display =  'none' ;

});

/* 
function displayBookings() {
  const bookingList = document.getElementById('bookingList').querySelector('tbody');
  bookingList.innerHTML = ''; // Clear existing rows

  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  bookings.forEach(booking => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = `${booking.firstName} ${booking.lastName}`;
    row.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = booking.email;
    row.appendChild(emailCell);

    const adultsCell = document.createElement('td');
    adultsCell.textContent = booking.adults;
    row.appendChild(adultsCell);

    const childrenCell = document.createElement('td');
    childrenCell.textContent = booking.children;
    row.appendChild(childrenCell);

    const startDateCell = document.createElement('td');
    startDateCell.textContent = booking.startDate;
    row.appendChild(startDateCell);

    const endDateCell = document.createElement('td');
    endDateCell.textContent = booking.endDate;
    row.appendChild(endDateCell);

    const destinationCell = document.createElement('td');
    destinationCell.textContent = booking.destination;
    row.appendChild(destinationCell);

    const budgetCell = document.createElement('td');
    budgetCell.textContent = `€${booking.budget}`;
    row.appendChild(budgetCell);

    bookingList.appendChild(row);
  });
} */


  /* tgus us the time zone  */ 

 
 
  /* function updateClocks() {
  const now = new Date();

  const londonTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
  const berlinTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Berlin" }));
  const singaporeTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));
  const rioTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));

  document.getElementById("london").textContent =
    "London: " + londonTime.getHours().toString().padStart(2, "0") + ":" +
    londonTime.getMinutes().toString().padStart(2, "0") + ":" +
    londonTime.getSeconds().toString().padStart(2, "0");

  document.getElementById("berlin").textContent =
    "Berlin: " + berlinTime.getHours().toString().padStart(2, "0") + ":" +
    berlinTime.getMinutes().toString().padStart(2, "0") + ":" +
    berlinTime.getSeconds().toString().padStart(2, "0");

  document.getElementById("singapore").textContent =
    "Singapore: " + singaporeTime.getHours().toString().padStart(2, "0") + ":" +
    singaporeTime.getMinutes().toString().padStart(2, "0") + ":" +
    singaporeTime.getSeconds().toString().padStart(2, "0");

  document.getElementById("rio").textContent =
    "Rio de Janeiro: " + rioTime.getHours().toString().padStart(2, "0") + ":" +
    rioTime.getMinutes().toString().padStart(2, "0") + ":" +
    rioTime.getSeconds().toString().padStart(2, "0");
}

setInterval(updateClocks, 1000);
updateClocks(); 
 */

function updateClocks() {
  let now = new Date();

  let london = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
  let berlin = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Berlin" }));
  let singapore = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));
  let rio = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));

  document.getElementById("london").innerText = "London: " + london.getHours() + ":" + london.getMinutes() + ":" + london.getSeconds();
  document.getElementById("berlin").innerText = "Berlin: " + berlin.getHours() + ":" + berlin.getMinutes() + ":" + berlin.getSeconds();
  document.getElementById("singapore").innerText = "Singapore: " + singapore.getHours() + ":" + singapore.getMinutes() + ":" + singapore.getSeconds();
  document.getElementById("rio").innerText = "Rio de Janeiro: " + rio.getHours() + ":" + rio.getMinutes() + ":" + rio.getSeconds();
}

setInterval(updateClocks, 1000);
updateClocks();