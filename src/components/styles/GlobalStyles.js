import { css } from '@emotion/react';

export const baseStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
  }
  ::-webkit-input-placeholder {
    /* Edge */
    color: #c2c2c2;
  }

  :-ms-input-placeholder {
    /* Internet Explorer */
    color: #c2c2c2;
  }

  ::placeholder {
    color: #c2c2c2;
  }
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Roboto Light', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    font-size: 16px;
    /* scroll-behavior: smooth; */
  }

  a {
    /* transition: color 0.15s; */
    /* color: #663399; */
  }

  body {
    font-family: 'Roboto';
  }
  .visibleMobile {
    display: none;
  }
  .visibleMobileView {
    display: none !important;
  }
  .video-responsive {
    position: relative;
    padding-bottom: 56.2%;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  .displayInline {
    display: inline-block;
  }
  .navBarToggle {
    border: 0px solid #fff;
    border-radius: 4px;
    width: 36px;
    height: 33px;
    position: absolute;
    right: 20px;
    padding: 8px 5px;
    display: none;
  }
  .navBarToggle .iconBar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 4px;
    background-color: #001934;
  }
  .navBarToggle .iconBar:first-of-type {
    margin-top: 0px;
  }
  .video-responsive iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .diffNewLine {
    color: #22863a;
    background-color: #f0fff4;
  }

  .diffRemoveLine {
    color: red;
    background-color: #ffcccc;
  }
  .navBarParent {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
  }
  .divider {
    height: 30px;
    margin: 0 15px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }
  .navBarULRight {
    /* position: absolute;
  right: 30px; */
  }
  .githubIcon {
    width: 15px;
    margin-right: 5px;
  }

  .githubSection {
    display: flex;
    align-items: center;
    color: #000;
    opacity: 0.7;
  }

  .githubSection:hover {
    text-decoration: none;
    opacity: 1;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: #fff !important;
  }

  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: #001933;
  }

  .headerWrapper {
    border-bottom: 1px solid rgb(212, 218, 223);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    display: flex;
    align-items: center;
  }
  .formElement {
    background-color: transparent;
    padding: 4px;
    border-radius: 5px;
    position: relative;
  }
  .formElement:focus {
    outline: none;
    border: none;
  }
  .formElement svg path {
    fill: #2fd2c5;
  }
  .searchInput {
    width: 100%;
    background-color: rgba(28,211,198,.12) !important;
    border-width: 0 !important;
    color: #C2C2C2;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    opacity: .6;
    padding-left: 38px;
    max-width: 600px;
  }
  .searchInput:focus,
  .searchInput:visited,
  .searchInput:hover,
  .searchInput:focus-within {
    outline: none;
    border: 0;
  }
  .searchWrapper {
    padding-left: 0px;
    padding-right: 20px;
    flex: 1;
    position: relative;
  }
  .searchWrapper a {
    font-weight: 500;
  }
  .hitWrapper {
    background-color: #fff;
    padding: 0.7em 1em 0.4em;
    border-radius: 4px;
    position: absolute;
    width: 80vw;
    max-width: 30em;
    top: 40px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
    height: auto;
    max-height: 80vh;
    overflow: scroll;
    left: 0;
  }
  .hitWrapper ul li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid;
    list-style-type: none;
  }
  .hitWrapper ul li:first-of-type {
    border-top: 0px;
    margin-top: 0px;
    color: black !important;
    padding: 0px;
  }
  .showResults {
    display: block;
  }
  .hideResults {
    display: none;
  }
  .hitWrapper span {
    color: black;
    font-size: 14px;
  }
  .headerTitle {
    height: auto;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: #fff !important;
    /* margin-top: 16px; */
    text-transform: uppercase;
  }
  .headerTitle a {
    color: #fff;
  }

  .headerTitle a:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  .logoWrapper {
    padding: 21px 0;
    padding-left: 20px;
  }

  .logoContent {
    font-family: 'Roboto';
    margin-left: 16px;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 500;
    padding-right: 10px;
  }

  /* Header section starts here */
  .removePadd {
    padding: 0 !important;
  }
  .navBarDefault {
    /* background-color: #001934; */
    background-color: #aaa980;
    border-radius: 0;
    border-top: 0;
    margin-bottom: 0;
    border: 0;
    display: flex;
    align-items: center;
    box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    -moz-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.8);
    -o-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    z-index: 1;
    /* padding: 15px; */
    position: relative;
    /* height: 80px; */
  }
  .navBarHeader {
    /* min-width: 335px; */
    padding-right: 20px;
    display: flex;
    align-items: center;
  }
  .navBarBrand {
    padding: 0px 0px;
    display: flex;
    align-items: center;
  }

  .navBarBrand img {
    width: 30px;
    margin-left: 2px;
    margin-right: 6px;
    display: inline-block;
  }
  .navBarUL li {
    list-style-type: none;
  }
  .navBarUL {
    -webkit-overflow-scrolling: touch;
  }
  .navBarUL li a {
    font-family: 'Roboto';
    color: #fff !important;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
    opacity: 1;
    padding: 10px 15px;
  }
  .navBarNav {
    display: flex;
    align-items: center;
  }
  .navBarUL li a img,
  .navBarUL li a .shareIcon {
    width: 20px;
  }
  .navBarUL li a:hover {
    opacity: 0.7;
  }
  pre {
    border: 0 !important;
    background-color: rgb(245, 247, 249); /* !important; */
  }

  blockquote {
    color: rgb(116, 129, 141);
    margin: 0px 0px 24px;
    padding: 0px 0px 0px 12px;
    border-left: 4px solid rgb(230, 236, 241);
    border-color: rgb(230, 236, 241);
  }
  .socialWrapper {
    display: flex;
    align-items: center;
  }
  .socialWrapper li {
    display: inline-block;
  }
  .socialWrapper li a {
    display: contents;
  }
  .discordBtn, .twitterBtn {
    border-radius: 4px;
    border: solid 1px #d1d2d3;
    background-color: #f1f5f8;
    width: 20px;
    height: 20px;
    padding-top: 2px;
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .8;
    cursor: pointer;
  }
  .twitterBtn img {
    width: 12px !important;
  }
  .discordBtn img {
    width: 10px !important;
  }
  .discordBtn:hover, .twitterBtn:hover {
    opacity: 1;
  }
  .discordBtn {
    img {
      width: 10px;
    }
  }
  /* Header section ends here */
  .sidebarTitle {
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); */
    background-color: #f8f8f8;
    padding: 18px 16px;
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: 600;
    color: #001934;
    display: flex;
    align-items: center;
  }

  .sideBarShow {
    display: none;
  }

  .sidebarTitle a {
    color: #001934;
  }

  .greenCircle {
    width: 8px;
    height: 8px;
    background-color: #1cd3c6;
    border-radius: 50%;
    margin: 0 12px;
  }

  .headerNav {
    font-family: 'Roboto';
    padding: 0px 24px;
    color: #001933;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
  }

  .headerNav a {
    color: #001933;
    text-decoration: none;
  }

  .headerNav a:hover {
    text-decoration: none;
  }

  .logoWrapper img {
    width: 40px;
  }

  .sideBarUL {
    margin-top: 5px;
    margin-bottom: 80px;
  }

  .sideBarUL li {
    list-style-type: none;
    width: auto;
  }

  .sideBarUL li a {
    /* color: #fff; */
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    /* padding: 7px 24px 7px 16px; */
    padding-left: 10px;
    /* padding-right: 25px; */
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
  }

  .hideFrontLine .collapser {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    z-index: 1;
    cursor: pointer;
  }

  .hideFrontLine .active > a {
    background-color: #aaa980;
    color: #fff !important;
  }
  .firstLevel ul li .collapser svg path {
    fill: #fff !important;
  }
  .active .collapser > svg > path {
    fill: #001933 !important;
  }

  .firstLevel ul .item ul .item {
    border-left: 1px solid #e6ecf1;
  }

  .sideBarUL .item {
    list-style: none;
    padding: 0;
  }

  .sideBarUL .item > a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding-right: 35px;
    padding-left: 15px;
  }

  .showFrontLine .item > a:hover {
    background-color: #001933;
  }

  .showFrontLine .active > a {
    /* color: #fff; */
    background-color: #001933;
  }

  .sideBarUL .item .item {
    margin-left: 16px;
  }

  .firstLevel > ul > .item {
    margin-left: 0 !important;
  }

  .showFrontLine .item .item {
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
    padding: 0;
    width: calc(100% - 16px) !important;
  }

  .showFrontLine .item .active > a {
    border-color: rgb(230, 236, 241) !important;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    background-color: #56a6ff !important;
    color: #fff;
  }

  .titleWrapper {
    display: flex;
    align-items: center;
    /* padding-bottom: 40px; */
    border-bottom: 1px solid rgb(230, 236, 241);
    /* margin-bottom: 32px; */
  }

  .gitBtn {
    height: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
  }

  .gitBtn img {
    width: 15px;
    display: inline-block;
    margin-right: 5px;
  }

  .addPaddTopBottom {
    padding: 50px 0;
  }

  .preRightWrapper {
    display: block;
    margin: 0px;
    flex: 1 1 0%;
    padding: 16px;
    text-align: right;
  }

  .smallContent {
    display: block;
    margin: 0px;
    padding: 0px;
    color: #6e6e6e;
  }

  .smallContent span {
    font-size: 12px;
    line-height: 1.625;
    font-weight: 400;
  }

  /* **************************** */

  .nextRightWrapper {
    display: block;
    margin: 0px;
    padding: 16px;
    flex: 1 1 0%;
  }

  /* tables.css */
  table {
    padding: 0;
    font-size: 14px;
    border-collapse: collapse;
  }

  table tr {
    border-top: 1px solid #cccccc;
    margin: 0;
    padding: 0;
  }

  table tr:nth-of-type(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    border: 1px solid #919191;
    text-align: left;
    margin: 0;
    padding: 3px 8px;
    background-color: #fff9e5;
    font-weight: normal;
  }

  table tr td {
    border: 1px solid #919191;
    text-align: left;
    margin: 0;
    padding: 3px 8px;
  }

  table tr th :first-of-type,
  table tr td :first-of-type {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }
  .centeredTable td {
    text-align: center;
  }
  .inGameDescTable th {
    height: 24.5px;
  }
  .statueTable td:not(:first-of-type) {
    text-align: center;
  }
  /* Price Table (Staves, Pots pages)*/
  .priceTable th {
    font-weight: normal;
    text-align: center;
    background-color: #f3deff;
  }
  .priceTable td {
    text-align: center;
  }
  .priceTable td:nth-of-type(1) {
    text-align: left;
    background-color: #f7f7f7;
  }
  .priceTable img {
    position: relative !important;
    height: 20px !important;
    width: 20px !important;
  }
  /* Price Table Small (Price Chart page)*/
  .priceTableSmall th {
    text-align: center;
    padding: 1px;
  }
  .priceTableSmall td {
    padding: 2px;
  }
  .priceTableSmall th {
    font-size: 12.5px;
  }
  .priceTableSmall td {
    font-size: 12.5px;
  }
  .priceTableMedium th {
    text-align: center;
    padding: 3px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .priceTableMedium td {
    text-align: center;
    padding: 3px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .priceTableMedium img {
    position: relative !important;
    image-rendering: pixelated;
  }
  .priceTableSmallerFont th {
    font-size: 13px;
    padding: 3px;
  }
  .priceTableSmallerFont td {
    font-size: 13px;
    padding: 3px;
  }
  .tableDivider {
    font-weight: normal;
    background-color: #ececec;
  }
  .tableDivider2 {
    background-color: #ececec;
    padding-top: 0px !important;
  }
  .tableDivider3 {
    background-color: #ffe970;
    padding-top: 1px !important;
  }
  .tableCategory th {
    font-weight: normal;
    background-color: #f0f0f0;
  }
  /* overviewTable (dungeon pages) */
  .overviewTable th {
    background-color: #ddfff7;
  }
  .monsterTable th {
    font-weight: normal;
    text-align: center;
    padding: 2.5px;
    background-color: #d4e2ff;
  }
  .monsterTable td {
    padding: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 12px;
  }
  .monsterTable img {
    position: relative !important;
    height: 18px !important;
  }
  .monsterTable td:nth-of-type(2) {
    /* background-color: #eee !important; */
  }
  .monsterTable td:nth-of-type(1) {
    text-align: center;
  }
  .elementIcon img {
    max-height: 20px !important;
    max-width: 20px !important;
  }
  .dig {
    background-color: #d9ebff !important;
  }
  .boss {
    color: #8a00b0;
  }
  .special {
    color: #ce0000;
  }
  #hideMonTblImgBtn {
    padding: 3px;
    border-radius: 3px;
    margin: 0;
  }
  .hidden {
    display: none;
  }
  .monsterTableSmall th {
    padding: 2px;
    font-size: 13px;
  }
  .monsterTableSmall td {
    padding: 2px;
    font-size: 13px;
  }
  .dungeonMonsters th {
    background-color: #f3f3f3;
    font-weight: normal;
    text-align: center;
    padding: 2px;
  }
  .dungeonMonsters td {
    font-size: 12px;
    text-align: center;
    padding: 2px;
  }
  .dungeonMonsterList th {
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .dungeonMonsterList td {
    padding: 3px;
  }
  .runeTable img {
    position: relative !important;
    width: 20px !important;
    height: 20px !important;
  }
  .runeTable th {
    color: white;
    font-weight: bold;
    background-color: #482b0a;
  }
  .runeTable td {
    text-align: center;
  }
  .runeTable tr:nth-of-type(2) th {
    color: #3b454e;
    text-align: center;
    background-color: #ffffed;
  }
  .runeTable td:nth-of-type(2) {
    text-align: left;
    background-color: #f7f7f7;
  }
  .runeTable td:nth-of-type(5) {
    text-align: left;
  }
  .runeTable2 img {
    position: relative !important;
    width: 20px !important;
    height: 20px !important;
  }
  .runeTable2 td {
    text-align: center;
  }
  .runeTable2 tr:nth-of-type(2) th {
    color: #3b454e;
    text-align: center;
    background-color: #ffffed;
  }
  .runeTable2 td:nth-of-type(2) {
    text-align: left;
    background-color: #f7f7f7;
  }
  .runeTable2 td:nth-of-type(4) {
    text-align: left;
  }
  .dojoTable th {
    color: #3b454e;
    background-color: #ffffed;
  }
  .dojoTable tr:nth-of-type(1) th {
    color: white;
    font-weight: bold;
    background-color: #482b0a;
  }
  .roamerTable td:nth-of-type(1) {
    text-align: center;
    padding: 2px;
  }
  .equipmentTable img {
    position: relative !important;
    width: 20px !important;
    height: 20px !important;
  }
  .equipmentTable th {
    color: white;
    font-weight: bold;
    background-color: #482b0a;
  }
  .equipmentTable tr:nth-of-type(2) th {
    color: #3b454e;
    text-align: center;
    background-color: #ffffed;
  }
  .equipmentTable td:nth-of-type(8) {
    text-align: left !important;
  }
  .statusTable th {
    color: white;
    font-weight: bold;
    background-color: #482b0a;
  }
  .statusTable tr:nth-of-type(2) th {
    color: #3b454e;
    text-align: center;
    background-color: #ffffed;
  }
  .statusTable td:nth-of-type(2) {
    text-align: center;
  }
  .runeIconTable td:nth-of-type(1) {
    text-align: center;
  }
  .runeIconTable td:nth-of-type(2) {
    background-color: #f7f7f7;
  }
  .runeIcon img {
    position: relative !important;
    border-radius: 0px !important;
    height: 20px !important;
    width: 20px !important;
    vertical-align: text-bottom !important;
  }
  .trapIcon img {
    position: relative !important;
    border-radius: 5px !important;
    height: 20px !important;
    width: 20px !important;
  }
  .brandImage img {
    width: 20px !important;
    position: relative !important;
    vertical-align: sub !important;
  }
  .brandImage td:nth-of-type(7) {
    padding: 0px !important;
  }
  .monsterPageTable {
    margin: 0 0 15px 0;
  }
  .monsterPageTable th {
    font-weight: bold;
    color: white;
    background-color: #482b0a;
  }
  .monsterPageFlex img {
    width: 20px !important;
    position: relative !important;
  }
  .monsterPageFlex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
  }
  .monster_stats {
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2px;
  }
  div.monster_table > div:first-of-type {
    box-sizing: border-box;
  }
  div.monster_table > div:nth-of-type(2) {
    width: 600px;
  }
  .monster_stats {
    padding: 2px 0px 2px 0px;
    box-sizing: border-box;
  }
  div.monster_stats > div:nth-of-type(2n-1) {
    text-align: center;
    padding: 4px 6px;
    background: #f0f0f0;
    border-radius: 5px;
  }
  div.monster_stats > div:nth-of-type(2n) {
    text-align: center;
    padding: 2px 4px 2px 4px;
  }
  div.monster_text {
    background: #fffce0;
    border-radius: 5px;
    padding: 4px 8px;
    font-size: 14px;
    text-align: left;
  }
  div.monster_notes {
    background: #f0f0f0;
    border-radius: 5px;
    padding: 4px 8px;
    font-size: 14px;
    text-align: left;
  }
  .stretch {
    flex-grow: 1;
    align-self: stretch;
  }
  .trapDesc {
    max-width: 350px;
  }
  .monsterLocationTable th {
    background-color: #f0f0f0;
    font-weight: normal;
    text-align: center;
    padding: 2px;
  }
  .monsterLocationTable td:nth-of-type(2) {
    text-align: left;
  }
  .monsterLocationTable td {
    text-align: center;
    min-width: 25.57px;
    padding: 3px;
  }
  .monsterImage {
    margin-bottom: 5px !important;
  }
  .monsterImage img {
    min-height: 55px;
    max-width: unset !important;
    width: unset !important;
  }
  .bossImage {
    margin-bottom: 5px !important;
  }
  .bossImage img {
    min-height: 65px;
    max-height: 200px;
    max-width: unset !important;
    width: unset !important;
    image-rendering: pixelated;
  }
  #monsterList td {
    text-align: center;
  }
  .rewardTable th {
    font-weight: normal;
  }
  .rewardTable tr:nth-of-type(29),
  .rewardTable tr:nth-of-type(30),
  .rewardTable tr:nth-of-type(31) {
    background-color: #ffffe4;
  }
  .rewardTable tr:nth-of-type(22),
  .rewardTable tr:nth-of-type(23),
  .rewardTable tr:nth-of-type(24),
  .rewardTable tr:nth-of-type(25),
  .rewardTable tr:nth-of-type(26),
  .rewardTable tr:nth-of-type(27),
  .rewardTable tr:nth-of-type(28) {
    background-color: #EAFFEA;
  }
  .achievementTable tr:nth-of-type(25),
  .achievementTable tr:nth-of-type(26),
  .achievementTable tr:nth-of-type(27),
  .achievementTable tr:nth-of-type(28),
  .achievementTable tr:nth-of-type(29),
  .achievementTable tr:nth-of-type(30),
  .achievementTable tr:nth-of-type(31),
  .achievementTable tr:nth-of-type(32),
  .achievementTable tr:nth-of-type(33),
  .achievementTable tr:nth-of-type(34),
  .achievementTable tr:nth-of-type(77),
  .achievementTable tr:nth-of-type(78) {
    background-color: #ffffe4;
  }
  .achievementTable tr:nth-of-type(19),
  .achievementTable tr:nth-of-type(20),
  .achievementTable tr:nth-of-type(21),
  .achievementTable tr:nth-of-type(22),
  .achievementTable tr:nth-of-type(23),
  .achievementTable tr:nth-of-type(24),
  .achievementTable tr:nth-of-type(55),
  .achievementTable tr:nth-of-type(69),
  .achievementTable tr:nth-of-type(70),
  .achievementTable tr:nth-of-type(71),
  .achievementTable tr:nth-of-type(72),
  .achievementTable tr:nth-of-type(73),
  .achievementTable tr:nth-of-type(74),
  .achievementTable tr:nth-of-type(75),
  .achievementTable tr:nth-of-type(76) {
    background-color: #EAFFEA;
  }
  .dungeonItemTable th {
    font-weight: normal;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .dungeonItemTable td {
    text-align: center;
    min-width: 25px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
  }
  .dungeonItemTable td:nth-of-type(1) {
    text-align: left;
  }
  .dungeonItemTable img {
    height: 16px !important;
    position: relative !important;
    vertical-align: sub !important;
  }
  .dungeonDropTable th {
    font-weight: normal;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .dungeonDropTable td {
    text-align: left;
    min-width: 25px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
  }
  .dungeonDropTable td:nth-of-type(1) {
    text-align: center;
  }
  .dungeonDropTable img {
    position: relative !important;
    height: 20px !important;
  }
  .itemTable th {
    text-align: center;
    padding: 3px;
  }
  .itemTable td {
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .trainingTable th {
    font-weight: normal;
    font-size: 13.5px;
    padding: 2.5px;
  }
  .trainingTable td {
    font-size: 13.5px;
    padding: 2.5px;
  }
  .itemListTable th {
    text-align: center;
    padding: 2px;
  }
  .itemListTable td {
    padding: 2px;
  }
  .max {
    color: #be94d7;
  }
  .maxHone {
    background-color: #fff3f5;
  }
  .maxBase {
    background-color: #efefff;
  }
  .maxSlot {
    background-color: #fff6e5;
  }
  .yes {
    background-color: #e6ffe6;
  }
  .no {
    background-color: #fff0f0;
  }
  .notes {
    color: #3365c6;
  }
  .hard {
    color: #be94d7;
  }
  .unlock {
    background-color: #cfe6ff !important;
  }
  .itemList img {
    position: relative !important;
    width: 18px !important;
    padding: 0px !important;
    height: auto;
  }
  .itemList th {
    color: white;
    font-weight: bold;
    background-color: #482b0a;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .itemList tr:nth-of-type(2) th {
    color: #3b454e;
    text-align: center;
    background-color: #ffffed;
  }
  .itemList td {
    text-align: center;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .itemList td:nth-of-type(9) {
    text-align: left;
  }
  .nonEquip td:nth-of-type(3) {
    text-align: left;
  }
  .itemName {
    text-align: left !important;
    background-color: #f7f7f7;
  }
  .range {
    background-color: #eee4d9;
    padding: 0px !important;
  }
  .range img {
    position: relative !important;
    width: 30px !important;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .abilityName {
    background-color: #fff9e5 !important;
  }
  .statusResists {
    background-color: #ffe8e8 !important;
  }
  .abilityTable th {
    text-align: center;
  }
  .abilityTable td:nth-of-type(2) {
    max-width: 540px;
  }
  .abilityTable td:nth-of-type(3),
  .abilityTable td:nth-of-type(4),
  .abilityTable td:nth-of-type(5),
  .abilityTable td:nth-of-type(6),
  .abilityTable td:nth-of-type(7),
  .abilityTable td:nth-of-type(8), {
    text-align: center;
  }
  .abilityTable td:nth-of-type(7) img {
    position: relative !important;
    width: 20px !important;
  }
  .abilityTable td:nth-of-type(8) img {
    position: relative !important;
    width: 30px !important;
  }
  .jobTable th {
    background-color: #eee;
    font-weight: normal;
    padding: 3px;
    text-align: center;
  }
  .jobTable td {
    text-align: center;
  }
  .jobTable img {
    position: relative !important;
    width: 20px !important;
  }
  .abi_desc {
    max-width: 628px;
  }
  .jobLinksTable th {
    text-align: center;
  }
  .jobLinksTable td {
    text-align: center;
    min-width: 96.35px;
  }
  .jobLinksImage img {
    position: relative !important;
    width: 50px !important;
  }
  .sp {
    background-color: #fffceb;
  }
  .hp {
    background-color: #efe;
  }
  .atk {
    background-color: #ffefef;
  }
  .def {
    background-color: #edf9ff;
  }
  .mag {
    background-color: #fdf4ff;
  }
  .mnd {
    background-color: #f1fffe;
  }
  .itemListCentered th {
    text-align: center;
    padding: 4px;
  }
  .itemListCentered td:nth-of-type(1) {
    background-color: #f7f7f7;
    text-align: left;
  }
  .itemListCentered td:nth-of-type(9) {
    text-align: left;
  }
  .itemListCentered td {
    text-align: center;
    padding: 4px;
    padding-left: 4px;
    padding-right: 4px;
    min-width: 34.15px;
  }
  .itemListCentered img {
    position: relative !important;
    image-rendering: pixelated;
  }
  .itemListCenteredSmall th {
    font-size: 13px;
    text-align: center;
    padding: 1.5px;
  }
  .itemListCenteredSmall td {
    font-size: 13px;
    text-align: center;
    padding: 1.5px;
  }
  .itemListCentered3 th {
    text-align: center;
    padding: 3px;
  }
  .itemListCentered3 td {
    text-align: center;
    padding: 3px;
  }
  .itemListName {
    text-align: left !important;
  }
  .unused td {
    background-color: #dfdfdf;
  }
  .best {
    background-color: #ffffde;
  }
  .summaryTable th {
    text-align: center;
    padding: 1.5px;
  }
  .summaryTable td {
    padding: 1.5px;
  }
  /* This might be bad practice? */
  .roundedTableWrapper {
    width: max-content;
    overflow: auto;
    border-radius: 6px;
    border: 1px solid #919191;
  }
  /* Location Table on Villages Page */
  .locationTable {
    border-collapse: collapse;
    border-spacing: 0px;
    border-style: hidden;
  }
  .locationTable thead tr th {
    font-weight: normal;
    text-align: center;
  }
  .locationTable tbody tr td:first-of-type[rowspan="2"] {
    border-left: 1px solid #919191;
    border-bottom-left-radius: 6px;
  }
  .locationTable tbody tr td:last-of-type[rowspan="2"] {
    border-right: 1px solid #919191;
    border-bottom-right-radius: 6px;
  }
  .locationTable tbody tr td {
    border-left: 1px solid #919191;
    border-bottom: 1px solid #919191;
  }
  .locationTable td {
    text-align: center;
  }
  .currentLocation {
    background-color: #e2fdf3;
  }
  .itemDetailsTable th {
    background-color: #f6f4ff;
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .itemDetailsTable td {
    padding: 3px;
  }
  .itemDetailsTable img {
    position: relative !important;
  }
  .noPad td:nth-of-type(1) {
    background-color: #eee;
    padding: 0px !important;
  }
  .buddyOverview {
    margin-bottom: 8px;
  }
  .buddyOverview th {
    background-color: #eee;
    font-weight: normal;
    padding: 3px;
    text-align: center;
  }
  .buddyOverview td {
    text-align: center;
    padding: 3px;
  }
  .buddyOverview img {
    position: relative !important;
    width: 20px !important;
  }
  .buddyOverview td:nth-of-type(1) img {
    width: 60px !important;
  }
  .dungeonOverview {
    margin-bottom: 8px;
  }
  .dungeonOverview th {
    background-color: #cfe6ff;
    font-weight: normal;
    padding: 4px 8px;
  }
  .dungeonOverview td {
    padding: 4px 8px;
  }
  .dungeonNext th {
    background-color: #e2fdf3;
    padding: 4px 8px;
  }
  .dungeonNext td {
    padding: 4px 8px;
  }
  .dungeonTable img {
    height: 16px !important;
    position: relative !important;
    vertical-align: sub !important;
  }
  .dungeonTable th {
    font-weight: normal;
  }
  .dungeonItems th {
    font-weight: normal;
  }
  .dungeonItems th:nth-of-type(1) {
    text-align: center;
  }
  .dungeonItems td:nth-of-type(1) {
    text-align: center;
  }
  .dungeonItems td:nth-of-type(2) {
    background-color: #eee;
  }
  .dungeonItems img {
    position: relative !important;
    max-height: 26px !important;
    width: 24px !important;
  }
  .clearIcon {
    image-rendering: pixelated;
    padding: 0px;
  }
  .npcTable th {
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .npcTable td:first-of-type {
    text-align: center;
  }
  .npcTable td {
    padding: 3px;
  }
  .npcTable img {
    width: 48px !important;
    height: auto !important;
    position: relative !important;
  }
  .firstYellowTable th {
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .firstYellowTable td:first-of-type {
    background-color: #ffffe4;
    text-align: center;
  }
  .firstYellowTable td {
    padding: 3px;
  }
  .formationTable td {
    padding: 3px 6px;
    text-align: center;
  }
  .galleryTable td {
    text-align: center;
    padding: 2px;
  }
  .trophyTable th {
    padding: 3px;
  }
  .trophyTable td {
    padding: 3px;
  }
  .trophyTable img {
    position: relative !important;
  }
  .trophyImageTd {
    padding: 0px !important;
  }
  .centeredTd {
    text-align: center;
  }
  .statusImageTd {
    text-align: center;
    background-color: #4f597a;
    color: lightgray;
  }
  .sealTable td:nth-of-type(1){
    text-align: center;
    padding: 0px;
    background-color: #f7f7f7 !important;
  }
  .sealTable td:nth-of-type(2){
    text-align: center;
  }
  .sealTable th {
    text-align: center;
    padding-left: 3.5px;
    padding-right: 3.5px;
  }
  .sealTable td {
    padding-left: 5px;
    padding-right: 5px;
  }
  .sealTable img {
    position: relative !important;
    image-rendering: pixelated;
  }
  .borgTable img {
    position: relative !important;
    image-rendering: pixelated;
  }
  .trapTable img {
    min-height: 24px;
    min-width: 24px;
    image-rendering: pixelated;
  }
  .trapTable td:nth-of-type(1){
    background-color: #a6a6a6;
  }
  .trapTable td:nth-of-type(2){
    text-align: left;
    font-size: 13.5px;
  }
  .trapTable td:nth-of-type(3){
    text-align: left;
  }
  .trapTable td:nth-of-type(4){
    text-align: left;
  }
  .trapTable th {
    text-align: center;
    padding-left: 3.5px;
    padding-right: 3.5px;
  }
  .trapTable td {
    text-align: center;
    padding-left: 3.5px;
    padding-right: 3.5px;
  }
  .trapTable img {
    position: relative !important;
  }
  .tableNotes p {
    font-size: 13px;
  }
  .resonanceTable th {
    padding: 4px;
  }
  .resonanceTable td {
    padding: 4px;
  }
  .resonanceTable td:nth-of-type(1){
    font-size: 13.5px;
  }
  .resonanceTable td:nth-of-type(2){
    font-size: 13.5px;
  }
  .monsterTableRates th {
    text-align: center;
    padding: 2px;
    font-size: 12.5px;
  }
  .monsterTableRates td {
    text-align: center;
    padding: 2px;
    font-size: 12.5px;
  }
  .monsterTablePostgame th {
    text-align: center;
    padding: 1px;
    font-size: 12px;
  }
  .monsterTablePostgame td {
    text-align: center;
    padding: 0.5px;
    font-size: 12px;
  }
  .goldenMonsters th {
    background-color: gold;
  }
  .monsterDrain {
    background-color: #FFCAE5;
  }
  .monsterGhost {
    background-color: #FFFFD1;
  }
  .monsterDragon {
    background-color: #CCDF8F;
  }
  .monsterItem {
    background-color: #d6fffb;
  }
  .monsterItemChange {
    background-color: #E7D1FD;
  }
  .monsterWater {
    background-color: #B5DAFF;
  }
  .monsterWeapon {
    background-color: #C0CAFF;
  }
  .monsterCyclops {
    background-color: #e3ffe3;
  }
  .monsterBomb {
    background-color: #fc9;
  }
  .monsterBone {
    background-color: #ffff70;
  }
  .monsterNone {
    background-color: #f7f7f7;
  }
  .monsterStrong {
    background-color: #FFCAE5;
  }
  .monsterHighStat1 {
    background-color: #FFFFD1;
  }
  .monsterHighStat2 {
    background-color: #ffdbb8;
  }
  .itemEquipment {
    background-color: #b0d9ff;
  }
  .itemScroll {
    background-color: #ffcfcf;
  }
  .itemEdible {
    background-color: #bfffbf;
  }
  .itemCurse {
    background-color: #7aabdd;
  }
  .sealEquipment {
    text-align: center;
    background-color: #b0d9ff;
  }
  .sealScroll {
    text-align: center;
    background-color: #ffcfcf;
  }
  .sealEdible {
    text-align: center;
    background-color: #bfffbf;
  }
  .sealCurse {
    text-align: center;
    background-color: #7aabdd;
  }
  .high {
    background-color: #fffbcc;
  }
  .mid {
    background-color: #ffffe4;
  }
  .low {
    background-color: #fff;
  }
  .good {
    background-color: #e4eeff;
  }
  .bad {
    background-color: #ffe8d3;
  }
  .neutral {
    background-color: #fffceb;
  }
  .crossMix {
    background-color: #e1ffe1;
  }
  .highlightCyan {
    background-color: #c3ffeb;
  }
  .highlightCyan2 {
    background-color: #d9e6e8 !important;
  }
  .highlightGreen {
    background-color: #EAFFEA !important;
  }
  .highlightGreen2 {
    background-color: #F3FFF3;
  }
  .highlightReaper {
    background-color: #ffc4c4;
  }
  .highlightDuel {
    background-color: #ffe3b9 !important;
  }
  .checkpoint {
    color: #ff00bf;
  }
  .changeCrystal {
    background-color: #d3f1ff !important;
  }
  .highlightGray {
    background-color: #fbfbfb !important;
  }
  .highlightYellow {
    background-color: #ffffe4 !important;
  }
  .highlightDarkGray {
    background-color: #dfdfdf !important;
  }
  .highlightGrey {
    background-color: #f4f4f4 !important;
  }
  .highlightYellow2 {
    background-color: #eeeedc !important;
  }
  .highlightPink {
    background-color: #fff4f4 !important;
  }
  .highlightPink2 {
    background-color: #ffe9e9;
  }
  .highlightBlue {
    background-color: #a3e0fd !important;
  }
  .highlightBlack {
    background-color: #333333 !important;
    color: white;
  }
  .highlightPurple {
    background-color: #e6e6fa !important;
  }
  .highlightPurple2 {
    background-color: #e7c6ff;
  }
  .highlightPurple3 {
    background-color: #dfb9ff !important;
  }
  .highlightBoss {
    background-color: #e5daff !important;
  }
  .highlightBrown {
    background-color: #e6bba6;
  }
  .highlightBrown2 {
    background-color: #f4e5de;
  }
  .highlightRed {
    background-color: #ffb3b3 !important;
  }
  .highlightOrange {
    background-color: #fff4e6 !important;
  }
  .highlightOrange2 {
    background-color: #ffe3b9 !important;
  }
  .highlightOrange3 {
    background-color: #ffb23e;
  }
  .highlightLightblue {
    background-color: #d9ebff !important;
  }
  .highlightNeon {
    background-color: #ddfff7 !important;
  }
  .highlightNight {
    background-color: #ebf8ff !important;
  }
  .highlightNight2 {
    background-color: #d3cfff;
  }
  .highlightNight3 {
    background-color: #ecb8ff;
  }
  .highlightPlatinum {
    background-color: #e4f8ff !important;
  }
  .highlightGold {
    background-color: #fff3b4 !important;
  }
  .highlightSilver {
    background-color: #e8e8e8 !important;
  }
  .highlightBronze {
    background-color: #ffd4bf !important;
  }
  .highlightFarming {
    background-color: #c3ecff !important;
  }
  .highlightUseful {
    background-color: #aeffda !important;
  }
  .highlightItem {
    background-color: #ddc4ec !important;
  }
  .highlightOffense {
    background-color: #fff7cf !important;
  }
  .highlightDanger {
    background-color: #ffd0f4 !important;
  }
  .highlightExtreme {
    background-color: #ffb1b1 !important;
  }
  .highlightWater {
    background-color: #3366ff;
    color: white;
  }
  .highlightLava {
    background-color: #e33f3f;
    color: white;
  }
  .highlightNoWalls {
    background-color: lightsteelblue;
    color: white;
  }
  .highlightNoWallsLava {
    background-color: #e6e6e6;
    color: #e33f3f;
  }
  .highlightShop {
    background-color: #a8ffc6 !important;
  }
  .highlightMH {
    background-color: #edcbff;
  }
  .highlightBehemoth {
    background-color: #ffb8a8;
  }
  .highlightGitan {
    background-color: #a8ffc6;
  }
  .highlightFog {
    background-color: #ddd;
  }
  .highlightDerivative1 {
    background-color: paleturquoise;
  }
  .highlightDerivative2 {
    background-color: lightskyblue;
  }
  .highlightNormal {
    background-color: #dfdfdf !important;
  }
  .highlightLevel {
    background-color: #eafffb !important;
  }
  .highlightWeapon {
    background-color: #baceec !important;
  }
  .highlightProjectile {
    background-color: #e9ffa6 !important;
  }
  .highlightMagic {
    background-color: #e8d9ff !important;
  }
  .highlightItem {
    background-color: #d1c4ff !important;
  }
  .highlightMisc {
    background-color: #f8feff !important;
  }
  .highlightDragon {
    background-color: #b0d7ac !important;
  }
  .highlightGhost {
    background-color: #fcffaf !important;
  }
  .highlightCyclops {
    background-color: #c8ffc8 !important;
  }
  .highlightBomb {
    background-color: #ffdb9a !important;
  }
  .highlightDrain {
    background-color: #ffdae0 !important;
  }
  .highlightAquatic {
    background-color: #d9ebff !important;
  }
  .monsterDay {
    background-color: #fffff6;
  }
  .monsterNight {
    background-color: #edf4ff;
  }
  .itemPageImage {
    background-color: #555;
  }
  .tableWithImages img {
    position: relative !important;
  }
  .mapTable td {
    text-align: center;
  }
  .mapTable img {
    width: 200px !important;
    height: auto;
    position: relative !important;
  }
  /* end - tables.css */

  /* List styling */
  .dungeonLinksUL li {
    line-height: 1.3 !important;
  }
  .quickLinksUL li {
    line-height: 1.3 !important;
  }
  .monsterTableNotes {
    margin-top: 3px !important;
  }
  /* end list styling */

  /* Paragraph styling */
  .emphasis {
    font-weight: bold;
  }
  .goldText {
    color: #8a7500;
  }
  .orangeText {
    color: #f9a100;
  }
  .orangeText2 {
    color: #fd8200;
  }
  .blueText {
    color: #4e4ec6;
  }
  .blueText2 {
    color: blue;
  }
  .darkblueText {
    color: #0000cd;
  }
  .lightblueText {
    color: #1b9fac;
  }
  .redText {
    color: #f66;
  }
  .redText2 {
    color: red;
  }
  .greenText {
    color: #008a20;
  }
  .purpleText {
    color: #9d338b;
  }
  .purpleText2 {
    color: #a256bd;
  }
  .farming {
    background-color: #f4ffed;
  }
  .useful {
    background-color: #edffff;
  }
  .stats {
    background-color: #faedff;
  }
  .items {
    background-color: #fff9e0;
  }
  .danger {
    background-color: #ffeded;
  }
  .ninjaTree {
    background-color: #c5ffc5;
  }
  .ninjaFire {
    background-color: #ffbebe;
  }
  .ninjaEarth {
    background-color: #ffdb99;
  }
  .ninjaWater {
    background-color: #d8e7ff;
  }
  .ninjaMetal {
    background-color: #ffffc9;
  }
  .monkOkina {
    background-color: #f5daff;
  }
  .monkOkame {
    background-color: #d8e7ff;
  }
  .monkHannya {
    background-color: #ffe1c6;
  }
  .monkTengu {
    background-color: #d5d5d5;
  }
  .monkKitsune {
    background-color: #ffbebe;
  }
  .extreme {
    color: #e32a2a;
  }
  .limitBreak {
    color: #ff46a3;
  }
  .priceIdentified {
    background-color: #b0daff !important;
  }
  .priceWhich {
    background-color: #fafad2 !important;
  }
  .centeredText {
    text-align: center !important;
  }
  .leftText {
    text-align: left !important;
  }
  .facility {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
  }
  /* Image styling */
  img {
    max-width: 100%;
  }
  .equipmentImage span {
    margin-left: 20px !important;
    background-image: none !important;
    display: block !important;
  }
  .equipmentImage {
    margin-top: 12px;
    margin-bottom: 12px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .equipmentImage img {
    height: auto !important;
    transform: scale(1.4);
    background-color: #555;
    border-radius: 3px;
    padding: 5px;
  }
  .dungeonImage span {
    height: 200px;
    width: 265px;
    margin-left: 0px !important;
    background-image: none !important;
    display: block !important;
  }
  .dungeonImage img {
    height: auto !important;
    max-height: 200px;
    width: auto !important;
    padding: 5px;
  }
  .otherImage span {
    margin-left: 0px !important;
    background-image: none !important;
    display: block !important;
  }
  .otherImage img {
    height: auto !important;
    max-height: 240px;
    width: auto !important;
    padding: 5px;
  }
  .galleryImage span {
    margin-left: 0px !important;
    background-image: none !important;
    display: block !important;
  }
  .galleryImage span img {
    height: auto !important;
    width: 590px;
  }
  .characterImage {
    width: 160px !important;
    height: auto;
  }
  .characterImage img {
    position: relative !important;
  }
  .dungeonPageImage {
    width: 240px !important;
    height: auto;
  }
  .dungeonPageImage img {
    position: relative !important;
  }
  .dungeonPageImage2 {
    display: flex;
    width: 480px !important;
    height: auto;
  }
  .dungeonPageImage2 img {
    position: relative !important;
  }
  .dungeonPageImage3 {
    display: flex;
    width: 360px !important;
    height: auto;
  }
  .dungeonPageImage3 img {
    position: relative !important;
  }
  .allyPageImage {
    display: flex;
    width: 560px !important;
    height: auto;
  }
  .allyPageImage img {
    position: relative !important;
  }
  .allyImage span {
    margin-left: 0px !important;
    background-image: none !important;
    display: block !important;
  }
  .allyImage img {
    height: auto !important;
    width: auto !important;
    padding: 1px;
  }
  .statueImage {
    display: flex;
  }
  .statueImage span {
    margin: 0px !important;
    margin-right: 5px !important;
  }
  .statueImage img {
    height: auto !important;
    width: auto !important;
    padding: 2px;
    background-color: #555;
    border-radius: 3px;
    position: relative !important;
  }
  .gatsby-resp-image-background-image {
    display: none !important;
  }
  .gatsby-resp-image-wrapper {
    display: inline-block !important;
    max-width: unset !important;
  }
  .itemPageImage img {
    position: relative !important;
    background-color: #555;
  }
  .boxArt img {
    height: 150px !important;
    position: relative !important;
  }
  .relativeImage img {
    position: relative !important;
  }
  .jobImage img {
    position: relative !important;
    width: 24px !important;
    height: auto !important;
    vertical-align: text-bottom !important;
  }
  .iconTable td:nth-of-type(1) {
    text-align: center;
    padding: 1px;
  }
  .iconTable tr:nth-of-type(31),
  .iconTable tr:nth-of-type(32) {
    background-color: #ffffe4;
  }
  .iconTable tr:nth-of-type(29),
  .iconTable tr:nth-of-type(30) {
    background-color: #EAFFEA;
  }
  .iconTable img {
    width: 40px !important;
    height: 40px !important;
  }
  .rewardTable td:nth-of-type(1) {
    text-align: center;
    padding: 1px;
  }
  .rewardTable td:nth-of-type(2) {
    text-align: center;
  }
  .rewardImg img {
    width: 160px !important;
    height: auto !important;
  }
  .guideImage img {
    max-height: 20px;
    max-width: 20px;
    position: relative !important;
  }
  .pageTopImage img {
    padding-top: 5px;
    position: relative !important;
  }
  .dungeonPageTopImage2 {
    display: flex;
    max-width: 600px;
  }
  .dungeonPageTopImage2 img {
    padding-top: 5px;
    position: relative !important;
    image-rendering: pixelated;
  }
  .statusTable img {
    position: relative !important;
  }
  #resonanceImage {
    height: auto;
    width: 280px;
  }
  #synthesisMixer {
    height: 55px;
    width: 60px;
    margin-bottom: 10px;
  }
  #synthesisPot {
    height: 20px;
    width: 20px;
    margin-bottom: 10px;
  }
  #catstone {
    height: 30px;
    width: 27px;
  }
  .ally {
    width: 100px;
    height: auto;
  }
  .screenshot {
    width: 340px;
    height: auto;
  }
  .smallScreenshot img {
    position: relative !important;
    width: 240px !important;
    height: auto;
  }
  .overworldMap {
    width: 340px;
    height: auto;
    margin-top: 6px;
  }
  .flower {
    height: 70px !important;
    width: auto;
  }
  #auraImage img {
    width: 90px !important;
    height: auto;
  }
  #islandImage img {
    width: 150px !important;
    height: auto;
  }
  #mapLine img {
    height: 100px !important;
    width: auto;
  }
  #mapI img {
    width: 150px !important;
    height: auto;
  }
  #pickachoiceImage img {
    width: 160px !important;
    height: auto;
  }
  #hiddenRoom img {
    width: 200px !important;
    height: auto;
  }
  .mapImage img {
    width: 220px !important;
    height: auto;
  }
  /* end image */
  .githubBtn {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 10px 0px;
    padding-left: 15px;
    max-height: 40px;
  }
  .githubBtn span span {
    display: flex;
    align-items: center;
  }

  .communitySection {
    font-size: 24px;
    font-weight: 700;
  }
  .authorSection {
    padding: 20px 0;
  }
  .authorSection,
  .authorName {
    display: flex;
    align-items: center;
  }
  .authorImg img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    min-width: 75px;
    max-width: 75px;
    min-height: 75px;
    max-height: 75px;
  }
  .authorDetails {
    padding-left: 10px;
  }
  .authorDesc {
    padding-top: 5px;
    font-size: 14px;
  }
  .authorName img {
    margin-left: 10px;
    display: inline-block;
    width: 20px;
  }
  .authorName img:hover {
    opacity: 0.7;
  }

  .heading1 {
    font-size: 26px;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 6px;
    margin-top: 6px;
  }

  .heading2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
  }
  .heading2 img {
    position: relative !important;
    height: 18px !important;
    width: auto;
  }

  .heading3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 16px;
    border-left: 10px solid #ffec85;
    border-right: 1px solid #ffec85;
    border-bottom: 2px solid #ffec85;
    border-top: 1px solid #ffec85;
    padding-left: 10px;
  }

  .heading4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
    border-left: 10px solid #ffec85;
    padding-left: 6px;
  }
  .heading4 img {
    position: relative !important;
  }

  .heading5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
    border-left: 6px solid #ffec85;
    padding-left: 4px;
  }

  .heading6 {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
  }

  .paragraph {
    margin: 12px 0px 12px;
    line-height: 1.625;
  }

  .pre {
    font-size: 14px;
    margin: 0px;
    padding: 16px;
    overflow: auto;
  }

  .poweredBy {
    font-size: 0.6em;
    text-align: end;
    padding: 0;
  }
  .topnav {
    -webkit-transition: top 0.5s, bottom 0.5s;
  }

  @media (max-width: 767px) {
    .formElement svg path {
      fill: #001934;
    }
    .visibleMobileView {
      display: block !important;
    }
    .searchInput {
      color: #001934;
    }
    .socialWrapper {
      position: absolute;
      right: 10px;
      top: 29px;
    }
    .responsive {
      margin-top: 15px;
      position: relative;
      padding-bottom: 20px;
      border-top: 1px solid #fff;
    }
    .headerTitle {
      padding-right: 50px;
      font-size: 16px;
    }
    .navBarBrand {
      min-height: 40px;
    }
    .navBarBrand img {
      margin-right: 8px;
    }
    .topnav.responsive .visibleMobile {
      display: block;
    }
    .topnav .navBarUL {
      display: none;
    }
    .topnav.responsive .navBarUL {
      display: block;
      text-align: left;
    }
    .hiddenMobile {
      display: none !important;
    }
    hr {
      margin-top: 0;
      margin-bottom: 0;
    }
    .navBarParent {
      display: block;
    }
    .separator {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .navBarULRight {
      position: static;
    }
    .navBarUL {
      display: flex;
      align-items: center;
      margin: 7.5px 0px;
    }
    .navBarUL li {
      height: 37px;
    }
    .navBarUL li a {
      font-size: 14px;
      padding: 10px 15px;
    }

    .navBarDefault {
      display: block;
      height: auto;
    }

    .navBarToggle {
      margin-right: 0;
      display: block;
      position: absolute;
      left: 11px;
      top: 15px;
      background: #fff;
    }

    .navBarHeader {
      display: flex;
      min-width: auto;
      padding-right: 0;
      align-items: center;
    }

    .navBarBrand {
      font-size: 20px;
      padding: 0 0;
      padding-left: 0;
      flex: initial;
      padding-right: 15px;
    }

    .titleWrapper {
      padding: 0 15px;
      display: block;
    }

    .gitBtn {
      display: inline-block;
    }

    .mobileView {
      text-align: left !important;
      padding-left: 0 !important;
    }

    .searchWrapper {
      padding: 0px 0;
      padding-top: 0px;
      position: absolute;
      bottom: 0px;
      width: calc(100% - 70px);
      position: absolute;
      left: 40px;
      top: 8px;
    }
    .hitWrapper {
      width: 100%;
      right: 0;
      top: 35px;
      max-height: fit-content;
      position: static;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .navBarDefault {
      padding: 10px;
    }
    .navBarBrand {
      font-size: 22px;
    }
    .navBarHeader {
      min-width: 240px;
      flex: initial;
    }
    .githubBtn {
      padding: 10px 10px;
    }
    .divider {
      margin: 0 5px;
      height: 20px;
    }
    .hitWrapper {
      max-width: 500px;
    }
    .navBarUL li a {
      padding: 10px 5px;
    }
    .searchWrapper {
      padding-left: 0px;
    }
  }
`;
