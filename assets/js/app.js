"use strict";var validate=function(){var t=document.myform;$(".error").hide();var e=!1;if(t.term.value||($(".error-term").show(),e=!0),""===t.type.value&&($(".error-type").show(),e=!0),!e){var a={term:t.term.value.toLowerCase(),type:t.type.value};addToList(a)}},addToList=function(t){var e='<li class="attr-item">';e+='<span data-value=\'{"term":"'+t.term+'","type":"'+t.type+"\"}'>"+t.term,e+="<a>X</a>",e+="</span>",t.type>0?$(".positive-box ul.nav").append(e):$(".negative-box ul.nav").append(e),sortList(t.type)},sortList=function(t){var e=t>0?$(".positive-box ul.nav"):$(".negative-box ul.nav");e.children().sortDomElements(function(t,e){var a=$(t).children("span").data("value").term,r=$(e).children("span").data("value").term;return a==r?0:a>r?1:-1}),resetForm()},resetForm=function(){document.myform.term.value="",document.myform.type.value=""};$(document).on("click",".attr-item span",function(){document.myform.term.value=$(this).data("value").term,document.myform.type.value=$(this).data("value").type}),$(document).on("click",".attr-item span a",function(t){$(this).parents("li").remove(),t.stopPropagation()}),$.fn.sortDomElements=function(){return function(t){return Array.prototype.sort.call(this,t).each(function(t){this.parentNode.appendChild(this)})}}();