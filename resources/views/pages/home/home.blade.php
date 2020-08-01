@extends('partials.bodywithoutsidenav')

@section('title', 'Home | ToDoApp')

@section('content')

<div class="home">
    <div class="container">
        <div class="row text-left vh-align">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="jumbotron bg-inherit text-white" >
                    <div class="container">
                        <p class="pull-right">
                            <a href="{{ route('login') }}" class="btn btn-cyan">Login</a>
                            <a href="{{ route('register') }}" class="btn btn-green">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@stop