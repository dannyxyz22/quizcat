import { Container, Typography, Button } from '@mui/material';

interface PrayersProps {
  onBack: () => void;
}

export default function Prayers({ onBack }: PrayersProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Principais Orações
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>Pai Nosso</Typography>
      <Typography variant="body2" paragraph>
        Pai nosso que estais no céu, santificado seja o Vosso nome; venha a nós o Vosso reino; seja feita a Vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>Ave Maria</Typography>
      <Typography variant="body2" paragraph>
        Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>Glória ao Pai</Typography>
      <Typography variant="body2" paragraph>
        Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.
      </Typography>
      <Button variant="outlined" sx={{ mt: 4 }} onClick={onBack} aria-label="Voltar">
        Voltar
      </Button>
    </Container>
  );
}
