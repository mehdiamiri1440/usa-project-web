importScripts('https://www.gstatic.com/firebasejs/7.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDHAonYamODsV034KRTjzd4_C_z4YpzaRo",
    authDomain: "incobac-64ec9.firebaseapp.com",
    databaseURL: "https://incobac-64ec9.firebaseio.com",
    projectId: "incobac-64ec9",
    storageBucket: "incobac-64ec9.appspot.com",
    messagingSenderId: "946346601127",
    appId: "1:946346601127:web:74e870ed6dd09f369bc982",
    measurementId: "G-ZXCG6RTHC7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();