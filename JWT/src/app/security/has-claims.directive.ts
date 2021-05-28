import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SecurityService } from './security.service';

@Directive({
  selector: '[hasClaims]'
})
export class HasClaimsDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private securityService: SecurityService) { 

      console.log('Has Claims Directive Constructed !!!');
    }

    @Input() set hasClaims(claimType: any) {
      if(this.securityService.hasClaim(claimType)){
        this.viewContainer.createEmbeddedView(this.templateRef)
      }else{
        this.viewContainer.clear();
      }
    }

}
