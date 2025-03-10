import { Grid, GridItem, Show } from '@chakra-ui/react'

const App = () => {
  return (
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="red"> nav</GridItem>
      <Show above='lg'>
        <GridItem area="aside" bg="gold"> asid</GridItem>
      </Show>
      <GridItem area="main" bg="blue"> main</GridItem>
    </Grid>
  )
}

export default App