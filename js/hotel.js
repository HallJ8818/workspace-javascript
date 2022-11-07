// for htoel registration
var test = {
    hotelname: "marriot",
    room: 350,
    booked: 120,
    display: function(){
        return this.hotelname;
    }
};

console.log(test.hotelname);
console.log(test.room);
//event
$(function(){
    $('submit').click(reservation);
});

function reservation() {
    var guest = {
        name: $('name').val(),
        numberofGuest: $('#num').val()
    }
}


function displayR() {
    $("form").append("<table>");
    for(var i in guestgroup){
        var theguest = guestgroup[i];
        var row = "<tr><td>"+theguest.name+"</td><td>"+theguest.ch
        $("table").append(row);
    }
}