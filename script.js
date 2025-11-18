// Women's Wear product list - 3x3 grid
const womenProducts = [
  { id: "w1", name: "Pink & Gold Anarkali Set", price: 2000, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276722/f1/yyctjii6jbgyqx4sr6gk.jpg" },
  { id: "w2", name: "Floral Wedding Anarkali", price: 2450, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276719/f1/jk68mdtylsnp2ptwe3z9.webp" },
  { id: "w3", name: "Orange Embroidered Set", price: 1200, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276724/f1/gwmroyr7xxnavo2gd0i9.jpg" },
  { id: "w4", name: "Teal & Gold Work Anarkali", price: 2800, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276712/f1/pwzjtuhhwyf4ensmomam.jpg" },
  { id: "w5", name: "Pastel Designer Anarkali", price: 1650, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276710/f1/vsqphttodoagagwdlevu.jpg" },
  { id: "w6", name: "Maroon Silk Anarkali", price: 2100, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276707/f1/jjjj9uicgqpiyjqg4xaz.webp" },
  { id: "w7", name: "Navy Blue Party Anarkali", price: 1350, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276705/f1/srp7651zmmqwm8ncf2my.jpg" },
  { id: "w8", name: "Green Designer Set", price: 2950, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276696/f1/dghktqj9oiqrxzzqhz9i.webp" },
  { id: "w9", name: "Royal Purple Anarkali", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276693/f1/uvwwbt0qer8xt3vfgvnw.jpg" },
  { id: "w10", name: "Luxury Party Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276701/f1/filu2k2ap7b7wsxsakzf.jpg" },
  { id: "w11", name: "Graceful Silk Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276700/f1/nwxagohcgyuhvafinpan.webp" },
  { id: "w12", name: "Elegant Function Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276699/f1/njjlf1mtfm0q5kabhe1e.jpg" },
  { id: "w13", name: "Designer Festive Set", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276697/f1/ifcggmfa64xm988kugce.webp" },
  { id: "w14", name: "Golden Embroidery Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276695/f1/zrdm5abqwghj6b2n6mtv.webp" },
  { id: "w15", name: "Classic Long Gown", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276691/f1/uwdu3znvmajg3hqd1zvx.webp" },
  { id: "w16", name: "Royal Party Gown", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276690/f1/gqms55ytdjam75lu27tn.webp" },
  { id: "w17", name: "Premium Heavy Work Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276689/f1/k16ax0ze2vpvrplfvmaw.webp" },
  { id: "w18", name: "Stylish Modern Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276688/f1/lfkr32h0pzzi8bipyfm7.webp" },
  { id: "w19", name: "Festive Wedding Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276686/f1/qljkemj7af214u1dyn50.webp" },
  { id: "w20", name: "Chic Designer Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276685/f1/cypgakb8o52akq4ku5um.webp" },
  { id: "w21", name: "Trendy Occasion Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276684/f1/bqestg6rttqpq3jhxfr6.webp" },
  { id: "w22", name: "Elegant Kurti Set", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276683/f1/l4geqflkmv0pnra43pg2.jpg" },
  { id: "w23", name: "Premium Daily Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276681/f1/rafvdxgi0ztbybi8goet.jpg" },
  { id: "w24", name: "Soft Cotton Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276680/f1/wc4ofyklmdukebosskxk.jpg" },
  { id: "w25", name: "Stylish Party Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276677/f1/yfcaiydodhvvfkafua90.jpg" },
  { id: "w26", name: "Modern Embroidery Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276675/f1/ga3nuy28gh9lbi57q1lz.jpg" },
  { id: "w27", name: "Designer Classic Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276674/f1/dk5mkt9ixkytoxnnvisv.jpg" },
  { id: "w28", name: "Elegant Floral Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276673/f1/rcjxcodxtyi9zf5l5bzy.jpg" },
  { id: "w29", name: "Grand Traditional Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276672/f1/jzifi4i1pezsdfd32zgl.jpg" },
  { id: "w30", name: "Premium Occasion Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276670/f1/dhspwupigz70c8nqmmqn.jpg" },
  { id: "w31", name: "Royal Velvet Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276669/f1/vprgrlmeggywrbrf2phz.jpg" },
  { id: "w32", name: "Classic Cotton Wear", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276667/f1/hhaoswudypfdwmqxyq9w.jpg" },
  { id: "w33", name: "Designer Printed Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276665/f1/pjcl7fugxpolbpd9q4ts.jpg" },
  { id: "w34", name: "Soft Fabric Party Dress", price: 1750, img: "https://res.cloudinary.com/dhczjpyux/image/upload/v1763276664/f1/m3j9fzkgrhy1p5d3nmdh.jpg" },
 { id: "w35", name: "Elegant Designer Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354949/folder3/o50dgjx9zwtfa2ke8dis.jpg" },
  { id: "w36", name: "Premium Party Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354947/folder3/vd9uqpvk8recwfkvynps.jpg" },
  { id: "w37", name: "Royal Heavy Work Dress", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354946/folder3/lndy16uh0pvuagygwag7.jpg" },
  { id: "w38", name: "Classic Traditional Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354944/folder3/yqzdjdhqiwdauv95ihq7.jpg" },
  { id: "w39", name: "Luxury Embroidery Dress", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354943/folder3/kzzgcr926sawxcerypwi.jpg" },
  { id: "w40", name: "Beautiful Party Gown", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354942/folder3/dpyzf23ugdyp76rqxdqg.jpg" },
  { id: "w41", name: "Classic Designer Outfit", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354940/folder3/y8hunrmohygkphyglngh.jpg" },
  { id: "w42", name: "Trendy Indo Western", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354938/folder3/g1ghz2zzzdrbnklw0psk.jpg" },
  { id: "w43", name: "Stylish Modern Dress", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354936/folder3/fv5426hll0nfoqdvcr5u.jpg" },
  { id: "w44", name: "Premium Elegant Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354935/folder3/o75rcewokwg2bsp6gogw.jpg" },
  { id: "w45", name: "Royal Festive Collection", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354934/folder3/wun18ni7p2e7ze73ml5r.jpg" },
  { id: "w46", name: "Soft Silk Designer Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354932/folder3/nfgp8qdel3zbtqndhdyj.jpg" },
  { id: "w47", name: "Embroidered Luxury Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354930/folder3/wx97ddkdfc2xqzbdgxco.jpg" },
  { id: "w48", name: "Designer Party Dress", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354929/folder3/jolyvh8fpqkuw58un7zi.jpg" },
  { id: "w49", name: "Graceful Wedding Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354927/folder3/t4watescspvrrvezcgbc.jpg" },
  { id: "w50", name: "Elegant Long Frock", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354925/folder3/yh6ysxng0jtwayirb1u0.jpg" },
  { id: "w51", name: "Modern Festive Gown", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354923/folder3/tnbsm9se1i8ciopehipp.jpg" },
  { id: "w52", name: "Soft Fabric Kurti", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354920/folder3/ao0dufeviqzunnw36wwe.jpg" },
  { id: "w53", name: "Designer Ethnic Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354918/folder3/fwap1oisnnawr4awjv3t.jpg" },
  { id: "w54", name: "Premium Stylish Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354917/folder3/t3qrpkg4gs7kllrtqmff.jpg" },
  { id: "w55", name: "Luxury Printed Dress", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354916/folder3/p0nmfbrqy8ldsnjugp6s.jpg" },
  { id: "w56", name: "Classic Cotton Style", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354913/folder3/zpweq06aqzq1dexult76.jpg" },
  { id: "w57", name: "Grand Designer Piece", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354910/folder3/thrgac4k7nsc2owrijnd.jpg" },
  { id: "w58", name: "Soft Pastel Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354909/folder3/ynlbkilkju8xsfhkjxsq.jpg" },
  { id: "w59", name: "Elegant Printed Kurti", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354907/folder3/pdhlzk3d27tczugyaql3.jpg" },
  { id: "w60", name: "Trendy Modern Outfit", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354906/folder3/vljwdpxp40htp7daagjs.jpg" },
  { id: "w61", name: "Beautiful Festive Set", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354905/folder3/vknb5yhdxzwvathekajx.jpg" },
  { id: "w62", name: "Designer Embroidery Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354903/folder3/q9ruqxohc5bikmsltnvv.jpg" },
  { id: "w63", name: "Festive Elegant Frock", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354895/folder3/wlvoe6lotknw371qpiol.jpg" },
  { id: "w64", name: "Stylish Occasion Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354896/folder3/rnyroeoxqd4balougkzp.jpg" },
  { id: "w65", name: "Modern Designer Wear", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354894/folder3/y8evdh0jhdm0zymp5fvb.jpg" },
  { id: "w66", name: "Premium Stylish Gown", price: 1750, img: "https://res.cloudinary.com/dphnho9w1/image/upload/v1763354893/folder3/o974rgbfjvmhqnvrwchi.jpg" },

  // Folder2 set starts
  { id: "w67", name: "Royal Traditional Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354889/folder2/anq07y8cl1wvyul9axml.jpg" },
  { id: "w68", name: "Elegant Soft Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354888/folder2/sx3pklglxeghfgounlot.jpg" },
  { id: "w69", name: "Designer Ethnic Outfit", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354886/folder2/e4rulodjtjyvqviaqxxo.jpg" },
  { id: "w70", name: "Classic Premium Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354884/folder2/ydkhphz4ked8iudoeqno.jpg" },
  { id: "w71", name: "Fine Quality Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354883/folder2/unl8ovwv2queeiwufqs2.jpg" },
  { id: "w72", name: "Soft Pastel Collection", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354881/folder2/uljdw7czwyto9vah3o8n.jpg" },
  { id: "w73", name: "Modern Printed Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354879/folder2/itoxt7qtmo3b2wruot3x.jpg" },
  { id: "w74", name: "Fancy Designer Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354877/folder2/pazhnokcm9niawipzjmc.jpg" },
  { id: "w75", name: "Royal Classic Gown", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354874/folder2/lpiwrkqf5qr83mmcrfxr.jpg" },
  { id: "w76", name: "Elegant Embroidery Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354873/folder2/uoqqqdqcnzcktmo11gnu.jpg" },
  { id: "w77", name: "Premium Designer Frock", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354871/folder2/itwscevvjl9svkfpipmf.jpg" },
  { id: "w78", name: "Traditional Festive Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354869/folder2/f4elbv3qvorsqrqxrlot.jpg" },
  { id: "w79", name: "Luxury Women Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354867/folder2/nlij6eb65tcnshysjgpe.jpg" },
  { id: "w80", name: "Soft Light Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354866/folder2/izdyngojwdhcevaffyyj.jpg" },
  { id: "w81", name: "Fine Designer Piece", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354864/folder2/njf3ahuuprqb9pued0x8.jpg" },
  { id: "w82", name: "Embroidered Wedding Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354859/folder2/txoyhzxqfwsqc2sjq3if.jpg" },
  { id: "w83", name: "Graceful Party Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354858/folder2/rgumd112x6jfpjq61vh1.jpg" },
  { id: "w84", name: "Stylish Designer Kurti", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354855/folder2/jrxev4purdp3023asamg.jpg" },
  { id: "w85", name: "Royal Soft Fabric Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354853/folder2/bslwzhktpv5gpnrplhgg.jpg" },
  { id: "w86", name: "Printed Casual Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354852/folder2/urh3w2eszr4pv1fclx7n.jpg" },
  { id: "w87", name: "Multi-Color Designer Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354851/folder2/jufr2iaudcracffw4ple.jpg" },
  { id: "w88", name: "Trendy Elegant Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354849/folder2/p0rxlgg0kq7liiesvxjv.jpg" },
  { id: "w89", name: "Soft Classic Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354848/folder2/plzrk796hf0qfimsccle.jpg" },
  { id: "w90", name: "Fancy Occasion Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354846/folder2/sgsttstc1p8gywptqyry.jpg" },
  { id: "w91", name: "Designer Premium Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354845/folder2/gy0obkqpm6kkpo90bqsx.jpg" },
  { id: "w92", name: "Royal Heavy Pattern Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354843/folder2/ljhfjiwn4crilnzvm3sc.jpg" },
  { id: "w93", name: "Soft Designer Suit", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354841/folder2/izzp6qncgweqfm5svvmj.jpg" },
  { id: "w94", name: "Elegant Premium Gown", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354838/folder2/mvllyz8obws9zcw5ni1j.jpg" },
  { id: "w95", name: "Chic Festive Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354836/folder2/b9eyvskjcfbc5zilr0my.jpg" },
  { id: "w96", name: "Classic Light Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354834/folder2/jhur9j9gumiyna9ihqn9.jpg" },
  { id: "w97", name: "Traditional Indian Wear", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354833/folder2/bhlg7pfccbg6ibpcb1bx.jpg" },
  { id: "w98", name: "Elegant Women Outfit", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354830/folder2/vy09acxanafnjd1m9fqt.jpg" },
  { id: "w99", name: "Premium Printed Kurti", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354828/folder2/qsurspzjz9ori8h6c9lh.jpg" },
  { id: "w100", name: "Stylish Women Dress", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354826/folder2/fmexwxkjw61frppwphde.jpg" },
  { id: "w101", name: "Grand Party Outfit", price: 1750, img: "https://res.cloudinary.com/dvqiug8h9/image/upload/v1763354823/folder2/gkrd3boanwahmsrcsz2z.jpg" }


];

womenProducts.forEach((p, i) => p.category = i % 2 === 0 ? "Prewedding dress" : "Maternity dress");

const imgs = [
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276722/f1/yyctjii6jbgyqx4sr6gk.jpg",
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276719/f1/jk68mdtylsnp2ptwe3z9.webp",
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276724/f1/gwmroyr7xxnavo2gd0i9.jpg",
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276712/f1/pwzjtuhhwyf4ensmomam.jpg",
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276710/f1/vsqphttodoagagwdlevu.jpg",
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276707/f1/jjjj9uicgqpiyjqg4xaz.webp",
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276705/f1/srp7651zmmqwm8ncf2my.jpg",
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276696/f1/dghktqj9oiqrxzzqhz9i.webp",
"https://res.cloudinary.com/dhczjpyux/image/upload/v1763276693/f1/uvwwbt0qer8xt3vfgvnw.jpg"
];

for (let i = 10; i <= 159; i++) {
  const price = 1200 + ((i - 10) % 10) * 100;
  const name = `Anarkali Set ${i}`;
  womenProducts.push({ id: `w${i}`, name, price, category: i % 2 === 0 ? "Prewedding dress" : "Maternity dress", img: "" });
}

// Cart array - load from localStorage or new
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render women's products with optional filters
function renderProducts() {
  const container = document.getElementById("products");
  if (!container) return;

  const categoryFilterEl = document.getElementById("categoryFilter");
  const categoryFilter = categoryFilterEl ? categoryFilterEl.value : "all";

  let filtered = womenProducts.slice();
  if (categoryFilter !== "all") filtered = filtered.filter(p => p.category === categoryFilter);

  container.innerHTML = "";

  filtered.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}" />
      <div class="content">
        <h3>${prod.name}</h3>
        <div class="price-row">
          <div>
            <div class="price">Rs. 1000-3000</div>
          </div>
          <div class="actions">
            <button class="btn btn-primary add-cart-btn" data-id="${prod.id}">Add</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Add product to cart by id (works for womenProducts and men page items)
function addToCart(id) {
  // Find product in womenProducts
  let product = womenProducts.find(p => p.id === id);

  // If not found, try to read from DOM (men.html uses #menProducts)
  if (!product) {
    const card = document.querySelector(`#menProducts button[data-id=\"${id}\"]`)?.closest('.product-card');
    if (card) {
      product = {
        id,
        name: card.querySelector('h3')?.innerText || 'Item',
        price: parseInt(card.dataset.price) || 0,
        img: card.querySelector('img')?.src || ''
      };
    }
  }

  if (!product) return;

  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });

  saveCart();
  updateCartDisplayCount();
  window.location.href = 'cart.html';
}

function saveCart(){ localStorage.setItem('cart', JSON.stringify(cart)); }

// Render cart items
function renderCartItems() {
  const cartItemsDiv = document.getElementById("cartItems");
  if(!cartItemsDiv) return;
  
  const emptyCart = document.getElementById("emptyCart");
  const cartContainer = document.querySelector(".cart-container");
  
  if(cart.length === 0) {
    if(emptyCart) emptyCart.style.display = "block";
    if(cartContainer) cartContainer.style.display = "none";
    return;
  }
  
  if(emptyCart) emptyCart.style.display = "none";
  if(cartContainer) cartContainer.style.display = "grid";
  
  cartItemsDiv.innerHTML = "";
  
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Rent: ₹${item.price.toLocaleString()}</p>
        <p>Quantity: ${item.qty}</p>
      </div>
      <button class="remove" data-index="${index}" title="Remove">×</button>
    `;
    cartItemsDiv.appendChild(div);
  });
  
  // Update summary
  updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
  const totalItemsEl = document.getElementById('totalItems');
  const totalRentEl = document.getElementById('totalRent');
  const totalDepositEl = document.getElementById('totalDeposit');
  const totalAmountEl = document.getElementById('totalAmount');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalRent = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalDeposit = totalRent; // Assuming deposit equals rent
  const totalAmount = totalRent + totalDeposit;

  if (totalItemsEl) totalItemsEl.textContent = totalQty;
  if (totalRentEl) totalRentEl.textContent = `₹${totalRent.toLocaleString()}`;
  if (totalDepositEl) totalDepositEl.textContent = `₹${totalDeposit.toLocaleString()}`;
  if (totalAmountEl) totalAmountEl.textContent = `₹${totalAmount.toLocaleString()}`;
}

// Remove item from cart by index
function removeFromCartIndex(index){
  if (index < 0 || index >= cart.length) return;
  cart.splice(index,1);
  saveCart();
  renderCartItems();
  updateCartDisplayCount();
}

// Update cart display count
function updateCartDisplayCount(){
  const openBtn = document.getElementById('openCartBtn');
  const totalQty = cart.reduce((s,i)=> s + (i.qty||0), 0);
  if(openBtn) openBtn.textContent = `Cart (${totalQty})`;
}



function scrollToProducts(){
  const elem = document.getElementById('products');
  if(elem) elem.scrollIntoView({behavior:'smooth'});
}

// WhatsApp checkout
function buyViaWhatsApp(){
  if(cart.length === 0){ alert('Your cart is empty!'); return; }
  let message = 'Hello, I want to order:\n';
  cart.forEach(i => message += `${i.name} - ₹${i.price.toLocaleString()} x ${i.qty}\n`);
  const total = cart.reduce((s,i)=> s + i.price * i.qty, 0);
  message += `Total Price: ₹${total.toLocaleString()}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Event delegation for add / remove / cart open / buy
document.addEventListener('click', function(e){
  const add = e.target.closest && e.target.closest('.add-cart-btn');
  if(add){
    const id = add.getAttribute('data-id');
    if(id) addToCart(id);
    return;
  }

  const rem = e.target.closest && e.target.closest('.remove');
  if(rem){
    const idx = parseInt(rem.getAttribute('data-index'));
    removeFromCartIndex(idx);
    return;
  }


  if(e.target.matches('#buyBtn') || e.target.closest('#buyBtn')){ buyViaWhatsApp(); return; }
  if(e.target.matches('#checkoutBtn') || e.target.closest('#checkoutBtn')){ buyViaWhatsApp(); return; }
  if(e.target.matches('.hero-text button')){ scrollToProducts(); return; }
});

// Init
document.addEventListener('DOMContentLoaded', ()=>{
  renderProducts();
  updateCartDisplayCount();
  renderCartItems();

  const categoryFilter = document.getElementById('categoryFilter');
  if(categoryFilter) categoryFilter.addEventListener('change', renderProducts);
});