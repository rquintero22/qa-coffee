(() => {
    const root = document.querySelector('#root');
    root.innerHTML = `
        <header class="header header-inicio">

            <div class="contenido-header contenedor">
                <div class="barra">
                    <div class="logo">
                        <img src="build/img/logo.svg" alt="Logo cafetería" />
                    </div>

                    <nav class="nav-principal">
                        <a class="activo" href="index.html">Inicio</a>
                        <a href="nosotros.html">Nosotros</a>
                        <a href="proceso.html">Proceso</a>
                        <a href="menu.html">Menú</a>
                        <a href="galeria.html">Galería</a>
                        <a href="contacto.html">Contacto</a>
                    </nav>
                </div>

                <div class="texto-header">
                    <h1>Disfruta una deliciosa taza de café</h1>
                </div>
            </div>

        </header>
        <main class="contenedor contenido-principal text-center">

            <section class="conoce">
                <h2><span>Conoce más </span> sobre nosotros</h2>

                <p>
                    Minim quis dolore dolore nulla adipisicing fugiat id non aute esse commodo deserunt incididunt eu. Laboris eiusmod non sunt eu officia laboris nisi. Irure tempor et magna veniam qui consequat in.
                </p>
            </section>

            <section class="iconos">
                <ul class="listado-iconos">
                    <li>
                        <img src="build/img/icono_cafe.svg" alt="icono café">
                        <p>Café</p>
                    </li>
                    <li>
                        <img src="build/img/icono_postre.svg" alt="icono postre">
                        <p>Postres</p>
                    </li>
                    <li>
                        <img src="build/img/icono_te.svg" alt="icono té">
                        <p>Té</p>
                    </li>
                </ul>
            </section>

            <section  class="experiencia">
                <h2><span>Vive la</span> experiencia</h2>

                <div class="galeria">
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_01.jpg" alt="Galeria 01" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_02.jpg" alt="Galeria 02" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_03.jpg" alt="Galeria 03" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_04.jpg" alt="Galeria 04" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_05.jpg" alt="Galeria 01" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_06.jpg" alt="Galeria 01" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_07.jpg" alt="Galeria 01" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_08.jpg" alt="Galeria 01" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_09.jpg" alt="Galeria 01" />
                    </div>
                    <div class="imagen">
                        <img src="build/img/galeria/galeria_10.jpg" alt="Galeria 01" />
                    </div>
                </div>
            </section>

        </main>

        <section class="nuestro-menu">
            <h2 class="heading-blanco"><span>Nuestro delicioso</span> Menú</h2>

            <div class="contenedor grid-menu">
                <section class="menu cafe">

                    <h3>Café</h3>

                    <ul>
                    <li>
                        <p>Café Latte <span>Café Espresso con leche caliente evaporada</span> </p>
                        <p class="precio">$25</p>
                    </li>
                    <li>
                        <p>Café Mocha <span>Espresso con crema batida</span> </p>
                        <p class="precio">$30</p>
                    </li>
                    <li>
                        <p>Café Americano <span>Café Negro</span> </p>
                        <p class="precio">$30</p>
                    </li>
                    <li>
                        <p>Capuccino<span>Espresso con una capa suave de espuma</span> </p>
                        <p class="precio">$25</p>
                    </li>
                    <li>
                        <p>Café Mocha Frio<span>Espresso, dulce con mocha y leche.</span> </p>
                        <p class="precio">$29</p>
                    </li>
                    <li>
                        <p>Mocha Frio Quemado<span>Espresso, hielo, con azucar quemada y mantequilla.</span> </p>
                        <p class="precio">$35</p>
                    </li>
                    <li>
                        <p>Latte con Caramelo<span>Espresso, leche y caramelo.</span> </p>
                        <p class="precio">$39</p>
                    </li>
                </ul>
                
                </section>

                <section class="menu comida">
                    <h3>Comida</h3>
                    <ul>
                    <li>
                        <p>Baguette de Pollo <span>Delicioso Baguette con pollo a la plancha</span> </p>
                        <p class="precio">$45</p>
                    </li>
                    <li>
                        <p>Baguette Pollo y Queso <span>Baguette combinado con Pollo y Queso Manchego</span> </p>
                        <p class="precio">$50</p>
                    </li>
                    <li>
                        <p>Baguette con Tocino<span>Baguette con especias y verduras, además de tocino</span> </p>
                        <p class="precio">$50</p>
                    </li>
                    <li>
                        <p>Baguette de Jamón<span>Delicioso Baguette con Jamón y Especias</span> </p>
                        <p class="precio">$65</p>
                    </li>
                    <li>
                        <p>Baguette con Jamón, Queso y Tocino<span>El especial de la casa</span> </p>
                        <p class="precio">$69</p>
                    </li>
                    <li>
                        <p>Sandwich de Pollo<span>Delicioso sandwich con Pollo y especies</span> </p>
                        <p class="precio">$65</p>
                    </li>
                    <li>
                        <p>Sandwich de Jamón y queso<span>Queso Amarillo con Jamón y Queso</span> </p>
                        <p class="precio">$59</p>
                    </li>
                </ul>

                </section>
            </div>
        </section>

        <section class="nuestros-testimoniales contenedor bg-white margin-negativo-10">
            <h2><span>Lo que dicen nuestros</span>Clientes</h2>

            <div class="testimonial">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquam eum eligendi animi aut odit aperiam magnam quisquam natus, beatae a voluptatibus odio eveniet impedit labore optio unde quis? Magni!</p>

                <p class="autor">- Raymond M. Quintero Aparicio</p>
            </div>
        </section>

        <footer class="footer">
            <div class="contenedor contenido-footer bg-white">
                <div class="footer-box ubicacion">
                    <h3>Ubicación</h3>
                    <p>Nicolas Copérnico 5990</p>
                    <p>Guadalajara, Jalisco</p>
                </div>
                <div class="footer-box reservacion">
                    <h3>Reservación</h3>
                    <p>Tel. 8826-8253</p>
                    <a href="tel:+50688268253">Llamar</a>
                </div>
                <div class="footer-box horario">
                    <h3>Horario</h3>
                    <p>Lun-Jue: 11:00 - 22:00</p>
                    <p>Vie-Sab: 09:00 - 24:00</p>
                    <p>Domingo: Cerrado</p>
                </div>
            </div>
            <p class="copyright">Todos los derechos reservados. La Cafetería</p>
        </footer>
    `;
})();