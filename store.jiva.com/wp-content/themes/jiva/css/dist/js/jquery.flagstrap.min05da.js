/*
 *  FlagStrap - v1.0
 *  A lightwieght jQuery plugin for creating Bootstrap 3 compatible country select boxes with flags.
 *  http://www.blazeworx.com/flagstrap
 *
 *  Made by Alex Carter
 *  Under MIT License
 */
!function(a){var e={buttonSize:"btn-md",buttonType:"btn-default",labelMargin:"10px",scrollable:!0,scrollableHeight:"250px",placeholder:{value:"",text:"Please select country"}},n={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia, Plurinational State of",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, the Democratic Republic of the",CK:"Cook Islands",CR:"Costa Rica",CI:"C&ocirc;te d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Cura&ccedil;ao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic of",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea, Democratic People's Republic of",KR:"Korea, Republic of",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia, the former Yugoslav Republic of",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"R&eacute;union",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin (French part)",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten (Dutch part)",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan, Province of China",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela, Bolivarian Republic of",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"}
a.flagStrap=function(t,i,r){function l(a){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("")
a||(a=Math.floor(Math.random()*e.length))
for(var n="",t=0;t<a;t++)n+=e[Math.floor(Math.random()*e.length)]
return n}var o=this,s=l(8)
o.countries={},o.selected={value:null,text:null},o.settings={inputName:"country-"+s}
var d=a(t),u="flagstrap-"+s,c="#"+u
o.init=function(){o.countries=n,o.countries=n,o.settings=a.extend({},e,i,d.data()),void 0!==o.settings.countries&&(o.countries=o.settings.countries),void 0!==o.settings.inputId&&(u=o.settings.inputId,c="#"+u),d.addClass("flagstrap").append(g).append(p).append(S),void 0!==o.settings.onSelect&&o.settings.onSelect instanceof Function&&a(c).change(function(e){var n=this
i.onSelect(a(n).val(),n)}),a(c).hide()}
var g=function(){var e=a("<select/>").attr("id",u).attr("name",o.settings.inputName)
return a.each(o.countries,function(n,t){var i={value:n}
void 0!==o.settings.selectedCountry&&o.settings.selectedCountry===n&&(i={value:n,selected:"selected"},o.selected={value:n,text:t}),e.append(a("<option>",i).text(t))}),o.settings.placeholder!==!1&&e.prepend(a("<option>",{value:o.settings.placeholder.value,text:o.settings.placeholder.text})),e},p=function(){var e=a(c).find("option").first().text(),n=a(c).find("option").first().val()
if(e=o.selected.text||e,n=o.selected.value||n,n!==o.settings.placeholder.value)var t=a("<i/>").addClass("flagstrap-icon flagstrap-"+n.toLowerCase()).css("margin-right",o.settings.labelMargin)
else var t=a("<i/>").addClass("flagstrap-icon flagstrap-placeholder")
var i=a("<span/>").addClass("flagstrap-selected-"+s).html(t).append(e),r=a("<button/>").attr("type","button").attr("data-toggle","dropdown").attr("id","flagstrap-drop-down-"+s).addClass("btn "+o.settings.buttonType+" "+o.settings.buttonSize+" dropdown-toggle").html(i)
return a("<span/>").addClass("caret").css("margin-left",o.settings.labelMargin).insertAfter(i),r},S=function(){var e=a("<ul/>").attr("id","flagstrap-drop-down-"+s+"-list").attr("aria-labelled-by","flagstrap-drop-down-"+s).addClass("dropdown-menu")
return o.settings.scrollable&&e.css("height","auto").css("max-height",o.settings.scrollableHeight).css("overflow-x","hidden"),a(c).find("option").each(function(){var n=a(this).text(),t=a(this).val()
if(t!==o.settings.placeholder.value)var i=a("<i/>").addClass("flagstrap-icon flagstrap-"+t.toLowerCase()).css("margin-right",o.settings.labelMargin)
else var i=null
var r=a("<a/>").attr("data-val",a(this).val()).html(i).append(n).on("click",function(e){a(c).val(a(this).data("val")),a(c).trigger("change"),a(".flagstrap-selected-"+s).html(a(this).html()),e.preventDefault()}),l=a("<li/>").prepend(r)
e.append(l)}),e}
o.init()},a.fn.flagStrap=function(e){return this.each(function(n){void 0===a(this).data("flagStrap")&&a(this).data("flagStrap",new a.flagStrap(this,e,n))})}}(jQuery)
