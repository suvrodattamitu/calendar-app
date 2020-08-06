@extends('app')

@section('title', 'Login')

@section('bodycontent')

<div class="home">
<div class="container ">
    <div class="row text-center">
		<div class="col-lg-2 col-md-4 col-sm-6 col-xs-12 vh-align">
		    <div class="panel-wrapper">
                <div class="panel panel-default bg-whitelight box-shadow">
                    <div class="panel-heading margin-bottom-10">
                        Login
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <div class="form-group {{ $errors->has('email') ? ' has-error' : '' }}">
                                <label class="col-lg-12 col-md-12 col-sm-12 col-xs-12 control-label">E-Mail&nbsp<i class="fa fa-envelope"></i></label>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="email" class="form-control icon" name="email" value="{{ old('email') }}" placeholder="e.g. admin@example.com">
                                </div>
                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif

                            </div>

                            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <label class="col-lg-12 col-md-12 col-sm-12 col-xs-12 control-label">Password&nbsp<i class="fa fa-key"></i>
                                </label>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="password" class="form-control" name="password" placeholder="e.g. onlyadminknows">
                                </div>
                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif

                            </div>

                            <div class="form-group">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="checkbox">
                                        <label class="col-md-12 control-label">
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12">
                                    <button type="submit" class="btn btn-block btn-cyan" style="">
                                        Login
                                    </button>
                                </div>
                            </div>
                            <!-- <div class="form-group">
                                <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12">
                                    <a href="{{ url('/password/email') }}" class="btn btn-block btn-red">Forgot Password?</a>
                                </div>
                            </div> -->
                            <div class="form-group">
                                <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12">
                                    <a href="{{ route('register') }}" class="btn btn-block btn-orange">Register</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
		</div>
	</div>
</div>
</div>
@endsection
