import { Container, Typography, Button, Box } from '@mui/material';
import ChurchIcon from '@mui/icons-material/Church';

interface HomeProps {
  onStartQuiz: () => void;
  onShowContent: () => void;
}

export default function Home({ onStartQuiz, onShowContent }: HomeProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <ChurchIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} aria-label="Ícone católico" />
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Bem-vindo ao Quiz Católico!
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Teste seus conhecimentos sobre a fé católica ou acesse conteúdos para aprender mais.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary" onClick={onStartQuiz} aria-label="Iniciar Quiz">
          Iniciar Quiz
        </Button>
        <Button variant="outlined" color="secondary" onClick={onShowContent} aria-label="Conteúdos Católicos">
          Conteúdos Católicos
        </Button>
      </Box>
    </Container>
  );
}
