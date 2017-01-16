import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: Object[] = [];

    constructor(http:Http){

            http.get('v1/fotos')
            //map transforma o objeto Observable<Response> que é retorno da requisição em json
            .map(res => res.json())
            //subscribe se inscreve no retorno da requisição tranformado em json
            .subscribe(fotos => {
                //o retorno ja transformado em json e atribuido a propriedade do component(fotos)
                this.fotos = fotos;
                //console.log(this.fotos);
            }, erro => console.log(erro))
        
    }

}