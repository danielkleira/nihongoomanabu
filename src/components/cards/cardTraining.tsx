import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

interface CardItemProps {
    image: string;
    response: string;
}

export default function CardItemTraining({ image, response }: CardItemProps) {
    const [inputValue, setInputValue] = useState('');
    const [cardColor, setCardColor] = useState('#eeeeee');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);

        if (newValue.toLocaleLowerCase() === response) {
            setCardColor('#b6d7a8');
        } else {
            setCardColor('#ea9999');
        }
    };

    return (
        <Card sx={{ maxWidth: 200, backgroundColor: cardColor }}>
            <CardMedia
                component="div" // Use div como componente para aplicar o estilo de flex
                sx={{
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={image}
                    alt="Image"
                    style={{ maxWidth: '90%', maxHeight: '90%' }}
                />
            </CardMedia>
            <CardContent>
                <TextField
                    label="Input"
                    variant="outlined"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </CardContent>
        </Card>
    );
}