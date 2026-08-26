/**
 * Direção de arte: Saloon Líquido — surrealismo gastronômico noturno;
 * o produto real é soberano, enquanto profundidade e néon guiam a leitura.
 */
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Flame,
  Instagram,
  MessageCircle,
  MoveDown,
  Sparkles,
} from "lucide-react";
import { useEffect, useState, type PointerEvent } from "react";

const ASSETS = {
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/RZNTcgAefZbVtEOq.png",
  wordmark: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/yRgUuxWiBDcXDxzD.png",
  horn: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/UOVZjRhAthCOlrYX.png",
  heroEnvironment: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/bnikgKRyTCAwHhUa.jpg",
  manifestoEnvironment: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/gWdRSJWoybvghAnw.jpg",
  portal: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/fVhoOQlhWZGxoXVv.jpg",
  heroBurger: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/bTwhJlcTkXCqHieF.jpg",
  doubleBurger: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/DpgosHhsqXoubKyq.jpg",
  classic: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/uPQfERLVmOhVoToD.jpg",
  tower: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/plZwDnlSdWlErjHe.jpg",
  glove: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/MQxFbCoauZwCZuqy.jpg",
  baconWide: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/ToStJNbedzUGNpHH.jpg",
  baconClose: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/ZMFZRwkNAFqQLZho.jpg",
  baconVertical: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/uWPoooLGsKHcouey.jpg",
  gallerySix: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/IBAsnnHUyWARjXjK.jpg",
  galleryNine: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044373020/iosFstYQMGGRUldX.jpg",
};

const whatsappUrl = "https://wa.me/5542988124834";

const burgers = [
  {
    number: "01",
    name: "O clássico sem desculpa",
    copy: "Carne na brasa, pão tostado e tudo o que importa quando a fome fala alto.",
    image: ASSETS.classic,
    alt: "Hambúrguer clássico da Mock Burguer sobre tábua de madeira.",
    imagePosition: "50% center",
  },
  {
    number: "02",
    name: "Duplo. Sem ponto final.",
    copy: "Duas camadas de desejo, queijo derretido e presença que não pede licença.",
    image: ASSETS.baconWide,
    alt: "Hambúrguer com bacon da Mock Burguer em uma tábua de madeira.",
    imagePosition: "38% center",
  },
  {
    number: "03",
    name: "A pilha proibida",
    copy: "Quando o exagero é tratado como receita e servido com as duas mãos.",
    image: ASSETS.glove,
    alt: "Hambúrguer da Mock Burguer segurado por uma mão com luva preta.",
    imagePosition: "58% center",
  },
];

const ritual = [
  ["01", "Escolha", "Carne, pão e combinações pensadas para ficar na memória."],
  ["02", "Brasa", "Fogo, crosta e tempo. O que é bom não sai com pressa."],
  ["03", "Impacto", "Chega alto, suculento e sem qualquer intenção de passar despercebido."],
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HeroDepthImage() {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--hero-rotate-y", `${x * 7}deg`);
    event.currentTarget.style.setProperty("--hero-rotate-x", `${y * -5}deg`);
    event.currentTarget.style.setProperty("--hero-shift", `${x * -12}px`);
  };

  const resetDepth = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--hero-rotate-y", "0deg");
    event.currentTarget.style.setProperty("--hero-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--hero-shift", "0px");
  };

  return (
    <div
      className="hero-product-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetDepth}
      aria-label="Fotografia do hambúrguer em profundidade"
    >
      <div className="hero-product-shadow" aria-hidden="true" />
      <img className="hero-product-image" src={ASSETS.heroBurger} alt="Hambúrguer da Mock Burguer sobre uma tábua, em iluminação de néon." />
      <div className="hero-product-glow" aria-hidden="true" />
      <span className="hero-product-note" aria-hidden="true"><Sparkles size={14} /> arraste o olhar</span>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTo = (id: string) => {
    window.setTimeout(() => scrollToSection(id), 10);
  };

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--solid" : ""}`}>
        <button className="nav-wordmark" onClick={() => navTo("topo")} aria-label="Ir para o início da Mock Burguer">
          <img src={ASSETS.wordmark} alt="Mock" />
        </button>
      </header>

      <main>
        <section id="topo" className="hero-scene" aria-labelledby="hero-heading">
          <img className="hero-environment" src={ASSETS.heroEnvironment} alt="" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <motion.img
              className="hero-logo"
              src={ASSETS.logo}
              alt="Logotipo Mock Burguer"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            />
            <motion.p className="eyebrow" initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.55 }}>
              <Flame size={14} /> na brasa, sem negociação
            </motion.p>
            <motion.h1 id="hero-heading" initial={reducedMotion ? false : { opacity: 0, y: 28 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>
              Fome em<br /><span>volume máximo.</span>
            </motion.h1>
            <motion.p className="hero-description" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.65 }}>
              Hambúrgueres artesanais feitos com personalidade. Sem filtro, sem modéstia e sem uma única camada sem propósito.
            </motion.p>
            <motion.div className="hero-actions" initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <a className="button-hot" href={whatsappUrl} target="_blank" rel="noreferrer">Quero sentir a brasa <ArrowUpRight size={18} /></a>
              <button className="button-quiet" onClick={() => scrollToSection("selecoes")}>Ver as seleções <MoveDown size={17} /></button>
            </motion.div>
          </div>
          <motion.div className="hero-product-wrap" initial={reducedMotion ? false : { opacity: 0, x: 36, scale: 0.97 }} animate={reducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.2, duration: 0.95, ease: [0.23, 1, 0.32, 1] }}>
            <HeroDepthImage />
          </motion.div>
          <button className="hero-scroll" onClick={() => scrollToSection("manifesto")} aria-label="Avançar para a essência">
            <span>desça para sentir</span><MoveDown size={18} />
          </button>
        </section>

        <section className="marquee-bar" aria-label="Frase da marca">
          <div className="marquee-track"><span>BRASA</span><i>✦</i><span>FUMAÇA</span><i>✦</i><span>EXCESSO</span><i>✦</i><span>BRASA</span><i>✦</i><span>FUMAÇA</span><i>✦</i><span>EXCESSO</span></div>
        </section>

        <section id="manifesto" className="manifesto-scene" aria-labelledby="manifesto-heading">
          <img className="manifesto-environment" src={ASSETS.manifestoEnvironment} alt="" aria-hidden="true" />
          <div className="manifesto-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}><span>01</span> a essência</motion.p>
            <motion.h2 id="manifesto-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>Não é só<br />um <em>hambúrguer.</em></motion.h2>
            <motion.p className="manifesto-body" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.1, duration: 0.65 }}>
              É uma construção de fogo, matéria e vontade. Cada ingrediente entra para deixar marca — e cada camada chega para ocupar espaço.
            </motion.p>
            <motion.div className="manifesto-tags" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.22, duration: 0.5 }}>
              <span>carne selada</span><span>pão tostado</span><span>intenção máxima</span>
            </motion.div>
          </div>
          <motion.div className="ingredient-orbit" initial={reducedMotion ? false : { opacity: 0, rotate: -4, y: 26 }} whileInView={reducedMotion ? undefined : { opacity: 1, rotate: 0, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.95, ease: [0.23, 1, 0.32, 1] }}>
            <span className="orbit-label">feito com<br />personalidade</span>
            <span className="orbit-dot orbit-dot--one" /><span className="orbit-dot orbit-dot--two" /><span className="orbit-dot orbit-dot--three" />
            <img src={ASSETS.baconClose} alt="Detalhe de hambúrguer com bacon da Mock Burguer." loading="lazy" />
          </motion.div>
        </section>

        <section id="selecoes" className="selections-scene" aria-labelledby="selections-heading">
          <div className="section-intro">
            <p className="eyebrow"><span>02</span> seleções</p>
            <h2 id="selections-heading">Escolha<br />seu <em>excesso.</em></h2>
            <p>Cada criação muda o seu eixo por alguns minutos. Consulte a disponibilidade e peça a sua preferida.</p>
          </div>
          <div className="burger-deck">
            {burgers.map((burger, index) => (
              <motion.article
                className={`burger-card burger-card--${index + 1}`}
                key={burger.number}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.09, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="card-image-wrap"><img src={burger.image} alt={burger.alt} loading="lazy" style={{ objectPosition: burger.imagePosition }} /><span>{burger.number}</span></div>
                <div className="card-content"><h3>{burger.name}</h3><p>{burger.copy}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Pedir na brasa <ArrowUpRight size={17} /></a></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="ritual" className="ritual-scene" aria-labelledby="ritual-heading">
          <div className="ritual-image"><img src={ASSETS.glove} alt="Hambúrguer da Mock Burguer sendo segurado com uma luva preta." loading="lazy" /><div className="ritual-image-shade" /></div>
          <div className="ritual-copy">
            <p className="eyebrow"><span>03</span> o ritual da brasa</p>
            <h2 id="ritual-heading">Quando a fome<br />merece <em>cerimônia.</em></h2>
            <div className="ritual-list">
              {ritual.map(([number, title, copy]) => <motion.div className="ritual-item" key={number} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.55 }}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></motion.div>)}
            </div>
          </div>
        </section>

        <section className="gallery-scene" aria-labelledby="gallery-heading">
          <div className="gallery-title"><p className="eyebrow"><span>04</span> sem filtro</p><h2 id="gallery-heading">A realidade<br />já é <em>surreal.</em></h2></div>
          <div className="photo-river">
            <figure className="photo photo--a"><img src={ASSETS.baconWide} alt="Hambúrguer com bacon da Mock Burguer em uma tábua de madeira." loading="lazy" /></figure>
            <figure className="photo photo--b"><img src={ASSETS.gallerySix} alt="Retrato vertical de hambúrguer da Mock Burguer sob luz de brasa." loading="lazy" /></figure>
            <figure className="photo photo--c"><img src={ASSETS.galleryNine} alt="Hambúrguer alto da Mock Burguer em enquadramento editorial." loading="lazy" /></figure>
            <figure className="photo photo--d"><img src={ASSETS.tower} alt="Hambúrguer alto da Mock Burguer com camadas de carne." loading="lazy" /></figure>
            <figure className="photo photo--e"><img src={ASSETS.doubleBurger} alt="Hambúrguer duplo da Mock Burguer com queijo derretido." loading="lazy" /></figure>
            <figure className="photo photo--f"><img src={ASSETS.baconClose} alt="Close de hambúrguer da Mock Burguer com bacon e molho." loading="lazy" /></figure>
          </div>
          <div className="gallery-foot"><span>mock burguer / a fome não é discreta</span><a href="https://www.instagram.com/mockburguer/" target="_blank" rel="noreferrer">ver no Instagram <Instagram size={17} /></a></div>
        </section>

        <section className="closing-scene" aria-labelledby="closing-heading">
          <img className="closing-environment" src={ASSETS.portal} alt="" aria-hidden="true" />
          <div className="closing-content">
            <img src={ASSETS.horn} alt="" className="closing-mark" />
            <p className="eyebrow">última chamada</p>
            <h2 id="closing-heading">A brasa<br />está <em>acesa.</em></h2>
            <p>Quando estiver pronto para deixar a fome decidir, a Mock está do outro lado.</p>
            <a className="button-hot button-hot--large" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a Mock <MessageCircle size={19} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img className="footer-official-logo" src={ASSETS.logo} alt="Mock Burguer" />
        <p className="footer-signature">Feito na brasa, servido com personalidade.</p>
        <div className="footer-links"><a href="https://www.instagram.com/mockburguer/" target="_blank" rel="noreferrer">Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div>
      </footer>
    </div>
  );
}
