
(function(){
  try{
    var params = new URLSearchParams(window.location.search);
    var utm = {};
    ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(k){
      if(params.has(k)) utm[k]=params.get(k);
    });
    if(Object.keys(utm).length){
      localStorage.setItem("zgh_utm", JSON.stringify(utm));
    }
    function appendUTM(url){
      try{
        var stored = localStorage.getItem("zgh_utm");
        if(!stored) return url;
        var u = new URL(url, window.location.origin);
        var obj = JSON.parse(stored);
        Object.keys(obj).forEach(function(k){ u.searchParams.set(k, obj[k]); });
        return u.toString();
      }catch(e){ return url; }
    }
    window.addEventListener("click", function(e){
      var a = e.target.closest("a.track-utm");
      if(a && a.href){
        a.href = appendUTM(a.href);
      }
    }, true);
  }catch(e){}
})();
