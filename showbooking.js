function displayBookings() {
      const bookingList = document.getElementById('bookingList').querySelector('tbody');
      bookingList.innerHTML = '';

      const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

      bookings.forEach((booking, index) => {
        const row = document.createElement('tr');

        const cells = [
          `${booking.firstName} ${booking.lastName}`,
          booking.email,
          booking.adults,
          booking.children,
          booking.startDate,
          booking.endDate,
          booking.destination,
          `€${booking.budget}`
        ];

        cells.forEach(text => {
          const td = document.createElement('td');
          td.textContent = text;
          row.appendChild(td);
        });

        // Action button
        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
          bookings.splice(index, 1);
          localStorage.setItem('bookings', JSON.stringify(bookings));
          displayBookings();
        };
        actionCell.appendChild(deleteBtn);
        row.appendChild(actionCell);

        bookingList.appendChild(row);
      });
       console.log('Loaded bookings:', bookings);
    }

    document.getElementById('deleteAllBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to delete all bookings?')) {
        localStorage.removeItem('bookings');
        displayBookings();
      }
    });

    window.onload = displayBookings;
