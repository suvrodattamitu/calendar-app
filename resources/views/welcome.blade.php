<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Ninja Management</title>

        <!-- Fonts -->
        <!-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> -->

        <!-- <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet"> -->
        <link rel="icon" type="image/png" href="{{ asset('assets/images/logo/logo.png') }}" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <link href="{{ asset('assets/css/materialdesignicons.min.css') }}" rel="stylesheet" charset="utf-8" type='text/css' >
        <link href="{{ asset('assets/css/all.css') }}" rel="stylesheet" charset="utf-8" type='text/css' >
        
        <link rel="stylesheet" href="{{asset('assets/css/jquery-ui.css') }}">
        <link href="{{asset('css/app.css')}}">

        <link rel="stylesheet" href="{{asset('assets/css/elements.css')}}">

        <script>

            window.user = @json(
                [
                    'user'  => auth()->user()
                ]
            );

        </script>


    </head>
    <body>

        @auth
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        @endauth

        <div id="loader" style="display:block"></div>
        
        <div id="content" style="display:none">

            <div id="fluentmanagement">
                <admin></admin>
            </div>
        
        </div>

        <script src="{{ asset('js/boot.js') }}"></script>
        <script src="{{asset('js/app.js')}}"></script>
        <script type="text/javascript" src="{{ asset('assets/js/all.js') }}"></script>
        <script>window.jQuery || document.write('<script src="{{ asset('assets/js/jquery-1.11.3.min.js') }}">\x3C/script<\/script>');</script>
        <script>window.Modernizr || document.write('<script src="{{ asset('assets/js/modernizr-2.6.2.min.js') }}">\x3C/script<\/script>');</script>

        <script>

        $(window).load(function() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("content").style.display = "block";
        });


        </script>


    </body>
</html>