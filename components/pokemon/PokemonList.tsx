import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, {FC} from 'react'
import { SmallPokemon } from '../../interfaces/pokemon-list'

interface Props {
    pokemon: SmallPokemon
}


const PokemonList:FC <Props> = ({pokemon}) => {

  const router = useRouter()
  const onClickPokemon= () => {
    router.push(`/name/${pokemon.name}`)
  }

    const {name, id, img} = pokemon
  return (
    <Grid onClick={onClickPokemon}  xs={6} sm={3} md={2} xl={1} key={id} >
        <Card isHoverable    >
          <Card.Body css={{p: 1}}>
          <Card.Image src={img} width="100%" height={140} />
          
          </Card.Body>
          <Card.Footer>
              <Row justify='space-between'>
                <Text transform='capitalize'>{name}</Text>
                <Text>#{id}</Text>
              </Row>
          </Card.Footer>
        </Card>
      </Grid>
  )
}

export default PokemonList