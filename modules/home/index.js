import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, ScrollView, Image} from 'react-native';
import styled from 'styled-components/native';
import useDebounce from '../hooks/useDebounce';
import { fetchImages, searchImages } from './actions';

const StyledView = styled(View)`
background: rgb(29,31,39);
flex: 1;
align-items: center;
justify-content: space-around;
padding-top: 30px;
`;
const StyledText = styled(Text)`
color: #bbb;
font-size: 30px;
text-align: center;
`;

const StyledTextInput = styled(TextInput)`
border-radius: 5px;
color: #fff;
background: #bbb;
width: 80%;
height: 40px;
margin: 20px 0;
`;

const ImageCard = styled(View)`
width: 100%;
height: 304px;
flex: 1;
flex-direction: column;
margin-top: 20px;
border: solid 2px ${props => props.color || '#fff'};
border-radius: 10px;
`;


const StyledImage = styled(Image)`
width: 100%;
height: 200px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;
const CardFooter = styled(View)`
background-color: #fff;
width: 100%;
height: 100px;
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;
padding: 5px;

`;

const ImagesContainer = styled(ScrollView)`
flex: 1;
flex-direction: column;
width: 100%;
height: 100%;
`;

const StyledTitle = styled(Text)`
font-size: 20px;
font-weight: 600;
color: #bbb;
margin-top: 5px;
`;
const StyledSmallText = styled(Text)`
font-size: 15px;
font-weight: 400;
color: #bbb;
margin-top: 5px;
`;
const StyledErrorText = styled(Text)`
font-size: 15px;
font-weight: 400;
color: red;
margin-top: 5px;
`;

const Home = () => {
    const [name, setName] = useState('');
    const [images, setImages] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
 const searchDebounce = useDebounce(search, 1000);

 const fetchAllImages = () => {
    fetchImages().then(data => setImages(data));
 }
    useEffect(() =>{
        fetchAllImages();
    }, []);

    useEffect(() =>{
        if(searchDebounce){
searchImages(searchDebounce).then((data) => {
    if(data.results.length > 0){
        setImages(data.results);
        setError(null);
    }else{
setError("Sorry, we didn't find images related to your search");
fetchAllImages();
    }
});
}
}, [searchDebounce]);

    return(
        <StyledView>
            <StyledText>
                Welcome to search Images
            </StyledText>
            <StyledSmallText>
                Type below to search images
            </StyledSmallText>
            {error && (
                <StyledErrorText>
                {error}
            </StyledErrorText>
            )}
                <StyledTextInput onChangeText={(text) => setSearch(text)} value={search} />    
            <ImagesContainer contentContainerStyle={{justifyContent: 'space-around', alignItems:'center'}}>
                    {images.length > 0 && images.map(image => (
                        <ImageCard color={image.color}  key={image.id}>
                        <StyledImage source={{uri: image.urls.small }} />
                    <CardFooter>
                        <StyledTitle>
                            {`User: ${image.user.name}`}
                        </StyledTitle>
                        <StyledSmallText>
                            {`Likes: ${image.likes}`}
                        </StyledSmallText>
                    </CardFooter>
                </ImageCard>
                    )).slice(0,10)}
                    </ImagesContainer>

        </StyledView>
    )
}

export default Home;