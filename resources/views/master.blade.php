<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{{$title or 'Web Development, User Experience & Design'}} – veare field notes</title>
        <meta http-equiv="content-language" content="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1,maximum-scale=1">
        <meta name="description" content="{{$description or 'Web Development, User Experience & Design'}}">
        <link href='{{ asset(elixir('css/app.css')) }}' rel='stylesheet' type='text/css'>

        @if (env('APP_ENV') !== 'local')
            <script>
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-7074034-1', 'auto');
              ga('require', 'linkid');
              ga('send', 'pageview');
              ga('set', 'anonymizeIp', true);

            </script>
        @endif
    </head>
    <body>
        <div class="o-container">
            @yield('content')
        </div>
        @include('footer')
    </body>
    <script src='{{ asset(elixir("js/app.js")) }}'></script>
</html>
