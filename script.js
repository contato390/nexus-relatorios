(function(){
  // ===== CONFIGURAÇÃO: edite aqui =====
  var HERO_IMG = ""; // Foto do banner: coloque o arquivo em assets/ e escreva aqui, ex.: "assets/medico.jpg"
  var PHONE = "554396810795"; // +55 43 9681-0795
  var MSG = {
    main: "Olá! Vim pelo Instagram da Nexus Relatórios e gostaria de saber mais sobre os relatórios médicos."
  };
  var WA = "https://wa.me/" + PHONE + "?text=";
  var LINKS = {
    solicitar: WA + encodeURIComponent("Olá! Vim pelo Instagram e gostaria de solicitar um relatório médico."),
    // Coloque aqui o link do seu material (Drive, Notion, site). Se vazio, abre o WhatsApp.
    materiais: "",
    instagram: "https://www.instagram.com/nexusrelatorios/"
  };
  var matFallback = WA + encodeURIComponent("Olá! Vim pelo Instagram e gostaria de receber os materiais para advogados.");
  // ====================================

  document.querySelectorAll("[data-wa]").forEach(function(a){
    a.href = WA + encodeURIComponent(MSG.main);
  });
  document.querySelectorAll("[data-link]").forEach(function(a){
    var k = a.getAttribute("data-link");
    a.href = LINKS[k] || (k === "materiais" ? matFallback : "#");
  });

  var img=document.getElementById("heroImg"),fb=document.getElementById("heroFallback");
  if(HERO_IMG){img.onload=function(){img.hidden=false;fb.hidden=true};img.src=HERO_IMG;}

  // Botão flutuante do WhatsApp após rolar
  var f = document.getElementById("float");
  function onScroll(){ f.classList.toggle("show", window.scrollY > 380); }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();

  // Revelação discreta
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    }, {threshold:.12});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add("in"); }); }
})();
