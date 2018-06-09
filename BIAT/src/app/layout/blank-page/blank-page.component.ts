import { Component, OnInit, Input, SimpleChanges,ChangeDetectionStrategy, HostBinding, OnChanges  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProduitsService } from '../../../services/produits.service';
import { Produit } from '../../../model/model.produit';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { PaysService } from '../../../services/pays.service';
import { Pays } from '../../../model/model.pays';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    animations: [routerTransition()],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class BlankPageComponent implements OnInit,OnChanges  {

    pageProduits:any;
    pagePays:any;
    pays:Pays[];
    produit:Produit=new Produit();
    @Input() reference:number;
    cols: any[];

    constructor(public paysService:PaysService,public produitsService:ProduitsService,public router:Router,
        public activatedRoute:ActivatedRoute) {}

        ngOnInit(){
            console.log('OnInit');
            console.log(JSON.stringify(this.reference));
        this.getData();
        }

    ngOnChanges(changes: SimpleChanges) {

            console.log('OnChanges');
            console.log(JSON.stringify(this.reference));
        this.getData();
        }

        getData(){
             // this.reference=+this.activatedRoute.snapshot.params['reference'];
    this.activatedRoute.params.subscribe(params => this.reference = params['reference']);

    // Liste des Produits
    this.produitsService.getProduitByRef(this.reference)
    .subscribe(data=>{
      this.pageProduits = data;
      this.produit=data;
      console.log(this.pageProduits)
    },err=>{
      console.log(err);
    })


    this.cols = [
        { field: 'codePays', header: 'CODE PAYS' },
        { field: 'paysName', header: 'NOM PAYS' },
        { field: 'libelle', header: 'LIBELLE' },
    ];

    //Liste des Pays
    this.paysService.getPaysByRef(this.reference)
    .subscribe(data=>{
      this.pagePays=data;
      this.pays=[this.pagePays];

      //OU BIEN
      //this.pays=[this.pageProduits.pays]
      console.log(this.pagePays)
    },err=>{
      console.log(err);
    })
        }

        onEditProduit_Ref(reference:number){
            this.router.navigate(['/blank-page',reference]);
           // window.location.reload(true);
          }



}
