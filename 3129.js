"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[3129],{3129:(e,n,a)=>{a.r(n),a.d(n,{default:()=>t});const t='<#ftl stripText=false>\n\n<#-- Free marker demo --\x3e\n\n<#comment>\nThis demonstrates the FreeMarker language. The default theme is not very\ncolorful and displays many different token types in the same color, but keep in\nmind that you can define your own theme (or extend an existing one).\n\nNote that free marker actually defines 6 similar but different syntax modes:\n\n- 3 tag syntax modes: Angle (<#if>), Bracket ([#if]), and Auto.\n- 2 interpolation modes: Dollar (${...}) and Bracket ([=...])\n\nIn auto mode, the first tag determines the tag syntax. You can use the language\nIDs "freemarker.tag-bracket.interpolation-dollar" etc. to force a specific mode.\n\nThe default FreeMarker mode is Angle/Dollar.\n</#comment>\n\n<#macro greet name>\n  <font size="+2">Hello ${name}!</font>\n</#macro>\n\n<#macro border>\n  <table border=4 cellspacing=0 cellpadding=4><tr><td>\n    <#nested>\n  </tr></td></table>\n</#macro>\n\n<#function avg x y>\n  <#return (x + y) / 2>\n</#function>\n\n<#assign user = "Juila Smith">\n<#assign animals = [{"name": "Tanuki", "price": 200}, {"name": "Phoenix", "price": 1111}]>\n\n<html>\n<head>\n  <title>Welcome!</title>\n</head>\n<body>\n  <#-- Greet the user with his/her name --\x3e\n  <h1>\n  \t<@greet user />\n  </h1>\n\n  <p>We have these animals:\n\n  <ul>\n  <#list animals as animal>\n    <li>${animal.name} for ${animal.price} Euros\n  </#list>\n  </ul>\n\n  <@border>The bordered text</@border>\n\n  The average of 35 and 49 is ${avg(35, 49)}.\n\n</body>\n</html>\n'}}]);
//# sourceMappingURL=3129.js.map