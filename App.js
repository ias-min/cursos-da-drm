import { SafeAreaView, Text, StyleSheet } from 'react-native'

import { Cursos } from './components/Cursos'

export default function App() {
  return (
     <SafeAreaView>
      <Text style={styles.title}>Cursos disponíveis na escola</Text>
      <Text style={styles.title}>EEEP Deputado Roberto Mesquita</Text>
      <Text style={styles.subtitle}>Conheça os cursos disponíveis EEEP Deputado Robeto Mesquita e venha fazer parte da família DRM.</Text>

      < Cursos 
        albumName={'Desenvolvimento de Sistemas:'}
        descricao={'O curso Técnico em Desenvolvimento de Sistemas tem como objetivo formar profissionais capacitados para projetar, analisar, executar e testar aplicações ou programas para o processamento de informações. O profissional graduado no curso é responsável por analisar, projetar, documentar, testar, especificar, implementar e cuidar da manutenção de sistemas computacionais e softwares. O curso abrange disciplinas que vão desde linguagens de programação fundamentais até técnicas avançadas de gerenciamento de projetos de software.'}
      />

      < Cursos 
        albumName={'Redes de Computadores:'}
        descricao={'O curso Técnico em Redes de Computadores tem como objetivo formar profissionais atualizados com as tecnologias de redes existentes no mercado e capazes de desenvolver e implantar projetos, configurar e gerenciar ambientes de redes para otimizar o funcionamento de uma empresa, seja ela de pequeno, médio ou grande porte, com qualidade e segurança nos processamentos da comunicação de dados necessários para sua operação.'}
      />

      < Cursos 
        albumName={'Administração:'}
        descricao={'O curso Técnico em Administração é composta por disciplinas que oferecem uma visão geral do mundo dos negócios, como economia, contabilidade e direito. A parte específica é composta por disciplinas que se concentram em áreas específicas da Administração, como marketing, gestão de pessoas e operações.'}
      />

      < Cursos 
        albumName={'Finanças:'}
        descricao={'O curso Técnico em Finanças atua no registro e publicação de dados financeiros da empresa em que trabalha. Ele deve garantir a integridade dessas informações, respeitando leis e padrões éticos. Dessa forma, o técnico deve ter conhecimento sobre o funcionamento financeiro, valores e missão daquela organização.'}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 700,
    backgroundColor: '#1C680A'
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 15,

  }
})