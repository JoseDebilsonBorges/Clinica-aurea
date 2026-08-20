import { Sparkles, ShieldCheck, Heart, Smartphone, ArrowRight, MessageCircle } from "lucide-react";

const services=[
["Harmonização Facial","Equilíbrio e simetria para realçar sua beleza natural.","/facial.jpg"],
["Tratamentos Corporais","Tecnologia avançada para modelar e cuidar do corpo.","/corporal.jpg"],
["Rejuvenescimento","Protocolos para uma pele renovada, firme e luminosa.","/profissional.jpg"],
["Tecnologia Estética","Conforto, segurança e tecnologia para sua rotina.","/equipamento.jpg"],
["Cuidados com a Pele","Tratamentos personalizados para saúde e radiância.","/produtos.jpg"]
];

export default function Home(){
 return <main>
  <header className="nav wrap">
   <a className="brand" href="#inicio">AURÉA<span>ESTÉTICA & BEM-ESTAR</span></a>
   <nav><a href="#sobre">Sobre</a><a href="#tratamentos">Tratamentos</a><a href="#resultados">Resultados</a><a href="#contato">Contato</a></nav>
   <a className="btn small" href="#contato"><MessageCircle size={17}/> Agendar avaliação</a>
  </header>

  <section className="hero" id="inicio">
   <div className="heroGlow"></div>
   <div className="wrap heroGrid">
    <div className="heroText">
     <span className="eyebrow">ESTÉTICA AVANÇADA • CUIDADO PERSONALIZADO</span>
     <h1>Realce sua essência.<br/><em>Sinta-se única.</em></h1>
     <p>Tecnologia, cuidado e protocolos personalizados para resultados naturais, elegantes e alinhados à sua beleza.</p>
     <a className="btn" href="#contato"><MessageCircle size={19}/> Agendar avaliação</a>
    </div>
    <div className="visual">
      <div className="visualCard heroPhoto"><div className="photoShade"></div><span>AURÉA</span><small>uma experiência pensada nos detalhes</small></div>
    </div>
   </div>
  </section>

  <section className="trust">
   <div className="wrap trustGrid">
    <div><ShieldCheck/><b>Protocolos exclusivos</b><span>Resultados personalizados</span></div>
    <div><Smartphone/><b>Tecnologia de ponta</b><span>Equipamentos modernos</span></div>
    <div><Sparkles/><b>Cuidado especializado</b><span>Precisão em cada detalhe</span></div>
    <div><Heart/><b>Atendimento humanizado</b><span>Você no centro da experiência</span></div>
   </div>
  </section>

  <section className="section wrap" id="tratamentos">
   <span className="eyebrow gold">NOSSOS TRATAMENTOS</span>
   <div className="headingRow"><h2>Soluções para sua<br/>melhor versão</h2><p>Uma curadoria de tratamentos pensada para valorizar sua beleza com naturalidade.</p></div>
   <div className="cards">{services.map((s,i)=><article className="card" key={s[0]}>
    <div className="cardArt"><img src={s[2]} alt={s[0]}/><span>0{i+1}</span></div><h3>{s[0]}</h3><p>{s[1]}</p><a href="#contato">Saiba mais <ArrowRight size={15}/></a>
   </article>)}</div>
  </section>

  <section className="about" id="sobre"><div className="wrap aboutGrid">
   <div><span className="eyebrow gold">SOBRE A AURÉA</span><h2>Mais que estética.<br/><em>Cuidado com propósito.</em></h2>
   <p>A Auréa é uma marca-conceito criada para demonstrar como uma clínica contemporânea pode comunicar sofisticação, confiança e acolhimento no ambiente digital.</p>
   <div className="stats"><div><b>+15</b><span>Protocolos</span></div><div><b>100%</b><span>Personalizado</span></div><div><b>Premium</b><span>Experiência</span></div></div>
   </div>
   <div className="room roomPhoto"><span>AURÉA</span></div>
  </div></section>

  <section className="results section wrap" id="resultados"><span className="eyebrow gold">RESULTADOS QUE INSPIRAM</span><h2>Naturalidade em primeiro lugar.</h2><p>Uma abordagem cuidadosa, construída para respeitar características individuais e objetivos reais.</p></section>

  <section className="cta" id="contato"><div className="wrap"><span className="eyebrow">SEU MOMENTO COMEÇA AQUI</span><h2>Descubra uma nova forma<br/>de cuidar de você.</h2><p>Projeto demonstrativo de portfólio. Informações e marca são fictícias.</p><a className="btn light" href="https://wa.me/5500000000000"><MessageCircle size={19}/> Falar pelo WhatsApp</a></div></section>

  <footer className="wrap footer"><div className="brand">AURÉA<span>ESTÉTICA & BEM-ESTAR</span></div><p>Projeto conceitual para portfólio.</p></footer>
 </main>
}