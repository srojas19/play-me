# play-me
Web app que expone algunas funcionalidades del API de Spotify, como:
- Autenticarse con una cuenta de Spotify
- Acceder a la lista de artistas y canciones favoritas
- Acceder a la lista de artistas seguidos
- Crear playlists colaborativos (en preproducción)

**Web development 2017-1**  
**Universidad de los Andes**  
**Pagina del curso:**http://johnguerra.co/classes/webDevelopment_fall_2017/  

##Integrantes

- Brandon Bohorquez
- Santiago Rojas Herrera

## Stack

- Backend: Meteor
- Frontend: React
- Datos: Spotify API y Mongo

Complementos de Meteor:
- [`xinranxiao:accounts-spotify`](https://github.com/xinranxiao/meteor-accounts-spotify)
- [`xinranxiao:spotify-web-api`](https://github.com/xinranxiao/meteor-spotify-web-api)

## Instalación

Es necesario crear una cuenta en Spotify, para:
1. Acceder a https://beta.developer.spotify.com/
2. Acceder al Dashboard, crear e ingresar una aplicacion
3. En edit settings, agregar http://localhost:3000/_oauth/spotify?close como un Redirect URI
4. Tomar nota del Client ID y Client Secret de la aplicación

Entonces:

 ```  
git clone https://github.com/srojas19/play-me.git  
cd play-me/  
export SPOTIFY_CLIENTID=...  
export SPOTIFY_REDIRECTURI=...  
export SPOTIFY_SECRET=http://localhost:3000/_oauth/spotify?close  
meteor run  
 ```


