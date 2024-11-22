import { HttpClient } from '@angular/common/http';  
import { Component, OnInit } from '@angular/core';  
import { ActivatedRoute } from '@angular/router';  


@Component({  
  selector: 'app-card',  
  templateUrl: './card.component.html',  
  styleUrl: './card.component.css'  
  
})  
export class CardComponent implements OnInit {  
  // Define la clase del componente que implementa la interfaz `OnInit` para manejar la inicialización.

  pokemon: any;  
  // Declara una variable `pokemon` para almacenar los datos del Pokémon que se obtendrán desde la API.

  constructor(private route: ActivatedRoute, private http: HttpClient) {}  
  // Constructor del componente que inyecta `ActivatedRoute` para manejar rutas activas y `HttpClient` para las solicitudes HTTP.

  ngOnInit() {  
    // Método del ciclo de vida que se ejecuta al inicializar el componente.
    this.route.params.subscribe(params => {  
      // Se suscribe a los parámetros de la ruta activa para obtener los datos dinámicos (por ejemplo, ID del Pokémon).
      const id = params['id'];  
      // Obtiene el parámetro `id` desde la URL.
      this.fetchPokemonDetails(id);  
      // Llama al método para obtener los detalles del Pokémon correspondiente al ID.
    });  
  }  

  fetchPokemonDetails(id: number) {  
    // Método que realiza una solicitud HTTP para obtener los detalles de un Pokémon específico.
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)  
    // Realiza una solicitud GET a la API de Pokémon, construyendo dinámicamente la URL con el `id`.

      .subscribe(  
        (response: any) => {  
          // Si la solicitud es exitosa:
          this.pokemon = response;  
          // Asigna la respuesta completa del servidor (detalles del Pokémon) a la variable `pokemon`.
        },  
        (error) => {  
          // Si ocurre un error en la solicitud:
          console.error('Error fetching Pokemon details:', error);  
          // Muestra un mensaje de error en la consola.
        }  
      );  
  }  
}  
