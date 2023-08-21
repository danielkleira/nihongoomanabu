import CardItemTraining from "../cards/cardTraining"
import katakana from '../../utils/katakana.json';
import hiragana from '../../utils/hiragana.json';
import { useContext } from 'react';
import { PageStateContext } from '../../providers/pageStates';
import Grid from '@mui/material/Grid';


export const ModelTraining = () => {
    const { language } = useContext(PageStateContext)
    const KatakanaList = katakana.slice().sort(() => Math.random() - 0.5).slice(0, 8);
    const HiraganaList = hiragana.slice().sort(() => Math.random() - 0.5).slice(0, 8);
    let itemsToShow: any = [];
    if (language === 'katakana') {
        itemsToShow = KatakanaList.map((item) => ({
            response: item.trad,
            image: item.image,
            id: item.id
        }));
    } else if (language === 'hiragana') {
        itemsToShow = HiraganaList.map((item) => ({
            response: item.trad,
            image: item.image,
            id: item.id
        }));
    }

    return (
        <>
            return (
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={3}>
                        {itemsToShow.map((item: any, index: any) => (
                            <Grid key={item.id} item>
                                <CardItemTraining key={item.id} response={item.response} image={item.image} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            );
        </>
    );
}
