window.addEventListener("load" , function(){
  //pass argument into querySelectorAll to fetch css selector .dashEffect
  var parents = document.querySelectorAll(".dashEffect");
   var count = 5;
   //created a 4 loop for count and init to 5
   for (var c=0; c,parents.length; c++){
     var delay = 0;
   //created a 4 loop for delay and init to 0
     for(var i=0; i<count; i++){
       var node = document.createElement("div");
       var html = "";
       for(var n=0; n<5; n++){
         html += "<span style='opacity:"+(1/(n+1))+"'></span>";
       }
node.innerHTML = html;
node.className = "dash";
node.style.left= Math.floor(Math.random()*parents[c].offsetWidth)+"px";
node.style.top = Math.floor(Math.random()*parents[c].offsetHeight)+"px";
node.style.height = parents[c].childNodes.length+"em";
node.style.transform = "rotate("+(i*60)+"deg)";
node.style.transformOrgin = "50% 0%"
node.style.AnimationDelay = delay+"s";
parents[c].appendChild(node);
delay++;
     }
   }
});
