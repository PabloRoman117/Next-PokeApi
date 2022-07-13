import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import pokeApi from '../../api/pokeApi';

interface Props {
    pokemonId: number;
}

const FavoriteCardPokemon : FC<Props> = ({pokemonId}) => {
    const router = useRouter();
    const onFavoriteClick = () => {
        //router .... pokemon .... id
        router.push(`/pokemon/${pokemonId}`);

    }


  return (
    <Grid onClick={onFavoriteClick} xs={6} sm={3} md={2} xl={1} key={pokemonId}>
    <Card  isHoverable css={{padding: 10}}> 
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        width={'100%'}
        height={'140px'}
      />

      
    </Card>
  </Grid>
  )
}

export default FavoriteCardPokemon