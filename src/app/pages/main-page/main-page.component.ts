import { Component, OnInit } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { environment } from '../../../environments/environment.development';  

@Component({  
  selector: 'app-main-page',  
  templateUrl: './main-page.component.html',  
  styleUrl: './main-page.component.css'  
})  
export class MainPageComponent implements OnInit {  
  // Define la clase del componente, que implementa la interfaz `OnInit` para el ciclo de vida.

  pokemons: any[] = [];  
  // Declara una lista para almacenar los datos de los Pokémon obtenidos desde la API.

  isLoading: boolean = true;  
  // Define una variable booleana para indicar si los datos están cargándose.

  constructor(private http: HttpClient) {}  
  // El constructor inyecta el servicio `HttpClient` para usarlo en las peticiones HTTP.

  ngOnInit() {  
    // Método del ciclo de vida que se ejecuta cuando el componente se inicializa.
    this.fetchPokemonData();  
    // Llama al método para obtener los datos de los Pokémon al iniciar el componente.
  }  

  fetchPokemonData() {  
    // Método para realizar una petición HTTP y obtener los datos de Pokémon.
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=70&offset=0')  
    // Hace una solicitud GET a la API de Pokémon con un límite de 20 resultados.
      .subscribe(  
        (response: any) => {  
          // Si la solicitud tiene éxito:
          this.pokemons = response.results;  
          // Asigna los resultados obtenidos a la lista `pokemons`.

          this.isLoading = false;  
          // Cambia `isLoading` a false para indicar que los datos ya se cargaron.
        },  
        (error) => {  
          // Si ocurre un error en la solicitud:
          console.error('Error fetching Pokemon data:', error);  
          // Imprime el error en la consola.

          this.isLoading = false;  
          // Cambia `isLoading` a false incluso si hay un error.

          // Agrega lógica para reintentar la solicitud:
          this.fetchPokemonData();  
          // Llama nuevamente al método para reintentar obtener los datos (puede causar bucles si no se maneja correctamente).
        }  
      );  
  }  

  getPokemonId(url: string): number {  
    // Método para extraer el ID del Pokémon desde la URL de su detalle.
    const parts = url.split('/');  
    // Divide la URL en partes separadas por el carácter '/'.

    return parseInt(parts[parts.length - 2], 10);  
    // Convierte a número la penúltima parte de la URL (que es el ID del Pokémon).
  }  
}  





  //pokemonData: any;  
  //isLoading: boolean = true;  

  //constructor(private http: HttpClient) {}  

  //ngOnInit() {  
    //this.fetchPokemonData();  
  //}  

  //fetchPokemonData() {  
    //this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')  
      //.subscribe(  
        //response => {  
          //this.pokemonData = response;  
          //this.isLoading = false;  
        //},  
        //error => {  
          //console.error('Error fetching Pokemon data:', error);  
          //this.isLoading = false;  
        //}  
      //);  
  //}  
 