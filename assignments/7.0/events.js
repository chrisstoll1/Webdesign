var counter = 0;
function submit() {
    counter += 1;
    var x = document.getElementById("eventform");
    var e = document.getElementById("events");
    g = document.createElement('div');
    id = "div" + counter;
    g.setAttribute("id", id);
    e.appendChild(g);
    document.getElementById(id).innerHTML = ("<div class='event'><div class='header'>" + x.elements[0].value + "</div><div class='contents'><div class='title'><b>Title:</b> " + x.elements[0].value + "</div> <div class='st'><b>Start Time:</b> " + x.elements[1].value + "</div><div class='et'><b>End Time:</b> " + x.elements[2].value + "</div><div class='des'><b>Description:</b> " + x.elements[3].value + "</div></div></div>");
    x.reset();
  }