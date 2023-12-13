import { Grid, GridItem, VStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
        null
    );
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, //1024px
            }}
            templateColumns={{
                base: "1fr",
                lg: "15% 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        selectedGenre={selectedGenre}
                        onSelectedGenre={(genre) => setSelectedGenre(genre)}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <VStack alignItems={"start"} paddingX={10} paddingY={2}>
                    <PlatformSelector
                        selectedPlatform={selectedPlatform}
                        onSelectPlatform={(platform) =>
                            setSelectedPlatform(platform)
                        }
                    />
                </VStack>
                <GameGrid
                    selectedGenre={selectedGenre}
                    selectedPlatform={selectedPlatform}
                />
            </GridItem>
        </Grid>
    );
}

export default App;
