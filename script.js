var flights = [
    { currency: "EUR", price: 128.67, carrier: "KL", time: "2h 30min", nodes: ["DUB 2024-05-30T09:35+02:00 MRS 2024-05-30T11:15+02:00"] },
    { currency: "EUR", price: 138.70, carrier: "AF", time: "2h 30min", nodes: ["DUB 2024-05-30T12:35+02:00 MRS 2024-05-30T13:50+02:00"] },
    { currency: "EUR", price: 151.41, carrier: "BA", time: "2h 30min", nodes: ["DUB 2024-05-30T11:40+02:00 MRS 2024-05-30T12:55+02:00"] }
  ];
  
  // Carrier details for display
  var carrier = {
    "AF": "Air France",
    "KL": "KLM Royal Dutch Airlines",
    "BA": "British Airways"
  };
  
  $(document).ready(function() {
    // Populate flight options dynamically
    function populateFlights() {
      let flightListHTML = '';
      flights.forEach((flight, index) => {
        flightListHTML += `<article data-index="${index}">
          <div class="info">
            <span class="time">${flight.time}</span>
            <span class="airline">${carrier[flight.carrier]} - €${flight.price}</span>
            <span>${flight.nodes[0].split(' ')[0]} - ${flight.nodes[0].split(' ')[1]}</span>
          </div>
        </article>`;
      });
      $('.list .nano-content').html(flightListHTML);
    }
  
    // Search functionality trigger
    $('.btnSearch').on('click', function() {
      populateFlights();
      $('.wrap').attr('data-pos', '1');
    });
  
    // Flight booking confirmation
    $('.btnBook').on('click', function() {
      $(this).text('Booking...');
      setTimeout(() => {
        $('.btnBook').html('<i class="zmdi zmdi-check-circle"></i> Flight Booked');
        $('.btnBook').addClass('success');
      }, 1200);
    });
  
    // Back button functionality
    $('.btnBack').on('click', function() {
      let currentPos = $('.wrap').attr('data-pos');
      if (currentPos > 0) {
        $('.wrap').attr('data-pos', currentPos - 1);
      }
    });
  
    // Initialize scrollbars
    $(".nano").nanoScroller();
  });
  