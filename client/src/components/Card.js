import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard({ pokemon, deletePokemon }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {pokemon.name}
                </Typography>
                <Typography variant="h7" component="h2">
                    {pokemon.pokemon}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {pokemon.type1} {pokemon.type2}
                </Typography>
                <Typography variant="body2" component="p">
                    {pokemon.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Update</Button>
                <Button size="small" onClick={deletePokemon(pokemon.pokemonID)}>Delete</Button>
            </CardActions>
        </Card>
    );
}