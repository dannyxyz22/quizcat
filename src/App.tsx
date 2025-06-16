import { useState } from 'react'
import Home from './pages/Home'
import CatholicContent from './pages/CatholicContent'
import Prayers from './pages/content/Prayers'
import Saints from './pages/content/Saints'
import Catechism from './pages/content/Catechism'
import SaintFrancis from './pages/content/SaintFrancis'
import SaintTeresinha from './pages/content/SaintTeresinha'
import SaintJohnPaul from './pages/content/SaintJohnPaul'
import { Container, Typography, Card, CardContent, Button, Radio, RadioGroup, FormControlLabel, FormControl, LinearProgress, Box, Alert } from '@mui/material'

// Perguntas de exemplo
const questions = [
  {
    question: 'Qual é o maior mandamento?',
    options: [
      'Amar a Deus sobre todas as coisas',
      'Não matarás',
      'Guardar domingos e festas',
      'Honrar pai e mãe',
    ],
    answer: 0,
    explanation: 'Jesus disse que o maior mandamento é amar a Deus sobre todas as coisas.'
  },
  {
    question: 'Quem foi o primeiro Papa?',
    options: [
      'Paulo',
      'Pedro',
      'João',
      'Tiago',
    ],
    answer: 1,
    explanation: 'São Pedro foi o primeiro Papa da Igreja Católica.'
  },
  {
    question: 'Qual sacramento apaga o pecado original?',
    options: [
      'Crisma',
      'Eucaristia',
      'Batismo',
      'Ordem',
    ],
    answer: 2,
    explanation: 'O Batismo apaga o pecado original.'
  },
  {
    question: 'Quantos livros tem a Bíblia Católica?',
    options: [
      '66',
      '72',
      '73',
      '70',
    ],
    answer: 2,
    explanation: 'A Bíblia Católica possui 73 livros.'
  },
  {
    question: 'Qual é o nome da oração ensinada por Jesus?',
    options: [
      'Ave Maria',
      'Credo',
      'Pai Nosso',
      'Glória ao Pai',
    ],
    answer: 2,
    explanation: 'O Pai Nosso foi ensinado por Jesus aos discípulos.'
  },
  {
    question: 'Qual é o centro da fé católica?',
    options: [
      'A Bíblia',
      'A Eucaristia',
      'O Papa',
      'Os Santos',
    ],
    answer: 1,
    explanation: 'A Eucaristia é o centro da fé católica.'
  },
  {
    question: 'Quem é a mãe de Jesus?',
    options: [
      'Maria Madalena',
      'Maria',
      'Marta',
      'Isabel',
    ],
    answer: 1,
    explanation: 'Maria é a mãe de Jesus.'
  },
  {
    question: 'Qual é o nome do atual Papa (2025)?',
    options: [
      'Bento XVI',
      'João Paulo II',
      'Francisco',
      'Pio XII',
    ],
    answer: 2,
    explanation: 'O Papa Francisco é o atual Papa.'
  },
  {
    question: 'Qual é o primeiro livro da Bíblia?',
    options: [
      'Êxodo',
      'Gênesis',
      'Salmos',
      'Mateus',
    ],
    answer: 1,
    explanation: 'Gênesis é o primeiro livro da Bíblia.'
  },
  {
    question: 'Qual é o maior símbolo do cristianismo?',
    options: [
      'A cruz',
      'O peixe',
      'A pomba',
      'O cálice',
    ],
    answer: 0,
    explanation: 'A cruz é o maior símbolo do cristianismo.'
  },
]

function App() {
  const [screen, setScreen] = useState<'home' | 'quiz' | 'content' | 'prayers' | 'saints' | 'catechism' | 'saintFrancis' | 'saintTeresinha' | 'saintJohnPaul'>('home')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [finished, setFinished] = useState(false)

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(event.target.value))
  }

  const handleSubmit = () => {
    if (selected === null) return
    const isCorrect = selected === questions[current].answer
    if (isCorrect) {
      setScore(score + 1)
      setFeedback('Resposta correta! ' + questions[current].explanation)
    } else {
      setFeedback('Resposta incorreta. ' + questions[current].explanation)
    }
    setShowFeedback(true)
  }

  const handleNext = () => {
    setShowFeedback(false)
    setSelected(null)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }

  if (screen === 'home') {
    return <Home onStartQuiz={() => setScreen('quiz')} onShowContent={() => setScreen('content')} />
  }
  if (screen === 'content') {
    return <CatholicContent onNavigate={setScreen} onBack={() => setScreen('home')} />
  }
  if (screen === 'prayers') {
    return <Prayers onBack={() => setScreen('content')} />
  }
  if (screen === 'saints') {
    return <Saints onBack={() => setScreen('content')} onNavigate={setScreen} />
  }
  if (screen === 'catechism') {
    return <Catechism onBack={() => setScreen('content')} />
  }
  if (screen === 'saintFrancis') {
    return <SaintFrancis onBack={() => setScreen('saints')} />
  }
  if (screen === 'saintTeresinha') {
    return <SaintTeresinha onBack={() => setScreen('saints')} />
  }
  if (screen === 'saintJohnPaul') {
    return <SaintJohnPaul onBack={() => setScreen('saints')} />
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', maxWidth: 500 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ flex: 1 }}>
              Quiz Católico
            </Typography>
            <Button variant="text" color="secondary" onClick={() => setScreen('home')} aria-label="Voltar ao início" sx={{ ml: 2, fontWeight: 600 }}>
              Início
            </Button>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={finished ? 100 : ((current) / questions.length) * 100} 
            sx={{ mb: 2, width: '100%' }} 
            aria-label="Progresso do quiz" 
          />
          {!finished ? (
            <>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }} align="center">
                {questions[current].question}
              </Typography>
              <FormControl component="fieldset" sx={{ width: '100%' }} disabled={showFeedback}>
                <RadioGroup value={selected !== null ? selected : ''} onChange={handleSelect} aria-label="Opções de resposta">
                  {questions[current].options.map((option, idx) => (
                    <FormControlLabel key={option} value={idx} control={<Radio />} label={option} sx={{ width: '100%', margin: 0 }} />
                  ))}
                </RadioGroup>
              </FormControl>
              {showFeedback && (
                <Box sx={{ mt: 2, width: '100%' }}>
                  <Alert severity={feedback.startsWith('Resposta correta') ? 'success' : 'info'}>
                    {feedback}
                  </Alert>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                    <Button variant="contained" onClick={handleNext} aria-label="Próxima pergunta">
                      Próxima
                    </Button>
                  </Box>
                </Box>
              )}
              {!showFeedback && (
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                  <Button variant="contained" onClick={handleSubmit} disabled={selected === null} aria-label="Responder">
                    Responder
                  </Button>
                </Box>
              )}
            </>
          ) : (
            <Box textAlign="center">
              <Typography variant="h5" sx={{ mt: 2 }}>
                Você acertou {score} de {questions.length} perguntas!
              </Typography>
              <Button variant="outlined" sx={{ mt: 2 }} onClick={handleRestart} aria-label="Reiniciar quiz">
                Tentar novamente
              </Button>
              <Button variant="text" sx={{ mt: 2, ml: 2 }} onClick={() => setScreen('home')} aria-label="Voltar ao início">
                Voltar ao início
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  )
}

export default App
