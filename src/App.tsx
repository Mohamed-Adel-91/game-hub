import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import SiteName from "./components/SiteName";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectedGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area="main" paddingBottom={5}>
                <GameHeading gameQuery={gameQuery} />
                <HStack
                    justifyContent={"space-between"}
                    alignItems={"start"}
                    paddingX={10}
                    paddingY={2}
                >
                    <HStack>
                        <PlatformSelector
                            selectedPlatform={gameQuery.platform}
                            onSelectPlatform={(platform) =>
                                setGameQuery({ ...gameQuery, platform })
                            }
                        />
                        <SortSelector
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        />
                    </HStack>
                    <Show above="lg">
                        <SiteName />
                    </Show>
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
