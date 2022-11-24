let bars = document.querySelector( '.bars' ),
    burger = document.querySelector( '.burger' )
bars.onclick = function ( ) {
    burger.classList.toggle( 'active' )
}