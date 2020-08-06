<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>

        /* Click To FB Messenger Main Panel */
        .fb-style3{
            display: block;
            position: fixed;
            top: 21%;
            right: 0;
            bottom: 0;
            width: 260px;
            height: 340px;
            letter-spacing: 0.1px;
            border-radius: 7px 0 0 5px;
            box-shadow: -2px 0px 5px rgba(68, 68, 68, 0.59);
            font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
            z-index: 9999;
        }

        /* Click To FB Messenger Floating Button */
        .fb-style3 .fb-button{
            position: absolute;
            top: 45%;
            bottom: -24px;
            right: 260px;
            width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 32px;
            text-align: center;
            border-radius: 6px 0 0 6px;
            box-shadow: -2px 0px 3px rgba(68, 68, 68, 0.59);
            cursor: pointer;
        }
        .fb-style3 .fb-button img{
            width: 33px;
            margin-bottom: -7px;
            cursor: pointer;
        }

        /* Floating Panel Container */
        .fb-style3 .fb-panel{
            margin-bottom: 5%;
            width: 260px;
            border-radius: 10px 0 0 10px;
            /* box-shadow: 0px 3px 7px rgba(12, 12, 12, 0.18); */
        }

        /* Floating Panel Header */
        .fb-style3 .fb-panel .fb-header{
            padding: 15px 10px;
            border-radius: 8px 0;
            text-align: center;

            background:#3578E5;
            color:#ffffff;
        }
        .fb-style3 .fb-header img{
            padding: 5px;
            width: 30%;
            border: 2px solid #fff;
            border-radius: 100%;
        }
        .fb-style3 .fb-header h2{
            padding-top: 5px;
            margin-bottom: 0;
            font-size: 18px;
            font-weight: 700;
            line-height: 30px;
        }
        .fb-style3 .fb-header p{
            margin-bottom: 0;
            font-size: 13px;
        }

        /* Floating Panel Body */
        .fb-style3 .fb-panel .fb-body{
            padding: 20px 10px 0;
            text-align: center;
        }
        .fb-style3 .fb-body p{
            margin-bottom: 0;
            font-size: 14px;
        }

        /* Floating Panel Footer */
        .fb-style3 .fb-panel .fb-footer{
            padding: 20px 0px 0px;
            text-align: center;
            
        }
        .fb-style3 .fb-footer a{
            text-decoration: none;
            color: inherit;
        }
        .fb-style3 .fb-footer .fb-msg-button{
            position: relative;
            margin: auto;
            padding: 6px 20px;
            border-radius: 28px;
            font-size: 13px;
            font-weight: 700;

            background:#3578E5;
            color:#ffffff;
        }
        .fb-style3 .fb-footer .fb-msg-button:hover{
            box-shadow: 0px 0px 10px #999;
        }

        /* Common CSS */
        .fb-style3 .fb-footer .fb-msg-button,
        .fb-style3 .fb-footer .fb-msg-button:hover{
            -webkit-transition: all .3s ease-in-out;
            -moz-transition: all .3s ease-in-out;
            -ms-transition: all .3s ease-in-out;
            -o-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
        }



    </style>

</head>
<body>
    <div>
        <h1>Thank you for support</h1>

        <!-- Click To FB Messenger Container -->
        <div class="fb-style3">
            <!-- Click To FB Messenger Button -->
            <div class="fb-button inOut">
                <img class="fa-messenger" src="{{ asset('assets/images/support/messenger.png') }}" alt=""/>
            </div>
            
            <!-- Start Floating Panel Container -->
            <div class="fb-panel">			
                <!-- Panel Content -->
                <div class="fb-header">
                    <img src="{{ asset('assets/images/support/profile_image.jpg') }}" alt="">
                    <h2>John Mark</h2>
                    <p>Technical Manager</p>
                </div>
                <div class="fb-body">
                    <p><b>Hey there &#128515;</b></p>
                    <p>Need help ? just send me a message.</p>
                </div>
                <div class="fb-footer">
                    <a href="#" target="_blank" class="fb-msg-button">
                        MESSAGE ME !
                    </a>
                </div>
            </div>
            <!--/ End Floating Panel Container -->

        </div>
        <!--/ End Click To FB Messenger Container -->

    </div>

    <script src="{{ asset('assets/js/jquery-1.11.3.min.js') }}"></script>

    <script>

        $(document).ready(function(){

            /* Click To FB Messenger Sidebar Function */
            $('.fb-button').click (function(event){
                
                event.preventDefault();
                
                if( $ (this).hasClass('inOut') ){
                    $('.fb-style3').stop().animate({right:'-260px'},500 );

                }else{
                    $('.fb-style3').stop().animate({right:'0px'},500 );
                } 

                $(this).toggleClass('inOut');

                return false;

            });

            $(".fb-msg-button").on('click', function(event){

                // event.stopPropagation();
                // event.stopImmediatePropagation();
                event.preventDefault();

                let messengerUrl = 'https://www.messenger.com/t/';
                let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                    width=800,height=500,left=100,top=100`;

                open(messengerUrl, 'Chat', params);

            });
            


        });

    </script>

</body>
</html>