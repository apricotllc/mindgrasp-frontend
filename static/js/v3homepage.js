// To kill a mocking bird 
var medium_name = "Context to read: To Kill a Mocking Bird Ch.1";
var answer = "Answer: He was nearly thirteen";
var answer_2 = "Answer: 50 degrees S of the equator";
var type = "Multiple Choice";
var question = "How old was Jem when he broke his arm?";
var load_text_2 = "In the sixteenth century, an age of great marine and terrestrial exploration, Ferdinand Magellan led the first expedition to sail around the world. As a young Portuguese noble, he served the king of Portugal, but he became involved in the quagmire of political intrigue at court and lost the king's favor. After he was dismissed from service to the king of Portugal, he offered to serve the future Emperor Charles V of Spain.A papal decree of 1493 had assigned all land in the New World west of 50 degrees W longitude to Spain and all the land east of that line to Portugal. Magellan offered to prove that the East Indies fell under Spanish authority. On September 20, 1519, Magellan set sail from Spain with five ships. More than a year later, one of these ships was exploring the topography of South America in search of a water route across the continent. This ship sank, but the remaining four ships searched along the southern peninsula of South America. Finally they found the passage they sought near a latitude of 50 degrees S. Magellan named this passage the Strait of All Saints, but today we know it as the Strait of Magellan."
var load_text_1 = "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem’s fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh. He couldn’t have cared less, so long as he could pass and punt. When enough years had gone by to enable us to look back on them, we sometimes discussed the events leading to his accident. I maintain that the Ewells started it all, but Jem, who was four years my senior, said it started long before that. He said it began the summer Dill came to us, when Dill first gave us the idea of making Boo Radley come out."
var mc_options = ["He was thirteen", "He was five", "He was eighteen", "He was seven"]
var cached_bullet_points = ["1. This was the first time that a man In 1519, Ferdinand Magellan set sail"];
$(document).ready(function() {
    $(".change-col").text("");
    var noncview = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
        noncview = true;
        $(".change-col").text("Our AI");
    }
    loaded=false;
    touch = 0
    
    $("#company").mouseenter(function() {
        touch = touch + 2;
        $(".mblock-1").css("display","inline-block")
        $(".mblock-2").css("display","none")
        $(".mblock-3").css("display","none")
    })
    $("#company").mouseleave(function() {
        $(".mblock-1").mouseleave(function() {
            $(".mblock-1").css("display","none")
        })
    })
    $("#connect").mouseenter(function() {
        touch = touch + 2;
        $(".mblock-2").css("display","inline-block")
        $(".mblock-1").css("display","none")
        $(".mblock-3").css("display","none")
    })
    $("#connect").mouseleave(function() {
        $(".mblock-2").mouseleave(function() {
            $(".mblock-2").css("display","none")
        })
    })
    $("#support").mouseenter(function() {
        touch = touch + 2;
        $(".mblock-3").css("display","inline-block")
        $(".mblock-1").css("display","none")
        $(".mblock-2").css("display","none")
    })
    $("#support").mouseleave(function() {
        $(".mblock-3").mouseleave(function() {
            $(".mblock-3").css("display","none")
        })
    })
    $("#pricing").mouseenter(function() {
            $(".mblock-3").css("display","none")
            $(".mblock-1").css("display","none")
            $(".mblock-2").css("display","none")
    })
    $(".login").click(function() {
        window.location.href = "login";
	    return;
    })
    $(".signup").click(function() {
        window.location.href = "signup";
	    return;
    })
    $(".ntc-btn").click(function() {
        window.location.href = "terps"
        return;
    })
    $(".start-btn").click(function() {
        window.location.href = "signup";
	    return;
    })
    tw_loaded = false;
    $(window).on('resize scroll load', function() {
          if(noncview) {
              return;
          }
          if ($(".b1-t").isInViewport()) {
            $(".b1-t").animate({opacity: 1.0, "marginTop": "50px"},200, function() {
                $(".b1-bt").animate({opacity: 1.0},200, function() {
                    $(".start-btn").animate({opacity: 1.0},200, function() {
                        if(tw_loaded == true) {
                            return;
                        }
                        list = "our Ai"
                        $(".change-col").text("");
                        typewriter_width = 0;
                        $(".typewriter").width( typewriter_width);
                        for (var x = 0, ln = list.length; x < ln; x++) {
                            if(noncview == true) {
                                // $(".change-col").text("our Ai");
                                return;
                            }
                            setTimeout(function(y) {    
                                console.log(list[y])
                                $(".change-col").append(list[y])
                                typewriter_width = typewriter_width + 32;
                                $(".typewriter").width( typewriter_width);
                            }, x * 100, x); // we're passing x
                        }
                        tw_loaded = true;

                    })
                })
            })
            $(".b1-right").animate({opacity: 1.0},400, function() {
            })
          }
          if($(".b2-wrapper").isInViewport() && !loaded) {
            $(".b2-wrapper").animate({opacity: 1.0, "marginTop":"0px"},600, function() {
            })
        }
          if($(".b3-wrapper").isInViewport() && !loaded) {
            $(".box-1").animate({opacity: 1.0, "marginTop":"0px"},200, function() {
                $(".box-2").animate({opacity: 1.0, "marginTop":"0px"},200, function() {
                    $(".box-3").animate({opacity: 1.0, "marginTop":"0px"},200, function() {

                    })
                })
            })
        }
        if($(".b4-header-holder").isInViewport() && !loaded) {
            $(".b4-header-holder").animate({opacity: 1.0, "marginTop":"0px"},600, function() {
            })
            $(".learn-img").animate({opacity: 1.0, "marginTop":"0px"},400, function() {
            })
        }
        if($(".b5-wrapper").isInViewport() && !loaded) {
            $(".b5-wrapper").animate({opacity: 1.0, "marginTop":"0px"},600, function() {
            })
        }
        if($(".b7-wrapper").isInViewport() && !loaded) {
            $(".b7-wrapper").animate({opacity: 1.0, "marginTop":"0px"},600, function() {
            })
        }
        // $('.box').each(function() {
        //     if ($(this).isInViewport() && !loaded) {
        //       loaded = true;
        //       $(".b1-t").animate({opacity: 1.0, width: '25%', height:'300px'},300, function() {
        //           $(".box").css("min-width","300px");
        //       })
        //     }
        //   });
      });
    toggled = false;
    toggled_option = 0;
    $(".choice_options").css("display","none");
    $(".b7-content").css("display","none");
    $(".b7-options").css("display","none");
    $(".b7-sample").click(function() {
        if(!toggled) {
            toggled = true
            $(".b7-options").css("display","block");
        }
        else {
            toggled=false;
            $(".b7-options").css("display","none");
        }
    })
    $(".TKAM").click(function() {
        $(".b7-sample").text("To Kill a mocking..")
        $(".notes").css("display","none");
        $(".sample_output").css("opacity","0");
        $(".sample_output").css("display","block");
        $(".notes").css("opacity","0");
        toggled_option = 1;
        $(".b7-ask").animate({"opacity":"0"}, function(){
            $(".b7-ask").text("Ask Question");
            $(".b7-ask").animate({"opacity":"1"}, function(){})
        })
        $(".background-info").removeClass("background-info-selected");
        $(".b7-options").css("display","none");
        $("#a-1").find(".mc-answer").text("He was thirteen");
        $("#a-2").find(".mc-answer").text("He was eighteen");
        $("#a-3").find(".mc-answer").text("He was twelve");
        $("#a-4").find(".mc-answer").text("He was Fourteen");
        $(".question-type").text(type);
        $(".question").text(question);
        $(".choice_options").css("display","block");
        $(".b7-content").css("display","block");
        $(".b7-left").animate({"height":"600px"}, function(){
            $(".b7-bi-label").text(medium_name);
            $(".b7-background-info").text(load_text_1);
        })
    })
    $(".reading_passage").click(function() {
        $(".b7-sample").text("Reading Passage 1")
        $(".notes").css("display","none");
        $(".sample_output").css("opacity","0");
        $(".sample_output").css("display","block");
        $(".notes").css("opacity","0");
        toggled_option = 2;
        $(".b7-ask").animate({"opacity":"0"}, function(){
            $(".b7-ask").text("Ask Question");
            $(".b7-ask").animate({"opacity":"1"}, function(){})
        })
        $(".background-info").removeClass("background-info-selected");
        $(".b7-options").css("display","none");
        $("#a-1").find(".mc-answer").text("Greenwich");
        $("#a-2").find(".mc-answer").text("The equator");
        $("#a-3").find(".mc-answer").text("Spain");
        $("#a-4").find(".mc-answer").text("Portugal");
        $(".question-type").text("Fill In The Blank");
        $(".question").text("The passage was found near 50 degrees S of___?");
        $(".choice_options").css("display","block");
        $(".b7-content").css("display","block");
        $(".b7-left").animate({"height":"600px"}, function(){
            $(".b7-bi-label").text("Reading Comprehension Passage");
            $(".b7-background-info").text(load_text_2);
        })
            // $(".b7-ask").click(function() {
            //     if(toggled_option != 2) { return;}
            //     $(".background-info").removeClass("background-info-selected");
            //     $(".sample_output").text(answer_2);
            //     $("#a-2").addClass("background-info-selected");
            //     $(".sample_output").animate({opacity:1},function() {
            //     })
            // })     
    })
    $(".reading_passage_2").click(function() {
        $(".b7-sample").text("Reading Passage 2")
        $(".sample_output").css("display","none");
        $(".sample_output").css("opacity","0");
        toggled_option = 3;
        $(".b7-ask").animate({"opacity":"0"}, function(){
            $(".b7-ask").text("generate notes");
            $(".b7-ask").animate({"opacity":"1"}, function(){})
        })
        $(".background-info").removeClass("background-info-selected");
        $(".b7-options").css("display","none");
        $(".question-type").text("AI Note Generation");
        $(".question").text("");
        $(".choice_options").css("display","none");
        $(".b7-content").css("display","none");
        $(".b7-left").animate({"height":"400px"}, function(){
            $(".b7-bi-label").text("Reading Comprehension Passage 2");
            $(".b7-background-info").text(load_text_2);
        })   
    })
    $(".b7-ask").click(function() {
        if(toggled_option == 1) {
            $(".sample_output").text(answer);

            $("#a-1").addClass("background-info-selected");
            $(".sample_output").animate({opacity:1},function() {
            })
        }
        if(toggled_option == 2) {
        $(".background-info").removeClass("background-info-selected");
        $(".sample_output").text(answer_2);
        $("#a-2").addClass("background-info-selected");
        $(".sample_output").animate({opacity:1},function() {
        })
        }
        if(toggled_option == 3) {
        $(".notes").css("display","block");
        $(".notes").css("opacity","0");
        $(".background-info").removeClass("background-info-selected");
        $(".sample_output").text(answer_2);
        $("#a-3").addClass("background-info-selected");
        $(".notes").animate({opacity:1},function() {
        })
        }
    }) 
    $(".label-t").click(function() {
		if($(this).text() == "Terms of service") {
			window.location.href = "terms";
		}
        else if($(this).text() == "") {
			window.location.href = "terms";
		}
        else {
            alert("The site is still under-construction this will be added soon!")
        }
	})
    $(".mblock-text").click(function() {
        console.log("working");
        var $child = $(this).children(".m-bl-header");
        if($child.text() == "Terms & Services") {
            window.location.href = "terms"
        }
        if($child.text() == "Policies") {
            window.location.href = "privacypolicy";
        }
        if($child.text() == "About Us") {
            alert("The site is still under-construction this will be added soon!")
        }
        if($child.text() == "Our Team") {
            alert("The site is still under-construction this will be added soon!")
        }
        if($child.text() == "Affiliate Program") {
            alert("The site is still under-construction this will be added soon!")
        }
        if($child.text() == "Overview") {
            alert("The site is still under-construction this will be added soon!")
        }
        if($child.text() == "Tutorial") {
            alert("The site is still under-construction this will be added soon!")
        }
        if($child.text() == "Help Center") {
            alert("The site is still under-construction this will be added soon!")
        }
        if($child.text() == "Pricing") {
            alert("The site is still under-construction this will be added soon!")
        }
    })
    $(".sff").click(function() {
        console.log("working")
        window.location.href = "login";
    })
})
function remove() {
    $(".choice_options").css("display","none");
    $(".b7-content").css("display","none");
}
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
// laptop on click
var demo_type = 1
var timeout = 10000
var select_tab = false;
// 1 = note gen
// 2 = q & a
// 3 = l tran

// 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // some code..
    var intervalId = window.setInterval(function(){
        if(select_tab == true) {
            return;
        }
        /// call your function here
        if(demo_type == 1) {
            timeout = 10000
            console.log("demo 1 to 2")
            demo_type =2;
            $(".lt-1").addClass("lt-unselected")
            $(".lt-2").removeClass("lt-unselected")
            $(".lt-1-t").addClass("lt-unselected")
            $(".lt-2-t").removeClass("lt-unselected")
            $(".demo-gif").attr("src", "../static/assets/qademogif.gif")
        }
        else if(demo_type == 2) {
            console.log("demo 2 to 1")
            demo_type =1;
            timeout = 10000
            $(".lt-2").addClass("lt-unselected")
            $(".lt-1").removeClass("lt-unselected")
            $(".lt-1-t").removeClass("lt-unselected")
            $(".lt-2-t").addClass("lt-unselected")
            $(".demo-gif").attr("src", "../static/assets/notedemo.gif")
        }
      }, timeout);
      $(".lt-2").click(function() {
        $(".lt-2").removeClass("lt-unselected")

        $(".lt-1-t").addClass("lt-unselected")
        $(".lt-1").addClass("lt-unselected")
        $(".demo-gif").attr("src", "../static/assets/qademogif.gif")
        $(".lt-2-t").removeClass("lt-unselected")
        $(".lt-1-t").addClass("lt-unselected")
        select_tab = true;
      })
      $(".lt-1").click(function() {
        $(".demo-gif").attr("src", "../static/assets/notedemo.gif")
        $(".lt-1").removeClass("lt-unselected")
        $(".lt-2").addClass("lt-unselected")
        $(".lt-1-t").removeClass("lt-unselected")
        $(".lt-2-t").addClass("lt-unselected")
        select_tab = true;
    })
}
else {
    $('.lt-2-d').css("display","none")
    var intervalId = window.setInterval(function(){
        if(select_tab == true) {
            return;
        }
        /// call your function here
        if(demo_type == 1) {
            timeout = 10000
            console.log("demo 1 to 2")
            demo_type =2;
            $(".lt-1").addClass("lt-unselected")
            $(".lt-2").removeClass("lt-unselected")
            $(".lt-1-t").addClass("lt-unselected")
            $(".lt-2-t").removeClass("lt-unselected")
            $(".lt-2-d").css("display","inline-block")
            $(".demo-gif").attr("src", "../static/assets/qademogif.gif")
            $(".lt-1-d").css("display","none")
        }
        else if(demo_type == 2) {
            console.log("demo 2 to 1")
            demo_type =1;
            timeout = 10000
            $(".lt-2").addClass("lt-unselected")
            $(".lt-1").removeClass("lt-unselected")
            $(".lt-1-t").removeClass("lt-unselected")
            $(".lt-2-t").addClass("lt-unselected")
            $(".lt-1-d").css("display","inline-block")
            $(".demo-gif").attr("src", "../static/assets/notedemo.gif")
            $(".lt-2-d").css("display","none")
        }
      }, timeout);
      $(".lt-2").click(function() {
        $(".lt-2").removeClass("lt-unselected")
        $(".lt-2-d").css("display","inline-block")
        $(".lt-1-t").addClass("lt-unselected")
        $(".lt-1-d").css("display","none")
        $(".lt-1").addClass("lt-unselected")
        $(".demo-gif").attr("src", "../static/assets/qademogif.gif")
        $(".lt-2-t").removeClass("lt-unselected")
        $(".lt-1-t").addClass("lt-unselected")
        select_tab = true;
      })
      $(".lt-1").click(function() {
        $(".lt-1-d").css("display","inline-block")
        $(".demo-gif").attr("src", "../static/assets/notedemo.gif")
        $(".lt-2-d").css("display","none")
        $(".lt-1-d").css("display","inline-block")
        $(".lt-1").removeClass("lt-unselected")
        $(".lt-2").addClass("lt-unselected")
        $(".lt-1-t").removeClass("lt-unselected")
        $(".lt-2-t").addClass("lt-unselected")
        select_tab = true;
    })
}