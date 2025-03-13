import { View } from 'react-native';
import Animated from 'react-native-reanimated'
import { Image, type ImageSource } from 'expo-image';

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    return (
        <View style={{ top: -350 }}>
            <Animated.Image
            source={atickerSource}
            resizeMode="contain"
            style={{width: imageSize, height: imageSize}}
        />    
        </View>
    );
}