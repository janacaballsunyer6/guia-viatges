Guia de Viatges
Temàtica i descripció
Guia de Viatges és una aplicació web desenvolupada amb Vue 3 que permet consultar diferents destinacions turístiques d'arreu del món.

La informació s'emmagatzema a Cloud Firestore i es recupera dinàmicament per mostrar-la a l'usuari. L'aplicació utilitza components reutilitzables, comunicació amb props i navegació entre pàgines mitjançant Vue Router.

Tecnologies utilitzades
Vue 3
Vue Router
Vite
Firebase Hosting
Cloud Firestore
Instal·lació de dependències
npm install
Execució local
npm run dev
L'aplicació s'executarà localment a:

http://localhost:5173
Generació de la versió de producció
npm run build
Els fitxers generats es creen dins de la carpeta:

dist/
Desplegament a Firebase Hosting
firebase deploy --only hosting
Components propis
SiteHeader.vue
Component encarregat de mostrar la capçalera de l'aplicació i els enllaços de navegació.

DestinationCard.vue
Component encarregat de mostrar la informació d'una destinació turística.

SiteFooter.vue
Component encarregat de mostrar el peu de pàgina de l'aplicació.

Exemple de comunicació amb props
Component pare
DestinacionsView.vue
Aquest component recupera les dades de la col·lecció destinacions de Cloud Firestore.

Component fill
DestinationCard.vue
Aquest component rep les dades des del component pare mitjançant props i les mostra a la interfície.

Props utilitzades
nom
pais
continent
descripcio
imatge
Exemple:

<DestinationCard
  :nom="dest.nom"
  :pais="dest.pais"
  :continent="dest.continent"
  :descripcio="dest.descripcio"
  :imatge="dest.imatge"
/>
Rutes de l'aplicació
/
Pàgina principal de la Guia de Viatges. Presenta el projecte i dona accés a les diferents seccions de l'aplicació.

/destinacions
Mostra les destinacions turístiques recuperades des de Cloud Firestore.

/sobre
Mostra informació general sobre el projecte i les tecnologies utilitzades per desenvolupar-lo.

Cloud Firestore
Col·lecció utilitzada
destinacions
Camps principals
nom
pais
continent
descripcio
imatge
Vista que mostra les dades
DestinacionsView.vue
Aquesta vista recupera les dades de Firestore i les mostra utilitzant el component DestinationCard.vue.

Aplicació publicada
https://guia-viatges.web.app

Repositori GitHub
https://github.com/janacaballsunyer6/guia-viatges