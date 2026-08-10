import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const posts = [
  {
    id: 1,
    img: "/imgs/blog_fiber_macro.jpg",
    date: "17 de fevereiro de 2022",
    title: "Quais são as principais características da fibra óptica?",
    excerpt:
      "Entenda como os cabos ópticos funcionam, quais são as principais características da fibra óptica e como elas fazem com que essa tecnologia seja a melhor.",
    content: (
      <div className="space-y-6 text-lg md:text-xl">
        <p>A internet por fibra óptica é hoje a tecnologia mais avançada para transmissão de dados no mundo inteiro. Mas afinal, como ela funciona e por que é tão superior aos métodos tradicionais?</p>
        
        <p>Ao contrário dos cabos de cobre tradicionais, que transmitem dados através de pulsos elétricos (o que os torna extremamente vulneráveis a tempestades, raios e interferências magnéticas), a fibra óptica transmite dados na forma de feixes de luz, através de cabos de vidro extremamente finos, muitas vezes da espessura de um fio de cabelo humano.</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">Velocidade da Luz</h4>
        <p>O grande diferencial da fibra é justamente a luz. Como a informação viaja literalmente na velocidade da luz (ou muito próximo a ela dentro do vidro), a latência, popularmente conhecida como "ping" pelos gamers, é reduzida a praticamente zero. Isso significa que seus comandos em jogos online, chamadas de vídeo ou uploads pesados ocorrem quase em tempo real.</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">Sem Degradação de Sinal</h4>
        <p>Outra característica fundamental é que a luz não perde força rapidamente. Na internet de rádio ou cabo coaxial, quanto mais longe você está da central, pior fica o seu sinal. Com a fibra óptica FTTH (Fiber To The Home - Fibra até dentro da sua casa), o cabo luminoso chega direto no seu roteador, garantindo que você receba 100% da banda que contratou.</p>

        <p>As principais características incluem altíssima capacidade de banda, baixíssima latência (ping), estabilidade incomparável e maior segurança na transmissão de dados. É por isso que provedores modernos, como a UP Telecom, utilizam 100% fibra ponta-a-ponta para entregar a melhor experiência na Colônia Agrícola.</p>
      </div>
    ),
  },
  {
    id: 2,
    img: "/imgs/blog_patch_panel.jpg",
    date: "3 de dezembro de 2019",
    title: "Conheça as principais conexões de internet",
    excerpt:
      "Para a excelência da internet, precisamos de uma net com a melhor conexão, nesse artigo curto, mostraremos como funciona as variadas conexões...",
    content: (
      <div className="space-y-6 text-lg md:text-xl">
        <p>Ao longo dos anos, a internet evoluiu rapidamente, passando por diversas tecnologias de conexão. Entender as diferenças ajuda a valorizar o quão longe chegamos com a fibra óptica moderna.</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">Cabo Coaxial (O famoso "Cabo de TV")</h4>
        <p>Utilizado principalmente por grandes empresas de TV a cabo, essa tecnologia foi revolucionária nos anos 2000. Porém, ela possui um grande defeito arquitetônico: a banda é compartilhada com todo o seu bairro. Em horários de pico (como as 20h), a internet de todos fica lenta. Além disso, as taxas de upload costumam ser apenas 10% da taxa de download.</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">Internet a Rádio</h4>
        <p>Muito comum em áreas rurais e de difícil acesso. Antenas transmitem o sinal pelo ar. O maior inimigo da internet a rádio é a física: chuva pesada, ventania forte, árvores crescendo e até pássaros podem bloquear as ondas de rádio, derrubando a sua conexão completamente.</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">Fibra Óptica (FTTH)</h4>
        <p>A tecnologia definitiva. O cabo de fibra vai direto até o roteador da sua casa (Fiber to the Home). É imune a chuva (pois usa luz, não ondas eletromagnéticas), não é compartilhada da mesma forma que o cabo coaxial e oferece <strong>velocidade simétrica</strong> (seu upload é tão rápido quanto o seu download).</p>
      </div>
    ),
  },
  {
    id: 3,
    img: "/imgs/blog_wifi_waves.jpg",
    date: "25 de julho de 2019",
    title: "WiFi – qual a diferença entre 2,4 GHz e 5 GHz ?",
    excerpt:
      "Em termos simples, a banda de 5,0 GHz vai ter mais potência, ou seja, um sinal mais forte. Em compensação, ela perde em alcance...",
    content: (
      <div className="space-y-6 text-lg md:text-xl">
        <p>A maioria dos roteadores modernos hoje em dia, como os oferecidos pela UP Telecom, são "Dual Band", emitindo duas redes Wi-Fi na sua casa: 2.4 GHz e 5 GHz. Mas qual delas você deve usar no seu celular ou Smart TV?</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">A Rede 2.4 GHz: A Maratona</h4>
        <p>Pense na rede 2.4 GHz como um corredor de maratona. Ela não é a mais rápida do mundo, mas tem um fôlego incrível. Por ter ondas mais "longas", o sinal do 2.4 GHz consegue atravessar paredes grossas, espelhos, portas e móveis com facilidade. Ela é ideal para cobrir a casa toda, mas a velocidade máxima que ela consegue entregar fica travada em torno de 50 a 70 Mega, não importa se seu plano é de 500 Mega.</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">A Rede 5 GHz: O Velocista de 100 Metros</h4>
        <p>A rede 5 GHz é como um corredor de 100 metros rasos. Ela é explosivamente rápida! Consegue entregar 300, 500 ou até 800 Mega no seu celular tranquilamente. Porém, ela cansa rápido: a onda do 5 GHz é curta e "gorda". Ao bater em uma parede de tijolos ou em uma porta de madeira pesada, o sinal morre quase imediatamente.</p>

        <p><strong>Dica de Ouro:</strong> Para tirar o máximo proveito do seu plano UP Telecom, você deve se conectar na rede 5 GHz quando estiver no mesmo cômodo do roteador (assistindo Netflix na sala, por exemplo), e usar o 2.4 GHz apenas quando for para o quintal ou para os fundos da casa.</p>
      </div>
    ),
  },
  {
    id: 4,
    img: "/imgs/blog_keyboard_esc.jpg",
    date: "23 de julho de 2019",
    title: "Não esqueça de fazer logout!",
    excerpt:
      "Saia clicando em “Logout”, “Sair” ou equivalente. Você faz o Logoff ao sair de suas contas? Sempre que você acessa suas contas online...",
    content: (
      <div className="space-y-6 text-lg md:text-xl">
        <p>Você tem o hábito de fechar apenas a aba do navegador no "X" vermelho após usar o seu banco, e-mail ou redes sociais em computadores que não são os seus?</p>
        
        <p>Seja no trabalho, na faculdade, em uma lan house ou até no computador de um amigo: apenas fechar a aba não encerra a sua sessão! O navegador cria pequenos arquivos chamados "cookies" e "tokens de sessão" que dizem ao site "Ei, o João ainda está logado".</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">O Perigo Oculto</h4>
        <p>Se outra pessoa abrir o navegador no mesmo computador e digitar o site do banco ou o Facebook que você estava usando, ela entrará diretamente na sua conta, sem precisar da senha. Ela terá acesso total às suas conversas, transferências e dados sensíveis.</p>
        
        <h4 className="text-2xl font-bold text-[var(--brand-primary)] mt-8 mb-4">A Regra de Ouro da Segurança</h4>
        <p>A regra de ouro da segurança digital é muito simples, mas subestimada: **sempre clique ativamente no botão "Sair" ou "Logout"**. Quando você clica nesse botão, o site envia uma ordem para destruir os cookies e invalidar a sua sessão imediatamente. Só assim você garante que os seus dados estão 100% seguros antes de levantar da cadeira!</p>
      </div>
    ),
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/imgs/bg_blog.jpg')" }}>
      {/* Dark Overlay with smooth top/bottom gradients */}
      <div className="absolute inset-0 bg-[#0b1220]/75 backdrop-blur-[2px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0b1220] to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none z-0" />
      {/* Background Blobs for Visual Interest */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-blue)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-bebas text-5xl md:text-7xl mb-6 text-white tracking-wide">
              Nosso Blog
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl">
              Fique por dentro das novidades e dicas sobre internet, tecnologia e segurança.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {posts.map((p) => (
            <article
              key={p.id}
              onClick={() => setSelectedPost(p)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0b1220]/60 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/30 flex flex-col"
            >
              <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden rounded-t-2xl bg-transparent">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <span className="text-sm font-bold text-[var(--brand-blue)] mb-4 tracking-wider uppercase">
                  {p.date}
                </span>
                <h3 className="font-bebas text-3xl md:text-4xl mb-4 text-white leading-snug group-hover:text-[var(--brand-blue)] transition-colors tracking-wide pt-1">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed mb-6 flex-1">
                  {p.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 font-bold text-white group-hover:text-[var(--brand-blue)] transition-colors mt-auto text-lg">
                  Ler post <ArrowRight size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-[100vw] w-screen h-screen p-0 m-0 overflow-y-auto bg-[#0b1220] border-0 flex flex-col rounded-none rounded-t-[2rem] md:rounded-none">
          <DialogTitle className="sr-only">{selectedPost?.title}</DialogTitle>
          <DialogDescription className="sr-only">{selectedPost?.excerpt}</DialogDescription>
          
          {selectedPost && (
            <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col pt-8 pb-32 px-6">
              <button 
                onClick={() => setSelectedPost(null)}
                className="self-end mb-8 flex items-center gap-2 text-slate-400 hover:text-white font-bold text-lg bg-white/10 px-6 py-3 rounded-full transition-colors"
              >
                Voltar <X size={24} />
              </button>
              
              <div className="w-full h-[400px] md:h-[550px] rounded-lg overflow-hidden mb-12 shadow-2xl relative">
                <img 
                  src={selectedPost.img} 
                  alt={selectedPost.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-8 md:p-12 w-full">
                    <span className="inline-block bg-[var(--brand-primary)] text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
                      {selectedPost.date}
                    </span>
                    <h3 className="font-bebas text-5xl md:text-7xl text-white leading-[0.9] max-w-4xl tracking-wide">
                      {selectedPost.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="w-full max-w-4xl mx-auto">
                <div className="text-slate-300 leading-relaxed font-medium">
                  {selectedPost.content}
                </div>
                
                <div className="mt-20 pt-10 border-t border-white/10">
                   <h4 className="font-bebas text-4xl mb-6 text-center text-white tracking-wide">Gostou deste artigo?</h4>
                   <div className="flex justify-center gap-4">
                      <button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white px-8 py-4 rounded-xl font-bebas text-2xl tracking-wide shadow-lg pt-5">
                        Conhecer Planos
                      </button>
                      <button onClick={() => setSelectedPost(null)} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bebas text-2xl tracking-wide shadow-sm pt-5">
                        Ler mais conteúdos
                      </button>
                   </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
