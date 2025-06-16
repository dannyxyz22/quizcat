import { Container, Typography, Button, Link } from '@mui/material';

interface CatechismProps {
  onBack: () => void;
}

export default function Catechism({ onBack }: CatechismProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Resumo do Catecismo
      </Typography>
      <Typography variant="body2" paragraph>
        O Catecismo da Igreja Católica apresenta a fé cristã em quatro partes principais:
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>1. Profissão de Fé</Typography>
      <Typography variant="body2" paragraph>
        Explica o Credo, os principais dogmas e verdades da fé católica.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>2. Os Sacramentos</Typography>
      <Typography variant="body2" paragraph>
        Apresenta os sete sacramentos instituídos por Cristo para a santificação dos fiéis.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>3. Vida em Cristo</Typography>
      <Typography variant="body2" paragraph>
        Trata dos mandamentos, moral cristã e vocação à santidade.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>4. A Oração Cristã</Typography>
      <Typography variant="body2" paragraph>
        Ensina sobre a importância da oração, especialmente o Pai Nosso.
      </Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Para saber mais, acesse o <Link href="https://catecismo.net/" target="_blank" rel="noopener">Catecismo online</Link>.
      </Typography>
      <Button variant="outlined" sx={{ mt: 4 }} onClick={onBack} aria-label="Voltar">
        Voltar
      </Button>
    </Container>
  );
}
