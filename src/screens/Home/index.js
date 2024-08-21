
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardMovies';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Filmes from '../../data/movies';
import {useEffect,useState} from 'react';

export default function App() {
   
       const[movies, setMovies] = useState();



       useEffect(()=>{

        async function buscarFilmes(){
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8b6ea0bdb456281e98b6995b6e96e0ef&language=pt-BR-US&page=1%27')
        const data = await response.json()
        console.log(data.results)
        }

        buscarFilmes();

       },[])

       
  return (
    <View style={styles.container}>
     <Header></Header>

     <SearchBar></SearchBar>

     <BannerMovies></BannerMovies>
     
    
     <View style = {{width :"90%"}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Filmes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              
              <CardMovies
                titulo={item.nome}
                imagem={item.imagem}
                nota={item.nota}
              />
            )}
          />
        </View>
    
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:'center'
    
    
  },
});
