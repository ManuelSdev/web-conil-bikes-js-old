# GOOGLE PROVIDER

-  Tienes esta info en el método doSignInWithRedirect de useFirebaseAuth
   //CLAVE evitar bucles con onAuthStateChanged
   //https://firebase.google.com/docs/auth/web/manage-users?hl=es-419
   //uso opción 3
   //https://firebase.google.com/docs/auth/web/redirect-best-practices?hl=es-419#proxy-requests
   //Solución proxy inverso en next: rewrite en next.config.js
   //https://stackoverflow.com/questions/75349917/confirmation-of-why-cross-origin-problems-occur-when-using-signinwithredirect-ar
   //https://community.fly.io/t/reverse-proxy-to-firebase-authentication-for-simple-nextjs-app/12013/2
-  TIenes que tener la url de la app registrada en gcloud
   https://developers.google.com/identity/protocols/oauth2/web-server?hl=es-419#authorization-errors-redirect-uri-mismatch
   Ahi le picas a credential page
   En ID de clientes OAuth 2.0 tienes conil bikes
   Dentro, tienes lo origenes autorizados
   Esta mierda está conectada a: - la env var NEXT_PUBLIC_FB_AUTH_DOMAIN - el rewrite en nextconfig
