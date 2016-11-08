// A list of events from Meetup.com's API. Each event is an object!
var events = [
  {
    "name": "Seattle RailsBridge Rails for Women Workshop",
    "rsvp_limit": 40,
    "status": "upcoming",
    "waitlist_count": 8,
    "yes_rsvp_count": 40,
    "venue": {
      "name": "Substantial",
      "address_1": "900 E Pine, Suite 202 ",
      "city": "Seattle",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "98122",
      "state": "WA"
    },
    "group": {
      "name": "Seattle RailsBridge Group",
    },
    "link": "http://www.meetup.com/SeattleRailsBridge/events/59913072/",
    "visibility": "public"
  },
  {
    "name": "Insights of UX (User Experience)",
    "rsvp_limit": 230,
    "status": "past",
    "waitlist_count": 0,
    "yes_rsvp_count": 215,
    "venue": {
      "name": "Bellevue City Hall",
      "address_1": "450 110th Ave NE",
      "city": "Bellevue",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "98004",
      "state": "WA"
    },
    "group": {
    "name": "Seattle Technical Forum",
    },
    "link": "http://www.meetup.com/Sea-Tech-Forum/events/36852582/",
    "visibility": "public"
  },
  {
    "name": "Learn about Windows 8 & HTML Apps",
    "status": "past",
    "rsvp_limit": 35,
    "waitlist_count": 0,
    "yes_rsvp_count": 35,
    "venue": {
      "name": "Adobe Systems",
      "address_1": "867 North Northlake Way",
      "city": "Seattle",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "98103",
      "state": "WA"
    },
    "group": {
      "name": "Seattle Web App Developers Group",
    },
    "link": "http://www.meetup.com/Seattle-Web-App-Developers-Group/events/70650812/",
    "visibility": "public"
  },
  {
    "name": "Let's Talk Taxonomy - Guest Speaker Gary Carlson",
    "rsvp_limit": 80,
    "status": "past",
    "waitlist_count": 0,
    "yes_rsvp_count": 76,
    "venue": {
      "name": "Piecora's New York Pizza & Pizza Restaurant",
      "address_1": "1401 E Madison St",
      "city": "Seattle",
      "country": "us",
      "localized_country_name": "USA",
      "phone": "206 322 9411",
      "zip": "98122",
      "state": "WA"
    },
    "group": {
      "name": "Seattle Information Architecture & User Experience Meetup",
    },
    "link": "http://www.meetup.com/SeattleUX/events/65864112/",
    "visibility": "public"
  },
  {
    "name": "New: Seattle Rails Networking Meetup #13 @ Facebook HQ",
    "rsvp_limit": 100,
    "status": "past",
    "waitlist_count": 0,
    "yes_rsvp_count": 90,
    "venue": {
      "name": "Facebook",
      "address_1": "1730 Minor Ave. 18th Floor",
      "city": "Seattle",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "98101",
      "state": "WA"
    },
    "group": {
      "name": "The Seattle Ruby on Rails Developers Meetup Group",
    },
    "link": "http://www.meetup.com/The-Seattle-Ruby-on-Rails-Developers-Meetup-Group/events/92366992/",
    "visibility": "public"
  },
  {
    "name": "Volunteer for Seattle RailsBridge Workshop",
    "rsvp_limit": 20,
    "status": "upcoming",
    "waitlist_count": 0,
    "yes_rsvp_count": 17,
    "venue": {
      "name": "Substantial",
      "address_1": "900 E Pine, Suite 202 ",
      "city": "Seattle",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "98122",
      "state": "WA"
    },
    "group": {
      "name": "Seattle RailsBridge Group",
    },
    "link": "http://www.meetup.com/SeattleRailsBridge/events/91658962/",
    "visibility": "public"
  },
  {
    "name": "Cases of Big Data",
    "rsvp_limit": 265,
    "status": "past",
    "waitlist_count": 0,
    "yes_rsvp_count": 256,
    "venue": {
      "name": "Bellevue City Hall",
      "address_1": "450 110th Ave NE",
      "city": "Bellevue",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "98004",
    "state": "WA"
    },
    "group": {
      "name": "Seattle Technical Forum",
    },
    "link": "http://www.meetup.com/Sea-Tech-Forum/events/91548732/",
    "visibility": "public"
  },
  {
    "name": "Tuesday Night at the Raygun Lounge",
    "status": "upcoming",
    "rsvp_limit": 15,
    "waitlist_count": 0,
    "yes_rsvp_count": 9,
    "venue": {
      "name": "Raygun Lounge",
      "address_1": "501 E Pine Street",
      "city": "Seattle",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "98122",
      "state": "WA"
    },
    "group": {
      "name": "Queer Geek! - Seattle",
    },
    "link": "http://www.meetup.com/queergeek-seattle/events/98703442/",
    "visibility": "public_limited"
  },
  {
    "name": "Cases of Digital Marketing",
    "rsvp_limit": 220,
    "status": "past",
    "waitlist_count": 0,
    "yes_rsvp_count": 214,
    "venue": {
      "name": "Bellevue City Hall",
      "address_1": "450 110th Ave NE",
      "city": "Bellevue",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "98004",
      "state": "WA"
    },
    "group": {
      "name": "Seattle Technical Forum",
    },
    "link": "http://www.meetup.com/Sea-Tech-Forum/events/91548852/",
    "visibility": "public"
  }
]

function displayEvents(){
  var list = document.getElementById('listings');

  // Be sure old list items are removed before building new
  list.innerHTML = null;

  for (i = 0; i < events.length; i++) {
    // Create an <li> node
    var node = document.createElement("LI");

    // Create a text node
    var textnode = document.createTextNode(events[i].name);
    // TODO 1: Also display name of the group for each event.

    // Append/add the text to <li>
    node.appendChild(textnode);

    // Append/add the <li> to the selected <ul> element
    list.appendChild(node);
  }
}

function filterEvents(){
  // The buttons that trigger this function each have an id
  // corresponding to the city name they should filter by.
  var cityName = this.id;
  console.log(cityName);

  // TODO 3: Implement the body of this function. It should cause
  // the events list to only show events that are happening in the selected city.

  // Note when comparing cityName to event's venue city: Call .toLowerCase()
  // on both before comparing, in case they have different capitalization.

  // You could update the DOM to display the filtered events from here or
  // refactor the displayEvents function so it can be used.
}

function init() {
  displayEvents();
  // TODO 2: Add an event handler for clicks to each of the buttons
  // in the HTML so they trigger the filterEvents function.
}

window.onload = init;