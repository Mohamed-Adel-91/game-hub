import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";

export interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent={"space-between"}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                        key={game.id}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize={"2xl"}>
                    {game.name}
                    <Emojis rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
