import React, { useState } from 'react';
// material
import { Box, Card, Container, Stack, Typography, CardHeader, Button } from '@mui/material';
// components
import { Navigate, useNavigate } from 'react-router';
import Page from '../components/Page';

export default function Profile() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState(JSON.parse(localStorage.getItem('userData')).username);
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem('userData')).email);

  return (
    <Page title="Dashboard: Profile | UNIR">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Profil von {username}
          </Typography>
        </Stack>
        <Card>
          <CardHeader title="Zugangsdaten" />
          <Box sx={{ px: 3, py: 1 }}>
            <Typography variant="h7" gutterBottom>
              Benutzername:
            </Typography>
          </Box>
          <Box sx={{ px: 3, py: 1 }}>{username}</Box>
          <Box sx={{ px: 3, py: 1 }}>
            <Typography variant="h7" gutterBottom>
              E-Mail-Adresse:
            </Typography>
          </Box>
          <Box sx={{ px: 3, py: 1 }}>{email}</Box>
          {/* <Button
            sx={{ px: 3, py: 1 }}
            onClick={() => {
              navigate('/change', { replace: true });
            }}
          >
            Password ändern
          </Button> */}
        </Card>
      </Container>
    </Page>
  );
}
