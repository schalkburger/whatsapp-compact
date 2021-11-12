/* ==UserStyle==
@name           WhatsApp Compact Userstyle
@namespace      github.com/schalkburger/whatsapp-compact
@version        1.0.0
@description    WhatsApp Compact Userstyle is a userstyle for WhatsApp Web loosely inspired by the Serendipity VS Code Theme.
@author         Schalk Burger
==/UserStyle== */

@-moz-document domain("web.whatsapp.com") {

    :root {
        --color-white: #fff;
        --color-raisinblack: #1f2430;
        --color-charcoal: #434957;
        --color-gunmetal: #282c34;
        --color-cyclamen: #f06897;
        --color-ebonyclay: #1f2430;
        --color-timberwolf: #cbccc6;
        --color-manatee: #8c94a3;
        --color-celeste: #9ef0f0;
        --color-lightskyblue: #73d0ff;
        --color-frenchskyblue: #78a9ff;
        --color-bluegreen: #519aba;
    }

    html,
    body {
        min-width: 640px;
    }

    /* Scrollbar */

    ::-webkit-scrollbar {
        width: 8px !important;
        height: 8px!important;
    }

    html[dir] .dark ::-webkit-scrollbar-thumb {
        background-color: var(--color-charcoal);
    }

    html[dir] .dark ::-webkit-scrollbar-track {
        background-color: var(--color-raisinblack);
    }

    /* App Wrapper */
    .app-wrapper-web {
        overflow: hidden;
    }

    /* Global Backgrounds */
    html[dir] ._20c87,
    html[dir] ._2nY6U._2_TVt,
    html[dir] ._2nY6U,
    html[dir] ._23P3O,
    html[dir] ._1G3Wr,
    html[dir] .dark ._3yWey,
    html[dir="ltr"] ._2BU3P, html[dir] .zaKsw {
        background-color: var(--color-raisinblack);
    }

    /* Search Inputs */
    html[dir] .p3_M1,
    html[dir] ._1Jn3C {
        background-color: var(--color-raisinblack);
        border-color: #434957;
    }

    /* Icons */
    ._3u7yy {
        color: #fff;
    }

    /* Buttons */

    html[dir] ._1cQWN, html[dir] ._1GLVO {
        background-color: var(--color-frenchskyblue);
    }

    ._3K42l, ._1ec6v {
        color: #fff
    }

    /* Sidebar */
    html[dir] body.dark #app {
        opacity: 0.2;
        opacity: 1;
        transition: all 100ms ease-in-out;
    }

    html[dir] body.dark:hover > #app {
        opacity: 1;
    }

    html[dir=ltr] .HONz8 {
        padding: 0 8px 0 6px;
    }

    /* Sidebar Profile Photo */
    html[dir] ._3GlyB {
        width: 30px !important;
        height: 30px !important;
        filter: grayscale(1) contrast(1.5);
    }

    /* Sidebar Name Container */
    html[dir] ._2nY6U:focus,
    html[dir] ._2nY6U:hover {
        background-color: var(--color-charcoal);
    }


    /* Sidebar Name */
    .zoWT4 {
        font-size: 16px;
        font-weight: 500;
    }

    /* Sidebar Name Message Preview */
    ._1qB8f {
        font-size: 14px;
    }

    /* Sidebar Transitions */
    .two ._191H_,
    .two ._191H_ {
        width: 100%;
        max-width: 200px;
        min-width: 200px;
        flex: 2%;
        transition: all 200ms ease-in-out;
    }

    /* Main Chat */
    [data-asset-chat-background-dark] {
        background-image: none;
        background-color: #282c34;
    }

    /* Main Chat Background */
    .y8WcF {
        background: var(--color-raisinblack);
    }

    /* Unread Bar*/
    html[dir] ._5ML0C {
        background: var(--color-raisinblack);
    }

    html[dir] ._3cOAM {
        background-color: var(--color-cyclamen);
    }

    /* Message Out */
    html[dir] .message-out .Nm1g1 {
        background-color: var(--color-raisinblack);
    }

    .message-out ._3nrYb {
        color: var(--color-raisinblack);
    }

    html[dir] .message-out ._3o5fT {
        background-color: var(--color-charcoal);
    }

    html[dir=ltr] ._18oGY._2copG {
        background: var(--color-charcoal);
    }


    /* Message In */
    html[dir] .message-in .Nm1g1 {
        background-color: var(--color-charcoal);
    }

    html[dir=ltr] ._18oGY._1UyGr {
        background: var(--color-raisinblack);
    }

    .message-in ._3nrYb {
        color: var(--color-charcoal);
    }

    html[dir] .message-in ._3o5fT {
        background-color: var(--color-raisinblack);
    }

    /* Reply Dialog */
    html[dir] .a-HbF {
        background-color: var(--color-raisinblack);
    }

    /* Reply Close Icon */
    html[dir] ._1Hccy {
        background-color: transparent;
    }

    .dark .color-1 {
        color: #fff !important;
    }

    .dark .bg-color-1 {
        background-color: var(--color-white) !important;
    }

    /* Menu Popover */
    html[dir] .o--vV {
        background-color: var(--color-raisinblack);
    }

    html[dir] ._18oo2._19zgN {
        background-color: var(--color-charcoal);
    }

    /* Share Panel */
    html[dir=ltr] ._1Mcu- {
        background-color: var(--color-gunmetal);
    }

    html[dir] ._1VmmK {
        background-color: var(--color-charcoal);
    }

    /* System Message */
    html[dir] .EtBAv {
        background-color: var(--color-charcoal);
    }

    @media screen and (min-width: 768px) {
        /* Sidebar */
        .two ._191H_,
        .two ._191H_ {
            width: 100%;
            max-width: 250px;
            min-width: 250px;
            flex: 2%;
            transition: all 200ms ease-in-out;
        }


        html[dir=ltr] .HONz8 {
            padding: 0 12px 0 12px;
        }
    }

    @media screen and (min-width: 1441px) {

        html[dir] body.dark {
            background-color: var(--color-gunmetal);
        }

        /* Sidebar */
        .two ._191H_,
        .two ._191H_ {
            width: 100%;
            max-width: 300px;
            min-width: 300px;
            flex: 2%;
            transition: all 200ms ease-in-out;
        }
    }


    @media screen and (max-width: 640px) {

        html * {
            background: rgba(0, 0, 0, 0.5)
        }
    }
    }