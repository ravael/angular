import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {FotoService} from '../foto/foto.service';
import {FotoComponent} from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService){

        this.service = service;

           // http.get('v1/fotos')
            //map transforma o objeto Observable<Response> que é retorno da requisição em json
           // .map(res => res.json())
            //subscribe se inscreve no retorno da requisição tranformado em json
           // .subscribe(fotos => {
                //o retorno ja transformado em json e atribuido a propriedade do component(fotos)
             //   this.fotos = fotos;
                //console.log(this.fotos);
            //}, erro => console.log(erro))

            service
                .lista()
                .subscribe(foto => {
                    this.fotos = foto;
                }, erro => console.log(erro))
        
    }

    remove(foto){
        this.service.remove(foto)
        .subscribe(() => {
            console.log('Foto removida com sucesso')
            
            let novasFotos = this.fotos.slice(0);
            let index = novasFotos.indexOf(foto);
            novasFotos.splice(index,1);
            this.fotos = novasFotos;  
            this.mensagem = 'Foto removida com sucesso!'
            
        },erro => console.log(erro));
    }

}