import {
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data, error, isLoading } = useGenres();
    if (isLoading) return <Spinner />;
    if (error) return null;
    return (
        <>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack padding={1}>
                            <Image
                                boxSize={"32px"}
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontSize="lg"
                                variant="link"
                                textAlign="start"
                                colorScheme={
                                    genre.id === selectedGenre?.id
                                        ? "green"
                                        : "gray"
                                }
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                                onClick={() => onSelectedGenre(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
