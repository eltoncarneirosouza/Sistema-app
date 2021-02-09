import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Refeicao } from 'src/app/model/refeicao.model';
import { RefeicaoService } from 'src/app/service/refeicao.service';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.component.html',
  styleUrls: ['./refeicao.component.css']
})
export class RefeicaoComponent implements OnInit {
Refeicoes: Refeicao[] = [];

public refeicaoForm: FormGroup = new FormGroup({
  nome: new FormControl(''),
  categoria: new FormControl(''),
  area: new FormControl(''),
  imagem: new FormControl(''),
  instrucoes: new FormControl('')
});

  constructor(
    private rest: RefeicaoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.refeicaoForm = this.formBuilder.group({
      nome:['', [Validators.required]],
      categoria:['', [Validators.required]],
      area:['', [Validators.required]],
      imagem:['', [Validators.required]],
      instrucoes:['', [Validators.required]]
    });
    this.refeicoesLista();   
  }

  salvarRefeicao(){
    console.log('Refeicoes:' + this.refeicaoForm.value);
    this.rest.postRefeicao(this.refeicaoForm.value).subscribe(result => {});
    this.refeicaoForm.reset();
    this.load();
  }

  refeicoesLista(){
    this.rest.getRefeicao().subscribe(data =>{
      this.Refeicoes = data.content;
      console.log(this.Refeicoes);
    });        
  }

  load() {
    location.reload()
  }

}
