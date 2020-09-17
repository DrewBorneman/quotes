<template>
  <div class="container">
    <p class="quote">{{ selectedQuote.quote }}</p>
    <p class="author">– {{ selectedQuote.author }}</p>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  data() {
    return {
      number: null,
      quotes: [
        {quote: '„Mne nejde o to, za cenu nečinnosti kúpiť si život. Ja nechcem žiť o dvadsať-tridsať rokov. Teraz-teraz chcem žiť.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Nepoctivý človek nemôže vykonať veľký čin.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Nech každý z nás je dnes lepší, ako bol včera a vlasť naša bude veľká a slávna.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Zvíťazíme, ak budeme my Česi a Slováci, vždycky po boku. Keď sa podarí niekomu nás rozdvojiť, potom bude s nami zle. V jednote je sila. Prvou zásadou nášho boja je jednota a svornosť. To si, bratia, pamätajme.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Som Slovák telom i dušou – neznám lásky polovičatej.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Kto si myslí, že mu slobodu druhí vybojujú, ten jej nie je hodný.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Veriť, milovať, pracovať.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Pravde veriť, pravdu žiť a pravdu brániť.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Pre ľudí, pevného predsavzatia a vytrvalosti niet nemožností.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Konám horlivo svoju povinnosť na fronte, aby som robil česť slovenskému národu a dokázal úprimnú lásku k Francúzsku.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Žil som krásny život. Prežíval som večnosť v sekundách.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Vytrvalosť spojená s nadšením je zbraňou, s ktorou človečenstvo postupuje víťazne na ceste pokroku.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Nič mi nebolo nemožné, lebo som chcel.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Musíme žiť jeden pre druhého, lebo šťastie jednotlivcov mohutnie tou mierou, ktorou sa množí vôkol neho.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Chcel by som účinkovať v svojom národe, ktorý som nikdy neprestal milovať.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Búrlivý je život môj a bude plný zápasov. So šťastím by som sa delil, ak však padnem, chcem padnúť sám.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Ocitol som sa v živote. Videl som tie obrovské vlny, tie nemilosrdné vlny, i bolo mi jasno, že vzdor všetkej sebadôvere, vzdor nádeje a povzbudzovania priateľov, vzdor nadšenia môjho a relatívneho šťastia, výhľady do budúcnosti sú veľmi nejasné. Zbývala mi …. a poctivá práca. I pustil som sa pokojným srdcom v boj. Pokojným, lebo ďalším vývinom uvedomil som si, že účelnosť života nie je v sláve svetskej, ale v zdokonaľovaní nášho duševného človeka. V liste Dr. Jurajovi Janoškovi, 1906, Mont Blanc“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Život na mňa musí čakať, a nie živorenie.“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Účelne a logicky žije len ten, kto využíva každý okamih na prehĺbenie intelektu. Čím bystrejší je náš um, čím väčšie je množstvo v nás spracovaných vedomostí, tým hlbšia je súdnosť človeka, tým jasnejší a vrúcnejší jeho pomer k vonkajšiemu svetu. V liste Vavrovi Šrobárovi, 9. september 1909“', author: 'Milan Rastislav Štefánik'},
        {quote: '„Budúcnosť moja je buď skvelá, buď nijaká.“', author: 'Milan Rastislav Štefánik'},
      ]};
  },
  computed: {
    selectedQuote(){
      return(this.quotes[this.$route.params.slug]);
    },
  },
  created() {
    if(this.$route.params.slug == null) {
      this.$router.push(`/${this.getRandomQuoteNumber(this.quotes.length)}`);
    }
  },
  methods: {
    getRandomQuoteNumber(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  text-align: center;
}

.quote {
  font-weight: 500;
  font-size: 20px;

  margin-bottom: 10px;
}

.author {
  font-weight: 400;
  font-size: 16px;
}
</style>
