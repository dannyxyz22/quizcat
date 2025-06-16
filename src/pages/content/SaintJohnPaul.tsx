import { Container, Typography, Button } from '@mui/material';

interface SaintJohnPaulProps {
  onBack: () => void;
}

export default function SaintJohnPaul({ onBack }: SaintJohnPaulProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <img src="/saints/joaopaulo.jpg" alt="São João Paulo II" style={{ width: 180, borderRadius: 12, marginBottom: 24 }} loading="lazy" />
      <Typography variant="h4" component="h2" gutterBottom align="center">
        São João Paulo II
      </Typography>
      <Typography variant="body1" paragraph>
        São João Paulo II (1920-2005) foi Papa de 1978 a 2005, um dos mais influentes do século XX. Defensor da dignidade humana, da juventude e da família, sobreviveu a um atentado e promoveu o diálogo inter-religioso. Beatificou e canonizou milhares de pessoas. Sua festa é celebrada em 22 de outubro.
      </Typography>
      <Typography variant="body2" paragraph>
        "Não tenhais medo! Abri, antes, escancarai as portas a Cristo!"
      </Typography>
      <Button variant="outlined" sx={{ mt: 4 }} onClick={onBack} aria-label="Voltar">
        Voltar
      </Button>
    </Container>
  );
}
