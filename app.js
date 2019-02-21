var local = {};
local.avatar = "data:image/png;base64,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";

var remote = {};
remote.avatar = "Newlogo.jpg"//"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logo_of_the_Telekom_Malaysia.svg/660px-Logo_of_the_Telekom_Malaysia.svg.png";


var accessToken = "027ee5be38f544429e62872b27e7d849";
var baseUrl = "https://api.api.ai/v1/";

function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var dateObj = new Date();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var month = monthNames[dateObj.getMonth()]; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    newdate = day + "-" + month + "-" + year;
    var strTime =newdate+' | '+ hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function insertChat(who, text){
    var control = "";
    var date = formatTime(new Date());

     if (who == "local"){

         control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p style="font-size:14px;;line-height:140%;">'+text+'</p>' +
                                '<p><small style="color:#337ab7;font-size:9px">'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+local.avatar+'" /></div>' +
                  '</li>';
    }else{
        control = '<li style="width:100%">' +
                  '<img class="img-circle" align="left" style="width:15%;height:20%;padding-right:5px;" src="'+ remote.avatar +'" />'+
                        '<div class="msj macro">' +
                            '<div class="text text-l">' +
                                '<p style="font-size:14px;line-height:140%;">'+ text +'</p>' +
                                '<p><small style="color:white;font-size:9px;">'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';
    }
    $("#messages").append(control);
    var objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight;
}
hideLoading();
function hideLoading()
{
    $("#loading").hide();
    $("#chat-icon").hide();
    $(".innerframe").hide();
    $(".innerframe").delay(5000).fadeIn(100);
    insertChat("remote","how can i help you");
}
// $("#chat-panel").on('click',function(){
//     $(".innerframe").toggle();
// });

$("#close_button").on('click',function(){
    $(".frame").hide();
    $("#chat-icon").show();
    resetChat();
});

$("#chat-icon").on('click',function(){
    $(".frame").show();
    $(".innerframe").show();
    resetChat();
          insertChat("remote","how can i help you");
});

$("#minimize_button").on('click',function(){
    $(".innerframe").toggle();
    $("#chat-icon").hide();
});


$("#reload_button").on('click',function(){
        resetChat();
            $('#loading').fadeIn('slow', function(){
               $('#loading').delay(5000).fadeOut();
            });
            setTimeout(function() { writeMessage(); }, 6000);

});

$("#expand_button").on('click',function(){
  $('.frame').slideToggle().toggleClass('active');
});
$('#collapse').click(function(){
    $("#expand_button").trigger('click');
});



function writeMessage(){
    insertChat("remote","Welcome back, how can i help you");
}

function resetChat(){
    $("#messages").empty();
}

$(".mytext").on("keyup", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("local", text);
            $(this).val('');
            queryBot(text)
        }
    }
});

resetChat();

// (function($){
//     $(function() {
//         var _timeout,
//             _wait = 50000; // 15 seconds

//         $(document).mousemove(function() {
//             clearTimeout(_timeout);
//             _timeout = setTimeout(function() {
//                 //resetChat();
//                 insertChat("remote","Hello are you lost?");
//             }, _wait);
//         });
//     });
// })(jQuery);

function yes1(objButton)
{

// var e = jQuery.Event("keydown", {keyCode: 13});
var t1 =  objButton.value;
       insertChat("local",t1);
       queryBot(t1);
       // $('.mytext').append(t1);
       // $('.mytext').trigger(e);
}

function no1(objButton)
{
  alert(objButton.value);
}

function queryBot(text) {
            $.ajax({
                type: "POST",
                url: baseUrl + "query?v=20150910",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                headers: {
                    "Authorization": "Bearer " + accessToken
                },
                data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
                success: function(data) {
                    // insertChat("remote",data.result.fulfillment.speech);
                    console.log((data.result.fulfillment.messages).length)
                    if ((data.result.fulfillment.messages).length > 1 ){

                        for (var c in data.result.fulfillment.messages){
                            if (data.result.fulfillment.messages[c].type == 0){
                                   if ("platform" in data.result.fulfillment.messages[c]){
                                       console.log(data.result.fulfillment.messages[c].platform)
                                   }
                                   else{
                                   insertChat("remote",data.result.fulfillment.messages[c].speech);
                                   // insertChat("remote","<button>hi</button>");
                                   // insertChat("remote",);
                                   console.log(data.result.fulfillment.messages[c])
                               }}

                        }

                    }
                    else{
                          insertChat("remote",data.result.fulfillment.speech);
                         console.log(data.result.fulfillment.messages)
                         //insertChat("remote","hi1");
                         //insertChat("remote",`<input type='button' value='Yes' id="yes1" onclick='yes1(this)' /><input type='button' value='No' onclick='no1(this)' />`);
                    }
                },
                error: function() {
                    insertChat("remote","Server Not Responding. Please try again..");
                }
            });
    }
