import { Container, Typography, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface SaintsProps {
  onBack: () => void;
  onNavigate: (page: 'saintFrancis' | 'saintTeresinha' | 'saintJohnPaul') => void;
}

export default function Saints({ onBack, onNavigate }: SaintsProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Santos da Igreja
      </Typography>
      <List sx={{ width: '100%', maxWidth: 400 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate('saintFrancis')} aria-label="São Francisco de Assis" sx={{ borderRadius: 2, mb: 1, bgcolor: '#30334a', '&:hover': { bgcolor: '#394272' } }}>
            <ListItemText primary={<Typography sx={{ color: '#ffd600', fontWeight: 600 }}>São Francisco de Assis</Typography>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate('saintTeresinha')} aria-label="Santa Teresinha do Menino Jesus" sx={{ borderRadius: 2, mb: 1, bgcolor: '#30334a', '&:hover': { bgcolor: '#394272' } }}>
            <ListItemText primary={<Typography sx={{ color: '#ffd600', fontWeight: 600 }}>Santa Teresinha do Menino Jesus</Typography>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate('saintJohnPaul')} aria-label="São João Paulo II" sx={{ borderRadius: 2, mb: 1, bgcolor: '#30334a', '&:hover': { bgcolor: '#394272' } }}>
            <ListItemText primary={<Typography sx={{ color: '#ffd600', fontWeight: 600 }}>São João Paulo II</Typography>} />
          </ListItemButton>
        </ListItem>
      </List>
      <Button variant="outlined" sx={{ mt: 4 }} onClick={onBack} aria-label="Voltar">
        Voltar
      </Button>
    </Container>
  );
}
