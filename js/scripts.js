
//business logic
function TicketBook() {
    this.tickets = []
};

TicketBook.prototype.addTicket = function (ticket) {
    this.tickets.push(ticket);
}

function Ticket(movies, times, ages, price) {
    this.movies = movies
    this.times = times
    this.ages = ages
    this.price = price
};

// function displayTicketDetails(ticketBookToDisplay) {
//     var ticketsList = $("ul#tickets");
//     var htmlForTicketInfo = "";
//     ticketBookToDisplay.tickets.forEach(function (ticket) {
//         htmlForTicketInfo += "<li id=" + ticket.id + ">" + ticket.movies + " " + ticket.times + " " + ticket.ages + "</li>";
//     });
//     ticketsList.html(htmlForTicketInfo);
// };

// function showTicket(ticketId) {
//     var ticket = ticketBook.findTicket(ticketId);
//     $(".priceOfTicket").show();
//     $(".movies").html(ticket.movies);
//     $(".times").html(ticket.times);
//     $(".ages").html(ticket.ages);
// };

// function attachTicketListeners() {
//     $("ul#tickets").on("click", "li", function () {
//         showTicket(this.id);
//     });
//     $("#show-ticket").hide();
//     displayTicketDetails(ticketBook);
// }

// ticketPrice.tickets.forEach(function (ticket) {
//     if (ticket.movie === "fastnFurious") {
//         ticketPriceTotal + 10
//     }
//     else if (ticket.movie === "codeCoder") {
//         ticketPriceTotal + 5
//     }
// }


//front-end
$(document).ready(function () {

    var ticketBook = new TicketBook();
    // attachTicketListeners();

    $("#movieForm").submit(function (event) {
        event.preventDefault();
        var movies = $("select#movies").val();
        var times = $("select#times").val();
        var ages = $("select#ages").val();
        
        var price = 0

// AGES CALCULATIONS
        if (ages === "6") {
            price = price -= 4
        }
        if (ages === "8"){
            price = price +=0
        }
        if (ages === "10"){
            price = price +=4
        }
        if (ages === "12"){
            price = price +=8
        }
// // TIMES CALCULATIONS
        if (times === "6") {
            price = price -= 4
        }
        if (times === "8"){
            price = price +=0
        }
        if (times === "10"){
            price = price +=4
        }
        if (times === "12"){
            price = price +=8
        }
// // TIMES CALCULATIONS
        if (movies === "6") {
            price = price - 4
        }
        if (movies === "8"){
            price = price +0
        }
        if (movies === "10"){
            price = price +4
        }
        if (movies === "12"){
            price = price +8
        }
        // console.log(price);
        var newTicket = new Ticket(movies, times, ages, price)
        ticketBook.addTicket(newTicket);
        console.log(ticketBook.tickets)
        // displayTicketDetails(ticketBook);
        //console.log(movies, times, ages);
    });
});

  