
//business logic
function ticketBook() {
    this.tickets = [],
    this.currentId = 0
}

ticketBook.prototype.addTicket = function (ticket) {
    ticket.id = this.assignId();
    this.tickets.push(ticket);
}

ticketBook.prototype.assignId = function (ticket) {
    this.currentId += 1;
    return this.currentId;
}

ticketBook.prototype.findTicket = function (id) {
    for (var i = 0; i < this.tickets.length; i++) {
        if (this.tickets[i]) {
            if (this.tickets[i].id == id) {
                return this.tickets[i];
            }
        }
    };
    return false;
}

ticketBook.prototype.deleteTicket = function (id) {
    for (var i = 0; i < this.tickets.length; i++) {
        if (this.tickets[i]) {
            if (this.tickets[i].id == id) {
                delete this.tickets[i];
                return true;
            }
        }
    };
    return false;
}
function Ticket(movies, times, ages) {
    this.movies = movies
    this.times = times
    this.ages = ages
};
var ticketBook = new ticketBook();

function displayTicketDetails(ticketBookToDisplay) {
    var ticketsList = $("ul#tickets");
    var htmlForTicketInfo = "";
    ticketBookToDisplay.tickets.forEach(function (ticket) {
        htmlForTicketInfo += "<li id=" + ticket.id + ">" + ticket.movies + " " + ticket.times + " " + ticket.ages + "</li>";
    });
    ticketsList.html(htmlForTicketInfo);
};

function showTicket(ticketId) {
    var ticket = ticketBook.findTicket(ticketId);
    $(".priceOfTicket").show();
    $(".movies").html(ticket.movies);
    $(".times").html(ticket.times);
    $(".ages").html(ticket.ages);
};

function attachTicketListeners() {
    $("ul#tickets").on("click", "li", function () {
      showTicket(this.id);
    });
    $("#show-ticket").hide();
    displayTicketDetails(ticketBook);
  }

//front-end
$(document).ready(function () {
    attachTicketListeners();
    $("#movieForm").submit(function (event) {
        event.preventDefault();
        //gather value from form
        var movies = $("select#movies").val();
        var times = $("select#times").val();
        var ages = $("select#ages").val();
        var newTicket = new Ticket(movies, times, ages)
        ticketBook.addTicket(newTicket);
        displayTicketDetails(ticketBook);
        //console.log(movies, times, ages);
    });
});

  