import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image'
import NextLink  from 'next/link'
import React from 'react'

const Navbar = () => {

    const { theme} = useTheme()



  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'start',
        padding: '0 20px',
        backgroundColor: theme?.colors?.gray50.value,
    }}>

        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png"
            alt='pokemonImagen'
            width={70}
            height={70}
        />
        
        <NextLink href='/' passHref >
            <Link> 
              <Text color='white' h2>P</Text>
              <Text color='white' h3>okemon</Text>
            </Link>

        </NextLink>

        
        <Spacer css={{flex: 1}}/>

        <NextLink href='/favoritos' passHref > 
            <Link css={{marginRight: '10px'}}>
            <Text color='white' >Favoritos</Text>
            </Link>
        </NextLink>
        
    </div>
  )
}

export default Navbar