function sherlock() {
  $(".wordlistS").empty();
  $("#textOutput").load("sherlock.html");
};

function carol() {
  $(".wordlistS").empty();
  $("#textOutput").load("carol.html");
};

function theory01() {
  $(".wordlistS").empty();
  $("#textOutput").load("theory01.html");
};

function theoColl() {
  $(".wordlistS").empty();
  $("#textOutput").load("theory01.html #pcoll");
};

function theoPPS() {
  $(".wordlistS").empty();
  $("#textOutput").load("theory01.html #presPerSim");
};

function theoPPC() {
  $(".wordlistS").empty();
  $("#textOutput").load("theory01.html #presPerCont");
};

function theoPS() {
  $(".wordlistS").empty();
  $("#textOutput").load("theory01.html #pastSim");
};

function theoPC() {
  $(".wordlistS").empty();
  $("#textOutput").load("theory01.html #pastCont");
};

function theoPhrasal() {
  $(".wordlistS").empty();
  $("#textOutput").load("theory01.html #pv");
};

function theoIdio() {
  $(".wordlistS").empty();
  $("#textOutput").load("theory01.html #idio");
};

function think() {
  $("#thinkList").empty();
  $(".think").each(function(i) {
    $("#thinkList").append("<li><a href='#" + $(this).text() + "' style='font-weight:bold' onclick='setTimeout(goDownABit, 50); getElementById(\"" + $(this).text() + "\").classList.add(\"findWord\")';>" + $(this).text() + "</a></li>");
  });
};

function phrasal() {
  $("#phrasalList").empty();
  $(".phrasal").each(function(i) {
    $("#phrasalList").append("<li><a href='#" + $(this).text() + "' style='font-weight:bold' onclick='setTimeout(goDownABit, 50); getElementById(\"" + $(this).text() + "\").classList.add(\"findWord\")';>" + $(this).text() + "</a></li>");
  });
};

function coll() {
  $("#collList").empty();
  $(".phracoll").each(function(i) {
    $("#collList").append("<li><a href='#" + $(this).text() + "' style='font-weight:bold' onclick='setTimeout(goDownABit, 50); getElementById(\"" + $(this).text() + "\").classList.add(\"findWord\")';>" + $(this).text() + "</a></li>");
  });
};

function idioms() {
  $("#idiomsList").empty();
  $(".idioms").each(function(i) {
    $("#idiomsList").append("<li><a href='#" + $(this).text() + "' style='font-weight:bold' onclick='setTimeout(goDownABit, 50); getElementById(\"" + $(this).text() + "\").classList.add(\"findWord\")';>" + $(this).text() + "</a></li>");
  });
};

$('#thinking').on("click", function() {
  /*$('.think').toggleClass('green');*/
  if (this.checked) {
    $('.think').removeClass('foundWord')
    $('.think').addClass('green')
  } else {
    $('.think').removeClass('green')
  }
});

$('#phrasal').on("click", function() {
  /*$('.phrasal').toggleClass('aqua');*/
  if (this.checked) {
    $('.phrasal').removeClass('foundWord')
    $('.phrasal').addClass('aqua')
  } else {
    $('.phrasal').removeClass('aqua')
  }
});

$('#collocations').on("click", function() {
  /*$('.phracoll').toggleClass('yellow');*/
  if (this.checked) {
    $('.phracoll').removeClass('foundWord')
    $('.phracoll').addClass('yellow')
  } else {
    $('.phracoll').removeClass('yellow')
  }
});

$('#idioms').on("click", function() {
  if (this.checked) {
    $('.idioms').removeClass('foundWord')
    $('.idioms').addClass('violet')
  } else {
    $('.idioms').removeClass('violet')
  }
  /*  $('.idioms').toggleClass('violet');$('.phrasal').removeClass('foundWord')
  $('.phracoll').addClass('yellow')$('.phrasal').removeClass('foundWord') */
});





function textToAudio() {
  /*let msg = document.getElementById("two").textContent;*/
  let msg = document.getElementById("textOutput").textContent;

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "de-DE"; /*"en-US";*/

  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}



function readCancel() {

  let speech = new SpeechSynthesisUtterance();

  window.speechSynthesis.cancel(speech);
}


function restart() {
  readCancel();
  textToAudio();
}


function readPause() {

  let speech = new SpeechSynthesisUtterance();

  window.speechSynthesis.pause(speech);

  $("#pause").replaceWith("<button id='resume' type='button' class='btn btn-info mr-sm-2' onclick='readResume()'><strong>GO!</strong></button>");

}


function readResume() {
  /*let msg = document.getElementById("two").textContent;*/
  let msg = document.getElementById("textOutput").textContent;

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "de-DE"; /*"en-US";*/

  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.resume(speech);

  $("#resume").replaceWith("<button id='pause' type='button' class='btn btn-warning mr-sm-2' onclick='readPause()'><strong>||</strong></button>");
}


function textToAudio2() {
  let ins = document.getElementById("insertSpeak").value;

  let repeat = new SpeechSynthesisUtterance();
  repeat.lang = "de-DE";

  repeat.text = ins;
  repeat.volume = 1;
  repeat.rate = 1;
  repeat.pitch = 1;

  window.speechSynthesis.speak(repeat);
}


$("#textGrow").on("click", function() {
  $("body").css("font-size", "+=15%");
});

$("#textShrink").on("click", function() {
  $("body").css("font-size", "-=15%");
});

$("#textDark").on("click", function() {
  $("body").toggleClass("dMode");
});




$('#textSelector').on('change', function() {
  var selectedText = $("#textSelector option:selected").val();
  if (selectedText === "carol") {
    carol();
  } else if (selectedText === "sherlock") {
    sherlock();
  } else {
    $("#textOutput").html("<h3 style='text-align: center; margin-top:10%;'><strong>Select a text! ;)</strong></h3>");
  }
});


$('#wordlistToggler').on("click", function() {
  $('#latWordList').slideToggle();
});


let beforeScroll = window.pageYOffset;

$(window).on("scroll", function() {
  let scrollHere = window.pageYOffset;
  if (beforeScroll > scrollHere) {
    $("#navbar").css("top", "0");
  } else {
    $("#navbar").css("top", "-100px");
  }

  beforeScroll = scrollHere;


});

$("#hideEl01").on("click", function() {
  $("#noteBox").slideUp();
  $("#divToRemove01").slideDown("#divToRemove01");
  /*$("#three").css("padding-top", "0.3%");*/
});

$("#divToRemove01").on("click", function() {
  $("#divToRemove01").slideUp();
  $("#noteBox").slideDown("#noteBox");
  /*$("#three").css("padding-top", "2%");*/
});


$("#hideEl02").on("click", function() {
  $("#theoryBox").slideUp();
  $("#divToRemove02").slideDown("#divToRemove01");
});

$("#divToRemove02").on("click", function() {
  $("#divToRemove02").slideUp();
  $("#theoryBox").slideDown("#theoryBox");
});


$("#hideEl03").on("click", function() {
  $("#textBox").slideUp();
  $("#divToRemove03").slideDown("#divToRemove03");
  $("#latWordList").slideUp();
});

$("#divToRemove03").on("click", function() {
  $("#divToRemove03").slideUp();
  $("#textBox").slideDown("#textBox");
});


$("#hideEl04").on("click", function() {
  $("#exerciseBox").slideUp();
  $("#divToRemove04").slideDown("#divToRemove04");
});

$("#divToRemove04").on("click", function() {
  $("#divToRemove04").slideUp();
  $("#exerciseBox").slideDown("#exerciseBox");
});


$("#hideEl05").on("click", function() {
  $("#idiomBox").slideUp();
  $("#divToRemove05").slideDown("#divToRemove05");
});

$("#divToRemove05").on("click", function() {
  $("#divToRemove05").slideUp();
  $("#idiomBox").slideDown("#idiomBox");
});


$("#hideEl06").on("click", function() {
  $("#accordionExample").slideUp();
  $("#divToRemove06").slideDown("#divToRemove06");
  $("#hideEl06").slideUp();
});

$("#divToRemove06").on("click", function() {
  $("#divToRemove06").slideUp();
  $("#accordionExample").slideDown("#accordionExample");
  $("#hideEl06").slideDown();
});


$("#hideEl07").on("click", function() {
  $("#carouselExampleIndicators").slideUp();
  $("#divToRemove07").slideDown("#divToRemove07");
  $("#hideEl07").slideUp();
});

$("#divToRemove07").on("click", function() {
  $("#divToRemove07").slideUp();
  $("#carouselExampleIndicators").slideDown("#carouselExampleIndicators");
  $("#hideEl07").slideDown();
});


$( "#imgTransl" ).click(function() {
  $( "#hamSlot" ).slideToggle("slow");
  $( "#baumSlot" ).slideToggle("slow");
});


function goDownABit() {
  window.scrollBy(0, -200);
};
