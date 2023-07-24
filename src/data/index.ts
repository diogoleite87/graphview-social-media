import Graph from './graph.json'
import GraphColored from './graph_colored.json'
import GraphColoredByBond from './graph_colored_by_bond.json'
import BolsonaroCiroColoredByBond from './bolsonaro_ciro_colored_by_bond.json'
import LulaBolsonaroCiroColoredByBond from './lula_bolsonaro_ciro_colored_by_bond.json'
import LulaBolsonaroColoredByBond from './lula_bolsonaro_colored_by_bond.json'
import LulaCiroColoredByBond from './lula_ciro_colored_by_bond.json'
import P2PGnutella08 from './p2p_gnutella_08.json'
import TwitterNetworkCongressUS from './twitter_network_congress_us.json'

const Dataset = [
    {
        "id": 1,
        "title": "Análise das Conexões Políticas no Twitter: Quem Segue Quem?",
        "body": "Este projeto tem como objetivo investigar e analisar as conexões políticas presentes na plataforma do Twitter, com foco específico em entender a relação de 'quem segue quem' entre políticos e outras figuras públicas relevantes, por meio da mineração de dados do Twitter. O objetivo é mapear as conexões de seguidores entre diferentes atores políticos e identificar padrões de interação.",
        "createdAt": "19/07/2023",
        "credits": "https://github.com/diogoleite87",
        "graphData": Graph
    },
    {
        "id": 2,
        "title": "Análise das Conexões Políticas no Twitter: Quem Segue Quem? - Ideologias Coloridas",
        "body": "Este projeto tem como objetivo investigar e analisar as conexões políticas presentes na plataforma do Twitter, com foco específico em entender a relação de 'quem segue quem' entre políticos e outras figuras públicas relevantes, por meio da mineração de dados do Twitter. O objetivo é mapear as conexões de seguidores entre diferentes atores políticos e identificar padrões de interação. Os nós são coloridos de acordo com a ideologia definida para cada um dos políticos representados, sendo azul para afiliados a ideologia de 'direita', branco para 'centro' e vermelho para 'esquerda'.",
        "createdAt": "19/07/2023",
        "credits": "https://github.com/diogoleite87",
        "graphData": GraphColored
    },
    {
        "id": 3,
        "title": "Análise das Conexões Políticas no Twitter: Quem Segue Quem? - Ideologias Coloridas com Intensidade de Vínculo",
        "body": "Este projeto tem como objetivo investigar e analisar as conexões políticas presentes na plataforma do Twitter, com foco específico em entender a relação de 'quem segue quem' entre políticos e outras figuras públicas relevantes, por meio da mineração de dados do Twitter. O objetivo é mapear as conexões de seguidores entre diferentes atores políticos e identificar padrões de interação. Os nós são coloridos de acordo com a intensidade de vínculo dada a ideologia definida para cada um dos políticos representados, sendo azul para afiliados a ideologia de 'direita', branco para 'centro' e vermelho para 'esquerda'.",
        "createdAt": "19/07/2023",
        "credits": "https://github.com/diogoleite87",
        "graphData": GraphColoredByBond
    },
    {
        "id": 4,
        "title": "Análise das Conexões Políticas no Twitter: Quem Segue Ciro Gomes e Jair Bolsonaro? - Ideologias Coloridas com Intensidade de Vínculo",
        "body": "Este projeto tem como objetivo investigar e analisar as conexões políticas presentes na plataforma do Twitter, com foco específico em entender a relação de 'quem segue Ciro Gomes e/ou Jair Bolsonaro' entre políticos e outras figuras públicas relevantes, por meio da mineração de dados do Twitter. O objetivo é mapear as conexões de seguidores entre diferentes atores políticos e identificar padrões de interação. Os nós são coloridos de acordo com a intensidade de vínculo dada a ideologia definida para cada um dos políticos representados, sendo azul para afiliados a ideologia de 'direita', branco para 'centro' e vermelho para 'esquerda'.",
        "createdAt": "19/07/2023",
        "credits": "https://github.com/diogoleite87",
        "graphData": BolsonaroCiroColoredByBond
    },
    {
        "id": 5,
        "title": "Análise das Conexões Políticas no Twitter: Quem Segue Ciro Gomes, Jair Bolsonaro e Lula? - Ideologias Coloridas com Intensidade de Vínculo",
        "body": "Este projeto tem como objetivo investigar e analisar as conexões políticas presentes na plataforma do Twitter, com foco específico em entender a relação de 'quem segue Ciro Gomes, Jair Bolsonaro e/ou Lula' entre políticos e outras figuras públicas relevantes, por meio da mineração de dados do Twitter. O objetivo é mapear as conexões de seguidores entre diferentes atores políticos e identificar padrões de interação. Os nós são coloridos de acordo com a intensidade de vínculo dada a ideologia definida para cada um dos políticos representados, sendo azul para afiliados a ideologia de 'direita', branco para 'centro' e vermelho para 'esquerda'.",
        "createdAt": "19/07/2023",
        "credits": "https://github.com/diogoleite87",
        "graphData": LulaBolsonaroCiroColoredByBond
    },
    {
        "id": 6,
        "title": "Análise das Conexões Políticas no Twitter: Quem Segue Jair Bolsonaro e Lula? - Ideologias Coloridas com Intensidade de Vínculo",
        "body": "Este projeto tem como objetivo investigar e analisar as conexões políticas presentes na plataforma do Twitter, com foco específico em entender a relação de 'quem segue Jair Bolsonaro e/ou Lula' entre políticos e outras figuras públicas relevantes, por meio da mineração de dados do Twitter. O objetivo é mapear as conexões de seguidores entre diferentes atores políticos e identificar padrões de interação. Os nós são coloridos de acordo com a intensidade de vínculo dada a ideologia definida para cada um dos políticos representados, sendo azul para afiliados a ideologia de 'direita', branco para 'centro' e vermelho para 'esquerda'.",
        "createdAt": "19/07/2023",
        "credits": "https://github.com/diogoleite87",
        "graphData": LulaBolsonaroColoredByBond
    },
    {
        "id": 7,
        "title": "Análise das Conexões Políticas no Twitter: Quem Segue Ciro Gomes e Lula? - Ideologias Coloridas com Intensidade de Vínculo",
        "body": "Este projeto tem como objetivo investigar e analisar as conexões políticas presentes na plataforma do Twitter, com foco específico em entender a relação de 'quem segue Ciro Gomes e/ou Lula' entre políticos e outras figuras públicas relevantes, por meio da mineração de dados do Twitter. O objetivo é mapear as conexões de seguidores entre diferentes atores políticos e identificar padrões de interação. Os nós são coloridos de acordo com a intensidade de vínculo dada a ideologia definida para cada um dos políticos representados, sendo azul para afiliados a ideologia de 'direita', branco para 'centro' e vermelho para 'esquerda'.",
        "createdAt": "19/07/2023",
        "credits": "https://github.com/diogoleite87",
        "graphData": LulaCiroColoredByBond
    },
    {
        "id": 8,
        "title": "Rede peer-to-peer Gnutella",
        "body": "Uma sequência de instâncias da rede de compartilhamento de arquivos peer-to-peer Gnutella de agosto de 2002. Há um total de 9 instantâneos da rede Gnutella coletados em agosto de 2002. Os nós representam hospedeiros na topologia da rede Gnutella, e as conexões entre os hospedeiros são representadas pelas arestas. Disponivel em: http://snap.stanford.edu/data/p2p-Gnutella08.html",
        "createdAt": "08/08/2002",
        "credits": "M. Ripeanu and I. Foster and A. Iamnitchi. Mapping the Gnutella Network: Properties of Large-Scale Peer-to-Peer Systems and Implications for System Design. IEEE Internet Computing Journal, 2002.",
        "graphData": P2PGnutella08
    },
    {
        "id": 9,
        "title": "Rede de Interação no Twitter para o Congresso dos Estados Unidos",
        "body": "Essa rede representa a Rede de Interação no Twitter para o 117º Congresso dos Estados Unidos, que inclui a Câmara dos Representantes e o Senado. Os dados base foram coletados por meio da API do Twitter e, em seguida, as probabilidades empíricas de transmissão foram quantificadas de acordo com a fração de vezes que um membro retweetou, citou, respondeu ou mencionou o tweet de outro membro. Consulte a publicação para mais detalhes. Disponivel em: http://snap.stanford.edu/data/congress-twitter.html",
        "createdAt": "28/07/2023",
        "credits": "C.G. Fink, N. Omodt, S. Zinnecker, and G. Sprint: A Congressional Twitter network dataset quantifying pairwise probability of influence. Data in Brief, 2023",
        "graphData": TwitterNetworkCongressUS
    },
]

export default Dataset;