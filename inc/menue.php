<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check2" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </symbol>
  <symbol id="circle-half" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
  </symbol>
  <symbol id="moon-stars-fill" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
  </symbol>
  <symbol id="sun-fill" viewBox="0 0 16 16">
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
  </symbol>
</svg>

<nav class="navbar navbar-expand navbar-dark bg-dark fixed-top p-md-2 bg-opacity-75 shadow">

 <!-- Language selection 

<div id="deutsch"><form method="POST" action=""><fieldset><button type="submit" name="language" value="de" title="Startseite auf Deutsch" style="border:none; background:none;"><img src="images/assets/deutsch.svg.png" style="height:10px;" alt="de" /></button></fieldset></form></div>
<div id="english"><form method="POST" action=""><fieldset><button type="submit" name="language" value="en" title="This page in English" style="border:none; background:none;"><img src="images/assets/english.svg.png" style="height:10px;" alt="en" /></button></fieldset></form></div>
<div id="spanisch"><form method="POST" action=""><fieldset><button type="submit" name="language" value="es" title="Esta página en español" style="border:none; background:none;"><img src="images/assets/spanisch.svg.png" style="height:10px;" alt="es" /></button></fieldset></form></div>
-->
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <li class="nav-item dropdown" style="display:block">
          <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <?php echo LENGUAGE_MENU; ?>
          </a>
          <ul class="dropdown-menu" aria-labelledby="languageDropdown">
            <li><a class="dropdown-item" href="?language=de"><img src="images/assets/deutsch.svg.png" style="height:10px;" alt="de" />&nbsp;Deutsch</a></li>
            <li><a class="dropdown-item" href="?language=en"><img src="images/assets/english.svg.png" style="height:10px;" alt="en" />&nbsp;English</a></li>
            <li><a class="dropdown-item" href="?language=es"><img src="images/assets/spanisch.svg.png" style="height:10px;" alt="es" />&nbsp;español</a></li>
            <!-- Add more languages as needed -->
          </ul>
        </li>
      <div class="mx-auto"></div> <!-- set theme toggler to the right -->
      <ul class="navbar-nav">
      <li class="nav-item dropdown">

      <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle theme (auto)">  <svg class="bi my-1 theme-icon-active">
    <use href="#circle-half"></use>
  </svg>
  <span class="d-lg-none ms-2" id="bd-theme-text"></span>
</button>
<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
  <li>
    <button type="button" class="dropdown-item d-flex h-0 align-items-center" data-bs-theme-value="light" aria-pressed="false">
      <svg class="bi me-2 opacity-50 theme-icon">
        <use href="#sun-fill"></use>
      </svg>
      Light
      <svg class="bi ms-auto d-none">
        <use href="#check2"></use>
      </svg>
    </button>
  </li>
  <li>
    <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
      <svg class="bi me-2 opacity-50 theme-icon">
        <use href="#moon-stars-fill"></use>
      </svg>
      Dark
      <svg class="bi ms-auto d-none">
        <use href="#check2"></use>
      </svg>
    </button>
  </li>
  <li>
    <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
      <svg class="bi me-2 opacity-50 theme-icon">
        <use href="#circle-half"></use>
      </svg>
      Auto
      <svg class="bi ms-auto d-none">
        <use href="#check2"></use>
      </svg>
    </button>
  </li>
</ul>
</li>
      </ul>
    </div>
  </div>
</nav>