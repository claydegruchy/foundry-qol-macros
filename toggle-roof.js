var r = RoofsLayer.instance.children
if (r.find(c => c.visible)){
  r.map(c=>c.visible=false)
} else{
  r.map(c=>c.visible=true)
}
