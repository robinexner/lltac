/*
 * This file is part of the cookiejars project.
 * Copyright (c) 2025 Robin Exner (https://robinexner.de)
 * GitHub: https://github.com/robinexner/cookiejars
 * This software is licensed under the MIT License.
 * See the LICENSE file for more information.
 */

import FundoCookies from './util/cookies.js';
import { Notification } from './notification/notification.js';
import { loadCSS } from './util/util.js';

loadCSS("../lltac.css");

const fundoCookies = new FundoCookies();

const cookiejarLocales = {
    en: {
        cookieHeadlines: [
            "Care for a cookie? Freshly baked, just for you!",
            "Without cookies, this place wouldn't be the same.",
            "Cookies make everything better. Including this site.",
            "This site runs on cookies - just like grandma's recipes.",
            "We've got cookies. They're always free.",
            "Cookies are the secret ingredient to success.",
            "This website without cookies? Unthinkable.",
            "Cookies belong here. You'll see why.",
            "We don't do things halfway - only whole cookies.",
            "Cookies are our little treat for you.",
            "We bake cookies and serve them fresh.",
            "Nothing works here without cookies. Trust us.",
            "Cookies: The foundation of a good experience.",
            "We love sharing cookies. Grab one!",
            "Everything's more fun with cookies.",
            "Cookies are like good friends: always there.",
            "Grab a cookie, and you're ready to go!",
            "Cookies and content? A winning combo.",
            "We've got cookies. Stay a while!",
            "Life without cookies is possible, but pointless.",
            "Cookies are the heart of this website.",
            "Cookies and good content - sounds fair, right?",
            "No cookies? No deal.",
            "Cookies are love in data form.",
            "Grab a cookie, let's get started!",
            "Things run smoother with cookies.",
            "Cookies for the best experience - calorie-free, of course.",
            "Cookies: The secret behind it all.",
            "Have you earned your cookie today?",
            "We've got cookies. You bring the appetite.",
            "This website loves cookies - just like you.",
            "Cookies power the internet. Probably.",
            "Cookies - the universal language of the web.",
            "A cookie for you, a cookie for us. Deal?",
            "Cookies: Because we can't help ourselves.",
            "Cookies. No questions, just joy.",
            "Cookies are the backbone of everything here.",
            "Without cookies, this would be half as good.",
            "A cookie a day keeps the boredom away.",
            "Cookies and a bit of magic. That's the recipe.",
            "Cookies, because you're worth it.",
            "Cookies are the answer. No matter the question.",
            "We've got cookies. The rest doesn't matter.",
            "Life without cookies? Not here.",
            "Cookies: The best thing that can happen to you today.",
            "Take a cookie, then we'll talk.",
            "Cookies are like little virtual hugs.",
            "Without cookies, we wouldn't be here. Seriously.",
            "Cookies are our way of saying thank you.",
            "Cookies: Our contribution to your happiness.",
            "Cookies - all you really need.",
            "Without cookies? Without us.",
            "Cookies are like good friends: you can never have too many.",
            "Cookies make everything better - ask grandma!",
            "Cookies are always the right choice.",
            "There are two kinds of websites: with cookies and boring ones.",
            "Cookies prove that life is good.",
            "Take a cookie. You've earned it.",
            "Cookies and good vibes - our specialty.",
            "Everything's better with cookies. Try it.",
            "We believe in cookies. Don't you?",
            "No cookies, no fun. That's the rule.",
            "Cookies are the key to everything.",
            "Cookies: Because everything tastes better with them.",
            "Welcome! The cookies are ready for you.",
            "Cookies - the foundation of the internet.",
            "Everything's easier with cookies.",
            "We serve only the best cookies.",
            "Cookies - all you'll ever need.",
            "It all revolves around cookies here. That's just the way it is.",
            "Hungry? We've got cookies!",
            "Cookies that truly make you happy.",
            "This site lives on cookies. Honestly!",
            "Cookies: More than just a snack.",
            "Without cookies, this place wouldn't be the same.",
            "Cookies are the answer to everything.",
            "Cookies - where everything good begins.",
            "Things start with cookies here!",
            "No cookies, no fun. That's how it is.",
            "A cookie makes every day better.",
            "Cookies are love. Plain and simple.",
            "Everything begins with a cookie.",
            "Cookies: The best thing that's happened to us.",
            "Cookies are magic that works.",
            "Cookies: Because why not?",
            "You love cookies? So do we.",
            "Cookies make everything better. Period.",
            "A cookie a day keeps the boredom away.",
            "Cookies are our superpower.",
            "Treat yourself to a cookie. You deserve it.",
            "Welcome to the world of cookies.",
            "No cookies? That'd be boring.",
            "Cookies: Small, but mighty.",
            "Cookies: My recipe for happiness.",
            "Everything's possible with cookies.",
            "I'm here for the cookies. What about you?",
            "Cookies: The heart of every great website.",
            "A cookie for you, one for me.",
            "Cookies are like little miracles.",
            "A cookie is the start of everything.",
            "Cookies: Little joys of life.",
            "Believe in cookies. I do.",
            "Cookies are always a good idea.",
            "Cookies: Calorie-free and full of joy.",
            "A day without cookies? Hard to imagine.",
            "Cookies are the glue of the internet.",
            "Cookies: Always there when you need them.",
            "Everything's better with cookies.",
            "A cookie can change the world.",
            "Cookies are my way of saying thanks.",
            "Without cookies, nothing works here.",
            "A cookie for you, a cookie for the world.",
            "Cookies: The secret ingredient for everything good.",
            "A cookie makes every day better.",
            "Cookies: Because nobody says no to them.",
            "Everything starts with cookies.",
            "Without cookies, nothing runs here.",
            "Cookies: The best thing that can happen today.",
            "Everything starts with a cookie.",
            "Cookies are my little extra for you.",
            "Cookies: My way of welcoming you.",
            "Without cookies, life's just not as sweet.",
            "A cookie makes everything better.",
            "Cookies: The first step to a better world.",
            "Cookies: Small, but mighty!",
            "This site without cookies? Unimaginable.",
            "Everything's easier with cookies.",
            "A cookie for your soul.",
            "Cookies are my little gift to you.",
            "A cookie makes all the difference.",
            "No cookies? No fun!",
            "Cookies: My contribution to your happiness.",
            "With cookies, everything gets better. Promise."
        ],
        cookiesFoundStatusText: "You've found {{cookiesFound}} out of {{cookiesTotal}} cookiejars!",
        cookiejarCookieDescription: "Stores the user's progress in finding cookiejars.",
        cookieMessage: "<p class='cookies_found_status_text'></p><p>To help me remember which cookie jars you've already discovered, I'd like to save a few small cookies in your browser. They're only used to track your progress, and I won't use them for anything else. If you'd rather not, you can continue without cookies—but you'll have to start from scratch next time and might lose any time-limited cookies. What do you say?</p>",
        cookieCategories: [{
            identifier: "necessary",
            title: "Necessary",
            description: "Necessary Cookies are always active. They help make a website usable by enabling basic functions like storing your cookie consent status and general settings.",
            cookieList: [
                { name: "consentSettings", description: "Stores the user's consent settings for cookies.", expires: "365 Days", provider: "lltac" },
                { name: "cookieCategories", description: "Stores the categories of cookies the user has allowed to be able to remove cookies when changing the settings at a later time.", expires: "365 Days", provider: "lltac" }
            ],
            necessary: true
        }, {
            identifier: "functional",
            title: "Functional",
            description: "Functional cookies allow me to track your progress. All the cookie jars you've found will be stored as functional cookies.",
            cookieList: [
                { name: "exampleCookiejar", description: "Stores that a cookie jar has been found.", expires: "365 Days", provider: "lltac" }
            ]
        }]
    },
    de: {
        cookieHeadlines: [
            "Kekse gefällig? Frisch gebacken, nur für dich!",
            "Ohne Kekse wäre das hier nur halb so gut.",
            "Kekse machen alles besser. Auch diese Seite.",
            "Diese Seite läuft auf Keksen - so wie Oma's Rezepte.",
            "Ich serviere dir Kekse. Die sind immer kostenlos.",
            "Kekse sind die geheime Zutat des Erfolgs.",
            "Diese Website ohne Kekse? Undenkbar!",
            "Kekse gehören einfach dazu, findest du nicht?",
            "Ich mache keine halben Sachen - nur ganze Kekse.",
            "Kekse sind meine kleine Aufmerksamkeit für dich.",
            "Ich backe Kekse und lege sie für dich auf den Tisch.",
            "Ohne Kekse läuft hier nichts. Glaub mir.",
            "Kekse sind die Basis für ein gutes Erlebnis.",
            "Ich teile gerne Kekse. Hol dir einen!",
            "Mit Keksen macht alles doch viel mehr Spaß.",
            "Kekse sind wie gute Freunde: Immer da.",
            "Hol dir einen Keks, und ich lasse dich loslegen!",
            "Kekse und Inhalte? Eine unschlagbare Kombi.",
            "Ich habe Kekse. Bleib doch ein bisschen!",
            "Ein Leben ohne Kekse ist möglich, aber sinnlos.",
            "Kekse sind das Herzstück dieser Website.",
            "Kekse und gute Inhalte - klingt fair, oder?",
            "Ohne Kekse? Keine Chance.",
            "Kekse sind Liebe in Datenform.",
            "Einmal Kekse und loslegen!",
            "Mit Keksen läuft das hier viel besser.",
            "Kekse für die beste Erfahrung - garantiert kalorienfrei.",
            "Kekse: Das Geheimnis hinter allem.",
            "Hast du heute schon einen Keks verdient?",
            "Ich habe Kekse für dich. Du bringst den Hunger?",
            "Diese Website liebt Kekse - so wie du.",
            "Kekse sind der Motor des Internets. Wahrscheinlich.",
            "Kekse - die universelle Sprache des Internets.",
            "Ein Keks für dich, ein Keks für mich. Klingt fair, oder?",
            "Kekse: Weil ich nicht anders kann.",
            "Kekse. Keine Fragen, nur Genuss.",
            "Kekse sind das Fundament von allem hier.",
            "Ohne Kekse wäre das nur halb so schön.",
            "Ein Keks am Tag hält die Langeweile fern.",
            "Kekse und ein bisschen Magie. Das ist das Rezept.",
            "Kekse, weil du es wert bist.",
            "Kekse sind die Antwort. Egal, was die Frage war.",
            "Ich habe Kekse. Der Rest ist unwichtig.",
            "Ein Leben ohne Kekse? Nicht bei mir.",
            "Kekse: Das Beste, was dir heute passieren kann.",
            "Nimm dir einen Keks, dann reden wir weiter.",
            "Kekse sind wie kleine Umarmungen. Virtuell.",
            "Ohne Kekse gäbe es mich nicht. Ernsthaft.",
            "Kekse sind mein Dankeschön, dass du hier bist.",
            "Kekse: Mein Beitrag zu deinem Glück.",
            "Kekse - mehr braucht es nicht.",
            "Ohne Kekse? Ohne mich.",
            "Kekse sind wie gute Freunde: Man kann nie genug haben.",
            "Kekse machen alles besser, frag Oma!",
            "Kekse sind immer die richtige Wahl.",
            "Es gibt zwei Arten von Websites: mit und ohne Kekse.",
            "Kekse sind der Beweis, dass das Leben gut ist.",
            "Nimm dir einen Keks. Du hast ihn dir verdient.",
            "Kekse und gute Laune - meine Spezialität.",
            "Alles besser mit Keksen. Probier's aus.",
            "Ich glaube an Kekse. Du auch?",
            "Ohne Kekse kein Vergnügen.",
            "Kekse sind der Schlüssel zu allem.",
            "Kekse: Weil einfach alles besser schmeckt.",
            "Willkommen! Der Keks wartet schon auf dich.",
            "Kekse - das Fundament des Internets.",
            "Mit Keksen geht alles leichter.",
            "Ich serviere nur die besten Kekse.",
            "Kekse - mehr braucht man nicht.",
            "Alles dreht sich um Kekse. So ist das eben.",
            "Hunger? Ich habe Kekse!",
            "Kekse, die wirklich glücklich machen.",
            "Diese Seite lebt von Keksen. Ehrlich!",
            "Kekse: Mehr als nur ein Snack.",
            "Ohne Kekse wäre das hier nur halb so schön.",
            "Kekse sind die Antwort auf alles.",
            "Kekse - so fängt alles Gute an.",
            "Mit Keksen geht's direkt los!",
            "Keine Kekse, kein Spaß. So einfach ist das.",
            "Ein Keks macht jeden Tag besser.",
            "Kekse sind Liebe. Ganz einfach.",
            "Alles beginnt mit einem Keks.",
            "Kekse: Das Beste, was mir je passiert ist.",
            "Kekse sind Magie, die funktioniert.",
            "Kekse: Weil ich's kann.",
            "Du liebst Kekse? Ich auch.",
            "Kekse machen alles besser. Punkt.",
            "Ein Keks am Tag hält die Langeweile fern.",
            "Kekse sind meine Superkraft.",
            "Gönn dir einen Keks. Es lohnt sich.",
            "Willkommen in der Welt der Kekse.",
            "Ohne Kekse? Das wäre langweilig.",
            "Kekse: Klein, aber oho.",
            "Kekse: Mein Rezept für gute Laune.",
            "Mit Keksen ist alles möglich.",
            "Ich bin nur hier wegen der Kekse.",
            "Kekse: Das Herzstück jeder guten Website.",
            "Ein Keks für dich, einer für mich.",
            "Kekse sind wie kleine Wunder.",
            "Ein Keks ist der Anfang von allem.",
            "Kekse: Kleine Freuden des Lebens.",
            "Glaub an Kekse. Ich tue es auch.",
            "Kekse sind immer eine gute Idee.",
            "Kekse: Kalorienfrei und voller Freude.",
            "Ein Tag ohne Kekse? Kaum vorstellbar.",
            "Kekse sind der Klebstoff des Internets.",
            "Kekse: Immer da, wenn du sie brauchst.",
            "Mit Keksen geht alles besser.",
            "Ein Keks kann die Welt verändern.",
            "Kekse sind meine Art, Danke zu sagen.",
            "Ohne Kekse geht hier nichts.",
            "Kekse: Die geheime Zutat für alles Gute.",
            "Ein Keks macht jeden Tag besser.",
            "Kekse: Weil niemand Nein sagt.",
            "Mit Keksen fängt alles an.",
            "Ohne Kekse läuft hier nichts.",
            "Kekse: Das Beste, was heute passieren kann.",
            "Alles beginnt mit einem Keks.",
            "Kekse sind mein kleines Extra für dich.",
            "Kekse: Mein Weg, dich willkommen zu heißen.",
            "Ohne Kekse ist das Leben nur halb so schön.",
            "Ein Keks macht alles besser.",
            "Kekse: Der erste Schritt in eine bessere Welt.",
            "Kekse: Klein, aber oho!",
            "Diese Seite ohne Kekse? Unvorstellbar.",
            "Mit Keksen geht alles leichter.",
            "Ein Keks für die Seele.",
            "Kekse sind mein kleines Geschenk an dich.",
            "Ein Keks macht den Unterschied.",
            "Ohne Kekse? Ohne mich!",
            "Kekse: Mein Beitrag zu deinem Glück.",
            "Mit Keksen wird alles besser. Versprochen."
        ],
        cookiesFoundStatusText: "Du hast {{cookiesFound}} von {{cookiesTotal}} Keksgläsern gefunden!",
        cookiejarCookieDescription: "Speichert, dass ein Keksglas gefunden wurde.",
        cookieMessage: "<p class='cookies_found_status_text'></p><p>Damit ich mich daran erinnern kann, welche Keksgläser Du schon aufgespürt hast, möchte ich gerne ein paar kleine Cookies in Deinem Browser speichern. Sie helfen mir nur dabei, Deinen Fortschritt zu verfolgen, und ich benutze sie für nichts anderes. Wenn Du das nicht möchtest, kannst Du auch ohne Cookies weitermachen - aber dann musst Du nächstes Mal wieder von vorne anfangen und verlierst möglicherweise zeitlich begrenzte Cookies. Was sagst Du?</p>",
        cookieCategories: [{
            identifier: "necessary",
            title: "Notwendig",
            description: "Notwendige Cookies sind immer aktiv. Sie helfen dabei, eine Website nutzbar zu machen, indem sie beispielsweise die Speicherung der Zustimmung zum Cookie-Hinweis und allgemeine Einstellungen ermöglichen.",
            cookieList: [
                { name: "consentSettings", description: "Speichert die Benutzereinstellungen für Cookies.", expires: "365 Tage", provider: "lltac" },
                { name: "cookieCategories", description: "Speichert die Kategorien von Cookies, die der Benutzer erlaubt hat, um Cookies bei Änderung der Einstellungen wieder entfernen zu können.", expires: "365 Tage", provider: "lltac" }
            ],
            necessary: true
        }, {
            identifier: "functional",
            title: "Funktional",
            description: "Funktionale Cookies erlauiben es mir, Deinen Forschritt zu verfolgen. Alle Deine gefundenen Kekse werden als funktionale Cookies gespeichert.",
            cookieList: [
                { name: "exampleCookiejar", description: "Speichert, dass ein Keksglas gefunden wurde.", expires: "365 Tage", provider: "lltac" }
            ]
        }]
    }
};

// Extend the locales in fundoCookies with cookiejarLocales
Object.keys(cookiejarLocales).forEach((key) => {
    if (key === fundoCookies.locs.currentLocale) {
        fundoCookies.locs.extend({
            [key]: cookiejarLocales[key]
        });
    }
});

/**
 * @returns {string} - one random headline out of cookieHeadlines
 */
function getRandomCookieHeadline() {
    return fundoCookies.locs.t('cookieHeadlines')[Math.floor(Math.random() * fundoCookies.locs.t('cookieHeadlines').length)];
}

/**
 * stores ref to cookieJarNotification Element
 */
let cookieJarNotification = false;

/**
 * stores timeout which will remove cookieJarNotification after a specific time
 */
let autohideCookieJarNotificationTimer;

/**
 * resets the timeout which will trigger removal of cookieJarNotification
 */
function resetAutohideCookieJarNotificationTimer() {
    clearTimeout(autohideCookieJarNotificationTimer);
    autohideCookieJarNotificationTimer = setTimeout(hideCookieJarNotification, 3500);
}

/**
 * Loads an SVG image and resolves it as SVGElement
 * @param {string} uri - image uri
 * @returns {Promise} - resolves SVGElement, rejects on error
 */
async function loadSvgImage(uri) {
    return new Promise((resolve, reject) => {
        // Construct the correct URL to the image
        const imageUrl = `${window.location.origin}/${uri}`;

        fetch(imageUrl, {
                headers: {
                    'Content-Type': 'image/svg+xml'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(svgText => {
                const parser = new DOMParser();
                const svgDocument = parser.parseFromString(svgText, 'image/svg+xml');
                resolve(svgDocument.documentElement);
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * 
 * @returns {string} - cookiesFoundStatusText with $cookiesFound $cookiesTotal replaced with according values
 */
function getCookiesFoundText() {
    let cookiesFound = getClaimedCookies().length;
    let cookiesTotal = fundoCookies.locs.translations.cookieCategories[1].cookieList.lenth;
    return fundoCookies.locs.t('cookiesFoundStatusText', { cookiesFound, cookiesTotal });
}

/**
 *
 * @returns {Object[]} - Array of all cookiejars that have been claimed. If no cookiejars have been claimed, it will try to get the claimed cookiejars from the DOM.
 */
function getClaimedCookies() {
    let cookiesFound = fundoCookies.locs.translations.cookieCategories[1].cookieList.filter((cookie) => {
        return fundoCookies.getCookieValue(cookie.name);
    });
    if (cookiesFound.length == 0) {
        cookiesFound = getClaimedCookiesFromDOM();
    }
    return cookiesFound;
}

/**
 * sets innerHTML of every element with the class cookies_found_status_text to getCookiesFoundText()
 */
function updateCookiesFoundTexts() {
    Array.from(document.getElementsByClassName("cookies_found_status_text")).forEach((ttrElement) => {
        ttrElement.innerHTML = getCookiesFoundText();
    });
}

/**
 * Array of all cookies that failed to be set
 */
let cookiejar = [];

/**
 * Attempts to set cookies for all items in the cookiejar array.
 * Removes the item from the cookiejar array if the cookie is successfully set.
 */
function processCookiejar() {
    console.log("Processing cookiejar", cookiejar);
    if (cookiejar.length > 0) {
        cookiejar.forEach((cookieName, index) => {
            fundoCookies.setCookie(cookieName).then(() => {
                // Remove the item from the cookiejar array if the cookie is successfully set
                cookiejar.splice(index, 1);
            }).catch((e) => {
                console.error(`Failed to set cookie: ${cookieName}`, e);
            });
        });
    }
}


/**
 * if there is a cookieJarNotification, removes it
 */
function hideCookieJarNotification() {
    if (cookieJarNotification) {
        cookieJarNotification.remove();
        cookieJarNotification = false;
    }
}

/**
 * @returns {String[]} - Array of all cookie names from elements with "data-cookie-taken" present
 */
function getClaimedCookiesFromDOM() {
    return [...document.querySelectorAll("[data-cookie-taken]")].map(item => item.dataset.cookiejarCookie);
}

/**
 * Displays notification showing the user how many cookiejars they have found
 */
function showCookieJarNotification() {
    let title = getRandomCookieHeadline();
    let content = getCookiesFoundText();

    const notification = new Notification(title, content, [{
        title: "Schließen",
        handler: hideCookieJarNotification,
        classnames: ["button", "button--highlighted"]
    }]);
    notification.show();
    cookieJarNotification = notification.element;
    cookieJarNotification.classList.add("cookie-notification");

    resetAutohideCookieJarNotificationTimer();
}

/**
 * 
 * @param {*} e Click Event
 */
async function cookiejarClickHandler(e) {
    updateCookiesFoundTexts();

    //Since paths in svg trigger click events we need to get clicked cookiejar element via closest and classname; 
    let tmpCookiejar = e.target.closest(".cookiejar");

    //set data-cookie-taken - we'll use that for counting found and styling
    tmpCookiejar.setAttribute("data-cookie-taken", "true");

    //Attempt to set a cookie with value from data-cookiejar-cookie
    fundoCookies.setCookie(tmpCookiejar.dataset.cookiejarCookie).then(() => {
        //if theres already a cookieJarNotification shown, hide it, to get users attention via new one popping up
        if (cookieJarNotification) {
            hideCookieJarNotification();
        }
        showCookieJarNotification();
        processCookiejar();
    }).catch((e) => {
        //Attempt to set cookie failed
        cookiejar.push(tmpCookiejar.dataset.cookiejarCookie);
    }).finally(() => {
        updateCookiesFoundTexts();
    });
    updateCookiesFoundTexts();
}

/**
 * Get all elements with data-cookie and add cookiejar elements to them
 */
function initializeCookiejars() {
    //get all elements with data-cookie
    let cookiejarsContainers = [...document.querySelectorAll("[data-cookie]")].map(item => item);

    cookiejarsContainers.forEach(cj => {
        //add position: relative for styling reasons
        cj.style.position = "relative";

        //load cookiejar image and attach
        loadSvgImage("/lltac/img/cookiejar.svg").then(svgImage => {
            let cookiejarClosed = svgImage;
            cookiejarClosed.classList.add("cookiejar");

            //set data-cookiejar-cookie to cookiejar element
            cookiejarClosed.setAttribute("data-cookiejar-cookie", cj.dataset.cookie);

            cookiejarClosed.addEventListener("click", cookiejarClickHandler);

            //try to get cookie from storage and add data-cookie-taken to the svg element 
            if (fundoCookies.getCookieValue(cj.dataset.cookie)) {
                cookiejarClosed.setAttribute("data-cookie-taken", "true");
            }

            //Make sure cookiejar is the first element
            if (cj.firstChild) {
                cj.insertBefore(cookiejarClosed, cj.firstChild);
            } else {
                cj.append(cookiejarClosed);
            }
        });
    })
}

//Lets go!
document.addEventListener("DOMContentLoaded", function(event) {
    initializeCookiejars();
});