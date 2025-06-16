import { Container, Typography, Button, Box } from '@mui/material';

interface SaintFrancisProps {
  onBack: () => void;
}

export default function SaintFrancis({ onBack }: SaintFrancisProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <img src="/saints/francisco.jpg" alt="São Francisco de Assis" style={{ width: 180, borderRadius: 12, marginBottom: 24 }} loading="lazy" />
      <Typography variant="h4" component="h2" gutterBottom align="center">
        São Francisco de Assis
      </Typography>
      <Typography variant="body1" paragraph>
        São Francisco de Assis (1182-1226) foi o fundador da Ordem dos Franciscanos e é conhecido por seu amor à pobreza, à natureza e aos animais. Renunciou à riqueza para viver o Evangelho de forma radical, dedicando-se aos pobres e marginalizados. Recebeu os estigmas de Cristo e é considerado o patrono da ecologia. Sua festa é celebrada em 4 de outubro.
      </Typography>
      <Typography variant="body2" paragraph>
        "Senhor, fazei-me instrumento de vossa paz."
      </Typography>
      <Button variant="outlined" sx={{ mt: 4 }} onClick={onBack} aria-label="Voltar">
        Voltar
      </Button>
    </Container>
  );
}
