// src/components/StyledButton.js
import Button from '@mui/material/Button';

const StyledButton = ({ children, variant = 'contained', color = 'primary', type = 'submit' }) => (
    <Button type={type} variant={variant} color={color} fullWidth>
        {children}
    </Button>
);

export default StyledButton;

