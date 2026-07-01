// Bibelstellen – Schlachter 2000
// 100 Verse: 70 NT + 30 AT
// Kategorien: "evangelium" | "brief" | "apokalypse" | "gesetz" | "poesie" | "propheten" | "geschichte"

const VERSES = [
  // ── NEUES TESTAMENT ─────────────────────────────────────────────

  // Evangelien
  {
    id: 1,
    book: "Johannes",
    bookShort: "Joh",
    chapter: 3,
    verse: 16,
    text: "Denn so hat Gott die Welt geliebt, daß er seinen eingeborenen Sohn gab, damit jeder, der an ihn glaubt, nicht verloren geht, sondern ewiges Leben hat.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 2,
    book: "Matthäus",
    bookShort: "Mt",
    chapter: 5,
    verse: 3,
    text: "Selig sind, die da geistlich arm sind; denn ihrer ist das Himmelreich.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 3,
    book: "Matthäus",
    bookShort: "Mt",
    chapter: 6,
    verse: 9,
    text: "Darum sollt ihr so beten: Unser Vater im Himmel! Dein Name werde geheiligt.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 4,
    book: "Lukas",
    bookShort: "Lk",
    chapter: 2,
    verse: 11,
    text: "Denn euch ist heute der Heiland geboren, welcher ist Christus, der Herr, in der Stadt Davids.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 5,
    book: "Johannes",
    bookShort: "Joh",
    chapter: 1,
    verse: 1,
    text: "Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 6,
    book: "Johannes",
    bookShort: "Joh",
    chapter: 14,
    verse: 6,
    text: "Jesus spricht zu ihm: Ich bin der Weg und die Wahrheit und das Leben; niemand kommt zum Vater als durch mich.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 7,
    book: "Matthäus",
    bookShort: "Mt",
    chapter: 28,
    verse: 19,
    text: "Darum gehet hin und machet alle Völker zu Jüngern und taufet sie auf den Namen des Vaters und des Sohnes und des Heiligen Geistes.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 8,
    book: "Markus",
    bookShort: "Mk",
    chapter: 16,
    verse: 15,
    text: "Und er sprach zu ihnen: Gehet hin in alle Welt und prediget das Evangelium aller Kreatur!",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 9,
    book: "Lukas",
    bookShort: "Lk",
    chapter: 15,
    verse: 7,
    text: "Ich sage euch, so wird Freude im Himmel sein über einen Sünder, der Buße tut, mehr als über neunundneunzig Gerechte, die der Buße nicht bedürfen.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 10,
    book: "Johannes",
    bookShort: "Joh",
    chapter: 10,
    verse: 10,
    text: "Der Dieb kommt nur, um zu stehlen und zu schlachten und umzubringen; ich bin gekommen, damit sie das Leben haben und es in Fülle haben.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 11,
    book: "Johannes",
    bookShort: "Joh",
    chapter: 11,
    verse: 25,
    text: "Jesus sprach zu ihr: Ich bin die Auferstehung und das Leben. Wer an mich glaubt, wird leben, auch wenn er gestorben ist.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 12,
    book: "Matthäus",
    bookShort: "Mt",
    chapter: 11,
    verse: 28,
    text: "Kommt her zu mir alle, die ihr mühselig und beladen seid, so will ich euch Ruhe geben!",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 13,
    book: "Markus",
    bookShort: "Mk",
    chapter: 1,
    verse: 15,
    text: "Die Zeit ist erfüllt, und das Reich Gottes ist nahe gekommen! Tut Buße und glaubt an das Evangelium!",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 14,
    book: "Lukas",
    bookShort: "Lk",
    chapter: 6,
    verse: 27,
    text: "Aber ich sage euch, die ihr zuhört: Liebt eure Feinde! Tut wohl denen, die euch hassen!",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 15,
    book: "Johannes",
    bookShort: "Joh",
    chapter: 8,
    verse: 32,
    text: "Und ihr werdet die Wahrheit erkennen, und die Wahrheit wird euch frei machen.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 16,
    book: "Matthäus",
    bookShort: "Mt",
    chapter: 7,
    verse: 7,
    text: "Bittet, so wird euch gegeben; suchet, so werdet ihr finden; klopfet an, so wird euch aufgetan.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 17,
    book: "Lukas",
    bookShort: "Lk",
    chapter: 23,
    verse: 34,
    text: "Jesus aber sprach: Vater, vergib ihnen; denn sie wissen nicht, was sie tun!",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 18,
    book: "Johannes",
    bookShort: "Joh",
    chapter: 4,
    verse: 24,
    text: "Gott ist Geist, und die ihn anbeten, müssen ihn im Geist und in der Wahrheit anbeten.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 19,
    book: "Matthäus",
    bookShort: "Mt",
    chapter: 5,
    verse: 9,
    text: "Selig sind die Friedensstifter; denn sie werden Söhne Gottes genannt werden.",
    category: "evangelium",
    testament: "NT"
  },
  {
    id: 20,
    book: "Johannes",
    bookShort: "Joh",
    chapter: 15,
    verse: 5,
    text: "Ich bin der Weinstock, ihr seid die Reben. Wer in mir bleibt und ich in ihm, der bringt viel Frucht; denn ohne mich könnt ihr nichts tun.",
    category: "evangelium",
    testament: "NT"
  },

  // Apostelgeschichte
  {
    id: 21,
    book: "Apostelgeschichte",
    bookShort: "Apg",
    chapter: 2,
    verse: 38,
    text: "Petrus aber sprach zu ihnen: Tut Buße, und jeder von euch lasse sich taufen auf den Namen Jesu Christi zur Vergebung eurer Sünden; so werdet ihr die Gabe des Heiligen Geistes empfangen.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 22,
    book: "Apostelgeschichte",
    bookShort: "Apg",
    chapter: 1,
    verse: 8,
    text: "Aber ihr werdet Kraft empfangen, wenn der Heilige Geist auf euch gekommen ist, und werdet meine Zeugen sein in Jerusalem und in ganz Judäa und Samarien und bis an das Ende der Erde.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 23,
    book: "Apostelgeschichte",
    bookShort: "Apg",
    chapter: 16,
    verse: 31,
    text: "Sie aber sprachen: Glaube an den Herrn Jesus Christus, so wirst du gerettet werden, du und dein Haus!",
    category: "brief",
    testament: "NT"
  },

  // Römer
  {
    id: 24,
    book: "Römer",
    bookShort: "Röm",
    chapter: 8,
    verse: 28,
    text: "Wir wissen aber, daß denen, die Gott lieben, alle Dinge zum Besten mitwirken, denen, die nach seinem Vorsatz berufen sind.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 25,
    book: "Römer",
    bookShort: "Röm",
    chapter: 3,
    verse: 23,
    text: "Denn alle haben gesündigt und erlangen nicht die Herrlichkeit Gottes.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 26,
    book: "Römer",
    bookShort: "Röm",
    chapter: 6,
    verse: 23,
    text: "Denn der Lohn der Sünde ist der Tod; die Gnadengabe Gottes aber ist das ewige Leben in Christus Jesus, unserem Herrn.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 27,
    book: "Römer",
    bookShort: "Röm",
    chapter: 12,
    verse: 2,
    text: "Und richtet euch nicht nach dieser Welt, sondern laßt euch verwandeln durch die Erneuerung eures Sinnes, damit ihr prüfen könnt, was der gute und wohlgefällige und vollkommene Wille Gottes ist.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 28,
    book: "Römer",
    bookShort: "Röm",
    chapter: 1,
    verse: 16,
    text: "Denn ich schäme mich des Evangeliums von Christus nicht; denn es ist eine Kraft Gottes zur Errettung für jeden, der glaubt.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 29,
    book: "Römer",
    bookShort: "Röm",
    chapter: 5,
    verse: 8,
    text: "Gott aber erweist seine Liebe zu uns darin, daß Christus für uns gestorben ist, als wir noch Sünder waren.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 30,
    book: "Römer",
    bookShort: "Röm",
    chapter: 10,
    verse: 9,
    text: "Denn wenn du mit deinem Mund Jesus als Herrn bekennst und in deinem Herzen glaubst, daß Gott ihn von den Toten auferweckt hat, so wirst du gerettet werden.",
    category: "brief",
    testament: "NT"
  },

  // 1. Korinther
  {
    id: 31,
    book: "1. Korinther",
    bookShort: "1Kor",
    chapter: 13,
    verse: 4,
    text: "Die Liebe ist langmütig und gütig; die Liebe beneidet nicht; die Liebe prahlt nicht, sie bläht sich nicht auf.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 32,
    book: "1. Korinther",
    bookShort: "1Kor",
    chapter: 13,
    verse: 13,
    text: "Nun aber bleiben Glaube, Hoffnung, Liebe, diese drei; aber die größte von diesen ist die Liebe.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 33,
    book: "1. Korinther",
    bookShort: "1Kor",
    chapter: 10,
    verse: 13,
    text: "Es hat euch noch keine Versuchung getroffen als nur eine menschliche; Gott aber ist treu, der euch nicht über euer Vermögen versuchen lassen wird.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 34,
    book: "1. Korinther",
    bookShort: "1Kor",
    chapter: 15,
    verse: 55,
    text: "Tod, wo ist dein Sieg? Tod, wo ist dein Stachel?",
    category: "brief",
    testament: "NT"
  },
  {
    id: 35,
    book: "1. Korinther",
    bookShort: "1Kor",
    chapter: 6,
    verse: 19,
    text: "Oder wisset ihr nicht, daß euer Leib ein Tempel des Heiligen Geistes ist, der in euch wohnt und den ihr von Gott habt?",
    category: "brief",
    testament: "NT"
  },

  // 2. Korinther
  {
    id: 36,
    book: "2. Korinther",
    bookShort: "2Kor",
    chapter: 5,
    verse: 17,
    text: "Daher: Ist jemand in Christus, so ist er eine neue Schöpfung; das Alte ist vergangen, siehe, es ist alles neu geworden!",
    category: "brief",
    testament: "NT"
  },
  {
    id: 37,
    book: "2. Korinther",
    bookShort: "2Kor",
    chapter: 12,
    verse: 9,
    text: "Und er hat zu mir gesagt: Laß dir an meiner Gnade genügen; denn meine Kraft wird in der Schwachheit vollkommen gemacht.",
    category: "brief",
    testament: "NT"
  },

  // Galater
  {
    id: 38,
    book: "Galater",
    bookShort: "Gal",
    chapter: 5,
    verse: 22,
    text: "Die Frucht des Geistes aber ist Liebe, Freude, Friede, Langmut, Freundlichkeit, Güte, Treue, Sanftmut, Keuschheit.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 39,
    book: "Galater",
    bookShort: "Gal",
    chapter: 2,
    verse: 20,
    text: "Ich bin mit Christus gekreuzigt; und nicht mehr lebe ich, sondern Christus lebt in mir.",
    category: "brief",
    testament: "NT"
  },

  // Epheser
  {
    id: 40,
    book: "Epheser",
    bookShort: "Eph",
    chapter: 2,
    verse: 8,
    text: "Denn aus Gnade seid ihr errettet durch Glauben, und das nicht aus euch – Gottes Gabe ist es.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 41,
    book: "Epheser",
    bookShort: "Eph",
    chapter: 6,
    verse: 10,
    text: "Im übrigen seid stark in dem Herrn und in der Macht seiner Stärke!",
    category: "brief",
    testament: "NT"
  },
  {
    id: 42,
    book: "Epheser",
    bookShort: "Eph",
    chapter: 4,
    verse: 32,
    text: "Seid aber gütig zueinander, barmherzig, indem ihr einander vergebt, wie Gott auch euch vergeben hat in Christus.",
    category: "brief",
    testament: "NT"
  },

  // Philipper
  {
    id: 43,
    book: "Philipper",
    bookShort: "Phil",
    chapter: 4,
    verse: 13,
    text: "Ich vermag alles durch den, der mich stärkt, Christus.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 44,
    book: "Philipper",
    bookShort: "Phil",
    chapter: 4,
    verse: 6,
    text: "Macht euch um nichts Sorgen, sondern in allem laßt durch Gebet und Flehen mit Danksagung eure Anliegen vor Gott kundwerden!",
    category: "brief",
    testament: "NT"
  },
  {
    id: 45,
    book: "Philipper",
    bookShort: "Phil",
    chapter: 4,
    verse: 7,
    text: "Und der Friede Gottes, der allen Verstand übersteigt, wird eure Herzen und euren Sinn bewahren in Christus Jesus.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 46,
    book: "Philipper",
    bookShort: "Phil",
    chapter: 2,
    verse: 10,
    text: "Damit in dem Namen Jesu jedes Knie sich beuge, der Wesen im Himmel und auf Erden und unter der Erde.",
    category: "brief",
    testament: "NT"
  },

  // Kolosser
  {
    id: 47,
    book: "Kolosser",
    bookShort: "Kol",
    chapter: 3,
    verse: 17,
    text: "Und alles, was immer ihr tut in Wort oder Werk, das tut alles im Namen des Herrn Jesus und danket Gott, dem Vater, durch ihn!",
    category: "brief",
    testament: "NT"
  },
  {
    id: 48,
    book: "Kolosser",
    bookShort: "Kol",
    chapter: 1,
    verse: 16,
    text: "Denn durch ihn wurde alles geschaffen, was im Himmel und was auf Erden ist, das Sichtbare und das Unsichtbare.",
    category: "brief",
    testament: "NT"
  },

  // 1. Thessalonicher
  {
    id: 49,
    book: "1. Thessalonicher",
    bookShort: "1Thess",
    chapter: 5,
    verse: 16,
    text: "Freuet euch allezeit!",
    category: "brief",
    testament: "NT"
  },
  {
    id: 50,
    book: "1. Thessalonicher",
    bookShort: "1Thess",
    chapter: 5,
    verse: 17,
    text: "Betet ohne Unterlaß!",
    category: "brief",
    testament: "NT"
  },

  // 2. Timotheus
  {
    id: 51,
    book: "2. Timotheus",
    bookShort: "2Tim",
    chapter: 3,
    verse: 16,
    text: "Alle Schrift ist von Gott eingegeben und nützlich zur Belehrung, zur Überführung, zur Zurechtweisung, zur Erziehung in der Gerechtigkeit.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 52,
    book: "2. Timotheus",
    bookShort: "2Tim",
    chapter: 1,
    verse: 7,
    text: "Denn Gott hat uns nicht einen Geist der Furcht gegeben, sondern der Kraft und der Liebe und der Besonnenheit.",
    category: "brief",
    testament: "NT"
  },

  // Hebräer
  {
    id: 53,
    book: "Hebräer",
    bookShort: "Hebr",
    chapter: 11,
    verse: 1,
    text: "Es ist aber der Glaube eine feste Zuversicht auf das, was man hofft, eine Überzeugung von Dingen, die man nicht sieht.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 54,
    book: "Hebräer",
    bookShort: "Hebr",
    chapter: 12,
    verse: 1,
    text: "Darum laßt uns auch, da wir eine so große Wolke von Zeugen um uns haben, jede Last und die uns leicht umstrickende Sünde ablegen.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 55,
    book: "Hebräer",
    bookShort: "Hebr",
    chapter: 4,
    verse: 12,
    text: "Denn das Wort Gottes ist lebendig und kraftvoll und schärfer als jedes zweischneidige Schwert.",
    category: "brief",
    testament: "NT"
  },

  // Jakobus
  {
    id: 56,
    book: "Jakobus",
    bookShort: "Jak",
    chapter: 1,
    verse: 5,
    text: "Wenn aber jemand von euch Weisheit mangelt, so bitte er Gott, der allen willig und ohne Vorwurf gibt; so wird sie ihm gegeben werden.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 57,
    book: "Jakobus",
    bookShort: "Jak",
    chapter: 2,
    verse: 17,
    text: "So ist auch der Glaube, wenn er keine Werke hat, an sich selbst tot.",
    category: "brief",
    testament: "NT"
  },

  // 1. Petrus
  {
    id: 58,
    book: "1. Petrus",
    bookShort: "1Petr",
    chapter: 5,
    verse: 7,
    text: "Alle eure Sorgen werfet auf ihn; denn er sorgt für euch.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 59,
    book: "1. Petrus",
    bookShort: "1Petr",
    chapter: 2,
    verse: 9,
    text: "Ihr aber seid ein auserwähltes Geschlecht, ein königliches Priestertum, ein heiliges Volk, ein Volk zum besonderen Eigentum.",
    category: "brief",
    testament: "NT"
  },

  // 1. Johannes
  {
    id: 60,
    book: "1. Johannes",
    bookShort: "1Joh",
    chapter: 4,
    verse: 8,
    text: "Wer nicht liebt, hat Gott nicht erkannt; denn Gott ist Liebe.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 61,
    book: "1. Johannes",
    bookShort: "1Joh",
    chapter: 1,
    verse: 9,
    text: "Wenn wir unsere Sünden bekennen, so ist er treu und gerecht, daß er uns die Sünden vergibt und uns reinigt von aller Ungerechtigkeit.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 62,
    book: "1. Johannes",
    bookShort: "1Joh",
    chapter: 4,
    verse: 4,
    text: "Ihr seid aus Gott, liebe Kinder, und habt jene überwunden; denn der in euch ist, ist größer als der, der in der Welt ist.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 63,
    book: "1. Johannes",
    bookShort: "1Joh",
    chapter: 5,
    verse: 4,
    text: "Denn alles, was aus Gott geboren ist, überwindet die Welt; und dies ist der Sieg, der die Welt überwunden hat: unser Glaube.",
    category: "brief",
    testament: "NT"
  },

  // Weniger bekannte NT Briefe
  {
    id: 64,
    book: "2. Thessalonicher",
    bookShort: "2Thess",
    chapter: 3,
    verse: 3,
    text: "Aber der Herr ist treu, der euch festigen und vor dem Bösen bewahren wird.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 65,
    book: "Titus",
    bookShort: "Tit",
    chapter: 3,
    verse: 5,
    text: "So rettete er uns, nicht um der Werke willen, die wir in Gerechtigkeit getan hätten, sondern nach seiner Barmherzigkeit.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 66,
    book: "Philemon",
    bookShort: "Phlm",
    chapter: 1,
    verse: 6,
    text: "Damit die Gemeinschaft deines Glaubens wirksam werde in der Erkenntnis alles Guten, das in euch ist in Christus Jesus.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 67,
    book: "2. Petrus",
    bookShort: "2Petr",
    chapter: 1,
    verse: 3,
    text: "Denn seine göttliche Kraft hat uns alles geschenkt, was zum Leben und zur Gottseligkeit gehört.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 68,
    book: "Judas",
    bookShort: "Jud",
    chapter: 1,
    verse: 24,
    text: "Dem aber, der euch vor dem Fallen bewahren und euch tadellos vor seine Herrlichkeit stellen kann mit Frohlocken.",
    category: "brief",
    testament: "NT"
  },
  {
    id: 69,
    book: "3. Johannes",
    bookShort: "3Joh",
    chapter: 1,
    verse: 4,
    text: "Ich habe keine größere Freude als diese, zu hören, daß meine Kinder in der Wahrheit wandeln.",
    category: "brief",
    testament: "NT"
  },

  // Offenbarung
  {
    id: 70,
    book: "Offenbarung",
    bookShort: "Offb",
    chapter: 3,
    verse: 20,
    text: "Siehe, ich stehe vor der Tür und klopfe an. Wenn jemand meine Stimme hört und die Tür öffnet, zu dem werde ich hineingehen und das Mahl mit ihm halten und er mit mir.",
    category: "apokalypse",
    testament: "NT"
  },
  {
    id: 71,
    book: "Offenbarung",
    bookShort: "Offb",
    chapter: 21,
    verse: 4,
    text: "Und Gott wird abwischen alle Tränen von ihren Augen, und der Tod wird nicht mehr sein, auch Leid und Geschrei und Schmerz werden nicht mehr sein.",
    category: "apokalypse",
    testament: "NT"
  },

  // ── ALTES TESTAMENT ─────────────────────────────────────────────

  // Psalmen
  {
    id: 72,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 23,
    verse: 1,
    text: "Der HERR ist mein Hirte; mir wird nichts mangeln.",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 73,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 46,
    verse: 2,
    text: "Gott ist unsere Zuflucht und Stärke, eine Hilfe in Nöten, als sehr bewährt.",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 74,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 121,
    verse: 1,
    text: "Ich erhebe meine Augen zu den Bergen: Woher kommt mir Hilfe?",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 75,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 37,
    verse: 4,
    text: "Freue dich am HERRN; so wird er dir geben, was dein Herz begehrt.",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 76,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 119,
    verse: 105,
    text: "Dein Wort ist meinem Fuß eine Leuchte und ein Licht auf meinem Pfad.",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 77,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 103,
    verse: 1,
    text: "Lobe den HERRN, meine Seele, und alles, was in mir ist, seinen heiligen Namen!",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 78,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 27,
    verse: 1,
    text: "Der HERR ist mein Licht und mein Heil – wen sollte ich fürchten? Der HERR ist die Stärke meines Lebens – vor wem sollte mir grauen?",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 79,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 51,
    verse: 12,
    text: "Schaffe mir, o Gott, ein reines Herz, und einen neuen, beständigen Geist gib mir!",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 80,
    book: "Psalmen",
    bookShort: "Ps",
    chapter: 91,
    verse: 1,
    text: "Wer im Schirm des Höchsten sitzt und im Schatten des Allmächtigen wohnt.",
    category: "poesie",
    testament: "AT"
  },

  // Sprüche
  {
    id: 81,
    book: "Sprüche",
    bookShort: "Spr",
    chapter: 3,
    verse: 5,
    text: "Vertraue dem HERRN von ganzem Herzen, und stütze dich nicht auf deinen Verstand!",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 82,
    book: "Sprüche",
    bookShort: "Spr",
    chapter: 3,
    verse: 6,
    text: "Erkenne ihn auf all deinen Wegen, so wird er deine Pfade ebnen.",
    category: "poesie",
    testament: "AT"
  },
  {
    id: 83,
    book: "Sprüche",
    bookShort: "Spr",
    chapter: 22,
    verse: 6,
    text: "Gewöhne den Knaben an seinen Weg; so weicht er auch im Alter nicht davon ab.",
    category: "poesie",
    testament: "AT"
  },

  // Jesaja
  {
    id: 84,
    book: "Jesaja",
    bookShort: "Jes",
    chapter: 40,
    verse: 31,
    text: "Aber die auf den HERRN harren, gewinnen neue Kraft; sie heben die Flügel empor wie Adler.",
    category: "propheten",
    testament: "AT"
  },
  {
    id: 85,
    book: "Jesaja",
    bookShort: "Jes",
    chapter: 41,
    verse: 10,
    text: "Fürchte dich nicht, denn ich bin mit dir; weiche nicht, denn ich bin dein Gott! Ich stärke dich, ich helfe dir auch.",
    category: "propheten",
    testament: "AT"
  },
  {
    id: 86,
    book: "Jesaja",
    bookShort: "Jes",
    chapter: 53,
    verse: 5,
    text: "Aber er ist um unserer Übertretungen willen durchbohrt und um unserer Missetaten willen zerschlagen worden.",
    category: "propheten",
    testament: "AT"
  },
  {
    id: 87,
    book: "Jesaja",
    bookShort: "Jes",
    chapter: 9,
    verse: 5,
    text: "Denn ein Kind ist uns geboren, ein Sohn ist uns gegeben, und die Herrschaft liegt auf seiner Schulter; und man nennt seinen Namen: Wunderbarer, Ratgeber, starker Gott, Vater der Ewigkeit, Friedefürst.",
    category: "propheten",
    testament: "AT"
  },

  // Jeremia
  {
    id: 88,
    book: "Jeremia",
    bookShort: "Jer",
    chapter: 29,
    verse: 11,
    text: "Denn ich kenne die Gedanken, die ich über euch habe, spricht der HERR, Gedanken des Friedens und nicht des Unheils, euch eine Zukunft und eine Hoffnung zu geben.",
    category: "propheten",
    testament: "AT"
  },
  {
    id: 89,
    book: "Jeremia",
    bookShort: "Jer",
    chapter: 31,
    verse: 3,
    text: "Der HERR erschien ihm von fern: Ja, ich habe dich geliebt mit ewiger Liebe; darum habe ich dich zu mir gezogen mit Güte.",
    category: "propheten",
    testament: "AT"
  },

  // 1. Mose
  {
    id: 90,
    book: "1. Mose",
    bookShort: "1Mo",
    chapter: 1,
    verse: 1,
    text: "Im Anfang schuf Gott die Himmel und die Erde.",
    category: "gesetz",
    testament: "AT"
  },

  // 2. Mose
  {
    id: 91,
    book: "2. Mose",
    bookShort: "2Mo",
    chapter: 20,
    verse: 3,
    text: "Du sollst keine anderen Götter neben mir haben!",
    category: "gesetz",
    testament: "AT"
  },

  // Micha
  {
    id: 92,
    book: "Micha",
    bookShort: "Mi",
    chapter: 6,
    verse: 8,
    text: "Es ist dir gesagt, o Mensch, was gut ist und was der HERR von dir fordert: nichts anderes als Recht zu üben und Güte zu lieben und demütig zu wandeln mit deinem Gott.",
    category: "propheten",
    testament: "AT"
  },

  // Josua
  {
    id: 93,
    book: "Josua",
    bookShort: "Jos",
    chapter: 1,
    verse: 9,
    text: "Habe ich dir nicht geboten: Sei stark und mutig? Erschrick nicht und verzage nicht! Denn der HERR, dein Gott, ist mit dir überall, wohin du gehst.",
    category: "geschichte",
    testament: "AT"
  },

  // Klagelieder
  {
    id: 94,
    book: "Klagelieder",
    bookShort: "Klgl",
    chapter: 3,
    verse: 23,
    text: "Sie sind jeden Morgen neu; groß ist deine Treue!",
    category: "poesie",
    testament: "AT"
  },

  // Sacharja
  {
    id: 95,
    book: "Sacharja",
    bookShort: "Sach",
    chapter: 4,
    verse: 6,
    text: "Nicht durch Heer und nicht durch Kraft, sondern durch meinen Geist! spricht der HERR der Heerscharen.",
    category: "propheten",
    testament: "AT"
  },

  // Maleachi
  {
    id: 96,
    book: "Maleachi",
    bookShort: "Mal",
    chapter: 3,
    verse: 10,
    text: "Bringet die Zehnten vollständig in mein Vorratshaus, damit Nahrung in meinem Haus sei.",
    category: "propheten",
    testament: "AT"
  },

  // Hiob
  {
    id: 97,
    book: "Hiob",
    bookShort: "Hi",
    chapter: 19,
    verse: 25,
    text: "Aber ich weiß: mein Erlöser lebt, und als letzter wird er über dem Staub stehen.",
    category: "poesie",
    testament: "AT"
  },

  // Habakuk
  {
    id: 98,
    book: "Habakuk",
    bookShort: "Hab",
    chapter: 2,
    verse: 4,
    text: "Aber der Gerechte wird durch seinen Glauben leben.",
    category: "propheten",
    testament: "AT"
  },

  // 5. Mose
  {
    id: 99,
    book: "5. Mose",
    bookShort: "5Mo",
    chapter: 6,
    verse: 4,
    text: "Höre, Israel! Der HERR, unser Gott, ist ein einiger HERR!",
    category: "gesetz",
    testament: "AT"
  },

  // Kohelet
  {
    id: 100,
    book: "Kohelet",
    bookShort: "Koh",
    chapter: 12,
    verse: 13,
    text: "Das Ende der ganzen Rede, die du gehört hast: Fürchte Gott und halte seine Gebote; denn das gilt für alle Menschen.",
    category: "poesie",
    testament: "AT"
  }
];

// Alle einzigartigen Bücher mit Infos
const BOOKS_NT = [...new Set(VERSES.filter(v => v.testament === "NT").map(v => v.book))];
const BOOKS_AT = [...new Set(VERSES.filter(v => v.testament === "AT").map(v => v.book))];

// Kapitelanzahl je Buch (für Kapitel-Buttons)
const CHAPTER_COUNT = {
  "Matthäus": 28, "Markus": 16, "Lukas": 24, "Johannes": 21,
  "Apostelgeschichte": 28, "Römer": 16, "1. Korinther": 16,
  "2. Korinther": 13, "Galater": 6, "Epheser": 6, "Philipper": 4,
  "Kolosser": 4, "1. Thessalonicher": 5, "2. Thessalonicher": 3,
  "1. Timotheus": 6, "2. Timotheus": 4, "Titus": 3, "Philemon": 1,
  "Hebräer": 13, "Jakobus": 5, "1. Petrus": 5, "2. Petrus": 3,
  "1. Johannes": 5, "2. Johannes": 1, "3. Johannes": 1, "Judas": 1,
  "Offenbarung": 22,
  // AT
  "1. Mose": 50, "2. Mose": 40, "3. Mose": 27, "4. Mose": 36, "5. Mose": 34,
  "Josua": 24, "Richter": 21, "Ruth": 4, "1. Samuel": 31, "2. Samuel": 24,
  "1. Könige": 22, "2. Könige": 25, "Esra": 10, "Nehemia": 13,
  "Hiob": 42, "Psalmen": 150, "Sprüche": 31, "Kohelet": 12,
  "Jesaja": 66, "Jeremia": 52, "Klagelieder": 5,
  "Micha": 7, "Habakuk": 3, "Sacharja": 14, "Maleachi": 4
};
