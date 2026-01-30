<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="{{ route('productos.index') }}">📦Inventario</a>
        <div class="ms-auto d-flex align-items-center gap-2">
            @guest
            <a href="{{ route('login') }}" class="btn btn-primary btn-sm">Login</a>
            <a href="{{ route('register') }}" class="btn btn-outline-primary btn-sm">Register</a>
            @endguest
            @auth
            <span class="text-muted">
                {{ auth()->user()->name }}
            </span>
            <a href="{{ route('profile.edit') }}" class="btn btn-outline-secondary btn-sm">Editar perfil</a>
            <form method="POST"
                action="{{ route('logout') }}"
                class="d-inline">
                @csrf
                <button class="btn btn-outline-danger btn-sm">Logout</button>
            </form>
            @endauth
        </div>
    </div>
</nav>