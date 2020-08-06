@extends('app')
@section('title', 'Register')

@section('bodycontent')

<div class="home">
<div class="container">
    <div class="row text-center">
		<div class="col-lg-2 col-md-3 col-sm-12 col-xs-12 panel-wrapper-register vh-align">
			<div class="panel panel-default bg-whitelight box-shadow ">
				<div class="panel-heading">
				    Register
				</div>
				<div class="panel-body">

					<form class="form-horizontal" role="form" method="POST" action="{{ route('register') }}">
						<input type="hidden" name="_token" value="{{ csrf_token() }}">
						<div class="form-group {{ $errors->has('name') ? ' has-error' : '' }}">
							<label class="col-lg-12 col-md-12 col-sm-12 col-xs-12 control-label">Name</label>
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<input type="text" class="form-control icon" name="name" value="{{ old('name') }}" placeholder="admin">
							</div>
							@if ($errors->has('name'))
								<span class="help-block">
									<strong>{{ $errors->first('name') }}</strong>
								</span>
							@endif

						</div>

						<div class="form-group {{ $errors->has('email') ? ' has-error' : '' }}">
							<label class="col-lg-12 col-md-12 col-sm-12 col-xs-12 control-label">E-Mail Address&nbsp<i class="fa fa-envelope"></i></label>
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<input type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="admin@example.com">
							</div>
							@if ($errors->has('email'))
								<span class="help-block">
									<strong>{{ $errors->first('email') }}</strong>
								</span>
							@endif
						</div>

						<div class="form-group {{ $errors->has('password') ? ' has-error' : '' }}">
							<label class="col-lg-12 col-md-12 col-sm-12 col-xs-12 control-label">Password&nbsp<i class="fa fa-key"></i></label>
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<input type="password" class="form-control" name="password" placeholder="onlyadminknows">
							</div>
							@if ($errors->has('password'))
								<span class="help-block">
									<strong>{{ $errors->first('password') }}</strong>
								</span>
							@endif
						</div>

						<div class="form-group">
							<label class="col-lg-12 col-md-12 col-sm-12 col-xs-12 control-label">Confirm Password&nbsp<i class="fa fa-key"></i></label>
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<input type="password" class="form-control icon" name="password_confirmation">
							</div>
						</div>

						<div class="form-group">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<button type="submit" class="btn btn-block btn-green">
									Register
								</button>
							</div>
						</div>

						<div class="form-group">
                            <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12">
                                <a href="{{ route('login') }}" class="btn btn-block btn-cyan">Login</a>
                            </div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
@endsection

