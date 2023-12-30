var i = 0;
var txt1=
    'Hey!! Shreya....! <<             Now I want to say something special to you. <<<                   So , Please read everything carefully....!                                                                     >When I saw you for the first time < You seems something to me. <<                    As the days goes < you get closer to me........ ! <<                                 I dont know the reason why your thoughts always resonates inside my mind......!                         >Everything about you is always intresting for me..... !                              << I am somewhat nervous Because I havent said thse words to anyone and I wont say to anyone in future....!                                                                                          >I Love my parents so much than anything else in this world.....!                      << Now You are the only person whom I Love equally with my parents.....!                           >I Love U <Sweetheart................! |                                    <<<< Give me One Chance to Prove my Love ....! from RN';
    var speed = 55;
    typewriter();
    function typewriter () {
        if (i < txt1.length) {
            if (txt1.charAt(i) == '<') 
                document.getElementById('text1').innerHTML += '</br>';
            else if (txt1.charAt(i) == '>')
                document.getElementById('text1').innerHTML = '';
            else if (txt1.charAt(i) == '|') {
                $('.bg_heart').css('background-image',"')");
            }else document.getElementById(text1).innerHTML += txt1.charAt(i);
            i++;
            setTimeout(typewriter, speed);
        }
    }