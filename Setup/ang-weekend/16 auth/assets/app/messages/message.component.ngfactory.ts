/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './message.component';
import * as i3 from './message.service';
const styles_MessageComponent:any[] = ['.author[_ngcontent-%COMP%] {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config[_ngcontent-%COMP%] {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }'];
export const RenderType_MessageComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_MessageComponent,data:{}});
function View_MessageComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'div',[['class',
      'config']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'a',([] as any[]),(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onEdit()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Edit'])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'a',([] as any[]),(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onDelete()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Delete'])),
      (_l()(),i0.ɵted((null as any),['\n        ']))],(null as any),(null as any));
}
export function View_MessageComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),13,'article',[['class',
      'panel panel-default']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'div',[['class','panel-body']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        ',
      '\n    '])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),7,'footer',[['class','panel-footer']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',[['class','author']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n            ','\n        '])),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_MessageComponent_1)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),
          i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i2.MessageComponent = _v.component;
    const currVal_2:any = _co.belongsToUser();
    _ck(_v,11,0,currVal_2);
  },(_ck,_v) => {
    var _co:i2.MessageComponent = _v.component;
    const currVal_0:any = _co.message.content;
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = _co.message.username;
    _ck(_v,8,0,currVal_1);
  });
}
export function View_MessageComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'app-message',
      ([] as any[]),(null as any),(null as any),(null as any),View_MessageComponent_0,
      RenderType_MessageComponent)),i0.ɵdid(49152,(null as any),0,i2.MessageComponent,
      [i3.MessageService],(null as any),(null as any))],(null as any),(null as any));
}
export const MessageComponentNgFactory:i0.ComponentFactory<i2.MessageComponent> = i0.ɵccf('app-message',
    i2.MessageComponent,View_MessageComponent_Host_0,{message:'message'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovWkdEQVRBL1ZDUy9Db25maWd1cmF0aW9uL01lYW4vQW5ndWxhciBKUy9Bbmd1bGFyMi9FeGFtcGxlcy9GaW5hbC9BdXRoL2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovWkdEQVRBL1ZDUy9Db25maWd1cmF0aW9uL01lYW4vQW5ndWxhciBKUy9Bbmd1bGFyMi9FeGFtcGxlcy9GaW5hbC9BdXRoL2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9aR0RBVEEvVkNTL0NvbmZpZ3VyYXRpb24vTWVhbi9Bbmd1bGFyIEpTL0FuZ3VsYXIyL0V4YW1wbGVzL0ZpbmFsL0F1dGgvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovWkdEQVRBL1ZDUy9Db25maWd1cmF0aW9uL01lYW4vQW5ndWxhciBKUy9Bbmd1bGFyMi9FeGFtcGxlcy9GaW5hbC9BdXRoL2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMuTWVzc2FnZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fVxuICAgIDwvZGl2PlxuICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAge3sgbWVzc2FnZS51c2VybmFtZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiICpuZ0lmPVwiYmVsb25nc1RvVXNlcigpXCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPlxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuPC9hcnRpY2xlPiIsIjxhcHAtbWVzc2FnZT48L2FwcC1tZXNzYWdlPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDUVE7TUFBQTtNQUE0QyxtREFDeEM7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFHO2NBQUE7Y0FBQTtZQUFBO1lBQUg7VUFBQSxnQ0FBc0I7TUFBUSxtREFDOUI7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFHO2NBQUE7Y0FBQTtZQUFBO1lBQUg7VUFBQSxnQ0FBd0I7TUFBVTs7O29CQVY5QztNQUFBO01BQUEsZ0JBQXFDLDJDQUNqQztNQUFBO01BQUEsNENBQXdCO01BQUEsWUFFbEIsMkNBQ047TUFBQTtNQUFBLDRDQUE2QjtNQUN6QjtVQUFBLDBEQUFvQjtVQUFBLGtDQUVkO01BQ047YUFBQTtVQUFBLHdCQUdNLDJDQUNEO2lCQUFBOztJQUplO0lBQXBCLFlBQW9CLFNBQXBCOzs7SUFQb0I7SUFBQTtJQUlBO0lBQUE7Ozs7b0JDTDVCO01BQUE7aUNBQUEsVUFBQTtNQUFBOzs7In0=