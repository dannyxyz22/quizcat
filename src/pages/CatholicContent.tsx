import { Container, Typography, Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface CatholicContentProps {
  onNavigate: (page: 'prayers' | 'saints' | 'catechism') => void;
  onBack: () => void;
}

export default function CatholicContent({ onNavigate, onBack }: CatholicContentProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Conteúdos Católicos
      </Typography>
      <List sx={{ width: '100%', maxWidth: 400 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate('prayers')} aria-label="Principais Orações" sx={{ borderRadius: 2, mb: 1, bgcolor: '#30334a', '&:hover': { bgcolor: '#394272' } }}>
            <ListItemText primary={<Typography sx={{ color: '#ffd600', fontWeight: 600 }}>Principais Orações</Typography>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate('saints')} aria-label="Santos da Igreja" sx={{ borderRadius: 2, mb: 1, bgcolor: '#30334a', '&:hover': { bgcolor: '#394272' } }}>
            <ListItemText primary={<Typography sx={{ color: '#ffd600', fontWeight: 600 }}>Santos da Igreja</Typography>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate('catechism')} aria-label="Resumo do Catecismo" sx={{ borderRadius: 2, mb: 1, bgcolor: '#30334a', '&:hover': { bgcolor: '#394272' } }}>
            <ListItemText primary={<Typography sx={{ color: '#ffd600', fontWeight: 600 }}>Resumo do Catecismo</Typography>} />
          </ListItemButton>
        </ListItem>
      </List>
      <Button variant="outlined" sx={{ mt: 4 }} onClick={onBack} aria-label="Voltar ao início">
        Voltar ao início
      </Button>
    </Container>
  );
}
