import { CircularProgress, Stack, Typography } from '@mui/material';

const LoadingSpinner = ({
  LoadingText = 'loading...',
}: {
  LoadingText?: string;
}) => {
  return (
    <Stack spacing={2} my={4}>
      <CircularProgress size={40} />
      <Typography>{LoadingText}</Typography>
    </Stack>
  );
};

export default LoadingSpinner;
