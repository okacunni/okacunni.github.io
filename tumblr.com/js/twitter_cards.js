(function(){

  var arrMeta = parseMeta();
  var head = document.getElementsByTagName("head")[0];
  for(key in arrMeta){
    var meta = document.createElement("meta");
    meta.setAttribute("name", "twitter:" + key);
    meta.setAttribute("content", arrMeta[key]);
    head.appendChild(meta);
  };

  function parseMeta(){
    var keys = [
      "site_name",
      "title",
      "description",
      "image",
      "url"
    ];
    var arr = {};
    var meta = document.getElementsByTagName('meta');

    keys.forEach(function(key,idx){
      for (var i=0; i<meta.length; i++){
        var val = getMetaContent(meta[i], key);
        if (val){
          arr[key] = val;
          break;
        }
      }
    });
    return arr;
  }

  function getMetaContent(meta, key){
    if(meta.getAttribute("property") == "og:" + key)
    {
      return meta.getAttribute("content");
    }
    return "";
  }
}());
