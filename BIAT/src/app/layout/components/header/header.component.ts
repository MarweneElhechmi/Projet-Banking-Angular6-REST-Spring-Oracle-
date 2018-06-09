import { Component, OnInit, Input, SimpleChanges, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute,ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../../../model/model.user';
import { AuthService } from '../../../../services/auth.service';
import { ProduitsService } from '../../../../services/produits.service';
import { Produit } from '../../../../model/model.produit';
import { BlankPageComponent } from '../../blank-page/blank-page.component';
import { NgModel } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { BlankPageModule } from '../../blank-page/blank-page.module';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    currentUser:User;
    pageProduits:any;
    produit:Produit=new Produit();
    referenceProd : number;
    path:String;
    pathPage:String;
    href:String;
    hrefPage:String;
    session : String;
    @Input() blankPage: BlankPageComponent;

    constructor(public authService: AuthService,
        public produitsService:ProduitsService,
         private translate: TranslateService, public router: Router,
         public activatedRoute:ActivatedRoute) {

        this.currentUser=JSON.parse(localStorage.getItem('currentUser'))

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {}

      onEditProduit_Ref(reference:number){
        this.router.navigate(['/blank-page',reference]);
        this.router.navigateByUrl('/blank-page/'+`${reference}`);

        console.log(localStorage.getItem('reference'));

         this.path= location.pathname;
          this.pathPage="/blank-page/"+sessionStorage.getItem('reference');

        if((this.path)===(this.pathPage)){
            console.log("Hello")
            var x = location.pathname;
            window.location.reload(true);
        }

        this.session=sessionStorage.getItem('reference')
        this.href=location.href;
        this.hrefPage="http://localhost:4200/blank-page/"+reference;

        if((this.href)!==(this.hrefPage)){
            console.log("Hello href")
            var y = location.href;
            // this.session renferme dedans l'ancienne valeur de reference
            // On va tester la valeur si elle est vide ou non
            // if(this.session) : c àd [ (this.session)!=null ]
            if(this.session){
            window.location.reload(true);
        }
        }
        sessionStorage.setItem('reference', `${reference}`);
        }





    onEditProduit(reference){
        this.router.navigate(['/produits-new',reference]);
      }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    // login out from the app
  logOut() {
    this.authService.logOut()

          this.router.navigate(['/login']);

  }
}
