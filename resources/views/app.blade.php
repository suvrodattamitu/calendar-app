<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Meta Tags -->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="keywords" content="todoapp|management|calendar|notes|event|project|task|budget">
        <meta name="title" content="Ninja Management">
        <meta name="description" content="todoapp helps organises your projects & tasks & helps you accomplish and manage the projects on time.">
        <link rel="author" href="humans.txt" />
        <!--Shortcut icon-->
        <link rel="icon" type="image/png" href="{{ asset('assets/images/logo/logo.png') }}" />

        <title>@yield('title')</title>
        <!-- <link href='https://fonts.googleapis.com/css?family=Muli:400,300,300italic,400italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,700,400italic,700italic,900,900italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic|Montserrat:400,700|Ubuntu:400,300,300italic,400italic,500italic,500,700,700italic|Lobster|Pacifico|Quicksand:400,300,700|Questrial|Architects+Daughter|Kaushan+Script|Satisfy|Fugaz+One|Oleo+Script:400,700|Audiowide' rel='stylesheet' type='text/css'> -->
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <link href="{{ asset('assets/css/all.css') }}" rel="stylesheet" charset="utf-8" type='text/css' >
        <link rel="stylesheet" href="{{asset('assets/css/jquery-ui.css') }}">    
    </head>
    <body id="page-top">
        <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
        chromium.org/developers/how-tos/chrome-frame-getting-started -->
        <!--[if lt IE 7]>
        <p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p>
        <![endif]-->
        @yield('bodycontent')
    </body>
</html>
