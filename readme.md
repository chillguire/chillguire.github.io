## To do, improvements, ideas
* accesibilidad e i18n
	* homologar ingles y español
	* outline, tabs, tabindex y tab order, etc
	* tooltip en el @ del footer que diga @chillguire, y ARIA attributes, lectores de pantalla, etc
* Override estilos del right click menu just for fun?
* Skeleton screen when loading
	* Y verificar si los renders de react estan siendo eficientes
	* animaciones de entrada ysalida de componentes
* Estilo y layout de la pagina de error
* localstorage para persistir estado al refrescar pagina
* en el boton con el dns del proyecto probar hacerle un get request antes de redireccionar, si responde es que sigue arriba, si no es que ya scheduler lo apago y hay que mostrar el boton de nuevo - puede ser tambien al cargar la pagina, y se puede dejar un timeout por si la pantalla queda inactiva cada ~1 hora le haga request para refrescar
	* o usar websockets con lambda directamente para notificar cuando se apaga
## Known errors
* install as pwa, open external link/forces in-app browser
* sometimes content will be positioned too low on the page - probably bc of the useLayoutEffect
* cuando cambias la pagina se hace scroll to top como forzao. Ver si se puede hacer smoother