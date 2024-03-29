import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    data: [{"id":1,"name":"Fay Pashley","major":"Computer Engineering","gradYear":2009,"company":"Rhynyx","email":"fpashley0@bloomberg.com"},
    {"id":2,"name":"Ferdie Gillow","major":"Computer Engineering","gradYear":2009,"company":"Realpoint","email":"fgillow1@census.gov"},
    {"id":3,"name":"Valeda Pecey","major":"Computer Engineering","gradYear":2007,"company":"Buzzster","email":"vpecey2@cisco.com"},
    {"id":4,"name":"Taber Potteril","major":"Electrical Engineering","gradYear":1995,"company":"Flipstorm","email":"tpotteril3@drupal.org"},
    {"id":5,"name":"Paolina Haslewood","major":"Computer Science","gradYear":1996,"company":"Zoonder","email":"phaslewood4@shop-pro.jp"},
    {"id":6,"name":"Gareth Morrel","major":"Electrical Engineering","gradYear":1993,"company":"Plajo","email":"gmorrel5@blogger.com"},
    {"id":7,"name":"Gail Olliffe","major":"Electrical Engineering","gradYear":2003,"company":"Dynazzy","email":"golliffe6@1688.com"},
    {"id":8,"name":"Doris Grzes","major":"Electrical Engineering","gradYear":2010,"company":"Skynoodle","email":"dgrzes7@google.it"},
    {"id":9,"name":"Krystal Brownstein","major":"Computer Engineering","gradYear":1994,"company":"Realbridge","email":"kbrownstein8@twitter.com"},
    {"id":10,"name":"Josie Schall","major":"Computer Science","gradYear":2002,"company":"Zoozzy","email":"jschall9@sciencedirect.com"},
    {"id":11,"name":"Dalis Reignard","major":"Computer Science","gradYear":2007,"company":"Twimbo","email":"dreignarda@senate.gov"},
    {"id":12,"name":"Maxine Vany","major":"Computer Engineering","gradYear":1988,"company":"Fivebridge","email":"mvanyb@usatoday.com"},
    {"id":13,"name":"Bel McAusland","major":"Electrical Engineering","gradYear":1996,"company":"Skynoodle","email":"bmcauslandc@deliciousdays.com"},
    {"id":14,"name":"Carmelia Stutely","major":"Electrical Engineering","gradYear":2001,"company":"Photobug","email":"cstutelyd@google.com.hk"},
    {"id":15,"name":"Chloe Boshard","major":"Computer Science","gradYear":1967,"company":"Rhybox","email":"cbosharde@nymag.com"},
    {"id":16,"name":"Stace Lumby","major":"Electrical Engineering","gradYear":1989,"company":"Muxo","email":"slumbyf@feedburner.com"},
    {"id":17,"name":"Ardath Charge","major":"Computer Science","gradYear":1995,"company":"Feedmix","email":"achargeg@mlb.com"},
    {"id":18,"name":"Warden Oxlade","major":"Computer Science","gradYear":1994,"company":"Yozio","email":"woxladeh@imgur.com"},
    {"id":19,"name":"Fina Miners","major":"Electrical Engineering","gradYear":2004,"company":"Mymm","email":"fminersi@npr.org"},
    {"id":20,"name":"Paulie Shillabear","major":"Computer Science","gradYear":1994,"company":"Devpoint","email":"pshillabearj@jiathis.com"},
    {"id":21,"name":"Cristal Lantry","major":"Computer Engineering","gradYear":2010,"company":"Ooba","email":"clantryk@marketwatch.com"},
    {"id":22,"name":"Kayley Lackmann","major":"Electrical Engineering","gradYear":2011,"company":"Tagopia","email":"klackmannl@macromedia.com"},
    {"id":23,"name":"Galina Sleath","major":"Electrical Engineering","gradYear":2005,"company":"Tagcat","email":"gsleathm@reference.com"},
    {"id":24,"name":"Lars Stiegers","major":"Electrical Engineering","gradYear":2012,"company":"Eimbee","email":"lstiegersn@examiner.com"},
    {"id":25,"name":"Falito Quinnelly","major":"Computer Science","gradYear":2009,"company":"Blogspan","email":"fquinnellyo@posterous.com"},
    {"id":26,"name":"Ainsley Mathers","major":"Electrical Engineering","gradYear":1992,"company":"Buzzdog","email":"amathersp@ehow.com"},
    {"id":27,"name":"Arin Bluck","major":"Computer Science","gradYear":2012,"company":"Browseblab","email":"abluckq@aboutads.info"},
    {"id":28,"name":"Ottilie Cumbes","major":"Electrical Engineering","gradYear":2009,"company":"Brightbean","email":"ocumbesr@loc.gov"},
    {"id":29,"name":"Jeannine Ugolotti","major":"Electrical Engineering","gradYear":1992,"company":"Yotz","email":"jugolottis@friendfeed.com"},
    {"id":30,"name":"Rhett Ives","major":"Electrical Engineering","gradYear":2005,"company":"Fivebridge","email":"rivest@oracle.com"},
    {"id":31,"name":"Esther Danson","major":"Electrical Engineering","gradYear":2004,"company":"Dynabox","email":"edansonu@symantec.com"},
    {"id":32,"name":"Shep Peebles","major":"Electrical Engineering","gradYear":2006,"company":"Edgetag","email":"speeblesv@house.gov"},
    {"id":33,"name":"Willabella Balnave","major":"Electrical Engineering","gradYear":2008,"company":"Tagcat","email":"wbalnavew@hp.com"},
    {"id":34,"name":"Evita Murton","major":"Electrical Engineering","gradYear":2008,"company":"Talane","email":"emurtonx@stumbleupon.com"},
    {"id":35,"name":"Gabey Sirey","major":"Computer Science","gradYear":2009,"company":"Dabvine","email":"gsireyy@comcast.net"},
    {"id":36,"name":"Robena Castelow","major":"Computer Science","gradYear":2001,"company":"Zoozzy","email":"rcastelowz@phpbb.com"},
    {"id":37,"name":"Nanette Draxford","major":"Electrical Engineering","gradYear":2002,"company":"Meevee","email":"ndraxford10@digg.com"},
    {"id":38,"name":"Arden Carress","major":"Electrical Engineering","gradYear":2006,"company":"Tambee","email":"acarress11@phpbb.com"},
    {"id":39,"name":"Daisi Maasz","major":"Electrical Engineering","gradYear":2000,"company":"Zoombeat","email":"dmaasz12@printfriendly.com"},
    {"id":40,"name":"Cammie Angelini","major":"Computer Science","gradYear":1999,"company":"Thoughtbeat","email":"cangelini13@about.me"},
    {"id":41,"name":"Debbi Gates","major":"Electrical Engineering","gradYear":2011,"company":"Kimia","email":"dgates14@is.gd"},
    {"id":42,"name":"Angelico Dendon","major":"Electrical Engineering","gradYear":1995,"company":"Gabcube","email":"adendon15@e-recht24.de"},
    {"id":43,"name":"Lynn Kenwood","major":"Electrical Engineering","gradYear":1995,"company":"Brainsphere","email":"lkenwood16@google.nl"},
    {"id":44,"name":"Linoel Stewart","major":"Electrical Engineering","gradYear":2005,"company":"Dabvine","email":"lstewart17@nsw.gov.au"},
    {"id":45,"name":"Sheelagh Brayshaw","major":"Computer Engineering","gradYear":2003,"company":"Divavu","email":"sbrayshaw18@geocities.com"},
    {"id":46,"name":"Reinaldos Jannequin","major":"Computer Science","gradYear":2008,"company":"Skilith","email":"rjannequin19@ezinearticles.com"},
    {"id":47,"name":"Iormina Doorly","major":"Electrical Engineering","gradYear":2001,"company":"Skiptube","email":"idoorly1a@china.com.cn"},
    {"id":48,"name":"Jerome Munnery","major":"Computer Engineering","gradYear":1997,"company":"Voolia","email":"jmunnery1b@surveymonkey.com"},
    {"id":49,"name":"Parsifal Dovington","major":"Electrical Engineering","gradYear":2011,"company":"Riffwire","email":"pdovington1c@comcast.net"},
    {"id":50,"name":"Davy Glaister","major":"Computer Engineering","gradYear":2007,"company":"Chatterbridge","email":"dglaister1d@foxnews.com"},
    {"id":51,"name":"Ferrell Caush","major":"Electrical Engineering","gradYear":2007,"company":"Linkbridge","email":"fcaush1e@addthis.com"},
    {"id":52,"name":"Garvey Gurner","major":"Electrical Engineering","gradYear":1993,"company":"Yoveo","email":"ggurner1f@bloglovin.com"},
    {"id":53,"name":"Steffie Huriche","major":"Computer Science","gradYear":2012,"company":"Dynabox","email":"shuriche1g@chronoengine.com"},
    {"id":54,"name":"Netta Klaaassen","major":"Computer Engineering","gradYear":2006,"company":"Gevee","email":"nklaaassen1h@opera.com"},
    {"id":55,"name":"Forrester Camacke","major":"Computer Science","gradYear":2011,"company":"Yacero","email":"fcamacke1i@phoca.cz"},
    {"id":56,"name":"Remington Beedham","major":"Electrical Engineering","gradYear":2000,"company":"Voonder","email":"rbeedham1j@devhub.com"},
    {"id":57,"name":"Thedrick Mohamed","major":"Electrical Engineering","gradYear":1994,"company":"Photolist","email":"tmohamed1k@e-recht24.de"},
    {"id":58,"name":"Robinet Benardeau","major":"Electrical Engineering","gradYear":2007,"company":"Nlounge","email":"rbenardeau1l@reference.com"},
    {"id":59,"name":"Morty Calles","major":"Electrical Engineering","gradYear":2006,"company":"Voonte","email":"mcalles1m@discovery.com"},
    {"id":60,"name":"Margarita Cowherd","major":"Computer Science","gradYear":1992,"company":"Voolia","email":"mcowherd1n@thetimes.co.uk"},
    {"id":61,"name":"Jaimie Nollet","major":"Electrical Engineering","gradYear":1986,"company":"Zazio","email":"jnollet1o@go.com"},
    {"id":62,"name":"Erik Mulleary","major":"Computer Science","gradYear":2005,"company":"Devify","email":"emulleary1p@apache.org"},
    {"id":63,"name":"Adan Waddell","major":"Computer Science","gradYear":1965,"company":"Oozz","email":"awaddell1q@sciencedaily.com"},
    {"id":64,"name":"Nalani Standish-Brooks","major":"Computer Science","gradYear":2005,"company":"Abatz","email":"nstandishbrooks1r@google.co.jp"},
    {"id":65,"name":"Alexis Jinks","major":"Computer Science","gradYear":2006,"company":"Realbuzz","email":"ajinks1s@godaddy.com"},
    {"id":66,"name":"Dru Muriel","major":"Computer Science","gradYear":2005,"company":"Flashpoint","email":"dmuriel1t@wikimedia.org"},
    {"id":67,"name":"Darcy Pattini","major":"Computer Science","gradYear":1995,"company":"LiveZ","email":"dpattini1u@hc360.com"},
    {"id":68,"name":"Elwood Strood","major":"Electrical Engineering","gradYear":2008,"company":"Flipopia","email":"estrood1v@themeforest.net"},
    {"id":69,"name":"Sunshine Petranek","major":"Computer Engineering","gradYear":1997,"company":"Abatz","email":"spetranek1w@ihg.com"},
    {"id":70,"name":"Enos Doveston","major":"Electrical Engineering","gradYear":2004,"company":"Mydo","email":"edoveston1x@fema.gov"},
    {"id":71,"name":"Thomasina O'Docherty","major":"Electrical Engineering","gradYear":2009,"company":"Meedoo","email":"todocherty1y@istockphoto.com"},
    {"id":72,"name":"Yorgo Beckitt","major":"Electrical Engineering","gradYear":1994,"company":"Skinder","email":"ybeckitt1z@hao123.com"},
    {"id":73,"name":"Herve Case","major":"Computer Science","gradYear":2006,"company":"Realpoint","email":"hcase20@goodreads.com"},
    {"id":74,"name":"Niccolo Tremblett","major":"Computer Engineering","gradYear":1960,"company":"Bluejam","email":"ntremblett21@imdb.com"},
    {"id":75,"name":"Kippie Lathey","major":"Electrical Engineering","gradYear":1992,"company":"Avamm","email":"klathey22@miibeian.gov.cn"},
    {"id":76,"name":"Kerri Le-Good","major":"Electrical Engineering","gradYear":2011,"company":"Zoombeat","email":"klegood23@amazonaws.com"},
    {"id":77,"name":"Dorie Girtin","major":"Computer Science","gradYear":2002,"company":"Abata","email":"dgirtin24@bluehost.com"},
    {"id":78,"name":"Wilt Beresford","major":"Computer Science","gradYear":1993,"company":"Skippad","email":"wberesford25@ucsd.edu"},
    {"id":79,"name":"Tiffani Malenfant","major":"Computer Science","gradYear":1998,"company":"Youtags","email":"tmalenfant26@mlb.com"},
    {"id":80,"name":"Thaine Itzhayek","major":"Electrical Engineering","gradYear":2006,"company":"Bluezoom","email":"titzhayek27@washingtonpost.com"},
    {"id":81,"name":"Corabelle Brogioni","major":"Electrical Engineering","gradYear":2006,"company":"Talane","email":"cbrogioni28@goodreads.com"},
    {"id":82,"name":"Hillie Cantua","major":"Electrical Engineering","gradYear":2005,"company":"Rhynyx","email":"hcantua29@deviantart.com"},
    {"id":83,"name":"Ripley Erbain","major":"Computer Engineering","gradYear":1991,"company":"Devbug","email":"rerbain2a@creativecommons.org"},
    {"id":84,"name":"Kylila Galletley","major":"Electrical Engineering","gradYear":1997,"company":"Nlounge","email":"kgalletley2b@naver.com"},
    {"id":85,"name":"Grier Kilrow","major":"Computer Engineering","gradYear":1966,"company":"Zoovu","email":"gkilrow2c@lycos.com"},
    {"id":86,"name":"Ania Werner","major":"Computer Engineering","gradYear":2006,"company":"Twinder","email":"awerner2d@independent.co.uk"},
    {"id":87,"name":"Donica Treace","major":"Computer Science","gradYear":1989,"company":"Divavu","email":"dtreace2e@youtube.com"},
    {"id":88,"name":"Mae Tomkowicz","major":"Electrical Engineering","gradYear":1992,"company":"Yodel","email":"mtomkowicz2f@goo.ne.jp"},
    {"id":89,"name":"Marga Sagg","major":"Computer Science","gradYear":2010,"company":"Kanoodle","email":"msagg2g@bbc.co.uk"},
    {"id":90,"name":"Gare Pavy","major":"Computer Science","gradYear":2007,"company":"Devpoint","email":"gpavy2h@mozilla.org"},
    {"id":91,"name":"Joleen Pardi","major":"Computer Engineering","gradYear":1994,"company":"Dablist","email":"jpardi2i@usgs.gov"},
    {"id":92,"name":"Pancho Beinisch","major":"Computer Engineering","gradYear":2003,"company":"Linkbridge","email":"pbeinisch2j@blogs.com"},
    {"id":93,"name":"Bobbette Biles","major":"Electrical Engineering","gradYear":1995,"company":"Jetwire","email":"bbiles2k@howstuffworks.com"},
    {"id":94,"name":"Charlot Clapston","major":"Computer Engineering","gradYear":1991,"company":"Trudoo","email":"cclapston2l@ucsd.edu"},
    {"id":95,"name":"Aridatha O'Hartigan","major":"Computer Science","gradYear":1996,"company":"Twitterbeat","email":"aohartigan2m@alibaba.com"},
    {"id":96,"name":"Florenza Drinan","major":"Computer Science","gradYear":1969,"company":"Eidel","email":"fdrinan2n@psu.edu"},
    {"id":97,"name":"Anne Lendon","major":"Electrical Engineering","gradYear":2000,"company":"Myworks","email":"alendon2o@php.net"},
    {"id":98,"name":"Eve Knolles-Green","major":"Electrical Engineering","gradYear":2010,"company":"Flashspan","email":"eknollesgreen2p@github.io"},
    {"id":99,"name":"Saree Cronchey","major":"Computer Science","gradYear":2012,"company":"Tagcat","email":"scronchey2q@google.cn"},
    {"id":100,"name":"Raimund Hocking","major":"Electrical Engineering","gradYear":2012,"company":"Voonyx","email":"rhocking2r@ox.ac.uk"},
    {"id":101,"name":"Andres Seignior","major":"Computer Science","gradYear":2004,"company":"Avamm","email":"aseignior2s@harvard.edu"},
    {"id":102,"name":"Camella Franken","major":"Computer Engineering","gradYear":2012,"company":"Camido","email":"cfranken2t@seattletimes.com"},
    {"id":103,"name":"Remus Kleinhaut","major":"Electrical Engineering","gradYear":1989,"company":"Chatterbridge","email":"rkleinhaut2u@51.la"},
    {"id":104,"name":"Kimberly Bellworthy","major":"Computer Engineering","gradYear":2012,"company":"Fanoodle","email":"kbellworthy2v@twitter.com"},
    {"id":105,"name":"Pet Knight","major":"Computer Science","gradYear":2012,"company":"Dabshots","email":"pknight2w@utexas.edu"},
    {"id":106,"name":"Caz Dowyer","major":"Computer Engineering","gradYear":2009,"company":"Meembee","email":"cdowyer2x@theatlantic.com"},
    {"id":107,"name":"Leighton Aylott","major":"Computer Engineering","gradYear":1991,"company":"Talane","email":"laylott2y@digg.com"},
    {"id":108,"name":"Ancell Horsell","major":"Computer Science","gradYear":1996,"company":"Trudoo","email":"ahorsell2z@telegraph.co.uk"},
    {"id":109,"name":"Angy Zecchini","major":"Computer Engineering","gradYear":2001,"company":"Yozio","email":"azecchini30@wix.com"},
    {"id":110,"name":"Trev Beernaert","major":"Computer Science","gradYear":2011,"company":"Jetwire","email":"tbeernaert31@ocn.ne.jp"},
    {"id":111,"name":"Zabrina Grosier","major":"Computer Science","gradYear":1985,"company":"Izio","email":"zgrosier32@marketwatch.com"},
    {"id":112,"name":"Sylvia Goodinson","major":"Computer Science","gradYear":1990,"company":"Flashdog","email":"sgoodinson33@google.com.br"},
    {"id":113,"name":"Jonathan Fenton","major":"Computer Science","gradYear":2003,"company":"Flipopia","email":"jfenton34@skype.com"},
    {"id":114,"name":"Marina Vaughton","major":"Electrical Engineering","gradYear":1985,"company":"Janyx","email":"mvaughton35@alibaba.com"},
    {"id":115,"name":"Josefa Deller","major":"Electrical Engineering","gradYear":1993,"company":"Skippad","email":"jdeller36@icq.com"},
    {"id":116,"name":"Toinette Davley","major":"Computer Science","gradYear":2003,"company":"Zoomdog","email":"tdavley37@posterous.com"},
    {"id":117,"name":"Cornie Hyman","major":"Computer Engineering","gradYear":2009,"company":"Vipe","email":"chyman38@aboutads.info"},
    {"id":118,"name":"Lolly Garbett","major":"Electrical Engineering","gradYear":2002,"company":"Brightdog","email":"lgarbett39@vinaora.com"},
    {"id":119,"name":"Nanon Craythorn","major":"Computer Science","gradYear":1998,"company":"Meeveo","email":"ncraythorn3a@yellowpages.com"},
    {"id":120,"name":"Myer Dobrovolski","major":"Electrical Engineering","gradYear":1992,"company":"Quamba","email":"mdobrovolski3b@sbwire.com"},
    {"id":121,"name":"Irving Itzkovich","major":"Electrical Engineering","gradYear":2009,"company":"Agimba","email":"iitzkovich3c@forbes.com"},
    {"id":122,"name":"Gussie Abbyss","major":"Electrical Engineering","gradYear":1996,"company":"Jabbertype","email":"gabbyss3d@ft.com"},
    {"id":123,"name":"Standford Newiss","major":"Computer Science","gradYear":2008,"company":"Meembee","email":"snewiss3e@shareasale.com"},
    {"id":124,"name":"Jocelin Crosscombe","major":"Electrical Engineering","gradYear":2011,"company":"Edgeblab","email":"jcrosscombe3f@rediff.com"},
    {"id":125,"name":"Conan Caherny","major":"Electrical Engineering","gradYear":2009,"company":"Bluejam","email":"ccaherny3g@4shared.com"},
    {"id":126,"name":"Dora Harry","major":"Electrical Engineering","gradYear":1987,"company":"Jaxnation","email":"dharry3h@timesonline.co.uk"},
    {"id":127,"name":"Corrie Catterill","major":"Electrical Engineering","gradYear":1991,"company":"Jaxnation","email":"ccatterill3i@uiuc.edu"},
    {"id":128,"name":"Audie MacBey","major":"Electrical Engineering","gradYear":2012,"company":"Youspan","email":"amacbey3j@usnews.com"},
    {"id":129,"name":"Madeleine Kelso","major":"Electrical Engineering","gradYear":1999,"company":"Skyba","email":"mkelso3k@dell.com"},
    {"id":130,"name":"Briggs Flipek","major":"Computer Engineering","gradYear":1992,"company":"Miboo","email":"bflipek3l@artisteer.com"},
    {"id":131,"name":"Garv Rayson","major":"Electrical Engineering","gradYear":2003,"company":"Voolith","email":"grayson3m@accuweather.com"},
    {"id":132,"name":"Seumas Simkovitz","major":"Electrical Engineering","gradYear":2006,"company":"Flipopia","email":"ssimkovitz3n@youtu.be"},
    {"id":133,"name":"Jacobo Coweuppe","major":"Computer Engineering","gradYear":1997,"company":"Youspan","email":"jcoweuppe3o@sitemeter.com"},
    {"id":134,"name":"Karlene Blue","major":"Computer Engineering","gradYear":2004,"company":"Zooxo","email":"kblue3p@odnoklassniki.ru"},
    {"id":135,"name":"Dominic Siddeley","major":"Computer Engineering","gradYear":2004,"company":"Trupe","email":"dsiddeley3q@youtu.be"},
    {"id":136,"name":"Rikki Domanek","major":"Computer Engineering","gradYear":1985,"company":"Quatz","email":"rdomanek3r@pbs.org"},
    {"id":137,"name":"Mahala Gainseford","major":"Electrical Engineering","gradYear":1998,"company":"Topiclounge","email":"mgainseford3s@umn.edu"},
    {"id":138,"name":"Curt O'Mullaney","major":"Computer Science","gradYear":2003,"company":"Topicshots","email":"comullaney3t@mysql.com"},
    {"id":139,"name":"Costanza Tregenna","major":"Computer Science","gradYear":1996,"company":"Jamia","email":"ctregenna3u@prlog.org"},
    {"id":140,"name":"Jonathon Angric","major":"Computer Science","gradYear":2001,"company":"InnoZ","email":"jangric3v@over-blog.com"},
    {"id":141,"name":"Jamie O'Breen","major":"Electrical Engineering","gradYear":2009,"company":"Photobug","email":"jobreen3w@fda.gov"},
    {"id":142,"name":"Merrel Magor","major":"Electrical Engineering","gradYear":1969,"company":"Zoozzy","email":"mmagor3x@tamu.edu"},
    {"id":143,"name":"Chris Batecok","major":"Electrical Engineering","gradYear":2003,"company":"Kaymbo","email":"cbatecok3y@wsj.com"},
    {"id":144,"name":"Thatcher Breznovic","major":"Computer Science","gradYear":2000,"company":"Dabjam","email":"tbreznovic3z@comcast.net"},
    {"id":145,"name":"Gardner Mudge","major":"Electrical Engineering","gradYear":2003,"company":"Cogibox","email":"gmudge40@washington.edu"},
    {"id":146,"name":"Tyler Meake","major":"Electrical Engineering","gradYear":1993,"company":"Buzzbean","email":"tmeake41@dell.com"},
    {"id":147,"name":"Tessi Imlin","major":"Computer Science","gradYear":2000,"company":"Avaveo","email":"timlin42@google.pl"},
    {"id":148,"name":"Peterus Roseborough","major":"Computer Science","gradYear":2011,"company":"Myworks","email":"proseborough43@behance.net"},
    {"id":149,"name":"Randie Draper","major":"Electrical Engineering","gradYear":2006,"company":"Mynte","email":"rdraper44@newyorker.com"},
    {"id":150,"name":"Retha Mewburn","major":"Computer Engineering","gradYear":1986,"company":"Pixope","email":"rmewburn45@elpais.com"},
    {"id":151,"name":"Rodina Waterland","major":"Computer Science","gradYear":2010,"company":"Skiba","email":"rwaterland46@thetimes.co.uk"},
    {"id":152,"name":"Anderea Starie","major":"Computer Engineering","gradYear":1995,"company":"Dabtype","email":"astarie47@berkeley.edu"},
    {"id":153,"name":"Carly Moryson","major":"Electrical Engineering","gradYear":2008,"company":"Rhycero","email":"cmoryson48@issuu.com"},
    {"id":154,"name":"Ardra Buckett","major":"Electrical Engineering","gradYear":1996,"company":"Demimbu","email":"abuckett49@privacy.gov.au"},
    {"id":155,"name":"Heidie Shurrocks","major":"Computer Science","gradYear":1993,"company":"Photospace","email":"hshurrocks4a@skype.com"},
    {"id":156,"name":"Dorena Blasoni","major":"Computer Science","gradYear":2008,"company":"Meembee","email":"dblasoni4b@ebay.co.uk"},
    {"id":157,"name":"Brina Moulds","major":"Electrical Engineering","gradYear":2008,"company":"Photobean","email":"bmoulds4c@reference.com"},
    {"id":158,"name":"Myrle Newbigging","major":"Computer Science","gradYear":2008,"company":"Zazio","email":"mnewbigging4d@stumbleupon.com"},
    {"id":159,"name":"Bern Brighty","major":"Electrical Engineering","gradYear":2007,"company":"Vipe","email":"bbrighty4e@miitbeian.gov.cn"},
    {"id":160,"name":"Danika Maccrae","major":"Electrical Engineering","gradYear":2006,"company":"Skiba","email":"dmaccrae4f@sina.com.cn"},
    {"id":161,"name":"Reidar Cable","major":"Electrical Engineering","gradYear":2013,"company":"Kaymbo","email":"rcable4g@tripadvisor.com"},
    {"id":162,"name":"Aleta Pittwood","major":"Computer Science","gradYear":1970,"company":"Chatterpoint","email":"apittwood4h@wikipedia.org"},
    {"id":163,"name":"Drusilla Creber","major":"Electrical Engineering","gradYear":2007,"company":"Meedoo","email":"dcreber4i@sciencedirect.com"},
    {"id":164,"name":"Alexio Ledingham","major":"Computer Science","gradYear":2003,"company":"Skalith","email":"aledingham4j@washington.edu"},
    {"id":165,"name":"Early Smogur","major":"Electrical Engineering","gradYear":2005,"company":"Yakitri","email":"esmogur4k@marketwatch.com"},
    {"id":166,"name":"Gerick Denecamp","major":"Computer Science","gradYear":1988,"company":"Jamia","email":"gdenecamp4l@google.com"},
    {"id":167,"name":"Maureene Yerby","major":"Computer Science","gradYear":2000,"company":"InnoZ","email":"myerby4m@about.me"},
    {"id":168,"name":"Whittaker Verling","major":"Computer Engineering","gradYear":2009,"company":"Cogidoo","email":"wverling4n@geocities.jp"},
    {"id":169,"name":"Bobbette Peddowe","major":"Computer Science","gradYear":2000,"company":"Realbuzz","email":"bpeddowe4o@ebay.co.uk"},
    {"id":170,"name":"Christalle Draysey","major":"Computer Engineering","gradYear":2003,"company":"Gigaclub","email":"cdraysey4p@taobao.com"},
    {"id":171,"name":"Rolph Brickett","major":"Computer Engineering","gradYear":1999,"company":"Janyx","email":"rbrickett4q@a8.net"},
    {"id":172,"name":"Angeli Forcade","major":"Computer Engineering","gradYear":1999,"company":"Fadeo","email":"aforcade4r@google.ca"},
    {"id":173,"name":"Edgard Skeldon","major":"Electrical Engineering","gradYear":2002,"company":"Dabjam","email":"eskeldon4s@blogspot.com"},
    {"id":174,"name":"Janis Caldroni","major":"Computer Science","gradYear":2013,"company":"Photobug","email":"jcaldroni4t@smh.com.au"},
    {"id":175,"name":"Luciano Haibel","major":"Computer Science","gradYear":2008,"company":"Livetube","email":"lhaibel4u@paginegialle.it"},
    {"id":176,"name":"Babs Wodham","major":"Electrical Engineering","gradYear":1999,"company":"Jazzy","email":"bwodham4v@networkadvertising.org"},
    {"id":177,"name":"Roch Goodlud","major":"Electrical Engineering","gradYear":1996,"company":"Yozio","email":"rgoodlud4w@about.me"},
    {"id":178,"name":"Desdemona Arens","major":"Computer Engineering","gradYear":1996,"company":"Tazz","email":"darens4x@si.edu"},
    {"id":179,"name":"Jerrie Tompkinson","major":"Computer Science","gradYear":2010,"company":"Voolia","email":"jtompkinson4y@liveinternet.ru"},
    {"id":180,"name":"Inez Disbrow","major":"Computer Science","gradYear":1988,"company":"Feedfire","email":"idisbrow4z@cargocollective.com"},
    {"id":181,"name":"Barby Couvert","major":"Computer Science","gradYear":2012,"company":"Chatterbridge","email":"bcouvert50@altervista.org"},
    {"id":182,"name":"Torry Domegan","major":"Computer Engineering","gradYear":2007,"company":"Mita","email":"tdomegan51@privacy.gov.au"},
    {"id":183,"name":"Atlante Stanwix","major":"Electrical Engineering","gradYear":1997,"company":"Youspan","email":"astanwix52@businessweek.com"},
    {"id":184,"name":"Lorie Campanelli","major":"Electrical Engineering","gradYear":1998,"company":"Twitternation","email":"lcampanelli53@pbs.org"},
    {"id":185,"name":"Stacee Dowding","major":"Electrical Engineering","gradYear":2000,"company":"Youspan","email":"sdowding54@cdc.gov"},
    {"id":186,"name":"Ximenes Cregin","major":"Electrical Engineering","gradYear":1988,"company":"Skyvu","email":"xcregin55@auda.org.au"},
    {"id":187,"name":"Mariska Goward","major":"Computer Science","gradYear":1986,"company":"Ailane","email":"mgoward56@narod.ru"},
    {"id":188,"name":"Jeth Stoker","major":"Computer Science","gradYear":2010,"company":"Jazzy","email":"jstoker57@posterous.com"},
    {"id":189,"name":"Orson Mustoe","major":"Electrical Engineering","gradYear":1998,"company":"Quatz","email":"omustoe58@trellian.com"},
    {"id":190,"name":"Jarred Danilevich","major":"Electrical Engineering","gradYear":2006,"company":"Oodoo","email":"jdanilevich59@boston.com"},
    {"id":191,"name":"Gene Davidge","major":"Electrical Engineering","gradYear":2002,"company":"Quimba","email":"gdavidge5a@blogspot.com"},
    {"id":192,"name":"Gene Mahody","major":"Electrical Engineering","gradYear":2000,"company":"Feedfish","email":"gmahody5b@fc2.com"},
    {"id":193,"name":"Lind Flippini","major":"Computer Engineering","gradYear":2000,"company":"Yadel","email":"lflippini5c@livejournal.com"},
    {"id":194,"name":"Chloe Deere","major":"Computer Science","gradYear":2010,"company":"Dynabox","email":"cdeere5d@baidu.com"},
    {"id":195,"name":"Manya Bennike","major":"Electrical Engineering","gradYear":1987,"company":"Twitternation","email":"mbennike5e@seattletimes.com"},
    {"id":196,"name":"Merilee Whopples","major":"Computer Engineering","gradYear":2006,"company":"Thoughtbridge","email":"mwhopples5f@4shared.com"},
    {"id":197,"name":"Annora Noice","major":"Electrical Engineering","gradYear":2007,"company":"Zoonder","email":"anoice5g@mozilla.org"},
    {"id":198,"name":"Jan Iliffe","major":"Computer Engineering","gradYear":2004,"company":"Divape","email":"jiliffe5h@smh.com.au"},
    {"id":199,"name":"Torrance Milesop","major":"Computer Engineering","gradYear":2011,"company":"Twitterbridge","email":"tmilesop5i@google.fr"},
    {"id":200,"name":"Odelia Rabbet","major":"Computer Engineering","gradYear":1995,"company":"Pixope","email":"orabbet5j@bing.com"}],
  }),
});
