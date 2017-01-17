import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {Http, Headers} from '@angular/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FotoService} from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{

    foto = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;

    constructor(service: FotoService, fb: FormBuilder){
        this.service = service;
        this.meuForm = fb.group({
            titulo: ['',Validators.compose([Validators.required, Validators.minLength(4)])],
            url:['',Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event){
        event.preventDefault();

        console.log(this.foto);

        this.service.cadastra(this.foto)
        .subscribe(() =>{
            console.log('Foto cadastrada com sucesso!')
            this.foto = new FotoComponent();
        })

       
    }

    

}