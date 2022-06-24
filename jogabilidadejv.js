var personagens =JSON.parse [{"id":  1,  "nacao": "Hobbit",  "casa":  "O Condado",  
"descricao": "Os  hobbits pés-peludos são o tipo mais comum de hobbit. São morenos, preferem planícies e regiões banhadas por rios.Os cascalvas tem a pele e o cabelo mais claros, são mais altos e mais esguios que os outros tipos de hobbit, preferem bosques e florestas para morar além de serem descendentes de elfos. Outros hobbits dizem que estes têm 'sangue de fada', por conta de sua ascendência.Os grados são tipos de hobbit mais robustos e frequentemente cultivam barbas. São mais próximos aos  anões,  e  Sméagol  costumava  ser  um  cascalva  antes  de  ser  corrompido  pelo anel",  
"personagens-saga":  ["Bilbo  Bolseiro",  "Samwise  Gamgee",  "Frodo Bolseiro"],      
"imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bilbo_Bols%C3%B3n.png/227px-Bilbo_Bols%C3%B3n.png"}];
[{"id": 2, "nacao": "Orc Snaga", "casa": "Cirith Ungol", 
"descricao": "Orcs eram os principais soldados dos exércitos do Lorde das Trevas e às vezes os mais fracos (mas mais numerosos) de seus servos. Eles foram criados pelo primeiro Lorde das Trevas, Morgoth , antes da Primeira Era e serviram a ele e mais tarde seu sucessor em sua busca para dominar a Terra-média .",  
"personagens-saga":  [ "Golfimbul",  "Bolg", "Azog"], 
"imagem": "https://static.wikia.nocookie.net/lotr/images/e/ea/OrcsArt.gif/revision/latest?cb=20190316060342"}];
[{"id": 3, "nacao": "Uruk-hai", "casa": "Portão Negro", 
"descricao": "Uruk-hai, ou os Uruks, são os orcs mais fortes e conhecidos por serem os guerreiros mais ferozes e violentos da Terra-média . Os Uruk-hai vivem em Isengard e Mordor . No entanto, no romance O Senhor dos Anéis , o termo Uruk-hai foi usado apenas para os orcs que vivem em Isengard. Eles também eram chamados de Isengards. Os orcs que viviam em Mordor eram chamados de Uruks de Mordor, e às vezes também são chamados de Uruks Negros.",  
"personagens-saga":  ["Uglúk",  "Lugdush",  "Mauhur"], 
"imagem": "https://static.wikia.nocookie.net/villains/images/0/04/Mauhur.jpg/revision/latest?cb=20130903142210"}];
[{"id": 4, "nacao": "Guerreiro de Gondor", "casa": "Minas Tirith", 
"descricao": "Gondor é o reinado mais poderoso dos Homens em Terra-Média.",  
"personagens-saga":  ["Boromir",  "Gandalf", "Aragorn"], 
"imagem": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Boromir.png"}];
[{"id": 5, "nacao": "Elfo da Floresta", "casa": "Floresta das Trevas", 
"descricao": "Elfos da Floresta são um povo mágico e selvagem, de ferocidade e destreza sobrenatural, que domam e se tornam parte das florestas que habitam.",  
"personagens-saga":  ["Legolas",  "Vanyar",  "Eldar"], 
"imagem": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Un_elfe_un_peu_frimeur_jnl_fal.jpg"}];
[{"id": 6, "nacao": "Cavaleiro de Rohan", "casa": "Abismo de Helm", 
"descricao": "Durante a XIII século de Terceira Idade (TA), os governantes de Gondor formaram uma aliança estreita com os habitantes do território do norte deRhovanion, um pai de três pessoas Casas do Edain da Primeira Era. Estes homens foram dizimados pela  Grande  Peste  de  1636  TA,  e  ainda  mais  pelas  invasões  dos  carrinhos  de Pessoas-de-no final do XX século. Após essas invasões, alguns desses homens, liderados por um certo Frumgar, migraram para o vale superior do Anduin em 1977 TA. No local, eles entraram em conflito com os Anões sobre o compartilhamento do tesouro do dragão Scatha, morto por Fram, filho de Frumgar. Esses homens, que tomaram o nome de Éothéod, viveram por vários séculos ao redor das nascentes do Anduin, mas se tornaram cada vez mais numerosos e se sentiam confinados em suas terras.  Apesar  do  afastamento,  eles  mantiveram  laços  com  Gondor,  e  quando  o Administrador Cirion se viu atacado por hordas de Orientais e Orcs, em 2510 AT, ele chamou Eorl, o Jovem, o novo Senhor dos Éothéod. Ele chegou inesperadamente e  venceu  a  batalha  decisiva  dos  Campos  de  Celebrant.",  
"personagens-saga": ["Théoden","Théodred", "Deorwine"],            
"imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cavalier-rohan.jpg/220px-Cavalier-rohan.jpg"}];
[{"id": 7, "nacao": "Elfo de Lothlórien", "casa": "Caras Galadhon", 
"descricao": "Lothlórien é um reino e floresta dos elfos restantes na Terra Média durante a Terceira Era. O reino tem um papel importante em O Senhor dos Anéis como o centro élfico de resistência contra Sauron e é um símbolo à estética élfica de preservação florestal que fornece um espaço 'fora do tempo'",  
"personagens-saga":  ["Noldor",  "Teleri", "Galadriel"], 
"imagem": "https://upload.wikimedia.org/wikipedia/pt/b/b3/Lothlorien_screenshot_%281%29.jpg"}];
[{"id": 8, "nacao": "Anão", "casa": "Colinas de Ferro", 
"descricao": "Os anões são retratados como um povo muito antigo que despertou, como os elfos, no início da Primeira Era, antes da existência do Sol e da Lua (elfos, no entanto, despertaram primeiro). Em O Silmarillion, os anões são descritos como mais baixos e atarracados que elfos e homens, capazes de suportar tanto calor e frio. Embora sejam mortais, têm uma vida média de 250 anos.",  
"personagens-saga":  ["Balin",  "Bifur",  "Durin, o Imortal"], 
"imagem": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Dwarf_by_BrokenMachine86.jpg"}];

personagens.forEach(function(textP){
    document.getElementById('div1').innerHTML += '<h1>'+textP.nacao+'</h1>';
    document.getElementById('div2').innerHTML += '<ul>'+'<li>'+textP.id+'</li>'+'<li>'+textP.personagens-saga+'</li>'+'<li>'+textP.casa+'</li>'+'</ul>';
    document.getElementById('div3').innerHTML += '<p>'+textP.descricao+'</p>';
    document.getElementById('div4').innerHTML += '<p class="imagem">'+ '<img src"'+textP.imagem+'width=200 height=150 >'+'</p>';
    
});

