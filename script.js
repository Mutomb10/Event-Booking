
/* Save this in a separate script.js file */
$(document).ready(function () {
    const events = [
      { id: 1, name: "Music Festival", date: "2025-06-15" },
      { id: 2, name: "Tech Conference", date: "2025-07-01" },
      { id: 3, name: "Art Workshop", date: "2025-08-12" }
    ];
  
    events.forEach(event => {
      $("#event-list").append(`
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">Date: ${event.date}</p>
            </div>
          </div>
        </div>
      `);
      $("#event-select").append(`<option value="${event.name}">${event.name}</option>`);
    });
  
    $("#booking-form").on("submit", function (e) {
      e.preventDefault();
      const name = $("#name").val();
      const email = $("#email").val();
      const selectedEvent = $("#event-select").val();
      alert(`Thank you, ${name}, for booking ${selectedEvent}!`);
      this.reset();
    });
  });
  