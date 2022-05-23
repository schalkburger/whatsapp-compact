/* ==UserStyle==
@name           WhatsApp Compact Userstyle
@namespace      github.com/schalkburger/whatsapp-compact
@version        1.0.0
@description    WhatsApp Compact Userstyle is a userstyle for WhatsApp Web loosely inspired by the Serendipity VS Code Theme.
@author         Schalk Burger
==/UserStyle== */
@-moz-document domain("web.whatsapp.com") {
	:root {
		--color-bluegreen: #519aba;
		--color-celeste: #9ef0f0;
		--color-charcoal: #434957;
		--color-cyclamen: #f06897;
		--color-ebonyclay: #1f2430;
		--color-frenchskyblue: #78a9ff;
		--color-gunmetal: #282d3a;
		--color-lightskyblue: #73d0ff;
		--color-manatee: #8c94a3;
		--color-raisinblack: #232834;
		--color-raisinblackhalf: rgba(35, 40, 52, 0.80);
		--color-richblack: #0e121b;
		--color-silvermetallic: #adaeb3;
		--color-timberwolf: #cbccc6;
		--color-white: #fff;
	}

	/*
	*****************************
	* Global
	*****************************
	*/
	html,
	body {
		min-width: 600px;
	}

	/*---------------------
	 Scrollbar
	---------------------*/
	::-webkit-scrollbar {
		width: 0px !important;
		height: 0px !important;
	}

	html[dir] .dark ::-webkit-scrollbar-thumb {
		background-color: var(--color-charcoal);
	}

	html[dir] .dark ::-webkit-scrollbar-track {
		background-color: var(--color-raisinblack);
	}

	@media screen and (max-width: 748px) {
		._1XkO3 {
			min-width: 500px;
		}
	}

	/*---------------------
	 App Wrapper
	---------------------*/
	.app-wrapper-web {
		overflow: hidden;
		opacity: 1;
		transition: all 200ms ease-in-out;
	}

	.app-wrapper-web:hover {
		opacity: 1;
	}

	/*---------------------
	 Backgrounds
	---------------------*/
	html[dir] body.dark,
	html[dir] ._1INL_,
	#initial_startup {
		background-color: var(--color-richblack);
	}

	html[dir] ._23P3O,
	html[dir="ltr"] ._2BU3P,
	html[dir] .zaKsw {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._26aja:after {
		background: transparent;
	}

	html[dir] progress._35Zb2[value]::-webkit-progress-bar {
		background-color: #434957;
	}

	/*---------------------
	 Icons
	---------------------*/
	._3u7yy {
		color: #fff;
	}

	/*---------------------
	 Buttons
	---------------------*/
	html[dir] ._1cQWN,
	html[dir] ._1GLVO {
		background-color: var(--color-frenchskyblue);
	}

	._3K42l,
	._1ec6v {
		color: #fff;
	}

	/*---------------------
	 Borders
	---------------------*/
	html[dir] .zaKsw:after {
		border-color: var(--color-charcoal);
	}

	/*
	*****************************
	* Sidebar
	*****************************
	*/
	/*---------------------
	 Sidebar Size
	---------------------*/
	@media screen and (max-width: 900px) {
		.two ._2i3T7 {
			padding-left: 0;
		}
	}

	/*---------------------
	 Sidebar Background
	---------------------*/
	html[dir] ._2nY6U._2_TVt,
	html[dir] ._2nY6U,
	html[dir] ._2nY6U._1frFQ,
	html[dir] ._1G3Wr,
	html[dir] .dark ._3yWey,
	html[dir] ._20c87,
	html[dir] .YGe90 {
		background-color: var(--color-raisinblack);
	}

	html[dir="ltr"] .HONz8 {
		padding: 0 8px 0 10px;
	}

	/*---------------------
	 Sidebar Profile
	---------------------*/
	.KPJpj {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._1Mc0y {
		background-color: var(--color-raisinblack);
		margin-top: 0;
		margin-bottom: 0;
		padding-top: 28px;
		padding-bottom: 28px;
	}

	html[dir="ltr"] ._2LTDQ {
		background-color: var(--color-raisinblack);
		margin: 0;
		padding: 28px 20px 28px 30px;
	}

	/*---------------------
	 Sidebar Sizing
	---------------------*/
	.two ._191H_,
	.two ._191H_ {
		width: 100%;
		max-width: 190px;
		min-width: 190px;
		flex: 2%;
		transition: all 200ms ease-in-out;
	}

	/*---------------------
	 Sidebar Header
	---------------------*/
	html[dir] ._1G3Wr {
		padding: 10px 0 10px 20px;
	}

	/*---------------------
	 Sidebar Header Avatar
	---------------------*/
	._1X8rk {
		padding-left: 5px;
	}

	html[dir="ltr"] ._2BYrr {
		margin-left: 8px;
	}

	/*---------------------
	 Siuebar Header Icons
	---------------------*/
	html[dir="ltr"] ._2cNrC {
		margin: 0;
	}

	html[dir="ltr"] ._3Qnsr {
		left: 50px;
	}

	/*---------------------
	 Search Inputs
	---------------------*/
	html[dir] .p3_M1,
	html[dir] ._1Jn3C,
	html[dir] ._16C8p {
		background-color: var(--color-ebonyclay);
		border-color: #434957;
	}

	/*---------------------
	 Search Icon
	---------------------*/
	html[dir=ltr] ._28-cz svg {
		color: #fff;
	}

	/*---------------------
	 Search Results
	---------------------*/
	.YGe90 {
		color: var(--color-white);
	}

	/*---------------------
	 Sidebar Container
	---------------------*/
	html[dir] ._3OvU8,
	html[dir] ._2EU3r {
		border-top: 1px solid var(--color-raisinblack);
		border-bottom: 1px solid var(--color-raisinblack);
	}

	html[dir] ._2EU3r {
		padding-left: 5px;
	}

	html[dir] ._3m_Xw {
		z-index: 1000 !important;
	}

	html[dir] ._3m_Xw div {
		transition: all 400ms ease-in-out;
	}

	html[dir] ._3m_Xw [aria-selected="true"] > div > div {
		background-color: var(--color-gunmetal);
		border-top: 1px solid var(--color-charcoal);
		border-bottom: 1px solid var(--color-charcoal);
	}

	html[dir] ._3m_Xw [aria-selected="true"] > div {
		box-shadow: 0px 4px 12px 0 rgb(0 0 0 / 40%);
	}

	html[dir] ._2nY6U._2_TVt ._3OvU8 {
		border-top-color: var(--color-charcoal);
	}

	/*---------------------
	 Sidebar Profile Photo
	---------------------*/
	html[dir] ._3GlyB {
		width: 30px !important;
		height: 30px !important;
		/* filter: grayscale(1) contrast(1.5); */
	}

	/*---------------------
	 Sidebar Name Container
	---------------------*/
	html[dir] ._2nY6U:focus,
	html[dir] ._2nY6U:hover {
		background-color: var(--color-charcoal);
	}

	/*---------------------
	 Sidebar Name
	---------------------*/
	.zoWT4 {
		font-size: 14px;
		font-weight: 670;
		color: var(--color-white);
	}

	/*---------------------
	 Sidebar Name Message Preview
	---------------------*/
	._1qB8f {
		font-size: 12px;
		color: var(--color-silvermetallic);
	}

	/*---------------------
	 Sidebar Time
	---------------------*/
	._1i_wG {
		opacity: 1;
	}

	._3vPI2 ._1i_wG {
		color: var(--color-silvermetallic);
		opacity: 0.5;
	}

	/*---------------------
	 Sidebar Unread Marker
	---------------------*/
	html[dir] ._23LrM {
		background-color: var(--color-cyclamen);
	}

	/*---------------------
	 Status
	---------------------*/
	html[dir] ._2HUCB {
		background-color: var(--color-raisinblack);
	}

	html[dir="ltr"] ._2v5gS {
		background-color: var(--color-charcoal);
	}

	html[dir] ._3Hudz {
		background-color: var(--color-raisinblack);
	}

	/*
	*****************************
	* Main Chat
	*****************************
	*/
	/*---------------------
	 Main Chat Padding Right
	---------------------*/
	#main {
		padding-right: 40px;
		background-color: #1d222e;
	}

	html[dir="ltr"] .y8WcF {
		padding-right: 40px;
	}

	html[dir="ltr"] ._27Uai {
		right: 50px;
	}

	._1Ae7k {
		width: 85px;
	}

	.two ._3sh5K {
		flex: 100%;
	}

	[data-asset-chat-background-dark] {
		background-image: none;
		background-color: var(--color-gunmetal);
	}

	/*---------------------
	 Main Chat Background
	---------------------*/
	.y8WcF {
		background: var(--color-gunmetal);
	}

	/*---------------------
	 Unread Bar
	---------------------*/
	html[dir] ._5ML0C {
		background: var(--color-gunmetal);
	}

	html[dir] ._3cOAM {
		background-color: var(--color-cyclamen);
	}

	/*---------------------
	 Message Out
	---------------------*/
	html[dir] .message-out .Nm1g1 {
		background-color: var(--color-raisinblack);
	}

	.message-out ._3nrYb {
		color: var(--color-raisinblack);
	}

	html[dir] .message-out ._3o5fT {
		background-color: var(--color-charcoal);
	}

	html[dir="ltr"] ._18oGY._2copG {
		background: var(--color-charcoal);
	}

	/*---------------------
	 Message In
	---------------------*/
	html[dir] .message-in .Nm1g1 {
		background-color: var(--color-charcoal);
	}

	html[dir="ltr"] ._18oGY._1UyGr {
		background: var(--color-raisinblack);
	}

	.message-in ._3nrYb {
		color: var(--color-charcoal);
	}

	html[dir] .message-in ._3o5fT {
		background-color: var(--color-raisinblack);
	}

	/*---------------------
	 Reply Dialog
	---------------------*/
	html[dir] .a-HbF {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._3XUNQ {
		background-color: var(--color-ebonyclay);
	}

	/*---------------------
	 Reply Close Icon
	---------------------*/
	html[dir] ._1Hccy {
		background-color: transparent;
	}

	.dark .color-1 {
		color: #fff !important;
	}

	.dark .bg-color-1 {
		background-color: var(--color-white) !important;
	}

	/*---------------------
	 Menu Popover
	---------------------*/
	html[dir] .o--vV {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._18oo2._19zgN {
		background-color: var(--color-charcoal);
	}

	/*---------------------
	 Share Panel
	---------------------*/
	html[dir="ltr"] ._1Mcu- {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._2oWjT {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._2M4pc ._1VmmK {
		background-color: var(--color-charcoal);
	}

	html[dir] ._1VmmK {
		background-color: var(--color-charcoal);
	}

	/*---------------------
	 System Message
	---------------------*/
	html[dir] .EtBAv {
		background-color: var(--color-charcoal);
	}

	/*---------------------
	 Rich Text Emoji Panel
	---------------------*/
	html[dir] ._1TdPb,
	html[dir] ._10mnt,
	html[dir] ._16kef,
	html[dir] ._1rtUb {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._2VSMU {
		background-color: var(--color-gunmetal);
	}

	/*---------------------
	 Group Info Panel
	---------------------*/
	html[dir] ._2mQtw,
	html[dir] ._2P1rL {
		background-color: var(--color-raisinblack);
	}

	html[dir] .dark ._2P1rL {
		margin-bottom: 0;
	}

	.s9fl9ege {
		padding-bottom: 0;
	}

	html[dir] ._2QzJd {
		background-color: var(--color-ebonyclay);
	}

	/*---------------------
	 Group Media Panel
	---------------------*/
	html[dir] ._1PGhQ,
	html[dir] ._3CC5A,
	html[dir] ._1MulP {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._3CC5A:before {
		background-color: var(--color-cyclamen);
	}

	/*---------------------
	 Media Viewer
	---------------------*/
	html[dir] ._1w-Ol {
		background-color: var(--color-raisinblack);
	}

	html[dir] ._3IBSU {
		background-color: var(--color-raisinblackhalf);
	}


	/*
	*****************************
	* Responsive
	*****************************
	*/
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

		html[dir="ltr"] .HONz8 {
			padding: 0 12px 0 12px;
		}
	}

	@media screen and (min-width: 1441px) {

		/* Main */
		#main {
			padding-right: 0;
		}

		html[dir] .app-wrapper-web ._1XkO3 {
			margin: 0 auto;
			width: 100%;
			max-width: 60vw;
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

	/* @media screen and (max-width: 599px) {
		html * {
			background: rgba(0, 0, 0, 0.5);
		}
	} */
	/*
	*****************************
	* WhatsApp Compact Script Utility Styles
	*****************************
	*/
	/*---------------------
	 Hide App
	---------------------*/
	#app.hide-app {
		opacity: 0;
	}

	/*---------------------
	 Compact Mode
	---------------------*/
	#app.center-app .app-wrapper-web ._1XkO3 {
		max-width: 60vw;
		margin: 0 auto;
	}

	/*---------------------
	 Full Width Mode
	---------------------*/
	#app.full-width-app .app-wrapper-web ._1XkO3 {
		max-width: 100vw;
		margin: 0 auto;
		position: relative;
		top: 0;
		height: 100%;
	}

	/*---------------------
	 Hide Sidebar
	---------------------*/
	#app.hide-sidebar .ldL67._2i3T7 {
		flex: 0;
	}
}