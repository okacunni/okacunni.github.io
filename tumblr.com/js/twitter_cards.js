(function(){

// <meta name="twitter:card" content="summary" />
// <meta name="twitter:site" content="@okacunni">
// <meta name="twitter:creator" content="@Nametty">
// <meta name="twitter:creator:id" content="86489774">
// {block:PermalinkPage}
// <meta name="twitter:title" content="{block:PostSummary}{PostSummary}{/block:PostSummary}">
// {/block:PermalinkPage}
// {block:Description}
// <meta name="twitter:description" content="{MetaDescription}">
// {/block:Description}
// <meta name="twitter:image" content="">
  console.log(parseMeta);

  function parseMeta(){
    var keys = ["site_name","title","description","image","url"]
    var arr = {};
    var meta = document.getElementsByTagName('meta');
    for(i=0; i<meta.length; i++){
      keys.forEach(function(val,idx){
        arr.val = getMetaContent(meta[i], val);
      });
    }
    return arr;
  }

  function getMetaContent(meta, key){
    if(meta.getAttribute("property") == "og:" + key)
    {
      return meta.getAttribute("content")
    }
    return "";
  }
}());