import { Container, Typography, Button } from '@mui/material';

interface SaintTeresinhaProps {
  onBack: () => void;
}

export default function SaintTeresinha({ onBack }: SaintTeresinhaProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <img src="/saints/teresinha.jpg" alt="Santa Teresinha do Menino Jesus" style={{ width: 180, borderRadius: 12, marginBottom: 24 }} loading="lazy" />
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Santa Teresinha do Menino Jesus
      </Typography>
      <Typography variant="body1" paragraph>
        Santa Teresinha (1873-1897), carmelita francesa, é conhecida por sua "pequena via" de confiança e abandono total a Deus. Doutora da Igreja, escreveu o clássico "História de uma Alma" e é padroeira das missões. Sua festa é celebrada em 1º de outubro.
      </Typography>
      <Typography variant="body2" paragraph>
        "Quero passar meu céu fazendo o bem sobre a terra."
      </Typography>
      <Button variant="outlined" sx={{ mt: 4 }} onClick={onBack} aria-label="Voltar">
        Voltar
      </Button>
    </Container>
  );
}
