import Link from 'next/link';
import { Box, Typography, Link as MuiLink } from '@mui/material';

export default function NotFound() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Not Found
      </Typography>
      <Typography paragraph>Could not find requested resource</Typography>
      <MuiLink
        component={Link}
        href="/"
        sx={{
          fontFamily: 'var(--font-roboto)',
        }}
      >
        Go Home
      </MuiLink>
    </Box>
  );
}
