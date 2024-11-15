const app = Vue.createApp({
  data() {
    return {
      carousel: [
        { image: "resources/carousel/cs-1.jpg" },
        { image: "resources/carousel/cs-2.jpg" },
        { image: "resources/carousel/cs-3.jpg" },
        { image: "resources/carousel/cs-4.jpg" },
      ],
      companyhighlights: [
        {
          image: "resources/companyhighlights/1.png",
          text: "Agricultural project management and institutional capacity development",
        },
        {
          image: "resources/companyhighlights/2.png",
          text: "Small holder farmer aggregation",
        },
        {
          image: "resources/companyhighlights/3.png",
          text: "Production, aggregation, processing, storage and marketing",
        },
        {
          image: "resources/companyhighlights/4.png",
          text: "Agricultural value chain Technical Assistance",
        },
        {
          image: "resources/companyhighlights/5.png",
          text: "Agribusiness Incubation and Mentorship",
        },
        {
          image: "resources/companyhighlights/6.png",
          text: "Agricultural Finance consultancy and training",
        },
        { image: "resources/companyhighlights/7.png", 
          text: "Agricultural mechanisation services" 
        },
        { image: "resources/companyhighlights/8.png", 
          text: "Farm mapping and data management" 
        },
        { image: "resources/companyhighlights/9.png", 
          text: "Advocacy" 
        },
        {
          image: "resources/companyhighlights/10.png",
          text: "Research, Monitoring and Evaluation",
        },
      ],
      pastwork: [
        {
          image: "resources/pastwork/pw1.PNG",
          text: "Delivery of fertilizers and pesticides to farmers to prevent the destruction of plants from pests & parasites",
          modaltext:
            "BlueBrain Agro & Allied Services as a grass root Agro-allied company, supports farmers with agricultural inputs (fertilizer, herbicides, pesticides, aflasafe to deal with Aflatoxin) and extension service delivery both onsite and off-sight through our seasoned extension, agents, to consistently have a maximum yield in every cropping season. We have provided these services in Kaduna, Benue, Abuja, etc. in our various projects.",
        },
        {
          image: "resources/pastwork/pw2.PNG",
          text: "We provide Monitoring, Evaluation, and Learning Services",
          modaltext:
            "We design and implement gender-sensitive, results-based, and digital-driven MEL systems that ensure vital feedback routes and learning mechanisms. Our MEL services are driven by innovation and technological tools to ensure high-quality of data, optimum efficiency, and evidence-based impact/result. We have provided evidence-based Mel services for various projects funded by NGOs, and the government. These projects include the WOFAN ICON 2 project, SCL Project Juriya, etc.",
        },
        {
          image: "resources/pastwork/pw3.PNG",
          text: "We support and guide farmers through Good Agronomic Practice (GAP) of Agricultural Value Chain products",
          modaltext:
            "Our support to farmers includes the provision of innovative techniques, strategies, and practices for farm management, such as planting, fertilization, pest control, irrigation, and harvest. Our GAP services promote the safe and sustainable production of crops and livestock and improve food safety and quality, environmental sustainability, and social welfare. This helps farm owners to maximize yields, optimize business operations, and minimize production costs and environmental impact. We have provided these services in our Agrolog project and supported other projects in this regard as service providers.",
        },
        {
          image: "resources/pastwork/pw4.PNG",
          text: "Agricultural extension services, training, and cooperative development support",
          modaltext:
            "BlueBrain Agro & Allied Services will work with the state and select experienced ecosystem actors in the identified focus value chains to co-create intervention proposals for partnerships with leading donor agencies and/or co-funding with the government as well as prepare farmers to secure loan.",
        },
        {
          image: "resources/pastwork/pw5.PNG",
          text: "Co-create funding interventions",
          modaltext:
            "We are also inclined to the business of trading, marketing, sales, and distribution of agricultural goods, commission agents, manufacturer’s representatives, general suppliers, and contractors. We are reputed for the exportation of agricultural produce from our farmers, suppliers, processors, and marketers in the Agricultural Commodity Value Chain.",
        },
        {
          image: "resources/pastwork/pw6.PNG",
          text: "Agricultural product aggregation, haulage & transportation, trading, and market development",
          modaltext:
            "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: "resources/pastwork/pw7.PNG",
          text: "Institutional Capacity Development & Enhancement",
          modaltext:
            "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: "resources/pastwork/pw8.PNG",
          text: "Research, Business incubation and technology solutions",
          modaltext:
            "BlueBrain Agro & Allied Services will ensure full technology deployment as an enabler to efficient and effective project management that enables transparency, and high-quality data for monitoring, evaluation, reporting and development planning. BlueBrain Agro & Allied Services will carry out additional on-site and off-site activities (where required) to produce real-time and human-specific results. In addition, BlueBrain Agro & Allied Services will hold focus groups for data collection, formative assessments, and commentaries from a selected group of rural dwellers from the three zones who will provide feedback on the status, challenges, and potential solutions in the livestock sub-sector. Summative evaluations will be further developed to determine the components that BlueBrain Agro & Allied Services thinks will enhance livestock development in Kaduna state.",
        },
      ],
      ServicePastwork: [
        {
          image: "../resources/pastwork/pw1.PNG",
          head: "Delivery of fertilizers and pesticides to farmers to prevent the destruction of plants from pests & parasites",
          text:
            "BlueBrain Agro & Allied Services as a grass root Agro-allied company, supports farmers with agricultural inputs (fertilizer, herbicides, pesticides, aflasafe to deal with Aflatoxin) and extension service delivery both onsite and off-sight through our seasoned extension, agents, to consistently have a maximum yield in every cropping season. We have provided these services in Kaduna, Benue, Abuja, etc. in our various projects.",
        },
        {
          image: "../resources/pastwork/pw2.PNG",
          head: "We provide Monitoring, Evaluation, and Learning Services",
          text:
            "We design and implement gender-sensitive, results-based, and digital-driven MEL systems that ensure vital feedback routes and learning mechanisms. Our MEL services are driven by innovation and technological tools to ensure high-quality of data, optimum efficiency, and evidence-based impact/result. We have provided evidence-based Mel services for various projects funded by NGOs, and the government. These projects include the WOFAN ICON 2 project, SCL Project Juriya, etc.",
        },
        {
          image: "../resources/pastwork/pw3.PNG",
          head: "We support and guide farmers through Good Agronomic Practice (GAP) of Agricultural Value Chain products",
          text:
            "Our support to farmers includes the provision of innovative techniques, strategies, and practices for farm management, such as planting, fertilization, pest control, irrigation, and harvest. Our GAP services promote the safe and sustainable production of crops and livestock and improve food safety and quality, environmental sustainability, and social welfare. This helps farm owners to maximize yields, optimize business operations, and minimize production costs and environmental impact. We have provided these services in our Agrolog project and supported other projects in this regard as service providers.",
        },
        {
          image: "../resources/pastwork/pw4.PNG",
          head: "Agricultural extension services, training, and cooperative development support",
          text:
            "BlueBrain Agro & Allied Services will work with the state and select experienced ecosystem actors in the identified focus value chains to co-create intervention proposals for partnerships with leading donor agencies and/or co-funding with the government as well as prepare farmers to secure loan.",
        },
        {
          image: "../resources/pastwork/pw5.PNG",
          head: "Co-create funding interventions",
          text:
            "We are also inclined to the business of trading, marketing, sales, and distribution of agricultural goods, commission agents, manufacturer’s representatives, general suppliers, and contractors. We are reputed for the exportation of agricultural produce from our farmers, suppliers, processors, and marketers in the Agricultural Commodity Value Chain.",
        },
        {
          image: "../resources/pastwork/pw6.PNG",
          head: "Agricultural product aggregation, haulage & transportation, trading, and market development",
          text:
            "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: "../resources/pastwork/pw7.PNG",
          head: "Institutional Capacity Development & Enhancement",
          text:
            "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: "../resources/pastwork/pw8.PNG",
          head: "Research, Business incubation and technology solutions",
          text:
            "BlueBrain Agro & Allied Services will ensure full technology deployment as an enabler to efficient and effective project management that enables transparency, and high-quality data for monitoring, evaluation, reporting and development planning. BlueBrain Agro & Allied Services will carry out additional on-site and off-site activities (where required) to produce real-time and human-specific results. In addition, BlueBrain Agro & Allied Services will hold focus groups for data collection, formative assessments, and commentaries from a selected group of rural dwellers from the three zones who will provide feedback on the status, challenges, and potential solutions in the livestock sub-sector. Summative evaluations will be further developed to determine the components that BlueBrain Agro & Allied Services thinks will enhance livestock development in Kaduna state.",
        },
      ],
      mteam: [
        { name: "Lois Sankey",
          role: "CEO", 
          image: "../resources/team/lois.jpg" 
        },
        { name: "Godswill Egbe",
          role: "Executive Director - Finance and Operations", 
          image: "../resources/team/Godswill.jpg" 
        },
        { name: "Gerald Umeze",
          role: "MEL Specialists", 
          image: "../resources/team/gerald.jpg" 
        },
        { name: "Abubakar Kolo Ndakpoto",
          role: "Finance and Marketing specialist", 
          image: "../resources/team/abubakar_ndakpoto.png" 
        },
        { name: "Stanley Nwachukwu",
          role: "Project mangement expert", 
          image: "../resources/team/stanley.png" 
        },
      ],
      mteaml: [
        { name: "Lois Sankey",
          role: "CEO", 
          image: "resources/team/lois.jpg" 
        },
        { name: "Godswill Egbe",
          role: "Executive Director - Finance and Operations", 
          image: "resources/team/Godswill.jpg" 
        },
        { name: "Gerald Umeze",
          role: "MEL Specialists", 
          image: "resources/team/gerald.jpg" 
        },
      ],
      bteam: [
        { name: "Lois Sankey", 
          role: "Executive chairperson",
          image: "../resources/team/lois.jpg" 
        },
        { name: "Godswill Egbe",
          role: "Executive Director - Finance and Operations", 
          image: "../resources/team/Godswill.jpg" 
        },
        { name: "Nonso Ogbunamiri",
          role: "Member", 
          image: "../resources/team/nonso.jpg" 
        },
        { name: "Shayet Gani-Ikilama", 
          role: "Member",
          image: "../resources/team/shayet.jpg" 
        },
        { name: "Stephanie Ugochukwu",
          role: "Company Secretary/Legal Adviser", 
          image: "../resources/team/stephanie.jpg" 
        },
        { name: "Nkechi M. Chinke",
          role: "Member", 
          image: "../resources/team/nkechi.jpg" 
        },
      ],
    }
  },
  methods: {
    openmodal(item) {
      var modal = document.getElementById("modal")
      modal.classList.remove("top-full")
      modal.classList.add("top-0")
      document.getElementById("modaltext").textContent = item.modaltext
    },
}
})

app.mount("#main")
